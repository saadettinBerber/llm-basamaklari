/* ===== Slayt 15: 15-step ===== */
const SVG_S5E=`<svg viewBox="0 0 680 350">
  <!-- ÜST · kapsam: kısa vadeli / uzun vadeli -->
  <text class="m" x="40" y="22" font-size="10" fill="#8892b0" font-weight="700" letter-spacing=".04em">KAPSAMA GÖRE</text>
  <g>
    <rect x="150" y="8" width="240" height="30" rx="15" fill="#eef1f8" stroke="#c9d1e6" stroke-width="1.5"/>
    <circle cx="172" cy="23" r="6" fill="#9aa8c8"/>
    <text x="186" y="27" font-size="12" fill="#242844" font-weight="700">Kısa vadeli</text>
    <text class="m" x="278" y="27" font-size="10" fill="#8892b0">— sadece bu oturum</text>
  </g>
  <g>
    <rect x="404" y="8" width="240" height="30" rx="15" fill="#fff6e8" stroke="#e0912b" stroke-width="1.5"/>
    <circle cx="426" cy="23" r="6" fill="#e0912b"/>
    <text x="440" y="27" font-size="12" fill="#242844" font-weight="700">Uzun vadeli</text>
    <text class="m" x="536" y="27" font-size="10" fill="#8892b0">— oturumlar arası kalıcı</text>
  </g>

  <text class="m" x="340" y="68" font-size="10.5" fill="#8892b0" text-anchor="middle">uzun vadeli hafıza, tıpkı insandaki gibi üçe ayrılır ↓</text>

  <!-- ALT · 3 tür (insan analojisi) -->
  <!-- SEMANTİK -->
  <g>
    <rect x="30" y="86" width="200" height="230" rx="18" fill="#faf6ff" stroke="#c9b8f5" stroke-width="2"/>
    <circle cx="130" cy="128" r="26" fill="#f3eefe"/>
    <g transform="translate(130 128)"><path d="M0 -13 q-14 0 -14 9 q-6 0 -6 6 q0 6 8 6 l24 0 q8 0 8 -6 q0 -6 -6 -6 q0 -9 -14 -9 Z" fill="#e7dcfb" stroke="#7c5cf0" stroke-width="1.6"/><circle cx="0" cy="0" r="2.4" fill="#7c5cf0"/></g>
    <text x="130" y="172" font-size="15" fill="#4a3aa8" text-anchor="middle" font-weight="700">Semantik</text>
    <line x1="52" y1="186" x2="208" y2="186" stroke="#e0d8fa" stroke-width="1.5"/>
    <text class="m" x="48" y="208" font-size="10" fill="#7c5cf0" font-weight="700">insan:</text>
    <text x="48" y="226" font-size="12" fill="#242844">okulda öğrenilen</text>
    <text x="48" y="242" font-size="12" fill="#242844">gerçekler, bilgiler</text>
    <text class="m" x="48" y="270" font-size="10" fill="#7c5cf0" font-weight="700">ajan:</text>
    <text x="48" y="288" font-size="12" fill="#6b7192">kullanıcı/dünya</text>
    <text x="48" y="304" font-size="12" fill="#6b7192">hakkındaki gerçekler</text>
  </g>

  <!-- EPİZODİK -->
  <g>
    <rect x="240" y="86" width="200" height="230" rx="18" fill="#fff6ef" stroke="#f0c99a" stroke-width="2"/>
    <circle cx="340" cy="128" r="26" fill="#fdeede"/>
    <g transform="translate(340 128)"><rect x="-15" y="-11" width="30" height="22" rx="3" fill="#fbe3c8" stroke="#e0912b" stroke-width="1.6"/><circle cx="0" cy="0" r="5" fill="none" stroke="#e0912b" stroke-width="1.6"/><path d="M-2 -2 l4 2 l-4 2 z" fill="#e0912b"/></g>
    <text x="340" y="172" font-size="15" fill="#b5730f" text-anchor="middle" font-weight="700">Epizodik</text>
    <line x1="262" y1="186" x2="418" y2="186" stroke="#f0dcb8" stroke-width="1.5"/>
    <text class="m" x="258" y="208" font-size="10" fill="#e0912b" font-weight="700">insan:</text>
    <text x="258" y="226" font-size="12" fill="#242844">yaşadığın</text>
    <text x="258" y="242" font-size="12" fill="#242844">deneyimler, anılar</text>
    <text class="m" x="258" y="270" font-size="10" fill="#e0912b" font-weight="700">ajan:</text>
    <text x="258" y="288" font-size="12" fill="#6b7192">geçmiş eylemler,</text>
    <text x="258" y="304" font-size="12" fill="#6b7192">önceki sohbetler</text>
  </g>

  <!-- PROSEDÜREL -->
  <g>
    <rect x="450" y="86" width="200" height="230" rx="18" fill="#eefaf7" stroke="#9edcca" stroke-width="2"/>
    <circle cx="550" cy="128" r="26" fill="#e2f6f0"/>
    <g transform="translate(550 128)" stroke="#12a594" stroke-width="1.8" fill="none" stroke-linecap="round"><circle cx="0" cy="0" r="7"/><path d="M0 -12 v3 M0 9 v3 M-12 0 h3 M9 0 h3 M-8.5 -8.5 l2 2 M6.5 6.5 l2 2 M8.5 -8.5 l-2 2 M-6.5 6.5 l-2 2"/></g>
    <text x="550" y="172" font-size="15" fill="#0d7a6d" text-anchor="middle" font-weight="700">Prosedürel</text>
    <line x1="472" y1="186" x2="628" y2="186" stroke="#cdeee7" stroke-width="1.5"/>
    <text class="m" x="468" y="208" font-size="10" fill="#12a594" font-weight="700">insan:</text>
    <text x="468" y="226" font-size="12" fill="#242844">nasıl yapılacağı</text>
    <text x="468" y="242" font-size="12" fill="#242844">(bisiklete binmek)</text>
    <text class="m" x="468" y="270" font-size="10" fill="#12a594" font-weight="700">ajan:</text>
    <text x="468" y="288" font-size="12" fill="#6b7192">içselleşmiş</text>
    <text x="468" y="304" font-size="12" fill="#6b7192">talimatlar, kurallar</text>
  </g>
</svg>`;

SLIDE({type:"step",n:5,hue:HUES[4],label:"05 · AGENT · hafıza türleri",start:"peki ajan neyi, nasıl hatırlar?",
   q:"HAFIZA TÜRLERİ",svg:SVG_S5E,cap:"tıpkı insan gibi: bildiği gerçekler · yaşadıkları · nasıl yapılacağı"});
