// projects.jsx — Projects index page with 3 layout variants
// + Project deep-dive page

const PageShell = ({ active, label, path, w = 1100, h = 1500, children }) => (
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
// PROJECTS INDEX — 3 layouts
// ────────────────────────────────────────────────────────────────────

// Variant 1 — git log style
const ProjectsLog = () => (
  <PageShell active="projects" label="A · LOG" path="~/portfolio/projects" h={1400}>
    <div style={{ padding: "32px 56px" }}>
      <FrameTitle>PROJECTS — Variant A · git log style</FrameTitle>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 8 }}>
        <h2 className="hand-h" style={{ fontSize: 32, margin: 0 }}>Projets — log</h2>
        <span className="mono" style={{ fontSize: 11, color: "var(--ink-soft)" }}>git log --all --since=2009</span>
      </div>
      <Underline w={120} />

      <div style={{ display: "flex", gap: 8, margin: "18px 0 14px", flexWrap: "wrap" }}>
        {["all", "embedded", "saas", "iot", "fpga", "lead/cto"].map((f, i) => (
          <Chip key={f} variant={i === 0 ? "fill" : ""}>{f}</Chip>
        ))}
        <span style={{ flex: 1 }}></span>
        <span className="note" style={{ fontSize: 13 }}>filtres ↑</span>
      </div>

      <div className="box" style={{ padding: "8px 0", background: "var(--paper)", fontFamily: "var(--font-mono)", fontSize: 12 }}>
        {[
          { hash: "a3f2e91", date: "2026-04", tag: "feat(iot)",     title: "Plateforme monitoring industriel · v3.2",  meta: "ESP32 · Vue · TimescaleDB",  rng: "+12,4k −2,1k", role: "Architect", current: true },
          { hash: "7c1d4ab", date: "2025-11", tag: "arch(saas)",    title: "ERP SaaS multi-tenant · refonte",            meta: "Symfony · API Platform",      rng: "+38k −22k",   role: "Tech Lead" },
          { hash: "e02b550", date: "2025-06", tag: "perf(fpga)",    title: "Pipeline vision FPGA · 60 → 240 fps",        meta: "VHDL · Lattice · C++",        rng: "+4,8k −1,2k", role: "Architect" },
          { hash: "1f9c0d3", date: "2024-09", tag: "lead",          title: "CTO intérim · scale-up B2B",                 meta: "10 devs · 3 produits",        rng: "—",            role: "CTO i." },
          { hash: "2a5e7f8", date: "2024-02", tag: "embed",         title: "Firmware med-tech · IEC 62304",              meta: "STM32 · FreeRTOS · audit",    rng: "+22k −0",      role: "Embedded Lead" },
          { hash: "9b1c0e4", date: "2023-08", tag: "feat(saas)",    title: "Marketplace B2B · MVP → prod",                meta: "Vue · Symfony · K8s",         rng: "+47k −5k",     role: "Architect" },
          { hash: "44ab7d2", date: "2022-11", tag: "iot",           title: "Compteurs énergie connectés · 30k devices",  meta: "ESP32 · LoRaWAN",             rng: "+8k −1k",      role: "Lead" },
          { hash: "c5d9012", date: "2022-03", tag: "instrum",       title: "Banc de test automatisé",                    meta: "Python · Embedded C",         rng: "+5k −800",     role: "Architect" },
          { hash: "f0e1234", date: "2021-05", tag: "fpga",          title: "Décodeur protocole industriel",              meta: "VHDL · UART/SPI/CAN",         rng: "+2k −0",       role: "Embedded" },
          { hash: "3e8aabc", date: "2020-09", tag: "saas",          title: "Backoffice gestion d'événements",            meta: "Vue · Symfony",               rng: "+18k −3k",     role: "Lead" },
        ].map((p, i) => (
          <div key={p.hash} style={{
            display: "grid",
            gridTemplateColumns: "10px 80px 70px 110px 1fr 200px 80px",
            gap: 10,
            padding: "10px 16px",
            borderLeft: p.current ? "3px solid var(--accent)" : "3px solid transparent",
            background: p.current ? "var(--accent-soft)" : (i % 2 ? "transparent" : "var(--paper-2)"),
            alignItems: "center",
          }}>
            <span style={{ color: "var(--accent)" }}>●</span>
            <span style={{ color: "var(--accent)" }}>{p.hash}</span>
            <span style={{ color: "var(--ink-soft)" }}>{p.date}</span>
            <span style={{ color: "var(--ink-soft)" }}>{p.tag}</span>
            <span style={{ fontWeight: 500, color: "var(--ink)" }}>{p.title}</span>
            <span style={{ color: "var(--ink-soft)", fontSize: 11 }}>{p.meta}</span>
            <span style={{ textAlign: "right", color: "var(--ink-soft)", fontSize: 11 }}>{p.role}</span>
          </div>
        ))}
      </div>

      <Anno style={{ marginTop: 16 }}>Lecture chronologique fluide. Le profil = un repo qui évolue.</Anno>
    </div>
  </PageShell>
);

