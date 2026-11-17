---
theme: none
title: Insury — Pitch Deck
titleTemplate: '%s'
favicon: /favicon.svg
info: Insurance claims, decided in minutes.
seoMeta:
  ogTitle: Insury — Insurance claims, decided in minutes.
  ogDescription: AI reads. Rules decide. Your team signs off.
  ogImage: /og-image.png
  twitterCard: summary_large_image
  twitterTitle: Insury — Insurance claims, decided in minutes.
  twitterDescription: AI reads. Rules decide. Your team signs off.
  twitterImage: /og-image.png
canvasWidth: 1920
aspectRatio: 16/9
colorSchema: light
fonts:
  provider: none
transition: fade
layout: cover
---

<img class="cover-bg" src="/images/cover-bg.png" alt="" />
<Blob :x="960" :y="-244" color="#0b22d2" />
<Logo class="cover-logo" />
<div class="cover-copy">
  <h1 class="t-hero">Insurance claims,<br><span class="c-primary">decided in minutes.</span></h1>
</div>
<img class="cover-shot" src="/images/product-report.png" alt="Insury report and sign-off screen" />
<div class="signoff-card cover-signoff"><img src="/images/signoff-card.png" alt="Sign-off panel" /></div>

<style>
.cover-bg {
  position: absolute;
  inset: 0;
  width: 1920px;
  height: 1080px;
  object-fit: cover;
}
.cover-logo {
  position: absolute;
  left: 120px;
  top: 120px;
  width: 275px;
}
.cover-copy {
  position: absolute;
  left: 120px;
  top: 553px;
  width: 699px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.cover-copy .t-hero {
  white-space: nowrap;
}
.cover-shot {
  position: absolute;
  left: 990px;
  top: 152px;
  width: 1437px;
  height: 929px;
  object-fit: cover;
  border-radius: 12px 0 0 0;
  box-shadow: 0 0 0 24px rgba(245, 245, 246, 0.7);
}
.cover-signoff {
  left: 1551px;
  top: 297px;
}
</style>

---
layout: deck
badge: The problem
title: "Claims handling\ndoesn't scale"
panel: white
---

<Blob :x="-197" :y="659" color="#864cce" />
<div class="problem">
  <h3 class="t-h1 c-primary problem-row">Costly manual work</h3>
  <h3 class="t-h1 c-primary problem-row">Slow decisions</h3>
  <h3 class="t-h1 c-primary problem-row">Easy to get wrong</h3>
  <h3 class="t-h1 c-primary problem-row">Open to fraud</h3>
  <h3 class="t-h1 c-primary problem-row">Hard to audit</h3>
</div>

<style>
.problem {
  position: absolute;
  inset: 80px 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
}
.problem-row {
  padding-bottom: 28px;
  border-bottom: 1px solid var(--c-border);
}
</style>

---
layout: deck
badge: The stakes
title: What it costs you
panel: white
---

<img class="stripes flip-y" style="top: -54px" src="/images/stripes-grey.png" alt="" />
<img class="stripes" style="top: 516px" src="/images/stripes-grey.png" alt="" />
<div class="stakes">
  <div class="stakes-stat">
    <div class="stakes-figure">100</div>
    <h2 class="t-h2">minutes of handling per motor claim</h2>
  </div>
  <div class="stakes-stat">
    <div class="stakes-figure">62</div>
    <h2 class="t-h2">days to close a motor claim</h2>
  </div>
  <div class="stakes-stat">
    <div class="stakes-figure">10%</div>
    <h2 class="t-h2">of claims spend lost to fraud</h2>
  </div>
  <div class="stakes-stat">
    <div class="stakes-figure">42%</div>
    <h2 class="t-h2">of disputed claims overturned on appeal</h2>
  </div>
</div>
<p class="t-body3 c-muted stakes-source">Sources: Univ. of Lausanne non-life claims benchmark, DACH insurers (standard motor claims); Insurance Europe; UK Financial Ombudsman (claims complaints upheld).</p>

<style>
.stakes {
  position: absolute;
  inset: 120px 120px 160px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  gap: 72px 80px;
}
.stakes-stat {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.stakes-figure {
  font-family: var(--f-head);
  font-size: 200px;
  line-height: 1;
  letter-spacing: -0.05em;
  color: var(--c-primary);
}
.stakes-source {
  position: absolute;
  left: 120px;
  right: 120px;
  bottom: 64px;
  font-size: 18px;
}
</style>

---
layout: deck
badge: The solution
title: "Documents in.\nDecisions out."
panel: dark
---

<Blob :x="224" :y="9" color="#864cce" />
<div class="flow">
  <header class="flow-head">
    <Badge variant="pink" size="sm">01 Read</Badge>
    <h2 class="t-h3">Messy documents</h2>
  </header>
  <header class="flow-head">
    <Badge variant="pink" size="sm">02 Extract</Badge>
    <h2 class="t-h3">Structured facts</h2>
  </header>
  <header class="flow-head">
    <Badge variant="pink" size="sm">03 Check</Badge>
    <h2 class="t-h3">Against your policy</h2>
  </header>

  <div class="docs">
    <div class="doc"><div class="doc-head"><span>Claim form</span><span class="doc-tag">PDF</span></div><i style="width: 92%" /><i style="width: 64%" /></div>
    <div class="doc"><div class="doc-head"><span>Police report</span><span class="doc-tag">Scan</span></div><i style="width: 78%" /><i style="width: 88%" /></div>
    <div class="doc"><div class="doc-head"><span>Expert appraisal</span><span class="doc-tag">PDF</span></div><i style="width: 85%" /><i style="width: 52%" /></div>
    <div class="doc"><div class="doc-head"><span>Repair invoice</span><span class="doc-tag">Photo</span></div><i style="width: 70%" /><i style="width: 90%" /></div>
    <div class="doc"><div class="doc-head"><span>Proof of payment</span><span class="doc-tag">Scan</span></div><i style="width: 94%" /><i style="width: 60%" /></div>
    <div class="doc"><div class="doc-head"><span>Registration</span><span class="doc-tag">Photo</span></div><i style="width: 66%" /><i style="width: 82%" /></div>
  </div>

  <div class="facts">
    <div class="fact"><span class="fact-key">Policy</span><span class="fact-src">Claim form</span><span class="fact-val">123456789 · Teilkasko</span></div>
    <div class="fact"><span class="fact-key">Vehicle</span><span class="fact-src">Registration</span><span class="fact-val">ME 742 BX · Škoda Octavia</span></div>
    <div class="fact"><span class="fact-key">Loss date</span><span class="fact-src">Police report</span><span class="fact-val">15 Mar 2026</span></div>
    <div class="fact"><span class="fact-key">Cause</span><span class="fact-src">Appraisal</span><span class="fact-val">Collision with a deer</span></div>
    <div class="fact"><span class="fact-key">Repair cost</span><span class="fact-src">Invoice</span><span class="fact-val">€2,184.60</span></div>
    <div class="fact"><span class="fact-key">Paid</span><span class="fact-src">Payment proof</span><span class="fact-val">€2,184.60</span></div>
  </div>

  <div class="checks">
    <div class="check"><Icon name="check" />Cover active on loss date</div>
    <div class="check"><Icon name="check" />Wildlife collision is covered</div>
    <div class="check"><Icon name="check" />Same car on every document</div>
    <div class="check"><Icon name="check" />Invoice matches payment</div>
    <div class="check"><Icon name="check" />€300 deductible applied</div>
    <div class="reco">
      <span class="t-label-sm c-primary">Recommendation</span>
      <span class="reco-amount">Pay €1,884.60</span>
      <span class="reco-why">Invoice − €300 deductible</span>
    </div>
  </div>

  <Icon name="arrow-circle" class="flow-arrow" style="grid-column: 1 / 3" />
  <Icon name="arrow-circle" class="flow-arrow" style="grid-column: 2 / 4" />

  <div class="hitl">
    <h2 class="t-h3">Human in the loop</h2>
    <p class="hitl-text">Your adjuster approves, adjusts or rejects. Nothing is paid without a person signing off.</p>
    <Badge variant="pink" size="sm">04 Sign off</Badge>
  </div>
  <Icon name="arrow-circle" class="flow-arrow-down" />
</div>

<style>
.flow {
  position: absolute;
  left: 80px;
  top: 112px;
  width: 1168px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto auto;
  gap: 32px 48px;
  color: #fff;
}
.flow-head {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.flow-arrow {
  grid-row: 2;
  justify-self: center;
  align-self: center;
  z-index: 1;
}

.docs {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 12px;
}
.doc {
  margin-top: -14px;
  padding: 16px 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 8px;
  background: var(--c-surface);
  color: var(--c-ink);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.45);
}
.doc:nth-child(1) { transform: rotate(-4deg) translateX(-8px); }
.doc:nth-child(2) { transform: rotate(3deg) translateX(14px); }
.doc:nth-child(3) { transform: rotate(-2deg) translateX(-4px); }
.doc:nth-child(4) { transform: rotate(5deg) translateX(10px); }
.doc:nth-child(5) { transform: rotate(-3deg) translateX(-12px); }
.doc:nth-child(6) { transform: rotate(2deg) translateX(6px); }
.doc-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  letter-spacing: -0.03em;
}
.doc-tag {
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 14px;
  color: var(--c-muted);
  box-shadow: inset 0 0 0 1px var(--c-border);
}
.doc i {
  display: block;
  height: 6px;
  border-radius: 3px;
  background: var(--c-border);
}

.facts {
  grid-column: 2;
  grid-row: 2;
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
  background: #fff;
  color: var(--c-ink);
}
.fact {
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: 4px;
  padding: 10px 0;
  border-bottom: 1px solid var(--c-border);
}
.fact:last-child { border-bottom: none; }
.fact-key {
  font-size: 16px;
  color: var(--c-muted);
}
.fact-src {
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 14px;
  color: var(--c-primary);
  background: var(--c-tint);
}
.fact-val {
  grid-column: 1 / -1;
  font-size: 22px;
  letter-spacing: -0.03em;
}

.checks {
  grid-column: 3;
  grid-row: 2;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: inset 0 0 0 1px rgba(212, 212, 212, 0.2);
}
.check {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 20px;
  letter-spacing: -0.03em;
}
.check :deep(svg) {
  width: 28px;
  height: 28px;
  color: #4ade80;
}
.reco {
  margin-top: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 10px;
  background: #fff;
  color: var(--c-ink);
}
.reco-amount {
  font-family: var(--f-head);
  font-size: 36px;
  letter-spacing: -0.05em;
}
.reco-why {
  font-size: 16px;
  color: var(--c-muted);
}

.hitl {
  grid-column: 1 / -1;
  grid-row: 3;
  padding: 40px 32px 28px;
  display: flex;
  align-items: center;
  gap: 32px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: inset 0 0 0 1px rgba(212, 212, 212, 0.2);
}
.hitl h2 {
  flex: none;
}
.hitl .badge {
  margin-left: auto;
}
.hitl-text {
  max-width: 440px;
  font-size: 20px;
  line-height: 1.3;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.7);
}
.flow-arrow-down {
  grid-column: 3;
  grid-row: 3;
  justify-self: center;
  align-self: start;
  margin-top: -54.5px;
  transform: rotate(90deg);
  z-index: 1;
}
</style>

