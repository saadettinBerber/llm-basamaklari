# Sunum kaynak yapısı

`index.html` artık **üretilen** bir dosyadır — elle düzenlenmez. Kaynak burada, `src/` içinde.

## Yapı

```
ai_sunum/
├── index.html              ← ÜRETİLEN (çift tıkla açılır, GitHub Pages'e giden). Elle düzenleme!
├── build.py                ← birleştirme scripti
└── src/
    ├── shell.html          ← iskelet: <head>, CSS, ana motor (render/nav/hash/animasyon)
    ├── components/
    │   ├── robot.js        ← paylaşılan kahraman-robot (ajan). agentRobot({x,y,s}) çağrılır.
    │   └── svg-intro.js    ← slayta bağlı olmayan ortak SVG'ler (intro vb.)
    └── slides/
        ├── 00-intro.js
        ├── 01-pretraining.js
        ├── ...
        └── 16-recap.js     ← her slayt: kendi SVG'leri + SLIDE({...}) çağrısı
```

## Nasıl değişiklik yapılır

1. İlgili slaytı `src/slides/NN-ad.js` içinde düzenle (ya da yeni bir slayt dosyası ekle).
   - Slayt sırası = dosya adı sırası (`00-`, `01-`, ... `16-`). Araya slayt eklemek için
     `05b-...` gibi bir isim yeter (alfabetik sıraya girer) ya da yeniden numaralandır.
2. `python3 build.py` çalıştır → `index.html` yeniden üretilir.
3. `index.html`'i çift tıklayarak (veya tarayıcıda) kontrol et.

## Robotu (ajanı) kullanmak

Ajan görseli tek yerde: `components/robot.js`. Bir slaytta ajan çizmek için, SVG içinde:

```js
${agentRobot({x:500, y:120, s:1})}     // s: 1=büyük, 0.75=kompakt, 0.62=mini
```

Böylece robot bir kez tanımlı, her slayt oradan çağırır (DRY / "kalıtım").
Tutarlılık kuralı: ajan her yerde bu robotla temsil edilir.

## Bir slayt dosyasının anatomisi

```js
/* ===== Slayt N: ad ===== */
const SVG_XX=`<svg ...> ... </svg>`;   // bu slaytın görselleri

SLIDE({type:"step", n:5, hue:HUES[4], label:"...", q:"...", svg:SVG_XX, cap:"...", src:[...]});
```

`SLIDE(o)` global bir yardımcıdır (shell.html'de tanımlı), nesneyi `SLIDES` dizisine ekler.
`HUES`, `RAIL`, `TU` gibi sabitler ve `agentRobot` shell + components'te tanımlıdır, her slaytta kullanılabilir.
