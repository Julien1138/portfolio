# Handoff : Portfolio ingénieur — Julien Aupart

## Aperçu
Site portfolio pour un ingénieur système senior (17 ans d'XP, FPGA / systèmes embarqués / plateformes cloud). Ton : sobre, technique, esthétique "datasheet / documentation d'ingénierie" — pas un portfolio créatif classique.

## À propos des fichiers de design
Les fichiers HTML de ce dossier sont des **références de design** produites comme prototypes statiques — ils montrent le look et le comportement voulu, ce ne sont **pas** du code de production à copier tel quel.

**Tâche** : recréer ces designs en **Astro**, avec des composants `.astro` propres, réutilisables entre les pages, et une gestion de layout partagée (rail de navigation, footer, thème). Utiliser les patterns Astro standards (layouts, content collections pour les projets si pertinent, îles pour toute interactivité comme le tweaks-panel de thème). Aucune stack existante à respecter — Astro est le choix déjà fait par l'utilisateur.

## Fidélité
**Haute fidélité (hifi)** pour les 6 pages listées ci-dessous : couleurs, typographie, espacements et layout sont finaux. Reproduire pixel-perfect.

Un dossier `wireframes/` est aussi inclus à titre de **contexte de structure uniquement** (exploration de mise en page antérieure, basse fidélité, esthétique "sketch" différente) — ignorer son style visuel, il a été remplacé par les 6 pages hi-fi.

## Pages / Écrans

1. **Accueil** — `Homepage Datasheet (hi-fi).html`
   Titre "Julien Aupart — Architecte système". Hero avec portrait SVG placeholder, tableau de caractéristiques ("specs") façon datasheet, section BOM (bill-of-materials) présentant la stack, grille de projets alternée (image / contenu), CTA de contact. Contient un panneau de tweaks (thème clair/sombre) en bas à droite — île interactive à recréer si le thème doit rester togglable.

2. **Projets — index** — `Projects Index (hi-fi).html`
   Liste des projets, format "git log" / spec sheet.

3. **Projet — deep dive** — `Project Deep Dive (hi-fi).html`
   Titre "P-01 · Plateforme de monitoring industriel". Page détail d'un projet : problème → solution → impact, KPIs chiffrés.

4. **Page Rôle** — `Role Page (hi-fi).html`
   Titre "R-02 · JCDecaux — Expert FPGA & électronique numérique". Page d'expertise transversale regroupant plusieurs projets sous un même rôle/client.

5. **À propos / Parcours** — `About Parcours (hi-fi).html`
   Titre "À propos · Parcours". Timeline de carrière 2009 → 2026, titre "Du transistor au cluster Kubernetes."

6. **Stack technique** — `Stack BOM (hi-fi).html`
   Titre "Stack technique — BOM". Présentation de la stack technique en table façon "Bill of Materials" (référence, catégorie, détail, années d'expérience).

7. **Contact** — `Contact (hi-fi).html`
   Titre "Jean Dupont — Contact". Page sobre, formulaire/coordonnées.

Pour le détail exact du layout de chaque page (grilles, espacements, contenu), lire directement le HTML/CSS de chaque fichier — les styles sont dans des blocs `<style>` en tête de chaque fichier, avec des noms de classes explicites (`.rail`, `.hero`, `.specs`, `.bom-intro`, `table.bom`, `.project`, `.cta`, etc.).

## Interactions & comportement
- Navigation : rail latéral fixe (`.rail`) à gauche sur desktop, avec liens numérotés vers chaque section/page, indicateur `.active` sur la page courante.
- Hover : les lignes de tableau BOM, les cartes projet et les liens CTA ont des transitions de couleur/fond au survol (voir règles `:hover` dans le CSS de chaque fichier).
- Thème clair/sombre : géré via `body[data-theme="dark"]` qui redéfinit les custom properties CSS (`--paper`, `--ink`, `--accent`, etc.). Un panneau de tweaks flottant permet de basculer — à réimplémenter en île Astro (ou simple toggle JS) si le theming doit rester dynamique en prod ; sinon fixer un seul thème par défaut.
- Pas d'animations complexes — transitions CSS simples uniquement.

## Design tokens
Définis en custom properties CSS `:root` en tête de chaque fichier hi-fi (voir `Homepage Datasheet (hi-fi).html` lignes ~12–45 pour la liste complète, dupliquée à l'identique dans les autres pages) :

**Couleurs (thème clair)**
- `--paper: #F5F1E8` (fond principal, papier crème)
- `--paper-2: #EDE7D7`, `--paper-3: #E5DEC9` (fonds secondaires)
- `--ink: #1A1814`, `--ink-2: #3D3A33` (texte)
- `--rule: #D4CDB8`, `--rule-2: #C9C0A6` (bordures/séparateurs)
- `--accent: #C45A2C` (orange terracotta — couleur de marque), `--accent-2: #A14722`, `--accent-soft: #F4E4D6`
- `--green: #5E7A4F` (accent secondaire, ponctuel)

**Couleurs (thème sombre)** — redéfinies dans `body[data-theme="dark"]` :
- `--paper: #16140F`, `--paper-2: #1E1B14`, `--paper-3: #26221A`
- `--ink: #EFE9D6`, `--ink-2: #CFC8B2`
- `--accent: #E68B4E`, `--accent-2: #F0A268`, `--accent-soft: #3A2718`

**Typographie** (Google Fonts, à importer dans le layout Astro)
- `--sans: "Inter Tight"` — titres, UI, labels (poids 400–800)
- `--serif: "Source Serif 4"` — texte de lecture, citations, kicker (italique) (poids 400–500, y compris italique)
- `--mono: "JetBrains Mono"` — labels techniques, tableaux, métadonnées (poids 400–600)
- Import : `https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;1,8..60,400&family=JetBrains+Mono:wght@400;500;600...`

**Échelle typographique** (extraits) : H1 hero `clamp(58px, 7vw, 96px)`, H2 section `34px`, corps lead `17px`/serif, labels mono `10–12.5px` avec `letter-spacing` large (0.06–0.18em, souvent uppercase).

**Rail de navigation** : largeur fixe `--rail: 204px`.

**Bordures** : très fines, 1–1.5px, quasi pas de `border-radius` (2–4px max) — esthétique "documentation technique", pas de coins arrondis prononcés.

**Ombres** : minimales, seulement sur éléments flottants (ex. panneau tweaks) : `0 8px 32px -8px rgba(0,0,0,0.18), 0 2px 6px -2px rgba(0,0,0,0.08)`.

## Assets
Aucune image bitmap — tout est en placeholders (hachures diagonales CSS `repeating-linear-gradient`) ou SVG inline simples (ex. portrait stylisé en cercle+silhouette dans le hero). Prévoir des slots d'image réels (photo, captures d'écran de projets) à la place des placeholders lors de l'implémentation.

## Captures d'écran
Dossier \`screenshots/\` — une capture par page (état réel actuel, thème clair) :
- \`01-homepage.png\`, \`02-projects-index.png\`, \`03-project-deep-dive.png\`, \`04-role-page.png\`, \`05-about-parcours.png\`, \`06-stack-bom.png\`, \`07-contact.png\`

## Fichiers inclus
- `Homepage Datasheet (hi-fi).html`
- `Projects Index (hi-fi).html`
- `Project Deep Dive (hi-fi).html`
- `Role Page (hi-fi).html`
- `About Parcours (hi-fi).html`
- `Stack BOM (hi-fi).html`
- `Contact (hi-fi).html`
- `wireframes/` — exploration de structure antérieure (contexte seulement, ne pas suivre visuellement)
