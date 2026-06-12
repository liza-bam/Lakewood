# Lakewood Camps — Design System

**Lakewood Camps** is the oldest sporting camp in Maine (est. 1853), on the south arm of **Lower Richardson Lake** at the head of the **Rapid River**. Guests arrive by boat from the private dock — there is no road in. The offering: fly fishing (native brook trout, landlocked salmon), upland bird and moose hunting, lakeside cabins, lodge meals, and quiet days on the water. **$600/person/day, all-inclusive.**

**Brand thesis: a modern field club on a remote Maine lake.** Modern, clean, warm, outdoorsy, confident. NOT rustic cosplay — no woodcut, no sepia, no distressed badges, no parchment, no antlers-everywhere. Think contemporary boutique outdoor lodge with serious fishing credibility: bright lake photography, big confident display type, quiet luxury, relaxed guide-owned confidence. **The look is defined by the client moodboard (`uploads/ChatGPT Image Jun 11, 2026, 04_38_59 PM-8c7b792a.png`) — follow it exactly.**

## Navigation (site IA)

Home · The Camp · Fishing · Hunting · Wildlife · Plan Your Trip · Rates · **Reserve** (CTA)

---

## CONTENT FUNDAMENTALS

**Voice:** calm, declarative, confident. Short sentences. Periods as rhythm. No exclamation points, no emoji, ever. Understatement over hype — "quiet money, guide-owned confidence."

- Headlines are short declarative pairs: *"Arrive by boat. Stay for the river."* / *"Maine's original sporting camp, reached by boat."*
- Sentence case for headlines and body. ALL-CAPS reserved for small utility labels.
- Utility labels use slash-separated place facts: `LOWER RICHARDSON LAKE / RAPID RIVER`.
- Speak to "you"; the camp is "we" sparingly, more often just "Lakewood" or implied. Copy should feel like "your house in the woods," not a resort brochure.
- Specifics beat adjectives: name the lake, the river, the fish, the price. *"Fly fishing, hunting, cabins, meals, and quiet days on Lower Richardson Lake."*
- Price is stated plainly and early: *$600 / person / day, all-inclusive.*
- Buttons are 1–3 words: `Reserve` · `Plan Your Trip` · `Explore Fishing`.
- Never: "nestled", "escape the hustle", "luxury redefined", "adventure awaits".

## VISUAL FOUNDATIONS

**Color** — EXACTLY FOUR COLORS, per the moodboard: **salmon `#E8896B`**, **espresso `#483A26`**, **sand `#B3AB93`**, **off-white `#F4F1E8`** (plus white card stock). No other shades exist on the site — lighter/darker steps are transparency of these same colors. See `tokens/colors.css`.

- Espresso (`--espresso`) — headlines, body ink, dark panels, footer text.
- Salmon (`--salmon`) — the single accent: Reserve button, labels, links, arrows.
- Sand (`--sand`, `--sand-light`) and off-white (`--off-white`) — all light surfaces, borders, quiet chrome.
- **No orange, no amber, no blues, no greens.** Lake blue and pine green exist only inside photographs.

**Type** — per the moodboard, exactly: Display: **Bebas Neue** (condensed, ALL CAPS, one weight, run it big — hero 64–104px, sections 44–68px, +0.015em tracking, line-height \~0.95–1.02). Body/UI: **Inter** (17px body; 500 for nav/emphasis; 600 for labels/buttons). Signature treatment: small salmon uppercase label (13px, +0.14em tracking) above a big Bebas headline. Buttons are uppercase Inter 13px, +0.08em tracking. Testimonial quotes may use Georgia (`--font-quote`). Both brand fonts load from Google Fonts — no substitution needed.

**Photography is the whole brand.** Bright lake mornings, boat transfers, dock arrivals, fish in the net (not trophy-grip only), dogs in grass, cabins in daylight, real meals, golden-hour porches, real guides and weather. Warm, sunlit, natural color — no over-HDR, no dark interiors, no dead-animal-forward imagery on the homepage. Full-bleed heroes get a subtle espresso scrim (`--scrim-hero`) for text protection; photographic cards use a bottom scrim capsule (`--scrim-card`).

**Layout** — spacious, image-led. Full-bleed hero; large cream margins (`--space-24/32` section padding, 1280px container); split image/text sections; three large photographic cards for Fishing / Hunting / Wildlife; sticky minimal header (cream, blur, hairline shadow); Reserve CTA always visible but not loud. Max 1–2 background colors per page. Do not overcrowd — let the lake breathe.

