// js/page-plan.jsx
(function () {
  const { Eyebrow, ArrowLink } = window.LakewoodCampsDesignSystem_fbbd23;
  const { Reveal, Section, SectionHead, PageHero, SplitSection, ClosingBand } = window;

  // Lucide icon — renders a placeholder and lets lucide swap it for an SVG
  function Icon({ name, size = 22 }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (window.lucide && ref.current) {
        window.lucide.createIcons({
          icons: window.lucide.icons,
          attrs: { width: size, height: size, 'stroke-width': 1.5 },
          nameAttr: 'data-lucide',
        });
      }
    }, [name, size]);
    return <i ref={ref} data-lucide={name} style={{ color: 'var(--ink-600)', display: 'inline-flex' }}></i>;
  }

  const PROVIDED = [
    { icon: 'bed-double', label: 'Lakeside cabin', note: 'Your own quiet corner of camp.' },
    { icon: 'utensils', label: 'Three meals daily', note: 'Served in the main lodge.' },
    { icon: 'sailboat', label: 'Boat transfers', note: 'To and from camp by water.' },
    { icon: 'waves', label: 'Livery to angler access', note: 'Out to the river and back.' },
    { icon: 'flame', label: 'Firewood', note: 'Stocked for every cabin.' },
    { icon: 'fish', label: 'Basic fishing access', note: 'Hundreds of prime spots.' },
  ];

  function AmenityCard({ icon, label, note }) {
    return (
      <div style={{ background: 'var(--surface-card)', border: '2px solid var(--border-line)', borderRadius: 'var(--radius-card)', padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <Icon name={icon} />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h4)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-display)', color: 'var(--text-heading)', lineHeight: 1.05 }}>{label}</span>
        <span style={{ fontSize: 'var(--text-small)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-tight)' }}>{note}</span>
      </div>
    );
  }

  function CheckList({ heading, items }) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <Eyebrow color="ember">{heading}</Eyebrow>
        <ul className="lw-list" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {items.map((it, i) => (
            <li key={i} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, marginTop: '2px', color: 'var(--salmon)' }}><Icon name="check" size={18} /></span>
              <span style={{ fontSize: 'var(--text-body)', color: 'var(--text-body)', lineHeight: 'var(--leading-tight)' }}>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function InfoCard({ title, children }) {
    return (
      <div style={{ background: 'var(--surface-card)', border: '2px solid var(--border-line)', borderRadius: 'var(--radius-card)', padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        <h3 style={{ fontSize: 'var(--text-h4)', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-display)', color: 'var(--text-heading)' }}>{title}</h3>
        <p style={{ fontSize: 'var(--text-body)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-body)' }}>{children}</p>
      </div>
    );
  }

  function PlanPage({ go, onReserve }) {
    return (
      <React.Fragment>
        <PageHero
          image="assets/photos/dock-boat-arrival.jpg"
          eyebrow={['Plan your trip', 'Reached by boat']}
          title="Plan your trip."
          sub="Everything you need to know before your boat ride in."
        />

        <SplitSection
          image="assets/photos/guides-truck.jpg"
          imageAlt="Guides at the south arm landing"
          side="right"
          eyebrow="Getting here"
          title="Park at the south arm. We'll meet you by boat."
        >
          <p>Guests arrive by boat from the south arm of Lower Richardson Lake. Park at the designated area; the transfer to camp takes about 10&ndash;20 minutes depending on weather. The road in is a 16-mile logging road and often impassable, so plan to arrive by water.</p>
        </SplitSection>

        {/* WHAT'S PROVIDED */}
        <Section bg="block" label="What's provided">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
            <Reveal><SectionHead eyebrow="What's provided" title="One rate. It's all here." intro="Lakewood is all-inclusive — no meal plans, no surprise add-ons." /></Reveal>
            <Reveal delay={80} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
              {PROVIDED.map((p) => <AmenityCard key={p.label} {...p} />)}
            </Reveal>
          </div>
        </Section>

        {/* WHAT TO BRING + DOGS/KIDS */}
        <Section bg="page" label="What to bring">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-20)', alignItems: 'start' }}>
            <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
              <SectionHead eyebrow="What to bring" title="Pack for the river." titleSize="var(--text-h3)" />
              <CheckList heading="Fishing" items={['A 9′ 5wt rod covers most situations.', '8–10′ and 4–6wt rods also work well.']} />
              <CheckList heading="Moose hunt" items={['Layers for 70°F down to 20°F.', 'Gear for all weather — wind, rain, sleet, snow.']} />
            </Reveal>
            <Reveal delay={80} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
              <InfoCard title="Dogs">Hunting dogs stay in the cabin at no added fee. All dogs must be well-mannered, leashed when necessary, and kenneled or controlled when you&rsquo;re out.</InfoCard>
              <InfoCard title="Kids">Children are welcome &mdash; we love when the next generation builds a love for the outdoors.</InfoCard>
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <ArrowLink onClick={() => go('rates')}>See rates & booking</ArrowLink>
              </div>
            </Reveal>
          </div>
        </Section>

        <ClosingBand
          title="Ready when you are."
          body="Two-night minimum, all-inclusive at $600 per person, per day. Reserve your dates and we'll handle the rest."
          onReserve={onReserve}
          ctaLabel="Reserve today"
        />
      </React.Fragment>
    );
  }

  window.PlanPage = PlanPage;
})();
