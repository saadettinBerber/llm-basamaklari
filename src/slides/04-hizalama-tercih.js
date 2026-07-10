/* ===== Slayt 4: 04-step ===== */
const SVG_S3=`<svg viewBox="0 0 640 340">
  <!-- kullanıcının sorusu, tepede -->
  <rect x="150" y="10" width="340" height="40" rx="20" fill="#f4f6fb" stroke="#d9deec" stroke-width="1.5"/>
  <text x="320" y="35" font-size="14.5" fill="#242844" text-anchor="middle">Kullanıcı: “2 + 2 = 5, değil mi?”</text>
  <line x1="320" y1="50" x2="320" y2="70" stroke="#c9d1e6" stroke-width="2" stroke-dasharray="3 3"/>

  <!-- CEVAP A · doğru + kibar → tercih edilen -->
  <rect x="30" y="78" width="330" height="112" rx="16" fill="#fff" stroke="#7c5cf0" stroke-width="2.5"/>
  <text class="m" x="50" y="102" font-size="11" fill="#7c5cf0" font-weight="700">CEVAP A</text>
  <text x="50" y="128" font-size="14.5" fill="#242844">“Aslında 2 + 2 = 4 eder.</text>
  <text x="50" y="150" font-size="14.5" fill="#242844">Yanlış anımsıyor olabilirsiniz —</text>
  <text x="50" y="172" font-size="14.5" fill="#242844">isterseniz birlikte bakalım.”</text>
  <circle cx="440" cy="134" r="30" fill="#e7f6ee"/>
  <g transform="translate(417.5 109.5) scale(2.05)" fill="#26a06a"><path d="${TU}"/></g>
  <text class="m" x="492" y="130" font-size="12.5" fill="#26a06a" font-weight="700">daha iyi</text>
  <text class="m" x="492" y="148" font-size="10.5" fill="#26a06a">dürüst + kibar</text>

  <!-- CEVAP B · dalkavuk → zayıf -->
  <rect x="30" y="208" width="330" height="98" rx="16" fill="#fbfbfd" stroke="#e6eaf4" stroke-width="2"/>
  <text class="m" x="50" y="232" font-size="11" fill="#9aa0b8" font-weight="700">CEVAP B</text>
  <text x="50" y="258" font-size="14.5" fill="#6b7192">“Kesinlikle haklısınız,</text>
  <text x="50" y="280" font-size="14.5" fill="#6b7192">2 + 2 = 5 eder!”</text>
  <circle cx="440" cy="257" r="27" fill="#fcecee"/>
  <g transform="rotate(180 440 257)"><g transform="translate(417.5 231.8) scale(2.05)" fill="#e0576a"><path d="${TU}"/></g></g>
  <text class="m" x="489" y="253" font-size="12.5" fill="#e0576a" font-weight="700">daha zayıf</text>
  <text class="m" x="489" y="271" font-size="10.5" fill="#e0576a">dalkavuk</text>
</svg>`;

SLIDE({type:"step",n:3,hue:HUES[2],label:"03 · HİZALAMA · tercih",start:"çözüm: neyin 'iyi' olduğunu insana sor",
   q:"HANGİ CEVAP DAHA İYİ?",svg:SVG_S3,cap:"insanlar cevap çiftlerini karşılaştırır · her seçim bir 'tercih verisi' olur",
   src:["Christiano ve ark., 2017 · arXiv:1706.03741","Ouyang ve ark., 2022 · arXiv:2203.02155"]});