**Surfaces & borders** — cards are white paper on the off-white page with a **thin 1px sand border** (`--border-line`) and at most a whisper of shadow (`--shadow-card`). **Every corner on the site is 3px** (`--radius-sm/button/card/image` all = 3px) — no other radius exists, never pill. Full-bleed imagery has no radius.

**Motion** — calm. Opacity/color fades at 160–240ms `--ease-out`; images zoom slowly (scale 1.0→1.03, 600ms) on card hover. No bounces, no parallax tricks.

- Hover: buttons darken one step (salmon→deeper salmon, espresso→near-black); links shift toward deeper salmon; arrow glyphs translate-x 4px.
- Press: buttons darken further, no shrink/transform.

**Transparency & blur** — only the sticky header (warm white at \~88% + `backdrop-filter: blur(8px)`). Nowhere else.

**Dark surfaces** — footer and closing bands use `--brown-800` espresso with cream text (the moodboard's "Make memories that last" panel); the espresso patterns (`assets/patterns/`) may sit at very low opacity (≤6%) as texture. That is the only sanctioned dark moment per page.

## ICONOGRAPHY

- **Default: no icons.** The brand prefers typography, labels, and arrows. "No icons unless extremely simple."
- Arrows are typographic: `→` (U+2192) in links and buttons. Slashes `/` separate label facts. That's the core glyph set.
- When an icon is unavoidable (Plan Your Trip checklists, amenity rows), use **Lucide** from CDN (`https://unpkg.com/lucide@latest`) at 1.5px stroke, 16–20px, in `--ink-600` or `--brown-700`. Keep to simple objects: boat, fish, bed, utensils, dog, map-pin. No filled icons, no emoji, no decorative SVG illustration. (The moodboard's amenity row — boat access, premium meals, etc. — is the sanctioned use case.)
- Brand marks live in `assets/logos/` (see below). The brook trout illustration inside the logo is the only illustration in the system — do not redraw or extract it for spot use.
- Patterns in `assets/patterns/` (fly-tying, pines, leather on espresso) are texture, not iconography; footer/dark-band use only, very low contrast.

## Assets index

- `assets/logos/` — `lockup-horizontal-color.jpg` (trout + 2-line wordmark, white bg) · `lockup-horizontal-color-cream.png` (same, cream bg) · `wordmark-oneline-espresso.jpg` (header use) · `lockup-stacked-espresso.jpg` (brown one-color) · `badge-crest-color.jpg` (arc crest; merch/secondary). All raster on white/cream — place on matching light surfaces only; on espresso use the typographic wordmark (see `SiteFooter`).
- `assets/patterns/` — espresso seamless textures: `flies-espresso.png`, `pines-espresso.png`, `leather-espresso.png`.
- `assets/photos/` — curated, renamed: heroes (`dock-boat-arrival`, `shoreline-misty-morning`, `cabins-lake-golden`, `firepit-dock-evening`), camp (`cabins-lawn-birch`, `porch-lamplight`, `cabin-beds`, `cabin-sitting-room`, `lodge-sitting-room`, `lodge-hearth`), fishing (`brook-trout-net`, `brook-trout-release`, `salmon-catch`, `guests-lake-trout`), hunting (`setter-upland`, `hunter-orange-field`, `guides-truck`), wildlife (`moose-bulls`, `moose-calf`).

## Index

- `styles.css` → imports `tokens/` (fonts, colors, typography, spacing, base).
- `guidelines/` — specimen cards rendered in the Design System tab.
- `components/core/` — `Button`, `ArrowLink`, `Eyebrow`
- `components/cards/` — `PhotoCard`, `ReviewCard`
- `components/forms/` — `Input`, `Select`, `Accordion`
- `components/navigation/` — `SiteHeader`, `SiteFooter`
- `ui_kits/website/` — marketing site kit: `index.html` (interactive: Home / Fishing / Rates), `HomePage.jsx`, `FishingPage.jsx`, `RatesPage.jsx`.
- `templates/website/` — "Marketing page" template offered to consuming projects (self-contained, with its own `img/`).
- `SKILL.md` — agent-facing usage instructions.

## Caveats

- **Fonts are exact** per the moodboard — Bebas Neue and Inter, loaded from Google Fonts (no local binaries shipped). Drop licensed files into `tokens/` with `@font-face` rules if offline use is ever needed.
- Logo files are raster with baked white/cream backgrounds — a transparent/one-color SVG or PNG export would unlock dark-surface lockups.
- No meal/food photography was provided; "The Stay" dining slot uses interior shots as placeholders.
