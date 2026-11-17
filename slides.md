---
theme: none
title: Insury — Pitch Deck
info: AI claims. Human decisions. Seed round pitch deck, recreated from Figma.
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
  <h1 class="t-hero">AI claims.<br><span class="c-primary">Human decisions.</span></h1>
  <p class="t-body2">Insury reads each document, checks the policy and calculates the payout. Adjusters make the call, and the audit trail records each step.</p>
  <p class="t-body3 c-primary">Seed round · [November 2026]</p>
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
title: Claims, read by hand.
subtitle: Adjusters apply rules from memory and leave no record of why.
subtitleTone: ink
panel: white
---

<Blob :x="-197" :y="659" color="#864cce" />
<div class="problem">
  <div class="problem-row">
    <div class="t-title c-primary">6</div>
    <div class="problem-text">
      <h3 class="t-h3">Documents per case</h3>
      <p class="t-body3 c-muted">Claim form, police report, expert appraisal, repair invoice, proof of payment, registration. An adjuster reads and cross-checks each one.</p>
    </div>
  </div>
  <div class="problem-row">
    <div class="t-title c-primary">By hand</div>
    <div class="problem-text">
      <h3 class="t-h3">Rules applied from memory</h3>
      <p class="t-body3 c-muted">Adjusters check cover on the loss date, deductible, sum insured and exclusions by hand, case by case.</p>
    </div>
  </div>
  <div class="problem-row">
    <div class="t-title c-primary">No trail</div>
    <div class="problem-text">
      <h3 class="t-h3">Decisions without a trail</h3>
      <p class="t-body3 c-muted">Few files record why an amount was paid in a form an auditor, a regulator or a court can follow.</p>
    </div>
  </div>
</div>

