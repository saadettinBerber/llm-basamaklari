/* ===== Slayt 2: 02-step ===== */
const SVG_S2=`<svg viewBox="0 0 760 340">
  <defs><marker id="a2" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#12a594"/></marker></defs>

  <!-- ================= LEFT · dataset ================= -->
  <text class="m" x="26" y="24" font-size="12" fill="#12a594" font-weight="700" letter-spacing=".05em">EĞİTİM VERİSİ</text>
  <!-- stacked cards behind, to suggest "thousands" -->
  <rect x="20" y="34" width="290" height="238" rx="16" fill="#eefaf7" stroke="#cdeee7" stroke-width="2" transform="translate(12 12)"/>
  <rect x="20" y="34" width="290" height="238" rx="16" fill="#f4fcfa" stroke="#cdeee7" stroke-width="2" transform="translate(6 6)"/>
  <rect x="20" y="34" width="290" height="238" rx="16" fill="#fff" stroke="#12a594" stroke-width="2.5"/>

  <!-- header -->
  <text class="m" x="42" y="66" font-size="10.5" fill="#8892b0" letter-spacing=".06em">İSTEK</text>
  <text class="m" x="196" y="66" font-size="10.5" fill="#12a594" letter-spacing=".06em">CEVAP</text>
  <line x1="38" y1="76" x2="292" y2="76" stroke="#e6eaf4" stroke-width="1.5"/>
  <line x1="186" y1="82" x2="186" y2="258" stroke="#eef1f8" stroke-width="1.5"/>

  <!-- rows -->
  <text x="42" y="104" font-size="13.5" fill="#242844">Başkent neresi?</text>
  <text x="196" y="104" font-size="13.5" font-weight="700" fill="#12a594">Ankara.</text>
  <line x1="38" y1="118" x2="292" y2="118" stroke="#f1f5f4" stroke-width="1.5"/>
  <text x="42" y="146" font-size="13.5" fill="#242844">2 + 2 kaç eder?</text>
  <text x="196" y="146" font-size="13.5" font-weight="700" fill="#12a594">4 eder.</text>
  <line x1="38" y1="160" x2="292" y2="160" stroke="#f1f5f4" stroke-width="1.5"/>
  <text x="42" y="188" font-size="13.5" fill="#242844">Şiiri özetle</text>
  <text x="196" y="188" font-size="13.5" font-weight="700" fill="#12a594">Tabii, işte…</text>
  <line x1="38" y1="202" x2="292" y2="202" stroke="#f1f5f4" stroke-width="1.5"/>
  <text class="m" x="42" y="226" font-size="12" fill="#9aa0b8">⋮ binlerce örnek</text>
  <text class="m" x="42" y="252" font-size="11" fill="#12a594">taklitle öğrenir ↓</text>

  <!-- ================= MIDDLE · model ================= -->
  <path d="M320 150 L360 150" stroke="#12a594" stroke-width="3" fill="none" marker-end="url(#a2)"/>
  <g transform="translate(412 150)">
    <rect x="-44" y="-44" width="88" height="88" rx="20" fill="#e6f7f4" stroke="#12a594" stroke-width="2.5"/>
    <line x1="0" y1="-44" x2="0" y2="-56" stroke="#12a594" stroke-width="3"/><circle cx="0" cy="-59" r="5" fill="#12a594"/>
    <circle cx="-15" cy="-6" r="9" fill="#12a594"/><circle cx="15" cy="-6" r="9" fill="#12a594"/>
    <circle cx="-15" cy="-6" r="3.5" fill="#fff"/><circle cx="15" cy="-6" r="3.5" fill="#fff"/>
    <rect x="-14" y="16" width="28" height="6" rx="3" fill="#12a594"/>
  </g>
  <text class="m" x="412" y="212" font-size="11" fill="#8892b0" text-anchor="middle">eğitilmiş model</text>

  <!-- ================= RIGHT · will it answer? ================= -->
  <text class="m" x="478" y="20" font-size="12" fill="#242844" font-weight="700" letter-spacing=".04em">CEVAP VEREBİLECEK Mİ?</text>

  <!-- Q1: was in dataset -->
  <g>
    <path d="M456 92 L478 92" stroke="#12a594" stroke-width="2.5" fill="none" marker-end="url(#a2)"/>
    <rect x="478" y="44" width="264" height="96" rx="14" fill="#fff" stroke="#12a594" stroke-width="2"/>
    <rect x="498" y="56" width="118" height="23" rx="11.5" fill="#e6f7f4"/>
    <path d="M510 67 l4 4 l7 -8" stroke="#12a594" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <text class="m" x="524" y="72" font-size="10" fill="#12a594">veride vardı</text>
    <text x="498" y="102" font-size="15" fill="#242844">“Başkent neresi?”</text>
    <text x="668" y="102" font-size="22" font-weight="700" fill="#12a594" text-anchor="middle">→ ?</text>
  </g>

  <!-- Q2: NEW, unseen -->
  <g>
    <path d="M456 236 L478 236" stroke="#7c5cf0" stroke-width="2.5" fill="none" marker-end="url(#a2b)"/>
    <rect x="478" y="188" width="264" height="96" rx="14" fill="#faf8ff" stroke="#7c5cf0" stroke-width="2"/>
    <rect x="498" y="200" width="134" height="23" rx="11.5" fill="#efeafe"/>
    <polygon points="514,206 516,211 522,211 517,215 519,221 514,217 509,221 511,215 506,211 512,211" fill="#7c5cf0"/>
    <text class="m" x="532" y="216" font-size="10" fill="#7c5cf0">YENİ · veride yok</text>
    <text x="498" y="246" font-size="15" fill="#242844">“En büyük gezegen?”</text>
    <text x="668" y="246" font-size="22" font-weight="700" fill="#7c5cf0" text-anchor="middle">→ ?</text>
  </g>

  <defs><marker id="a2b" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#7c5cf0"/></marker></defs>
</svg>`;

SLIDE({type:"step",n:2,hue:HUES[1],label:"02 · SFT",gap:"cevap vermiyor, lafı uzatıyor",
   q:"İYİ BİR CEVAP NEDİR?",svg:SVG_S2,cap:"örneklerle öğrenir · peki hiç görmediği soruyu cevaplayabilir mi?",
   src:["Ouyang ve ark., 2022 · arXiv:2203.02155 (InstructGPT)"]});
