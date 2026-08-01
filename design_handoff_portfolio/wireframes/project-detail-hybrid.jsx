// project-detail-hybrid.jsx — Variant C: hybrid dense + narrative
// Single-column reading. Each section = short prose paragraphs (2-3) +
// one structured visual (chips/box/figure). Inspired by the ID-1 example:
// chapters with "##" feel, conversational tone, but with engineer's anchors.

const PSH = ({ active, label, path, w = 1100, h = 2800, children }) => (
  <div className="wf" style={{ width: w, height: h, display: "flex", flexDirection: "column" }}>
    <TopNav />
    <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
      <SideRail active={active} />
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>{children}</div>
    </div>
    <StatusBar path={path} info={label} />
  </div>
);

// "## " styled chapter title, like markdown
const MdH2 = ({ children, num }) => (
  <div style={{ marginTop: 32, marginBottom: 12 }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
      <span className="mono" style={{ fontSize: 14, color: "var(--ink-soft)" }}>##</span>
      <h2 className="hand-h" style={{ fontSize: 24, margin: 0, lineHeight: 1.2 }}>{children}</h2>
      {num && <span className="mono" style={{ fontSize: 10, color: "var(--ink-faint)", marginLeft: "auto" }}>§ {num}</span>}
    </div>
    <hr style={{ border: "none", borderTop: "1px solid var(--rule)", marginTop: 10 }} />
  </div>
);

const Para = ({ children, lead }) => (
  <p style={{
    fontSize: lead ? 16.5 : 15,
    lineHeight: 1.7,
    color: "var(--ink-2)",
    margin: "0 0 12px",
    fontWeight: lead ? 500 : 400,
    textWrap: "pretty",
    maxWidth: 680,
  }}>{children}</p>
);

const ProjectDetailHybrid = () => (
  <PSH active="projects" label="DEEP-DIVE · HYBRID" path="~/portfolio/projects/iot-platform" h={2750}>
    <div style={{ padding: "32px 80px 60px", maxWidth: 880, margin: "0 auto" }}>
      <FrameTitle>PROJECT DETAIL · C · Hybrid (récit + structure)</FrameTitle>

      {/* Breadcrumb */}
      <div className="mono" style={{ fontSize: 11, color: "var(--ink-soft)", marginTop: 4 }}>
        projets / <span style={{ color: "var(--ink)" }}>P-01 · IoT industrial monitoring</span>
      </div>

      {/* Header */}
      <div style={{ marginTop: 18 }}>
        <span className="mono" style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.08em" }}>
          P-01 · IOT · 2024–2026 · ID-1 (NDA)
        </span>
        <h1 className="hand-h" style={{ fontSize: 40, lineHeight: 1.05, margin: "8px 0 10px" }}>
          Plateforme de monitoring industriel
        </h1>
        <div className="hand-h" style={{ fontSize: 18, fontWeight: 400, color: "var(--ink-2)", lineHeight: 1.5, maxWidth: 640 }}>
          Une aventure technique complète, du capteur au dashboard — 12 000 boîtiers
          déployés, sans dépendance cloud externe.
        </div>

        {/* Compact meta strip */}
        <div className="box-thin" style={{ marginTop: 18, padding: "10px 14px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14, background: "var(--paper-2)", fontFamily: "var(--font-mono)", fontSize: 11.5 }}>
          {[
            ["Période",   "2024 → 2026"],
            ["Rôle",      "Architect + lead"],
            ["Équipe",    "1 archi + 3 devs"],
            ["Échelle",   "12k devices · 150 sites"],
            ["Lecture",   "~ 6 min"],
          ].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 9, color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{k}</div>
              <div style={{ fontSize: 12, color: "var(--ink)", marginTop: 2 }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Stack chips */}
        <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
          {["ESP32-S3", "C++ / ESP-IDF", "FreeRTOS", "MQTT", "Vue 3", "Symfony", "API Platform", "TimescaleDB", "Docker"].map(s => <Chip key={s}>{s}</Chip>)}
        </div>
      </div>

      {/* Hero figure */}
      <div className="ph x-mark" style={{ marginTop: 22, height: 240, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span className="mono" style={{ background: "var(--paper)", padding: "6px 12px", border: "1px solid var(--ink-soft)" }}>fig. 1 · boîtier sur site / dashboard</span>
        </div>
      </div>

      {/* §1 — Une aventure technique complète */}
      <MdH2 num="01">Une aventure technique complète</MdH2>
      <Para lead>
        Chez <b>ID-1</b>, on m'a confié une mission ambitieuse : concevoir un boîtier
        connecté capable de mesurer avec précision température et pression, tout en
        offrant une interface claire pour les techniciens sur le terrain — et un
        pilotage centralisé pour les équipes de maintenance.
      </Para>
      <Para>
        L'objectif : superviser intelligemment des équipements thermodynamiques
        répartis sur plusieurs sites, <span className="uline">sans dépendre d'un
        cloud externe</span>, avec un maximum d'autonomie.
      </Para>

      {/* §2 — De l'électronique à la mécanique */}
      <MdH2 num="02">De l'électronique à la mécanique</MdH2>
      <Para>
        Le projet a démarré par la conception des cartes électroniques, avec un soin
        particulier porté à la mesure analogique de précision. Les températures sont
        mesurées en <b>ratiométrique</b> pour garantir une stabilité maximale, même dans
        des environnements industriels exigeants.
      </Para>
      <Para>
        Parallèlement, j'ai modélisé le boîtier mécanique — d'abord en impression 3D
        pour valider l'ergonomie, puis en pièces injectées, avec un suivi rigoureux
        de la sous-traitance. Le sourcing des composants mécaniques faisait également
        partie du périmètre, pour assurer reproductibilité et robustesse.
      </Para>
      <div className="box-thin" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", marginTop: 14, padding: 0, fontFamily: "var(--font-mono)", fontSize: 11 }}>
        {[
          ["PCB",      "front-end analogique\nratiométrique 24-bit"],
          ["MÉCA",     "CAO → impression 3D\n→ injection plastique"],
          ["SOURCING", "BOM critique géré\nen direct fournisseurs"],
        ].map(([k, v], i) => (
          <div key={k} style={{ padding: "10px 14px", borderRight: i < 2 ? "1px solid var(--rule)" : "none" }}>
            <div style={{ color: "var(--accent)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em" }}>{k}</div>
            <div style={{ marginTop: 4, color: "var(--ink-2)", whiteSpace: "pre-line" }}>{v}</div>
          </div>
        ))}
      </div>

      {/* §3 — Firmware modulaire */}
      <MdH2 num="03">Un firmware modulaire, tourné vers la fiabilité</MdH2>
      <Para>
        Le cœur du système repose sur un <b>ESP32-S3</b>, programmé en C++ à l'aide
        de l'ESP-IDF. Le firmware gère l'acquisition des capteurs, la communication,
        la journalisation des événements, la mise à jour à distance, et bien sûr
        l'interface utilisateur locale.
      </Para>
      <Para>
        L'architecture logicielle est pensée pour durer : séparation claire des
        responsabilités, bonne testabilité, et fonctionnement assuré même en cas de
        coupure réseau ou de redémarrage inopiné. <span className="uline">Pas de
        magie — des contrats explicites entre couches.</span>
      </Para>
      <div className="box-thin" style={{ marginTop: 14, padding: "12px 14px", background: "var(--paper-2)", fontFamily: "var(--font-mono)", fontSize: 11.5, lineHeight: 1.7 }}>
        <div className="mono" style={{ fontSize: 9, color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>firmware/src/</div>
        <div>├── <b>hal/</b>        <span style={{ color: "var(--ink-soft)" }}>// drivers ratiométrique, ADC, I²C</span></div>
        <div>├── <b>core/</b>       <span style={{ color: "var(--ink-soft)" }}>// scheduler, journal, FSM</span></div>
        <div>├── <b>net/</b>        <span style={{ color: "var(--ink-soft)" }}>// MQTT, OTA signé, WebSocket local</span></div>
        <div>├── <b>ui/</b>         <span style={{ color: "var(--ink-soft)" }}>// serveur HTTP embarqué + assets Vue</span></div>
        <div>└── <b>tests/</b>      <span style={{ color: "var(--ink-soft)" }}>// Unity, mocks HAL, CI hôte</span></div>
      </div>

      {/* §4 — Interface locale */}
      <MdH2 num="04">Une interface locale, accessible et réactive</MdH2>
      <Para>
        Pour les techniciens sur le terrain, une <b>application web embarquée</b>
        directement dans le boîtier, en VueJS. Visualisation des mesures en temps
        réel, ajustement de la configuration, vérification de l'état du système —
        le tout sans connexion internet.
      </Para>
      <Para>
        L'approche : <span className="uline">pas de cloud obligatoire, pas de
        superflu</span>. Juste l'essentiel, rapide et clair, accessible depuis un
        portable connecté en Wi-Fi au boîtier.
      </Para>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 }}>
        <div className="ph x-mark" style={{ height: 160, position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="mono" style={{ background: "var(--paper)", padding: "4px 10px", border: "1px solid var(--ink-soft)", fontSize: 10 }}>fig. 2 · UI locale</span>
          </div>
        </div>
        <div className="box-thin" style={{ padding: 12, fontSize: 13, color: "var(--ink-2)", lineHeight: 1.55 }}>
          <div className="mono" style={{ fontSize: 9, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>Stack UI locale</div>
          <ul style={{ margin: 0, paddingLeft: 16 }}>
            <li>Vue 3 + Vite, build embarqué (~120 KB gz)</li>
            <li>WebSocket pour les mesures live</li>
            <li>API REST locale pour la config</li>
            <li>Aucune dépendance externe à l'exécution</li>
          </ul>
        </div>
      </div>

      {/* §5 — Supervision */}
      <MdH2 num="05">Une infrastructure simple et robuste pour la supervision</MdH2>
      <Para>
        Côté supervision centralisée, une <b>stack logicielle conteneurisée</b>,
        déployée sur les serveurs internes de l'entreprise. On-prem, par décision,
        pas par contrainte : la donnée est stratégique, et l'audit s'en trouve
        simplifié.
      </Para>
      <div className="box-thin" style={{ marginTop: 14, padding: 0 }}>
        {[
          ["Collecte & archivage",     "Mosquitto → worker → TimescaleDB · rétention 18 mois"],
          ["Configuration distante",   "Dashboard Vue → API Symfony → push MQTT signé vers boîtiers"],
          ["Visualisation & alertes",  "Vue 3 + charting custom · seuils par site · alerting email/SMS"],
          ["Déploiement",              "Docker Compose en prod, GitLab CI pour build/sign/release"],
        ].map(([t, d], i) => (
          <div key={t} style={{ display: "grid", gridTemplateColumns: "200px 1fr", padding: "10px 14px", borderTop: i === 0 ? "none" : "1px dotted var(--rule)", alignItems: "baseline" }}>
            <span className="hand-h" style={{ fontSize: 14 }}>{t}</span>
            <span style={{ fontSize: 13.5, color: "var(--ink-2)" }}>{d}</span>
          </div>
        ))}
      </div>

      {/* Architecture diagram */}
      <div className="box" style={{ marginTop: 18, padding: 16, background: "var(--paper)" }}>
        <div className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>fig. 3 · architecture cible</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {[
            { t: "EDGE",        items: ["ESP32-S3", "C++ / ESP-IDF", "OTA signé", "UI locale Vue"] },
            { t: "INGESTION",   items: ["Mosquitto MQTT", "worker PHP", "TimescaleDB", "Docker"] },
            { t: "APPLICATION", items: ["Symfony / API Platform", "Vue 3 dashboard", "alerting", "RBAC"] },
          ].map(c => (
            <div key={c.t} className="box-thin" style={{ padding: 10, background: "var(--paper-2)" }}>
              <div className="mono" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.1em" }}>{c.t}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, marginTop: 6 }}>
                {c.items.map(i => <div key={i} className="box-thin" style={{ padding: "4px 8px", fontFamily: "var(--font-mono)", fontSize: 10.5, background: "var(--paper)" }}>{i}</div>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--ink-soft)" }}>
          <span>↗ MQTT signé</span>
          <span>↗ HTTPS</span>
        </div>
      </div>

      {/* §6 — Impact mesuré */}
      <MdH2 num="06">Impact mesuré</MdH2>
      <Para>
        Après stabilisation, le système tient ses promesses. Les chiffres ci-dessous
        sont relevés sur la flotte en production, six mois après la dernière vague
        de déploiement.
      </Para>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginTop: 14 }}>
        {[
          ["12k",  "boîtiers en prod",   "150 sites"],
          ["99.97%", "uptime mesuré",    "obj. 99.9"],
          ["−92%",   "interventions",    "vs. 2024"],
          ["780ms",  "latence p95",      "obj. < 1s"],
        ].map(([n, l, s]) => (
          <div key={l} className="box" style={{ padding: 12, background: "var(--paper)" }}>
            <div className="hand-h" style={{ fontSize: 26, color: "var(--accent)", lineHeight: 1.1 }}>{n}</div>
            <div style={{ fontSize: 13, marginTop: 2 }}>{l}</div>
            <div className="note" style={{ fontSize: 12, color: "var(--ink-soft)" }}>{s}</div>
          </div>
        ))}
      </div>

      {/* §7 — Ce que j'ai aimé */}
      <MdH2 num="07">Ce que j'ai aimé dans ce projet</MdH2>
      <Para lead>
        Ce projet m'a permis de toucher à toutes les couches du système : de la
        résistance de tirage au WebSocket, en passant par le sourcing de connecteurs
        ou la modélisation CAO.
      </Para>
      <Para>
        J'y ai retrouvé ce que j'aime dans mon métier : <span className="uline">créer
        des objets utiles, les voir prendre vie, et construire des ponts entre le
        physique et le numérique.</span>
      </Para>

      {/* Footer nav */}
      <div style={{ marginTop: 28, paddingTop: 16, borderTop: "1.5px solid var(--ink)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Chip>← P-02 · ERP SaaS</Chip>
        <span className="note" style={{ fontSize: 14 }}>// fin du deep-dive · merci d'avoir lu</span>
        <Chip>P-03 · FPGA →</Chip>
      </div>
    </div>
  </PSH>
);

Object.assign(window, { ProjectDetailHybrid });
