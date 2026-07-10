#!/usr/bin/env python3
"""
preview.py — tek bir slaytı izole önizlemek için hızlı yardımcı.

Kullanım:
    python3 preview.py 17           # 17. slaytı (pozisyon, 1 tabanlı)
    python3 preview.py recap        # dosya adı 'recap' içeren slaytı
    python3 preview.py 17-agent     # dosya adı '17-agent' ile eşleşen slaytı

Ne yapar:
    1) build.py'yi çağırır (engine tek yerde kalır — DRY).
    2) index.html'i o slaytta açacak _preview.html üretir.
    3) file:// yolunu #hash ile birlikte yazdırır (Chromium'a verilir).

index.html'e dokunmaz; _preview.html ayrı bir çıktıdır.
"""
import sys, os, glob, re
import build as builder

ROOT = os.path.dirname(os.path.abspath(__file__))
SLIDE_DIR = os.path.join(ROOT, "src", "slides")


def slide_files():
    files = glob.glob(os.path.join(SLIDE_DIR, "*.js"))
    files += glob.glob(os.path.join(SLIDE_DIR, "*.md"))
    return sorted(files, key=lambda p: os.path.basename(p))


def resolve_position(selector):
    """Seçiciyi 1 tabanlı slayt pozisyonuna çevirir. Bulunamazsa hata mesajı döner."""
    files = [os.path.basename(p) for p in slide_files()]
    if selector.isdigit():
        pos = int(selector)
        if 1 <= pos <= len(files):
            return pos, files[pos - 1], None
        return None, None, f"pozisyon {pos} aralık dışı (1–{len(files)})"
    matches = [(i + 1, name) for i, name in enumerate(files) if selector in name]
    if len(matches) == 1:
        return matches[0][0], matches[0][1], None
    if not matches:
        return None, None, f"'{selector}' hiçbir slayt dosyasıyla eşleşmedi"
    names = ", ".join(name for _, name in matches)
    return None, None, f"'{selector}' birden fazla dosyayla eşleşti: {names}"


def write_preview(position):
    """index.html'i alıp o slaytta açılan _preview.html üretir; dosya yolunu döner."""
    with open(os.path.join(ROOT, "index.html"), encoding="utf-8") as f:
        html = f.read()
    marker = f'<script>if(!location.hash)location.hash="#{position}";</script>'
    html = html.replace("</body>", marker + "\n</body>")
    out_path = os.path.join(ROOT, "_preview.html")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    return out_path


def main():
    if len(sys.argv) != 2:
        print(__doc__)
        return 1
    builder.build()
    position, name, error = resolve_position(sys.argv[1])
    if error:
        print(f"HATA: {error}")
        return 1
    out_path = write_preview(position)
    print(f"slayt {position} · {name}")
    print(f"file://{out_path}#{position}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
