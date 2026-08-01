// shared.jsx — small reusable bits used across all wireframes

const SideRail = ({ active = "home" }) => (
  <div className="siderail">
    <div className={"rail-icon" + (active === "home" ? " active" : "")} title="Home">⌂</div>
    <div className={"rail-icon" + (active === "projects" ? " active" : "")} title="Projects">▤</div>
    <div className={"rail-icon" + (active === "stack" ? " active" : "")} title="Stack">≡</div>
    <div className={"rail-icon" + (active === "about" ? " active" : "")} title="About">◐</div>
    <div className={"rail-icon" + (active === "contact" ? " active" : "")} title="Contact">✉</div>
    <div style={{ flex: 1 }}></div>
    <div style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: 9, opacity: 0.6 }}>v2.4 · main</div>
  </div>
);

const StatusBar = ({ path = "~/portfolio/home", info = "READY" }) => (
  <div className="statusbar">
    <span><span className="dot"></span>{info}</span>
    <span style={{ opacity: 0.7 }}>{path}</span>
    <span style={{ flex: 1 }}></span>
    <span style={{ opacity: 0.7 }}>UTF-8</span>
    <span style={{ opacity: 0.7 }}>FR</span>
    <span style={{ opacity: 0.7 }}>Ln 1, Col 1</span>
  </div>
);

const FrameTitle = ({ children }) => (
  <div className="frame-title" style={{ marginBottom: 6, paddingLeft: 4 }}>{children}</div>
);

const Anno = ({ children, side = "left", style = {} }) => (
  <div className={side === "left" ? "anno" : "anno-r"} style={{ fontFamily: "var(--font-note)", color: "var(--accent)", fontSize: 14, fontWeight: 500, ...style }}>
    {children}
  </div>
);

const Chip = ({ children, variant = "" }) => (
  <span className={"chip " + (variant ? "chip-" + variant : "")}>{children}</span>
);

// Sketchy line under a heading
const Underline = ({ w = 60 }) => (
  <svg viewBox="0 0 100 8" width={w} height="6" style={{ display: "block", marginTop: 4 }}>
    <path d="M2 4 Q 25 0 50 5 T 98 4" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
  </svg>
);

// A "scribble" filled rectangle for placeholder text
const TextLines = ({ lines = 3, width = "100%", lastShorter = true, color = "var(--ink-faint)" }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 6, width }}>
    {Array.from({ length: lines }).map((_, i) => (
      <div key={i} style={{
        height: 6,
        width: lastShorter && i === lines - 1 ? "60%" : "100%",
        background: color,
        borderRadius: 3,
        opacity: 0.5
      }} />
    ))}
  </div>
);

// hand-drawn arrow
const HandArrow = ({ w = 80, h = 30, dir = "right", style = {} }) => (
  <svg width={w} height={h} viewBox="0 0 80 30" style={style}>
    <path d="M2 15 Q 30 5 70 15" fill="none" stroke="var(--accent)" strokeWidth="1.4" />
    <path d="M62 8 L72 15 L62 22" fill="none" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Top nav fallback (when nav=top tweak)
const TopNav = () => (
  <div className="topnav" style={{
    height: 48,
    borderBottom: "1.5px solid var(--ink)",
    background: "var(--paper-2)",
    alignItems: "center",
    padding: "0 20px",
    gap: 24,
    fontFamily: "var(--font-mono)",
    fontSize: 12
  }}>
    <span style={{ fontWeight: 700 }}>~/jd.eng</span>
    <span style={{ flex: 1 }}></span>
    <span>home</span>
    <span style={{ opacity: 0.5 }}>projects</span>
    <span style={{ opacity: 0.5 }}>stack</span>
    <span style={{ opacity: 0.5 }}>about</span>
    <span style={{ opacity: 0.5 }}>contact</span>
  </div>
);

// Section header used across home variants
const SectionHeader = ({ num, title, sub }) => (
  <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
    <span className="mono" style={{ color: "var(--ink-soft)", fontSize: 11 }}>§ {num}</span>
    <h3 className="hand-h" style={{ margin: 0, fontSize: 22 }}>{title}</h3>
    {sub && <span className="note" style={{ fontSize: 14 }}>// {sub}</span>}
  </div>
);

Object.assign(window, { SideRail, StatusBar, FrameTitle, Anno, Chip, Underline, TextLines, HandArrow, TopNav, SectionHeader });
