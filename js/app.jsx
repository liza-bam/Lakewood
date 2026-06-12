// js/app.jsx
(function () {
  const NS = window.LakewoodCampsDesignSystem_fbbd23;
  const { SiteHeader, Eyebrow, Button, Input, Select } = NS;

  const LABEL_TO_PAGE = {
    'Home': 'home', 'The Camp': 'camp', 'Fishing': 'fishing', 'Hunting': 'hunting',
    'Wildlife': 'wildlife', 'Plan Your Trip': 'plan', 'Rates': 'rates',
  };
  const PAGE_TO_LABEL = { home: 'Home', camp: 'The Camp', fishing: 'Fishing', hunting: 'Hunting', wildlife: 'Wildlife', plan: 'Plan Your Trip', rates: 'Rates', events: 'Home' };

  const PAGES = {
    home: window.HomePage, camp: window.CampPage, fishing: window.FishingPage,
    hunting: window.HuntingPage, wildlife: window.WildlifePage, plan: window.PlanPage,
    rates: window.RatesPage, events: window.EventsPage,
  };

  function useMediaQuery(q) {
    const [m, setM] = React.useState(() => (typeof window !== 'undefined' ? window.matchMedia(q).matches : false));
    React.useEffect(() => {
      const mq = window.matchMedia(q);
      const h = (e) => setM(e.matches);
      setM(mq.matches);
      mq.addEventListener('change', h);
      return () => mq.removeEventListener('change', h);
    }, [q]);
    return m;
  }

  const NAV = ['Home', 'The Camp', 'Fishing', 'Hunting', 'Wildlife', 'Plan Your Trip', 'Rates'];

  // ---------- Responsive header (DS-styled, hamburger on mobile) ----------
  function NavItem({ label, active, onClick }) {
    const [h, setH] = React.useState(false);
    return (
      <a href="#" onClick={(e) => { e.preventDefault(); onClick(label); }}
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-label-sm)', fontWeight: 'var(--weight-semibold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-button)', textDecoration: 'none', color: active ? 'var(--salmon)' : (h ? 'var(--espresso)' : 'var(--brown-800)'), borderBottom: active ? '2px solid var(--salmon)' : '2px solid transparent', paddingBottom: '3px', whiteSpace: 'nowrap', transition: 'color var(--duration-fast) var(--ease-out)' }}>{label}</a>
    );
  }

  function ReserveBtn({ onReserve, full }) {
    const [h, setH] = React.useState(false);
    return (
      <button type="button" onClick={onReserve} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-label-sm)', fontWeight: 'var(--weight-semibold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-button)', color: 'var(--off-white)', background: h ? 'var(--accent-hover)' : 'var(--accent)', border: 'none', borderRadius: 'var(--radius-button)', padding: full ? '15px 18px' : '11px 18px', cursor: 'pointer', width: full ? '100%' : 'auto', transition: 'background var(--duration-fast) var(--ease-out)' }}>Reserve</button>
    );
  }

  function Header({ active, onNavigate, onReserve }) {
    const isMobile = useMediaQuery('(max-width: 880px)');
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => { if (!isMobile) setOpen(false); }, [isMobile]);
    const nav = (label) => { setOpen(false); onNavigate(label); };
    const wordmark = (
      <a href="#" onClick={(e) => { e.preventDefault(); nav('Home'); }}
        style={{ textDecoration: 'none', flexShrink: 0 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--brown-800)', whiteSpace: 'nowrap' }}>Lakewood Camps</span>
      </a>
    );
    return (
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(244, 241, 232, 0.9)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', borderBottom: '2px solid var(--border-line)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-pad)', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)' }}>
          {wordmark}
          {isMobile ? (
            <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((o) => !o)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'inline-flex', flexDirection: 'column', justifyContent: 'center', gap: '5px', width: '40px', height: '40px', alignItems: 'center' }}>
              {open ? (
                <span style={{ fontSize: '26px', lineHeight: 1, color: 'var(--espresso)' }}>&times;</span>
              ) : (
                <React.Fragment>
                  <span style={{ width: '22px', height: '2px', background: 'var(--espresso)' }}></span>
                  <span style={{ width: '22px', height: '2px', background: 'var(--espresso)' }}></span>
                  <span style={{ width: '22px', height: '2px', background: 'var(--espresso)' }}></span>
                </React.Fragment>
              )}
            </button>
          ) : (
            <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
              {NAV.map((l) => <NavItem key={l} label={l} active={l === active} onClick={nav} />)}
              <ReserveBtn onReserve={onReserve} />
            </nav>
          )}
        </div>
        {isMobile && open ? (
          <nav style={{ borderTop: '2px solid var(--border-line)', background: 'var(--off-white)', padding: 'var(--space-2) var(--container-pad) var(--space-6)', display: 'flex', flexDirection: 'column' }}>
            {NAV.map((l) => (
              <a key={l} href="#" onClick={(e) => { e.preventDefault(); nav(l); }}
                style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)', fontWeight: 'var(--weight-semibold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-button)', textDecoration: 'none', color: l === active ? 'var(--salmon)' : 'var(--brown-800)', padding: 'var(--space-4) 0', borderBottom: '1px solid var(--border-line)' }}>{l}</a>
            ))}
            <div style={{ marginTop: 'var(--space-5)' }}><ReserveBtn onReserve={() => { setOpen(false); onReserve(); }} full /></div>
          </nav>
        ) : null}
      </header>
    );
  }

  // ---------- Footer (moodboard layout, DS tokens) ----------
  function FLink({ children, onClick, href }) {
    const [h, setH] = React.useState(false);
    return (
      <a href={href || '#'} onClick={(e) => { if (!href) e.preventDefault(); if (onClick) onClick(); }}
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-small)', color: h ? 'var(--salmon)' : 'var(--ink-600)', textDecoration: 'none', transition: 'color var(--duration-fast) var(--ease-out)' }}>{children}</a>
    );
  }
  function FHead({ children }) {
    return <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-label-sm)', fontWeight: 'var(--weight-semibold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)', color: 'var(--text-heading)' }}>{children}</span>;
  }
  function SocialIcon({ name }) {
    const ref = React.useRef(null);
    React.useEffect(() => { if (window.lucide && ref.current) window.lucide.createIcons({ attrs: { width: 20, height: 20, 'stroke-width': 1.5 }, nameAttr: 'data-lucide' }); }, []);
    return <i ref={ref} data-lucide={name} style={{ display: 'inline-flex', color: 'var(--ink-900)' }}></i>;
  }
  function Footer({ go, onReserve }) {
    const [rh, setRh] = React.useState(false);
    return (
      <footer style={{ background: 'var(--surface-page)', borderTop: '2px solid var(--border-line)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-16) var(--container-pad) var(--space-8)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr auto', gap: 'var(--space-10)', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <img src="assets/logos/lockup-stacked-transparent.png" alt="Lakewood Camps" style={{ height: '88px', width: 'auto' }} />
              <p style={{ maxWidth: '32ch', fontSize: 'var(--text-small)', lineHeight: 'var(--leading-body)', color: 'var(--text-secondary)' }}>Maine&rsquo;s original sporting camp, reached by boat across Lower Richardson Lake. Est. 1853.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <FHead>Contact</FHead>
              <span style={{ fontSize: 'var(--text-small)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-body)' }}>Lower Richardson Lake at Middle Dam, Andover, Maine</span>
              <FLink href="mailto:reservations@lakewoodcamps.com">reservations@lakewoodcamps.com</FLink>
              <FLink href="tel:+12073034699">(207) 303-4699</FLink>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <FHead>Events & buyouts</FHead>
              <FLink onClick={() => go('events')}>Inquire about a buyout</FLink>
              <span style={{ marginTop: 'var(--space-2)' }}><FHead>Explore</FHead></span>
              <FLink onClick={() => go('fishing')}>Fishing</FLink>
              <FLink onClick={() => go('hunting')}>Hunting</FLink>
              <FLink onClick={() => go('plan')}>Plan your trip</FLink>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <FHead>Tangled Alders</FHead>
              <span style={{ fontSize: 'var(--text-small)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-body)' }}>Fall guided bird hunting through our sister service. Call Alex Hebert.</span>
              <FLink href="tel:+12074687561">(207) 468-7561</FLink>
              <FLink href="https://tangledalders.com">tangledalders.com</FLink>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-5)' }}>
              <button type="button" onClick={onReserve} onMouseEnter={() => setRh(true)} onMouseLeave={() => setRh(false)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-label)', fontWeight: 'var(--weight-semibold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-button)', color: 'var(--salmon)', background: rh ? 'rgba(232,137,107,0.10)' : 'transparent', border: '2px solid var(--salmon)', borderRadius: 'var(--radius-button)', padding: '14px 26px', cursor: 'pointer', transition: 'background var(--duration-fast) var(--ease-out)' }}>
                Reserve your stay <span aria-hidden="true">→</span></button>
              <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
                <a href="https://instagram.com/LakewoodCampsMaine" aria-label="Instagram" style={{ display: 'inline-flex' }}><SocialIcon name="instagram" /></a>
                <a href="https://facebook.com/LakewoodCamps" aria-label="Facebook" style={{ display: 'inline-flex' }}><SocialIcon name="facebook" /></a>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 'var(--space-12)', paddingTop: 'var(--space-6)', borderTop: '2px solid var(--border-line)', display: 'flex', justifyContent: 'space-between', gap: 'var(--space-6)', flexWrap: 'wrap', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-label)', letterSpacing: '0.02em', color: 'var(--text-muted)' }}>
            <span>© 2026 Lakewood Camps</span>
            <span>Middle Dam · Lower Richardson Lake · Rapid River, ME</span>
          </div>
        </div>
      </footer>
    );
  }

  // ---------- Reserve modal ----------
  function ReserveModal({ open, onClose }) {
    const [sent, setSent] = React.useState(false);
    React.useEffect(() => {
      if (!open) return;
      const onKey = (e) => { if (e.key === 'Escape') onClose(); };
      document.addEventListener('keydown', onKey);
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
    }, [open]);
    React.useEffect(() => { if (open) setSent(false); }, [open]);
    if (!open) return null;
    return (
      <div role="dialog" aria-modal="true" onClick={onClose}
        style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(72,58,38,0.55)', backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 'var(--space-12) var(--space-4)', overflowY: 'auto' }}>
        <div onClick={(e) => e.stopPropagation()}
          style={{ background: 'var(--surface-card)', border: '2px solid var(--border-line)', borderRadius: 'var(--radius-card)', width: '100%', maxWidth: '560px', padding: 'var(--space-10)', display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', position: 'relative' }}>
          <button type="button" onClick={onClose} aria-label="Close"
            style={{ position: 'absolute', top: 'var(--space-5)', right: 'var(--space-5)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px', lineHeight: 1, color: 'var(--ink-600)' }}>×</button>
          {sent ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', padding: 'var(--space-6) 0' }}>
              <Eyebrow color="ember">Request received</Eyebrow>
              <h2 style={{ fontSize: 'var(--text-h3)' }}>We'll be in touch.</h2>
              <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-secondary)', lineHeight: 'var(--leading-body)' }}>Thank you. We&rsquo;ll confirm availability and dates within a day. For anything urgent, call (207) 303-4699.</p>
              <div><Button variant="accent" onClick={onClose}>Done</Button></div>
            </div>
          ) : (
            <React.Fragment>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <Eyebrow color="ember">$600 / person / day · all-inclusive</Eyebrow>
                <h2 style={{ fontSize: 'var(--text-h3)' }}>Reserve your stay.</h2>
                <p style={{ fontSize: 'var(--text-small)', color: 'var(--text-secondary)' }}>Two-night minimum. Tell us your dates and we&rsquo;ll confirm availability.</p>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
                <Input label="Full name" placeholder="Your name" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                  <Input label="Email" type="email" placeholder="you@example.com" />
                  <Input label="Phone" type="tel" placeholder="(207) 000-0000" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                  <Input label="Arrival date" type="date" />
                  <Select label="Party size" placeholder="Choose…" options={['1', '2', '3', '4', '5', '6', '7+']} />
                </div>
                <Select label="I'm interested in" placeholder="Choose…" options={['Fishing', 'Upland bird hunting', 'Moose hunt', 'Wildlife & expeditions', 'Private buyout', 'Not sure yet']} />
                <label style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: 'var(--text-label-sm)', fontWeight: 'var(--weight-semibold)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)', color: 'var(--text-secondary)', fontFamily: 'var(--font-sans)' }}>Anything we should know</span>
                  <textarea className="lw-textarea" placeholder="Dates you have in mind, a hatch you're chasing, dietary needs…"></textarea>
                </label>
                <Button variant="accent" size="lg" arrow style={{ justifyContent: 'center', width: '100%' }}>Send request</Button>
              </form>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }

  // ---------- App ----------
  function App() {
    const [page, setPage] = React.useState('home');
    const [reserve, setReserve] = React.useState(false);
    const mainRef = React.useRef(null);

    const go = React.useCallback((p) => {
      setPage(p);
      requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }));
    }, []);
    const openReserve = React.useCallback(() => setReserve(true), []);

    const PageComp = PAGES[page] || window.HomePage;
    return (
      <React.Fragment>
        <Header
          active={PAGE_TO_LABEL[page] || 'Home'}
          onNavigate={(label) => go(LABEL_TO_PAGE[label] || 'home')}
          onReserve={openReserve}
        />
        <main ref={mainRef}>
          <PageComp go={go} onReserve={openReserve} />
        </main>
        <Footer go={go} onReserve={openReserve} />
        <ReserveModal open={reserve} onClose={() => setReserve(false)} />
      </React.Fragment>
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<App />);
})();
