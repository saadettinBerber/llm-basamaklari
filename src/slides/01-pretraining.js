/* ===== Slayt 1: 01-step ===== */
const SVG_S1=`<svg viewBox="0 0 620 330">
  <defs>
    <marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#3b6fd4"/></marker>
    <marker id="a1b" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#9aa8c8"/></marker>
  </defs>

  <!-- column captions -->
  <text class="m" x="150" y="26" font-size="11" fill="#8892b0" text-anchor="middle">şimdiye kadarki metin</text>
  <text class="m" x="360" y="26" font-size="11" fill="#3b6fd4" text-anchor="middle" font-weight="700">MODEL</text>
  <text class="m" x="536" y="26" font-size="11" fill="#8892b0" text-anchor="middle">tahmin: sıradaki kelime</text>

  <!-- ===== row 1 ===== -->
  <g transform="translate(0 66)">
    <rect x="22" y="-22" width="256" height="44" rx="11" fill="#eef4fe" stroke="#cfe0fb" stroke-width="1.5"/>
    <text x="42" y="6" font-size="16" fill="#242844">Bugün hava</text>
    <rect x="300" y="-20" width="120" height="40" rx="10" fill="#3b6fd4"/>
    <circle cx="333" cy="0" r="5" fill="#fff"/><circle cx="360" cy="0" r="5" fill="#fff"/><rect x="378" y="-2.5" width="12" height="5" rx="2.5" fill="#fff"/>
    <path d="M282 0 L298 0" stroke="#3b6fd4" stroke-width="2.5" marker-end="url(#a1)"/>
    <path d="M422 0 L470 0" stroke="#3b6fd4" stroke-width="2.5" marker-end="url(#a1)"/>
    <rect x="474" y="-19" width="72" height="38" rx="10" fill="#e2ebfb" stroke="#3b6fd4" stroke-width="1.5"/>
    <text x="510" y="6" font-size="16" font-weight="700" fill="#3b6fd4" text-anchor="middle">çok</text>
  </g>

  <!-- feedback curve 1 -> 2 -->
  <path d="M510 66 C 510 92, 300 92, 300 118" fill="none" stroke="#9aa8c8" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#a1b)"/>

  <!-- ===== row 2 ===== -->
  <g transform="translate(0 164)">
    <rect x="22" y="-22" width="256" height="44" rx="11" fill="#eef4fe" stroke="#cfe0fb" stroke-width="1.5"/>
    <text x="42" y="6" font-size="16" fill="#242844">Bugün hava <tspan fill="#3b6fd4" font-weight="700">çok</tspan></text>
    <rect x="300" y="-20" width="120" height="40" rx="10" fill="#3b6fd4"/>
    <circle cx="333" cy="0" r="5" fill="#fff"/><circle cx="360" cy="0" r="5" fill="#fff"/><rect x="378" y="-2.5" width="12" height="5" rx="2.5" fill="#fff"/>
    <path d="M282 0 L298 0" stroke="#3b6fd4" stroke-width="2.5" marker-end="url(#a1)"/>
    <path d="M422 0 L470 0" stroke="#3b6fd4" stroke-width="2.5" marker-end="url(#a1)"/>
    <rect x="474" y="-19" width="72" height="38" rx="10" fill="#e2ebfb" stroke="#3b6fd4" stroke-width="1.5"/>
    <text x="510" y="6" font-size="16" font-weight="700" fill="#3b6fd4" text-anchor="middle">güzel</text>
  </g>

  <!-- feedback curve 2 -> 3 -->
  <path d="M510 164 C 510 190, 300 190, 300 216" fill="none" stroke="#9aa8c8" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#a1b)"/>

  <!-- ===== row 3 ===== -->
  <g transform="translate(0 262)">
    <rect x="22" y="-22" width="256" height="44" rx="11" fill="#eef4fe" stroke="#cfe0fb" stroke-width="1.5"/>
    <text x="42" y="6" font-size="16" fill="#242844">Bugün hava çok <tspan fill="#3b6fd4" font-weight="700">güzel</tspan></text>
    <rect x="300" y="-20" width="120" height="40" rx="10" fill="#3b6fd4"/>
    <circle cx="333" cy="0" r="5" fill="#fff"/><circle cx="360" cy="0" r="5" fill="#fff"/><rect x="378" y="-2.5" width="12" height="5" rx="2.5" fill="#fff"/>
    <path d="M282 0 L298 0" stroke="#3b6fd4" stroke-width="2.5" marker-end="url(#a1)"/>
    <path d="M422 0 L470 0" stroke="#3b6fd4" stroke-width="2.5" marker-end="url(#a1)"/>
    <rect x="474" y="-19" width="72" height="38" rx="10" fill="#e2ebfb" stroke="#3b6fd4" stroke-width="1.5"/>
    <text x="510" y="7" font-size="20" font-weight="700" fill="#3b6fd4" text-anchor="middle">.</text>
  </g>
</svg>`;

SLIDE({type:"step",n:1,hue:HUES[0],label:"01 · PRETRAINING",start:"başlangıç · her şey buradan başlar",
   q:"BİR SONRAKİ KELİME NEDİR?",svg:SVG_S1,cap:"her tahmin geri beslenir · kelime kelime metin üretilir"});
