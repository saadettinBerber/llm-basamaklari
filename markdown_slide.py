#!/usr/bin/env python3
"""
markdown_slide.py — slayt için küçük Markdown→HTML çevirici (sıfır bağımlılık).

Amaç, tam CommonMark değil; bir sunum slaytında gereken dar kümedir:
    # Başlık          → <h2 class="md-h1">
    ## Alt başlık     → <h3 class="md-h2">
    - madde           → <ul><li>
    1. sıralı madde   → <ol><li>
    > alıntı          → <blockquote>
    ---               → <hr>
    boş satır         → paragraf ayırıcı
    **kalın** *italik* `kod` [metin](url)  → satır içi biçimleme

Çıktı, shell.html'deki .md-* CSS sınıflarıyla eşleşen HTML'dir.
"""
import html as html_lib
import re

_BOLD = re.compile(r"\*\*(.+?)\*\*")
_ITALIC = re.compile(r"(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)")
_CODE = re.compile(r"`(.+?)`")
_LINK = re.compile(r"\[(.+?)\]\((.+?)\)")


def _inline(text):
    """Satır içi biçimlemeyi HTML'e çevirir. Önce kaçış, sonra işaretleme."""
    out = html_lib.escape(text)
    out = _CODE.sub(r"<code>\1</code>", out)
    out = _BOLD.sub(r"<strong>\1</strong>", out)
    out = _ITALIC.sub(r"<em>\1</em>", out)
    out = _LINK.sub(r'<a href="\2" target="_blank" rel="noopener">\1</a>', out)
    return out


def _flush_list(items, ordered):
    if not items:
        return ""
    tag = "ol" if ordered else "ul"
    body = "".join(f"<li>{_inline(item)}</li>" for item in items)
    return f'<{tag} class="md-list">{body}</{tag}>'


class _Blocks:
    """Satır akışını blok HTML'e çeviren küçük durum makinesi."""

    def __init__(self):
        self.out = []
        self.list_items = []
        self.list_ordered = False

    def _close_list(self):
        self.out.append(_flush_list(self.list_items, self.list_ordered))
        self.list_items = []

    def _add_list_item(self, text, ordered):
        if self.list_items and self.list_ordered != ordered:
            self._close_list()
        self.list_ordered = ordered
        self.list_items.append(text)

    def add(self, line):
        stripped = line.strip()
        ordered_match = re.match(r"\d+\.\s+(.*)", stripped)
        if not stripped:
            self._close_list()
        elif stripped.startswith("### "):
            self._close_list(); self.out.append(f'<h4 class="md-h3">{_inline(stripped[4:])}</h4>')
        elif stripped.startswith("## "):
            self._close_list(); self.out.append(f'<h3 class="md-h2">{_inline(stripped[3:])}</h3>')
        elif stripped.startswith("# "):
            self._close_list(); self.out.append(f'<h2 class="md-h1">{_inline(stripped[2:])}</h2>')
        elif stripped == "---":
            self._close_list(); self.out.append('<hr class="md-hr">')
        elif stripped.startswith("> "):
            self._close_list(); self.out.append(f'<blockquote class="md-quote">{_inline(stripped[2:])}</blockquote>')
        elif stripped.startswith(("- ", "* ")):
            self._add_list_item(stripped[2:], ordered=False)
        elif ordered_match:
            self._add_list_item(ordered_match.group(1), ordered=True)
        else:
            self._close_list(); self.out.append(f'<p class="md-p">{_inline(stripped)}</p>')

    def result(self):
        self._close_list()
        return "\n".join(part for part in self.out if part)


def to_html(markdown):
    blocks = _Blocks()
    for line in markdown.splitlines():
        blocks.add(line)
    return f'<div class="md">{blocks.result()}</div>'
