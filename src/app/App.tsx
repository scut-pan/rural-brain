import { useEffect, useRef, useState } from "react";
import { pageCss } from "./components/styles";
import logo2 from "../imports/logo2.png";

// 卡片背景图（来自 Unsplash）
const BG = {
  pest: "https://images.unsplash.com/photo-1616075278464-3f3d5f03c6b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  disease: "https://images.unsplash.com/photo-1560493676-04071c5f467b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  pricing: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  cow: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  rice: "https://images.unsplash.com/photo-1586201375761-83865001e31c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  inspect: "https://images.unsplash.com/photo-1721424759830-e4b892acf1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  business: "https://images.unsplash.com/photo-1689428615940-64d549e2231c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  planning: "https://images.unsplash.com/photo-1700156968085-164d37155f10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  marketing: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  legal: "https://images.unsplash.com/photo-1769092992534-f2d0210162b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsYXclMjBib29rcyUyMGxpYnJhcnklMjB3b29kZW4lMjBkZXNrJTIwbm8lMjBwZW9wbGV8ZW58MXx8fHwxNzgxMjYxNjU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  consult: "https://images.unsplash.com/photo-1638722843622-0127be5741dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMGRvY3VtZW50cyUyMGRlc2slMjB3YXJtJTIwbGlnaHQlMjBjb25jZXB0JTIwbm8lMjBwZW9wbGV8ZW58MXx8fHwxNzgxNzcxNjg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  cases: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};

// 数据底座配图（无人物，贴合中国乡村场景）
const DATA_BG = {
  village: "https://images.unsplash.com/photo-1778595478064-30763a9a6d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  analytics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  terraces: "https://images.unsplash.com/photo-1508043157312-69e4bf3dd28c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  folders: "https://images.unsplash.com/photo-1583521214690-73421a1829a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  papers: "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  books: "https://images.unsplash.com/photo-1765969934422-077ccae29246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  architecture: "https://images.unsplash.com/photo-1768250388654-414fb4839ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  archive: "https://images.unsplash.com/photo-1468779036391-52341f60b55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};
const TECH_BG =
  "https://images.unsplash.com/photo-1456428746267-a1756408f782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1280";

type Feature = { title: string; desc: string; icon: JSX.Element; bg: string; url?: string };

const expertFeatures: Feature[] = [
  {
    title: "病虫害监测",
    desc: "识别作物病虫害，辅助快速诊断与防治。",
    bg: BG.pest,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></svg>
    ),
  },
  {
    title: "疾病预测",
    desc: "结合图像与症状信息，提供风险预判建议。",
    bg: BG.disease,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" /><path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4" /><circle cx="20" cy="10" r="2" /></svg>
    ),
  },
  {
    title: "定价分析",
    desc: "分析成本、市场与竞品，生成产品定价参考。",
    bg: BG.pricing,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M9 8h6M9 12h6M12 8v9M9.5 5.5 12 8l2.5-2.5" /></svg>
    ),
  },
  {
    title: "奶牛监测",
    desc: "识别牛只品种与状态，支持养殖管理。",
    bg: BG.cow,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4c2 0 4 1.5 4 4 0 1-.5 2-1 2.5.5 1.5.5 3.5-.5 5-.6 1-1.5 1.5-2.5 1.5v3h-3v-2h-2v2H8v-3c-1.7 0-3-1.3-3-3v-3H3l1-3c.5-1.5 2-2.5 3.5-2.5H10c1-1 2.5-1.5 4-1.5Z" /></svg>
    ),
  },
  {
    title: "大米品种识别",
    desc: "识别大米品种与品质特征，辅助分级与销售。",
    bg: BG.rice,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c1.5 2.5 1.5 5-.5 7.5S9 14 12 16c3-2 2.5-4 .5-6.5S10.5 4.5 12 2Z" /><path d="M12 16v6" /></svg>
    ),
  },
  {
    title: "农场巡检",
    desc: "结合影像与传感数据，辅助农场日常巡查与异常预警。",
    bg: BG.inspect,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-7-4.5-7-11a7 7 0 0 1 14 0c0 6.5-7 11-7 11Z" /><circle cx="12" cy="11" r="2.5" /></svg>
    ),
  },
];

