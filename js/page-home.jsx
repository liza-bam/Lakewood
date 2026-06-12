// js/page-home.jsx
(function () {
  const NS = window.LakewoodCampsDesignSystem_fbbd23;
  const { Eyebrow, ArrowLink, Button, PhotoCard, ReviewCard } = NS;
  const { Reveal, Section, SectionHead, SplitSection, ClosingBand } = window;

  function HomePage({ go, onReserve }) {
    return (
      <React.Fragment>
        {/* HERO */}
        <section data-screen-label="Hero" style={{ position: 'relative', minHeight: '78vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
          <img src="assets/photos/hero-dock-2.jpg" alt="Guests on the dock at golden hour, Lower Richardson Lake" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          {/* Frosted-glass gradient covering ONLY the bottom band */}
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '55%', background: 'linear-gradient(180deg, rgba(244,241,232,0) 0%, rgba(244,241,232,0.55) 38%, rgba(244,241,232,0.88) 100%)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 38%, #000 100%)', maskImage: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 38%, #000 100%)' }}></div>
          <div style={{ position: 'relative', width: '100%', padding: 'var(--space-6) var(--space-5)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
            <img src="assets/logos/lockup-horizontal-transparent.png" alt="Lakewood Camps — Rapid River, ME" style={{ height: '72px', width: 'auto' }} />
            <h1 style={{ fontSize: 'clamp(3.4rem, 12vw, 168px)', lineHeight: 0.95, color: 'var(--text-heading)', width: '100%', paddingBottom: '0.25em', margin: 0 }}>Making dreams come true on the Rapid River since 1853.</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <Button variant="accent" size="lg" arrow onClick={onReserve} style={{ whiteSpace: 'nowrap' }}>Reserve today</Button>
            </div>
            <Eyebrow color="quiet" style={{ fontSize: '20px', fontWeight: 700, color: 'rgba(45,29,7,0.5)' }}>$600 / person / day · all-inclusive</Eyebrow>
          </div>
        </section>

        {/* THE STORY */}
        <SplitSection
          image="assets/photos/shoreline-misty-morning.jpg"
          imageAlt="Camp shoreline at first light"
          side="right"
          eyebrow={['Our story', 'Est. 1853']}
          title="Rooted in Maine. Built for generations."
          cta={<ArrowLink onClick={() => go('camp')}>Explore the camp</ArrowLink>}>
          
          <p>Lakewood Camps is Maine&rsquo;s oldest original sporting camp, with history and charm to match. We sit on the untouched shores of Lower Richardson Lake, at the headwaters of the Rapid River at Middle Dam, in the Rangeley Lakes Region of Western Maine.</p>
          <p>For generations, guests have come for fly fishing, upland bird hunting, guided moose hunts, and remote sporting adventures &mdash; and stayed for the homestyle hospitality. Here the days are long and the fireside stories longer. Everyone leaves Lakewood feeling like a Mainer.</p>
        </SplitSection>

        {/* THE ARRIVAL */}
        <SplitSection
          image="assets/photos/arrival-dock.jpg"
          imageAlt="The dock reaching into Lower Richardson Lake"
          side="left"
          bg="block"
          eyebrow="The arrival"
          title="We believe in starting every adventure with an adventure."
          cta={<ArrowLink onClick={() => go('plan')}>Plan your trip</ArrowLink>}>
          
          <p>There is no road in. Your time at Lakewood starts at our private dock on the south arm of Lower Richardson Lake, with a boat transfer to camp &mdash; about 10&ndash;20 minutes on the water, and one of our favorite parts of the trip.</p>
        </SplitSection>

        {/* THREE DOORS */}
        <Section bg="page" label="Three doors" style={{ paddingTop: 0 }} pad="var(--space-12)">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
            <Reveal><SectionHead eyebrow="Three ways in" title="Fishing. Hunting. Wildlife." /></Reveal>
            <Reveal delay={80} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
              <PhotoCard variant="overlay" image="assets/photos/brook-trout-net.jpg" label="Fishing" title="World-class waters" description="The only public lodge on the Rapid River — and the best native brook trout water in the lower 48." href="#" onClick={(e) => {e.preventDefault();go('fishing');}} />
              <PhotoCard variant="overlay" image="assets/photos/setter-upland.jpg" label="Hunting" title="Upland birds & big game" description="Grouse and woodcock steps from your cabin. Zone 7 moose hunts for the lucky few who draw a tag." href="#" onClick={(e) => {e.preventDefault();go('hunting');}} />
              <PhotoCard variant="overlay" image="assets/photos/moose-bulls.jpg" label="Wildlife & expeditions" title="Watch the water" description="For those who'd rather watch than cast — moose, loons, and the quiet of the lake." href="#" onClick={(e) => {e.preventDefault();go('wildlife');}} />
            </Reveal>
          </div>
        </Section>

        {/* THE STAY */}
        <section data-screen-label="The stay" style={{ background: 'var(--surface-block)' }}>
          <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-12) var(--container-pad)', display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
            <Reveal style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <Eyebrow>The stay</Eyebrow>
                <h2 style={{ fontSize: 'var(--text-display-2)', maxWidth: '18ch' }}>Your house in the woods.</h2>
              </div>
              <ArrowLink onClick={() => go('camp')}>See the camp</ArrowLink>
            </Reveal>
            <Reveal delay={80} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
              <PhotoCard image="assets/photos/cabins-lawn-birch.jpg" label="Cabins" title="On the waterline" description="You'll stay lakeside in a rustic cabin, firewood included." />
              <PhotoCard image="assets/photos/lodge-sitting-room.jpg" label="The lodge" title="Every meal at the table" description="Three meals a day, served in the main lodge dining room." />
              <PhotoCard image="assets/photos/firepit-dock-evening.png" label="Evenings" title="Fireside & porch" description="Finish each day by the fire as the sun sets over the lake." />
            </Reveal>
          </div>
        </section>

        {/* REVIEWS */}
        <Section bg="page" label="Reviews">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)', alignItems: 'center' }}>
            <Reveal><SectionHead align="center" eyebrow="Guests say" title="Best week of the year." max="22ch" /></Reveal>
            <Reveal delay={80} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)', width: '100%' }}>
              <ReviewCard quote="Best week of the year. Perfect in every way — the boat ride in, the river, the meals, all of it." name="Michael R." detail="June 2025" />
              <ReviewCard quote="The fishing is everything they say. But it's the people and the quiet you remember most." name="Sarah & Tom L." detail="Returning guests" />
              <ReviewCard quote="We arrived strangers and left feeling like Mainers. We are already booked for next year." name="The Whitmore family" detail="July 2025" />
            </Reveal>
            <Reveal delay={120}><ArrowLink onClick={onReserve}>Read all 45 guest reviews</ArrowLink></Reveal>
          </div>
        </Section>

        {/* CLOSING */}
        <ClosingBand
          title="Make memories that last."
          body="Since 1853, our guests have woken to the call of the loons and the peaceful views of the Rapid River right outside their door. Come be part of our history. We can't wait to see you at camp."
          onReserve={onReserve}
          ctaLabel="Reserve your stay" />
        
      </React.Fragment>);

  }

  window.HomePage = HomePage;
})();