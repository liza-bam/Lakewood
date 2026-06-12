// js/page-hunting.jsx
(function () {
  const { ArrowLink } = window.LakewoodCampsDesignSystem_fbbd23;
  const { PageHero, SplitSection, FAQ, ClosingBand } = window;

  const UPLAND = [
    { title: 'Are hunting dogs allowed in the cabin?', content: 'Yes — no added fee for your hard-working dogs. We ask that all dogs are well-mannered, leashed when necessary, and kenneled or controlled when hunters are out.' },
    { title: 'What flush rates can I expect?', content: 'From our experience since opening to select hunters in 2022, expect 12–15 grouse and 6–8 woodcock in a full day. Bird numbers and woodcock migrations change year to year.' },
    { title: 'What does a typical day look like?', content: 'Breakfast to order at 8 AM, most hunters in the uplands by 9. Most take a field lunch prepared by our staff. Back at camp in late afternoon — clean up, tend to dogs, and gather in the lodge before dinner between 6 and 7.' },
    { title: 'When is upland season?', content: 'Lakewood is open for upland hunting through the month of October — prime season for classic hunts in the fall foliage.' },
    { title: 'How far to good cover?', content: 'Not far at all. Beyond the gate, excellent cover continues for miles. You won\u2019t spend your day driving to it.' },
    { title: 'What cover will I hunt?', content: 'Classic clear cuts and selective cuts in the 12–15-year regrowth phase — mixed alder and aspen with plenty of roosting trees. Getting off the logging roads and onto skidder trails raises your flush rate dramatically.' },
  ];

  const MOOSE = [
    { title: 'What should I pack?', content: 'Pack for temperatures from 70°F down to 20°F. We hunt in whatever weather comes — wind, rain, sleet, and snow.' },
    { title: 'What physical condition should I be in?', content: 'We hunt varied terrain, some challenging and some easier. Be honest and upfront with your guide about your ability.' },
    { title: 'What does a typical day look like?', content: 'Mornings start between 4:00–4:30 AM: breakfast, load up, and head to the hunt. Lunch is in the field; dinner is served when you\u2019re back at the lodge. Legal hunting runs from a half hour before sunrise to a half hour after sunset — plan to be out that whole time.' },
    { title: 'What are the accommodations?', content: 'Cabins accommodate two to six hunters on average, depending on the cabin. Contact us for details.' },
    { title: 'Can we review the hunting area in advance?', content: 'Once your deposit is made, we\u2019ll connect you with your guide, who\u2019ll go over the general area. You\u2019ll be able to download maps to study and can visit beforehand.' },
  ];

  function HuntingPage({ go, onReserve }) {
    return (
      <React.Fragment>
        <PageHero
          image="assets/photos/hunter-orange-field.jpg"
          eyebrow={['Hunting', 'Upland birds / Zone 7 moose']}
          title="Upland birds & big game."
          sub="Classic upland cover steps from your cabin, and once-in-a-lifetime moose hunts for those who draw a tag."
        />

        <SplitSection
          image="assets/photos/setter-upland.jpg"
          imageAlt="English setter on point in upland cover"
          side="left"
          bg="block"
          eyebrow="Upland bird hunting"
          title="Grouse and woodcock, out the door."
        >
          <p>Lakewood&rsquo;s remote location is surrounded by classic upland habitat with outstanding grouse and woodcock hunting. Your hunt begins within steps of your cabin, on gated private property with thousands of acres of prime cover beyond. No long drives to good hunting here.</p>
        </SplitSection>

        <FAQ eyebrow="Upland FAQ" title="The bird hunt." items={UPLAND} />

        <SplitSection
          image="assets/photos/moose-bulls.jpg"
          imageAlt="Bull moose at the water's edge"
          side="right"
          bg="block"
          eyebrow="Moose hunting"
          title="A once-in-a-lifetime tag."
          cta={<ArrowLink onClick={() => go('plan')}>What to bring</ArrowLink>}
        >
          <p>Drawing a Maine moose permit is a bucket-list moment. Tens of thousands enter the lottery each year; only a few thousand draw a tag. If you&rsquo;re one of them, Lakewood welcomes you with a once-in-a-lifetime hunt in a historic sporting camp.</p>
          <p>Hunt with one of our experienced guides, or use Lakewood as your base camp for a Zone 7 hunt. Either way, your stay is all-inclusive &mdash; meals, snacks, and lodging covered.</p>
        </SplitSection>

        <FAQ eyebrow="Moose FAQ" title="The moose hunt." items={MOOSE} />

        <ClosingBand
          title="Hunt the historic camp."
          body="Fall guided bird hunting is offered through our sister operation, Tangled Alders Guide Services. Reach out and we'll point you the right way."
          onReserve={onReserve}
          ctaLabel="Reserve your hunt"
        />
      </React.Fragment>
    );
  }

  window.HuntingPage = HuntingPage;
})();