const thinkFeatures: Feature[] = [
  {
    title: "乡村经营智能体",
    desc: "围绕经营管理、资源整合与产业对接提供综合支持。",
    bg: BG.business,
    url: "http://114.132.186.148:3000/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 4l9 6.5" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></svg>
    ),
  },
  {
    title: "乡村规划智能体",
    desc: "面向乡村发展规划、产业布局与项目申报。",
    bg: BG.planning,
    url: "http://114.132.186.148:3003/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 7h6M9 11h6M9 15h4" /></svg>
    ),
  },
  {
    title: "营销策略",
    desc: "分析市场渠道与品牌路径，生成营销建议。",
    bg: BG.marketing,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 20h18M5 20V9l4 2V7l4 2V5l6 3v12" /></svg>
    ),
  },
  {
    title: "法律咨询",
    desc: "提供农村法律咨询、合同审查，生成益维护建议。",
    bg: BG.legal,
    url: "http://114.132.186.148:3004/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M3 7l4-2 5 2 5-2 4 2" /><path d="M7 5 4.5 12a2.5 2.5 0 0 0 5 0L7 5ZM17 5l-2.5 7a2.5 2.5 0 0 0 5 0L17 5Z" /></svg>
    ),
  },
  {
    title: "政策咨询",
    desc: "解读乡村振兴政策法规与扶持措施，提供精准政策适配建议。",
    bg: BG.consult,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M4 21V10l8-5 8 5v11" /><path d="M9 21v-6h6v6M7 10h.01M12 10h.01M17 10h.01" /></svg>
    ),
  },
  {
    title: "案例借鉴",
    desc: "检索全国典型乡村振兴案例，支撑模式借鉴与经验提炼。",
    bg: BG.cases,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" /></svg>
    ),
  },
];

function FeatureModal({ f, onClose }: { f: Feature; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box">
        <div className="modal-head">
          <div className="modal-head-icon">{f.icon}</div>
          <h3>{f.title}</h3>
          <button className="modal-close" onClick={onClose} aria-label="关闭">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </div>
        {f.url ? (
          <iframe className="modal-iframe" src={f.url} title={f.title} allow="fullscreen" />
        ) : (
          <div className="modal-placeholder">
            <div className="modal-ph-icon">{f.icon}</div>
            <span className="modal-ph-badge">功能建设中</span>
            <p className="modal-ph-desc">{f.desc}</p>
            <div className="modal-ph-hint">该功能正在开发完善中，敬请期待。</div>
          </div>
        )}
      </div>
    </div>
  );
}

function FeatureCard({ f, onClick }: { f: Feature; onClick: () => void }) {
  return (
    <div className="fcard" style={{ backgroundImage: `url(${f.bg})` }} onClick={onClick}>
      <div className="f-top">
        <div className="f-icon">{f.icon}</div>
        <h4>{f.title}</h4>
      </div>
      <p>{f.desc}</p>
      <span className="go">点击了解</span>
    </div>
  );
}

const GREETING =
  "您好！我是乡村智慧大脑 AI 助手，可以为生产服务、经营研判和发展决策提供专业支持。";
const ROUNDS = [
  {
    q: "水稻叶片发黄是什么原因？如何防治？",
    a: "结合症状特征与当前生育期，判断可能由缺氮、稻瘟病或纹枯病引起。建议：1. 补施氮肥；2. 加强通风排水；3. 选用三环唑防治。",
    who: "leaf",
    tag: "AI特派员能力",
  },
  {
    q: "帮我看看果园这批照片有没有病虫害风险。",
    a: "已识别上传影像：检出疑似红蜘蛛虫害 2 处，风险等级中等。建议近 3 日内喷施针对性药剂，并持续巡检监测。",
    who: "leaf",
    tag: "AI特派员能力",
  },
  {
    q: "如何提升村集体经济收益？",
    a: "建议从四个维度发力：1. 盘活闲置资产；2. 发展特色产业；3. 打造本地品牌；4. 完善利益联结机制，形成可持续收益。",
    who: "book",
    tag: "AI智库助手能力",
  },
  {
    q: "有没有适合我们村参考的产业案例？",
    a: "已为您匹配 3 个同类型村庄案例，涵盖特色种植、农旅融合与品牌运营模式，可点击查看完整案例报告。",
    who: "book",
    tag: "AI智库助手能力",
  },
];

const ICONS: Record<string, string> = {
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 6s1.5-2 5-2 5 2 5 2v14s-1.5-1-5-1-5 1-5 1V6Z"/><path d="M22 6s-1.5-2-5-2-5 2-5 2v14s1.5-1 5-1 5 1 5 1V6Z"/></svg>',
};