---
layout: deck
badge: Why now
title: AI evaluates. Human approves.
subtitle: EU AI Act, GDPR compliant.
panel: light
---

<Blob :x="-229" :y="-320" color="#0b22d2" />
<h2 class="t-h2 act-lead">Be in control of the process and data.</h2>
<div class="act-table">
  <div class="act-head t-h3">
    <span>Requirement</span>
    <span>In Insury</span>
  </div>
  <div class="act-row t-body2">
    <span class="act-icon"><Icon name="oversight" /></span>
    <span>Human oversight</span>
    <span class="c-primary">An adjuster signs off each case</span>
  </div>
  <div class="act-row t-body2">
    <span class="act-icon"><Icon name="record" /></span>
    <span>Record-keeping</span>
    <span class="c-primary">Full audit trail of user, model and system</span>
  </div>
  <div class="act-row t-body2">
    <span class="act-icon"><Icon name="transparency" /></span>
    <span>Transparency</span>
    <span class="c-primary">Each fact links to its source page</span>
  </div>
  <div class="act-row t-body2">
    <span class="act-icon"><Icon name="accuracy" /></span>
    <span>Accuracy</span>
    <span class="c-primary">Conflicts between documents are flagged</span>
  </div>
  <div class="act-row t-body2">
    <span class="act-icon"><Icon name="privacy" /></span>
    <span>GDPR · Data residency</span>
    <span class="c-primary">Claim data stays in the EU</span>
  </div>
</div>
<p class="t-body3 c-muted act-source">Sources: EU AI Act, Art. 12–14 and Annex III; GDPR, Chapter V; insurance analyses by Holistic AI and PwC</p>

<style>
.act-lead {
  position: absolute;
  left: 120px;
  top: 80px;
  width: 1088px;
  text-align: center;
}
.act-table {
  position: absolute;
  left: 120px;
  top: 300px;
  width: 1088px;
  height: 504px;
  border: 2px solid transparent;
  border-radius: 12px;
  background:
    linear-gradient(#fff, #fff) padding-box,
    var(--g-blue) border-box;
  overflow: hidden;
}
.act-head {
  display: grid;
  grid-template-columns: 430px 1fr;
  column-gap: 24px;
  align-items: center;
  height: 98px;
  padding: 0 38px;
  background: var(--c-tint);
}
.act-row {
  display: grid;
  grid-template-columns: 48px 358px 1fr;
  column-gap: 24px;
  align-items: center;
  padding: 16px 38px;
}
.act-row + .act-row {
  border-top: 1px solid var(--c-border);
}
.act-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--c-primary);
  color: #fff;
}
.act-source {
  position: absolute;
  left: 120px;
  top: 900px;
  width: 1088px;
  text-align: center;
}
</style>

---
layout: deck
badge: Market size
title: Claims software is doubling.
subtitle: 40 million motor claims a year in Europe. We start with 11 million in DACH.
panel: blue
---

<div class="market-circle" style="left: -31px; top: 113px; width: 695px; height: 695px; background: #fff"></div>
<div class="market-circle" style="left: 72px; top: 317px; width: 491px; height: 491px; background: rgba(11, 34, 210, 0.2)"></div>
<div class="market-circle" style="left: 184px; top: 556px; width: 266px; height: 266px; background: var(--c-primary)"></div>
<Blob :x="-404" :y="10" color="#0b22d2" :opacity="1" />
<div class="market-label t-body3 c-primary" style="top: 188px">TAM · Motor claims, Europe</div>
<div class="market-value t-h1" style="top: 214px">€400M</div>
<div class="market-label t-body3 c-primary" style="top: 413px">SAM · Motor, DACH</div>
<div class="market-value t-h1" style="top: 439px">€110M</div>
<div class="market-label t-body3 c-white" style="top: 641px">SOM · 5% of DACH</div>
<div class="market-value t-h1 c-white" style="top: 667px">€5.5M</div>
<div class="market-stats">
  <div class="market-stat">
    <div class="t-title">€9.0B</div>
    <p class="t-body3">Global claims processing software by 2033, up from €4.6B.</p>
  </div>
  <div class="market-stat">
    <div class="t-title">€0.87B</div>
    <p class="t-body3">AI in insurance claims processing by 2030, up from €0.47B in 2026.</p>
  </div>
  <div class="market-stat">
    <div class="t-title">38%</div>
    <p class="t-body3">Motor’s share of European P&C insurance, the largest line.</p>
  </div>
</div>
<p class="market-sources">Sources: Market Research Intellect (Feb 2026); Research and Markets (2026); Insurance Europe; GDV; VVO.</p>
<p class="market-method t-body3">Bottom-up: motor claims per year × €10 per assessed claim</p>

