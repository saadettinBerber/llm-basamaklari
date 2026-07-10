# Etkileşimli Sunum İskeleti

Çift tıklayınca açılan, tek dosyalık (`index.html`), internetsiz çalışan, GitHub
Pages'e uygun bir sunum iskeleti. İçerik `src/` içinde slayt slayt yazılır, `build.py`
onları tek bir `index.html`'e derler.

Bu iskelet **konudan bağımsızdır.** Şu an içindeki örnek sunum "Bir LLM Nasıl İnşa
Edilir?" konusunu işler; ama aynı iskeletle başka herhangi bir sunum yapılabilir.
Klasörü kopyala, `src/slides/` içini kendi konunla doldur.

> **Bu dosya Claude Code içindir.** Bu iskeletle slayt hazırlarken aşağıdaki kurallara uy.
> Konuya özgü örnekler "örnek" diye işaretlidir — kural değil, değiştirilebilir.

---

## Yeni bir sunuma başlama

1. Bu klasörün tamamını yeni bir yere kopyala.
2. `src/slides/` içindeki `.js`/`.md` dosyalarını sil (ya da örnek olarak birini tut).
3. `src/shell.html` içindeki iki sabiti kendi konuna göre değiştir:
   - `HUES` — bölüm renkleri (aşağıda "Renk sistemi").
   - `RAIL` — sol raydaki bölüm listesi (`[["1","BÖLÜM ADI"], …]`).
   - `.brand` metnini ve `<title>`'ı da güncelle.
4. Kendi slaytlarını `src/slides/NN-ad.{js,md}` olarak yaz.
5. `python3 build.py` → `python3 preview.py NN` ile ilerle.

Örnek sunumu referans olarak incele; sonra sil. Her sunum kendi bağımsız kopyasıdır.

---

## Altın kural: `index.html`'i elle DÜZENLEME

`index.html` **üretilmiş** bir dosyadır. Kaynak `src/` klasörüdür. Akış:

```
src/  ──►  python3 build.py  ──►  index.html
```

