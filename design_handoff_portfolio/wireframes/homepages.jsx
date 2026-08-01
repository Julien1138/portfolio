// homepages.jsx — 4 distinct hero/homepage directions
// All share the side rail + status bar shell.

const HOME_W = 1100;
const HOME_H = 1900;

// ────────────────────────────────────────────────────────────────────
// Wrapper that gives each homepage the IDE-style chrome
// ────────────────────────────────────────────────────────────────────
const HomeShell = ({ label, children, path = "~/portfolio/home", active = "home" }) => (
  <div className="wf" style={{ width: HOME_W, height: HOME_H, display: "flex", flexDirection: "column" }}>
    <TopNav />
    <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
      <SideRail active={active} />
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
        {children}
      </div>
    </div>
    <StatusBar path={path} info={label} />
  </div>
);

// ────────────────────────────────────────────────────────────────────
// HOME A — Terminal / shell prompt
// ────────────────────────────────────────────────────────────────────
const HomeTerminal = () => (
  <HomeShell label="A · TERMINAL">
    <div style={{ padding: "40px 56px 60px", height: "100%", overflow: "hidden", position: "relative" }}>
      <FrameTitle>HOME — Variant A · Terminal prompt</FrameTitle>

      {/* Terminal block */}
      <div className="box" style={{ padding: "20px 24px", marginTop: 16, fontFamily: "var(--font-mono)", fontSize: 13, lineHeight: 1.7, background: "var(--paper-2)" }}>
        <div style={{ color: "var(--ink-soft)" }}>$ whoami</div>
        <div style={{ fontSize: 32, lineHeight: 1.15, fontWeight: 600, margin: "10px 0", letterSpacing: "-0.01em" }}>
          Jean Dupont<span className="caret" style={{ marginLeft: 4 }}>▌</span>
        </div>
        <div style={{ color: "var(--ink-soft)" }}>$ cat role.txt</div>
        <div style={{ fontSize: 22, fontWeight: 500, margin: "6px 0 16px" }}>
          <span className="uline">Software &amp; Embedded Systems Architect</span>
        </div>
        <div style={{ color: "var(--ink-soft)" }}>$ cat about.md | head -3</div>
        <div className="hand-h" style={{ fontSize: 18, fontWeight: 400, lineHeight: 1.5, marginTop: 8, fontFamily: "var(--font-hand)" }}>
          15+ ans à concevoir des systèmes — du firmware bare-metal<br/>
          au backend SaaS. Hardware, embarqué, cloud. Une seule pile,<br/>
          une seule personne.
        </div>
        <div style={{ marginTop: 18, color: "var(--ink-soft)" }}>
          $ ls --recent<br/>
          <span style={{ color: "var(--accent)" }}>drwxr-xr-x</span>  iot-platform/   <span style={{ color: "var(--ink-soft)" }}>// ESP32 + Vue + API Platform</span><br/>
          <span style={{ color: "var(--accent)" }}>drwxr-xr-x</span>  saas-erp/       <span style={{ color: "var(--ink-soft)" }}>// Architecture multi-tenant</span><br/>
          <span style={{ color: "var(--accent)" }}>drwxr-xr-x</span>  fpga-vision/    <span style={{ color: "var(--ink-soft)" }}>// Capture + traitement temps réel</span>
        </div>
        <div style={{ marginTop: 14, color: "var(--ink-soft)" }}>$ <span className="caret">▌</span></div>
      </div>

      <Anno style={{ position: "absolute", top: 40, right: 40, maxWidth: 180, textAlign: "right" }}>
        Hero = écran terminal interactif. La position est claire dès la 1re ligne.
      </Anno>

      <hr className="div-rule" style={{ marginTop: 28 }} />

      {/* Skills as a `tree` command */}
      <SectionHeader num="01" title="Compétences" sub="affichées comme un `tree`" />
      <div className="box-thin" style={{ padding: 18, fontFamily: "var(--font-mono)", fontSize: 12, lineHeight: 1.7, background: "var(--paper)" }}>
        <div>./stack/</div>
        <div>├── <b>embedded/</b>     <span style={{ color: "var(--ink-soft)" }}>C, C++, RTOS, ESP32, STM32, FPGA (VHDL)</span></div>
        <div>├── <b>backend/</b>      <span style={{ color: "var(--ink-soft)" }}>PHP/Symfony, API Platform, Node, PostgreSQL</span></div>
        <div>├── <b>frontend/</b>     <span style={{ color: "var(--ink-soft)" }}>VueJS, React, TypeScript, Astro</span></div>
        <div>├── <b>infra/</b>        <span style={{ color: "var(--ink-soft)" }}>Docker, CI/CD, Linux, observabilité</span></div>
        <div>└── <b>method/</b>       <span style={{ color: "var(--ink-soft)" }}>spec, traçabilité, archi, perf</span></div>
      </div>

      <hr className="div-rule" />

      {/* Recent projects — log style */}
      <SectionHeader num="02" title="Projets récents" sub="git log --oneline" />
      <div className="box-thin" style={{ padding: 16, fontFamily: "var(--font-mono)", fontSize: 12, lineHeight: 1.9, background: "var(--paper)" }}>
        {[
          ["a3f2e91", "feat(iot)", "ESP32 fleet · 12k devices en prod"],
          ["7c1d4ab", "arch(saas)", "Refonte multi-tenant · ERP SaaS"],
          ["e02b550", "perf(fpga)", "Pipeline vision 60fps → 240fps"],
          ["1f9c0d3", "lead", "CTO intérim · scale-up B2B"],
          ["2a5e7f8", "embed", "Firmware med-tech (IEC 62304)"],
        ].map(([h, t, m]) => (
          <div key={h} style={{ display: "flex", gap: 14 }}>
            <span style={{ color: "var(--accent)" }}>{h}</span>
            <span style={{ color: "var(--ink-soft)", minWidth: 90 }}>{t}</span>
            <span>{m}</span>
          </div>
        ))}
        <div style={{ color: "var(--ink-soft)", marginTop: 10 }}>$ git log --all → <span style={{ color: "var(--accent)" }}>voir tous les projets</span></div>
      </div>

      <hr className="div-rule" />

      <SectionHeader num="03" title="Contact" sub="man contact" />
      <div className="box-thin" style={{ padding: 16, fontFamily: "var(--font-mono)", fontSize: 12, lineHeight: 1.8, background: "var(--paper)" }}>
        <div>NAME       jean.dupont — disponible pour missions long terme</div>
        <div>EMAIL      hello@jdupont.eng</div>
        <div>SIGNAL     +33 6 ** ** ** **</div>
        <div>LINKEDIN   /in/jeandupont</div>
        <div>GITHUB     @jdupont</div>
      </div>
    </div>
  </HomeShell>
);

