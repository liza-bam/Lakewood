// js/page-events.jsx
(function () {
  const { Eyebrow, Button } = window.LakewoodCampsDesignSystem_fbbd23;
  const { Reveal, PageHero, SplitSection, ClosingBand } = window;

  function EventsPage({ go, onReserve }) {
    return (
      <React.Fragment>
        <PageHero
          image="assets/photos/lodge-misty-lawn.jpg"
          eyebrow={['Events & buyouts', 'Take the whole camp']}
          title="Take the whole camp."
          sub="A rare place for a gathering that's better off the grid."
        />

        <SplitSection
          image="assets/photos/cabins-lake-golden.png"
          imageAlt="Cabins along the lake at golden hour"
          side="right"
          eyebrow="Private buyouts"
          title="Off the grid, all to yourself."
          cta={<Button variant="accent" arrow onClick={onReserve}>Inquire about a buyout</Button>}
        >
          <p>Lakewood&rsquo;s remote setting and lakeside lodge make it a rare place for a wedding, family reunion, corporate retreat, or any gathering that&rsquo;s better off the grid.</p>
          <p>For those seeking solitude, there&rsquo;s no better place to unplug than the shores of Lower Richardson Lake.</p>
        </SplitSection>

        <ClosingBand
          title="Plan your gathering."
          body="Tell us your dates and your group, and we'll put together the details for a private buyout."
          onReserve={onReserve}
          ctaLabel="Inquire now"
        />
      </React.Fragment>
    );
  }

  window.EventsPage = EventsPage;
})();
