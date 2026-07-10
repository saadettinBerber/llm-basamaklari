/* ===== Slayt 12: 5b · AJANIN YAPI TAŞLARI (kimlik katmanı + makine katmanı) ===== */
const SVG_S5B=`<svg viewBox="0 0 640 430">
  <!-- ÜST KATMAN · KİMLİK (rol + odak) — ajanı TANIMLAR -->
  <text class="m" x="30" y="18" font-size="10.5" fill="#b5730f" font-weight="700" letter-spacing=".05em">① KİMLİK — ajanı tanımlar</text>
  <!-- Rol -->
  <rect x="24" y="28" width="292" height="52" rx="14" fill="#fff6ef" stroke="#f0c99a" stroke-width="2"/>
  <g transform="translate(56 54)" fill="none" stroke="#e0912b" stroke-width="1.9"><circle cx="0" cy="-4" r="5"/><path d="M-9 12 q9 -11 18 0" /></g>
  <text x="82" y="48" font-size="13.5" fill="#242844" font-weight="700">ROL <tspan class="m" font-size="10" fill="#e0912b" font-weight="400">— kim?</tspan></text>
  <text x="82" y="68" font-size="12" fill="#6b7192">“Kıdemli Java geliştiricisi”</text>
  <!-- Odak -->
  <rect x="324" y="28" width="292" height="52" rx="14" fill="#fff6ef" stroke="#f0c99a" stroke-width="2"/>
  <g transform="translate(356 54)" fill="none" stroke="#e0912b" stroke-width="1.9"><circle cx="0" cy="0" r="11"/><circle cx="0" cy="0" r="5"/><circle cx="0" cy="0" r="1.5" fill="#e0912b" stroke="none"/></g>
  <text x="382" y="48" font-size="13.5" fill="#242844" font-weight="700">ODAK <tspan class="m" font-size="10" fill="#e0912b" font-weight="400">— neye?</tspan></text>
  <text x="382" y="68" font-size="12" fill="#6b7192">“sadece SDP modülü”</text>

  <!-- ayraç -->
  <line x1="24" y1="98" x2="616" y2="98" stroke="#eef1f8" stroke-width="1.5"/>
  <text class="m" x="30" y="118" font-size="10.5" fill="#ec5f52" font-weight="700" letter-spacing=".05em">② MAKİNE — ajanı çalıştırır</text>

  <!-- ALT KATMAN · MAKİNE (4 taş) — hepsi translate(0 108) ile aşağı -->
  <g transform="translate(0 108)">
  <!-- bağlantı çizgileri (robot merkez ↔ 4 köşe) -->
  <g stroke="#f0b7b2" stroke-width="2" stroke-dasharray="5 5">
    <line x1="270" y1="140" x2="150" y2="88"/><line x1="370" y1="140" x2="490" y2="88"/>
    <line x1="270" y1="205" x2="150" y2="256"/><line x1="370" y1="205" x2="490" y2="256"/>
  </g>

  <!-- MERKEZ · güçlü ajan robotu (5a tasarımının kompakt hali) -->
  <g transform="translate(320 172)">
    <path d="M-46 50 Q-46 16 -27 11 L27 11 Q46 16 46 50 Z" fill="#fdecea" stroke="#ec5f52" stroke-width="2.5"/>
    <rect x="-16" y="19" width="32" height="24" rx="5" fill="#fff" stroke="#ec5f52" stroke-width="2"/>
    <path d="M-6 31 l5 6 l8 -11" fill="none" stroke="#26a06a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="-62" y="14" width="13" height="32" rx="6.5" fill="#fdecea" stroke="#ec5f52" stroke-width="2.5"/>
    <rect x="49" y="14" width="13" height="32" rx="6.5" fill="#fdecea" stroke="#ec5f52" stroke-width="2.5"/>
    <path d="M-30 -36 Q-30 -48 -19 -50 L19 -50 Q30 -48 30 -36 L30 -13 Q30 -5 21 -3 L-21 -3 Q-30 -5 -30 -13 Z" fill="#ec5f52"/>
    <rect x="-22" y="-32" width="44" height="19" rx="6" fill="#2b2f4a"/>
    <circle cx="-10" cy="-22" r="4.5" fill="#8fd0ff"/><circle cx="10" cy="-22" r="4.5" fill="#8fd0ff"/>
    <path d="M-30 -27 l-7 -5 v11 l7 -2 z" fill="#c8463c"/><path d="M30 -27 l7 -5 v11 l-7 -2 z" fill="#c8463c"/>
    <line x1="0" y1="-50" x2="0" y2="-61" stroke="#ec5f52" stroke-width="3"/><circle cx="0" cy="-64" r="4.5" fill="#ec5f52"/>
    <text class="m" x="0" y="72" font-size="11" fill="#ec5f52" text-anchor="middle" font-weight="700">AJAN</text>
  </g>

  <!-- SOL ÜST · LLM (beyin) -->
  <g transform="translate(150 68)">
    <rect x="-96" y="-30" width="192" height="60" rx="14" fill="#fff" stroke="#c9d1e6" stroke-width="2"/>
    <g transform="translate(-64 0)">
      <path d="M0 -13 q-13 0 -13 8 q-6 0 -6 6 q0 6 7 6 q0 5 8 5 q4 0 4 -4 Z" fill="#eef1f8" stroke="#8892b0" stroke-width="1.6"/>
      <path d="M0 -13 q13 0 13 8 q6 0 6 6 q0 6 -7 6 q0 5 -8 5 q-4 0 -4 -4 Z" fill="#e7ecf7" stroke="#8892b0" stroke-width="1.6"/>
    </g>
    <text x="-38" y="-4" font-size="14" fill="#242844" font-weight="700">LLM</text>
    <text class="m" x="-38" y="15" font-size="10.5" fill="#8892b0">karar veren “beyin”</text>
  </g>

  <!-- SAĞ ÜST · Tools (araçlar) -->
  <g transform="translate(490 68)">
    <rect x="-96" y="-30" width="192" height="60" rx="14" fill="#fff" stroke="#f0b7b2" stroke-width="2"/>
    <g transform="translate(-64 0)" stroke="#ec5f52" stroke-width="2.4" stroke-linecap="round" fill="none">
      <path d="M-8 8 L4 -4"/><path d="M2 -10 a6 6 0 1 0 6 6 l6 6"/>
    </g>
    <text x="-38" y="-4" font-size="14" fill="#242844" font-weight="700">Tools</text>
    <text class="m" x="-38" y="15" font-size="10.5" fill="#8892b0">dış dünyaya “eller”</text>
  </g>

  <!-- SOL ALT · Memory (hafıza) -->
  <g transform="translate(150 276)">
    <rect x="-96" y="-30" width="192" height="60" rx="14" fill="#fff" stroke="#c9b8f5" stroke-width="2"/>
    <g transform="translate(-64 0)">
      <rect x="-11" y="-13" width="22" height="26" rx="3" fill="#f3eefe" stroke="#7c5cf0" stroke-width="1.8"/>
      <line x1="-6" y1="-6" x2="6" y2="-6" stroke="#7c5cf0" stroke-width="1.6"/><line x1="-6" y1="0" x2="6" y2="0" stroke="#7c5cf0" stroke-width="1.6"/><line x1="-6" y1="6" x2="2" y2="6" stroke="#7c5cf0" stroke-width="1.6"/>
    </g>
    <text x="-38" y="-4" font-size="14" fill="#242844" font-weight="700">Memory</text>
    <text class="m" x="-38" y="15" font-size="10.5" fill="#8892b0">geçmişi “hatırlar”</text>
  </g>

  <!-- SAĞ ALT · Guardrails (korkuluklar) -->
  <g transform="translate(490 276)">
    <rect x="-96" y="-30" width="192" height="60" rx="14" fill="#fff" stroke="#f0d9a8" stroke-width="2"/>
    <g transform="translate(-64 0)">
      <rect x="-13" y="-10" width="26" height="20" rx="3" fill="#fff6e8" stroke="#e0912b" stroke-width="1.8"/>
      <line x1="-13" y1="-3" x2="13" y2="-3" stroke="#e0912b" stroke-width="1.4"/>
      <line x1="-7" y1="-10" x2="-7" y2="10" stroke="#e0912b" stroke-width="1.4"/><line x1="0" y1="-10" x2="0" y2="10" stroke="#e0912b" stroke-width="1.4"/><line x1="7" y1="-10" x2="7" y2="10" stroke="#e0912b" stroke-width="1.4"/>
    </g>
    <text x="-38" y="-4" font-size="14" fill="#242844" font-weight="700">Guardrails</text>
    <text class="m" x="-38" y="15" font-size="10.5" fill="#8892b0">sınır + “güvenlik”</text>
  </g>
  </g>
</svg>`;

SLIDE({type:"step",n:5,hue:HUES[4],label:"05 · AGENT · yapı taşları",start:"peki ajan hangi parçalardan oluşur?",
   q:"AJANIN YAPI TAŞLARI",svg:SVG_S5B,cap:"ajan = kimliği (rol + odak) + makinesi (LLM · Tools · Memory · Guardrails)"});