<style>
.problem {
  position: absolute;
  inset: 80px 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 64px;
}
.problem-row {
  display: flex;
  justify-content: space-between;
  gap: 240px;
  padding-bottom: 64px;
  border-bottom: 1px solid var(--c-border);
}
.problem-text {
  width: 520px;
  flex: none;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>

---
layout: deck
badge: The stakes
title: Claims are the biggest cost.
subtitle: Faster, more accurate claims handling goes straight to the bottom line.
panel: white
---

<img class="stripes flip-y" style="top: -54px" src="/images/stripes-grey.png" alt="" />
<img class="stripes" style="top: 516px" src="/images/stripes-grey.png" alt="" />
<div class="stakes">
  <div class="stakes-figure">60%</div>
  <h2 class="t-h2">...of each motor premium goes to claims.</h2>
</div>

<style>
.stakes {
  position: absolute;
  inset: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
}
.stakes-figure {
  font-family: var(--f-head);
  font-size: 380px;
  line-height: 1;
  letter-spacing: -0.05em;
  color: var(--c-primary);
}
</style>

---
layout: deck
badge: The solution
title: "From inbox\nto sign-off."
subtitle: Insury runs eleven steps. The adjuster takes the last one.
panel: dark
---

<Blob :x="224" :y="9" color="#864cce" />
<div class="steps">
  <div class="step">
    <div class="step-top">
      <Badge variant="pink" size="sm">01 Read</Badge>
      <h2 class="t-h2">Every page, understood.</h2>
    </div>
    <p class="t-body3">Insury splits bundled files, classifies each document, then extracts and validates the facts that matter.</p>
  </div>
  <div class="step">
    <div class="step-top">
      <Badge variant="pink" size="sm">02 Check</Badge>
      <h2 class="t-h2">Every rule, applied.</h2>
    </div>
    <p class="t-body3">Insury pulls the policy as of the loss date, tests each rule and runs integrity checks.</p>
  </div>
  <div class="step step--active">
    <div class="step-top">
      <Badge variant="pink" size="sm">03 Decide</Badge>
      <h2 class="t-h2">Every decision, signed.</h2>
    </div>
    <p class="t-body3">Insury calculates the payout. An adjuster approves, adjusts, rejects or asks for documents.</p>
  </div>
</div>
<Icon name="arrow-circle" class="abs" style="left: 440px; top: 359px" />
<Icon name="arrow-circle" class="abs" style="left: 808px; top: 359px" />
<div class="step-stats t-body2">
  <div class="step-stat"><span class="pill pill--count pill--purple">11</span>Automated steps</div>
  <div class="step-stat"><span class="pill pill--count pill--purple">5</span>Settlement types</div>
  <div class="step-stat"><span class="pill pill--count pill--purple">1</span>Human sign-off</div>
</div>

<style>
.steps {
  position: absolute;
  left: 120px;
  top: 120px;
  width: 1088px;
  height: 586px;
  display: flex;
  gap: 12px;
}
.step {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px 24px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: inset 0 0 0 1px rgba(212, 212, 212, 0.2);
  color: #fff;
}
.step--active {
  background: #fff;
  box-shadow: none;
  color: #000;
}
.step-top {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.step-stats {
  position: absolute;
  left: 120px;
  top: 869px;
  width: 1088px;
  display: flex;
  justify-content: center;
  gap: 64px;
  color: #fff;
}
.step-stat {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>

---
layout: deck
badge: Why now
title: AI may assess. It may not decide alone.
subtitle: The EU AI Act puts human oversight, logging and transparency at the centre of high-risk AI.
panel: light
---

<Blob :x="-229" :y="-320" color="#0b22d2" />
<h2 class="t-h2 act-lead">Insurers hold claims automation to that bar. Black-box tools fail it. Insury builds it in.</h2>
<div class="act-table">
  <div class="act-head t-h3">
    <span>AI Act requirement</span>
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
</div>
<p class="t-body3 c-muted act-source">Sources: EU AI Act, Art. 12–14 and Annex III; insurance analyses by Holistic AI and PwC</p>

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
  top: 332px;
  width: 1088px;
  height: 455px;
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
  padding: 20px 38px;
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
  top: 923px;
  width: 1088px;
  text-align: center;
}
</style>

---
layout: deck
badge: Market size
title: Claims software is doubling.
subtitle: Motor is the largest line in European P&C insurance. Our beachhead.
panel: blue
---

<div class="market-circle" style="left: -31px; top: 113px; width: 695px; height: 695px; background: #fff"></div>
<div class="market-circle" style="left: 72px; top: 317px; width: 491px; height: 491px; background: rgba(11, 34, 210, 0.2)"></div>
<div class="market-circle" style="left: 184px; top: 556px; width: 266px; height: 266px; background: var(--c-primary)"></div>
<Blob :x="-404" :y="10" color="#0b22d2" :opacity="1" />
<div class="market-label t-body3 c-primary" style="left: 176px; top: 188px; width: 281px">TAM · Motor claims, Europe</div>
<div class="market-value t-h1" style="left: 236px; top: 214px">€xxx</div>
<div class="market-label t-body3 c-primary" style="left: 219px; top: 413px; width: 197px">SAM · Motor, DACH</div>
<div class="market-value t-h1" style="left: 237px; top: 439px">€xxx</div>
<div class="market-label t-body3 c-white" style="left: 298px; top: 641px; width: 52px">SOM</div>
<div class="market-value t-h1 c-white" style="left: 244px; top: 667px">€xxx</div>
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
<p class="market-sources">Sources: Market Research Intellect (Feb 2026); Research and Markets (2026); Insurance Europe.</p>
<p class="market-method t-body3">Bottom-up: [__ million claims] × [€__ per claim]</p>

<style>
.market-circle {
  position: absolute;
  border-radius: 50%;
}
.market-label {
  position: absolute;
  text-align: center;
  white-space: nowrap;
}
.market-value {
  position: absolute;
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
badge: Product
title: "One case.\nOne screen."
subtitle: The model reads and checks. A person makes the call.
panel: outlined
---

<img class="product-desktop" src="/images/product-desktop.png" alt="Insury case screen" />
<div class="product-fade"></div>
<div class="product-points">
  <div class="product-point">
    <h2 class="t-h2">Every fact, sourced.</h2>
    <p class="t-body2 c-muted">Each value links to the page it came from.</p>
  </div>
  <div class="product-point">
    <h2 class="t-h2">Every rule, checked.</h2>
    <p class="t-body2 c-muted">9 of 9 policy rules passed, 0 integrity flags.</p>
  </div>
  <div class="product-point">
    <h2 class="t-h2">A human decides.</h2>
    <p class="t-body2 c-muted">The adjuster approves, adjusts, rejects or asks for documents.</p>
  </div>
</div>
<div class="signoff-card" style="left: 774px; top: 193px"><img src="/images/signoff-card.png" alt="Sign-off panel" /></div>

<style>
.product-desktop {
  position: absolute;
  left: 456px;
  top: 343px;
  width: 1092px;
  height: 932px;
}
.product-fade {
  position: absolute;
  left: 456px;
  top: 283px;
  width: 872px;
  height: 749px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #fff 79%);
}
.product-points {
  position: absolute;
  left: 120px;
  top: 242px;
  width: 415px;
  display: flex;
  flex-direction: column;
  gap: 64px;
}
.product-point {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>

---
layout: deck
badge: Audit trail
title: Every step on record.
subtitle: AI assesses the claim. An adjuster decides it.
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
  <span class="t-body2">14:32</span>
  <span class="pill pill--lg pill--primary audit-actor">User</span>
  <span class="t-body2">Bob Meyer signed off as recommended: €3,900.00</span>
</div>
<div class="audit-total">
  <div class="t-h1">27 minutes</div>
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
title: Motor first. Every line next.
subtitle: The pipeline is line-agnostic. A new line means new rule sets on the same pipeline.
panel: light
---

<Blob :x="244" :y="57" color="#0b22d2" />
<div class="phase phase--now" style="left: 80px; top: 275px">
  <Badge size="sm">Now · [2027]</Badge>
  <div class="phase-text">
    <h3 class="t-h3">Motor own-damage, DACH</h3>
    <p class="t-body3">All five settlement types: repair invoice, notional, self-repair, total loss, salvage sale.</p>
  </div>
</div>
<div class="phase" style="left: 473px; top: 195px">
  <Badge variant="pink" size="sm">Next · [20__]</Badge>
  <div class="phase-text">
    <h3 class="t-h3">All motor lines</h3>
    <p class="t-body3">Third-party liability and fleet, on the same pipeline with new rule sets.</p>
  </div>
</div>
<div class="phase" style="left: 866px; top: 115px">
  <Badge variant="pink" size="sm">Later · [20__]</Badge>
  <div class="phase-text">
    <h3 class="t-h3">Property and household</h3>
    <p class="t-body3">Document-heavy claims, same read, check and sign-off logic.</p>
  </div>
</div>
<div class="phase-changes">
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
.phase-changes {
  position: absolute;
  left: 244px;
  top: 920px;
  width: 1004px;
  display: flex;
  align-items: center;
  gap: 40px;
}
.phase-pills {
  display: flex;
  gap: 16px;
}
.phase-pills .pill {
  height: 49px;
}
</style>

---
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
      <span class="compare-cell is-insury"><Icon name="check" />30 min</span>
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
    <div class="team-photo"></div>
    <div class="team-info">
      <div class="team-name">
        <h3 class="t-h3">Lorem Ipsum</h3>
        <span class="t-label-sm c-primary">[Founder & CEO]</span>
      </div>
      <p class="t-body3 c-muted">[Years in claims, former employer]</p>
    </div>
  </div>
  <div class="team-card">
    <div class="team-photo"></div>
    <div class="team-info">
      <div class="team-name">
        <h3 class="t-h3">Lorem Ipsum</h3>
        <span class="t-label-sm c-primary">[Founder & CEO]</span>
      </div>
      <p class="t-body3 c-muted">[Years in claims, former employer]</p>
    </div>
  </div>
  <div class="team-card">
    <div class="team-photo"></div>
    <div class="team-info">
      <div class="team-name">
        <h3 class="t-h3">Lorem Ipsum</h3>
        <span class="t-label-sm c-primary">[Founder & CEO]</span>
      </div>
      <p class="t-body3 c-muted">[Years in claims, former employer]</p>
    </div>
  </div>
  <div class="team-card">
    <div class="team-photo"></div>
    <div class="team-info">
      <div class="team-name">
        <h3 class="t-h3">Lorem Ipsum</h3>
        <span class="t-label-sm c-primary">[Founder & CEO]</span>
      </div>
      <p class="t-body3 c-muted">[Years in claims, former employer]</p>
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
  background: var(--c-border);
}
.team-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 46px;
}
.team-name {
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #000;
}
</style>

---
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
