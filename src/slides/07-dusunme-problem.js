/* ===== Slayt 7: 07-step ===== */
const SVG_S4A=`<svg viewBox="0 0 640 330">
  <defs><marker id="a4a" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#e0912b"/></marker></defs>

  <!-- soru -->
  <rect x="40" y="30" width="560" height="60" rx="14" fill="#f4f6fb" stroke="#d9deec" stroke-width="1.5"/>
  <text x="60" y="56" font-size="14.5" fill="#242844">“Kafeteryada 23 elma vardı. 20’sini kullandılar,</text>
  <text x="60" y="78" font-size="14.5" fill="#242844">sonra 6 elma daha aldılar. Kaç elmaları kaldı?”</text>

  <!-- model aceleci -->
  <g transform="translate(150 190)">
    <rect x="-44" y="-40" width="88" height="80" rx="18" fill="#fff6e8" stroke="#e0912b" stroke-width="2.5"/>
    <circle cx="-15" cy="-8" r="8" fill="#e0912b"/><circle cx="15" cy="-8" r="8" fill="#e0912b"/>
    <circle cx="-15" cy="-8" r="3" fill="#fff"/><circle cx="15" cy="-8" r="3" fill="#fff"/>
    <rect x="-14" y="14" width="28" height="5" rx="2.5" fill="#e0912b"/>
  </g>
  <text class="m" x="150" y="250" font-size="11" fill="#8892b0" text-anchor="middle">düşünmeden yanıtlar</text>

  <!-- ok -->
  <path d="M198 190 L300 190" stroke="#e0912b" stroke-width="2.5" fill="none" marker-end="url(#a4a)"/>
  <text class="m" x="249" y="178" font-size="11" fill="#c79a4e" text-anchor="middle">hemen</text>

  <!-- yanlış cevap -->
  <rect x="320" y="150" width="230" height="80" rx="16" fill="#fdeeef" stroke="#e0576a" stroke-width="2.5"/>
  <text x="435" y="188" font-size="15" fill="#c33" text-anchor="middle" font-weight="600">“Cevap: 27”</text>
  <text class="m" x="435" y="212" font-size="12" fill="#e0576a" text-anchor="middle">✗ yanlış — 23−20+6 = 9</text>

  <text class="m" x="320" y="290" font-size="12" fill="#8892b0" text-anchor="middle">bilgi var, ama muhakeme atlanınca sonuç çöküyor</text>
</svg>`;

SLIDE({type:"step",n:4,hue:HUES[3],label:"04 · ADIM ADIM DÜŞÜNME",gap:"düşünmeden ilk cevabı atıyor",
   q:"NASIL DÜŞÜNMELİ?",svg:SVG_S4A,cap:"kolay bir soru bile — muhakeme atlanınca yanlış cevap"});
