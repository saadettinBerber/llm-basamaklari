/* ===== PAYLAŞILAN: robot inşa merdiveni (intro + recap birlikte kullanır) =====
   LLM basamak basamak inşa edilirken robot da parça parça tamamlanır ve
   giderek yükselen bir sütunun üstünde durur (merdiven).
   1 tohum · 2 kafa · 3 gövde+kol · 4 gövde+kol + BÜYÜK KAFA (bacaksız) ·
   5 tam robot (bacaklar) + büyük + jetpack + parlama. Her adım basamak renginde.
   sub: her adımın altındaki üst-etiket dizisi. */
function buildLadder(sub,names){
  const C=["#3b6fd4","#12a594","#7c5cf0","#e0912b","#ec5f52"];
  const D=["#2a55b0","#0e8478","#5b3fd0","#c77d1e","#c8463c"];
  const cx=[95,232,378,524,672];            // yatay merkezler
  const colTop=[248,224,196,168,132];       // sütun tepe y'leri (yükselen merdiven)
  const baseY=292;                          // merdiven tabanı
  let s="";
  // sütunlar (podyum) — robot bunların üstünde durur
  for(let i=0;i<5;i++){
    const x=cx[i]-40, w=80, y=colTop[i], h=baseY-y;
    s+=`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="9" fill="${C[i]}" opacity=".12"/>`
      +`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="9" fill="none" stroke="${C[i]}" stroke-width="2"/>`;
  }
  // her adımın robotu, sütun tepesine oturur (y = colTop[i])
  s+=robotStage(0,cx[0],colTop[0],C[0],D[0],{seed:true});
  s+=robotStage(1,cx[1],colTop[1],C[1],D[1],{head:1});
  s+=robotStage(2,cx[2],colTop[2],C[2],D[2],{head:1,body:1,arms:1});
  s+=robotStage(3,cx[3],colTop[3],C[3],D[3],{head:1.4,body:1,arms:1,bolts:1});   // BÜYÜK kafa + kafa yıldırımları, bacak yok
  s+=robotStage(4,cx[4],colTop[4],C[4],D[4],{head:1.3,body:1,arms:1,legs:1,jet:1,big:1,glow:1,bolts:1});  // en büyük + ihtişamlı
  // etiketler (sütun altına) — names verilmezse basamak adları
  const nm=names||["PRETRAINING","SFT","HİZALAMA","DÜŞÜNME","AGENT"];
  for(let i=0;i<5;i++){
    s+=`<text class="m" x="${cx[i]}" y="${baseY+18}" font-size="9.5" fill="${C[i]}" text-anchor="middle" font-weight="700" letter-spacing=".02em">${nm[i]}</text>`
      +`<text class="m" x="${cx[i]}" y="${baseY+31}" font-size="8" fill="#9aa8c8" text-anchor="middle">${sub[i]}</text>`;
  }
  return s;
}
/* tek bir inşa aşaması robotu; (x,ty)=sütun tepe noktası, robot bunun üstünde durur */
function robotStage(i,x,ty,c,d,p){
  const g=(s)=>`<g transform="translate(${x} ${ty})">${s}</g>`;
  if(p.seed) return g(`<circle cx="0" cy="-16" r="15" fill="${c}" opacity=".22"/><circle cx="0" cy="-16" r="7" fill="${c}"/><circle cx="0" cy="-16" r="2.5" fill="#fff"/>`);
  const hs=p.head||1;                        // kafa ölçeği
  let s="";
  // robotun tabanı sütun üstünde (y=0). Bacak varsa ayaklar y=0'a oturur,
  // yoksa gövde alt kenarı y=-2'ye (hafif üstte) oturur.
  const bodyBottom=p.legs?-22:-4;            // gövde alt kenarı
  // glow (parlama) — gövde merkezine göre
  if(p.glow) s+=`<circle cx="0" cy="-58" r="70" fill="${c}" opacity=".08"/>`
    +`<g stroke="#ffd485" stroke-width="2.6" stroke-linecap="round"><line x1="-62" y1="-58" x2="-52" y2="-58"/><line x1="52" y1="-58" x2="62" y2="-58"/><line x1="-50" y1="-100" x2="-42" y2="-92"/><line x1="50" y1="-100" x2="42" y2="-92"/></g>`;
  // jetpack (omuzların DIŞINDA iki roket, tepesi + altta belirgin alev) — kolların dışına taşar
  if(p.jet){const jy=bodyBottom-52, jx=52;   // roket üst hizası omuz üstü, kolların dışında
    s+=`<rect x="${-jx-6}" y="${jy}" width="14" height="40" rx="7" fill="${d}"/>`
      +`<rect x="${jx-8}" y="${jy}" width="14" height="40" rx="7" fill="${d}"/>`
      +`<ellipse cx="${-jx+1}" cy="${jy+2}" rx="7" ry="4" fill="#ffd485"/><ellipse cx="${jx-1}" cy="${jy+2}" rx="7" ry="4" fill="#ffd485"/>`
      +`<path d="M${-jx-6} ${jy+40} q7 20 14 0 z" fill="#ffb347"/><path d="M${-jx-2} ${jy+40} q3 11 6 0 z" fill="#ffe08a"/>`
      +`<path d="M${jx-8} ${jy+40} q7 20 14 0 z" fill="#ffb347"/><path d="M${jx-4} ${jy+40} q3 11 6 0 z" fill="#ffe08a"/>`;
  }
  // bacaklar (ayaklar y=0 = sütun üstü)
  if(p.legs) s+=`<rect x="-16" y="-22" width="12" height="18" rx="4" fill="${c}"/><rect x="4" y="-22" width="12" height="18" rx="4" fill="${c}"/>`
    +`<rect x="-19" y="-6" width="17" height="7" rx="3.5" fill="${d}"/><rect x="2" y="-6" width="17" height="7" rx="3.5" fill="${d}"/>`;
  if(p.body){const bw=p.big?48:44,bh=p.big?46:42;
    s+=`<rect x="${-bw/2}" y="${bodyBottom-bh}" width="${bw}" height="${bh}" rx="10" fill="${c}"/>`;
    if(p.big) s+=`<rect x="-12" y="${bodyBottom-bh+8}" width="24" height="20" rx="5" fill="#fff"/><path d="M-5 ${bodyBottom-bh+18} l4 5 l7 -9" fill="none" stroke="#26a06a" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>`;
    else s+=`<rect x="-11" y="${bodyBottom-bh+8}" width="22" height="18" rx="4" fill="#fff" opacity=".85"/>`;
  }
  // kollar
  if(p.arms){const ax=p.big?37:34, aw=p.big?11:10, ah=p.big?38:34, ay=bodyBottom-ah-4;
    s+=`<rect x="${-ax}" y="${ay}" width="${aw}" height="${ah}" rx="${aw/2}" fill="${c}"/>`
      +`<rect x="${ax-aw}" y="${ay}" width="${aw}" height="${ah}" rx="${aw/2}" fill="${c}"/>`;
  }
  // kafa (ölçeklenebilir) — gövdenin üstüne
  const headBottom=p.body?bodyBottom-(p.big?46:42):-8;
  const hw=19*hs, hh=(hs>1?15:14)*1, ex=6*hs, er=(p.big?3.4:3.2)*hs;
  s+=`<g transform="translate(0 ${headBottom-16*hs})">`
    +`<path d="M${-hw} ${-14*hs} Q${-hw} ${-26*hs} ${-8*hs} ${-28*hs} L${8*hs} ${-28*hs} Q${hw} ${-26*hs} ${hw} ${-14*hs} L${hw} ${4*hs} Q${hw} ${11*hs} ${11*hs} ${12*hs} L${-11*hs} ${12*hs} Q${-hw} ${11*hs} ${-hw} ${4*hs} Z" fill="${c}"/>`
    +`<rect x="${-14*hs}" y="${-11*hs}" width="${28*hs}" height="${13*hs}" rx="${4*hs}" fill="#2b2f4a"/>`
    +`<circle cx="${-ex}" cy="${-4.5*hs}" r="${er}" fill="#8fd0ff"/><circle cx="${ex}" cy="${-4.5*hs}" r="${er}" fill="#8fd0ff"/>`
    +`<path d="M${-hw} ${-9*hs} l${-6*hs} ${-4*hs} v${10*hs} l${6*hs} ${-2*hs} z" fill="${d}"/><path d="M${hw} ${-9*hs} l${6*hs} ${-4*hs} v${10*hs} l${-6*hs} ${-2*hs} z" fill="${d}"/>`
    +`<line x1="0" y1="${-28*hs}" x2="0" y2="${-37*hs}" stroke="${c}" stroke-width="${2.5*hs}"/><circle cx="0" cy="${-40*hs}" r="${3.6*hs}" fill="${c}"/>`;
  // kafa etrafında sarı yıldırımlar (düşünme / ihtişam) — kafa merkezine göre
  if(p.bolts){const R=hw+7;
    const bolt=(bx,by,sc,rot)=>`<path d="M0 -7 L-3 0 L1 0 L-2 7 L4 -1 L0 -1 Z" fill="#ffd34d" stroke="#f5b800" stroke-width=".6" transform="translate(${bx} ${by}) scale(${sc}) rotate(${rot})"/>`;
    s+=bolt(-R, -6*hs, 1.15*hs, -18)+bolt(R, -6*hs, 1.15*hs, 18)
      +bolt(-R+6, -20*hs, 1*hs, -34)+bolt(R-6, -20*hs, 1*hs, 34)
      +bolt(0, -30*hs, 1.1*hs, 0);
  }
  s+=`</g>`;
  return g(s);
}