- **Düzenle:** `src/` içindeki dosyaları.
- **Sonra çalıştır:** `python3 build.py` (index.html'i yeniden üretir, ~20 ms).
- **`index.html`'e asla elle dokunma** — bir sonraki build ezer.

---

## Bir slaytı önizle: `preview.py`

Tek bir slaytı izole render etmek için (tüm desteyi değil):

```
python3 preview.py 17        # pozisyona göre (1 tabanlı)
python3 preview.py giris     # dosya adı parçasına göre
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
| `.js` + `svg:` | Diyagram, illüstrasyon — **özel çizim** | Elle SVG |
| `.js` + `html:` | Izgara, kart düzeni gibi özel yerleşimler | `html:` alanı |
| `.md` | **Yazı ağırlıklı** slaytlar (başlık, liste, paragraf) | Saf Markdown |

**Kural:** metin ağırlıklıysa `.md` yaz — elle HTML/SVG'ye boğulma. Çizim gerekiyorsa SVG.

### `.js` slayt iskeleti

Her `.js` slayt dosyası sonunda `SLIDE({...})` çağırır:

```js
SLIDE({
  type:"step",          // "step" | "intro" | "recap"
  n:3,                  // bölüm no — aynı n ardışık slaytlar alt-slayt sayılır (nokta göstergesi)
  hue:HUES[2],          // renk: bölüm no - 1
  label:"03 · BÖLÜM · alt konu",
  start:"bu bölüme giriş cümlesi",     // veya gap:"önceki eksik"
  q:"SLAYT BAŞLIĞI",
  svg:SVG_XYZ,          // ya svg ya html
  cap:"altyazı",
  src:["arXiv:2201.11903","kitap s.42"],  // opsiyonel, tıklanır kaynak
});
```

`src` içinde `arXiv:XXXX.XXXXX` veya bir URL varsa otomatik tıklanır bağlantı olur.

**Alanlar:** `type` (intro/step/recap), `n` (bölüm no), `hue`, `label`, `start` veya `gap`
(üstteki rozet), `q` (başlık), `svg` **veya** `html`, `cap` (altyazı), `src` (kaynak listesi).

### `.md` slayt iskeleti

```markdown
---
q: SLAYT BAŞLIĞI
cap: altyazı
hue: 2
type: step
n: 3
label: 03 · BÖLÜM
start: bu bölüme giriş
src: arXiv:2201.11903, kitap s.42
---

## Bölüm başlığı
- madde
- **kalın**, *italik*, `kod`

> önemli not
```

Frontmatter'daki `hue` doğrudan indekstir (0-tabanlı). Gövde saf Markdown; desteklenen:
başlık (`#`/`##`/`###`), liste (`-`/`1.`), `**kalın**`, `*italik*`, `` `kod` ``,
`> alıntı`, `---`, `[link](url)`. Tam CommonMark değil, bilinçli dar.

---

## Renk sistemi — her bölüm bir renk

Renkler `src/shell.html`'deki `HUES` dizisinden gelir; sol ray da `RAIL`'den. Bunları
**kendi sunumuna göre değiştir.** Örnek sunumun paleti (örnektir, kural değil):

```js
const HUES=["#3b6fd4","#12a594","#7c5cf0","#e0912b","#ec5f52"];  // mavi→yeşil→mor→turuncu→kırmızı
const RAIL=[["1","PRETRAINING"],["2","SFT"],["3","HİZALAMA"],["4","DÜŞÜNME"],["5","AGENT"]];
```

Bir bölümün slaytı **o bölümün rengini** kullanır: `hue:HUES[n-1]`. `RAIL` uzunluğu =
bölüm sayısı. Kendi konunda kaç bölüm varsa ikisini de ona göre kur.

---

## Değişmez kısıtlar (her sunumda geçerli)

**Tek dosya / çevrimdışı:** çıktı tek `index.html`'dir ve internetsiz çalışmalı.
- Dış CDN scripti / stylesheet **ekleme** (fontlar hariç, `<head>`'de preconnect ile).
- Görselleri gömülü SVG olarak çiz — dış resim dosyası yok.
- Bu yüzden Mermaid.js gibi çalışma-zamanı kütüphaneleri **kullanma** (offline'ı bozar).

**Kaynak dürüstlüğü:** bir iddia bir kaynağa dayanıyorsa `src:` ekle; kaynak **uydurma.**

**Tekrar eden görseller `components/`'e:** birden çok slaytta kullanılan bir görsel
(örnekte kahraman-robot) `src/components/`'e konur, slaytlar oradan çağırır. Yeniden çizme.

---

## Klasör yapısı

```
src/
  shell.html            iskelet: <head>, tüm CSS, slayt motoru — HUES/RAIL burada
  components/           slaytlar arası paylaşılan parçalar (proje-özgü)
  slides/               her slayt bir dosya (NN-ad.js veya NN-ad.md)
build.py                src/ → index.html birleştirici
preview.py              tek slayt önizleme
markdown_slide.py       Markdown → HTML çevirici (.md slaytları için)
md_slide_builder.py     .md dosyası → SLIDE({...}) JS
index.html              ÜRETİLMİŞ — elle düzenleme
```

Motor (`shell.html`) `HUES`, `RAIL`, `SLIDES[]` üzerinden çalışır; `SLIDE(o)` global'i
her slaytı `SLIDES`'a ekler. `build.py`/`preview.py` konudan bağımsızdır — dokunma gerekmez.

---

## Slayt eklerken kontrol listesi

1. `src/slides/NN-ad.{js,md}` oluştur — `NN` sırayı belirler.
2. Doğru `hue`/`n`/`type`'ı ver; sunumun renk sistemine uy.
3. Tekrar eden bir görsel varsa `components/`'ten çağır.
4. `python3 build.py` çalıştır.
5. `python3 preview.py NN` ile render alıp görsel doğrula.
6. Kaynağa dayalı iddia varsa `src:` ekle (uydurma kaynak yazma).
