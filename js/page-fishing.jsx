// js/page-fishing.jsx
(function () {
  const { ArrowLink } = window.LakewoodCampsDesignSystem_fbbd23;
  const { PageHero, SplitSection, FAQ, ClosingBand } = window;

  const FAQ_ITEMS = [
    { title: 'What fish are in the Rapid River?', content: 'Brook trout and landlocked salmon are the two most sought-after. Maine holds the last stronghold of the eastern brook trout in the United States, and the Rapid River is famous for some of the largest. Anglers have targeted these two fish at Lakewood for over 170 years.' },
    { title: 'Are the trout and salmon native to the Rapid River?', content: 'Brook trout are native to Maine and the Rapid River. The landlocked salmon, while wild, are not native to the river.' },
    { title: 'What fly rods should I bring?', content: 'If you bring one rod for brook trout and landlocked salmon, make it a 9′ 5wt — it covers most situations. Rods from 8–10′ and 4–6wt work well too.' },
    { title: 'What hatches happen, and when?', content: 'It varies year to year with weather and conditions, but the river sees classic Maine and New England hatches all season. Early on, mayflies like Hendricksons and Quill Gordons appear first — often seen right on the railing back at camp. As the season goes on, caddis take over, including the large Zebra Caddis we call Alderflies. Booking around a specific hatch? Contact us.' },
  ];

  function FishingPage({ go, onReserve }) {
    return (
      <React.Fragment>
        <PageHero
          image="assets/photos/brook-trout-net.jpg"
          eyebrow={['Fishing', 'Rapid River / Middle Dam']}
          title="World-class waters."
          sub="The only public lodge on the Rapid River — and the best native brook trout water in the lower 48."
        />

        <SplitSection
          image="assets/photos/salmon-catch.webp"
          imageAlt="Landlocked salmon, Rapid River"
          side="right"
          eyebrow={['The fishery', 'Native brook trout / landlocked salmon']}
          title="The best brookie water in the lower 48."
          cta={<ArrowLink onClick={() => go('rates')}>Guided fishing & add-ons</ArrowLink>}
        >
          <p>Since 1853, generations of fly-fishing enthusiasts have made our shores their destination. This rare, naturally sustained fishery holds native eastern brook trout and trophy-worthy landlocked salmon.</p>
          <p>Fish it yourself or with a guide &mdash; either way you&rsquo;ll have hundreds of prime spots to choose from, reached on the age-old paths along both sides of the river. The beauty of a Lakewood sunrise is rivaled only by the thrill of netting your first brookie.</p>
        </SplitSection>

        <FAQ eyebrow="Fishing FAQ" title="What anglers ask." items={FAQ_ITEMS} />

        <ClosingBand
          title="Net your first brookie."
          body="Guided fishing is available as an add-on, shared or private. Tell us when you'd like to fish."
          onReserve={onReserve}
          ctaLabel="Reserve your week"
        />
      </React.Fragment>
    );
  }

  window.FishingPage = FishingPage;
})();
