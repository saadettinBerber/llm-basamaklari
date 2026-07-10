/* ===== Slayt 9: 09-step ===== */
const SVG_S4C=`<svg viewBox="0 0 640 330">
  <defs><marker id="a4c" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#e0912b"/></marker></defs>

  <!-- SOL · zero-shot CoT -->
  <text class="m" x="30" y="26" font-size="11.5" fill="#e0912b" font-weight="700" letter-spacing=".04em">① ÖRNEK BİLE GEREKMEZ</text>
  <rect x="30" y="42" width="270" height="70" rx="14" fill="#fff" stroke="#e0912b" stroke-width="2.5"/>
  <text x="50" y="72" font-size="15" fill="#242844" font-weight="600">“Adım adım düşünelim.”</text>
  <text class="m" x="50" y="96" font-size="10.5" fill="#8892b0">tek cümle — sıfır örnek, sıfır eğitim</text>
  <text class="m" x="30" y="142" font-size="12" fill="#6b7192">GSM8K:</text>
  <text x="92" y="143" font-size="14" font-weight="700" fill="#b5730f">%10</text>
  <text x="128" y="143" font-size="14" fill="#8892b0">→</text>
  <text x="146" y="143" font-size="15" font-weight="700" fill="#e0912b">%41</text>
  <text class="m" x="30" y="164" font-size="10" fill="#a9b0c8">Kojima ve ark., 2022 · yaklaşık 4 kat</text>

  <!-- ayraç -->
  <line x1="320" y1="30" x2="320" y2="300" stroke="#eef1f8" stroke-width="1.5"/>

  <!-- SAĞ · self-consistency -->
  <text class="m" x="345" y="26" font-size="11.5" fill="#e0912b" font-weight="700" letter-spacing=".04em">② BİRÇOK YOL → ÇOĞUNLUK</text>
  <!-- soru -->
  <circle cx="378" cy="66" r="7" fill="#e0912b"/>
  <text class="m" x="345" y="52" font-size="11" fill="#6b7192">soru</text>
  <!-- 3 yol -->
  <path d="M387 70 C 430 70, 440 110, 470 118" stroke="#e0912b" stroke-width="2" fill="none" marker-end="url(#a4c)"/>
  <path d="M387 72 C 430 90, 440 158, 470 166" stroke="#e0912b" stroke-width="2" fill="none" marker-end="url(#a4c)"/>
  <path d="M387 74 C 430 130, 440 206, 470 214" stroke="#c79a4e" stroke-width="2" fill="none" stroke-dasharray="4 4" marker-end="url(#a4c)"/>
  <rect x="474" y="104" width="120" height="30" rx="9" fill="#eaf7f0" stroke="#26a06a" stroke-width="2"/>
  <text x="534" y="124" font-size="13" font-weight="700" fill="#26a06a" text-anchor="middle">9</text>
  <rect x="474" y="152" width="120" height="30" rx="9" fill="#eaf7f0" stroke="#26a06a" stroke-width="2"/>
  <text x="534" y="172" font-size="13" font-weight="700" fill="#26a06a" text-anchor="middle">9</text>
  <rect x="474" y="200" width="120" height="30" rx="9" fill="#fbfbfd" stroke="#e6eaf4" stroke-width="1.5"/>
  <text x="534" y="220" font-size="13" fill="#9aa0b8" text-anchor="middle">27</text>
  <text class="m" x="474" y="258" font-size="11" fill="#26a06a">✓ çoğunluk “9” der → cevap 9</text>
  <text class="m" x="345" y="290" font-size="10.5" fill="#8892b0">GSM8K: %56 → %74 · Wang ve ark., 2022</text>
</svg>`;

SLIDE({type:"step",n:4,hue:HUES[3],label:"04 · DÜŞÜNME · uzantılar",start:"peki bunu daha da ileri götürebilir miyiz?",
   q:"DAHA İYİ NASIL DÜŞÜNÜLÜR?",svg:SVG_S4C,cap:"tek cümleyle tetikle (zero-shot) · birçok yoldan düşün, çoğunluğu seç (self-consistency)",
   src:["Zero-shot: Kojima ve ark., 2022 · arXiv:2205.11916","Self-consistency: Wang ve ark., 2022 · arXiv:2203.11171"]});
