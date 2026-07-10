/* ===== Slayt 14: 14-step ===== */
const SVG_S5D=`<svg viewBox="0 0 720 384">
  <defs><marker id="d5d" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#26a06a"/></marker></defs>

  <!-- ÜST · ortak: proje bağlamı baştan söylenir -->
  <rect x="150" y="6" width="420" height="42" rx="12" fill="#eef1f8" stroke="#c9d1e6" stroke-width="1.5"/>
  <text class="m" x="170" y="24" font-size="9.5" fill="#9aa0b8">proje başında bir kez söylenir</text>
  <text x="170" y="40" font-size="12" fill="#242844">ATC · SDP projesi — <tspan font-weight="700">Java · hexagonal · Clean Code</tspan></text>

  <!-- ===== SOL (daha solda) · HAFIZASIZ · düz LLM ===== -->
  <text class="m" x="24" y="76" font-size="11" fill="#8892b0" font-weight="700" letter-spacing=".03em">HAFIZASIZ · düz LLM</text>
  <rect x="18" y="86" width="228" height="270" rx="18" fill="#fbfbfd" stroke="#d9deec" stroke-width="2"/>
  <text class="m" x="36" y="112" font-size="9.5" fill="#9aa0b8">görev verilir</text>
  <rect x="36" y="120" width="192" height="30" rx="9" fill="#eef1f8"/>
  <text x="50" y="140" font-size="11.5" fill="#242844">“Uçuş rota servisi ekle.”</text>
  <!-- düz LLM yüzü (robot değil) -->
  <g transform="translate(60 196)">
    <rect x="-18" y="-16" width="36" height="32" rx="9" fill="#f4f6fb" stroke="#9aa8c8" stroke-width="2"/>
    <circle cx="-7" cy="-3" r="3.5" fill="#9aa8c8"/><circle cx="7" cy="-3" r="3.5" fill="#9aa8c8"/>
    <path d="M-6 8 q6 -5 12 0" fill="none" stroke="#9aa8c8" stroke-width="2" stroke-linecap="round"/>
  </g>
  <rect x="36" y="168" width="192" height="120" rx="12" fill="#f4f6fb" stroke="#c9d1e6" stroke-width="1.6"/>
  <text x="90" y="190" font-size="11.5" fill="#6b7192">“Hangi dilde?</text>
  <text x="90" y="207" font-size="11.5" fill="#6b7192">Hangi mimari?</text>
  <text x="90" y="224" font-size="11.5" fill="#6b7192">Kod kuralları</text>
  <text x="90" y="241" font-size="11.5" fill="#6b7192">neler? SDP ne?”</text>
  <text class="m" x="54" y="266" font-size="9.5" fill="#e0576a">✗ hiçbirini bilmiyor</text>
  <text class="m" x="54" y="280" font-size="9" fill="#9aa0b8">her seferinde sıfırdan</text>

  <!-- AYIRICI ÇİZGİ -->
  <line x1="262" y1="70" x2="262" y2="360" stroke="#d9deec" stroke-width="2" stroke-dasharray="6 6"/>
  <text class="m" x="262" y="64" font-size="10" fill="#c9d1e6" text-anchor="middle">vs</text>

  <!-- ===== SAĞ · HAFIZALI · düşünen ajan (kahraman robot) ===== -->
  <text class="m" x="702" y="76" font-size="11" fill="#ec5f52" font-weight="700" letter-spacing=".03em" text-anchor="end">HAFIZALI · düşünen ajan</text>
  <rect x="278" y="86" width="424" height="270" rx="18" fill="#fff" stroke="#ec5f52" stroke-width="2.5"/>

  <!-- kahraman robot (tutarlı ajan) + hafıza rozeti -->
  <g transform="translate(318 128)">
    <path d="M-30 34 Q-30 12 -17 9 L17 9 Q30 12 30 34 Z" fill="#fdecea" stroke="#ec5f52" stroke-width="2.2"/>
    <path d="M-19 -22 Q-19 -31 -11 -33 L11 -33 Q19 -31 19 -22 L19 -8 Q19 -3 13 -2 L-13 -2 Q-19 -3 -19 -8 Z" fill="#ec5f52"/>
    <rect x="-14" y="-20" width="28" height="12" rx="4" fill="#2b2f4a"/>
    <circle cx="-6.5" cy="-14" r="3" fill="#8fd0ff"/><circle cx="6.5" cy="-14" r="3" fill="#8fd0ff"/>
    <path d="M-19 -17 l-5 -3 v8 l5 -1 z" fill="#c8463c"/><path d="M19 -17 l5 -3 v8 l-5 -1 z" fill="#c8463c"/>
    <line x1="0" y1="-33" x2="0" y2="-40" stroke="#ec5f52" stroke-width="2.5"/><circle cx="0" cy="-42" r="3.5" fill="#ec5f52"/>
  </g>
  <g transform="translate(430 118)">
    <rect x="-58" y="-11" width="116" height="22" rx="11" fill="#fff6e8" stroke="#e0912b" stroke-width="1.5"/>
    <rect x="-50" y="-6" width="10" height="13" rx="2" fill="#fdf0d8" stroke="#e0912b" stroke-width="1.2"/>
    <text class="m" x="-32" y="4" font-size="9" fill="#b5730f">proje hafızada ✓</text>
  </g>
  <text class="m" x="560" y="150" font-size="9.5" fill="#9aa0b8" text-anchor="middle">aynı görev — ama önce düşünür ↓</text>

  <!-- DÜŞÜNCE AKIŞI · yatay 3 adım -->
  <g font-weight="400">
    <!-- adım 1: hatırla + SDP -->
    <rect x="296" y="166" width="128" height="86" rx="11" fill="#faf6ff" stroke="#c9b8f5" stroke-width="1.6"/>
    <text class="m" x="308" y="184" font-size="8.5" fill="#7c5cf0" font-weight="700">1 · HATIRLA</text>
    <text x="308" y="201" font-size="10" fill="#4a3aa8">SDP = Surveillance</text>
    <text x="308" y="215" font-size="10" fill="#4a3aa8">Data Processing</text>
    <text x="308" y="229" font-size="9.5" fill="#6b7192">(radar/gözetim verisi</text>
    <text x="308" y="242" font-size="9.5" fill="#6b7192">işleyen modül)</text>

    <path d="M424 209 L438 209" stroke="#26a06a" stroke-width="2" marker-end="url(#d5d)"/>

    <!-- adım 2: kuralları uygula -->
    <rect x="440" y="166" width="128" height="86" rx="11" fill="#faf6ff" stroke="#c9b8f5" stroke-width="1.6"/>
    <text class="m" x="452" y="184" font-size="8.5" fill="#7c5cf0" font-weight="700">2 · KURALLARI UYGULA</text>
    <text x="452" y="203" font-size="10" fill="#4a3aa8">Java + hexagonal</text>
    <text x="452" y="219" font-size="10" fill="#4a3aa8">port/adapter katmanı</text>
    <text x="452" y="238" font-size="10" fill="#4a3aa8">Clean Code’a uygun</text>

    <path d="M568 209 L582 209" stroke="#26a06a" stroke-width="2" marker-end="url(#d5d)"/>

    <!-- adım 3: üret -->
    <rect x="584" y="166" width="104" height="86" rx="11" fill="#eaf7f0" stroke="#26a06a" stroke-width="1.8"/>
    <text class="m" x="596" y="184" font-size="8.5" fill="#1d7a50" font-weight="700">3 · ÜRET</text>
    <text x="596" y="203" font-size="10" fill="#1d7a50">rota servisini</text>
    <text x="596" y="219" font-size="10" fill="#1d7a50">projenin diliyle</text>
    <text x="596" y="235" font-size="10" fill="#1d7a50">ekler ✓</text>
  </g>

  <text class="m" x="490" y="284" font-size="10.5" fill="#1d7a50" text-anchor="middle" font-weight="700">✓ hiçbir şeyi tekrar sormaz — bir ekip üyesi gibi</text>
  <text class="m" x="490" y="302" font-size="9.5" fill="#8892b0" text-anchor="middle">bağlamı hatırlar + üstüne düşünüp doğru kararı verir</text>
</svg>`;

SLIDE({type:"step",n:5,hue:HUES[4],label:"05 · AGENT · hafıza",start:"ikinci yapı taşı: geçmişi hatırlamak",
   q:"HAFIZA NEDEN GEREKLİ?",svg:SVG_S5D,cap:"hafızasız ajan projenizi her seferinde baştan öğrenir · hafıza = süreklilik"});
