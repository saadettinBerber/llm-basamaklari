#!/usr/bin/env python3
"""
build.py — src/ parçalarını tek bir index.html'e birleştirir.

Kullanım:  python3 build.py

- src/shell.html : iskelet (head + CSS + motor). İçinde iki yer tutucu var:
    <!--BUILD:COMMON-->  → ortak SVG'ler (intro vb.)
    <!--BUILD:SLIDES-->  → slaytlar, dosya adı sırasıyla (00-, 01-, ...)
- src/components/*.js : paylaşılan parçalar (robot, ortak SVG'ler)
- src/slides/*.js     : her slayt (kendi SVG'leri + SLIDE(...) çağrısı)

Çıktı index.html yine TEK dosyadır: çift tıklayınca açılır, GitHub Pages'e gider.
"""
import os, glob

import md_slide_builder

ROOT = os.path.dirname(os.path.abspath(__file__))

def read(path):
    with open(path, encoding="utf-8") as f:
        return f.read()

def slide_js(path):
    """Bir slayt dosyasını JS'e çevirir: .js olduğu gibi, .md ise SLIDE() çağrısına derlenir."""
    if path.endswith(".md"):
        return md_slide_builder.to_slide_js(read(path))
    return read(path).rstrip()

def build():
    shell = read(os.path.join(ROOT, "src", "shell.html"))

    # 1) ortak SVG'ler (components/svg-*.js) — sıra önemsiz
    common_parts = []
    for p in sorted(glob.glob(os.path.join(ROOT, "src", "components", "*.js"))):
        common_parts.append(f"/* --- {os.path.basename(p)} --- */")
        common_parts.append(read(p).rstrip())
    common = "\n".join(common_parts)

    # 2) slaytlar — dosya adı sırasıyla (00-, 01-, ...); .js ve .md karışık olabilir
    slide_parts = []
    slide_glob = glob.glob(os.path.join(ROOT, "src", "slides", "*.js"))
    slide_glob += glob.glob(os.path.join(ROOT, "src", "slides", "*.md"))
    slide_files = sorted(slide_glob, key=lambda p: os.path.basename(p))
    for p in slide_files:
        slide_parts.append(f"/* --- {os.path.basename(p)} --- */")
        slide_parts.append(slide_js(p))
    slides = "\n".join(slide_parts)

    out = shell.replace("<!--BUILD:COMMON-->", common)
    out = out.replace("<!--BUILD:SLIDES-->", slides)

    with open(os.path.join(ROOT, "index.html"), "w", encoding="utf-8") as f:
        f.write(out)

    print(f"index.html üretildi: {len(slide_files)} slayt + {len(glob.glob(os.path.join(ROOT,'src','components','*.js')))} ortak bileşen")

if __name__ == "__main__":
    build()
