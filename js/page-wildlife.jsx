// js/page-wildlife.jsx
(function () {
  const { Eyebrow, PhotoCard } = window.LakewoodCampsDesignSystem_fbbd23;
  const { Reveal, Section, PageHero, ClosingBand } = window;

  function WildlifePage({ go, onReserve }) {
    return (
      <React.Fragment>
        <PageHero
          image="assets/photos/moose-calf.jpg"
          eyebrow={['Wildlife & expeditions', 'Loons / moose / quiet']}
          title="Watch the water."
          sub="For those who'd rather watch than cast."
        />

        {/* POSITIONING STATEMENT */}
        <section data-screen-label="Wildlife statement" style={{ background: 'var(--surface-page)' }}>
          <div style={{ maxWidth: '920px', margin: '0 auto', padding: 'var(--space-12) var(--container-pad)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', alignItems: 'center', textAlign: 'center' }}>
            <Reveal><Eyebrow color="ember">A quieter day at camp</Eyebrow></Reveal>
            <Reveal as="h2" delay={60} style={{ fontSize: 'var(--text-display-2)', maxWidth: '22ch' }}>One of the best seats in Maine.</Reveal>
            <Reveal delay={120}>
              <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-secondary)', maxWidth: '58ch', lineHeight: 'var(--leading-body)' }}>Not every guest comes to fish or hunt. For those who&rsquo;d rather watch, Lakewood is one of the best seats in Maine &mdash; moose along the shoreline, loons on the water, and the kind of quiet you can&rsquo;t find anywhere with a road to it.</p>
            </Reveal>
          </div>
        </section>

        {/* WHAT YOU MIGHT SEE */}
        <Section bg="block" label="What you might see" style={{ paddingTop: 0 }}>
          <Reveal style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
            <PhotoCard variant="overlay" image="assets/photos/moose-bulls.jpg" label="On the shoreline" title="Moose" description="Dawn and dusk, where the water meets the woods." />
            <PhotoCard variant="overlay" image="assets/photos/shoreline-misty-morning.jpg" label="On the water" title="Loons & birdlife" description="The call of the loons across a still lake." />
            <PhotoCard variant="overlay" image="assets/photos/firepit-dock-evening.png" label="Off the grid" title="The quiet" description="No road in. No hurry. Just the lake." />
          </Reveal>
        </Section>

        <ClosingBand
          title="Come watch the lake."
          body="Tell us what you'd like to see and we'll help you plan a few quiet days on Lower Richardson Lake."
          onReserve={onReserve}
          ctaLabel="Plan a quiet week"
        />
      </React.Fragment>
    );
  }

  window.WildlifePage = WildlifePage;
})();
