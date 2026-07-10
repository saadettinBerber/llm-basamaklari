/* ===== PAYLAŞILAN BİLEŞEN: kahraman-robot (ajan) =====
   Tek yerde tanımlı — tüm slaytlar buradan "kalıtım alır".
   Tutarlılık kuralı: ajan her yerde bu robotla temsil edilir.
   Kullanım:  ${agentRobot({x:500,y:120,s:1})}   → SVG <g> parçası döndürür
     x,y : robotun merkez konumu (gövde ortası civarı)
     s   : ölçek (1 = büyük/5a, ~0.75 = kompakt/5b-5c, ~0.62 = mini/5d)
     antenna : anten çizilsin mi (default true)
*/
function agentRobot(opts){
  opts = opts || {};
  const x = opts.x||0, y = opts.y||0, s = opts.s||1;
  const antenna = opts.antenna !== false;
  const ant = antenna
    ? `<line x1="0" y1="-44" x2="0" y2="-54" stroke="#ec5f52" stroke-width="3"/><circle cx="0" cy="-57" r="5" fill="#ec5f52"/>`
    : "";
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <path d="M-46 50 Q-46 16 -27 11 L27 11 Q46 16 46 50 Z" fill="#fdecea" stroke="#ec5f52" stroke-width="2.5"/>
    <rect x="-16" y="19" width="32" height="24" rx="5" fill="#fff" stroke="#ec5f52" stroke-width="2"/>
    <path d="M-6 31 l5 6 l8 -11" fill="none" stroke="#26a06a" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="-64" y="14" width="14" height="34" rx="7" fill="#fdecea" stroke="#ec5f52" stroke-width="2.5"/>
    <rect x="50" y="14" width="14" height="34" rx="7" fill="#fdecea" stroke="#ec5f52" stroke-width="2.5"/>
    <path d="M-31 -37 Q-31 -50 -20 -52 L20 -52 Q31 -50 31 -37 L31 -14 Q31 -6 22 -4 L-22 -4 Q-31 -6 -31 -14 Z" fill="#ec5f52"/>
    <rect x="-23" y="-34" width="46" height="20" rx="6" fill="#2b2f4a"/>
    <circle cx="-11" cy="-24" r="4.5" fill="#8fd0ff"/><circle cx="11" cy="-24" r="4.5" fill="#8fd0ff"/>
    <path d="M-31 -30 l-8 -5 v12 l8 -2 z" fill="#c8463c"/><path d="M31 -30 l8 -5 v12 l-8 -2 z" fill="#c8463c"/>
    ${ant}
  </g>`;
}
