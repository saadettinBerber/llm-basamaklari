/* ===== Slayt 11: 5a · AJAN NEDİR? (kimlik: rol + odak) ===== */
const SVG_S5A=`<svg viewBox="0 0 640 372">
  <defs><marker id="a5a" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#ec5f52"/></marker>
    <marker id="a5x" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#9aa8c8"/></marker></defs>

  <!-- SOL · sadece konuşan LLM -->
  <text class="m" x="30" y="26" font-size="11.5" fill="#8892b0" font-weight="700" letter-spacing=".04em">ŞİMDİYE KADARKİ MODEL</text>
  <g transform="translate(120 132)">
    <rect x="-60" y="-52" width="120" height="104" rx="20" fill="#f4f6fb" stroke="#c9d1e6" stroke-width="2.5"/>
    <circle cx="-20" cy="-14" r="9" fill="#8892b0"/><circle cx="20" cy="-14" r="9" fill="#8892b0"/>
    <circle cx="-20" cy="-14" r="3.5" fill="#fff"/><circle cx="20" cy="-14" r="3.5" fill="#fff"/>
    <rect x="-20" y="16" width="40" height="6" rx="3" fill="#8892b0"/>
    <text class="m" x="0" y="44" font-size="10" fill="#8892b0" text-anchor="middle">LLM · “beyin”</text>
  </g>
  <text class="m" x="120" y="212" font-size="12" fill="#242844" text-anchor="middle" font-weight="600">akıllı — ama tek başına sadece konuşur</text>
  <!-- tek başına elini uzatamaz: araç yoksa eylem yok -->
  <path d="M182 108 C 224 108, 232 92, 248 92" stroke="#9aa8c8" stroke-width="2" fill="none" stroke-dasharray="5 5"/>
  <g transform="translate(276 92)">
    <circle cx="0" cy="0" r="16" fill="#f4f6fb" stroke="#c9d1e6" stroke-width="2"/>
    <path d="M-7 -1 q7 -9 14 0" fill="none" stroke="#9aa8c8" stroke-width="2" stroke-linecap="round"/>
    <text x="0" y="9" font-size="13" fill="#9aa0b8" text-anchor="middle">?</text>
  </g>
  <text class="m" x="276" y="130" font-size="10" fill="#9aa0b8" text-anchor="middle">araç yok → eylem yok</text>
  <text class="m" x="120" y="252" font-size="11" fill="#e0576a" text-anchor="middle">kendi başına arama · kod · işlem yapamaz ✗</text>

  <!-- ayraç ok -->
  <path d="M320 165 L380 165" stroke="#ec5f52" stroke-width="3" fill="none" marker-end="url(#a5a)"/>
  <text class="m" x="350" y="153" font-size="11" fill="#ec5f52" text-anchor="middle" font-weight="700">+ araçlar</text>
  <text class="m" x="350" y="182" font-size="10" fill="#c79a4e" text-anchor="middle">+ döngü</text>

  <!-- SAĞ · iş yapan ajan · güçlü kahraman-robot -->
  <text class="m" x="620" y="26" font-size="11.5" fill="#ec5f52" font-weight="700" letter-spacing=".04em" text-anchor="end">AJAN</text>
  <g transform="translate(500 120)">
    <!-- omuzlar / gövde -->
    <path d="M-58 62 Q-58 20 -34 14 L34 14 Q58 20 58 62 Z" fill="#fdecea" stroke="#ec5f52" stroke-width="2.5"/>
    <!-- göğüs plakası -->
    <rect x="-20" y="24" width="40" height="30" rx="6" fill="#fff" stroke="#ec5f52" stroke-width="2"/>
    <path d="M-8 39 l6 8 l10 -14" fill="none" stroke="#26a06a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- kollar -->
    <rect x="-78" y="18" width="16" height="40" rx="8" fill="#fdecea" stroke="#ec5f52" stroke-width="2.5"/>
    <rect x="62" y="18" width="16" height="40" rx="8" fill="#fdecea" stroke="#ec5f52" stroke-width="2.5"/>
    <!-- kask/kafa -->
    <path d="M-38 -46 Q-38 -60 -24 -62 L24 -62 Q38 -60 38 -46 L38 -16 Q38 -6 26 -4 L-26 -4 Q-38 -6 -38 -16 Z" fill="#ec5f52"/>
    <!-- yüz vizörü -->
    <rect x="-28" y="-40" width="56" height="24" rx="8" fill="#2b2f4a"/>
    <circle cx="-13" cy="-28" r="5.5" fill="#8fd0ff"/><circle cx="13" cy="-28" r="5.5" fill="#8fd0ff"/>
    <!-- yan kask kanatları -->
    <path d="M-38 -34 l-9 -6 v14 l9 -3 z" fill="#c8463c"/><path d="M38 -34 l9 -6 v14 l-9 -3 z" fill="#c8463c"/>
    <!-- anten -->
    <line x1="0" y1="-62" x2="0" y2="-76" stroke="#ec5f52" stroke-width="3"/><circle cx="0" cy="-79" r="5" fill="#ec5f52"/>
  </g>
  <text class="m" x="500" y="210" font-size="12" fill="#242844" text-anchor="middle" font-weight="600">düşünür · araç kullanır · işi bitirir</text>
  <text class="m" x="500" y="248" font-size="11" fill="#26a06a" text-anchor="middle">arama ✓ · kod ✓ · e-posta ✓ · takvim ✓</text>

  <!-- KİMLİK KARTI: bir ajanın rolü + odağı vardır -->
  <rect x="60" y="278" width="520" height="80" rx="16" fill="#fff6ef" stroke="#f0c99a" stroke-width="2"/>
  <text class="m" x="320" y="300" font-size="11" fill="#b5730f" text-anchor="middle" font-weight="700" letter-spacing=".05em">…ve bir KİMLİĞİ vardır</text>
  <line x1="320" y1="310" x2="320" y2="348" stroke="#f0dcb8" stroke-width="1.5"/>
  <!-- Rol -->
  <circle cx="96" cy="332" r="12" fill="#fdf0d8"/>
  <circle cx="96" cy="328" r="4" fill="none" stroke="#e0912b" stroke-width="1.8"/><path d="M89 340 q7 -8 14 0" fill="none" stroke="#e0912b" stroke-width="1.8"/>
  <text class="m" x="118" y="326" font-size="10.5" fill="#e0912b" font-weight="700">ROL — kim?</text>
  <text x="118" y="344" font-size="12.5" fill="#242844" font-weight="600">“Kıdemli Java geliştiricisi”</text>
  <!-- Odak -->
  <g transform="translate(348 332)" fill="none" stroke="#e0912b" stroke-width="1.8"><circle cx="0" cy="0" r="11"/><circle cx="0" cy="0" r="5"/><circle cx="0" cy="0" r="1.6" fill="#e0912b" stroke="none"/></g>
  <text class="m" x="372" y="326" font-size="10.5" fill="#e0912b" font-weight="700">ODAK — neye?</text>
  <text x="372" y="344" font-size="12.5" fill="#242844" font-weight="600">“sadece SDP modülü”</text>
</svg>`;

SLIDE({type:"step",n:5,hue:HUES[4],label:"05 · AGENT",gap:"düşünüyor ama hâlâ sadece konuşuyor",
   q:"AJAN NEDİR?",svg:SVG_S5A,cap:"araç + döngü kazanmış bir LLM — üstelik bir rolü (kim) ve odağı (neye) olan"});