<style>
.market-circle {
  position: absolute;
  border-radius: 50%;
}
.market-label,
.market-value {
  position: absolute;
  left: 317px;
  transform: translateX(-50%);
  white-space: nowrap;
}
.market-stats {
  position: absolute;
  left: 875px;
  top: 80px;
  width: 373px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  color: #fff;
}
.market-stat {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.market-sources {
  position: absolute;
  left: 875px;
  top: 875px;
  width: 373px;
  font-size: 20px;
  line-height: 1.26;
  letter-spacing: -0.03em;
  color: #fff;
}
.market-method {
  position: absolute;
  left: 80px;
  top: 922px;
  color: var(--c-surface);
}
</style>

---
layout: deck
badge: Traceability
title: "Every fact,\nsourced."
subtitle: Each value links back to the highlighted passage on the original document.
panel: outlined
---

<Blob :x="520" :y="80" :size="900" color="#0b22d2" :opacity="0.18" />
<Dots fade="up" style="left: 0; top: 407px; width: 1328px; height: 625px; opacity: 0.03" />

<div class="doc-page doc-page--back">
  <header class="doc-head"><span class="doc-org">Autohaus Brandt GmbH</span><span>Seite 1 / 2</span></header>
  <h3 class="doc-title">Rechnung R-2026-0412</h3>
  <i style="width: 88%" /><i style="width: 72%" /><i style="width: 80%" /><i style="width: 64%" />
</div>
<div class="doc-page">
  <header class="doc-head"><span class="doc-org">Polizeiinspektion Mettmann</span><span>Seite 1 / 2</span></header>
  <h3 class="doc-title">Verkehrsunfallanzeige</h3>
  <dl class="doc-meta">
    <dt>Aktenzeichen</dt><dd>VU-2026-031187</dd>
    <dt>Aufgenommen</dt><dd>PHK Brandl, 15.03.2026</dd>
  </dl>
  <section>
    <h4>1. Unfallzeit und -ort</h4>
    <p>Am <mark data-n="1">15.03.2026</mark> gegen 06:40 Uhr auf der K 6143, km 4,2, zwischen Hausen und Brück.</p>
  </section>
  <section>
    <h4>2. Beteiligtes Fahrzeug</h4>
    <p>Pkw <mark data-n="2">Škoda Octavia Combi, amtl. Kennz. ME 742 BX</mark>, Halterin Maria Huber.</p>
  </section>
  <section>
    <h4>3. Unfallhergang</h4>
    <p>Angabe der Fahrzeugführerin:<br><mark data-n="3" class="is-active">„Zusammenstoß mit einem Rehbock, der von rechts aus dem Waldstück auf die Fahrbahn lief.“</mark> Haare und Wildspuren an der Frontpartie wurden vor Ort festgestellt.</p>
  </section>
  <section>
    <h4>4. Sachschaden</h4>
    <p>Front, Motorhaube und Scheinwerfer rechts beschädigt.</p>
  </section>
  <footer class="doc-foot">
    <span class="doc-stamp">Polizei</span>
    <span class="doc-sign">Brandl, PHK</span>
  </footer>
</div>

<div class="ui-card facts-card">
  <div class="ui-card-head">Extracted data<span class="status status--pass">24 of 24 sourced</span></div>
  <div class="facts-list">
    <div class="fact-row"><span class="fact-n">1</span><span class="fact-text"><span class="fact-key">Loss date</span><span class="fact-val">15 Mar 2026</span></span><span class="src-chip"><Icon name="file" />Police report · p. 1</span></div>
    <div class="fact-row"><span class="fact-n">2</span><span class="fact-text"><span class="fact-key">Vehicle</span><span class="fact-val">ME 742 BX · Škoda Octavia</span></span><span class="src-chip"><Icon name="file" />Police report · p. 1</span></div>
    <div class="fact-row is-active"><span class="fact-n">3</span><span class="fact-text"><span class="fact-key">Cause of loss</span><span class="fact-val">Collision with a deer</span></span><span class="src-chip"><Icon name="file" />Police report · p. 1</span></div>
    <div class="fact-row"><span class="fact-n">4</span><span class="fact-text"><span class="fact-key">Repair cost</span><span class="fact-val">€2,184.60</span></span><span class="src-chip"><Icon name="file" />Invoice · p. 2</span></div>
    <div class="fact-row"><span class="fact-n">5</span><span class="fact-text"><span class="fact-key">Paid</span><span class="fact-val">€2,184.60</span></span><span class="src-chip"><Icon name="file" />Payment proof · p. 1</span></div>
    <div class="fact-row"><span class="fact-n">6</span><span class="fact-text"><span class="fact-key">Selbstbehalt</span><span class="fact-val">€300.00</span></span><span class="src-chip"><Icon name="file" />Policy · p. 3</span></div>
  </div>
</div>

<svg class="src-link" width="1328" height="1032" viewBox="0 0 1328 1032" fill="none" aria-hidden="true">
  <path d="M624 482C676 482 662 591 712 591" stroke="#0b22d2" stroke-width="2.5" stroke-dasharray="6 6" />
  <circle cx="624" cy="482" r="7" fill="#0b22d2" />
  <circle cx="712" cy="591" r="7" fill="#0b22d2" />
</svg>

<div class="src-points">
  <span class="pill pill--lg pill--tint">Page and passage for every value</span>
  <span class="pill pill--lg pill--tint">One click to the original</span>
</div>

<style>
.doc-page {
  position: absolute;
  left: 676px;
  top: 72px;
  width: 584px;
  height: 820px;
  padding: 44px 48px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(4, 13, 30, 0.08), 0 30px 70px rgba(4, 13, 30, 0.14);
  font-family: Arial, Helvetica, sans-serif;
  font-variation-settings: normal;
  font-size: 18px;
  line-height: 1.55;
  letter-spacing: 0;
  color: #2b2f36;
}
.doc-page--back {
  left: 716px;
  top: 52px;
  height: 780px;
  transform: rotate(4deg);
  opacity: 0.7;
}
.doc-head {
  display: flex;
  justify-content: space-between;
  padding-bottom: 14px;
  border-bottom: 2px solid #2b2f36;
  font-size: 14px;
  color: #6b7280;
}
.doc-org {
  font-weight: 700;
  color: #2b2f36;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.doc-page .doc-title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 0;
}
.doc-meta {
  display: grid;
  grid-template-columns: 140px 1fr;
  margin: 0;
  font-size: 15px;
}
.doc-meta dt { color: #6b7280; }
.doc-meta dd { margin: 0; }
.doc-page section {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.doc-page h4 {
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #6b7280;
}
.doc-page i {
  display: block;
  height: 8px;
  margin: 6px 0;
  border-radius: 4px;
  background: #e5e7eb;
}
.doc-page mark {
  padding: 1px 3px;
  border-radius: 3px;
  background: rgba(11, 34, 210, 0.12);
  color: inherit;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
.doc-page mark::before {
  content: attr(data-n);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 6px;
  border-radius: 50%;
  background: var(--c-primary);
  color: #fff;
  font-family: var(--f-head);
  font-size: 12px;
  font-weight: 600;
  vertical-align: 2px;
}
.doc-page mark.is-active {
  background: rgba(11, 34, 210, 0.2);
  box-shadow: 0 0 0 2px var(--c-primary);
}
.doc-foot {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.doc-stamp {
  width: 76px;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px double rgba(11, 34, 210, 0.45);
  border-radius: 50%;
  color: rgba(11, 34, 210, 0.55);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transform: rotate(-12deg);
}
.doc-sign {
  width: 200px;
  padding-top: 8px;
  border-top: 1px solid #2b2f36;
  font-size: 14px;
  color: #6b7280;
  text-align: center;
}

.facts-card {
  left: 64px;
  top: 180px;
  width: 560px;
}
.facts-list {
  display: flex;
  flex-direction: column;
  padding: 8px 0;
}
.fact-row {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 80px;
  padding: 0 28px;
  border-left: 4px solid transparent;
}
.fact-row + .fact-row {
  border-top: 1px solid #efefef;
}
.fact-row.is-active {
  border-left-color: var(--c-primary);
  background: var(--c-tint);
}
.fact-n {
  width: 28px;
  height: 28px;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--c-surface);
  color: var(--c-muted);
  font-family: var(--f-head);
  font-size: 15px;
  font-weight: 600;
}
.fact-row:nth-child(-n + 3) .fact-n {
  background: var(--c-primary);
  color: #fff;
}
.fact-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.fact-key {
  font-size: 15px;
  color: var(--c-muted);
}
.fact-val {
  font-size: 21px;
  letter-spacing: -0.03em;
}
.fact-row.is-active .src-chip {
  background: var(--c-primary);
  color: #fff;
}

.src-link {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.src-points {
  position: absolute;
  left: 64px;
  top: 944px;
  display: flex;
  gap: 16px;
}
</style>

---
layout: deck
badge: Policy check
title: "Every decision,\nexplained."
subtitle: Each check shows its reasoning and the facts behind it. Missing information is requested. The payout traces back to the invoice lines.
panel: light
---

<Blob :x="-200" :y="420" color="#864cce" :opacity="0.35" />

<div class="ui-card rules-card">
  <div class="ui-card-head">Policy rules<span class="ui-button">Engine output<Icon name="code" /></span></div>
  <div class="ui-rows">
    <div class="ui-row"><span>Kasko cover in force on the accident date</span><span class="status status--pass">Pass</span><Icon name="chevron-down" /></div>
    <div class="ui-row"><span>Covered peril</span><span class="status status--pass">Pass</span><Icon name="chevron-up" /></div>
    <div class="ui-detail">
      <p class="rule-q">Cause of loss is a peril covered by the Deckungsumfang on the policy</p>
      <p>Zusammenstoß mit Haar- oder Federwild (collision with game) is covered under Teilkasko. The police report records “Zusammenstoß mit einem Rehbock”.</p>
      <div class="rule-facts">
        <span class="rule-facts-label">Facts used</span>
        <span class="src-chip"><Icon name="file" />Cause of loss · Police report</span>
        <span class="src-chip"><Icon name="file" />Teilkasko · Policy</span>
      </div>
    </div>
    <div class="ui-row"><span>Official accident report</span><span class="status status--pass">Pass</span><Icon name="chevron-down" /></div>
    <div class="ui-row"><span>Damage established before repair</span><span class="status status--pending">Info requested</span><Icon name="chevron-up" /></div>
    <div class="ui-detail">
      <p>No photo or appraisal shows the damage before the repair began.</p>
      <div class="rule-request">
        <span class="rule-request-icon"><Icon name="send" /></span>
        <span class="rule-request-text"><strong>Requested from Maria Huber</strong>Photos of the damage before repair</span>
        <span class="rule-request-meta">Sent 24 Mar</span>
      </div>
    </div>
    <div class="ui-row"><span>No general exclusion applies</span><span class="status status--pass">Pass</span><Icon name="chevron-down" /></div>
    <div class="ui-row rule-more"><span>+ 4 more rules passed</span></div>
  </div>
</div>

<div class="ui-card pay-card">
  <div class="ui-card-head">Payout calculation</div>
  <div class="pay-lines">
    <div class="pay-line"><span class="pay-ref">L1</span><span class="pay-desc">Frontstoßstange, Ersatz inkl. Montage</span><span class="pay-amt">486.00</span></div>
    <div class="pay-line"><span class="pay-ref">L2</span><span class="pay-desc">Motorhaube, Richt- und Lackierarbeiten</span><span class="pay-amt">612.00</span></div>
    <div class="pay-line"><span class="pay-ref">L3</span><span class="pay-desc">Scheinwerfer rechts, Ersatz</span><span class="pay-amt">348.00</span></div>
    <div class="pay-line"><span class="pay-ref">L4</span><span class="pay-desc">Kühlergrill, Ersatz</span><span class="pay-amt">186.00</span></div>
    <div class="pay-line"><span class="pay-ref">L5</span><span class="pay-desc">Kotflügel vorne rechts, Instandsetzung</span><span class="pay-amt">274.80</span></div>
    <div class="pay-line"><span class="pay-ref">L6</span><span class="pay-desc">Lackierarbeiten und Arbeitslohn</span><span class="pay-amt">277.80</span></div>
  </div>
  <div class="pay-calc">
    <div class="pay-calc-row"><span>Included</span><span class="src-chip">L1–L6</span><span>€2,184.60</span></div>
    <div class="pay-calc-row is-strong"><span>Eligible base</span><span>€2,184.60</span></div>
    <div class="pay-calc-row is-muted"><span>less Selbstbehalt</span><span class="src-chip">Policy</span><span>−€300.00</span></div>
    <div class="pay-calc-row is-muted"><span>Versicherungssumme</span><span class="src-chip">Policy</span><span>€15,000.00</span></div>
    <div class="pay-calc-row is-total"><span>Recommended</span><span>€1,884.60</span></div>
    <div class="pay-ok"><Icon name="circle-check" />Every invoice line is accounted for.</div>
  </div>
</div>

<span class="rule-n" style="left: 64px; top: 319px">1</span>
<span class="rule-n" style="left: 64px; top: 668px">2</span>
<span class="rule-n" style="left: 772px; top: 505px">3</span>
<div class="rule-captions">
  <div class="rule-caption"><span class="rule-n">1</span><p class="t-body3">Reasoning and facts behind every rule</p></div>
  <div class="rule-caption"><span class="rule-n">2</span><p class="t-body3">Missing information requested</p></div>
  <div class="rule-caption"><span class="rule-n">3</span><p class="t-body3">Payout traced to invoice lines</p></div>
</div>

<style>
.rules-card {
  left: 64px;
  top: 64px;
  width: 676px;
}
.rule-q {
  font-weight: 600;
  color: var(--c-ink);
}
.rule-facts {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding-top: 4px;
}
.rule-facts-label {
  margin-right: 4px;
  font-family: var(--f-head);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-muted);
}
.rule-request {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 10px;
  background: #fff4ec;
  box-shadow: inset 0 0 0 1px #fdba8c;
  color: #9a3412;
}
.rule-request-icon {
  width: 40px;
  height: 40px;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #f97316;
  color: #fff;
}
.rule-request-icon .icon svg {
  width: 20px;
  height: 20px;
}
.rule-request-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 16px;
}
.rule-request-text strong {
  font-size: 17px;
  font-weight: 600;
  color: var(--c-ink);
}
.rule-request-meta {
  font-size: 14px;
  color: #c2410c;
}
.ui-row.rule-more {
  justify-content: center;
  font-weight: 400;
  color: var(--c-muted);
}
.rule-n {
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--g-pink);
  box-shadow: 0 0 0 4px var(--c-surface), 0 8px 24px rgba(137, 0, 203, 0.3);
  color: #fff;
  font-family: var(--f-head);
  font-size: 20px;
  font-weight: 500;
  transform: translate(-50%, -50%);
}
.rule-captions {
  position: absolute;
  left: 64px;
  top: 912px;
  width: 1200px;
  display: flex;
  gap: 40px;
}
.rule-caption {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 16px;
}
.rule-caption p {
  text-wrap: balance;
}
.rule-caption .rule-n {
  position: static;
  flex: none;
  transform: none;
  box-shadow: none;
}

.pay-card {
  left: 772px;
  top: 64px;
  width: 492px;
}
.pay-lines {
  display: flex;
  flex-direction: column;
  padding: 12px 28px;
}
.pay-line {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 48px;
  font-size: 17px;
  letter-spacing: -0.02em;
}
.pay-line + .pay-line {
  border-top: 1px solid #efefef;
}
.pay-ref {
  width: 34px;
  height: 26px;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: var(--c-tint);
  color: var(--c-primary);
  font-family: var(--f-head);
  font-size: 14px;
  font-weight: 600;
}
.pay-desc {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pay-amt {
  font-variant-numeric: tabular-nums;
}
.pay-calc {
  margin: 0 28px 28px;
  padding: 8px 22px 22px;
  border-radius: 12px;
  background: var(--c-surface);
}
.pay-calc-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 0;
  font-size: 19px;
  letter-spacing: -0.02em;
}
.pay-calc-row > :first-child {
  flex: 1;
}
.pay-calc-row .src-chip {
  height: 26px;
  font-size: 14px;
}
.pay-calc-row:first-child,
.pay-calc-row.is-total {
  padding: 14px 0;
}
.pay-calc-row:first-child {
  color: var(--c-muted);
  border-bottom: 1px solid var(--c-border);
  margin-bottom: 6px;
}
.pay-calc-row.is-strong {
  font-weight: 600;
}
.pay-calc-row.is-muted {
  color: var(--c-muted);
}
.pay-calc-row.is-total {
  margin-top: 6px;
  border-top: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  font-size: 23px;
  font-weight: 700;
}
.pay-ok {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 18px;
  padding: 12px 16px;
  border-radius: 8px;
  background: #f0fbf4;
  box-shadow: inset 0 0 0 1px #8fdcaf;
  color: #22a35a;
  font-size: 17px;
  font-weight: 600;
}
.pay-ok .icon svg {
  width: 22px;
  height: 22px;
}
</style>

---
layout: deck
badge: Fraud detection
title: "Fraud caught\nbefore payout."
subtitle: Every document is checked for tampering and every date against the claim timeline. Anything odd goes to a person.
panel: dark
---

<Blob :x="560" :y="-200" color="#864cce" :opacity="0.5" />

<div class="ui-card integrity-card">
  <div class="ui-card-head">Integrity and fraud detection<span class="ui-button">Engine output<Icon name="code" /></span></div>
  <div class="ui-rows">
    <div class="ui-row"><span>Payment amount matches the invoice total</span><span class="status status--pass">OK</span><Icon name="chevron-down" /></div>
    <div class="ui-row"><span>The claimant is the person who paid</span><span class="status status--pass">OK</span><Icon name="chevron-down" /></div>
    <div class="ui-row"><span>Payment date falls on or after the repair completion date</span><span class="status status--escalate">Escalate</span><Icon name="chevron-up" /></div>
    <div class="ui-detail">
      <p>The invoice was paid on 18.03.2026, before the repair completed on 21.03.2026.</p>
      <span class="c-primary">see full analysis →</span>
    </div>
    <div class="ui-row"><span>Timeline runs accident → inspection → repair → payment → submission</span><span class="status status--escalate">Escalate</span><Icon name="chevron-down" /></div>
    <div class="ui-row"><span>Damage pattern is consistent with the reported cause of loss</span><span class="status status--pass">OK</span><Icon name="chevron-down" /></div>
    <div class="ui-row"><span>No document shows signs of alteration</span><span class="status status--escalate">Escalate</span><Icon name="chevron-down" /></div>
    <div class="ui-row"><span>No pre-existing damage on the same parts</span><span class="status status--pass">OK</span><Icon name="chevron-down" /></div>
    <div class="ui-row"><span>No prior claim already covers this damage event</span><span class="status status--pass">OK</span><Icon name="chevron-down" /></div>
    <div class="ui-row"><span>Replacement value exceeds the salvage value</span><span class="status status--na">N/A</span><Icon name="chevron-down" /></div>
  </div>
</div>

<div class="ui-card tamper-card">
  <div class="ui-card-head">Document check<span class="status status--escalate">Altered</span></div>
  <div class="tamper-doc">
    <div class="tamper-doc-head">Überweisungsbeleg</div>
    <dl>
      <dt>Auftraggeber</dt><dd>Maria Huber</dd>
      <dt>Empfänger</dt><dd>Autohaus Brandt GmbH</dd>
      <dt>Ausführung</dt><dd><span class="tamper-date">18.03.2026</span></dd>
      <dt>Betrag</dt><dd><span class="tamper-hit">2.<b>184</b>,60 EUR</span></dd>
      <dt>Zweck</dt><dd>Rechnung R-2026-0412</dd>
    </dl>
  </div>
  <div class="tamper-lens"><span>2.<b>184</b>,60</span></div>
  <div class="tamper-finding">
    <Icon name="alert" />
    <p><strong>Amount re-typed after issue.</strong> Font and compression differ from the rest of the page.</p>
  </div>
</div>

<div class="ui-card timeline-card">
  <div class="timeline-head">
    <span class="timeline-title">Claim timeline<span class="status status--escalate">Out of order</span></span>
    <span class="timeline-expected">Expected: accident → inspection → repair → payment → submission</span>
  </div>
  <div class="timeline">
    <div class="timeline-axis"></div>
    <div class="timeline-event" style="left: 0%"><i></i><b>15.03</b><span>Accident</span></div>
    <div class="timeline-event" style="left: 22.2%"><i></i><b>17.03</b><span>Inspection</span></div>
    <div class="timeline-event is-flag" style="left: 33.3%"><i></i><b>18.03</b><span>Payment</span></div>
    <div class="timeline-event" style="left: 66.7%"><i></i><b>21.03</b><span>Repair done</span></div>
    <div class="timeline-event" style="left: 100%"><i></i><b>24.03</b><span>Submitted</span></div>
    <svg class="timeline-arc" viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true">
      <path d="M2 58C60 0 340 0 398 58" stroke="#864cce" stroke-width="2.5" stroke-dasharray="6 6" fill="none" vector-effect="non-scaling-stroke" />
    </svg>
    <span class="timeline-note">Paid 3 days before the repair was done</span>
  </div>
</div>

<style>
.integrity-card {
  left: 64px;
  top: 64px;
  width: 704px;
}
.integrity-card .ui-row {
  min-height: 50px;
  font-size: 17px;
}
.integrity-card .ui-detail {
  font-size: 16px;
}

.tamper-card {
  left: 792px;
  top: 64px;
  width: 472px;
  height: 686px;
}
.tamper-doc {
  margin: 28px 28px 0;
  padding: 24px 26px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0 0 0 1px #e5e5e5, 0 12px 30px rgba(4, 13, 30, 0.08);
  font-family: Arial, Helvetica, sans-serif;
  font-variation-settings: normal;
  color: #2b2f36;
}
.tamper-doc-head {
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 2px solid #2b2f36;
  font-size: 18px;
  font-weight: 700;
}
.tamper-doc dl {
  display: grid;
  grid-template-columns: 116px 1fr;
  row-gap: 12px;
  margin: 0;
  font-size: 16px;
}
.tamper-doc dt { color: #6b7280; }
.tamper-doc dd { margin: 0; }
.tamper-hit {
  padding: 2px 6px;
  margin-left: -6px;
  border-radius: 4px;
  outline: 2px dashed var(--c-purple);
  outline-offset: 2px;
  background: rgba(134, 76, 206, 0.12);
}
.tamper-hit b,
.tamper-lens b {
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 700;
  letter-spacing: 0.04em;
  position: relative;
  top: -1px;
}
.tamper-date {
  padding: 2px 6px;
  margin-left: -6px;
  border-radius: 4px;
  background: rgba(134, 76, 206, 0.12);
}
.tamper-lens {
  position: absolute;
  left: 250px;
  top: 384px;
  width: 172px;
  height: 172px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background:
    repeating-linear-gradient(0deg, rgba(4, 13, 30, 0.035) 0 2px, transparent 2px 6px),
    repeating-linear-gradient(90deg, rgba(4, 13, 30, 0.035) 0 2px, transparent 2px 6px),
    #fff;
  box-shadow: 0 0 0 6px var(--c-ink), 0 0 0 8px var(--c-purple), 0 20px 40px rgba(4, 13, 30, 0.3);
  font-family: Arial, Helvetica, sans-serif;
  font-variation-settings: normal;
  font-size: 36px;
  color: #2b2f36;
}
.tamper-lens::after {
  content: '';
  position: absolute;
  right: -34px;
  bottom: -34px;
  width: 52px;
  height: 14px;
  border-radius: 7px;
  background: var(--c-ink);
  transform: rotate(45deg);
}
.tamper-lens b {
  padding: 0 2px;
  background: rgba(134, 76, 206, 0.16);
  box-shadow: 0 0 0 1px rgba(134, 76, 206, 0.5);
}
.tamper-finding {
  margin: auto 28px 28px;
  display: flex;
  gap: 14px;
  padding: 16px 18px;
  border-radius: 10px;
  background: #f7f0fd;
  box-shadow: inset 0 0 0 1px #cba8ee;
  font-size: 17px;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: #5b2a99;
}
.tamper-finding .icon {
  color: var(--c-purple);
}
.tamper-finding .icon svg {
  width: 26px;
  height: 26px;
}
.tamper-finding strong {
  font-weight: 600;
  color: var(--c-ink);
}

.timeline-card {
  left: 64px;
  top: 774px;
  width: 1200px;
  height: 194px;
  flex-direction: row;
  align-items: center;
  gap: 48px;
  padding: 0 64px 0 32px;
}
.timeline-head {
  width: 340px;
  display: flex;
  flex: none;
  flex-direction: column;
  gap: 10px;
}
.timeline-title {
  display: flex;
  align-items: center;
  gap: 14px;
  font-family: var(--f-head);
  font-size: 30px;
  letter-spacing: -0.04em;
  white-space: nowrap;
}
.timeline-expected {
  font-size: 16px;
  line-height: 1.35;
  letter-spacing: -0.01em;
  color: var(--c-muted);
}
.timeline {
  position: relative;
  flex: 1;
  margin-top: 56px;
  height: 80px;
}
.timeline-axis {
  position: absolute;
  left: 0;
  right: 0;
  top: 7px;
  height: 2px;
  background: var(--c-border);
}
.timeline-event {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
  font-size: 17px;
  white-space: nowrap;
}
.timeline-event i {
  width: 16px;
  height: 16px;
  margin-bottom: 8px;
  border-radius: 50%;
  background: var(--c-primary);
  box-shadow: 0 0 0 4px #fff;
}
.timeline-event b {
  font-weight: 600;
}
.timeline-event span {
  color: var(--c-muted);
}
.timeline-event.is-flag {
  color: var(--c-purple);
}
.timeline-event.is-flag i {
  background: var(--c-purple);
  box-shadow: 0 0 0 4px #fff, 0 0 0 8px rgba(134, 76, 206, 0.25);
}
.timeline-event.is-flag span {
  color: var(--c-purple);
}
.timeline-arc {
  position: absolute;
  left: 33.3%;
  width: 33.4%;
  top: -34px;
  height: 40px;
  overflow: visible;
}
.timeline-note {
  position: absolute;
  left: 50%;
  top: -54px;
  transform: translateX(-50%);
  padding: 3px 12px;
  border-radius: 999px;
  background: #f7f0fd;
  color: var(--c-purple);
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
}
</style>

---
layout: deck
badge: Audit trail
title: Every step on record.
subtitle: Who did what and when? Every action and detail is logged for clear auditability.
panel: white
---

<Blob :x="268" :y="417" color="#864cce" />
<img class="stripes flip-y" style="top: 0" src="/images/stripes-grey.png" alt="" />
<div class="audit-event" style="top: 124px; --tone: var(--c-primary)">
  <span class="t-body2">14:05</span>
  <span class="pill pill--lg pill--primary audit-actor">User</span>
  <span class="t-body2">Claim received, documents uploaded</span>
</div>
<div class="audit-event" style="top: 260px; --tone: var(--c-purple)">
  <span class="t-body2">14:07</span>
  <span class="pill pill--lg pill--purple audit-actor">Model</span>
  <span class="t-body2">Documents read, 24 of 24 facts sourced</span>
</div>
<div class="audit-event" style="top: 396px; --tone: var(--c-ink); border-color: var(--c-muted)">
  <span class="t-body2">14:08</span>
  <span class="pill pill--lg pill--outline audit-actor">System</span>
  <span class="t-body2">Checked: 9 of 9 rules passed, 0 integrity flags</span>
</div>
<div class="audit-event" style="top: 532px; --tone: var(--c-primary)">
  <span class="t-body2">14:22</span>
  <span class="pill pill--lg pill--primary audit-actor">User</span>
  <span class="t-body2">Bob Meyer signed off as recommended: €3,900.00</span>
</div>
<div class="audit-total">
  <div class="t-h1">17 minutes</div>
  <p class="t-body3">from intake to sign-off, each step logged with its actor.</p>
</div>
<svg class="audit-line" width="78" height="672" viewBox="0 0 78 672" fill="none" aria-hidden="true">
  <defs>
    <linearGradient id="audit-line-gradient" x1="40.833" y1="664.333" x2="40.833" y2="5.333" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0B22D2" />
      <stop offset="1" stop-color="#D4D4D4" />
    </linearGradient>
  </defs>
  <circle cx="5.333" cy="5.333" r="5.333" fill="url(#audit-line-gradient)" />
  <path d="M5.333 5.333V664.333H76" stroke="url(#audit-line-gradient)" stroke-width="2" stroke-dasharray="4 4" />
  <path d="M69.97 657.97L76.33 664.33L69.97 670.69" stroke="url(#audit-line-gradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
</svg>
<span class="audit-dot" style="top: 160px; background: var(--c-primary)"></span>
<span class="audit-dot" style="top: 296px; background: var(--c-purple)"></span>
<span class="audit-dot" style="top: 432px; background: var(--c-border)"></span>
<span class="audit-dot" style="top: 568px; background: var(--c-primary)"></span>

<style>
.audit-event {
  position: absolute;
  left: 236px;
  width: 1012px;
  height: 112px;
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 0 40px;
  border: 2px solid var(--tone);
  border-radius: 12px;
  background: #fff;
  color: var(--tone);
}
.audit-actor {
  width: 135px;
}
.audit-total {
  position: absolute;
  left: 236px;
  top: 668px;
  width: 1012px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: 6px solid transparent;
  border-radius: 12px;
  background:
    linear-gradient(var(--c-ink), var(--c-ink)) padding-box,
    var(--g-pink) border-box;
  color: #fff;
  text-align: center;
}
.audit-line {
  position: absolute;
  left: 115px;
  top: 126px;
}
.audit-dot {
  position: absolute;
  left: 100px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.audit-dot::after {
  content: '';
  position: absolute;
  inset: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
}
</style>

---
layout: deck
badge: Product roadmap
title: "One pipeline.\nEvery line."
subtitle: Every claim is documents checked against a policy. So each line of insurance runs on the same pipeline.
panel: light
---

<Blob :x="244" :y="57" color="#0b22d2" />
<div class="phase phase--now" style="left: 80px; top: 275px">
  <Badge size="sm">Now · [2027]</Badge>
  <div class="phase-text">
    <h3 class="t-h3">Motor claims</h3>
    <p class="t-body3">Car damage in DACH, from a small repair bill to a full write-off.</p>
  </div>
</div>
<div class="phase" style="left: 473px; top: 195px">
  <Badge variant="pink" size="sm">Next · [2028]</Badge>
  <div class="phase-text">
    <h3 class="t-h3">Property claims</h3>
    <p class="t-body3">Homes and belongings damaged by water, storm, fire or burglary.</p>
  </div>
</div>
<div class="phase" style="left: 866px; top: 115px">
  <Badge variant="pink" size="sm">Later · [2029]</Badge>
  <div class="phase-text">
    <h3 class="t-h3">Travel claims</h3>
    <p class="t-body3">Cancelled trips, lost luggage and medical bills abroad.</p>
  </div>
</div>
<div class="phase-rows">
  <span class="t-body2">Same for every line</span>
  <div class="phase-pills phase-pills--steps">
    <span class="pill pill--lg pill--ink">Read</span>
    <Icon name="chevron-right" class="phase-step" />
    <span class="pill pill--lg pill--ink">Extract</span>
    <Icon name="chevron-right" class="phase-step" />
    <span class="pill pill--lg pill--ink">Check</span>
    <Icon name="chevron-right" class="phase-step" />
    <span class="pill pill--lg pill--ink">Sign off</span>
  </div>
  <span class="t-body2">What changes per line</span>
  <div class="phase-pills">
    <span class="pill pill--lg pill--tint">Document types</span>
    <span class="pill pill--lg pill--tint">Policy rules</span>
    <span class="pill pill--lg pill--tint">Settlement logic</span>
  </div>
</div>

<style>
.phase {
  position: absolute;
  width: 381px;
  height: 446px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 40px 48px;
  border-radius: 16px;
  background: #fff;
  color: #000;
}
.phase--now {
  background: var(--c-ink);
  color: #fff;
}
.phase-text {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.phase-rows {
  position: absolute;
  left: 80px;
  top: 812px;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 28px 40px;
}
.phase-pills {
  display: flex;
  align-items: center;
  gap: 16px;
}
.phase-pills--steps {
  gap: 8px;
}
.phase-pills .pill {
  height: 49px;
}
.phase-step {
  color: var(--c-muted);
}
.phase-step :deep(svg) {
  width: 28px;
  height: 28px;
}
</style>

---
hide: true
layout: deck
badge: Competition
title: Built to be defended.
subtitle: Insury automates the assessment and keeps the source, the record and a person’s sign-off.
panel: light
---

<Dots fade="up" style="left: 0; top: 407px; width: 1328px; height: 625px; opacity: 0.03" />
<Blob :x="135" :y="739" :size="510" color="#864cce" :opacity="0.3" :blur="236" />
<h2 class="t-h2 compare-lead"><span class="c-primary">Automation</span> with a record.</h2>
<div class="compare">
  <div class="compare-base"></div>
  <div class="compare-header"></div>
  <div class="compare-insury"></div>
  <Logo inverted class="compare-logo" />
  <span class="t-body3 compare-col-label" style="left: 674px">Manual handling</span>
  <span class="t-body3 compare-col-label" style="left: 972px">Competitor</span>
  <div class="compare-rows t-body3">
    <div class="compare-row">
      <span>Reads every document</span>
      <span class="compare-cell is-insury"><Icon name="check" />Automatically</span>
      <span class="compare-cell"><Icon name="cross" class="is-no" />By hand</span>
      <span class="compare-cell"><Icon name="cross" class="is-no" />By hand</span>
    </div>
    <div class="compare-row">
      <span>Checks every policy rule</span>
      <span class="compare-cell is-insury"><Icon name="check" />Every case</span>
      <span class="compare-cell"><Icon name="cross" class="is-no" />From memory</span>
      <span class="compare-cell"><Icon name="cross" class="is-no" />From memory</span>
    </div>
    <div class="compare-row">
      <span>Every value linked to its source</span>
      <span class="compare-cell is-insury"><Icon name="check" /></span>
      <span class="compare-cell"><Icon name="cross" class="is-no" /></span>
      <span class="compare-cell"><Icon name="cross" class="is-no" /></span>
    </div>
    <div class="compare-row">
      <span>Full audit trail</span>
      <span class="compare-cell is-insury"><Icon name="check" />User, model, system</span>
      <span class="compare-cell"><Icon name="cross" class="is-no" />Rarely recorded</span>
      <span class="compare-cell"><Icon name="cross" class="is-no" />Rarely recorded</span>
    </div>
    <div class="compare-row">
      <span>Human sign-off on every case</span>
      <span class="compare-cell is-insury"><Icon name="check" /></span>
      <span class="compare-cell"><Icon name="check" class="is-yes" /></span>
      <span class="compare-cell"><Icon name="cross" class="is-no" /></span>
    </div>
    <div class="compare-row">
      <span>All five settlement types</span>
      <span class="compare-cell is-insury"><Icon name="check" /></span>
      <span class="compare-cell"><Icon name="check" class="is-yes" /></span>
      <span class="compare-cell"><Icon name="cross" class="is-no" /></span>
    </div>
    <div class="compare-row">
      <span>Time per claim</span>
      <span class="compare-cell is-insury"><Icon name="check" />15 minutes</span>
      <span class="compare-cell"><Icon name="cross" class="is-no" />4 hours</span>
      <span class="compare-cell"><Icon name="cross" class="is-no" />4 hours</span>
    </div>
  </div>
</div>

<style>
.compare-lead {
  position: absolute;
  left: 80px;
  top: 65px;
  width: 1168px;
  text-align: right;
}
.compare {
  position: absolute;
  left: 80px;
  top: 181px;
  width: 1168px;
  height: 771px;
  filter: drop-shadow(0 0 40px rgba(4, 13, 30, 0.15));
}
.compare-base {
  position: absolute;
  left: 0;
  top: 20px;
  width: 1168px;
  height: 750px;
  border: 1px solid var(--c-border);
  border-radius: 12px;
  background: #fff;
}
.compare-header {
  position: absolute;
  left: 1px;
  top: 21px;
  width: 1166px;
  height: 89px;
  border-radius: 11px 11px 0 0;
  background: var(--c-surface);
}
.compare-insury {
  position: absolute;
  left: 352px;
  top: 0;
  width: 287px;
  height: 771px;
  border-radius: 12px 12px 0 0;
  background: var(--c-primary);
}
.compare-logo {
  position: absolute;
  left: 387px;
  top: 38px;
  width: 178px;
}
.compare-col-label {
  position: absolute;
  top: 51px;
}
.compare-rows {
  position: absolute;
  left: 0;
  top: 110px;
  width: 1168px;
}
.compare-row {
  display: grid;
  grid-template-columns: 320px repeat(3, 229px);
  column-gap: 40px;
  align-items: center;
  padding: 30px 20px 27px;
  border-bottom: 1px solid var(--c-border);
}
.compare-row:last-child {
  border-bottom: 0;
  padding-bottom: 30px;
}
.compare-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
  color: var(--c-muted);
}
.compare-cell.is-insury {
  color: #fff;
  font-weight: 600;
}
.compare-cell .is-no { color: var(--c-orange); }
.compare-cell .is-yes { color: var(--c-green); }
</style>

---
hide: true
layout: deck
badge: Business model
title: Paid per assessed claim.
subtitle: Revenue grows with claim volume, not with seats.
panel: blue
---

<Blob :x="456" :y="-669" :size="1243" color="#fff" :opacity="1" :blur="574" />
<div class="formula">
  <div class="formula-card">
    <div class="t-title">1</div>
    <p class="t-body2">Insurer</p>
  </div>
  <div class="formula-card">
    <div class="t-title">9k</div>
    <p class="t-body2">Claims per year</p>
  </div>
  <div class="formula-card formula-card--accent">
    <div class="t-title">€x</div>
    <p class="t-body2">Per assessed claim</p>
  </div>
  <div class="formula-card">
    <div class="t-title">€x</div>
    <p class="t-body2 c-muted">Platform per year</p>
  </div>
</div>
<span class="formula-op" style="left: 351px"><Icon name="equals" /></span>
<span class="formula-op" style="left: 626px"><Icon name="times" /></span>
<span class="formula-op" style="left: 901px"><Icon name="plus" /></span>
<div class="unit-economics">
  <div class="unit-metrics">
    <div class="unit-metric">
      <div class="t-h1">xxx %</div>
      <div>
        <h3 class="t-h3">Margin</h3>
        <p class="t-body3 unit-note">gross margin</p>
      </div>
    </div>
    <div class="unit-metric">
      <div class="t-h1">€xxx</div>
      <div>
        <h3 class="t-h3">CAC</h3>
        <p class="t-body3 unit-note">per insurer</p>
      </div>
    </div>
    <div class="unit-metric">
      <div class="t-h1">€xxx</div>
      <div>
        <h3 class="t-h3">LTV</h3>
        <p class="t-body3 unit-note">per insurer</p>
      </div>
    </div>
  </div>
  <p class="t-body3 unit-footnote">The platform fee covers policy rule setup, core system integration and audit trail retention. Each assessed case adds a usage fee.</p>
</div>

<style>
.formula {
  position: absolute;
  left: 120px;
  top: 120px;
  width: 1088px;
  display: flex;
  gap: 12px;
}
.formula-card {
  width: 263px;
  height: 470px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 64px 32px 40px;
  border-radius: 12px;
  background: #fff;
  color: var(--c-primary);
  text-align: center;
}
.formula-card--accent {
  background: var(--g-pink);
  color: #fff;
}
.formula-op {
  position: absolute;
  top: 317px;
  width: 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--c-primary);
  color: #fff;
}
.unit-economics {
  position: absolute;
  left: 120px;
  top: 656px;
  width: 1088px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  color: #fff;
  text-align: center;
}
.unit-metrics {
  display: flex;
  justify-content: center;
  gap: 64px;
}
.unit-metric {
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #fff;
}
.unit-note {
  opacity: 0.4;
}
.unit-footnote {
  opacity: 0.6;
}
</style>

---
hide: true
layout: deck
badge: Financial projections
title: Five-year outlook.
subtitle: Revenue scales with assessed claims. [One line on what drives the plan.]
panel: light
---

<Blob :x="-263" :y="-251" :size="669" color="#0b22d2" :opacity="0.3" :blur="309" />
<h2 class="t-h2 outlook-lead"><span class="c-primary">Every claim</span> adds revenue.</h2>
<div class="outlook">
  <div class="outlook-cards">
    <div class="outlook-card">
      <Badge variant="pink" size="sm">Annual revenue</Badge>
      <div class="outlook-rows">
        <div class="outlook-row"><span class="t-h3">2027</span><span class="t-h2 c-primary">€xxx</span></div>
        <div class="outlook-row"><span class="t-h3">2028</span><span class="t-h2 c-primary">€xxx</span></div>
        <div class="outlook-row"><span class="t-h3">2029</span><span class="t-h2 c-primary">€xxx</span></div>
        <div class="outlook-row"><span class="t-h3">2030</span><span class="t-h2 c-primary">€xxx</span></div>
        <div class="outlook-row"><span class="t-h3">2031</span><span class="t-h2 c-primary">€xxx</span></div>
      </div>
    </div>
    <div class="outlook-card">
      <Badge variant="pink" size="sm">Recurring revenue (platform fees)</Badge>
      <div class="outlook-rows">
        <div class="outlook-row"><span class="t-h3">2027</span><span class="t-h2 c-primary">€xxx</span></div>
        <div class="outlook-row"><span class="t-h3">2028</span><span class="t-h2 c-primary">€xxx</span></div>
        <div class="outlook-row"><span class="t-h3">2029</span><span class="t-h2 c-primary">€xxx</span></div>
        <div class="outlook-row"><span class="t-h3">2030</span><span class="t-h2 c-primary">€xxx</span></div>
        <div class="outlook-row"><span class="t-h3">2031</span><span class="t-h2 c-primary">€xxx</span></div>
      </div>
    </div>
  </div>
  <div class="outlook-kpis">
    <div class="outlook-kpi"><p class="t-body3">Insurers live</p><span class="t-h3">3</span></div>
    <div class="outlook-kpi"><p class="t-body3">Claims per year</p><span class="t-h3">16k</span></div>
    <div class="outlook-kpi"><p class="t-body3">Fee per claim</p><span class="t-h3">€1</span></div>
    <div class="outlook-kpi"><p class="t-body3">Break-even</p><span class="t-h3">2029</span></div>
  </div>
</div>

<style>
.outlook-lead {
  position: absolute;
  left: 120px;
  top: 80px;
  width: 1088px;
  text-align: right;
}
.outlook {
  position: absolute;
  left: 120px;
  top: 256px;
  width: 1088px;
  display: flex;
  flex-direction: column;
  gap: 80px;
}
.outlook-cards {
  display: flex;
  gap: 24px;
}
.outlook-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
  border: 1px solid var(--c-border);
  border-radius: 12px;
  background: #fff;
}
.outlook-rows {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.outlook-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.outlook-kpis {
  display: flex;
  gap: 40px;
}
.outlook-kpi {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--c-ink);
}
.outlook-kpi p {
  opacity: 0.4;
}
</style>

---
hide: true
layout: deck
badge: Sales approach
title: Direct and via partners.
subtitle: We sell to heads of claims at mid-size insurers in DACH, directly and through core system partners.
panel: light
---

<Dots style="left: 0; top: 0; width: 1328px; height: 625px; opacity: 0.03" />
<Blob :x="668" :y="590" :size="669" color="#864cce" :opacity="0.3" :blur="309" />
<div class="channel-tab t-body2" style="left: 384px">Mid-size insurers</div>
<div class="channel-tab t-body2" style="left: 816px">Core system partners</div>
<div class="channel" style="top: 203px">
  <div class="channel-tag t-body2">Direct sales</div>
  <p class="t-body2" style="left: 302px">Direct to heads of claims at mid-size insurers</p>
  <p class="t-body2" style="left: 734px">[How partners are approached]</p>
</div>
<div class="channel" style="top: 384px">
  <div class="channel-tag t-body2">Pilots</div>
  <p class="t-body2" style="left: 302px">[Pilot offer: scope, duration, price]</p>
  <p class="t-body2" style="left: 734px">[Joint pilots with a partner’s customers]</p>
</div>
<div class="channel" style="top: 565px">
  <div class="channel-tag t-body2">Partnerships</div>
  <p class="t-body2" style="left: 302px">[Insurer associations, industry events]</p>
  <p class="t-body2" style="left: 734px">Integration into core claims systems, resold or recommended by the partner</p>
</div>
<div class="channel" style="top: 746px">
  <div class="channel-tag t-body2">Network</div>
  <p class="t-body2" style="left: 302px">[Referrals from live insurers]</p>
  <p class="t-body2" style="left: 734px">[Referrals between partners]</p>
</div>

<style>
.channel-tab {
  position: absolute;
  top: 129px;
  width: 372px;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--c-ink);
  border-radius: 12px 12px 0 0;
  background: var(--c-surface);
}
.channel {
  position: absolute;
  left: 82px;
  width: 1166px;
  height: 157px;
}
.channel::before {
  content: '';
  position: absolute;
  left: 95px;
  top: 0;
  width: 1071px;
  height: 157px;
  border-radius: 12px;
  background: var(--c-ink);
}
.channel p {
  position: absolute;
  top: 0;
  width: 372px;
  height: 157px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
}
.channel-tag {
  position: absolute;
  left: 0;
  top: 40px;
  width: 222px;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--g-pink);
  color: #fff;
}
</style>

