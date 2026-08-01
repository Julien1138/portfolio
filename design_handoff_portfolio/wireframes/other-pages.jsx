// other-pages.jsx — About / parcours, Stack (3 treatments), Contact

const PS = ({ active, label, path, w = 1100, h = 1500, children }) => (
  <div className="wf" style={{ width: w, height: h, display: "flex", flexDirection: "column" }}>
    <TopNav />
    <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
      <SideRail active={active} />
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>{children}</div>
    </div>
    <StatusBar path={path} info={label} />
  </div>
);

// ────────────────────────────────────────────────────────────────────
// ABOUT / Parcours — timeline 2009 → 2026
// ────────────────────────────────────────────────────────────────────
const AboutPage = () => (
  <PS active="about" label="ABOUT" path="~/portfolio/about" h={1900}>
    <div style={{ padding: "32px 56px 60px" }}>
      <FrameTitle>ABOUT — Parcours</FrameTitle>

      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 30, alignItems: "start", marginTop: 8 }}>
        <div>
          <h1 className="hand-h" style={{ fontSize: 38, lineHeight: 1.05, margin: 0 }}>À propos</h1>
          <Underline w={120} />
          <p style={{ fontSize: 17, color: "var(--ink-2)", lineHeight: 1.6, marginTop: 14, maxWidth: 540 }}>
            Ingénieur depuis 2009. <span className="uline">Du transistor au cluster Kubernetes.</span> J'ai porté
            des systèmes complexes de la spec initiale jusqu'à la production : firmware
            embarqué, électronique, FPGA, backend, frontend, infra. Une seule personne,
            une seule pile cohérente.
          </p>
          <p style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.6, marginTop: 12, maxWidth: 540 }}>
            Ce qui m'intéresse : la qualité, l'architecture, la traçabilité — et les systèmes
            où l'on doit prouver que ça marche, pas juste sentir que ça marche.
          </p>
        </div>
        <div className="ph x-mark" style={{ height: 260, position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="mono" style={{ background: "var(--paper)", padding: "4px 10px", border: "1px solid var(--ink-soft)" }}>portrait</span>
          </div>
        </div>
      </div>

      <hr className="div-rule" />

      <SectionHeader num="01" title="Parcours" sub="2009 → 2026" />
      <div style={{ position: "relative", paddingLeft: 30 }}>
        <div style={{ position: "absolute", left: 8, top: 6, bottom: 6, width: 2, background: "var(--ink)", borderRadius: 2 }}></div>

        {[
          { y: "2024 — 2026", t: "Architect indépendant", c: "Plateforme IoT industrielle · ERP SaaS · CTO intérim", chips: ["Architect", "Lead", "CTO"], current: true },
          { y: "2021 — 2024", t: "Lead architect · scale-up B2B", c: "ERP SaaS multi-tenant, marketplace, 10 devs.", chips: ["Tech Lead", "Backend", "Frontend"] },
          { y: "2018 — 2021", t: "Senior embedded engineer · medtech", c: "Firmware classe IIa, IEC 62304, FPGA capture vision.", chips: ["Embedded", "FPGA", "Audit"] },
          { y: "2014 — 2018", t: "Full-stack engineer · agency + R&D", c: "Vue / Symfony, plus instrumentation et bancs de test.", chips: ["Backend", "Frontend", "Instrum."] },
          { y: "2011 — 2014", t: "Embedded engineer · industrial", c: "Compteurs énergie connectés, premiers déploiements LoRa.", chips: ["Embedded", "IoT"] },
          { y: "2009 — 2011", t: "Junior · firmware + électronique", c: "Premiers projets STM32, schématique, PCB.", chips: ["Embedded", "Hardware"] },
        ].map((e, i) => (
          <div key={i} style={{ position: "relative", marginBottom: 18 }}>
            <div style={{ position: "absolute", left: -29, top: 6, width: 16, height: 16, borderRadius: "50%", background: e.current ? "var(--accent)" : "var(--paper)", border: "2px solid var(--ink)" }}></div>
            <div className="box" style={{ padding: 14, background: e.current ? "var(--accent-soft)" : "var(--paper)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span className="mono" style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.05em" }}>{e.y}</span>
                {e.current && <Chip variant="fill">en cours</Chip>}
              </div>
              <div className="hand-h" style={{ fontSize: 19, marginTop: 4 }}>{e.t}</div>
              <p style={{ fontSize: 14, color: "var(--ink-2)", margin: "6px 0 10px" }}>{e.c}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {e.chips.map(c => <Chip key={c}>{c}</Chip>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="div-rule" />

      <SectionHeader num="02" title="Méthode" sub="comment je travaille" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {[
          ["Spec → code → test", "Chaque exigence portée par un ID. Spec versionnée, traçabilité descendante. Audit-ready."],
          ["Archi minimaliste",  "Le moins de pièces mobiles possible. Boring tech avant l'exotique. Optimiser quand on mesure."],
          ["Du HW au cloud",     "Une vue cohérente du système complet. Les arbitrages se font à la frontière, je les connais toutes."],
        ].map(([t, b]) => (
          <div key={t} className="box" style={{ padding: 14, background: "var(--paper)" }}>
            <div className="hand-h" style={{ fontSize: 16 }}>{t}</div>
            <p className="note" style={{ fontSize: 14, marginTop: 6 }}>{b}</p>
          </div>
        ))}
      </div>

      <hr className="div-rule" />
      <SectionHeader num="03" title="Hors-écran" sub="ce qui nourrit" />
      <p style={{ fontSize: 14.5, color: "var(--ink-2)", maxWidth: 720, lineHeight: 1.6 }}>
        Lectures techniques, side-projects en VHDL, mentorat ponctuel, écriture d'articles
        sur le spec-driven embedded. Vélo et photographie quand l'écran fatigue.
      </p>
    </div>
  </PS>
);

// ────────────────────────────────────────────────────────────────────
// STACK PAGE — 3 treatments side by side (in single artboard)
// ────────────────────────────────────────────────────────────────────

// Treatment 1 — Tag cloud hierarchical
const StackTags = () => (
  <PS active="stack" label="A · TAGS" path="~/portfolio/stack" h={1300}>
    <div style={{ padding: "32px 56px" }}>
      <FrameTitle>STACK — Variant A · Nuage de tags hiérarchisé</FrameTitle>
      <h1 className="hand-h" style={{ fontSize: 32, margin: "8px 0 0" }}>Stack technique</h1>
      <Underline w={100} />
      <p className="note" style={{ fontSize: 15, marginTop: 6 }}>// taille du tag = niveau d'usage / maîtrise</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18, marginTop: 22 }}>
        {[
          { dom: "Embarqué", color: "var(--accent-soft)", tags: [
            ["C", "xl"], ["C++", "xl"], ["FreeRTOS", "l"], ["ESP-IDF", "l"], ["STM32 HAL", "l"],
            ["VHDL", "m"], ["Verilog", "s"], ["Lattice", "m"], ["Xilinx", "s"], ["mbedTLS", "s"],
            ["Unity", "s"], ["JTAG", "xs"], ["DMA", "m"], ["UART/SPI/I²C", "m"], ["CAN", "s"],
          ] },
          { dom: "Backend", color: "var(--paper-2)", tags: [
            ["Symfony", "xl"], ["API Platform", "xl"], ["PHP 8", "l"], ["PostgreSQL", "l"],
            ["TimescaleDB", "m"], ["Redis", "m"], ["Doctrine", "m"], ["Messenger", "m"],
            ["Node.js", "m"], ["NestJS", "s"], ["GraphQL", "s"], ["gRPC", "xs"], ["MQTT", "l"],
          ] },
          { dom: "Frontend", color: "var(--paper-2)", tags: [
            ["Vue 3", "xl"], ["Pinia", "l"], ["TypeScript", "l"], ["Vite", "l"], ["React", "m"],
            ["Astro", "m"], ["Tailwind", "m"], ["Vitest", "m"], ["Playwright", "s"], ["Storybook", "s"],
          ] },
          { dom: "Infra · Méthode", color: "var(--accent-soft)", tags: [
            ["Docker", "xl"], ["Compose", "l"], ["GitLab CI", "l"], ["Linux", "l"], ["K8s", "m"],
            ["Prometheus", "m"], ["Grafana", "m"], ["Loki", "s"], ["spec-driven", "l"],
            ["traçabilité", "m"], ["IEC 62304", "m"], ["audit", "s"],
          ] },
        ].map(g => (
          <div key={g.dom} className="box" style={{ padding: 18, background: g.color, minHeight: 260 }}>
            <div className="hand-h" style={{ fontSize: 18, marginBottom: 12 }}>{g.dom}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 14px", alignItems: "baseline" }}>
              {g.tags.map(([t, sz]) => (
                <span key={t} className={"tag-" + sz} style={{ fontFamily: sz === "xl" || sz === "l" ? "var(--font-hand)" : "var(--font-mono)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Anno style={{ marginTop: 20 }}>Lecture rapide, hiérarchie naturelle. Pas de barres de progression cliché.</Anno>
    </div>
  </PS>
);

// Treatment 2 — BOM matrix
const StackBOM = () => (
  <PS active="stack" label="B · BOM" path="~/portfolio/stack" h={1500}>
    <div style={{ padding: "32px 56px" }}>
      <FrameTitle>STACK — Variant B · Matrice BOM</FrameTitle>
      <h1 className="hand-h" style={{ fontSize: 32, margin: "8px 0 0" }}>Stack technique — BOM</h1>
      <Underline w={100} />
      <p className="note" style={{ fontSize: 15, marginTop: 6 }}>// vue ingénieur, exhaustive, triable</p>

      <div className="box" style={{ marginTop: 18, fontFamily: "var(--font-mono)", fontSize: 11, overflow: "hidden" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "70px 1fr 1.6fr 80px 80px 100px",
          padding: "10px 16px",
          background: "var(--ink)",
          color: "var(--paper)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          fontSize: 10,
        }}>
          <span>REF</span><span>Catégorie</span><span>Détail / composants</span><span>Années</span><span>Niv.</span><span>Usage récent</span>
        </div>
        {[
          ["E-01","Langages bas-niveau","C, C++17, assembleur ARM ponctuel","12","★★★★★","2026"],
          ["E-02","RTOS","FreeRTOS, Zephyr (notions), bare-metal","10","★★★★☆","2026"],
          ["E-03","MCU","ESP32, STM32 (F0/F4/H7), Nordic nRF52","12","★★★★★","2026"],
          ["E-04","FPGA","VHDL, Verilog (lecture), Lattice, Xilinx","8","★★★★☆","2025"],
          ["E-05","Bus & protocoles","UART, SPI, I²C, CAN, Modbus, MQTT","12","★★★★★","2026"],
          ["E-06","Sécurité embarquée","mbedTLS, OTA signé, secure boot","6","★★★★☆","2026"],
          ["B-01","Backend frameworks","Symfony, API Platform, NestJS","10","★★★★★","2026"],
          ["B-02","Bases","PostgreSQL, TimescaleDB, Redis, MariaDB","10","★★★★★","2026"],
          ["B-03","Messaging","MQTT, AMQP, Symfony Messenger","8","★★★★☆","2026"],
          ["F-01","SPA","Vue 3 (Pinia, Composition API), React","9","★★★★☆","2026"],
          ["F-02","Build","Vite, Webpack, Astro","8","★★★★☆","2026"],
          ["F-03","Style","Tailwind, SCSS, design tokens","8","★★★★☆","2026"],
          ["I-01","Containers","Docker, Compose, multi-stage builds","8","★★★★☆","2026"],
          ["I-02","Orchestration","Kubernetes, ArgoCD","4","★★★☆☆","2026"],
          ["I-03","CI/CD","GitLab CI, GitHub Actions","8","★★★★☆","2026"],
          ["I-04","Observabilité","Prometheus, Grafana, Loki, Otel","5","★★★☆☆","2026"],
          ["M-01","Méthode","Spec-driven, traçabilité, IEC 62304","8","★★★★☆","2026"],
        ].map((r, i) => (
          <div key={r[0]} style={{
            display: "grid",
            gridTemplateColumns: "70px 1fr 1.6fr 80px 80px 100px",
            padding: "8px 16px",
            borderTop: "1px solid var(--rule)",
            background: i % 2 ? "var(--paper)" : "var(--paper-2)",
          }}>
            <span style={{ color: "var(--accent)" }}>{r[0]}</span>
            <span style={{ color: "var(--ink)", fontWeight: 500 }}>{r[1]}</span>
            <span style={{ color: "var(--ink-soft)" }}>{r[2]}</span>
            <span>{r[3]}</span>
            <span>{r[4]}</span>
            <span style={{ color: "var(--ink-soft)" }}>{r[5]}</span>
          </div>
        ))}
      </div>
    </div>
  </PS>
);

// Treatment 3 — Annotated list with years
const StackAnnotated = () => (
  <PS active="stack" label="C · ANNOTÉ" path="~/portfolio/stack" h={1500}>
    <div style={{ padding: "32px 56px" }}>
      <FrameTitle>STACK — Variant C · Liste annotée</FrameTitle>
      <h1 className="hand-h" style={{ fontSize: 32, margin: "8px 0 0" }}>Stack technique — annoté</h1>
      <Underline w={100} />
      <p className="note" style={{ fontSize: 15, marginTop: 6 }}>// par couche, avec contexte d'usage</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 22 }}>
        {[
          { layer: "FIRMWARE & EMBEDDED", since: "depuis 2009 · 15+ ans",
            items: [
              ["C / C++", "2009→", "langue principale embarquée"],
              ["FreeRTOS", "2012→", "RTOS de référence sur 80% des projets"],
              ["ESP-IDF", "2018→", "stack ESP32 — IoT industriel actuel"],
              ["STM32 HAL / LL", "2010→", "MCU médical, instrumentation"],
              ["VHDL / FPGA", "2017→", "vision haute-fréquence, décodeurs proto"],
            ]},
          { layer: "BACKEND & DATA", since: "depuis 2014 · 12 ans",
            items: [
              ["Symfony · API Platform", "2016→", "ERP SaaS, plateformes IoT, marketplaces"],
              ["PostgreSQL + TimescaleDB", "2015→", "data métier + télémétrie series temporelles"],
              ["Redis", "2016→", "cache, queue, rate-limit"],
              ["MQTT", "2018→", "ingestion edge → cloud, QoS, retained, OTA triggers"],
            ]},
          { layer: "FRONTEND", since: "depuis 2017 · 9 ans",
            items: [
              ["Vue 3 + Pinia + TS", "2020→", "SPA dashboard temps réel + ERP front"],
              ["React + Astro", "2022→", "sites institutionnels, MFE"],
              ["Tailwind + tokens", "2021→", "design systems légers, accessibles"],
            ]},
          { layer: "INFRA & MÉTHODE", since: "depuis 2018 · 8 ans",
            items: [
              ["Docker + Compose", "2018→", "tout projet, dev → prod"],
              ["Kubernetes (light)", "2022→", "déploiements ERP & SaaS multi-tenant"],
              ["GitLab CI", "2019→", "pipelines linting/tests/build/sign"],
              ["Spec-driven + traçabilité", "2014→", "IEC 62304, audits internes, qualité"],
            ]},
        ].map(g => (
          <div key={g.layer} className="box" style={{ padding: 16, background: "var(--paper)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
              <div className="hand-h" style={{ fontSize: 18 }}>{g.layer}</div>
              <span className="mono" style={{ fontSize: 10, color: "var(--ink-soft)" }}>{g.since}</span>
            </div>
            <div className="box-thin" style={{ padding: 0 }}>
              {g.items.map((it, i) => (
                <div key={it[0]} style={{ display: "grid", gridTemplateColumns: "1.4fr 90px 2fr", padding: "8px 14px", borderTop: i === 0 ? "none" : "1px dotted var(--rule)", alignItems: "baseline", fontSize: 13.5 }}>
                  <span style={{ fontWeight: 500 }}>{it[0]}</span>
                  <span className="mono" style={{ fontSize: 11, color: "var(--accent)" }}>{it[1]}</span>
                  <span className="note" style={{ fontSize: 14 }}>{it[2]}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </PS>
);

// ────────────────────────────────────────────────────────────────────
// CONTACT
// ────────────────────────────────────────────────────────────────────
const ContactPage = () => (
  <PS active="contact" label="CONTACT" path="~/portfolio/contact" h={1100}>
    <div style={{ padding: "40px 56px" }}>
      <FrameTitle>CONTACT</FrameTitle>
      <h1 className="hand-h" style={{ fontSize: 38, margin: "8px 0 0", lineHeight: 1.05 }}>
        Discuter d'un système.
      </h1>
      <Underline w={140} />
      <p style={{ fontSize: 16, color: "var(--ink-2)", marginTop: 12, maxWidth: 540, lineHeight: 1.55 }}>
        Architecture, lead technique, audit, mission longue. Si vous avez un système
        complexe à concevoir ou à reprendre, écrivez — réponse sous 48 h.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 28 }}>
        {/* Left: contact details */}
        <div className="box" style={{ padding: 22, background: "var(--paper-2)" }}>
          <div className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Coordonnées</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 14, fontFamily: "var(--font-mono)" }}>
            {[
              ["EMAIL",     "hello@jdupont.eng"],
              ["LINKEDIN",  "/in/jeandupont"],
              ["GITHUB",    "@jdupont"],
              ["SIGNAL",    "+33 6 ** ** ** **"],
              ["LOC",       "Lyon · remote EU"],
              ["DISPO",     "Q3 2026 — missions ≥ 3 mois"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", borderBottom: "1px dotted var(--ink-faint)", padding: "4px 0" }}>
                <span style={{ width: 90, color: "var(--ink-soft)", fontSize: 11 }}>{k}</span>
                <span style={{ fontSize: 14, color: "var(--ink)" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="box" style={{ padding: 22, background: "var(--paper)" }}>
          <div className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Message</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 14 }}>
            <div>
              <div className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", marginBottom: 4 }}>nom · entreprise</div>
              <div className="box-thin" style={{ height: 32, padding: "0 10px" }}></div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", marginBottom: 4 }}>email</div>
              <div className="box-thin" style={{ height: 32, padding: "0 10px" }}></div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", marginBottom: 4 }}>type de mission</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {["Architect", "Lead", "CTO i.", "Audit", "Conseil", "Autre"].map(t => <Chip key={t}>{t}</Chip>)}
              </div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", marginBottom: 4 }}>contexte (court)</div>
              <div className="box-thin" style={{ height: 90, padding: "0 10px" }}></div>
            </div>
            <div className="box-ink" style={{ padding: "10px 16px", textAlign: "center", marginTop: 4, borderRadius: 6, fontFamily: "var(--font-mono)", fontSize: 12 }}>
              ENVOYER →
            </div>
          </div>
        </div>
      </div>

      <Anno style={{ marginTop: 22 }}>Form minimal, ton pro, pas de gadget marketing.</Anno>
    </div>
  </PS>
);

Object.assign(window, { AboutPage, StackTags, StackBOM, StackAnnotated, ContactPage });
