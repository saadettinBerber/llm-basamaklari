# Bir LLM Nasıl İnşa Edilir? — sunum projesi

Etkileşimli, tek dosyalık bir HTML sunum. Konu: bir LLM'in beş basamakta inşası
(1 Pretraining · 2 SFT · 3 Hizalama · 4 Düşünme · 5 Agent). Çift tıklayınca açılır,
internet gerektirmez, GitHub Pages'te yayınlanır.

> **Bu dosya Claude Code içindir.** Bu projede slayt hazırlarken aşağıdaki kurallara uy.

---

## Altın kural: `index.html`'i elle DÜZENLEME

`index.html` **üretilmiş** bir dosyadır. Kaynak `src/` klasörüdür. Akış:

```
src/  ──►  python3 build.py  ──►  index.html
```

- **Düzenle:** `src/` içindeki dosyaları.
- **Sonra çalıştır:** `python3 build.py` (index.html'i yeniden üretir, ~20 ms).
- **`index.html`'e asla elle dokunma** — bir sonraki build ezer.

`build.py` yalnızca birleştirir; hızlı değil diye endişe etme, darboğaz değildir.

---

## Bir slaytı önizle: `preview.py`

Tek bir slaytı izole render etmek için (tüm desteyi değil):

```
python3 preview.py 17        # pozisyona göre (1 tabanlı)
python3 preview.py recap     # dosya adı parçasına göre
```

Build çalıştırır, o slaytta açılan `_preview.html`'i üretir, `file://...#N` yolunu yazar.
`_preview.html` üretilmiş dosyadır, `.gitignore`'dadır.

Görsel doğrulama (snap Chromium yalnız `~/snap/chromium/common/`'a yazabilir):

```
chromium --headless --disable-gpu --force-prefers-reduced-motion --hide-scrollbars \
  --window-size=1280,800 --screenshot=~/snap/chromium/common/x.png \
  --virtual-time-budget=2500 "file://$PWD/_preview.html#N"
```

---

## Slayt formatları — hangisini ne zaman

Bir slayt `src/slides/NN-ad.*` dosyasıdır. **Dosya adı sırayı belirler** (`00-`, `01-`, …).
Üç format var; içeriğe göre seç:

| Format | Ne için | Nasıl |
|--------|---------|-------|
| `.js` + `svg:` | Robot, merdiven, akış — **özel çizim** | Elle SVG |
| `.js` + `html:` | Logo ızgarası gibi özel kart düzenleri | `html:` alanı |
| `.md` | **Yazı ağırlıklı** slaytlar (başlık, liste, paragraf) | Saf Markdown |

**Kural:** metin ağırlıklıysa `.md` yaz — elle HTML/SVG'ye boğulma. Çizim gerekiyorsa SVG.
Var olan çizim slaytlarını (robot/merdiven) Markdown'a taşıma; el emeği estetik korunur.

### `.js` slayt iskeleti

Her `.js` slayt dosyası sonunda `SLIDE({...})` çağırır:

```js
SLIDE({
  type:"step",          // "step" | "intro" | "recap"
  n:3,                  // basamak no (1-5) — aynı n ardışık slaytlar alt-slayt sayılır
  hue:HUES[2],          // renk: basamak no - 1 (aşağıdaki palete bak)
  label:"03 · HİZALAMA · problem",
  start:"bu basamağa giriş cümlesi",   // veya gap:"önceki eksik"
  q:"SLAYT BAŞLIĞI",
  svg:SVG_XYZ,          // ya svg ya html
  cap:"altyazı",
  src:["arXiv:2201.11903","kitap s.42"],  // opsiyonel, tıklanır kaynak
});
```

`src` içinde `arXiv:XXXX.XXXXX` veya bir URL varsa otomatik tıklanır bağlantı olur.

### `.md` slayt iskeleti

```markdown
---
q: SLAYT BAŞLIĞI
cap: altyazı
hue: 2
type: step
n: 3
label: 03 · HİZALAMA
start: bu basamağa giriş
src: arXiv:2201.11903, kitap s.42
---

## Bölüm başlığı
- madde
- **kalın**, *italik*, `kod`

> önemli not
```

Frontmatter'daki `hue` doğrudan indekstir (0-4). Gövde saf Markdown; desteklenen:
başlık (`#`/`##`/`###`), liste (`-`/`1.`), `**kalın**`, `*italik*`, `` `kod` ``,
`> alıntı`, `---`, `[link](url)`. Tam CommonMark değil, bilinçli dar.

---

## Tasarım kuralları (bunları koru)

**Renk paleti — her basamak bir renk (`HUES` dizisi):**

| Basamak | Renk | Kod |
|---------|------|-----|
| 1 Pretraining | mavi | `#3b6fd4` |
| 2 SFT | yeşil | `#12a594` |
| 3 Hizalama | mor | `#7c5cf0` |
| 4 Düşünme | turuncu | `#e0912b` |
| 5 Agent | kırmızı | `#ec5f52` |

Bir basamağın slaytı **o basamağın rengini** kullanır (`hue:HUES[n-1]`).

**Kahraman-robot tutarlılığı:** ajanı temsil eden kırmızı kahraman-robot (`#ec5f52`,
kask/vizör, anten) her yerde aynı olmalı. Ortak kaynak `src/components/robot.js`
(`agentRobot({...})`) ve `src/components/svg-intro.js` (`buildLadder`, `robotStage`).
Yeni bir yerde ajan çizeceksen bu bileşenleri kullan, yeniden çizme.

**Tek dosya / çevrimdışı kısıtı:** çıktı tek `index.html`'dir ve internetsiz çalışmalı.
- Dış CDN scripti / stylesheet **ekleme** (fontlar hariç, onlar zaten preconnect).
- Görselleri gömülü SVG olarak çiz — dış resim dosyası yok.
- Bu yüzden Mermaid.js gibi çalışma-zamanı kütüphaneleri **kullanma**.

---

## Klasör yapısı

```
src/
  shell.html            iskelet: <head>, tüm CSS, slayt motoru (build/render/nav)
  components/           slaytlar arası paylaşılan parçalar
    robot.js            agentRobot() — kahraman-robot
    svg-intro.js        buildLadder(), robotStage() — intro/recap merdiveni
  slides/               her slayt bir dosya (NN-ad.js veya NN-ad.md)
build.py                src/ → index.html birleştirici
preview.py              tek slayt önizleme
markdown_slide.py       Markdown → HTML çevirici (.md slaytları için)
md_slide_builder.py     .md dosyası → SLIDE({...}) JS
index.html              ÜRETİLMİŞ — elle düzenleme
```

Motor (`shell.html`) `HUES`, `RAIL`, `SLIDES[]` üzerinden çalışır; `SLIDE(o)` global'i
her slaytı `SLIDES`'a ekler. Sol raydaki 5 basamak `RAIL` sabitinden gelir.

---

## Slayt eklerken kontrol listesi

1. `src/slides/NN-ad.{js,md}` oluştur — `NN` sırayı belirler.
2. Doğru `hue`/`n`/`type`'ı ver; renk paletine uy.
3. Ajan çiziyorsan `components/` bileşenlerini kullan.
4. `python3 build.py` çalıştır.
5. `python3 preview.py NN` ile render alıp görsel doğrula.
6. Kaynağa dayalı bir iddia varsa `src:` ekle (uydurma kaynak yazma).
