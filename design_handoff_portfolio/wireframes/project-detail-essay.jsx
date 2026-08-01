// project-detail-essay.jsx — Variant B of the project deep-dive
// Long-form, editorial reading. Strong narrative, pull quotes, marginalia,
// chapters, code/diagram callouts INSIDE the prose flow.

const PSE = ({ active, label, path, w = 1100, h = 3400, children }) => (
  <div className="wf" style={{ width: w, height: h, display: "flex", flexDirection: "column" }}>
    <TopNav />
    <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
      <SideRail active={active} />
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>{children}</div>
    </div>
    <StatusBar path={path} info={label} />
  </div>
);

// Reusable block: a chapter heading with number
const Chapter = ({ n, title, kicker }) => (
  <div style={{ margin: "32px 0 16px" }}>
    <div className="mono" style={{ fontSize: 10, color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.15em" }}>
      Chapitre {n}{kicker ? " · " + kicker : ""}
    </div>
    <h2 className="hand-h" style={{ fontSize: 26, margin: "4px 0 0", lineHeight: 1.15 }}>{title}</h2>
    <Underline w={80} />
  </div>
);

// Marginalia: text in left/right column with a leader line
const Margin = ({ children, side = "right" }) => (
  <div style={{
    fontFamily: "var(--font-note)",
    fontSize: 16,
    color: "var(--accent)",
    lineHeight: 1.35,
    fontWeight: 500,
    padding: side === "right" ? "6px 0 6px 14px" : "6px 14px 6px 0",
    borderLeft: side === "right" ? "1.5px solid var(--accent)" : "none",
    borderRight: side === "left" ? "1.5px solid var(--accent)" : "none",
    textAlign: side === "left" ? "right" : "left",
  }}>{children}</div>
);

// Pull quote
const Pull = ({ children, attribution }) => (
  <div style={{ margin: "24px 0", padding: "0 24px", borderLeft: "3px solid var(--ink)" }}>
    <div className="hand-h" style={{ fontSize: 22, lineHeight: 1.3, fontWeight: 400 }}>
      « {children} »
    </div>
    {attribution && <div className="note" style={{ fontSize: 14, marginTop: 6, color: "var(--ink-soft)" }}>— {attribution}</div>}
  </div>
);

// Inline figure (placeholder + caption)
const Figure = ({ caption, ref: figRef, height = 200, kind = "schema" }) => (
  <figure style={{ margin: "20px 0" }}>
    <div className="ph x-mark" style={{ height, position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span className="mono" style={{ background: "var(--paper)", padding: "4px 10px", border: "1px solid var(--ink-soft)", fontSize: 10 }}>{figRef} · {kind}</span>
      </div>
    </div>
    <figcaption className="note" style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 6, paddingLeft: 4 }}>
      <span className="mono" style={{ fontSize: 10, color: "var(--accent)", marginRight: 6 }}>{figRef}</span>
      {caption}
    </figcaption>
  </figure>
);

// Inline code callout
const CodeNote = ({ title, lines }) => (
  <div className="box-thin" style={{ padding: "10px 14px", margin: "16px 0", background: "var(--paper-2)", fontFamily: "var(--font-mono)", fontSize: 11.5, lineHeight: 1.6 }}>
    <div className="mono" style={{ fontSize: 9, color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>{title}</div>
    {lines.map((l, i) => <div key={i} style={{ color: l.startsWith("//") ? "var(--ink-soft)" : "var(--ink)" }}>{l}</div>)}
  </div>
);

// Body paragraph (slightly larger, more readable)
const P = ({ children, lead }) => (
  <p style={{
    fontSize: lead ? 17 : 15.5,
    lineHeight: 1.7,
    color: "var(--ink-2)",
    margin: "0 0 14px",
    fontWeight: lead ? 500 : 400,
    textWrap: "pretty",
  }}>{children}</p>
);

const ProjectDetailEssay = () => (
  <PSE active="projects" label="DEEP-DIVE · ESSAY" path="~/portfolio/projects/iot-platform" h={3500}>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 700px 1fr", gap: 0, padding: "32px 0 60px", maxWidth: "100%" }}>
      {/* Left margin column — chapter rail / marginalia anchors */}
      <div style={{ paddingLeft: 40, paddingRight: 20, position: "relative" }}>
        <FrameTitle>PROJECT DETAIL · B</FrameTitle>
        <div style={{ position: "sticky", top: 32, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-soft)", textTransform: "uppercase", letterSpacing: "0.1em", lineHeight: 2 }}>
          <div className="mono" style={{ marginBottom: 12, color: "var(--ink)", fontSize: 11 }}>SOMMAIRE</div>
          <div style={{ color: "var(--accent)" }}>① Le contexte</div>
          <div>② Le problème</div>
          <div>③ Les contraintes</div>
          <div>④ L'architecture</div>
          <div>⑤ Décisions clés</div>
          <div>⑥ Mise en prod</div>
          <div>⑦ Bilan · ce que je referais</div>
        </div>
      </div>

      {/* Center column — main reading */}
      <div style={{ minWidth: 0 }}>
        {/* Breadcrumb */}
        <div className="mono" style={{ fontSize: 11, color: "var(--ink-soft)", marginTop: 4 }}>
          projets / <span style={{ color: "var(--ink)" }}>P-01 · IoT industrial monitoring</span>
        </div>

        {/* Header */}
        <div style={{ marginTop: 18 }}>
          <span className="mono" style={{ fontSize: 11, color: "var(--accent)", letterSpacing: "0.08em" }}>P-01 · IOT · 2024–2026</span>
          <h1 className="hand-h" style={{ fontSize: 42, lineHeight: 1.02, margin: "8px 0 12px" }}>
            Plateforme de monitoring industriel
          </h1>
          <div className="hand-h" style={{ fontSize: 19, fontWeight: 400, color: "var(--ink-2)", lineHeight: 1.45, fontFamily: "var(--font-hand)" }}>
            Comment on porte 12 000 capteurs en production sans réveiller les équipes terrain à 3h du matin —
            récit d'une plateforme IoT bout-en-bout, du firmware OTA au dashboard.
          </div>

          <div style={{ display: "flex", gap: 18, marginTop: 18, paddingTop: 14, borderTop: "1.5px solid var(--ink)", borderBottom: "1px solid var(--rule)", paddingBottom: 12 }}>
            <div><span className="mono" style={{ fontSize: 9, color: "var(--ink-soft)", textTransform: "uppercase" }}>Lecture</span><div style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>~ 14 min</div></div>
            <div><span className="mono" style={{ fontSize: 9, color: "var(--ink-soft)", textTransform: "uppercase" }}>Période</span><div style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>2024 → 2026</div></div>
            <div><span className="mono" style={{ fontSize: 9, color: "var(--ink-soft)", textTransform: "uppercase" }}>Rôle</span><div style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>Architect</div></div>
            <div><span className="mono" style={{ fontSize: 9, color: "var(--ink-soft)", textTransform: "uppercase" }}>Échelle</span><div style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>12k devices</div></div>
            <div style={{ flex: 1 }} />
            <div className="mono" style={{ fontSize: 11, color: "var(--ink-soft)", alignSelf: "end" }}>maj. 04/2026</div>
          </div>
        </div>

        {/* CHAPTER 1 — context */}
        <Chapter n="1" kicker="Le contexte" title="Un parc de capteurs sans visibilité." />
        <P lead>
          Quand on m'a appelé fin 2023, le client opérait déjà plusieurs milliers de capteurs déployés
          sur une centaine de sites industriels. Sur le papier, le système fonctionnait. Sur le terrain,
          chaque incident demandait un déplacement, chaque mise à jour un rendez-vous, chaque rapport
          un export Excel artisanal.
        </P>
        <P>
          La direction technique était lucide : leur firmware historique avait fait son temps, mais
          la complexité ne tenait pas dans le firmware — elle tenait dans tout ce qu'il y avait
          autour. Pas d'OTA fiable, pas de télémétrie unifiée, pas de SLA mesurable. La donnée
          existait quelque part, mais personne ne pouvait répondre à la question simple :
          <em> « combien de capteurs sont up, là, maintenant ? »</em>.
        </P>
        <P>
          Mon mandat était large : reprendre l'architecture à la racine, du silicium au navigateur.
          Pas une refonte cosmétique — un système nouveau, conçu pour scaler à dix fois la flotte
          actuelle, et pour qu'une astreinte de nuit reste l'exception.
        </P>

        <Figure figRef="fig. 1" caption="État initial — silos par site, données dispersées, OTA manuel par USB." height={180} kind="diagramme" />

        {/* CHAPTER 2 — problem */}
        <Chapter n="2" kicker="Le problème" title="Trois ruptures à absorber en même temps." />
        <P>
          Refondre une plateforme IoT, c'est rarement un seul problème : c'est trois problèmes
          superposés, chacun avec son rythme et ses contraintes. Identifier ces ruptures avant
          d'écrire la première ligne de code a probablement été la décision la plus structurante
          du projet.
        </P>

        <CodeNote title="Les trois ruptures · note d'archi du sprint 0" lines={[
          "// 1. Rupture firmware",
          "//    legacy bare-metal C → FreeRTOS, OTA signé, configuration distante",
          "// 2. Rupture ingestion",
          "//    push HTTP par batch → MQTT QoS 1 + buffering local + dedup",
          "// 3. Rupture exploitation",
          "//    rapports Excel → SLA mesuré, alerting, debug terrain à distance",
        ]} />

        <P>
          Chacune avait son propre cycle de risque. Le firmware se déploie lentement, prudemment,
          avec des fallbacks. L'ingestion peut être révisée plus librement, mais doit absorber
          la cohabitation ancien/nouveau pendant 18 mois. L'exploitation, elle, doit livrer
          tôt et souvent — c'est ce que les équipes du client attendaient pour valider le projet
          en interne.
        </P>

        <Pull attribution="note de cadrage, janvier 2024">
          Ne pas livrer la plateforme parfaite. Livrer la plateforme qui permet d'arrêter les
          déplacements terrain — et qui laisse la place de devenir parfaite après.
        </Pull>

        {/* CHAPTER 3 — constraints */}
        <Chapter n="3" kicker="Les contraintes" title="Bande passante, énergie, et un parc qu'on ne réinitialise pas." />
        <P>
          L'environnement physique imposait deux contraintes qu'on oublie facilement quand on
          conçoit en chambre. D'abord, certains sites n'ont qu'une connectivité GSM faible, par
          rafales — la plateforme devait survivre à des coupures de plusieurs heures sans perdre
          une seule mesure. Ensuite, le parc existant ne pouvait pas être reflashé en bloc :
          la bascule devait être progressive, capteur par capteur, sur 18 mois, en cohabitation
          avec l'ancien protocole.
        </P>
        <P>
          C'est cette deuxième contrainte qui a tué l'option « grand soir ». On ne refait pas
          la plomberie d'une usine en un week-end. La plateforme devait parler simultanément
          deux dialectes — l'ancien sur HTTP batch, le nouveau sur MQTT temps réel — et offrir
          une vue unifiée par-dessus les deux. Cohabitation, pas migration.
        </P>

        <Figure figRef="fig. 2" caption="Cohabitation des deux protocoles pendant la phase de bascule (18 mois)." height={170} kind="schéma" />

        {/* CHAPTER 4 — architecture */}
        <Chapter n="4" kicker="L'architecture" title="Trois étages, frontières nettes, contrats explicites." />
        <P>
          L'architecture finale tient en trois étages : <b>edge</b>, <b>ingestion</b>, <b>application</b>.
          Rien de spectaculaire, rien d'exotique — l'audace est ailleurs. Elle est dans la précision
          des contrats à chaque frontière, et dans le refus systématique de la magie.
        </P>
        <P>
          Côté edge, chaque ESP32 embarque un firmware unifié, signé, capable d'OTA différentielle
          et de buffering local sur mémoire flash. Le firmware ne sait rien du backend ; il parle
          MQTT à un broker, point. Cette discipline — un device ne dépend que d'un broker — a
          rendu possible le rollback indépendant de chaque étage.
        </P>

        <Figure figRef="fig. 3" caption="Architecture cible — 3 étages, contrats MQTT et HTTPS aux frontières." height={220} kind="archi" />

        <P>
          L'étage d'ingestion est volontairement minimaliste : un broker Mosquitto, une queue
          Redis, un worker PHP qui valide et insère dans TimescaleDB. Pas de Kafka, pas de
          Spark, pas de pipeline ML. La frugalité ici est une décision politique : moins de
          composants, moins de pannes, moins d'astreintes.
        </P>
        <P>
          L'étage applicatif est un Symfony classique avec API Platform, exposé à un dashboard
          Vue 3. La fonctionnalité métier est confinée à cet étage. Toute la complexité temps
          réel est absorbée plus bas — l'application, elle, ne fait que lire des séries
          temporelles bien indexées.
        </P>

        <Pull attribution="principe d'archi">
          Si la même donnée traverse deux étages dans deux formats différents, c'est qu'il
          manque un contrat — pas qu'il manque un microservice.
        </Pull>

        {/* CHAPTER 5 — decisions */}
        <Chapter n="5" kicker="Décisions clés" title="Cinq arbitrages et leurs raisons." />
        <P>
          Une architecture, c'est une suite de décisions <em>justifiables</em> dans le contexte
          où elles ont été prises. Voici les cinq qui ont le plus pesé sur ce projet — pas
          forcément les plus visibles, mais celles qui m'ont coûté le plus de réflexion et
          qui ont eu le plus d'effet sur la suite.
        </P>

        <div className="box-thin" style={{ padding: 0, marginTop: 8 }}>
          {[
            ["TimescaleDB plutôt qu'InfluxDB",
             "Continuité avec le PostgreSQL déjà présent côté ERP. Les agrégats SQL natifs ont permis aux équipes data du client de reprendre la main sans formation. Coût : indexation à soigner."],
            ["MQTT QoS 1 + buffering local",
             "Trade-off pénalisant en latence (quelques centaines de ms en plus), mais zéro perte de mesure même en coupure GSM longue. Pour un système de comptage, cette propriété vaut beaucoup plus que la latence."],
            ["OTA différentielle signée ECDSA",
             "Sans diff, les sites en GSM faible étaient inutilisables. La signature ajoute 2 KB par binaire mais a permis de passer l'audit sécurité du client en une itération."],
            ["Multi-tenant logique (RLS PostgreSQL)",
             "150 sites, un seul cluster. Row-level security plutôt que schéma par site : opération simplifiée, snapshots cohérents, mais discipline forte sur les requêtes."],
            ["Spec-driven embedded",
             "Chaque exigence porte un identifiant, qui suit la chaîne spec → code → test. Coût initial élevé (rythme du sprint 0 divisé par deux) ; gain durable (audit interne du client passé en première itération)."],
          ].map(([t, b], i) => (
            <div key={t} style={{ display: "grid", gridTemplateColumns: "40px 1fr", padding: "14px 16px", borderTop: i === 0 ? "none" : "1px dotted var(--rule)", gap: 12 }}>
              <div className="hand-h" style={{ fontSize: 22, color: "var(--accent)" }}>§{i + 1}</div>
              <div>
                <div className="hand-h" style={{ fontSize: 16, marginBottom: 4 }}>{t}</div>
                <div style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55 }}>{b}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CHAPTER 6 — production */}
        <Chapter n="6" kicker="Mise en prod" title="Le déploiement, ou l'art d'avoir tort lentement." />
        <P>
          La mise en production s'est faite par vagues, sur 14 mois. Pas une bascule — une
          érosion progressive de l'ancienne plateforme. Chaque vague portait sur un type de
          site (taille, criticité, qualité réseau). On a appris à chaque vague : la première
          a livré 200 capteurs, la dernière en a livré 4 000 d'un coup.
        </P>
        <P>
          La méthode tient en trois règles, écrites au mur du sprint 0 et jamais transgressées :
          rollback testé avant chaque vague, observabilité avant fonctionnalité, et un humain
          de garde sur chaque vague critique. Ce n'est pas du process — c'est de l'humilité
          opérationnelle.
        </P>

        <CodeNote title="Métriques après stabilisation · avril 2026" lines={[
          "uptime         99.97 %  (objectif 99.9)",
          "latence p95     780 ms  (objectif < 1 s)",
          "OTA success    99.4 %   (rollback auto sur les 0.6 %)",
          "interventions  −92 %    (vs. 2024)",
          "incidents NUIT −96 %    (vs. 2024)",
        ]} />

        <P>
          Le chiffre dont je suis le plus fier n'est pas l'uptime, c'est la dernière ligne.
          Diminuer de 96 % les incidents nocturnes, c'est rendre des nuits aux équipes du
          client. C'est ce que je voulais dire au début par <em>« ne pas réveiller à 3h
          du matin »</em> — et c'est, à la fin, le seul indicateur qui compte vraiment.
        </P>

        {/* CHAPTER 7 — retrospective */}
        <Chapter n="7" kicker="Bilan" title="Ce que je referais — et ce que je ne referais pas." />
        <P lead>
          Deux ans plus tard, je regarde l'archive Git avec la sérénité de ceux qui ont fini
          le marathon. Il y a des choses que je signerais à nouveau les yeux fermés. D'autres,
          un peu moins.
        </P>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 12 }}>
          <div className="box" style={{ padding: 14, background: "var(--paper)" }}>
            <div className="mono" style={{ fontSize: 10, color: "var(--green)", letterSpacing: "0.08em" }}>JE REFERAIS</div>
            <ul style={{ marginTop: 6, paddingLeft: 18, fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55 }}>
              <li>Le spec-driven embedded — gain énorme à l'audit.</li>
              <li>TimescaleDB sur le même cluster que la donnée métier.</li>
              <li>L'OTA différentielle signée dès le sprint 1.</li>
              <li>Le rollback testé <em>avant</em> chaque vague.</li>
              <li>Le refus du Kafka. Toujours.</li>
            </ul>
          </div>
          <div className="box" style={{ padding: 14, background: "var(--paper)" }}>
            <div className="mono" style={{ fontSize: 10, color: "var(--red)", letterSpacing: "0.08em" }}>JE NE REFERAIS PAS</div>
            <ul style={{ marginTop: 6, paddingLeft: 18, fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55 }}>
              <li>Avoir attendu le mois 6 pour mettre Grafana en prod.</li>
              <li>Le multi-tenant RLS sans helper Doctrine custom dès J1.</li>
              <li>Mutualiser les tests d'intégration firmware et backend.</li>
              <li>Sous-estimer le coût d'écrire les ADR au fil de l'eau.</li>
            </ul>
          </div>
        </div>

        <Pull attribution="ce que dirait le moi de 2024 au moi de 2026">
          La spec, l'observabilité et l'humilité opérationnelle, dans cet ordre.
          Le reste, c'est de la cuisine.
        </Pull>

        <div style={{ marginTop: 30, paddingTop: 18, borderTop: "1.5px solid var(--ink)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Chip>← P-02 · ERP SaaS</Chip>
          <span className="note" style={{ fontSize: 14 }}>// fin · merci d'avoir lu jusqu'ici</span>
          <Chip>P-03 · FPGA →</Chip>
        </div>
      </div>

      {/* Right margin column — marginalia / pinned notes */}
      <div style={{ paddingRight: 40, paddingLeft: 20, position: "relative" }}>
        <div style={{ position: "sticky", top: 200, display: "flex", flexDirection: "column", gap: 28 }}>
          <Margin>Le projet vit toujours. Les chiffres bougent. Cette page est versionnée, comme le code.</Margin>
          <Margin>« Cohabitation, pas migration » — c'est devenu une règle pour tous mes projets brownfield depuis.</Margin>
          <Margin>Frugalité opérationnelle = liberté future. À retenir.</Margin>
          <Margin>L'ADR de cette décision est en annexe (a-04).</Margin>
          <Margin>Ce paragraphe a été écrit après deux nuits d'astreinte évitées.</Margin>
        </div>
      </div>
    </div>
  </PSE>
);

Object.assign(window, { ProjectDetailEssay });