const SVG_INTRO=`<svg viewBox="0 0 760 340">${buildLadder(["tohum","+ kafa","+ gövde·kol","büyük kafa","tam ajan ✦"])}</svg>`;

const SVG_S5=`<svg viewBox="0 0 460 330">
  <g stroke="#f0b7b2" stroke-width="2.5">
    <line x1="232" y1="150" x2="120" y2="88"/><line x1="232" y1="150" x2="344" y2="88"/>
    <line x1="232" y1="176" x2="120" y2="244"/><line x1="232" y1="176" x2="344" y2="244"/></g>
  <rect x="198" y="130" width="68" height="66" rx="14" fill="#fdecea" stroke="#ec5f52" stroke-width="2.5"/>
  <circle cx="219" cy="162" r="8" fill="#ec5f52"/><circle cx="245" cy="162" r="8" fill="#ec5f52"/>
  <rect x="220" y="180" width="24" height="5" rx="2.5" fill="#ec5f52"/>
  <line x1="232" y1="130" x2="232" y2="114" stroke="#ec5f52" stroke-width="3"/><circle cx="232" cy="110" r="5" fill="#ec5f52"/>
  <text class="m" x="232" y="216" font-size="11" fill="#8892b0" text-anchor="middle">ajan</text>
  <!-- search TL -->
  <circle cx="120" cy="80" r="26" fill="#fff" stroke="#ec5f52" stroke-width="2"/>
  <circle cx="116" cy="76" r="8" fill="none" stroke="#ec5f52" stroke-width="2.5"/><line x1="122" y1="82" x2="128" y2="88" stroke="#ec5f52" stroke-width="2.5" stroke-linecap="round"/>
  <text class="m" x="120" y="122" font-size="10" fill="#8892b0" text-anchor="middle">arama</text>
  <!-- code TR -->
  <circle cx="344" cy="80" r="26" fill="#fff" stroke="#ec5f52" stroke-width="2"/>
  <text x="344" y="86" font-size="16" font-weight="700" fill="#ec5f52" text-anchor="middle">&lt;/&gt;</text>
  <text class="m" x="344" y="122" font-size="10" fill="#8892b0" text-anchor="middle">kod</text>
  <!-- mail BL -->
  <circle cx="120" cy="250" r="26" fill="#fff" stroke="#ec5f52" stroke-width="2"/>
  <rect x="106" y="242" width="28" height="18" rx="3" fill="none" stroke="#ec5f52" stroke-width="2"/><path d="M106 244 l14 10 l14 -10" fill="none" stroke="#ec5f52" stroke-width="2"/>
  <text class="m" x="120" y="292" font-size="10" fill="#8892b0" text-anchor="middle">e-posta</text>
  <!-- calendar BR -->
  <circle cx="344" cy="250" r="26" fill="#fff" stroke="#ec5f52" stroke-width="2"/>
  <rect x="332" y="240" width="24" height="22" rx="3" fill="none" stroke="#ec5f52" stroke-width="2"/><line x1="332" y1="247" x2="356" y2="247" stroke="#ec5f52" stroke-width="2"/>
  <circle cx="339" cy="254" r="1.8" fill="#ec5f52"/><circle cx="349" cy="254" r="1.8" fill="#ec5f52"/>
  <text class="m" x="344" y="292" font-size="10" fill="#8892b0" text-anchor="middle">takvim</text>
</svg>`;