// ────────────────────────────────────────────────────────────────────
// HOME B — Datasheet / Fiche technique
// ────────────────────────────────────────────────────────────────────
const HomeDatasheet = () => (
  <HomeShell label="B · DATASHEET">
    <div style={{ padding: "32px 56px 60px" }}>
      <FrameTitle>HOME — Variant B · Fiche technique / Datasheet</FrameTitle>

      {/* Datasheet header strip */}
      <div className="box" style={{ marginTop: 12, background: "var(--ink)", color: "var(--paper)", padding: "12px 18px", display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        <span>JD-ENG · REV 2.4 · 2026</span>
        <span>FICHE TECHNIQUE · ARCHITECTE</span>
        <span>PAGE 1 / 1</span>
      </div>

      {/* Two-column hero: identity + key specs */}
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 0, border: "1.5px solid var(--ink)", borderTop: "none" }}>
        <div style={{ padding: "28px 24px", borderRight: "1.5px solid var(--ink)" }}>
          <div className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Désignation</div>
          <div className="hand-h" style={{ fontSize: 36, lineHeight: 1.05, marginTop: 8, fontWeight: 700 }}>
            Jean Dupont
          </div>
          <div className="hand-h" style={{ fontSize: 18, marginTop: 6, fontWeight: 400 }}>
            Software &amp; Embedded Systems Architect
          </div>

          <div className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 22 }}>Description</div>
          <p style={{ marginTop: 6, fontSize: 15, lineHeight: 1.55, maxWidth: 480 }}>
            Architecte double-domaine. <span className="uline">Du transistor au cluster Kubernetes.</span> 15 ans à
            concevoir, livrer et industrialiser des systèmes complexes — IoT, SaaS, instrumentation, ERP.
          </p>

          <div className="ph" style={{ height: 110, marginTop: 22 }}>portrait professionnel · placeholder</div>
        </div>

        <div style={{ padding: "20px 24px", fontFamily: "var(--font-mono)", fontSize: 11.5, lineHeight: 1.8 }}>
          <div className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Caractéristiques</div>
          {[
            ["Expérience", "15+ ans (depuis 2009)"],
            ["Domaines", "Embedded · Backend · Frontend · Infra"],
            ["Rôles", "Architect · Tech Lead · CTO"],
            ["Langages", "C, C++, TS, JS, PHP, VHDL"],
            ["Plateformes", "ESP32, STM32, FPGA, Linux"],
            ["Frameworks", "Vue, React, Symfony, API Platform"],
            ["Méthodes", "Spec-driven, traçabilité, tests"],
            ["Localisation", "Lyon · remote EU"],
            ["Disponibilité", "Q3 2026"],
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", borderBottom: "1px dotted var(--ink-faint)", padding: "3px 0" }}>
              <span style={{ width: 110, color: "var(--ink-soft)" }}>{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </div>
      </div>

      <Anno style={{ marginTop: 12, marginLeft: 8, display: "inline-block" }}>
        Le profil se lit comme une fiche composant — sobre, dense, vérifiable.
      </Anno>

      <hr className="div-rule" />

      {/* Compétences en matrice BOM */}
      <SectionHeader num="01" title="Stack — Bill of Materials" sub="vue par domaine" />
      <div className="box-thin" style={{ padding: 0, fontFamily: "var(--font-mono)", fontSize: 11, overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "60px 1.1fr 2fr 90px 60px", background: "var(--paper-2)", borderBottom: "1.5px solid var(--ink)", padding: "8px 14px", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--ink-soft)" }}>
            <span>REF</span><span>Domaine</span><span>Composants</span><span>Années</span><span>Niv.</span>
        </div>
        {[
          ["EMB-01", "Embarqué temps réel", "C / C++ / FreeRTOS / ESP-IDF", "12", "★★★★★"],
          ["EMB-02", "Logique programmable", "VHDL / Verilog / Lattice / Xilinx", "8", "★★★★☆"],
          ["EMB-03", "MCU bare-metal", "STM32 / Nordic / ESP32", "12", "★★★★★"],
          ["BCK-01", "API & backend", "Symfony / API Platform / Node", "10", "★★★★★"],
          ["BCK-02", "Bases de données", "PostgreSQL / TimescaleDB / Redis", "10", "★★★★☆"],
          ["FRT-01", "SPA modernes", "Vue 3 / React / TypeScript / Astro", "9", "★★★★☆"],
          ["INF-01", "Containers & CI", "Docker / Compose / GitLab CI", "8", "★★★★☆"],
          ["INF-02", "Observabilité", "Prometheus / Grafana / Loki", "5", "★★★☆☆"],
        ].map((row, i) => (
          <div key={row[0]} style={{ display: "grid", gridTemplateColumns: "60px 1.1fr 2fr 90px 60px", padding: "7px 14px", borderBottom: i === 7 ? "none" : "1px solid var(--rule)", background: i % 2 ? "var(--paper)" : "var(--paper-2)" }}>
            {row.map((c, j) => <span key={j} style={{ color: j === 0 ? "var(--accent)" : j === 4 ? "var(--ink)" : "inherit" }}>{c}</span>)}
          </div>
        ))}
      </div>

      <hr className="div-rule" />

      {/* Projets — alternated cards */}
      <SectionHeader num="02" title="Projets phares" sub="3 deep-dives" />
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {[
          { tag: "P-01 · IOT", title: "Plateforme de monitoring industriel", body: "Flotte ESP32 (12k devices) → ingestion MQTT → backend Symfony → dashboard Vue temps réel.", chips: ["ESP32", "MQTT", "TimescaleDB", "Vue 3"], side: "L" },
          { tag: "P-02 · SAAS", title: "ERP multi-tenant pour la logistique", body: "Refonte d'un monolithe legacy en archi modulaire. 40+ modules, 200+ utilisateurs simultanés.", chips: ["Symfony", "API Platform", "PostgreSQL", "Docker"], side: "R" },
          { tag: "P-03 · FPGA", title: "Pipeline vision haute fréquence", body: "Capture caméra + prétraitement FPGA + remontée temps réel. Latence < 4 ms.", chips: ["VHDL", "Lattice", "C++", "DMA"], side: "L" },
        ].map((p) => (
          <div key={p.tag} className="box" style={{ display: "grid", gridTemplateColumns: p.side === "L" ? "180px 1fr" : "1fr 180px", overflow: "hidden", background: "var(--paper)" }}>
            {p.side === "L" && <div className="ph" style={{ borderRadius: 0, border: "none", borderRight: "1.5px solid var(--ink)" }}>capture · {p.tag}</div>}
            <div style={{ padding: "16px 20px" }}>
              <div className="mono" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.08em" }}>{p.tag}</div>
              <div className="hand-h" style={{ fontSize: 20, marginTop: 4 }}>{p.title}</div>
              <p style={{ fontSize: 14, color: "var(--ink-2)", margin: "8px 0 12px", lineHeight: 1.5 }}>{p.body}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {p.chips.map(c => <Chip key={c}>{c}</Chip>)}
              </div>
            </div>
            {p.side === "R" && <div className="ph" style={{ borderRadius: 0, border: "none", borderLeft: "1.5px solid var(--ink)" }}>capture · {p.tag}</div>}
          </div>
        ))}
      </div>

      <hr className="div-rule" />

      <SectionHeader num="03" title="Contact" />
      <div className="box-thin" style={{ padding: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, fontFamily: "var(--font-mono)", fontSize: 12 }}>
        <div>
          <div style={{ color: "var(--ink-soft)", fontSize: 10, textTransform: "uppercase" }}>Email</div>
          <div style={{ fontSize: 16 }}>hello@jdupont.eng</div>
        </div>
        <div>
          <div style={{ color: "var(--ink-soft)", fontSize: 10, textTransform: "uppercase" }}>Disponibilité</div>
          <div style={{ fontSize: 16 }}>Q3 2026 — missions ≥ 3 mois</div>
        </div>
      </div>
    </div>
  </HomeShell>
);

// ────────────────────────────────────────────────────────────────────
// HOME C — Dashboard d'ingénieur
// ────────────────────────────────────────────────────────────────────
const HomeDashboard = () => (
  <HomeShell label="C · DASHBOARD">
    <div style={{ padding: "28px 40px 50px" }}>
      <FrameTitle>HOME — Variant C · Dashboard technique</FrameTitle>

      {/* Top row: identity card + 4 KPI cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr", gap: 12, marginTop: 12 }}>
        <div className="box" style={{ padding: "18px 20px", background: "var(--paper)" }}>
          <div className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Identité</div>
          <div className="hand-h" style={{ fontSize: 26, marginTop: 4, lineHeight: 1.1 }}>Jean Dupont</div>
          <div className="hand-h" style={{ fontSize: 14, fontWeight: 400, color: "var(--ink-2)", marginTop: 2 }}>Software &amp; Embedded Architect</div>
          <div style={{ display: "flex", gap: 4, marginTop: 10, flexWrap: "wrap" }}>
            <Chip variant="fill">disponible Q3</Chip>
            <Chip>Lyon · EU</Chip>
            <Chip>FR / EN</Chip>
          </div>
        </div>
        {[
          ["15+", "années", "depuis 2009"],
          ["28", "projets livrés", "embedded → cloud"],
          ["12k", "devices en prod", "IoT actuel"],
          ["3", "rôles", "Architect · Lead · CTO"],
        ].map(([n, l, s]) => (
          <div key={l} className="box" style={{ padding: 14, background: "var(--paper)" }}>
            <div className="mono" style={{ fontSize: 9, color: "var(--ink-soft)", textTransform: "uppercase" }}>{l}</div>
            <div className="hand-h" style={{ fontSize: 32, marginTop: 4, color: "var(--accent)" }}>{n}</div>
            <div className="note" style={{ fontSize: 13 }}>{s}</div>
          </div>
        ))}
      </div>

      <Anno style={{ marginTop: 10, display: "inline-block" }}>
        Le hero est un dashboard. Lecture instantanée du profil.
      </Anno>

      {/* Big stack diagram */}
      <div className="box" style={{ marginTop: 16, padding: 18, background: "var(--paper)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
          <div className="hand-h" style={{ fontSize: 18 }}>Stack — du silicium au pixel</div>
          <span className="mono" style={{ fontSize: 10, color: "var(--ink-soft)" }}>vue verticale</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { layer: "FRONTEND", color: "var(--accent-soft)", items: ["Vue 3", "React", "TypeScript", "Astro", "Tailwind"] },
            { layer: "BACKEND", color: "var(--paper-2)", items: ["Symfony", "API Platform", "Node", "PostgreSQL", "Redis"] },
            { layer: "INFRA", color: "var(--paper-2)", items: ["Docker", "Compose", "GitLab CI", "Prometheus", "Grafana"] },
            { layer: "FIRMWARE", color: "var(--paper-2)", items: ["C", "C++", "FreeRTOS", "ESP-IDF", "STM32"] },
            { layer: "HARDWARE", color: "var(--accent-soft)", items: ["ESP32", "STM32", "FPGA Lattice/Xilinx", "VHDL", "schémas"] },
          ].map((l) => (
            <div key={l.layer} className="box-thin" style={{ display: "grid", gridTemplateColumns: "120px 1fr", padding: "10px 12px", background: l.color, borderColor: "var(--ink-soft)" }}>
              <div className="mono" style={{ fontSize: 10, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "0.1em", alignSelf: "center" }}>{l.layer}</div>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {l.items.map(i => <Chip key={i}>{i}</Chip>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent activity feed + projects */}
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 12, marginTop: 16 }}>
        <div className="box" style={{ padding: 16, background: "var(--paper)" }}>
          <div className="hand-h" style={{ fontSize: 17, marginBottom: 10 }}>Projets actifs</div>
          {[
            ["IoT industriel", "v3.2", "RUNNING", "uptime 99.97%"],
            ["ERP SaaS",       "v8.1", "RUNNING", "200+ users / day"],
            ["FPGA vision",    "v1.0", "SHIPPED", "60 fps · 4ms"],
            ["Med-tech FW",    "v2.4", "AUDIT",   "IEC 62304"],
          ].map((r, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1.4fr 50px 80px 1fr", padding: "8px 0", borderBottom: i === 3 ? "none" : "1px dotted var(--rule)", fontSize: 13 }}>
              <span style={{ fontWeight: 500 }}>{r[0]}</span>
              <span className="mono" style={{ fontSize: 11, color: "var(--ink-soft)" }}>{r[1]}</span>
              <span><Chip variant={r[2] === "RUNNING" ? "fill" : ""}>{r[2]}</Chip></span>
              <span className="note" style={{ textAlign: "right", fontSize: 13 }}>{r[3]}</span>
            </div>
          ))}
        </div>
        <div className="box" style={{ padding: 16, background: "var(--paper)" }}>
          <div className="hand-h" style={{ fontSize: 17, marginBottom: 10 }}>Activité récente</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, lineHeight: 1.85, color: "var(--ink-2)" }}>
            <div><span style={{ color: "var(--accent)" }}>2026-04</span>  Talk — "Du firmware au cloud" · DevoxxFR</div>
            <div><span style={{ color: "var(--accent)" }}>2026-02</span>  Mission CTO intérim · scale-up B2B</div>
            <div><span style={{ color: "var(--accent)" }}>2025-11</span>  Release IoT v3.2 · 12k devices</div>
            <div><span style={{ color: "var(--accent)" }}>2025-09</span>  Article — Spec-driven embedded</div>
            <div><span style={{ color: "var(--accent)" }}>2025-06</span>  Audit archi · ERP médical</div>
          </div>
        </div>
      </div>

      <hr className="div-rule" />
      <SectionHeader num="04" title="Voir tout" sub="projets · stack · parcours · contact" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
        {[
          ["Projets", "→ deep-dives techniques"],
          ["Stack", "→ matrice complète"],
          ["Parcours", "→ timeline 2009 → 2026"],
          ["Contact", "→ disponibilités"],
        ].map(([t, s]) => (
          <div key={t} className="box-dashed" style={{ padding: 14, textAlign: "center" }}>
            <div className="hand-h" style={{ fontSize: 18 }}>{t}</div>
            <div className="note" style={{ fontSize: 13, marginTop: 4 }}>{s}</div>
          </div>
        ))}
      </div>
    </div>
  </HomeShell>
);

// ────────────────────────────────────────────────────────────────────
// HOME D — Schéma système (hardware ↔ cloud)
// ────────────────────────────────────────────────────────────────────
const HomeSchema = () => (
  <HomeShell label="D · SCHEMA">
    <div className="dot-paper" style={{ padding: "32px 56px 60px", height: "100%", overflow: "hidden", position: "relative" }}>
      <FrameTitle>HOME — Variant D · Schéma système</FrameTitle>

      {/* Identity strip — minimal, top-left */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 18, marginTop: 12, marginBottom: 24 }}>
        <div>
          <div className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Schéma — JD-ENG.SYS</div>
          <div className="hand-h" style={{ fontSize: 38, lineHeight: 1.05, marginTop: 4 }}>Jean Dupont</div>
          <div className="hand-h" style={{ fontSize: 18, fontWeight: 400, color: "var(--ink-2)" }}>
            Architecte — <span className="uline">du capteur au navigateur.</span>
          </div>
        </div>
        <div style={{ flex: 1 }} />
        <div className="mono" style={{ fontSize: 11, color: "var(--ink-soft)", textAlign: "right" }}>
          15 ans · 28 projets<br/>embedded · saas · iot · fpga
        </div>
      </div>

      {/* The schema — 4 horizontal layers with arrows */}
      <div style={{ position: "relative", border: "1.5px solid var(--ink)", borderRadius: 8, padding: 24, background: "var(--paper)" }}>
        <div className="mono" style={{ position: "absolute", top: -8, left: 16, background: "var(--paper)", padding: "0 8px", fontSize: 10, color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Périmètre d'intervention
        </div>

        {[
          { lbl: "USER", title: "Utilisateur final", items: ["UX", "navigateur", "device mobile"], side: "right", color: "var(--accent-soft)" },
          { lbl: "CLOUD", title: "Backend + Frontend SaaS", items: ["Vue / React", "Symfony / API Platform", "PostgreSQL", "CI/CD · Docker"], side: "right" },
          { lbl: "EDGE", title: "Passerelle / ingestion", items: ["MQTT broker", "OTA", "queue", "TimescaleDB"], side: "right" },
          { lbl: "FW", title: "Firmware embarqué", items: ["FreeRTOS", "ESP-IDF", "drivers", "OTA agent"], side: "right" },
          { lbl: "HW", title: "Hardware & FPGA", items: ["ESP32 / STM32", "FPGA logic (VHDL)", "PCB", "capteurs"], side: "right", color: "var(--accent-soft)" },
        ].map((row, i, arr) => (
          <React.Fragment key={row.lbl}>
            <div style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: 18, alignItems: "center" }}>
              <div className="box" style={{ background: row.color || "var(--paper-2)", padding: "10px 0", textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700 }}>{row.lbl}</div>
              <div className="box-thin" style={{ padding: "12px 16px", background: row.color || "transparent" }}>
                <div className="hand-h" style={{ fontSize: 16, marginBottom: 6 }}>{row.title}</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {row.items.map(it => <Chip key={it}>{it}</Chip>)}
                </div>
              </div>
            </div>
            {i < arr.length - 1 && (
              <div style={{ display: "flex", justifyContent: "center", padding: "6px 0", color: "var(--ink-soft)", fontFamily: "var(--font-mono)", fontSize: 14 }}>
                ↕
              </div>
            )}
          </React.Fragment>
        ))}

        {/* Annotations next to schema */}
        <div className="anno" style={{ position: "absolute", top: 80, right: -8, transform: "rotate(2deg)", maxWidth: 130 }}>
          Je couvre toute la pile.
        </div>
      </div>

      <hr className="div-rule" style={{ marginTop: 28 }} />

      {/* Projects as system diagrams (mini) */}
      <SectionHeader num="01" title="3 systèmes que j'ai conçus" sub="cliquer pour deep-dive" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {[
          { name: "IoT industriel", layers: ["ESP32 ×12k", "MQTT · TS-DB", "Vue dashboard"] },
          { name: "ERP SaaS", layers: ["—", "Symfony · API Platform", "Vue 3 multi-tenant"] },
          { name: "FPGA vision", layers: ["Capteur CMOS", "FPGA pipeline", "C++ host"] },
        ].map(p => (
          <div key={p.name} className="box" style={{ padding: 14, background: "var(--paper)" }}>
            <div className="hand-h" style={{ fontSize: 16, marginBottom: 8 }}>{p.name}</div>
            {p.layers.map((l, i) => (
              <React.Fragment key={i}>
                <div className="box-thin" style={{ padding: "8px 10px", fontFamily: "var(--font-mono)", fontSize: 11, textAlign: "center", background: l === "—" ? "transparent" : "var(--paper-2)", borderStyle: l === "—" ? "dashed" : "solid", color: l === "—" ? "var(--ink-faint)" : "var(--ink)" }}>{l}</div>
                {i < p.layers.length - 1 && <div style={{ textAlign: "center", color: "var(--ink-soft)", fontSize: 12 }}>↕</div>}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>

      <hr className="div-rule" />
      <SectionHeader num="02" title="Contact" />
      <div className="box-thin" style={{ padding: 18, fontFamily: "var(--font-mono)", fontSize: 14, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <span>hello@jdupont.eng</span>
        <span style={{ color: "var(--ink-soft)" }}>·</span>
        <span>linkedin.com/in/jeandupont</span>
        <span style={{ color: "var(--ink-soft)" }}>·</span>
        <span>github.com/jdupont</span>
        <span style={{ color: "var(--ink-soft)" }}>·</span>
        <span>+33 6 ** ** ** **</span>
      </div>
    </div>
  </HomeShell>
);

Object.assign(window, { HomeTerminal, HomeDatasheet, HomeDashboard, HomeSchema, HOME_W, HOME_H });
