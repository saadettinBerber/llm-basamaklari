#!/usr/bin/env python3
"""
md_slide_builder.py — bir .md slayt dosyasını SLIDE({...}) JS çağrısına çevirir.

Dosya biçimi:
    ---
    q: SLAYT BAŞLIĞI
    cap: alt başlık
    hue: 4
    src: arXiv:2201.11903, kitap s.42
    ---
    ## Bölüm
    - madde
    - **kalın** madde

Frontmatter üstte (--- ile sarılı) key: value çiftleri; gövde saf Markdown.
Çıktı, shell.html'in build() motorunun beklediği SLIDE({... html:`...`}) çağrısıdır.
"""
import json

import markdown_slide

_LIST_KEYS = {"src"}


def _parse_frontmatter(text):
    """Dosyayı (meta_sözlük, markdown_gövde) olarak ayırır. Frontmatter yoksa meta boştur."""
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        return {}, text
    end = _find_frontmatter_end(lines)
    if end is None:
        return {}, text
    meta = _parse_meta_lines(lines[1:end])
    body = "\n".join(lines[end + 1:])
    return meta, body


def _find_frontmatter_end(lines):
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            return i
    return None


def _parse_meta_lines(meta_lines):
    meta = {}
    for line in meta_lines:
        if ":" not in line:
            continue
        key, _, value = line.partition(":")
        key, value = key.strip(), value.strip()
        if key in _LIST_KEYS:
            meta[key] = [part.strip() for part in value.split(",") if part.strip()]
        else:
            meta[key] = value
    return meta


def _slide_object(meta, body_html):
    """Frontmatter + gövdeden SLIDE() argüman sözlüğü kurar. Sayılar/hue burada çözülür."""
    obj = {"html": body_html}
    for key in ("type", "label", "start", "q", "cap", "gap"):
        if key in meta:
            obj[key] = meta[key]
    obj.setdefault("type", "step")
    if "n" in meta:
        obj["n"] = int(meta["n"])
    if "src" in meta:
        obj["src"] = meta["src"]
    return obj


def _emit_slide_call(obj, hue_index):
    """Sözlüğü SLIDE({...}) JS metnine çevirir. hue, HUES[index] olarak enjekte edilir."""
    fields = ", ".join(f"{key}:{json.dumps(value, ensure_ascii=False)}" for key, value in obj.items())
    hue = f", hue:HUES[{hue_index}]" if hue_index is not None else ""
    return f"SLIDE({{{fields}{hue}}});"


def to_slide_js(md_text):
    meta, body = _parse_frontmatter(md_text)
    body_html = markdown_slide.to_html(body)
    obj = _slide_object(meta, body_html)
    hue_index = int(meta["hue"]) if "hue" in meta else None
    return _emit_slide_call(obj, hue_index)
