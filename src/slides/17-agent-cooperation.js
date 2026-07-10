/* ===== Slayt 17: 5g · COOPERATION (çoklu-ajan / uzman ekip) ===== */
/* renkli mini kahraman-robot: her uzmanlık farklı renk (tutarlı tasarım) */
function teamBot(x, y, c, dark){
  const d = dark || c;
  return `<g transform="translate(${x} ${y})">
    <path d="M-20 22 Q-20 6 -12 4 L12 4 Q20 6 20 22 Z" fill="${c}" opacity=".16" stroke="${c}" stroke-width="2"/>
    <rect x="-24" y="8" width="6" height="16" rx="3" fill="${c}" opacity=".16" stroke="${c}" stroke-width="2"/>
    <rect x="18" y="8" width="6" height="16" rx="3" fill="${c}" opacity=".16" stroke="${c}" stroke-width="2"/>
    <path d="M-15 -16 Q-15 -24 -9 -25 L9 -25 Q15 -24 15 -16 L15 -6 Q15 -2 10 -1 L-10 -1 Q-15 -2 -15 -6 Z" fill="${c}"/>
    <rect x="-11" y="-14" width="22" height="9" rx="3" fill="#2b2f4a"/>
    <circle cx="-5" cy="-9.5" r="2.2" fill="#8fd0ff"/><circle cx="5" cy="-9.5" r="2.2" fill="#8fd0ff"/>
    <path d="M-15 -13 l-4 -3 v7 l4 -1 z" fill="${d}"/><path d="M15 -13 l4 -3 v7 l-4 -1 z" fill="${d}"/>
    <line x1="0" y1="-25" x2="0" y2="-31" stroke="${c}" stroke-width="2"/><circle cx="0" cy="-33" r="2.6" fill="${c}"/>
  </g>`;
}
const SVG_S5G=`<svg viewBox="0 0 720 404">
  <defs><marker id="a5g" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#b8c0d8"/></marker></defs>

  <!-- kullanıcı isteği -->
  <text class="m" x="360" y="20" font-size="10.5" fill="#8892b0" text-anchor="middle">tek ajan her şeyi yapmaz — büyük bir işi uzman bir EKİP böler</text>

  <!-- bağlantı çizgileri (hiyerarşi) -->
  <g stroke="#d9deec" stroke-width="2" fill="none">
    <!-- PM -> Teknik Lider -->
    <line x1="360" y1="110" x2="360" y2="118"/>
    <!-- Teknik Lider -> 2 modül lideri + devops -->
    <path d="M360 186 C 360 196, 150 196, 150 196"/>
    <path d="M360 186 C 360 196, 570 196, 570 196"/>
    <line x1="360" y1="186" x2="360" y2="196"/>
    <!-- Modül lideri A -> dev, tester -->
    <path d="M150 264 C 150 274, 90 274, 90 274"/>
    <path d="M150 264 C 150 274, 250 274, 250 274"/>
    <!-- Modül lideri B -> dev -->
    <line x1="570" y1="264" x2="570" y2="274"/>
  </g>

  <!-- SEVİYE 1 · PM (kırmızı, lider) · etiket gövde altından net ayrı -->
  ${teamBot(360, 44, "#ec5f52", "#c8463c")}
  <rect x="314" y="88" width="92" height="20" rx="10" fill="#fdecea"/>
  <text x="360" y="102" font-size="11" fill="#c8463c" text-anchor="middle" font-weight="700">Proje Yöneticisi</text>

  <!-- SEVİYE 2 · Teknik Lider (mor) -->
  ${teamBot(360, 122, "#7c5cf0")}
  <rect x="320" y="164" width="80" height="18" rx="9" fill="#f3eefe"/>
  <text x="360" y="177" font-size="10" fill="#5b3fd0" text-anchor="middle" font-weight="700">Teknik Lider</text>

  <!-- SEVİYE 3 · Modül Lideri A (mavi), DevOps (indigo), Modül Lideri B (yeşil) -->
  ${teamBot(150, 200, "#3b6fd4")}
  <rect x="98" y="242" width="104" height="18" rx="9" fill="#e8f0fd"/>
  <text x="150" y="255" font-size="10" fill="#2a55b0" text-anchor="middle" font-weight="700">Modül Lideri · A</text>

  ${teamBot(360, 200, "#5b6bb5")}
  <rect x="324" y="242" width="72" height="18" rx="9" fill="#eaecf6"/>
  <text x="360" y="255" font-size="10" fill="#404c8c" text-anchor="middle" font-weight="700">DevOps</text>

  ${teamBot(570, 200, "#12a594")}
  <rect x="518" y="242" width="104" height="18" rx="9" fill="#e0f5f1"/>
  <text x="570" y="255" font-size="10" fill="#0d7a6d" text-anchor="middle" font-weight="700">Modül Lideri · B</text>

  <!-- SEVİYE 4 · Developer (turuncu), Tester (yeşil), Developer (turuncu) -->
  ${teamBot(90, 278, "#e0912b")}
  <rect x="48" y="320" width="84" height="18" rx="9" fill="#fdf0d8"/>
  <text x="90" y="333" font-size="10" fill="#b5730f" text-anchor="middle" font-weight="700">Developer</text>

  ${teamBot(250, 278, "#12a594")}
  <rect x="214" y="320" width="72" height="18" rx="9" fill="#e0f5f1"/>
  <text x="250" y="333" font-size="10" fill="#0d7a6d" text-anchor="middle" font-weight="700">Tester</text>

  ${teamBot(570, 278, "#e0912b")}
  <rect x="528" y="320" width="84" height="18" rx="9" fill="#fdf0d8"/>
  <text x="570" y="333" font-size="10" fill="#b5730f" text-anchor="middle" font-weight="700">Developer</text>

  <!-- alt mesaj -->
  <rect x="60" y="352" width="600" height="48" rx="14" fill="#f4f6fb" stroke="#d9deec" stroke-width="1.5"/>
  <text x="360" y="373" font-size="12.5" fill="#242844" text-anchor="middle" font-weight="700">Her rol dar odaklı bir uzman ajan — PM böler, dağıtır, sonuçları birleştirir.</text>
  <text class="m" x="360" y="391" font-size="10.5" fill="#8892b0" text-anchor="middle">“uzmanlaşmış ajanlar her zaman daha iyi çalışır” — tıpkı gerçek bir yazılım ekibi gibi</text>
</svg>`;

SLIDE({type:"step",n:5,hue:HUES[4],label:"05 · AGENT · iş birliği",start:"son yapı taşı: tek ajan değil, bir ekip",
  q:"İŞ BİRLİĞİ (COOPERATION)",svg:SVG_S5G,cap:"büyük bir işi, her biri uzman olan ajanlar bir ekip gibi bölüşür",
  src:["Cooperation: kitap s.193"]});