---
hide: true
layout: deck
badge: Traction
title: Built and running.
subtitle: The full pipeline works today, from document bundle to recommendation.
panel: none
---

<div class="traction">
  <div class="traction-row">
    <div class="traction-card traction-card--blue">
      <div class="traction-figure">11</div>
      <p class="t-body1">Steps automated, from document bundle to recommendation</p>
    </div>
    <div class="traction-card">
      <img class="traction-stripes flip-xy" style="top: 0; height: 379px" src="/images/stripes-card.png" alt="" />
      <div class="traction-figure c-primary">xxx</div>
      <p class="t-body1 c-muted">Pilot insurers signed or in talks</p>
    </div>
  </div>
  <div class="traction-row">
    <div class="traction-card">
      <img class="traction-stripes flip-x" style="top: 29px; height: 370px" src="/images/stripes-card.png" alt="" />
      <div class="traction-figure c-primary">xxx</div>
      <p class="t-body1 c-muted">Claims assessed to date</p>
    </div>
    <div class="traction-card">
      <img class="traction-stripes flip-x" style="top: 29px; height: 370px" src="/images/stripes-card.png" alt="" />
      <div class="traction-figure c-primary">xxx</div>
      <p class="t-body1 c-muted">Minutes per case, vs [__] manually</p>
    </div>
  </div>
  <div class="traction-row traction-row--proof">
    <div class="traction-card">
      <div class="traction-pills">
        <span class="pill pill--lg pill--outline">100% of facts traceable</span>
        <span class="pill pill--lg pill--outline">0 claims decided without a person</span>
        <span class="pill pill--lg pill--outline">Five settlement types</span>
      </div>
    </div>
  </div>
