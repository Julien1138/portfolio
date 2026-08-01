// role-page.jsx — "Rôle" page (résume une expertise transversale à travers
// plusieurs projets dans une même entreprise). Texte éditorial + visuels
// graphiques marquants : timeline radar, diagramme de pipeline LED, matrice
// invariants/variabilité.

const PSR = ({ active, label, path, w = 1100, h = 3200, children }) => (
  <div className="wf" style={{ width: w, height: h, display: "flex", flexDirection: "column" }}>
    <TopNav />
    <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
      <SideRail active={active} />
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>{children}</div>
    </div>
    <StatusBar path={path} info={label} />
  </div>
);

const RH2 = ({ children, num }) => (
  <div style={{ marginTop: 32, marginBottom: 12 }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
      <span className="mono" style={{ fontSize: 14, color: "var(--ink-soft)" }}>##</span>
      <h2 className="hand-h" style={{ fontSize: 24, margin: 0 }}>{children}</h2>
      {num && <span className="mono" style={{ fontSize: 10, color: "var(--ink-faint)", marginLeft: "auto" }}>§ {num}</span>}
    </div>
    <hr style={{ border: "none", borderTop: "1px solid var(--rule)", marginTop: 10 }} />
  </div>
);

const RP = ({ children, lead }) => (
  <p style={{
    fontSize: lead ? 16.5 : 15,
    lineHeight: 1.7,
    color: "var(--ink-2)",
    margin: "0 0 12px",
    fontWeight: lead ? 500 : 400,
    textWrap: "pretty",
    maxWidth: 700,
  }}>{children}</p>
);

// Hero visual: stylized LED matrix made of dots with some "lit"
const LedMatrixHero = () => {
  const cols = 60, rows = 14;
  const lit = new Set();
  // text "FPGA · LED · 2014→2018" — encode by hand with simple positions
  const seed = (x, y) => ((x * 31 + y * 17) % 11 === 0) || ((x + y) % 23 === 0);
  return (
    <svg viewBox={`0 0 ${cols * 12} ${rows * 12}`} style={{ width: "100%", height: 168, display: "block" }}>
      <rect x="0" y="0" width={cols * 12} height={rows * 12} fill="var(--ink)" rx="6" />
      {Array.from({ length: rows }).map((_, y) =>
        Array.from({ length: cols }).map((_, x) => {
          const on = seed(x, y);
          // central band brighter
          const band = y >= 4 && y <= 9;
          return (
            <circle
              key={`${x}-${y}`}
              cx={x * 12 + 6}
              cy={y * 12 + 6}
              r={on ? (band ? 3.2 : 2.4) : 1.4}
              fill={on ? (band ? "var(--accent)" : "#e8a232") : "#3a3a3a"}
              opacity={on ? 0.95 : 0.45}
            />
          );
        })
      )}
    </svg>
  );
};

// Pipeline diagram (LED data path)
const LedPipeline = () => (
  <div className="box" style={{ padding: 16, background: "var(--paper)", marginTop: 14 }}>
    <div className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
      fig. 2 · pipeline FPGA — chaîne numérique typique
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 6, alignItems: "stretch" }}>
      {[
        ["SOURCE", "trame entrante", "HDMI / SPI"],
        ["DECODE", "découpage", "lignes / pixels"],
        ["BUFFER", "double buffer", "BRAM"],
        ["GAMMA", "correction γ", "LUT couleur"],
        ["TIMING", "horloges", "domaines clk"],
        ["DRIVE",  "scan matrice", "rows × cols"],
      ].map((s, i) => (
        <React.Fragment key={s[0]}>
          <div className="box-thin" style={{ padding: "8px 6px", textAlign: "center", background: "var(--paper-2)" }}>
            <div className="mono" style={{ fontSize: 9, color: "var(--accent)", letterSpacing: "0.1em" }}>{s[0]}</div>
            <div className="hand-h" style={{ fontSize: 13, marginTop: 3 }}>{s[1]}</div>
            <div className="note" style={{ fontSize: 11, color: "var(--ink-soft)" }}>{s[2]}</div>
          </div>
        </React.Fragment>
      ))}
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 6, marginTop: 4, fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--ink-soft)", textAlign: "center" }}>
      <span></span><span>→</span><span>→</span><span>→</span><span>→</span><span>→</span>
    </div>
  </div>
);