// Variant 2 — Spec sheet table
const ProjectsSpec = () => (
  <PageShell active="projects" label="B · SPEC SHEET" path="~/portfolio/projects" h={1400}>
    <div style={{ padding: "32px 56px" }}>
      <FrameTitle>PROJECTS — Variant B · Spec sheet</FrameTitle>
      <h2 className="hand-h" style={{ fontSize: 32, margin: "8px 0 0" }}>Projets — spec sheet</h2>
      <Underline w={120} />

      <div style={{ marginTop: 18, fontFamily: "var(--font-mono)", fontSize: 11 }} className="box">
        <div style={{
          display: "grid",
          gridTemplateColumns: "60px 1.6fr 100px 1.4fr 100px 80px 100px",
          padding: "10px 14px",
          background: "var(--ink)",
          color: "var(--paper)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          fontSize: 10,
        }}>
          <span>REF</span>
          <span>Projet</span>
          <span>Domaine</span>
          <span>Stack principale</span>
          <span>Période</span>
          <span>Échelle</span>
          <span>Rôle</span>
        </div>
        {[
          ["P-01", "Plateforme IoT industrielle",   "IoT/SaaS",  "ESP32, MQTT, TimescaleDB, Vue 3",   "2024–2026", "12k devices", "Architect"],
          ["P-02", "ERP SaaS multi-tenant",          "SaaS",      "Symfony, API Platform, PostgreSQL", "2023–2025", "200+ users",  "Tech Lead"],
          ["P-03", "Pipeline vision FPGA",           "FPGA",      "VHDL, Lattice, C++ host",           "2024–2025", "240 fps",     "Architect"],
          ["P-04", "CTO intérim — scale-up B2B",     "Lead",      "n/a — gouvernance technique",       "2024",      "10 devs",     "CTO i."],
          ["P-05", "Firmware med-tech",              "Embedded",  "STM32, FreeRTOS, IEC 62304",        "2023–2024", "Class IIa",   "Embedded Lead"],
          ["P-06", "Marketplace B2B",                "SaaS",      "Vue, Symfony, K8s, Stripe",         "2022–2023", "MVP → prod",  "Architect"],
          ["P-07", "Compteurs énergie connectés",    "IoT",       "ESP32, LoRaWAN, backend Symfony",   "2021–2022", "30k devices", "Lead"],
          ["P-08", "Banc de test automatisé",        "Instrum",   "Python, C, VISA, GPIB",             "2021–2022", "—",           "Architect"],
          ["P-09", "Décodeur protocole industriel",  "FPGA",      "VHDL, CAN/SPI/UART",                "2020–2021", "<1µs lat.",   "Embedded"],
          ["P-10", "Backoffice événements",          "SaaS",      "Vue 2, Symfony, MariaDB",           "2019–2020", "—",           "Lead"],
        ].map((r, i) => (
          <div key={r[0]} style={{
            display: "grid",
            gridTemplateColumns: "60px 1.6fr 100px 1.4fr 100px 80px 100px",
            padding: "10px 14px",
            borderTop: "1px solid var(--rule)",
            background: i % 2 ? "var(--paper)" : "var(--paper-2)",
            alignItems: "center",
          }}>
            <span style={{ color: "var(--accent)", fontWeight: 600 }}>{r[0]}</span>
            <span style={{ color: "var(--ink)", fontWeight: 500 }}>{r[1]}</span>
            <span><Chip>{r[2]}</Chip></span>
            <span style={{ color: "var(--ink-soft)" }}>{r[3]}</span>
            <span style={{ color: "var(--ink-soft)" }}>{r[4]}</span>
            <span style={{ color: "var(--ink)" }}>{r[5]}</span>
            <span style={{ color: "var(--ink-soft)" }}>{r[6]}</span>
          </div>
        ))}
      </div>

      <Anno style={{ marginTop: 18 }}>Format ingénieur : tout est tabulé, vérifiable, comparable.</Anno>

      <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
        <Chip variant="fill">tri par date ▾</Chip>
        <Chip>filtre domaine</Chip>
        <Chip>filtre rôle</Chip>
        <Chip>export .csv</Chip>
        <Chip>export .pdf</Chip>
      </div>
    </div>
  </PageShell>
);

