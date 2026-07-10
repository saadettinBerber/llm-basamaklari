/* ===== Slayt 16: 5f · GUARDRAILS (korkuluklar) ===== */
const SVG_S5F=`<svg viewBox="0 0 720 384">
  <!-- ÜST · gerçek tren rayı + makas: ajanın önünde çok yol var, korkuluk doğru makası açar -->
  <text class="m" x="30" y="22" font-size="11.5" fill="#242844" font-weight="700" letter-spacing=".03em">AJANIN ÖNÜNDE ÇOK YOL VAR — korkuluk doğru makası açar</text>

  <!-- travers deseni: raylara dik, eşit aralıklı, iki yandan taşan kirişler -->
  <g stroke="#c8a87c" stroke-width="6" stroke-linecap="round" opacity=".55">
    <line x1="46" y1="86" x2="46" y2="126"/><line x1="74" y1="86" x2="74" y2="126"/><line x1="102" y1="86" x2="102" y2="126"/>
    <line x1="130" y1="86" x2="130" y2="126"/><line x1="158" y1="86" x2="158" y2="126"/><line x1="186" y1="86" x2="186" y2="126"/>
    <line x1="214" y1="86" x2="214" y2="126"/>
  </g>
  <!-- makas bölgesi traversleri: uzar + hafif yelpaze -->
  <g stroke="#c8a87c" stroke-width="6" stroke-linecap="round" opacity=".55">
    <line x1="242" y1="70" x2="242" y2="142"/><line x1="272" y1="64" x2="272" y2="150"/><line x1="302" y1="60" x2="302" y2="156"/>
    <line x1="332" y1="58" x2="332" y2="160"/>
  </g>
  <!-- ayrılmış yan hatların traversleri -->
  <g stroke="#c8a87c" stroke-width="5" stroke-linecap="round" opacity=".4">
    <line x1="392" y1="60" x2="416" y2="46"/><line x1="430" y1="54" x2="454" y2="40"/>
    <line x1="392" y1="150" x2="416" y2="164"/><line x1="430" y1="156" x2="454" y2="170"/>
  </g>
  <!-- ana hattan sonra devam eden traversler (seçili yol) -->
  <g stroke="#c8a87c" stroke-width="6" stroke-linecap="round" opacity=".55">
    <line x1="392" y1="86" x2="392" y2="126"/><line x1="430" y1="86" x2="430" y2="126"/><line x1="470" y1="86" x2="470" y2="126"/>
    <line x1="510" y1="86" x2="510" y2="126"/><line x1="550" y1="86" x2="550" y2="126"/><line x1="590" y1="86" x2="590" y2="126"/>
    <line x1="630" y1="86" x2="630" y2="126"/><line x1="668" y1="86" x2="668" y2="126"/>
  </g>

  <!-- ANA HAT (çift ray, soldan makasa) -->
  <g stroke="#8892b0" stroke-width="3.5" fill="none">
    <line x1="40" y1="98" x2="340" y2="98"/><line x1="40" y1="114" x2="340" y2="114"/>
  </g>

  <!-- YASAK YOL (üst dal, soluk kırmızı, kapalı) -->
  <g stroke="#e9a9a2" stroke-width="3" fill="none">
    <path d="M340 98 C 372 98, 380 60, 470 48"/><path d="M340 114 C 378 114, 388 74, 470 62"/>
  </g>
  <line x1="452" y1="43" x2="470" y2="63" stroke="#e0576a" stroke-width="2.5"/><line x1="470" y1="43" x2="452" y2="63" stroke="#e0576a" stroke-width="2.5"/>
  <text class="m" x="486" y="52" font-size="9.5" fill="#e0576a">yasak yol · kapalı</text>

  <!-- TEHLİKELİ YOL (alt dal, soluk kırmızı, kapalı) -->
  <g stroke="#e9a9a2" stroke-width="3" fill="none">
    <path d="M340 114 C 372 114, 380 152, 470 164"/><path d="M340 98 C 378 98, 388 138, 470 150"/>
  </g>
  <line x1="452" y1="149" x2="470" y2="169" stroke="#e0576a" stroke-width="2.5"/><line x1="470" y1="149" x2="452" y2="169" stroke="#e0576a" stroke-width="2.5"/>
  <text class="m" x="486" y="168" font-size="9.5" fill="#e0576a">tehlikeli yol · kapalı</text>

  <!-- SEÇİLİ/GÜVENLİ YOL (orta, koyu yeşil, kalın, açık) -->
  <g stroke="#1d7a50" stroke-width="4" fill="none">
    <line x1="340" y1="98" x2="690" y2="98"/><line x1="340" y1="114" x2="690" y2="114"/>
  </g>
  <!-- makas göbeği (V) + dil rayı vurgusu -->
  <circle cx="340" cy="106" r="7" fill="#fff" stroke="#26a06a" stroke-width="2.5"/>
  <path d="M336 102 l4 4 l4 -4" fill="none" stroke="#26a06a" stroke-width="2" stroke-linecap="round"/>
  <!-- güvenli yolun sonunda onay -->
  <circle cx="690" cy="106" r="11" fill="#eaf7f0" stroke="#26a06a" stroke-width="2"/>
  <path d="M684 106 l4 4 l8 -9" fill="none" stroke="#26a06a" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
  <text class="m" x="516" y="136" font-size="10" fill="#1d7a50" text-anchor="middle" font-weight="700">✓ güvenli makas açık — yanlış yollar kilitli</text>

  <!-- ORTA · 3 guardrail türü + GERÇEK ÖRNEK (ağırlık burada) -->
  <text class="m" x="360" y="188" font-size="11" fill="#8892b0" text-anchor="middle">korkuluk üç şekilde kurulur — gerçek örneklerle ↓</text>
  <!-- Sınırla -->
  <rect x="24" y="200" width="222" height="92" rx="14" fill="#fff6ef" stroke="#f0c99a" stroke-width="2"/>
  <g transform="translate(52 226)" stroke="#e0912b" stroke-width="2.2" fill="none" stroke-linecap="round"><path d="M-8 8 L4 -4"/><path d="M2 -10 a6 6 0 1 0 6 6 l6 6"/></g>
  <text x="76" y="222" font-size="14.5" fill="#b5730f" font-weight="700">Sınırla</text>
  <text class="m" x="76" y="239" font-size="9" fill="#8892b0">nereye erişebilir?</text>
  <rect x="38" y="250" width="194" height="34" rx="8" fill="#fff" stroke="#f0dcb8" stroke-width="1.2"/>
  <text x="50" y="267" font-size="11" fill="#242844" font-weight="600">“prod SDP verisine yazamaz</text>
  <text x="50" y="280" font-size="11" fill="#242844" font-weight="600">— sadece okur”</text>
  <!-- Doğrula -->
  <rect x="258" y="200" width="222" height="92" rx="14" fill="#fff6ef" stroke="#f0c99a" stroke-width="2"/>
  <path d="M282 228 l6 6 l12 -14" fill="none" stroke="#e0912b" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="312" y="222" font-size="14.5" fill="#b5730f" font-weight="700">Doğrula</text>
  <text class="m" x="312" y="239" font-size="9" fill="#8892b0">geçmeden önce denetle</text>
  <rect x="272" y="250" width="194" height="34" rx="8" fill="#fff" stroke="#f0dcb8" stroke-width="1.2"/>
  <text x="284" y="267" font-size="11" fill="#242844" font-weight="600">“testler + Clean Code</text>
  <text x="284" y="280" font-size="11" fill="#242844" font-weight="600">geçmeden merge yok”</text>
  <!-- Yedekle -->
  <rect x="492" y="200" width="204" height="92" rx="14" fill="#fff6ef" stroke="#f0c99a" stroke-width="2"/>
  <g transform="translate(516 226)" fill="none" stroke="#e0912b" stroke-width="2.2"><circle cx="0" cy="0" r="9"/><circle cx="0" cy="0" r="3.5" fill="#e0912b" stroke="none"/><path d="M0 -9 v3.5 M0 5.5 v3.5 M-9 0 h3.5 M5.5 0 h3.5"/></g>
  <text x="540" y="222" font-size="14.5" fill="#b5730f" font-weight="700">Yedekle</text>
  <text class="m" x="540" y="239" font-size="9" fill="#8892b0">başaramazsa ne olur?</text>
  <rect x="506" y="250" width="176" height="34" rx="8" fill="#fff" stroke="#f0dcb8" stroke-width="1.2"/>
  <text x="518" y="267" font-size="11" fill="#242844" font-weight="600">“emin değilse insana sorar</text>
  <text x="518" y="280" font-size="11" fill="#242844" font-weight="600">/ değişikliği geri alır”</text>

  <!-- TURUNCU PARLAK SATIR: guardrail'i ajana nasıl verirsin -->
  <rect x="24" y="302" width="672" height="44" rx="12" fill="#fff2df" stroke="#e0912b" stroke-width="1.8"/>
  <text x="44" y="322" font-size="12.5" fill="#b5730f" font-weight="700">Peki ajana nasıl söylersin? Yazarak →</text>
  <text x="272" y="322" font-size="13" fill="#d97706" font-weight="800">Skills</text>
  <text class="m" x="312" y="322" font-size="10" fill="#8892b0">“bunu şöyle yap”    +</text>
  <text x="434" y="322" font-size="13" fill="#d97706" font-weight="800">Permissions</text>
  <text class="m" x="522" y="322" font-size="10" fill="#8892b0">“bunu yapma” — sert sınır</text>
  <text x="44" y="339" font-size="9.5" fill="#b5730f">Skill = ajana önceden yazdığın, tekrar kullanılabilir talimat paketi · Claude Code’da kurallar böyle verilir</text>

  <!-- havacılık alt satırı -->
  <text class="m" x="360" y="368" font-size="10.5" fill="#8892b0" text-anchor="middle">güvenlik-kritik sistemde (ATC · SDP) korkuluk bir tercih değil — zorunluluktur</text>
</svg>`;

SLIDE({type:"step",n:5,hue:HUES[4],label:"05 · AGENT · korkuluklar",start:"üçüncü yapı taşı: sınırlar ve güvenlik",
  q:"KORKULUKLAR (GUARDRAILS)",svg:SVG_S5F,cap:"ajanın önünde çok yol var — korkuluk doğru makası açar, yanlışları kilitler",
  src:["Skills: docs.claude.com/claude-code","Guardrails: kitap s.193-194"]});
