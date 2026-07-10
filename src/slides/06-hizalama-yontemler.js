/* ===== Slayt 6: 06-step ===== */
const SVG_S3D=`<svg viewBox="0 0 700 330">
  <text class="m" x="350" y="26" font-size="12" fill="#8892b0" text-anchor="middle">aynı hedef, üç farklı yol: modeli insan tercihine hizala</text>

  <!-- PPO -->
  <g>
    <rect x="34" y="58" width="196" height="196" rx="18" fill="#f3eefe" stroke="#7c5cf0" stroke-width="2.5"/>
    <text class="m" x="132" y="92" font-size="15" fill="#7c5cf0" text-anchor="middle" font-weight="700">PPO</text>
    <line x1="60" y1="106" x2="204" y2="106" stroke="#e0d8fa" stroke-width="1.5"/>
    <text x="132" y="132" font-size="12.5" fill="#4a3aa8" text-anchor="middle">Ödül modelinden</text>
    <text x="132" y="152" font-size="12.5" fill="#4a3aa8" text-anchor="middle">puan alıp dener-yanılır.</text>
    <text class="m" x="132" y="188" font-size="10.5" fill="#8892b0" text-anchor="middle">güçlü ama</text>
    <text class="m" x="132" y="204" font-size="10.5" fill="#8892b0" text-anchor="middle">kurulumu karmaşık</text>
    <text class="m" x="132" y="236" font-size="10" fill="#a99be0" text-anchor="middle">RL tabanlı · klasik yöntem</text>
  </g>

  <!-- DPO -->
  <g>
    <rect x="252" y="58" width="196" height="196" rx="18" fill="#eef7f5" stroke="#12a594" stroke-width="2.5"/>
    <text class="m" x="350" y="92" font-size="15" fill="#12a594" text-anchor="middle" font-weight="700">DPO</text>
    <line x1="278" y1="106" x2="422" y2="106" stroke="#cdeee7" stroke-width="1.5"/>
    <text x="350" y="132" font-size="12.5" fill="#0d7a6d" text-anchor="middle">Ayrı ödül modeli yok —</text>
    <text x="350" y="152" font-size="12.5" fill="#0d7a6d" text-anchor="middle">tercihi doğrudan öğrenir.</text>
    <text class="m" x="350" y="188" font-size="10.5" fill="#8892b0" text-anchor="middle">daha basit,</text>
    <text class="m" x="350" y="204" font-size="10.5" fill="#8892b0" text-anchor="middle">daha kararlı</text>
    <text class="m" x="350" y="236" font-size="10" fill="#7ec9bd" text-anchor="middle">bugün en yaygın</text>
  </g>

  <!-- KTO -->
  <g>
    <rect x="470" y="58" width="196" height="196" rx="18" fill="#fff6e8" stroke="#e0912b" stroke-width="2.5"/>
    <text class="m" x="568" y="92" font-size="15" fill="#e0912b" text-anchor="middle" font-weight="700">KTO</text>
    <line x1="496" y1="106" x2="640" y2="106" stroke="#f0dcb8" stroke-width="1.5"/>
    <text x="568" y="132" font-size="12.5" fill="#b5730f" text-anchor="middle">Çift gerekmez —</text>
    <text x="568" y="152" font-size="12.5" fill="#b5730f" text-anchor="middle">“iyi” / “kötü” yeter.</text>
    <text class="m" x="568" y="188" font-size="10.5" fill="#8892b0" text-anchor="middle">veri toplaması</text>
    <text class="m" x="568" y="204" font-size="10.5" fill="#8892b0" text-anchor="middle">en kolay</text>
    <text class="m" x="568" y="236" font-size="10" fill="#e8bd7a" text-anchor="middle">tek tek geri bildirim</text>
  </g>
</svg>`;

SLIDE({type:"step",n:3,hue:HUES[2],label:"03 · HİZALAMA · yöntemler",start:"peki bu hizalama pratikte nasıl yapılır?",
   q:"HİZALAMANIN ÜÇ YOLU",svg:SVG_S3D,cap:"PPO · DPO · KTO — aynı hedefe farklı yollar",
   src:["PPO: Schulman ve ark., 2017 · arXiv:1707.06347","DPO: Rafailov ve ark., 2023 · arXiv:2305.18290","KTO: Ethayarajh ve ark., 2024 · arXiv:2402.01306"]});