</div>

<style>
.traction {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.traction-row {
  height: 399px;
  display: flex;
  gap: 12px;
}
.traction-row--proof {
  flex: 1;
  height: auto;
}
.traction-card {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 0 40px;
  overflow: hidden;
  border: 1px solid var(--c-border);
  border-radius: 16px;
  background: #fff;
  text-align: center;
}
.traction-card--blue {
  background: var(--c-primary);
  color: #fff;
}
.traction-card > :not(img) {
  position: relative;
}
.traction-stripes {
  position: absolute;
  left: 0;
  width: 658px;
  object-fit: cover;
}
.traction-figure {
  font-family: var(--f-head);
  font-size: 140px;
  line-height: 1;
  letter-spacing: -0.05em;
}
.traction-pills {
  display: flex;
  gap: 16px;
}
.traction-pills .pill {
  height: 49px;
}
</style>

---
hide: true
layout: deck
badge: Testimonial
title: In their words.
subtitle: What a pilot insurer says after working with Insury.
panel: light
---

<div class="quote">
  <Icon name="quote" class="c-primary" />
  <div class="quote-text">
    <p class="t-title">Quote from a pilot insurer’s head of claims, in their words.</p>
    <p class="t-h2 c-primary">The one line that matters most.”</p>
  </div>
</div>
<p class="t-body2 c-muted quote-source">[Name Role xyz]</p>

<style>
.quote {
  position: absolute;
  left: 120px;
  top: 120px;
  width: 1088px;
  display: flex;
  gap: 40px;
}
.quote-text {
  width: 952px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.quote-source {
  position: absolute;
  right: 120px;
  bottom: 120px;
}
</style>

---
layout: deck
badge: Team
title: Insurance meets product.
subtitle: Claims expertise and AI product experience in one team.
panel: light
---

<div class="team">
  <div class="team-card">
    <img class="team-photo" src="/images/team/sebastian-hermans.webp" alt="Sebastian Hermans" />
    <div class="team-name">
      <h3 class="t-h3">Sebastian Hermans</h3>
      <span class="t-label-sm c-primary">[CEO]</span>
      <p class="team-bio t-body3 c-muted">Managed venture studios. Formerly at Amazon.</p>
    </div>
  </div>
  <div class="team-card">
    <img class="team-photo" src="/images/team/henri-toivar.webp" alt="Henri Toivar" />
    <div class="team-name">
      <h3 class="t-h3">Henri Toivar</h3>
      <span class="t-label-sm c-primary">[Senior Developer]</span>
      <p class="team-bio t-body3 c-muted">13+ years developing software and building enterprise solutions.</p>
    </div>
  </div>
  <div class="team-card">
    <img class="team-photo" src="/images/team/marek-fraczyk.webp" alt="Marek Fraczyk" />
    <div class="team-name">
      <h3 class="t-h3">Marek Fraczyk</h3>
      <span class="t-label-sm c-primary">[Senior Developer]</span>
      <p class="team-bio t-body3 c-muted">13+ years developing software and building enterprise solutions.</p>
    </div>
  </div>
  <div class="team-card">
    <img class="team-photo" src="/images/team/sebastian-becker.webp" alt="Sebastian Becker" />
    <div class="team-name">
      <h3 class="t-h3">Sebastian Becker</h3>
      <span class="t-label-sm c-primary">[Senior Designer]</span>
      <p class="team-bio t-body3 c-muted">Extensive experience in product design.</p>
    </div>
  </div>
</div>

<style>
.team {
  position: absolute;
  inset: 80px;
  display: grid;
  grid-template-columns: repeat(2, 578px);
  grid-template-rows: repeat(2, 436px);
  column-gap: 12px;
}
.team-card {
  display: flex;
  gap: 40px;
  padding: 32px 24px;
  border-radius: 12px;
  background: #fff;
}
.team-photo {
  width: 233px;
  height: 372px;
  flex: none;
  object-fit: cover;
  background: var(--c-border);
}
.team-name {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 46px;
  color: #000;
}
.team-bio {
  margin-top: 16px;
}
</style>

---
hide: true
layout: deck
badge: The ask
title: From pilot to live insurers.
subtitle: We are raising a seed round to take Insury from pilots to live insurers.
panel: dark
---

<Blob :x="265" :y="-19" color="#a17ecc" />
<div class="terms">
  <div class="term"><Badge variant="pink" size="sm">Seed investment</Badge><span class="t-h2">€xxx</span></div>
  <div class="term"><Badge variant="pink" size="sm">Type</Badge><span class="t-h2">Equity or SAFE</span></div>
  <div class="term"><Badge variant="pink" size="sm">Equity amount</Badge><span class="t-h2">xxx%</span></div>
  <div class="term"><Badge variant="pink" size="sm">Runway</Badge><span class="t-h2">xx months</span></div>
  <div class="term"><Badge variant="pink" size="sm">Pre-money valuation</Badge><span class="t-h2">€xxx</span></div>
  <div class="term"><Badge variant="pink" size="sm">Post-money valuation</Badge><span class="t-h2">€xxx</span></div>
</div>
<div class="plan">
  <div class="plan-col" style="width: 354px">
    <h3 class="t-h3">Use of funds</h3>
    <ul class="plan-list t-body3">
      <li><span class="pill pill--sm pill--purple">40 %</span>Product and AI</li>
      <li><span class="pill pill--sm pill--purple">40 %</span>Pilots and sales</li>
      <li><span class="pill pill--sm pill--purple">20 %</span>Compliance and security</li>
    </ul>
  </div>
  <div class="plan-col" style="width: 354px">
    <h3 class="t-h3">Milestones</h3>
    <ul class="plan-list t-body3">
      <li><span class="pill pill--sm pill--purple">33</span>paying insurers live</li>
      <li><span class="pill pill--sm pill--purple">40</span>claims assessed per month</li>
    </ul>
  </div>
  <div class="plan-col" style="width: 296px">
    <h3 class="t-h3">KPIs</h3>
    <ul class="plan-list t-body3">
      <li><span class="pill pill--sm pill--violet">33</span>Lorem Ipsum</li>
      <li><span class="pill pill--sm pill--violet">40</span>Lorem Ipsum Dolor</li>
    </ul>
  </div>
</div>

<style>
.terms {
  position: absolute;
  left: 120px;
  top: 80px;
  width: 1088px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 186px;
  gap: 12px;
}
.term {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 24px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: inset 0 0 0 1px rgba(212, 212, 212, 0.2);
  color: #fff;
}
.plan {
  position: absolute;
  left: 120px;
  top: 757px;
  width: 1088px;
  display: flex;
  gap: 42px;
  color: #fff;
}
.plan-col {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.plan-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.plan-list li {
  display: flex;
  align-items: center;
  gap: 18px;
  white-space: nowrap;
}
</style>
