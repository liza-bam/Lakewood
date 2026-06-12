// js/shared.jsx — shared layout primitives for the Lakewood site
const NS = window.LakewoodCampsDesignSystem_fbbd23;
const { Eyebrow, ArrowLink, Button, Accordion } = NS;

// Scroll-reveal wrapper
function Reveal({ children, as = 'div', delay = 0, style }) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const show = () => { if (!done) { done = true; setSeen(true); } };
    // 1) If already in (or near) the viewport on mount, reveal right away.
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (r.top < vh * 1.05) { show(); return; }
    // 2) Otherwise reveal on scroll-in.
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { show(); io.disconnect(); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    // 3) Safety net: never let content stay hidden if neither fires.
    const t = setTimeout(() => { show(); io.disconnect(); }, 1600);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);
  const Tag = as;
  return (
    <Tag ref={ref} className={'lw-reveal' + (seen ? ' is-in' : '')}
      style={{ transitionDelay: delay ? delay + 'ms' : undefined, ...style }}>
      {children}
    </Tag>
  );
}

const BG = {
  page: 'var(--surface-page)',
  block: 'var(--surface-block)',
  white: 'var(--surface-card)',
  inverse: 'var(--surface-inverse)',
};

// Section shell with centered container
function Section({ bg = 'page', pad = 'var(--space-12)', label, id, style, children }) {
  return (
    <section data-screen-label={label} id={id} style={{ background: BG[bg] || bg, ...style }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: pad + ' var(--container-pad)' }}>
        {children}
      </div>
    </section>
  );
}

// Section header: eyebrow + big display title + optional intro paragraph
function SectionHead({ eyebrow, eyebrowColor = 'ember', title, intro, align = 'left', max = '24ch', titleSize = 'var(--text-display-2)' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: align === 'center' ? 'center' : 'flex-start', textAlign: align }}>
      {eyebrow ? <Eyebrow color={eyebrowColor}>{eyebrow}</Eyebrow> : null}
      <h2 style={{ fontSize: titleSize, maxWidth: max }}>{title}</h2>
      {intro ? <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-secondary)', maxWidth: '54ch', lineHeight: 'var(--leading-body)' }}>{intro}</p> : null}
    </div>
  );
}

// Full-bleed interior page hero — photo, espresso scrim, white text at bottom-left
function PageHero({ image, eyebrow, title, sub, height = '46vh', align = 'flex-end' }) {
  return (
    <section data-screen-label="Page hero" style={{ position: 'relative', minHeight: height, display: 'flex', alignItems: align, overflow: 'hidden' }}>
      <img src={image} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-hero)' }}></div>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(72,58,38,0.34) 0%, rgba(72,58,38,0) 38%)' }}></div>
      <div style={{ position: 'relative', width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-12) var(--container-pad) var(--space-10)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {eyebrow ? <Eyebrow color="inverse">{eyebrow}</Eyebrow> : null}
        <h1 style={{ fontSize: 'var(--text-display-1)', lineHeight: 'var(--leading-display)', color: 'var(--off-white)', maxWidth: '16ch' }}>{title}</h1>
        {sub ? <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--ink-inverse-muted)', maxWidth: '50ch', lineHeight: 'var(--leading-body)' }}>{sub}</p> : null}
      </div>
    </section>
  );
}

// Image / text split. side='right' puts the image on the right.
function SplitSection({ image, imageAlt = '', side = 'right', bg = 'page', eyebrow, eyebrowColor = 'ember', title, children, cta, aspect = '4 / 3' }) {
  const text = (
    <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
      {eyebrow ? <Eyebrow color={eyebrowColor}>{eyebrow}</Eyebrow> : null}
      <h2 style={{ fontSize: 'var(--text-display-2)', maxWidth: '18ch' }}>{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', fontSize: 'var(--text-body-lg)', color: 'var(--text-secondary)', maxWidth: '52ch', lineHeight: 'var(--leading-body)' }}>{children}</div>
      {cta ? <div style={{ marginTop: 'var(--space-2)' }}>{cta}</div> : null}
    </Reveal>
  );
  const pic = (
    <Reveal delay={80} style={{ height: '100%' }}>
      <img src={image} alt={imageAlt} style={{ width: '100%', height: '100%', minHeight: '340px', objectFit: 'cover', borderRadius: 'var(--radius-image)' }} />
    </Reveal>
  );
  return (
    <section style={{ background: BG[bg] || bg }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-12) var(--container-pad)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-20)', alignItems: 'stretch' }}>
        {side === 'left' ? <React.Fragment>{pic}{text}</React.Fragment> : <React.Fragment>{text}{pic}</React.Fragment>}
      </div>
    </section>
  );
}

// FAQ block built on the DS Accordion
function FAQ({ eyebrow = 'Good to know', title, items, defaultOpen = 0 }) {
  return (
    <Section bg="page" label="FAQ">
      <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'var(--space-16)', alignItems: 'start' }}>
        <Reveal>
          <SectionHead eyebrow={eyebrow} title={title} />
        </Reveal>
        <Reveal delay={80}>
          <Accordion items={items} defaultOpen={defaultOpen} />
        </Reveal>
      </div>
    </Section>
  );
}

// Espresso closing band with fly-tying texture + CTA
function ClosingBand({ title, body, onReserve, ctaLabel = 'Reserve today' }) {
  return (
    <section data-screen-label="Closing" style={{ position: 'relative', background: 'var(--surface-inverse)', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: 'url(assets/patterns/flies-espresso.png)', backgroundSize: '400px', opacity: 0.6, pointerEvents: 'none' }}></div>
      <div style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-12) var(--container-pad)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-5)' }}>
        <Reveal as="h2" style={{ fontSize: 'var(--text-display-2)', color: 'var(--off-white)', maxWidth: '18ch' }}>{title}</Reveal>
        {body ? <Reveal as="p" delay={60} style={{ fontSize: 'var(--text-body-lg)', color: 'var(--ink-inverse-muted)', maxWidth: '46ch', lineHeight: 'var(--leading-body)' }}>{body}</Reveal> : null}
        <Reveal delay={120}><Button variant="accent" size="lg" arrow onClick={onReserve}>{ctaLabel}</Button></Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { Reveal, Section, SectionHead, PageHero, SplitSection, FAQ, ClosingBand });