// Variability vs invariants — split visual
const VariabilityMatrix = () => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 }}>
    <div className="box" style={{ padding: 14, background: "var(--paper-2)" }}>
      <div className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", letterSpacing: "0.1em" }}>
        VARIABILITÉ DES PROJETS
      </div>
      <div className="hand-h" style={{ fontSize: 16, marginTop: 4 }}>ce qui change</div>
      <ul style={{ margin: "10px 0 0", paddingLeft: 18, fontSize: 14, color: "var(--ink-2)", lineHeight: 1.6 }}>
        <li>type de LED (mono / couleur)</li>
        <li>profondeur de couleur</li>
        <li>fréquence de rafraîchissement</li>
        <li>résolution / taille matrice</li>
        <li>générations de cartes</li>
        <li>contraintes de coût</li>
      </ul>
    </div>
    <div className="box" style={{ padding: 14, background: "var(--accent-soft)" }}>
      <div className="mono" style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.1em" }}>
        INVARIANTS ARCHITECTURAUX
      </div>
      <div className="hand-h" style={{ fontSize: 16, marginTop: 4 }}>ce qui ne change jamais</div>
      <ul style={{ margin: "10px 0 0", paddingLeft: 18, fontSize: 14, color: "var(--ink-2)", lineHeight: 1.6 }}>
        <li>stabilité d'affichage (zéro scintillement)</li>
        <li>précision du timing</li>
        <li>fiabilité terrain (24/7, années)</li>
        <li>frugalité ressources FPGA</li>
        <li>maintenabilité long terme</li>
        <li>reproductibilité industrielle</li>
      </ul>
    </div>
  </div>
);

