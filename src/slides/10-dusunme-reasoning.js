/* ===== Slayt 10: 10-step ===== */
const SVG_S4D=`<svg viewBox="0 0 640 330">
  <defs><marker id="a4d" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#e0912b"/></marker></defs>

  <!-- eski → yeni geçiş şeridi -->
  <rect x="30" y="34" width="250" height="120" rx="14" fill="#f4f6fb" stroke="#d9deec" stroke-width="1.8"/>
  <text class="m" x="50" y="60" font-size="10.5" fill="#8892b0" letter-spacing=".04em">ESKİ · 2022</text>
  <text x="50" y="88" font-size="14.5" fill="#6b7192">Biz modele</text>
  <text x="50" y="110" font-size="14.5" fill="#242844" font-weight="600">“adım adım düşün”</text>
  <text x="50" y="132" font-size="14.5" fill="#6b7192">derdik — bir prompt hilesi.</text>

  <path d="M284 94 L330 94" stroke="#e0912b" stroke-width="3" fill="none" marker-end="url(#a4d)"/>

  <rect x="336" y="34" width="274" height="120" rx="14" fill="#fff6e8" stroke="#e0912b" stroke-width="2.5"/>
  <text class="m" x="356" y="60" font-size="10.5" fill="#e0912b" letter-spacing=".04em">YENİ · 2024–2025</text>
  <text x="356" y="88" font-size="14.5" fill="#242844">Model düşünmeyi</text>
  <text x="356" y="110" font-size="14.5" fill="#b5730f" font-weight="700">RL ile kendisi öğrendi.</text>
  <text x="356" y="132" font-size="13" fill="#6b7192">cevaptan önce uzun uzun “düşünür”.</text>

  <!-- iki model kartı -->
  <rect x="30" y="176" width="285" height="126" rx="14" fill="#fff" stroke="#e6eaf4" stroke-width="2"/>
  <text class="m" x="50" y="202" font-size="12" fill="#242844" font-weight="700">OpenAI o1 · Eylül 2024</text>
  <text x="50" y="225" font-size="13" fill="#6b7192">Gizli, uzun düşünce zinciri.</text>
  <text class="m" x="50" y="250" font-size="11.5" fill="#6b7192">AIME:</text>
  <text x="296" y="250" font-size="15" font-weight="700" fill="#b5730f" text-anchor="end">%13 <tspan fill="#8892b0" font-weight="400">→</tspan> %83</text>
  <rect x="50" y="264" width="246" height="26" rx="13" fill="#fdeee0"/>
  <text class="m" x="62" y="281" font-size="10.5" fill="#c47f1a">GPQA’da PhD uzmanları geçen ilk model</text>

  <rect x="325" y="176" width="285" height="126" rx="14" fill="#fff" stroke="#e6eaf4" stroke-width="2"/>
  <text class="m" x="345" y="202" font-size="12" fill="#242844" font-weight="700">DeepSeek-R1 · Ocak 2025</text>
  <text x="345" y="226" font-size="13" fill="#6b7192">Saf RL ile “aha anı”.</text>
  <text x="345" y="250" font-size="13" fill="#6b7192">Düşüncesini gösterir, açık ağırlık.</text>
  <rect x="345" y="264" width="180" height="24" rx="12" fill="#eaf7f0"/>
  <text class="m" x="358" y="280" font-size="10.5" fill="#26a06a">o1 ile başa baş · herkese açık</text>
</svg>`;

SLIDE({type:"step",n:4,hue:HUES[3],label:"04 · DÜŞÜNME · bugün",start:"artık düşünmeyi söylemeye gerek yok",
   q:"DÜŞÜNMEYİ ÖĞRENEN MODELLER",svg:SVG_S4D,cap:"muhakeme artık promptta değil, ağırlıklarda · 'daha uzun düşün = daha iyi cevap'",
   src:["OpenAI o1, 2024 · openai.com/index/learning-to-reason-with-llms","DeepSeek-R1, 2025 · arXiv:2501.12948"]});
