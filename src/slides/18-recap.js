/* ===== Slayt 18: RECAP (özet) — robot basamak basamak inşa edildi =====
   Giriş ile aynı buildLadder bileşenini kullanır (DRY) — özet etiketleriyle. */
const SVG_RECAP=`<svg viewBox="0 0 760 340">${buildLadder(
  ["tohum","+ kafa","+ gövde·kol","büyük kafa","tam ajan ✦"],
  ["1 · TAHMİN","2 · CEVAP","3 · DAVRANIŞ","4 · DÜŞÜNCE","5 · EYLEM"]
)}</svg>`;

SLIDE({type:"recap",hue:HUES[4],q:"İşte beş basamak.",svg:SVG_RECAP,
  cap:"tohumdan tam ajana — tahmin → cevap → davranış → düşünce → eylem"});
