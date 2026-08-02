import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

// ────────────────────────────────────────────────────────────
// Shared "rich section" schema — the bounded set of block types
// used by the long-form deep-dive pages (project + role). Content
// authoring for phase 2 means adding entries to this array; no new
// block types should be needed for the currently designed pages.
// ────────────────────────────────────────────────────────────
const kpiItem = z.object({ k: z.string(), v: z.string(), s: z.string().optional() });
const numText = z.object({ n: z.string(), html: z.string() });

const sectionSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("prose"),
    heading: z.string(),
    num: z.string(), // "§ 01"
    paragraphs: z.array(z.object({ html: z.string(), lead: z.boolean().optional() })),
  }),
  z.object({
    type: z.literal("triptych"),
    items: z.array(z.object({ num: z.string(), title: z.string(), text: z.string() })),
  }),
  z.object({
    type: z.literal("codeblock"),
    head: z.string(),
    lines: z.array(z.string()), // trusted inline HTML per line
  }),
  z.object({
    type: z.literal("split2"),
    figTag: z.string(),
    panelK: z.string(),
    panelTitle: z.string(),
    items: z.array(z.string()), // trusted inline HTML
  }),
  z.object({
    type: z.literal("rowlist"),
    rows: z.array(z.object({ t: z.string(), d: z.string() })),
  }),
  z.object({
    type: z.literal("archi"),
    figLabel: z.string(),
    figRef: z.string(),
    stages: z.array(
      z.object({ lbl: z.string(), name: z.string(), items: z.array(z.string()) })
    ),
    arrows: z.array(z.string()),
  }),
  z.object({
    type: z.literal("pipeline"),
    figLabel: z.string(),
    sub: z.string(),
    stages: z.array(z.object({ num: z.string(), t: z.string(), d: z.string() })),
    axis: z.tuple([z.string(), z.string(), z.string()]),
  }),
  z.object({
    type: z.literal("kpisBig"),
    items: z.array(kpiItem),
  }),
  z.object({
    type: z.literal("vimatrix"),
    varTitle: z.string(),
    varItems: z.array(numText),
    invTitle: z.string(),
    invItems: z.array(numText),
  }),
  z.object({
    type: z.literal("constraints"),
    rows: z.array(
      z.object({ id: z.string(), head: z.string(), desc: z.string(), arbK: z.string(), arbV: z.string() })
    ),
  }),
  z.object({
    type: z.literal("decisions"),
    items: z.array(z.object({ num: z.string(), t: z.string(), d: z.string() })),
  }),
  z.object({
    type: z.literal("takeaway"),
    cards: z.array(z.object({ n: z.string(), t: z.string(), d: z.string() })),
  }),
  z.object({
    type: z.literal("pull"),
    body: z.string(),
    sig: z.string(),
  }),
]);

const metaCell = z.object({ k: z.string(), v: z.string(), accent: z.boolean().optional() });

const projects = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/projects" }),
  schema: z.object({
    ref: z.string(),
    title: z.string(),
    category: z.string(),
    tag: z.enum(["iot", "saas", "fpga", "embedded", "lead"]),
    period: z.string(),
    yearStart: z.number(),
    ongoing: z.boolean().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
    variant: z.enum(["default", "dark"]).default("default"),
    lede: z.string(),
    kpis: z.array(kpiItem).length(3).optional(),
    chips: z.array(z.string()),
    role: z.string(),
    figTag: z.string(),
    cornerLabel: z.string(),
    // Path relative to /src, e.g. "/src/assets/images/projets/p-01/photo.jpg" —
    // resolved at build time via import.meta.glob in ProjectFigure. Falls back
    // to the hatched PlaceholderFigure when absent.
    heroImage: z.string().optional(),
    deepDive: z
      .object({
        metaTop: z.string(),
        readTime: z.string(),
        metaStrip: z.array(metaCell).length(5),
        heroFigTag: z.string(),
        figCaptionRef: z.string(),
        figCaptionText: z.string(),
        sections: z.array(sectionSchema),
      })
      .optional(),
  }),
});

const roles = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/roles" }),
  schema: z.object({
    ref: z.string(),
    title: z.string(),
    client: z.string(),
    domain: z.string(),
    period: z.string(),
    years: z.string(),
    order: z.number(),
    lede: z.string(),
    metaStrip: z.array(metaCell).length(5),
    chips: z.array(z.string()),
    ledHero: z.boolean().default(false),
    heroImage: z.string().optional(),
    sections: z.array(sectionSchema).default([]),
  }),
});

const stack = defineCollection({
  // `id` and `ref` (e.g. "FPGA-03") are computed here from array position
  // within each family, not hand-maintained in the JSON — so adding,
  // removing, or reordering rows in stack.json never requires renumbering
  // anything. Rows only ever need: family, detail, since, maturity, usages,
  // and an optional `highlight` flag for the homepage preview.
  loader: file("./src/content/stack.json", {
    parser: (text) => {
      const rows = JSON.parse(text) as Array<Record<string, unknown>>;
      const counts: Record<string, number> = {};
      return rows.map((row) => {
        const family = row.family as string;
        counts[family] = (counts[family] ?? 0) + 1;
        const n = String(counts[family]).padStart(2, "0");
        return { ...row, id: `${family.toLowerCase()}-${n}`, ref: `${family}-${n}` };
      });
    },
  }),
  schema: z.object({
    id: z.string(),
    family: z.enum(["FPGA", "EMB", "PROTO", "ELEC", "CAO", "BCK", "FRT", "INF", "MTH"]),
    ref: z.string(),
    // Single named technology — no bundled "detail" strings anymore, so
    // maturity reflects one real thing instead of a category average.
    detail: z.string(),
    since: z.number(),
    maturity: z.number().min(0).max(5),
    // Concrete evidence instead of a self-reported "last used" date: where
    // this was actually used, linking to a project/role fiche when one
    // exists, else a plain "client · year" label.
    usages: z.array(z.object({ label: z.string(), href: z.string().optional() })),
    // Marks the small curated set shown on the homepage preview table —
    // independent of position, so reordering stack.json can't silently
    // swap out which technology appears there.
    highlight: z.boolean().default(false),
  }),
});

const timeline = defineCollection({
  loader: file("./src/content/timeline.json"),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    yearRange: z.string(),
    span: z.string(),
    current: z.boolean().default(false),
    roleLine: z.string(),
    title: z.string(),
    setting: z.string(),
    desc: z.string(),
    highlights: z.array(z.object({ n: z.string(), html: z.string() })),
    stack: z.array(z.string()),
    // Deep-dive fiches this period is documented in, when one exists.
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { projects, roles, stack, timeline };
