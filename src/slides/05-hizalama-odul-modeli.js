/* ===== Slayt 5: 05-step ===== */
const SVG_S3C=`<svg viewBox="0 0 700 330">
  <defs><marker id="a3c" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#7c5cf0"/></marker></defs>

  <!-- SOL · binlerce insan tercihi -->
  <text class="m" x="30" y="26" font-size="11" fill="#8892b0" letter-spacing=".05em">BİNLERCE İNSAN TERCİHİ</text>
  <g>
    <rect x="30" y="46" width="150" height="34" rx="9" fill="#f4f6fb" stroke="#d9deec" stroke-width="1.5" transform="translate(10 10)"/>
    <rect x="30" y="46" width="150" height="34" rx="9" fill="#f8f9fd" stroke="#d9deec" stroke-width="1.5" transform="translate(5 5)"/>
    <rect x="30" y="46" width="150" height="34" rx="9" fill="#fff" stroke="#c9b8f5" stroke-width="1.8"/>
    <text class="m" x="44" y="68" font-size="11" fill="#7c5cf0">A ✔  &gt;  B</text>
  </g>
  <g fill="#c9b8f5"><circle cx="36" cy="104" r="1.7"/><circle cx="36" cy="112" r="1.7"/><circle cx="36" cy="120" r="1.7"/></g>
  <text class="m" x="48" y="116" font-size="11" fill="#9aa0b8">on binlerce çift</text>
  <text class="m" x="30" y="140" font-size="11" fill="#9aa0b8">insan hepsini tek tek</text>
  <text class="m" x="30" y="156" font-size="11" fill="#9aa0b8">puanlayamaz — çok pahalı</text>

  <!-- ok -->
  <path d="M200 90 L250 90" stroke="#7c5cf0" stroke-width="2.5" fill="none" marker-end="url(#a3c)"/>
  <text class="m" x="225" y="80" font-size="10" fill="#7c5cf0" text-anchor="middle">öğret</text>

  <!-- ORTA · ödül modeli = yargıç -->
  <g transform="translate(340 108)">
    <rect x="-72" y="-64" width="144" height="120" rx="18" fill="#f3eefe" stroke="#7c5cf0" stroke-width="2.5"/>
    <text class="m" x="0" y="-40" font-size="10.5" fill="#7c5cf0" text-anchor="middle" font-weight="700">ÖDÜL MODELİ</text>
    <!-- terazi -->
    <line x1="0" y1="-22" x2="0" y2="4" stroke="#7c5cf0" stroke-width="3"/>
    <line x1="-34" y1="-18" x2="34" y2="-18" stroke="#7c5cf0" stroke-width="3" stroke-linecap="round"/>
    <path d="M-34 -18 l-8 20 h16 z" fill="#efeafe" stroke="#7c5cf0" stroke-width="1.8"/>
    <path d="M34 -18 l-8 20 h16 z" fill="#efeafe" stroke="#7c5cf0" stroke-width="1.8"/>
    <circle cx="0" cy="8" r="4" fill="#7c5cf0"/>
    <text class="m" x="0" y="34" font-size="10" fill="#6b7192" text-anchor="middle">“yargıç”</text>
  </g>
  <text class="m" x="340" y="200" font-size="11" fill="#8892b0" text-anchor="middle">cevaba puan verir</text>

  <!-- ok -->
  <path d="M424 108 L474 108" stroke="#7c5cf0" stroke-width="2.5" fill="none" marker-end="url(#a3c)"/>

  <!-- SAĞ · model kendini iyileştirir -->
  <g transform="translate(560 108)">
    <rect x="-52" y="-52" width="104" height="104" rx="16" fill="#fff" stroke="#7c5cf0" stroke-width="2.5"/>
    <line x1="0" y1="-52" x2="0" y2="-64" stroke="#7c5cf0" stroke-width="3"/><circle cx="0" cy="-67" r="5" fill="#7c5cf0"/>
    <circle cx="-16" cy="-8" r="9" fill="#7c5cf0"/><circle cx="16" cy="-8" r="9" fill="#7c5cf0"/>
    <circle cx="-16" cy="-8" r="3.5" fill="#fff"/><circle cx="16" cy="-8" r="3.5" fill="#fff"/>
    <rect x="-15" y="18" width="30" height="6" rx="3" fill="#7c5cf0"/>
  </g>
  <text class="m" x="560" y="196" font-size="11" fill="#8892b0" text-anchor="middle">yüksek puan alacak</text>
  <text class="m" x="560" y="212" font-size="11" fill="#8892b0" text-anchor="middle">şekilde ayarlanır</text>

  <!-- geri besleme eğrisi -->
  <path d="M560 162 C 560 250, 340 250, 340 176" fill="none" stroke="#c9b8f5" stroke-width="2" stroke-dasharray="5 5" marker-end="url(#a3c)"/>
  <text class="m" x="450" y="268" font-size="10.5" fill="#a99be0" text-anchor="middle">tekrar tekrar — model gitgide hizalanır</text>
</svg>`;

SLIDE({type:"step",n:3,hue:HUES[2],label:"03 · HİZALAMA · ödül modeli",start:"ama insan her cevabı tek tek puanlayamaz",
   q:"İNSANI NASIL ÖLÇEKLERİZ?",svg:SVG_S3C,cap:"tercihlerden bir 'yargıç' (ödül modeli) öğrenilir · model ondan puan alarak hizalanır",
   src:["Christiano ve ark., 2017 · arXiv:1706.03741","Ouyang ve ark., 2022 · arXiv:2203.02155"]});
