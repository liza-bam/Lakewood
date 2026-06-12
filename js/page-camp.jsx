// js/page-camp.jsx
(function () {
  const NS = window.LakewoodCampsDesignSystem_fbbd23;
  const { Eyebrow, ArrowLink, Button } = NS;
  const { Reveal, Section, SectionHead, PageHero, SplitSection, ClosingBand } = window;

  function Stat({ k, v }) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', borderTop: '2px solid var(--border-line)', paddingTop: 'var(--space-4)' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', color: 'var(--text-heading)', letterSpacing: 'var(--tracking-display)', lineHeight: 1 }}>{v}</span>
        <span style={{ fontSize: 'var(--text-label)', fontWeight: 'var(--weight-semibold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)', color: 'var(--text-secondary)' }}>{k}</span>
      </div>
    );
  }

  function CampPage({ go, onReserve }) {
    return (
      <React.Fragment>
        <PageHero
          image="assets/photos/camp-cabins-lakeside.png"
          eyebrow={['The camp', 'Lower Richardson Lake / Rapid River']}
          title="Your home in Maine."
          sub="A way of life that harkens back to a slower time — lakeside cabins, lodge meals, and quiet days on the water."
        />

        <SplitSection
          image="assets/photos/shoreline-misty-morning.jpg"
          imageAlt="Misty morning on Lower Richardson Lake"
          side="right"
          eyebrow={['Our story', 'Since 1853']}
          title="Maine's oldest original sporting camp."
        >
          <p>Lakewood Camps sits on the untouched shores of Lower Richardson Lake at the headwaters of the Rapid River, Middle Dam, in the Rangeley Lakes Region of Western Maine. Since 1853, generations of outdoor enthusiasts have returned year after year for the fishing, the hunting, and a way of life that harkens back to a slower time.</p>
        </SplitSection>

        {/* GETTING HERE + SEASON */}
        <section data-screen-label="Getting here" style={{ background: 'var(--surface-block)' }}>
          <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-12) var(--container-pad)', display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 'var(--space-20)', alignItems: 'start' }}>
            <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <Eyebrow>Getting here</Eyebrow>
              <h2 style={{ fontSize: 'var(--text-display-2)', maxWidth: '16ch' }}>Arrive by boat.</h2>
              <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-secondary)', maxWidth: '52ch', lineHeight: 'var(--leading-body)' }}>The road in is a 16-mile logging road, often impassable &mdash; so your adventure begins with a scenic boat ride from the designated parking area at the south arm. The transfer takes about 10&ndash;20 minutes depending on weather. Once you arrive, your cabin becomes your second home for the length of your stay.</p>
              <ArrowLink onClick={() => go('plan')}>Plan your trip</ArrowLink>
            </Reveal>
            <Reveal delay={80} style={{ background: 'var(--surface-card)', border: '2px solid var(--border-line)', borderRadius: 'var(--radius-card)', padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              <Eyebrow color="ember">The season</Eyebrow>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                <Stat v="173rd" k="Season at the head of the river" />
                <Stat v="May 17, 2026" k="Opening day" />
                <Stat v="June 30, 2026" k="Season closes" />
              </div>
              <p style={{ fontSize: 'var(--text-small)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-body)' }}>Availability is limited &mdash; book early.</p>
              <Button variant="accent" arrow onClick={onReserve}>Reserve</Button>
            </Reveal>
          </div>
        </section>

        <SplitSection
          image="assets/photos/cabin-sitting-room.jpg"
          imageAlt="Cabin sitting room"
          side="left"
          bg="page"
          eyebrow="Lodging"
          title="Your house in the woods."
        >
          <p>You&rsquo;ll stay lakeside in a rustic cabin, your own quiet corner of the camp. Cabins sleep two to six depending on the cabin. Each comes with the essentials for a comfortable stay in the woods, firewood included.</p>
        </SplitSection>

        <SplitSection
          image="assets/photos/lodge-hearth.jpg"
          imageAlt="The lodge hearth"
          side="right"
          bg="block"
          eyebrow="At the table"
          title="Three meals. One long table."
        >
          <p>Three meals a day, served in the dining room of the main lodge &mdash; all part of your stay, nothing extra to order. Mornings start with a full breakfast; field and bagged lunches are available for days out on the water or in the uplands; dinner brings everyone back together at the lodge.</p>
        </SplitSection>

        <ClosingBand
          title="Live well. Stay wild."
          body="Modern comfort, timeless setting. All of it part of one all-inclusive rate."
          onReserve={onReserve}
          ctaLabel="Reserve your stay"
        />
      </React.Fragment>
    );
  }

  window.CampPage = CampPage;
})();
