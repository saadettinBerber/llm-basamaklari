/* ===== Slayt 8: 08-step ===== */
const SVG_S4=`<svg viewBox="0 0 640 330">
  <defs><marker id="a4" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#e0912b"/></marker></defs>

  <!-- müsvedde defteri -->
  <rect x="30" y="24" width="360" height="284" rx="14" fill="#fffdf5" stroke="#f0d9a8" stroke-width="2.5"/>
  <g fill="#f0d9a8"><circle cx="72" cy="24" r="4"/><circle cx="130" cy="24" r="4"/><circle cx="188" cy="24" r="4"/><circle cx="246" cy="24" r="4"/><circle cx="304" cy="24" r="4"/></g>
  <text class="m" x="56" y="58" font-size="12" fill="#c79a4e" letter-spacing=".04em">MÜSVEDDE — “adım adım düşün”</text>

  <!-- adımlar -->
  <g>
    <circle cx="76" cy="104" r="16" fill="#fcefd6" stroke="#e0912b" stroke-width="2"/>
    <text x="76" y="110" font-size="14" font-weight="700" fill="#e0912b" text-anchor="middle">1</text>
    <text x="104" y="102" font-size="14" fill="#242844">Başta 23 elma vardı.</text>
    <text x="104" y="120" font-size="13" fill="#6b7192">23</text>
  </g>
  <g>
    <circle cx="76" cy="160" r="16" fill="#fcefd6" stroke="#e0912b" stroke-width="2"/>
    <text x="76" y="166" font-size="14" font-weight="700" fill="#e0912b" text-anchor="middle">2</text>
    <text x="104" y="158" font-size="14" fill="#242844">20’sini kullandılar.</text>
    <text x="104" y="176" font-size="13" fill="#6b7192">23 − 20 = 3</text>
  </g>
  <g>
    <circle cx="76" cy="216" r="16" fill="#fcefd6" stroke="#e0912b" stroke-width="2"/>
    <text x="76" y="222" font-size="14" font-weight="700" fill="#e0912b" text-anchor="middle">3</text>
    <text x="104" y="214" font-size="14" fill="#242844">6 elma daha aldılar.</text>
    <text x="104" y="232" font-size="13" fill="#6b7192">3 + 6 = 9</text>
  </g>
  <line x1="76" y1="120" x2="76" y2="144" stroke="#e8c88a" stroke-width="2"/>
  <line x1="76" y1="176" x2="76" y2="200" stroke="#e8c88a" stroke-width="2"/>
  <path d="M76 232 C 76 262, 140 268, 190 268" stroke="#e0912b" stroke-width="2.5" fill="none" marker-end="url(#a4)"/>
  <rect x="196" y="250" width="150" height="40" rx="12" fill="#26a06a"/>
  <text x="271" y="276" font-size="15" font-weight="700" fill="#fff" text-anchor="middle">Cevap: 9 ✓</text>

  <!-- sağ · kazanım -->
  <line x1="410" y1="40" x2="410" y2="292" stroke="#eef1f8" stroke-width="1.5"/>
  <text class="m" x="510" y="66" font-size="11" fill="#c79a4e" letter-spacing=".04em" text-anchor="middle">GSM8K MATEMATİK TESTİ</text>
  <!-- standart çubuk -->
  <rect x="446" y="102" width="34" height="92" rx="5" fill="#f0e3c8"/>
  <text x="463" y="210" font-size="13" font-weight="700" fill="#b5730f" text-anchor="middle">%18</text>
  <text class="m" x="463" y="228" font-size="10" fill="#9aa0b8" text-anchor="middle">standart</text>
  <!-- CoT çubuk -->
  <rect x="540" y="102" width="34" height="92" rx="5" fill="#f0e3c8" opacity=".4"/>
  <rect x="540" y="102" width="34" height="92" rx="5" fill="none" stroke="#e0912b" stroke-width="2"/>
  <rect x="540" y="120" width="34" height="74" rx="5" fill="#e0912b"/>
  <text x="557" y="210" font-size="13" font-weight="700" fill="#e0912b" text-anchor="middle">%57</text>
  <text class="m" x="557" y="228" font-size="10" fill="#e0912b" text-anchor="middle">adım adım</text>
  <text class="m" x="510" y="258" font-size="10.5" fill="#8892b0" text-anchor="middle">Wei ve ark., 2022</text>
  <text class="m" x="510" y="278" font-size="10" fill="#a9b0c8" text-anchor="middle">yalnızca büyük modellerde (~100B+)</text>
</svg>`;

SLIDE({type:"step",n:4,hue:HUES[3],label:"04 · DÜŞÜNME · zincir",start:"çözüm: cevaptan önce ara adımları yazdır",
   q:"ÖNCE MÜSVEDDE, SONRA CEVAP",svg:SVG_S4,cap:"'düşünce zinciri' (CoT) · sadece büyük modellerde beliren bir yetenek",
   src:["Wei ve ark., 2022 · arXiv:2201.11903"]});
