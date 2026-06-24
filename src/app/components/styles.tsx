export const pageCss = `
:root{
  --ink:#13301f;
  --ink-2:#3d5a48;
  --muted:#6b8474;
  --brand:#16803c;
  --brand-deep:#0e5c2b;
  --brand-dark:#0b3d1f;
  --tint:#e8f5ec;
  --tint-2:#f3faf5;
  --line:#dcebe1;
  --bg:#f7fbf8;
  --card:#ffffff;
  --gold:#d9a441;
  --radius:16px;
  --shadow:0 10px 30px rgba(14,92,43,.08);
  --shadow-sm:0 4px 14px rgba(14,92,43,.06);
}
.rsb *{margin:0;padding:0;box-sizing:border-box}
.rsb{
  font-family:"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Source Han Sans SC",sans-serif;
  color:var(--ink);background:var(--bg);font-size:16px;line-height:1.7;
}
.rsb ::selection{background:#bfe8cc}
.rsb a{color:inherit;text-decoration:none}
.rsb img{max-width:100%}
.rsb .container{max-width:1400px;margin:0 auto;padding:0 48px}

/* nav */
.rsb .nav{
  position:sticky;top:0;z-index:100;background:rgba(255,255,255,.92);
  backdrop-filter:blur(12px);border-bottom:1px solid var(--line);
}
.rsb .nav-inner{max-width:1400px;margin:0 auto;padding:0 48px;height:72px;display:flex;align-items:center;gap:40px}
.rsb .brand{display:flex;align-items:center;gap:12px;font-size:20px;font-weight:800;letter-spacing:.5px;white-space:nowrap}
.rsb .brand-mark{
  width:40px;height:40px;border-radius:11px;background:linear-gradient(135deg,var(--brand) 0%,var(--brand-deep) 100%);
  display:flex;align-items:center;justify-content:center;color:#fff;font-size:20px;font-weight:800;
  box-shadow:0 4px 10px rgba(14,92,43,.25);
}
.rsb .brand-sub{font-size:12px;font-weight:500;color:var(--muted);letter-spacing:2px;margin-top:1px}
.rsb .nav-links{display:flex;gap:6px;margin-left:auto}
.rsb .nav-links a{
  position:relative;padding:8px 16px;font-size:15px;color:var(--ink-2);border-radius:8px;
  transition:color .2s,background .2s;font-weight:500;
}
.rsb .nav-links a:hover{color:var(--brand);background:var(--tint-2)}
.rsb .nav-links a.active{color:var(--brand);font-weight:700}
.rsb .nav-links a.active::after{
  content:"";position:absolute;left:16px;right:16px;bottom:2px;height:3px;border-radius:3px;
  background:var(--brand);
}
.rsb .btn{
  display:inline-flex;align-items:center;gap:8px;padding:11px 26px;border-radius:999px;
  font-size:15px;font-weight:600;cursor:pointer;border:none;transition:all .2s;
}
.rsb .btn-primary{background:var(--brand);color:#fff;box-shadow:0 6px 16px rgba(22,128,60,.28)}
.rsb .btn-primary:hover{background:var(--brand-deep);transform:translateY(-1px)}
.rsb .btn-ghost{background:#fff;color:var(--brand);border:1.5px solid var(--brand)}
.rsb .btn-ghost:hover{background:var(--tint)}
.rsb .nav .btn{padding:9px 22px}

/* section head */
.rsb section{padding:96px 0;scroll-margin-top:72px}
.rsb .eyebrow{
  display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:999px;
  background:var(--tint);color:var(--brand-deep);font-size:13px;font-weight:700;letter-spacing:3px;
}
.rsb .eyebrow::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--brand)}
.rsb .sec-head{text-align:center;margin-bottom:56px}
.rsb .sec-head h2{font-size:40px;font-weight:800;letter-spacing:1px;margin:18px 0 14px}
.rsb .sec-head p{color:var(--muted);font-size:16.5px;max-width:760px;margin:0 auto}
.rsb .hl{color:var(--brand)}

/* hero */
.rsb .hero{
  padding:0;position:relative;overflow:hidden;
  min-height:calc(100vh - 72px);display:flex;align-items:center;
  background:linear-gradient(180deg,#ffffff 0%,#f2f9f4 60%,#e9f5ee 100%);
}
.rsb .hero .container{width:100%;padding-top:36px;padding-bottom:44px}
.rsb .hero-ridges{position:absolute;inset:auto 0 0 0;height:340px;pointer-events:none;opacity:.5}
.rsb .hero-inner{position:relative;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center}
.rsb .hero h1{font-size:54px;line-height:1.18;font-weight:900;letter-spacing:2px}
.rsb .hero h1 .row2{color:var(--brand)}
.rsb .hero-lede{margin:18px 0 24px;font-size:16.5px;color:var(--ink-2);max-width:560px}
.rsb .dual-cards{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:26px}
.rsb .dual-card{
  background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:16px 18px;
  box-shadow:var(--shadow-sm);transition:transform .25s,box-shadow .25s;
}
.rsb .dual-card:hover{transform:translateY(-3px);box-shadow:var(--shadow)}
.rsb .dual-card .dc-top{display:flex;align-items:center;gap:12px;margin-bottom:6px}
.rsb .dc-icon{
  width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex:none;
  background:linear-gradient(135deg,var(--brand),var(--brand-deep));color:#fff;
}
.rsb .dc-icon svg{width:22px;height:22px}
.rsb .dual-card h3{font-size:19px;font-weight:800}
.rsb .dual-card .dc-desc{font-size:13.5px;color:var(--muted);margin:2px 0 0}
.rsb .chipset{display:flex;flex-wrap:nowrap;gap:6px}
.rsb .chip{
  padding:3px 8px;border-radius:999px;background:var(--tint-2);border:1px solid var(--line);
  font-size:11px;color:var(--brand-deep);font-weight:600;white-space:nowrap;flex:none;
}
.rsb .hero-cta{display:flex;gap:16px}

/* chat card */
.rsb .chat-card{
  background:#fff;border:1px solid var(--line);border-radius:22px;box-shadow:var(--shadow);
  overflow:hidden;
}
.rsb .chat-head{display:flex;align-items:center;gap:12px;padding:14px 22px;border-bottom:1px solid var(--line);background:linear-gradient(180deg,#fbfffc,#f5fbf7)}
.rsb .chat-avatar{
  width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--brand),var(--brand-deep));
  display:flex;align-items:center;justify-content:center;color:#fff;
}
.rsb .chat-avatar svg{width:21px;height:21px}
.rsb .chat-head h4{font-size:16px;font-weight:800}
.rsb .chat-head .online{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--brand);font-weight:600}
.rsb .chat-head .online::before{content:"";width:7px;height:7px;border-radius:50%;background:#22c55e;box-shadow:0 0 0 3px rgba(34,197,94,.18)}
.rsb .chat-body{padding:14px 18px;display:flex;flex-direction:column;gap:11px;background:#fcfefc;height:360px;overflow-y:auto;scrollbar-width:none}
.rsb .chat-body::-webkit-scrollbar{display:none}
.rsb .msg{max-width:88%;font-size:13px;line-height:1.6}
.rsb .msg.appear{animation:msgIn .35s ease both}
@keyframes msgIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.rsb .typing{display:inline-flex;gap:4px;align-items:center;padding:4px 2px}
.rsb .typing i{width:6px;height:6px;border-radius:50%;background:#9cc4ab;animation:blink 1s infinite}
.rsb .typing i:nth-child(2){animation-delay:.2s}
.rsb .typing i:nth-child(3){animation-delay:.4s}
@keyframes blink{0%,80%,100%{opacity:.3}40%{opacity:1}}
.rsb .msg.bot{align-self:flex-start;display:flex;gap:9px}
.rsb .msg.user{align-self:flex-end}
.rsb .msg .avatar-s{
  width:28px;height:28px;border-radius:50%;flex:none;display:flex;align-items:center;justify-content:center;color:#fff;margin-top:2px;
}
.rsb .avatar-s.leaf{background:var(--brand)}
.rsb .avatar-s.book{background:var(--brand-dark)}
.rsb .avatar-s svg{width:14px;height:14px}
.rsb .bubble{padding:10px 14px;border-radius:13px}
.rsb .msg.user .bubble{background:var(--tint);border:1px solid #cfe9d8;border-bottom-right-radius:4px;color:var(--brand-dark);font-weight:500}
.rsb .msg.bot .bubble{background:#fff;border:1px solid var(--line);border-top-left-radius:4px;box-shadow:var(--shadow-sm)}
.rsb .cap-tag{
  display:inline-block;margin-top:8px;padding:2px 9px;border-radius:6px;font-size:11px;font-weight:700;
  background:var(--tint);color:var(--brand-deep);border:1px solid #cfe9d8;
}
.rsb .chat-input{
  display:flex;align-items:center;gap:12px;padding:11px 16px;border-top:1px solid var(--line);background:#fff;
}
.rsb .chat-input input{
  flex:1;border:none;outline:none;font-size:14px;color:var(--ink);background:transparent;font-family:inherit;
}
.rsb .send-btn{
  width:38px;height:38px;border-radius:50%;background:var(--brand);border:none;color:#fff;cursor:pointer;
  display:flex;align-items:center;justify-content:center;transition:background .2s;flex:none;
}
.rsb .send-btn:hover{background:var(--brand-deep)}

/* matrix */
.rsb #matrix{background:#fff;position:relative}
.rsb .matrix-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px}
.rsb .agent-panel{
  border:1px solid var(--line);border-radius:20px;padding:26px;background:linear-gradient(180deg,#fbfefb,#f5faf6);
  position:relative;overflow:hidden;
}
.rsb .agent-panel::before{
  content:"";position:absolute;top:0;left:0;right:0;height:5px;
  background:linear-gradient(90deg,var(--brand),#5bbb7b);
}
.rsb .agent-panel.book::before{background:linear-gradient(90deg,var(--brand-dark),var(--brand))}
.rsb .agent-head{display:flex;align-items:center;gap:14px;margin-bottom:6px}
.rsb .agent-icon{
  width:48px;height:48px;border-radius:50%;flex:none;display:flex;align-items:center;justify-content:center;color:#fff;
  background:linear-gradient(135deg,var(--brand),var(--brand-deep));box-shadow:0 6px 14px rgba(14,92,43,.22);
}
.rsb .agent-panel.book .agent-icon{background:linear-gradient(135deg,#1d6b3c,var(--brand-dark))}
.rsb .agent-icon svg{width:24px;height:24px}
.rsb .agent-head h3{font-size:22px;font-weight:800}
.rsb .agent-head p{font-size:13px;color:var(--muted);margin-top:2px}
.rsb .agent-rule{width:48px;height:4px;border-radius:4px;background:var(--brand);margin:14px 0 18px}
.rsb .fcards{display:grid;grid-template-columns:repeat(3,1fr);gap:11px}

/* === feature card with full-bleed background image === */
.rsb .fcard{
  position:relative;overflow:hidden;isolation:isolate;
  border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:16px;
  height:160px;
  transition:transform .3s,box-shadow .3s;display:flex;flex-direction:column;
  background-size:cover;background-position:center;color:#fff;
}
/* dark gradient overlay so white text stays legible */
.rsb .fcard::before{
  content:"";position:absolute;inset:0;z-index:-1;
  background:linear-gradient(180deg,rgba(8,30,18,.30) 0%,rgba(8,30,18,.55) 55%,rgba(6,24,14,.82) 100%);
  transition:background .35s,transform .5s;
}
.rsb .fcard:hover{transform:translateY(-4px);box-shadow:0 16px 34px rgba(8,40,20,.35)}
.rsb .fcard:hover::before{
  background:linear-gradient(180deg,rgba(8,30,18,.22) 0%,rgba(8,30,18,.48) 55%,rgba(6,24,14,.8) 100%);
}
.rsb .fcard .f-top{display:flex;align-items:center;gap:10px;margin-bottom:8px;position:relative}
.rsb .f-icon{
  width:38px;height:38px;border-radius:11px;flex:none;
  display:flex;align-items:center;justify-content:center;color:#fff;
  background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.28);
  backdrop-filter:blur(6px);
  box-shadow:0 4px 12px rgba(0,0,0,.18);
}
.rsb .f-icon svg{width:19px;height:19px}
.rsb .fcard h4{font-size:15px;font-weight:800;color:#fff;text-shadow:0 1px 3px rgba(0,0,0,.4)}
.rsb .fcard p{font-size:12px;color:rgba(255,255,255,.9);flex:1;line-height:1.6;position:relative;text-shadow:0 1px 3px rgba(0,0,0,.4)}
.rsb .fcard .go{
  margin-top:12px;font-size:12px;font-weight:700;color:#fff;display:inline-flex;align-items:center;gap:5px;position:relative;
  opacity:.95;
}
.rsb .fcard .go::after{content:"→";transition:transform .2s}
.rsb .fcard:hover .go::after{transform:translateX(3px)}

/* data */
.rsb #data{background:linear-gradient(180deg,var(--bg),#eef7f1)}
.rsb .data-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.rsb .dcard{
  background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px;
  transition:transform .25s,box-shadow .25s;position:relative;overflow:hidden;
}
.rsb .dcard:hover{transform:translateY(-4px);box-shadow:var(--shadow)}
.rsb .dcard-bg{
  position:absolute;inset:0;z-index:0;background-size:cover;background-position:center;
  opacity:.28;transition:opacity .35s,transform .6s;
  -webkit-mask-image:linear-gradient(135deg,rgba(0,0,0,1) 0%,rgba(0,0,0,.6) 50%,rgba(0,0,0,.15) 100%);
  mask-image:linear-gradient(135deg,rgba(0,0,0,1) 0%,rgba(0,0,0,.6) 50%,rgba(0,0,0,.15) 100%);
}
.rsb .dcard:hover .dcard-bg{opacity:.38;transform:scale(1.04)}
.rsb .dcard > *:not(.dcard-bg){position:relative;z-index:1}
.rsb .dcard .d-icon{
  width:48px;height:48px;border-radius:13px;background:var(--tint);color:var(--brand-deep);
  display:flex;align-items:center;justify-content:center;margin-bottom:18px;
}
.rsb .dcard .d-icon svg{width:24px;height:24px}
.rsb .dcard .d-num{font-size:32px;font-weight:900;color:var(--brand-deep);line-height:1.1}
.rsb .dcard .d-num em{font-style:normal;font-size:17px;font-weight:700;margin-left:2px}
.rsb .dcard h4{font-size:16px;font-weight:800;margin:6px 0 10px}
.rsb .dcard p{font-size:13px;color:var(--muted)}
.rsb .data-note{text-align:center;color:var(--muted);font-size:13.5px;margin-top:34px}

/* tech */
.rsb #tech{background:#fff}
.rsb .tech-stage{
  position:relative;overflow:hidden;isolation:isolate;
  border:1px solid var(--line);border-radius:24px;padding:48px;
  background:
    radial-gradient(900px 360px at 80% -10%,rgba(22,128,60,.07),transparent 60%),
    linear-gradient(180deg,#fbfefb,#f3faf5);
}
.rsb .tech-stage::before{
  content:"";position:absolute;inset:0;z-index:-1;
  background-image:var(--tech-bg);background-size:cover;background-position:center;
  opacity:.12;
  -webkit-mask-image:radial-gradient(120% 90% at 85% 0%,rgba(0,0,0,.95),transparent 70%);
  mask-image:radial-gradient(120% 90% at 85% 0%,rgba(0,0,0,.95),transparent 70%);
}
.rsb .tech-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:18px}
.rsb .tcard{
  background:#fff;border:1px solid var(--line);border-radius:16px;padding:26px 20px;text-align:center;
  transition:transform .25s,box-shadow .25s;position:relative;
}
.rsb .tcard:hover{transform:translateY(-4px);box-shadow:var(--shadow)}
.rsb .tcard .t-icon{
  width:58px;height:58px;border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;
  background:linear-gradient(135deg,var(--brand),var(--brand-deep));color:#fff;box-shadow:0 6px 14px rgba(14,92,43,.2);
}
.rsb .tcard .t-icon svg{width:27px;height:27px}
.rsb .tcard h4{font-size:16.5px;font-weight:800}
.rsb .tcard .en{font-size:12px;color:var(--muted);letter-spacing:.5px;margin-top:4px}
.rsb .tech-base{
  margin-top:22px;text-align:center;padding:16px;border-radius:14px;border:1px dashed #bfe0cb;
  color:var(--brand-deep);font-size:14px;font-weight:600;background:rgba(232,245,236,.5);letter-spacing:1px;
}

/* contact */
.rsb #contact{background:linear-gradient(180deg,#eef7f1,var(--bg))}
.rsb .form-card{
  max-width:880px;margin:0 auto;background:#fff;border:1px solid var(--line);border-radius:22px;
  padding:48px 56px;box-shadow:var(--shadow);
}
.rsb .form-row{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:22px}
.rsb .form-field{display:flex;flex-direction:column;gap:8px;margin-bottom:22px}
.rsb .form-row .form-field{margin-bottom:0}
.rsb .form-field label{font-size:14px;font-weight:700}
.rsb .form-field label .req{color:#d23c3c;margin-left:3px}
.rsb .form-field input,.rsb .form-field select,.rsb .form-field textarea{
  border:1px solid var(--line);border-radius:10px;padding:12px 14px;font-size:14.5px;font-family:inherit;
  color:var(--ink);background:#fcfefc;outline:none;transition:border-color .2s,box-shadow .2s;
}
.rsb .form-field input:focus,.rsb .form-field select:focus,.rsb .form-field textarea:focus{
  border-color:var(--brand);box-shadow:0 0 0 3px rgba(22,128,60,.12);
}
.rsb .form-field textarea{min-height:120px;resize:vertical}
.rsb .form-submit{width:100%;justify-content:center;padding:15px;font-size:16px;border-radius:12px}

/* footer */
.rsb footer{background:var(--brand-dark);color:#cfe6d6;padding:44px 0 36px}
.rsb .foot-inner{max-width:1400px;margin:0 auto;padding:0 48px;text-align:center;font-size:13px;line-height:2.1}
.rsb .foot-brand{display:flex;align-items:center;justify-content:center;gap:10px;color:#fff;font-size:17px;font-weight:800;margin-bottom:14px}
.rsb .foot-brand .brand-mark{width:34px;height:34px;font-size:17px;border-radius:9px}
.rsb .foot-links{display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:8px}
.rsb .foot-links a{padding:0 10px;opacity:.8;transition:opacity .2s}
.rsb .foot-links a:hover{opacity:1}
.rsb .foot-links a + a{border-left:1px solid rgba(255,255,255,.18)}

/* modal */
.rsb .modal-overlay{
  position:fixed;inset:0;z-index:1000;background:rgba(6,24,14,.55);
  backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:24px;
  animation:overlayIn .22s ease both;
}
@keyframes overlayIn{from{opacity:0}to{opacity:1}}
.rsb .modal-box{
  background:#fff;border-radius:22px;overflow:hidden;width:100%;max-width:1100px;
  height:min(86vh,840px);display:flex;flex-direction:column;
  box-shadow:0 32px 80px rgba(6,24,14,.32);animation:boxIn .28s cubic-bezier(.22,1,.36,1) both;
}
@keyframes boxIn{from{opacity:0;transform:scale(.96) translateY(16px)}to{opacity:1;transform:none}}
.rsb .modal-head{
  display:flex;align-items:center;gap:14px;padding:18px 24px;border-bottom:1px solid var(--line);
  background:linear-gradient(180deg,#fbfefb,#f5faf6);flex:none;
}
.rsb .modal-head-icon{
  width:42px;height:42px;border-radius:12px;flex:none;display:flex;align-items:center;justify-content:center;
  color:#fff;background:linear-gradient(135deg,var(--brand),var(--brand-deep));
  box-shadow:0 4px 10px rgba(14,92,43,.22);
}
.rsb .modal-head-icon svg{width:20px;height:20px}
.rsb .modal-head h3{font-size:18px;font-weight:800;flex:1}
.rsb .modal-head .modal-close{
  width:36px;height:36px;border-radius:50%;border:none;background:var(--tint-2);cursor:pointer;
  display:flex;align-items:center;justify-content:center;color:var(--ink-2);flex:none;
  transition:background .18s,color .18s;
}
.rsb .modal-head .modal-close:hover{background:var(--tint);color:var(--brand-deep)}
.rsb .modal-head .modal-close svg{width:18px;height:18px}
.rsb .modal-iframe{flex:1;border:none;width:100%;display:block;background:#f7fbf8}
.rsb .modal-placeholder{
  flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:20px;padding:48px;text-align:center;background:linear-gradient(160deg,var(--tint-2),#fff 60%);
}
.rsb .modal-ph-icon{
  width:80px;height:80px;border-radius:24px;display:flex;align-items:center;justify-content:center;
  background:linear-gradient(135deg,var(--brand),var(--brand-deep));color:#fff;
  box-shadow:0 12px 30px rgba(14,92,43,.22);
}
.rsb .modal-ph-icon svg{width:38px;height:38px}
.rsb .modal-ph-badge{
  display:inline-flex;align-items:center;gap:7px;padding:6px 16px;border-radius:999px;
  background:var(--tint);color:var(--brand-deep);font-size:13px;font-weight:700;letter-spacing:2px;
  border:1px solid #cfe9d8;
}
.rsb .modal-ph-badge::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--brand);animation:pulse 1.8s infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.75)}}
.rsb .modal-ph-desc{font-size:15px;color:var(--muted);max-width:480px;line-height:1.75}
.rsb .modal-ph-hint{
  padding:12px 24px;border-radius:12px;background:#fff;border:1px solid var(--line);
  font-size:13.5px;color:var(--ink-2);font-weight:500;
}

/* fcard clickable */
.rsb .fcard{cursor:pointer}

/* reveal */
.rsb .reveal{opacity:0;transform:translateY(22px);transition:opacity .7s ease,transform .7s ease}
.rsb .reveal.in{opacity:1;transform:none}
@media (prefers-reduced-motion:reduce){
  .rsb .reveal{opacity:1;transform:none;transition:none}
}

/* responsive */
@media (max-width:1280px){
  .rsb .hero h1{font-size:46px}
  .rsb .data-grid{grid-template-columns:repeat(2,1fr)}
  .rsb .tech-grid{grid-template-columns:repeat(3,1fr)}
  .rsb .fcards{grid-template-columns:repeat(2,1fr)}
}
@media (max-width:1024px){
  .rsb .hero-inner{grid-template-columns:1fr}
  .rsb .matrix-grid{grid-template-columns:1fr}
  .rsb .nav-links{display:none}
}
@media (max-width:720px){
  .rsb .container{padding:0 22px}
  .rsb .nav-inner{padding:0 22px}
  .rsb .hero h1{font-size:40px}
  .rsb .dual-cards,.rsb .fcards,.rsb .data-grid,.rsb .form-row{grid-template-columns:1fr}
  .rsb .tech-grid{grid-template-columns:1fr 1fr}
  .rsb .form-card{padding:32px 24px}
  .rsb section{padding:64px 0}
}
`;