const RolePage = () => (
  <PSR active="about" label="ROLE · JCDecaux" path="~/portfolio/roles/jcdecaux" h={3300}>
    <div style={{ padding: "32px 80px 60px", maxWidth: 920, margin: "0 auto" }}>
      <FrameTitle>ROLE PAGE — expertise transversale, plusieurs projets</FrameTitle>

      <div className="mono" style={{ fontSize: 11, color: "var(--ink-soft)", marginTop: 4 }}>
        rôles / <span style={{ color: "var(--ink)" }}>JCDecaux · Expert FPGA &amp; électronique numérique</span>
      </div>

      {/* Header */}
      <div style={{ marginTop: 18 }}>
        <span className="mono" style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.08em" }}>
          R-02 · ROLE · JCDecaux · ~4 ans
        </span>
        <h1 className="hand-h" style={{ fontSize: 42, lineHeight: 1.02, margin: "8px 0 10px" }}>
          Expert FPGA &amp; électronique numérique
        </h1>
        <div className="hand-h" style={{ fontSize: 19, fontWeight: 400, color: "var(--ink-2)", lineHeight: 1.45, maxWidth: 720 }}>
          Concevoir et faire évoluer les architectures FPGA qui pilotent les matrices LED
          d'affichage urbain — un travail de bas niveau dont la qualité se voit, littéralement,
          de loin.
        </div>

        {/* Meta strip */}
        <div className="box-thin" style={{ marginTop: 18, padding: "10px 14px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14, background: "var(--paper-2)", fontFamily: "var(--font-mono)", fontSize: 11.5 }}>
          {[
            ["Entreprise",  "JCDecaux"],
            ["Domaine",     "Affichage urbain LED"],
            ["Rôle",        "Expert FPGA · électro num."],
            ["Projets",     "Multiples · plusieurs gén."],
            ["Lecture",     "~ 5 min"],
          ].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 9, color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{k}</div>
              <div style={{ fontSize: 12, color: "var(--ink)", marginTop: 2 }}>{v}</div>
            </div>
          ))}
        </div>

        {/* Tag chips */}
        <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
          {["VHDL", "Verilog", "Lattice", "Xilinx", "pipelines", "horloges multi-domaines", "BRAM", "gamma LUT", "scan matriciel", "industrialisation"].map(s => <Chip key={s}>{s}</Chip>)}
        </div>
      </div>

      {/* HERO VISUAL — LED matrix */}
      <div style={{ marginTop: 22, position: "relative" }}>
        <LedMatrixHero />
        <div className="note" style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 6, textAlign: "center" }}>
          <span className="mono" style={{ fontSize: 10, color: "var(--accent)", marginRight: 6 }}>fig. 1</span>
          matrice LED stylisée — illustration du domaine
        </div>
      </div>

      {/* §1 — Contexte */}
      <RH2 num="01">Contexte</RH2>
      <RP lead>
        Chez JCDecaux, j'ai travaillé sur de nombreux projets de pilotage de matrices LED
        destinées à l'affichage urbain — visibles à grande échelle, déployées dans des
        environnements contraints. Monochromes ou couleur, de tailles et résolutions
        variables, ces systèmes avaient un point commun : la nécessité d'un fonctionnement
        parfaitement <span className="uline">fiable, synchronisé et maintenable sur le
        long terme</span>.
      </RP>
      <RP>
        L'affichage LED en milieu urbain est un domaine où les contraintes physiques et
        industrielles s'imposent fortement. Les produits sont exposés en continu, soumis
        aux conditions extérieures, et toute défaillance est immédiatement visible. Dans
        ce contexte, la programmation FPGA n'est pas un simple exercice de performance —
        c'est un élément central de la qualité perçue du produit final.
      </RP>

      {/* §2 — Le rôle */}
      <RH2 num="02">Le rôle — expert électronique numérique &amp; FPGA</RH2>
      <RP>
        Mon rôle consistait à concevoir et faire évoluer des architectures FPGA capables
        de piloter efficacement des matrices LED complexes. Il ne s'agissait pas seulement
        de « faire afficher des pixels », mais de maîtriser l'ensemble de la chaîne
        numérique : génération des trames, synchronisation temporelle, gestion des
        horloges, pipelines de données, et optimisation des ressources logiques.
      </RP>
      <RP>
        Chaque projet apportait ses spécificités, mais reposait sur des principes
        architecturaux communs. Cette répétition dans la diversité m'a permis de consolider
        une expertise profonde, orientée robustesse et reproductibilité.
      </RP>

      <LedPipeline />

      {/* §3 — Variabilité & invariants */}
      <RH2 num="03">Variabilité des projets, invariants architecturaux</RH2>
      <RP>
        Les projets couvraient aussi bien des écrans monochromes à forte lisibilité que
        des écrans couleur nécessitant une gestion fine des niveaux de luminosité, sur
        plusieurs générations de cartes électroniques et résolutions très variables.
      </RP>
      <RP>
        Malgré cette diversité, les problématiques fondamentales restaient identiques :
        garantir un affichage stable, sans scintillement, avec un timing précis, tout en
        restant dans des contraintes strictes de ressources FPGA et de coûts industriels.
        Cette constance des invariants m'a conduit à développer des architectures
        modulaires et réutilisables.
      </RP>

      <VariabilityMatrix />

      {/* §4 — Contraintes */}
      <RH2 num="04">Contraintes fortes &amp; arbitrages</RH2>
      <RP>
        Le pilotage de matrices LED impose des contraintes sévères, qui ont guidé
        l'ensemble de mes choix techniques. Voici les cinq qui revenaient à chaque projet,
        avec, en marge, l'arbitrage que j'ai fini par adopter par défaut.
      </RP>
      <div className="box-thin" style={{ padding: 0, marginTop: 8 }}>
        {[
          ["Timing & synchronisation",  "Précision des horloges et stabilité des pipelines.",        "Domaines d'horloge isolés, FIFO inter-domaine systématique."],
          ["Bande passante",            "Acheminement des données vidéo sans goulot d'étranglement.", "Double buffer + scan parallèle plutôt que mono-pipeline."],
          ["Ressources FPGA",           "Compromis qualité ↔ occupation logique permanent.",         "Réutilisation BRAM > LUT, fonctionnalités justifiées une à une."],
          ["Fiabilité terrain",         "Fonctionnement continu pendant des années, sans intervention.","Watchdog matériel, recovery autonome, état restauré."],
          ["Maintenabilité",            "Architecture compréhensible et évolutive pour les équipes futures.","Découpage fonctionnel clair, conventions de nommage strictes."],
        ].map(([t, b, c], i) => (
          <div key={t} style={{ display: "grid", gridTemplateColumns: "40px 1fr 1.2fr", padding: "12px 14px", borderTop: i === 0 ? "none" : "1px dotted var(--rule)", gap: 12, alignItems: "start" }}>
            <span className="hand-h" style={{ fontSize: 20, color: "var(--accent)" }}>§{i + 1}</span>
            <div>
              <div className="hand-h" style={{ fontSize: 15 }}>{t}</div>
              <div style={{ fontSize: 13.5, color: "var(--ink-2)", marginTop: 3 }}>{b}</div>
            </div>
            <div className="note" style={{ fontSize: 14, color: "var(--accent)", borderLeft: "2px solid var(--accent)", paddingLeft: 10 }}>
              <span className="mono" style={{ fontSize: 9, letterSpacing: "0.08em", display: "block", color: "var(--ink-soft)", marginBottom: 2 }}>arbitrage type</span>
              {c}
            </div>
          </div>
        ))}
      </div>

      {/* §5 — Décisions techniques récurrentes */}
      <RH2 num="05">Décisions techniques récurrentes</RH2>
      <RP>
        Sur ces projets, mes décisions portaient notamment sur la structuration des
        pipelines de traitement, la gestion fine des horloges et des domaines d'horloge,
        l'optimisation des flux pour limiter la consommation de ressources, la capacité
        à faire évoluer un design existant sans régression visible, et la clarté du
        découpage fonctionnel pour faciliter la maintenance.
      </RP>
      <RP>
        Ces choix étaient rarement spectaculaires, mais toujours guidés par une logique
        de <span className="uline">pérennité industrielle</span>.
      </RP>

      {/* §6 — Apports & héritage */}
      <RH2 num="06">Apports &amp; héritage dans mon parcours</RH2>
      <RP lead>
        Cette expérience chez JCDecaux a profondément structuré mon approche actuelle de
        l'ingénierie. Elle m'a appris trois choses qui orientent encore aujourd'hui mes
        décisions d'architecte.
      </RP>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 14 }}>
        {[
          ["Les contraintes matérielles",   "sont souvent des alliées pour concevoir des architectures simples et solides."],
          ["Un système visible par tous",   "impose un niveau d'exigence élevé — il n'y a pas de « presque OK »."],
          ["La rigueur dans le bas niveau", "conditionne la qualité de tout ce qui se construit par-dessus."],
        ].map(([t, b], i) => (
          <div key={t} className="box" style={{ padding: 14, background: "var(--paper)" }}>
            <div className="hand-h" style={{ fontSize: 28, color: "var(--accent)" }}>0{i + 1}</div>
            <div className="hand-h" style={{ fontSize: 15, marginTop: 4 }}>{t}</div>
            <div style={{ fontSize: 13.5, color: "var(--ink-2)", marginTop: 6, lineHeight: 1.55 }}>{b}</div>
          </div>
        ))}
      </div>
      <RP>
        Ce socle FPGA et électronique numérique explique en grande partie mon orientation
        ultérieure vers des rôles d'architecte et de responsable système : penser le
        système dans son ensemble, anticiper les évolutions, et concevoir des solutions
        fiables dans la durée.
      </RP>

      {/* §7 — Positionnement */}
      <RH2 num="07">Positionnement de la fiche dans le portfolio</RH2>
      <RP>
        Cette fiche ne vise pas à détailler chaque projet individuellement, mais à rendre
        lisible une expertise construite sur la répétition de projets concrets, industriels
        et contraints. Elle constitue un <b>socle technique fort</b>, sur lequel se sont
        appuyés mes rôles ultérieurs en architecture logicielle, systèmes embarqués et
        conception de produits complets.
      </RP>

      {/* Footer — relier aux autres rôles */}
      <div style={{ marginTop: 28, paddingTop: 16, borderTop: "1.5px solid var(--ink)" }}>
        <div className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>
          autres rôles
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
          <Chip>← R-01 · Junior firmware (2009→2011)</Chip>
          <Chip>R-03 · Senior medtech (2018→2021) →</Chip>
          <Chip>R-04 · Lead architect (2021→2024) →</Chip>
        </div>
      </div>
    </div>
  </PSR>
);

Object.assign(window, { RolePage });