// Variant 3 — Cartes alternées full-width
const ProjectsCards = () => (
  <PageShell active="projects" label="C · ALT CARDS" path="~/portfolio/projects" h={1900}>
    <div style={{ padding: "32px 56px" }}>
      <FrameTitle>PROJECTS — Variant C · Cartes alternées full-width</FrameTitle>
      <h2 className="hand-h" style={{ fontSize: 32, margin: "8px 0 0" }}>Projets — sélection</h2>
      <Underline w={120} />
      <p className="note" style={{ fontSize: 16, marginTop: 8, color: "var(--ink-2)" }}>5 projets phares · cliquer pour deep-dive</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 22, marginTop: 24 }}>
        {[
          { ref: "P-01", side: "L", name: "Plateforme IoT industrielle", domain: "IoT · SaaS", body: "12 000 capteurs ESP32 déployés en site industriel. Architecture full-stack : firmware OTA → MQTT → ingestion TimescaleDB → dashboard Vue 3 temps réel.", impact: ["12k devices en prod", "uptime 99.97%", "latence < 800 ms"], stack: ["ESP32", "MQTT", "TimescaleDB", "Vue 3", "Symfony", "Docker"] },
          { ref: "P-02", side: "R", name: "ERP SaaS multi-tenant", domain: "SaaS · Backend", body: "Refonte d'un ERP monolithique en architecture modulaire multi-tenant. 40 modules métier, 200+ utilisateurs simultanés, isolation forte par client.", impact: ["−68% temps réponse", "200+ users / day", "40 modules"], stack: ["Symfony", "API Platform", "PostgreSQL", "Redis", "Vue 3"] },
          { ref: "P-03", side: "L", name: "Pipeline vision FPGA", domain: "FPGA · Embedded", body: "Capture caméra haute fréquence + prétraitement FPGA + remontée temps réel vers host C++. Réduction 60 → 4 ms de latence end-to-end.", impact: ["240 fps", "latence 4 ms", "−93% CPU host"], stack: ["VHDL", "Lattice ECP5", "C++", "DMA"] },
          { ref: "P-04", side: "R", name: "Firmware médical (IEC 62304)", domain: "Embedded · Audit", body: "Firmware d'un dispositif médical de classe IIa, avec traçabilité spec → code → test → audit. Process IEC 62304 complet, équipe formée.", impact: ["audit OK", "Class IIa", "100% trac."], stack: ["STM32", "FreeRTOS", "C", "spec-driven"] },
          { ref: "P-05", side: "L", name: "CTO intérim · scale-up B2B", domain: "Lead · CTO", body: "6 mois d'intérim CTO pendant transition. Refonte de la roadmap technique, recrutement de 3 senior, mise en place de l'observabilité et du process release.", impact: ["10 devs", "3 produits", "release weekly"], stack: ["gouvernance", "archi", "hiring", "observabilité"] },
        ].map(p => (
          <div key={p.ref} className="box" style={{
            display: "grid",
            gridTemplateColumns: p.side === "L" ? "240px 1fr" : "1fr 240px",
            background: "var(--paper)",
            overflow: "hidden",
          }}>
            {p.side === "L" && (
              <div className="ph x-mark" style={{ borderRadius: 0, border: "none", borderRight: "1.5px solid var(--ink)", minHeight: 200, position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="mono" style={{ background: "var(--paper-2)", padding: "4px 10px", border: "1px solid var(--ink-soft)" }}>{p.ref} · capture</span>
                </div>
              </div>
            )}
            <div style={{ padding: "20px 26px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span className="mono" style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.08em" }}>{p.ref} · {p.domain}</span>
                <span className="mono" style={{ fontSize: 10, color: "var(--ink-soft)" }}>read deep-dive →</span>
              </div>
              <div className="hand-h" style={{ fontSize: 24, marginTop: 6 }}>{p.name}</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, marginTop: 8, color: "var(--ink-2)" }}>{p.body}</p>

              <div style={{ display: "flex", gap: 18, marginTop: 14, padding: "10px 0", borderTop: "1px dotted var(--rule)", borderBottom: "1px dotted var(--rule)" }}>
                {p.impact.map(im => (
                  <div key={im} style={{ display: "flex", flexDirection: "column" }}>
                    <span className="mono" style={{ fontSize: 9, color: "var(--ink-soft)", textTransform: "uppercase" }}>impact</span>
                    <span className="hand-h" style={{ fontSize: 16, color: "var(--accent)" }}>{im}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
                {p.stack.map(s => <Chip key={s}>{s}</Chip>)}
              </div>
            </div>
            {p.side === "R" && (
              <div className="ph x-mark" style={{ borderRadius: 0, border: "none", borderLeft: "1.5px solid var(--ink)", minHeight: 200, position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="mono" style={{ background: "var(--paper-2)", padding: "4px 10px", border: "1px solid var(--ink-soft)" }}>{p.ref} · capture</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </PageShell>
);

// ────────────────────────────────────────────────────────────────────
// PROJECT DETAIL — deep dive (problème → solution → impact + archi)
// ────────────────────────────────────────────────────────────────────
const ProjectDetail = () => (
  <PageShell active="projects" label="DEEP-DIVE" path="~/portfolio/projects/iot-platform" w={1100} h={2200}>
    <div style={{ padding: "28px 56px 60px" }}>
      <FrameTitle>PROJECT DETAIL — IoT industrial monitoring</FrameTitle>

      {/* Breadcrumb */}
      <div className="mono" style={{ fontSize: 11, color: "var(--ink-soft)", marginTop: 4 }}>
        projets / <span style={{ color: "var(--ink)" }}>P-01 · IoT industrial monitoring</span>
      </div>

      {/* Header */}
      <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 24, alignItems: "start" }}>
        <div>
          <span className="mono" style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.08em" }}>P-01 · IOT · 2024–2026</span>
          <h1 className="hand-h" style={{ fontSize: 38, lineHeight: 1.05, margin: "6px 0 8px" }}>
            Plateforme de monitoring industriel
          </h1>
          <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.55, maxWidth: 540 }}>
            Concevoir et industrialiser une plateforme IoT bout-en-bout pour superviser
            <span className="uline"> 12 000 capteurs en environnement industriel</span> — du firmware OTA jusqu'au dashboard temps réel.
          </p>
          <div style={{ display: "flex", gap: 6, marginTop: 14, flexWrap: "wrap" }}>
            {["ESP32", "FreeRTOS", "MQTT", "TimescaleDB", "Symfony", "API Platform", "Vue 3", "Docker", "Grafana"].map(s => <Chip key={s}>{s}</Chip>)}
          </div>
        </div>
        <div className="box" style={{ padding: 16, fontFamily: "var(--font-mono)", fontSize: 11.5, lineHeight: 1.9, background: "var(--paper-2)" }}>
          <div className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Méta</div>
          {[
            ["Client",      "Industriel · NDA"],
            ["Période",     "2024 — 2026 (en cours)"],
            ["Rôle",        "Architect + lead dev"],
            ["Équipe",      "1 archi (moi) + 3 devs"],
            ["Échelle",     "12 000 devices · 150 sites"],
            ["Budget",      "—"],
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", borderBottom: "1px dotted var(--ink-faint)", padding: "2px 0" }}>
              <span style={{ width: 80, color: "var(--ink-soft)" }}>{k}</span>
              <span>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Big hero placeholder */}
      <div className="ph x-mark" style={{ marginTop: 22, height: 280, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span className="mono" style={{ background: "var(--paper)", padding: "6px 12px", border: "1px solid var(--ink-soft)" }}>screenshot · dashboard ou photo terrain</span>
        </div>
      </div>

      <hr className="div-rule" />

      {/* Problème → Solution → Impact */}
      <SectionHeader num="01" title="Problème · Solution · Impact" sub="récit technique" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {[
          { tag: "PROBLÈME", color: "var(--paper-2)", title: "Visibilité zéro sur le parc", body: "Le client opérait des milliers de capteurs sans télémétrie unifiée. Pas d'OTA, debug terrain, données silotées par site, pas de SLA mesurable." },
          { tag: "SOLUTION", color: "var(--accent-soft)", title: "Plateforme bout-en-bout", body: "Firmware unifié + agent OTA, ingestion MQTT vers TimescaleDB, API Platform au-dessus, dashboard Vue 3 temps réel. Spec-driven, traçable." },
          { tag: "IMPACT",   color: "var(--paper-2)", title: "12k devices · 99.97% uptime", body: "Déploiement progressif sur 18 mois. SLA mesuré, debug terrain à distance. Réduction 92% des interventions sur site sur l'année." },
        ].map(c => (
          <div key={c.tag} className="box" style={{ padding: 16, background: c.color }}>
            <div className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", letterSpacing: "0.1em" }}>{c.tag}</div>
            <div className="hand-h" style={{ fontSize: 17, marginTop: 6 }}>{c.title}</div>
            <p style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.5, marginTop: 6 }}>{c.body}</p>
          </div>
        ))}
      </div>

      <hr className="div-rule" />

      {/* Architecture diagram */}
      <SectionHeader num="02" title="Architecture système" sub="schéma simplifié" />
      <div className="box" style={{ padding: 22, background: "var(--paper)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, alignItems: "stretch" }}>
          {[
            { title: "EDGE", color: "var(--paper-2)", items: ["ESP32 ×12k", "FreeRTOS", "OTA agent", "TLS / MQTT", "buffering local"] },
            { title: "INGESTION", color: "var(--accent-soft)", items: ["broker MQTT (Mosquitto)", "queue Redis", "worker ingestion", "TimescaleDB", "rétention 18 mois"] },
            { title: "APPLICATION", color: "var(--paper-2)", items: ["Symfony · API Platform", "Vue 3 SPA dashboard", "auth multi-tenant", "Grafana ops", "alerting"] },
          ].map(c => (
            <div key={c.title} className="box-thin" style={{ padding: 14, background: c.color }}>
              <div className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", letterSpacing: "0.1em" }}>{c.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
                {c.items.map(i => (
                  <div key={i} className="box-thin" style={{ padding: "5px 8px", fontFamily: "var(--font-mono)", fontSize: 11, background: "var(--paper)" }}>{i}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: 8, fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--ink-soft)" }}>
          <span>↗ MQTT</span>
          <span>↗ HTTPS</span>
        </div>
      </div>

      <hr className="div-rule" />

      {/* Decisions / techniques */}
      <SectionHeader num="03" title="Décisions techniques clés" sub="trade-offs" />
      <div className="box-thin" style={{ padding: 0 }}>
        {[
          ["TimescaleDB plutôt qu'InfluxDB", "Continuité PostgreSQL pour le reste de la stack, agrégats SQL natifs, pression opérationnelle réduite."],
          ["MQTT QoS 1 + buffering local",   "Trade-off : latence ↗ légère, mais zéro perte de mesure en cas de coupure réseau côté site."],
          ["OTA différentiel signé",          "Mises à jour rapides sur sites avec bande passante limitée. Signature ECDSA, rollback automatique."],
          ["Multi-tenant logique",            "Schéma PostgreSQL partagé + filtre tenant en row-level security. Simplifie l'opérationnel à 150 sites."],
          ["Spec-driven embedded",            "Chaque exigence → ID → code → test. Audit interne du client passé en 1 itération."],
        ].map(([t, b], i) => (
          <div key={t} style={{ display: "grid", gridTemplateColumns: "30px 1fr 2fr", padding: "12px 16px", borderTop: i === 0 ? "none" : "1px dotted var(--rule)", alignItems: "start", gap: 10 }}>
            <span className="mono" style={{ color: "var(--accent)", fontSize: 11, marginTop: 3 }}>{String(i + 1).padStart(2, "0")}</span>
            <span className="hand-h" style={{ fontSize: 15 }}>{t}</span>
            <span style={{ color: "var(--ink-2)", fontSize: 13.5, lineHeight: 1.5 }}>{b}</span>
          </div>
        ))}
      </div>

      <hr className="div-rule" />

      {/* Stack détaillée */}
      <SectionHeader num="04" title="Stack détaillée" sub="par couche" />
      <div className="box-thin" style={{ padding: 0, fontFamily: "var(--font-mono)", fontSize: 11.5 }}>
        {[
          ["FIRMWARE",  "C, FreeRTOS, ESP-IDF v5, mbedTLS, Unity (tests)"],
          ["BACKEND",   "PHP 8.3, Symfony 7, API Platform, Doctrine, Messenger, Redis"],
          ["DATA",      "PostgreSQL 16, TimescaleDB, hypertables, retention policies"],
          ["FRONTEND",  "Vue 3, Pinia, TypeScript, Vite, Tailwind, charting custom"],
          ["INFRA",     "Docker Compose (dev), Kubernetes (prod), GitLab CI, ArgoCD"],
          ["OBSERV.",   "Prometheus, Loki, Grafana, alertmanager, tracing OpenTelemetry"],
        ].map((r, i) => (
          <div key={r[0]} style={{ display: "grid", gridTemplateColumns: "120px 1fr", padding: "9px 16px", borderTop: i === 0 ? "none" : "1px solid var(--rule)" }}>
            <span style={{ color: "var(--accent)" }}>{r[0]}</span>
            <span style={{ color: "var(--ink-2)" }}>{r[1]}</span>
          </div>
        ))}
      </div>

      <hr className="div-rule" />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
        <Chip>← P-02 · ERP SaaS</Chip>
        <span className="note" style={{ fontSize: 14 }}>// fin du deep-dive</span>
        <Chip>P-03 · FPGA vision →</Chip>
      </div>
    </div>
  </PageShell>
);

Object.assign(window, { ProjectsLog, ProjectsSpec, ProjectsCards, ProjectDetail });
