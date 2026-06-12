// js/page-rates.jsx
(function () {
  const { Eyebrow, Button, Accordion } = window.LakewoodCampsDesignSystem_fbbd23;
  const { Reveal, Section, SectionHead, PageHero, ClosingBand } = window;

  function Check() {
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (window.lucide && ref.current) {
        window.lucide.createIcons({ attrs: { width: 18, height: 18, 'stroke-width': 1.5 }, nameAttr: 'data-lucide' });
      }
    }, []);
    return <i ref={ref} data-lucide="check" style={{ color: 'var(--salmon)', display: 'inline-flex', flexShrink: 0, marginTop: '3px' }}></i>;
  }

  const INCLUDED = ['Lakeside cabin', 'All three meals daily in the lodge', 'Boat transfers to and from camp', 'Livery to angler access', 'Firewood', 'Basic fishing access'];

  const ADDONS = [
    ['Guided fishing', 'Shared (2 anglers per guide) or private.'],
    ['Guided hunting', 'Upland bird; moose for permit holders.'],
    ['Boat charters', 'Lake tours, sunset cruises, remote drop-offs.'],
    ['Special meals', 'Shore lunch, lobster bake, private chef dinner.'],
    ['Gear rental', 'Rods, waders, flies, tackle.'],
    ['Trip photography', 'Guest galleries from your stay.'],
  ];

  const CANCELLATION = [
    { title: '60+ days before arrival', content: '100% refund.' },
    { title: '30–59 days before arrival', content: '50% refund.' },
    { title: 'Under 30 days before arrival', content: 'No refund. If you need to modify or cancel, contact us as soon as possible — we\u2019ll make efforts to reschedule.' },
  ];

  function RatesPage({ go, onReserve }) {
    return (
      <React.Fragment>
        <PageHero
          image="assets/photos/firepit-dock-evening.png"
          eyebrow={['Rates & booking', 'All-inclusive']}
          title="One price. Everything included."
          sub="No meal plans, no surprise add-ons, no math."
        />

        {/* PRICE + INCLUDED */}
        <Section bg="page" label="The rate">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-20)', alignItems: 'center' }}>
            <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', alignItems: 'flex-start' }}>
              <Eyebrow color="ember">The all-inclusive rate</Eyebrow>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-1)', lineHeight: 0.9, color: 'var(--text-heading)', letterSpacing: 'var(--tracking-display)' }}>$600</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h3)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-display)', color: 'var(--salmon)' }}>/ person / day</span>
              </div>
              <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-secondary)', maxWidth: '40ch', lineHeight: 'var(--leading-body)' }}>One rate covers your stay. Two-night minimum. Rates in U.S. dollars.</p>
              <Button variant="accent" size="lg" arrow onClick={onReserve}>Reserve now</Button>
            </Reveal>
            <Reveal delay={80} style={{ background: 'var(--surface-card)', border: '2px solid var(--border-line)', borderRadius: 'var(--radius-card)', padding: 'var(--space-10)', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <Eyebrow>What's included</Eyebrow>
              <ul className="lw-list" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {INCLUDED.map((it) => (
                  <li key={it} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start', fontSize: 'var(--text-body-lg)', color: 'var(--text-body)' }}>
                    <Check /> <span>{it}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>

        {/* ADD-ONS */}
        <Section bg="block" label="Add-ons" style={{ paddingTop: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
            <Reveal><SectionHead eyebrow="Add-ons" title="Make your trip your own." intro="Add any of these to your stay. Pricing finalized when you book." /></Reveal>
            <Reveal delay={80} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
              {ADDONS.map(([t, d]) => (
                <div key={t} style={{ background: 'var(--surface-card)', border: '2px solid var(--border-line)', borderRadius: 'var(--radius-card)', padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-h4)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-display)', color: 'var(--text-heading)', lineHeight: 1.05 }}>{t}</span>
                  <span style={{ fontSize: 'var(--text-small)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-tight)' }}>{d}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </Section>

        {/* DEPOSIT + CANCELLATION */}
        <Section bg="page" label="Deposit & cancellation">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-20)', alignItems: 'start' }}>
            <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <Eyebrow color="ember">Deposit & payment</Eyebrow>
              <h2 style={{ fontSize: 'var(--text-h3)' }}>Simple, up front.</h2>
              <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-secondary)', maxWidth: '48ch', lineHeight: 'var(--leading-body)' }}>A 50% deposit is required at booking, payable by credit card or ACH (e-check). The remaining balance is due 60 days before arrival, billed automatically to the card on file.</p>
            </Reveal>
            <Reveal delay={80} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
              <Eyebrow color="ember">Cancellation policy</Eyebrow>
              <Accordion items={CANCELLATION} defaultOpen={0} />
            </Reveal>
          </div>
        </Section>

        <ClosingBand
          title="Reserve your week."
          body="Limited availability for the 173rd season. Lock in your dates today."
          onReserve={onReserve}
          ctaLabel="Reserve now"
        />
      </React.Fragment>
    );
  }

  window.RatesPage = RatesPage;
})();
