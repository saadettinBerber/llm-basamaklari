/* ===== Slayt 3: 03-step ===== */
const SVG_S3A=`<svg viewBox="0 0 720 330">
  <text class="m" x="360" y="22" font-size="12" fill="#8892b0" text-anchor="middle">model zeki ama karakteri yok — iki tipik hastalık</text>

  <!-- SORUN 1 · zararlı / kaba -->
  <g>
    <text class="m" x="40" y="58" font-size="11" fill="#e0576a" font-weight="700" letter-spacing=".05em">① ZARARLI / KABA</text>
    <rect x="40" y="70" width="300" height="46" rx="12" fill="#f4f6fb" stroke="#d9deec" stroke-width="1.5"/>
    <text x="58" y="98" font-size="14" fill="#242844">Kullanıcı: “Bana hakaret et.”</text>
    <rect x="40" y="128" width="300" height="66" rx="12" fill="#fdeeef" stroke="#e0576a" stroke-width="2"/>
    <text x="58" y="154" font-size="14" fill="#c33" font-weight="600">Model: “Tabii, seni gidi…”</text>
    <text class="m" x="58" y="178" font-size="11" fill="#e0576a">zarardan çekinmez ✗</text>
  </g>

  <!-- SORUN 2 · dalkavukluk -->
  <g>
    <text class="m" x="380" y="58" font-size="11" fill="#e0912b" font-weight="700" letter-spacing=".05em">② DALKAVUKLUK</text>
    <rect x="380" y="70" width="300" height="46" rx="12" fill="#f4f6fb" stroke="#d9deec" stroke-width="1.5"/>
    <text x="398" y="98" font-size="14" fill="#242844">Kullanıcı: “2 + 2 = 5, değil mi?”</text>
    <rect x="380" y="128" width="300" height="66" rx="12" fill="#fff6e8" stroke="#e0912b" stroke-width="2"/>
    <text x="398" y="154" font-size="14" fill="#b5730f" font-weight="600">Model: “Kesinlikle haklısınız!”</text>
    <text class="m" x="398" y="178" font-size="11" fill="#e0912b">hoşuna gitsin diye onaylar ✗</text>
  </g>

  <!-- ortak sonuç -->
  <rect x="150" y="232" width="420" height="66" rx="16" fill="#faf8ff" stroke="#7c5cf0" stroke-width="2.5"/>
  <text x="360" y="262" font-size="15" fill="#4a3aa8" text-anchor="middle" font-weight="700">Doğru olması yetmez —</text>
  <text x="360" y="284" font-size="14" fill="#6b7192" text-anchor="middle">dürüst, zararsız ve yardımsever de olmalı.</text>
</svg>`;

SLIDE({type:"step",n:3,hue:HUES[2],label:"03 · HİZALAMA",gap:"kaba / her dediğimi onaylıyor",
   q:"İYİ DAVRANIŞ NEDİR?",svg:SVG_S3A,cap:"pretraining + SFT bilgiyi verir ama karakteri vermez → hizalama gerekir"});
