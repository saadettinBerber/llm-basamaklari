/* ===== Slayt 13: 13-step ===== */
const SVG_S5C=`<svg viewBox="0 0 660 366">
  <defs><marker id="d5c" markerWidth="9" markerHeight="9" refX="6" refY="4.5" orient="auto"><path d="M0 0 L9 4.5 L0 9 z" fill="#ec5f52"/></marker></defs>

  <!-- ÜST · ajan -->
  <g transform="translate(330 34)">
    <path d="M-36 36 Q-36 11 -20 8 L20 8 Q36 11 36 36 Z" fill="#fdecea" stroke="#ec5f52" stroke-width="2.5"/>
    <path d="M-23 -26 Q-23 -37 -14 -39 L14 -39 Q23 -37 23 -26 L23 -10 Q23 -4 16 -3 L-16 -3 Q-23 -4 -23 -10 Z" fill="#ec5f52"/>
    <rect x="-17" y="-24" width="34" height="14" rx="5" fill="#2b2f4a"/>
    <circle cx="-8" cy="-17" r="3.6" fill="#8fd0ff"/><circle cx="8" cy="-17" r="3.6" fill="#8fd0ff"/>
    <line x1="0" y1="-39" x2="0" y2="-48" stroke="#ec5f52" stroke-width="3"/><circle cx="0" cy="-51" r="4" fill="#ec5f52"/>
  </g>
  <text class="m" x="330" y="90" font-size="10.5" fill="#ec5f52" text-anchor="middle" font-weight="700">AJAN (LLM)</text>
  <path d="M330 97 L330 114" stroke="#ec5f52" stroke-width="2.5" marker-end="url(#d5c)"/>
  <text class="m" x="345" y="110" font-size="9.5" fill="#8892b0">tek dil konuşur</text>

  <!-- ORTA · ortak protokol -->
  <rect x="60" y="122" width="540" height="62" rx="16" fill="#fdecea" stroke="#ec5f52" stroke-width="2.5"/>
  <text class="m" x="330" y="143" font-size="11.5" fill="#c8463c" text-anchor="middle" font-weight="700" letter-spacing=".04em">ORTAK PROTOKOL · “tek priz, çok araç”</text>
  <g text-anchor="middle" font-weight="700">
    <rect x="98" y="152" width="140" height="22" rx="11" fill="#fff" stroke="#ec5f52" stroke-width="1.5"/>
    <text class="m" x="168" y="167" font-size="10.5" fill="#ec5f52">MCP</text>
    <rect x="260" y="152" width="140" height="22" rx="11" fill="#fff" stroke="#ec5f52" stroke-width="1.5"/>
    <text class="m" x="330" y="167" font-size="10.5" fill="#ec5f52">CLI</text>
    <rect x="422" y="152" width="140" height="22" rx="11" fill="#fff" stroke="#ec5f52" stroke-width="1.5"/>
    <text class="m" x="492" y="167" font-size="10.5" fill="#ec5f52">tool API</text>
  </g>

  <!-- protokol → gerçek araçlar (priz) -->
  <path d="M330 184 L330 198" stroke="#f0b7b2" stroke-width="2"/>
  <text class="m" x="90" y="208" font-size="9.5" fill="#ec5f52" font-weight="700" letter-spacing=".04em">GERÇEK MCP ARAÇLARI</text>

  <!-- SIRA 1 -->
  <g font-weight="700">
    <rect x="60" y="216" width="128" height="40" rx="11" fill="#fff" stroke="#f0b7b2" stroke-width="1.8"/>
    <text x="80" y="234" font-size="13" fill="#242844">GitHub</text>
    <text class="m" x="80" y="249" font-size="8.5" fill="#8892b0" font-weight="400">issue açar, PR okur</text>

    <rect x="196" y="216" width="128" height="40" rx="11" fill="#fff" stroke="#f0b7b2" stroke-width="1.8"/>
    <text x="216" y="234" font-size="13" fill="#242844">Slack</text>
    <text class="m" x="216" y="249" font-size="8.5" fill="#8892b0" font-weight="400">mesaj okur, gönderir</text>

    <rect x="332" y="216" width="140" height="40" rx="11" fill="#fff" stroke="#f0b7b2" stroke-width="1.8"/>
    <text x="352" y="234" font-size="13" fill="#242844">Google Drive</text>
    <text class="m" x="352" y="249" font-size="8.5" fill="#8892b0" font-weight="400">dosya arar, okur</text>

    <rect x="480" y="216" width="120" height="40" rx="11" fill="#fff" stroke="#f0b7b2" stroke-width="1.8"/>
    <text x="500" y="234" font-size="13" fill="#242844">Gmail</text>
    <text class="m" x="500" y="249" font-size="8.5" fill="#8892b0" font-weight="400">e-posta, taslak</text>
  </g>

  <!-- SIRA 2 -->
  <g font-weight="700">
    <rect x="60" y="264" width="128" height="40" rx="11" fill="#fff" stroke="#f0b7b2" stroke-width="1.8"/>
    <text x="80" y="282" font-size="13" fill="#242844">Notion</text>
    <text class="m" x="80" y="297" font-size="8.5" fill="#8892b0" font-weight="400">sayfa okur, kayıt açar</text>

    <rect x="196" y="264" width="128" height="40" rx="11" fill="#fff" stroke="#f0b7b2" stroke-width="1.8"/>
    <text x="216" y="282" font-size="13" fill="#242844">Postgres</text>
    <text class="m" x="216" y="297" font-size="8.5" fill="#8892b0" font-weight="400">veritabanı sorgular</text>

    <rect x="332" y="264" width="140" height="40" rx="11" fill="#fff" stroke="#f0b7b2" stroke-width="1.8"/>
    <text x="352" y="282" font-size="13" fill="#242844">Filesystem</text>
    <text class="m" x="352" y="297" font-size="8.5" fill="#8892b0" font-weight="400">dosya okur, yazar</text>

    <rect x="480" y="264" width="120" height="40" rx="11" fill="#fff" stroke="#f0b7b2" stroke-width="1.8"/>
    <text x="500" y="282" font-size="13" fill="#242844">Sentry</text>
    <text class="m" x="500" y="297" font-size="8.5" fill="#8892b0" font-weight="400">hata bulur, ayıklar</text>
  </g>

  <!-- ekosistem notu -->
  <text class="m" x="330" y="330" font-size="10" fill="#8892b0" text-anchor="middle">artık GitHub · Slack · Notion... kendi resmi MCP sunucusunu yayınlıyor — protokol olgunlaştı</text>
</svg>`;

SLIDE({type:"step",n:5,hue:HUES[4],label:"05 · AGENT · araçlar",start:"ilk yapı taşı: dış dünyaya uzanan eller",
   q:"ARAÇLAR (TOOLS)",svg:SVG_S5C,cap:"tek protokol → GitHub, Slack, Drive, Postgres... gerçek servislere bağlanır",
   src:["MCP: modelcontextprotocol.io","ReAct: Yao ve ark., 2022 · arXiv:2210.03629","Toolformer: Schick ve ark., 2023 · arXiv:2302.04761"]});