export default function App() {
  const chatRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<Feature | null>(null);

  // 滚动渐显
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    root.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // 首屏多轮对话演示
  useEffect(() => {
    const body = chatRef.current;
    if (!body) return;
    let cancelled = false;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scrollEnd = () => {
      body.scrollTop = body.scrollHeight;
    };
    const botEl = (html: string, who: string, tag: string, anim?: boolean) => {
      const d = document.createElement("div");
      d.className = "msg bot" + (anim ? " appear" : "");
      d.innerHTML =
        '<div class="avatar-s ' + who + '">' + ICONS[who] + "</div>" +
        '<div class="bubble">' + html + (tag ? '<br><span class="cap-tag">' + tag + "</span>" : "") + "</div>";
      return d;
    };
    const userEl = (text: string, anim?: boolean) => {
      const d = document.createElement("div");
      d.className = "msg user" + (anim ? " appear" : "");
      d.innerHTML = '<div class="bubble">' + text + "</div>";
      return d;
    };
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

    if (reduced) {
      body.innerHTML = "";
      body.appendChild(botEl(GREETING, "leaf", ""));
      ROUNDS.slice(0, 2).forEach((r) => {
        body.appendChild(userEl(r.q));
        body.appendChild(botEl(r.a, r.who, r.tag));
      });
      return;
    }

    (async function play() {
      body.innerHTML = "";
      body.appendChild(botEl(GREETING, "leaf", "", true));
      scrollEnd();
      await wait(1600);
      for (const r of ROUNDS) {
        if (cancelled) return;
        body.appendChild(userEl(r.q, true));
        scrollEnd();
        await wait(900);
        const t = botEl('<span class="typing"><i></i><i></i><i></i></span>', r.who, "", true);
        body.appendChild(t);
        scrollEnd();
        await wait(1100);
        if (cancelled) return;
        const bubble = t.querySelector(".bubble");
        if (bubble) bubble.innerHTML = r.a + '<br><span class="cap-tag">' + r.tag + "</span>";
        scrollEnd();
        await wait(2600);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="rsb size-full overflow-auto" ref={rootRef}>
      <style>{pageCss}</style>
      {activeCard && <FeatureModal f={activeCard} onClose={() => setActiveCard(null)} />}

      {/* 导航 */}
      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#home" style={{ alignItems: "flex-end", gap: 8 }}>
            <img src={logo2} alt="数字乡村 DIGITAL VILLAGE" style={{ height: 48, width: "auto", mixBlendMode: "multiply" }} />
            <span style={{ fontSize: 17, fontWeight: 800, letterSpacing: 1, paddingBottom: 3 }}>乡村智慧大脑</span>
          </a>
          <nav className="nav-links">
            <a href="#home" className="active">首页</a>
            <a href="#matrix">功能矩阵</a>
            <a href="#data">数据中枢</a>
            <a href="#tech">技术架构</a>
            <a href="#contact">数据服务</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        <svg className="hero-ridges" viewBox="0 0 1440 340" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 250 C 240 200, 420 290, 720 240 S 1200 190, 1440 250" fill="none" stroke="#bfe0cb" strokeWidth="1.5" />
          <path d="M0 285 C 260 235, 460 325, 760 275 S 1220 225, 1440 285" fill="none" stroke="#cfe9d8" strokeWidth="1.5" />
          <path d="M0 320 C 280 270, 500 355, 800 310 S 1240 260, 1440 320" fill="none" stroke="#ddf0e4" strokeWidth="1.5" />
        </svg>
        <div className="container">
          <div className="hero-inner">
            <div>
              <h1>
                AI驱动<br />
                <span className="row2">乡村智慧大脑</span>
              </h1>
              <p className="hero-lede">
                基于"AI特派员 + AI智库助手"双智能体框架，打造面向生产服务与发展决策的一体化智能平台，赋能乡村振兴。
              </p>

              <div className="dual-cards">
                <div className="dual-card">
                  <div className="dc-top">
                    <div className="dc-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.5 12 13 13 12" /></svg>
                    </div>
                    <div><h3>AI特派员</h3></div>
                  </div>
                  <p className="dc-desc">面向生产一线的智能服务助手</p>
                </div>
                <div className="dual-card">
                  <div className="dc-top">
                    <div className="dc-icon" style={{ background: "linear-gradient(135deg,#1d6b3c,var(--brand-dark))" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6s1.5-2 5-2 5 2 5 2v14s-1.5-1-5-1-5 1-5 1V6Z" /><path d="M22 6s-1.5-2-5-2-5 2-5 2v14s1.5-1 5-1 5 1 5 1V6Z" /></svg>
                    </div>
                    <div><h3>AI智库助手</h3></div>
                  </div>
                  <p className="dc-desc">面向发展决策的智能研判助手</p>
                </div>
              </div>

              <div className="hero-cta">
                <a className="btn btn-primary" href="#contact">进入智慧对话 →</a>
                <a className="btn btn-ghost" href="#matrix">了解平台能力</a>
              </div>
            </div>

            {/* 对话演示 */}
            <div className="chat-card reveal">
              <div className="chat-head">
                <div className="chat-avatar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2a7 7 0 0 0-7 7c0 2 .8 3.4 1.8 4.6.7.9 1.2 1.9 1.2 3v.4h8v-.4c0-1.1.5-2.1 1.2-3C18.2 12.4 19 11 19 9a7 7 0 0 0-7-7Z" /><path d="M9 21h6" /></svg>
                </div>
                <div>
                  <h4>乡村智慧大脑 AI 助手</h4>
                  <span className="online">在线</span>
                </div>
              </div>
              <div className="chat-body" ref={chatRef}></div>
              <div className="chat-input">
                <input type="text" placeholder="请输入您的问题…" aria-label="请输入您的问题" />
                <button className="send-btn" aria-label="发送">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 功能矩阵 */}
      <section id="matrix">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">功能矩阵</span>
            <h2>双智能体核心能力矩阵</h2>
            <p>
              围绕 <span className="hl">AI特派员</span> 与 <span className="hl">AI智库助手</span>，构建面向生产服务与发展决策的双轮驱动能力体系。
            </p>
          </div>

          <div className="matrix-grid">
            {/* AI特派员 */}
            <div className="agent-panel reveal">
              <div className="agent-head">
                <div className="agent-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.5 12 13 13 12" /></svg>
                </div>
                <div>
                  <h3>AI特派员</h3>
                  <p>面向生产与经营一线的智能服务能力</p>
                </div>
              </div>
              <div className="agent-rule"></div>
              <div className="fcards">
                {expertFeatures.map((f) => (
                  <FeatureCard key={f.title} f={f} onClick={() => setActiveCard(f)} />
                ))}
              </div>
            </div>

            {/* AI智库助手 */}
            <div className="agent-panel book reveal">
              <div className="agent-head">
                <div className="agent-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6s1.5-2 5-2 5 2 5 2v14s-1.5-1-5-1-5 1-5 1V6Z" /><path d="M22 6s-1.5-2-5-2-5 2-5 2v14s1.5-1 5-1 5 1 5 1V6Z" /></svg>
                </div>
                <div>
                  <h3>AI智库助手</h3>
                  <p>面向发展决策的智库研判能力</p>
                </div>
              </div>
              <div className="agent-rule" style={{ background: "var(--brand-dark)" }}></div>
              <div className="fcards">
                {thinkFeatures.map((f) => (
                  <FeatureCard key={f.title} f={f} onClick={() => setActiveCard(f)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 数据中枢 */}
      <section id="data">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">数据中枢</span>
            <h2>
              支撑 <span className="hl">AI特派员</span> 与 <span className="hl">AI智库助手</span> 的数据资产底座
            </h2>
            <p>围绕乡情识别、政策研判、案例借鉴、项目生成等核心任务，沉淀可被AI调用的多源数据资产，支撑问答、分析、诊断与方案生成。</p>
          </div>

          <div className="data-grid">
            {[
              { num: "35万", em: "+", h: "乡情画像数据", p: "覆盖全国31个省份、370余个自然村，沉淀农户、村庄、治理、经济等多维乡村基础数据。", bg: DATA_BG.village, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 4l9 6.5" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></svg> },
              { num: "230", em: "+", h: "发展评价指标", p: "构建20余类二级指标、230余项细化指标，覆盖乡村振兴评价、生产能力、消费行为等分析维度。", bg: DATA_BG.analytics, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 20V10M10 20V4M16 20v-8M22 20H2" /></svg> },
              { num: "100", em: "+", h: "观测点与调研网络", p: "依托全国典型县镇村持续布设观测点，结合返乡调研、田野访谈、测绘采集等形成长期动态观测样本。", bg: DATA_BG.terraces, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3" /><path d="M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8Z" /></svg> },
              { num: "300", em: "+", h: "决策报告与研判成果", p: "基于观测基地、调研样本与仿真分析，形成300余份智能决策报告，支撑基层治理与项目研判。", bg: DATA_BG.folders, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M9 13h6M9 17h4" /></svg> },
              { num: "3910万", em: "+", h: "政策语料数据", p: "整合乡村振兴相关宏观政策数据，支撑政策检索、语义分析、政策问答和制度研究。", bg: DATA_BG.papers, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z" /><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" /></svg> },
              { num: "2.1万", em: "+", h: "政策文件资料", p: "汇聚专项文件、政策文本、政策解读等材料，形成可用于项目谋划与政策适配分析的知识底座。", bg: DATA_BG.books, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 11h8M8 15h5" /></svg> },
              { num: "120", em: "+", h: "典型案例样本", p: "覆盖全国19个省级行政区，沉淀县域、乡镇、村庄三级乡村振兴实践案例，支撑模式借鉴与经验提炼。", bg: DATA_BG.architecture, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" /></svg> },
              { num: "1.2万", em: "+", h: "实践项目文档", p: "整合调研报告、规划方案、项目材料、区域发展文本等实践文档，为方案生成与项目策划提供内容支撑。", bg: DATA_BG.archive, icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg> },
            ].map((d) => (
              <div className="dcard reveal" key={d.h}>
                <div className="d-icon">{d.icon}</div>
                <div className="d-num">{d.num}<em>{d.em}</em></div>
                <h4>{d.h}</h4>
                <p>{d.p}</p>
              </div>
            ))}
          </div>
          <p className="data-note">数据来源：实验室长期调研、观测采集、项目积累与第三方合作，持续更新中</p>
        </div>
      </section>

      {/* 技术架构 */}
      <section id="tech">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">技术架构</span>
            <h2>底层技术能力支撑</h2>
            <p>构建"大模型 + 知识图谱 + RAG + 多智能体"的技术底座，确保系统的准确性、可靠性与可扩展性。</p>
          </div>

          <div className="tech-stage reveal" style={{ ["--tech-bg" as string]: `url(${TECH_BG})` }}>
            <div className="tech-grid">
              {[
                { h: "大语言模型", en: "LLM Foundation", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0-3 6.5A4 4 0 0 0 7 19a4 4 0 0 0 5 3 4 4 0 0 0 5-3 4 4 0 0 0 2-6.5A4 4 0 0 0 16 6a4 4 0 0 0-4-4Z" /><path d="M12 8v8M9 11l3-3 3 3" /></svg> },
                { h: "知识图谱", en: "Knowledge Graph", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="5" cy="6" r="2.2" /><circle cx="19" cy="6" r="2.2" /><circle cx="12" cy="18" r="2.2" /><circle cx="12" cy="10" r="2.2" /><path d="M7 7l3 2M17 7l-3 2M12 12.2V15.8" /></svg> },
                { h: "RAG 检索增强", en: "Retrieval Augmented", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3M8 11h6M11 8v6" /></svg> },
                { h: "多智能体协同", en: "Multi-Agent", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="6" cy="7" r="2.5" /><circle cx="18" cy="7" r="2.5" /><circle cx="12" cy="17" r="2.5" /><path d="M8 8.5 10.5 15M16 8.5 13.5 15M8.5 7h7" /></svg> },
                { h: "多模态感知", en: "Multimodal", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" /><circle cx="12" cy="12" r="3" /></svg> },
              ].map((t) => (
                <div className="tcard" key={t.h}>
                  <div className="t-icon">{t.icon}</div>
                  <h4>{t.h}</h4>
                  <div className="en">{t.en}</div>
                </div>
              ))}
            </div>
            <div className="tech-base">数据中枢 · 安全合规 · 私有化部署 —— 统一支撑双智能体稳定运行</div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">数据服务</span>
            <h2>联系我们</h2>
            <p>填写以下信息，我们的团队将在 1—3 个工作日内与您联系。</p>
          </div>

          <div className="form-card reveal">
            <div className="form-row">
              <div className="form-field">
                <label>姓名<span className="req">*</span></label>
                <input type="text" placeholder="请输入您的姓名" />
              </div>
              <div className="form-field">
                <label>单位<span className="req">*</span></label>
                <input type="text" placeholder="请输入您的单位" />
              </div>
              <div className="form-field">
                <label>手机<span className="req">*</span></label>
                <input type="tel" placeholder="请输入您的手机号" />
              </div>
            </div>
            <div className="form-field">
              <label>需求类型</label>
              <select>
                <option>数据咨询 / 数据申请 / 专题分析 / 合作试点</option>
                <option>数据咨询</option>
                <option>数据申请</option>
                <option>专题分析</option>
                <option>合作试点</option>
              </select>
            </div>
            <div className="form-field">
              <label>需求简述</label>
              <textarea placeholder="请简要描述您的需求内容、使用场景或希望获得的支持"></textarea>
            </div>
            <button
              className="btn btn-primary form-submit"
              onClick={(e) => {
                const b = e.currentTarget;
                b.textContent = "已提交，我们将尽快与您联系";
                b.disabled = true;
                b.style.opacity = "0.75";
              }}
            >
              提交申请
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
