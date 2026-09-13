# Senior Software Engineer Portfolio Rebuild

## Objective

Rebuild `https://blasanka.github.io/` as a professional, evidence-led portfolio for Senior Software Engineer and Senior Mobile/Flutter Engineer applications in Germany, Australia, and Canada.

The finished site must communicate seniority within the first screen, prove engineering depth through concise case studies, work well for recruiters scanning quickly, and remain credible to engineering managers who read in detail. It must present one consistent global professional identity while allowing country-specific resume downloads and application details.

The site is not a personal link directory, an animated résumé, or a catalogue of every technology ever used. It is a focused hiring asset.

## Starting point and reason for change

The current portfolio is a single-screen 2018 page that identifies Asanka as a “Full Stack Developer” and foregrounds “100% Geek | Blogger | Youtube Creator,” a personal portrait, social-link modals, an old portfolio, and a motivational quotation. It does not show current seniority, recent work, project outcomes, architecture decisions, leadership, or cross-platform/connected-device specialization.^1

The public repository contains six commits and shows no maintenance after November 2018. Its main page is plain HTML and CSS, with an empty `script.js`, continuous animation, fixed sizing and floats, a single narrow breakpoint, inaccessible link-like modal controls, invalid/mismatched markup, limited metadata, and a legacy Universal Analytics identifier.^2 Standard Universal Analytics stopped processing new data in July 2023, so that integration should be removed rather than carried forward.^3

The linked `/my_resume/` route is a release-blocking problem. It still presents an undergraduate/early-career profile, stale education and project information, an undifferentiated skill inventory, and public personal contact details. Replace or redirect it before the new homepage is treated as complete.^4 Do not copy contact details from that page into the new site; use only details explicitly confirmed for publication.

## Product positioning

### Primary positioning

Use this as the core narrative:

> Senior Software Engineer building reliable cross-platform products for mobile, desktop, and connected devices.

Support it with the following verified or owner-confirmed themes:

- Flutter and Dart across Android, iOS, and Windows.
- Native Android/iOS integration and platform-channel work.
- Bluetooth Low Energy, NFC, USB/serial, device connectivity, and real-time data acquisition.
- Healthcare software and connected medical devices.
- Clean architecture, state management, testing, CI/CD, release ownership, and maintainability.
- Technical decision-making, code review, mentoring, and cross-functional delivery.
- Broader background in FinTech/digital payments, offline-first software, APIs/backends, and applied AI, where verifiable and relevant.

The public GitHub profile already uses much of this positioning and provides a better factual starting point than the current portfolio.^5 Public LinkedIn search metadata also corroborates the Senior Software Engineer, Flutter/native Android, 8+ years, MSc-in-progress, and IEEE-publication themes.^6 Treat every employment claim, metric, client name, product screenshot, and unpublished project detail as requiring owner approval before it appears on the public site.

### Positioning rules

- Lead with outcomes and engineering scope, not personality labels or a tool cloud.
- Present Flutter as the strongest specialization, not the entire identity. The site should still qualify Asanka for broader senior mobile and cross-platform roles.
- Show senior-level behaviors: ambiguous problem solving, architecture, reliability, trade-offs, delivery ownership, mentoring, stakeholder work, and measurable impact.
- Use first person in narrative copy, but keep sentences direct and concrete.
- Do not claim “expert,” “world-class,” “10x,” or similar unsupported superlatives.
- Do not state years of Flutter experience more aggressively than can be verified. Prefer “8+ years across mobile and cross-platform software” unless the exact Flutter timeline is confirmed.
- Never invent usage numbers, performance improvements, team sizes, regulated-device claims, certifications, security/compliance claims, or business outcomes.

## Audience and decision journey

Design for three readers:

1. A recruiter scanning for role fit, location, seniority, core technologies, and contactability in roughly 30–60 seconds.
2. An engineering manager looking for scope, decisions, constraints, quality practices, and evidence of impact.
3. A potential peer evaluating code, writing, open-source work, and technical judgment.

The homepage should answer these questions, in order:

1. Who is this person professionally?
2. What kinds of difficult problems can he solve?
3. What evidence supports that claim?
4. What is his individual contribution and level of ownership?
5. Is he relevant to this role and country?
6. How do I view the appropriate résumé or contact him?

## Information architecture

Implement a small, fast site with these routes:

| Route | Purpose | Required |
|---|---|---:|
| `/` | Positioning, proof, selected work, experience snapshot, writing/open source, contact | Yes |
| `/work/` | Index of case studies | Yes |
| `/work/[slug]/` | Individual case studies | Yes |
| `/about/` | Career story, leadership approach, education, community contribution | Yes |
| `/resume/` | Resume chooser and short availability note | Yes |
| `/writing/` | Curated technical writing/publications; do not import every old post | Recommended |
| `/privacy/` | Plain-language data/analytics statement | Required if any analytics or form is used |
| `/404.html` | Helpful error route for GitHub Pages | Yes |

Keep the primary navigation to: `Work`, `About`, `Writing`, `Résumé`, and `Contact`. On small screens use an accessible disclosure button. Do not recreate social-account modals.

## Homepage specification

### 1. Header

- Wordmark: `Asanka Liyanage` or the owner-confirmed preferred professional name.
- Compact navigation with visible keyboard focus.
- Optional theme control only if it is implemented without a flash of incorrect theme and without adding meaningful JavaScript weight.
- Do not put social icons in the main navigation. GitHub and LinkedIn may appear as text links in the footer and contact section.

### 2. Hero

Use a left-aligned, content-first layout. Suggested copy:

> **Senior Software Engineer building reliable cross-platform products for mobile, desktop, and connected devices.**
>
> I work across Flutter, native platforms, and device integrations—turning complex hardware and product requirements into maintainable software for Android, iOS, and Windows.

Add two primary actions:

- `View selected work`
- `Download résumé`

Add one quieter text link: `Contact me`.

Under the actions, show a compact availability line only after confirmation:

> Based in Sri Lanka · Open to [remote / hybrid / relocation] opportunities · [work-authorisation or sponsorship wording]

Do not publish assumptions about visas, citizenship, relocation, notice period, or sponsorship. Store these as content fields so they can be updated without component edits.

Avoid a full-bleed personal photo. If a portrait is retained, require a current professional headshot, use it as a secondary element on `/about/`, provide meaningful alt text, and ensure its presence does not dominate the hiring evidence.

### 3. Credibility strip

Use three or four short, verified signals. Examples:

- `8+ years in software engineering`
- `Android · iOS · Windows`
- `Connected-device and BLE systems`
- `Technical leadership and mentoring`

These are text, not animated counters. If exact numbers are uncertain, use non-numeric wording.

### 4. Selected work

Feature the strongest three case studies, not the newest three repositories. Each card must show:

- Project or anonymized product name.
- One-sentence problem/outcome summary.
- Role and scope.
- Three to five relevant tags.
- One concrete proof point, only if verified.
- Link label `Read case study`, not `Learn more`.

Recommended candidate set:

1. **Connected medical-device platform** — Flutter across mobile/desktop, BLE or device connectivity, real-time data, reliability, recovery behavior, and cross-platform architecture. Use an anonymized name if required by confidentiality.
2. **Cross-platform application architecture** — demonstrate ownership of modularity, state management, testing, release pipelines, platform-specific code, and delivery across Android/iOS/Windows.
3. **Native integration or open-source Flutter work** — a plugin/platform-channel project, public package, or technically defensible repository with clear maintenance and usage evidence.
4. **SIFAA research / applied AI** — use as an optional fourth item or writing/publication feature if the contribution and publication details can be verified.

Do not feature tutorial-grade, unfinished, forked, or weakly documented repositories merely because they are public. Older public projects can appear in a compact archive, clearly labeled by year.

### 5. Engineering strengths

Organize capabilities by problems solved, not logo badges:

- **Cross-platform product engineering** — Flutter/Dart, responsive/adaptive UI, Android/iOS/Windows, native interoperability.
- **Connected devices** — BLE, Bluetooth, NFC, USB/serial, device state, reconnection, real-time streams.
- **Architecture and quality** — Clean Architecture, BLoC or the actually used state-management approaches, modularity, automated testing, observability, performance, CI/CD.
- **Delivery and leadership** — technical design, code review, mentoring, estimation, cross-functional collaboration, stakeholder communication.

List only technologies that can be discussed confidently in an interview. Avoid progress bars, percentages, star ratings, and “skill level” meters.

### 6. Experience snapshot

Show the most recent and relevant roles in reverse chronological order. For each role, display:

- Title, organization, and dates.
- One-line scope statement.
- Two or three achievement bullets with outcome, scale, or complexity.
- No confidential client details without approval.

Keep the full history in downloadable résumés. The homepage needs only enough to establish current level and progression.

### 7. Open source, publication, and community

Use a restrained evidence section:

- Link to the GitHub profile and two or three curated repositories.
- Link to the IEEE publication only after verifying the canonical DOI or publication URL.
- Mention Stack Overflow, technical writing, or video teaching as professional knowledge-sharing evidence, not as the headline identity.
- Do not hard-code volatile GitHub follower, repository, star, or contribution counts unless they are fetched at build time with graceful fallback and do not become vanity metrics.

### 8. Contact CTA and footer

Suggested heading:

> Interested in building reliable cross-platform or connected-device products?

Provide:

- One owner-confirmed professional email address.
- LinkedIn.
- GitHub.
- Résumé chooser.

Prefer a `mailto:` link over a contact form for the first release. A form creates spam, privacy, delivery, and data-retention work. If a form is later added, document the processor, validation, success/error states, privacy notice, and anti-spam method.

The footer should contain the preferred name, current year generated at build time, links to privacy and source repository, and no long social list.

## Case-study template

Every case study must be skimmable in two minutes and substantial enough for a technical interview. Use the following structure:

```md
---
title: "[Project or anonymized product]"
summary: "[Problem + outcome in one sentence]"
role: "[Exact role]"
period: "[Year or range]"
platforms: ["Android", "iOS", "Windows"]
capabilities: ["Flutter", "BLE", "Platform channels"]
featured: true
confidential: true
cover: "/images/work/[slug]/cover.webp"
coverAlt: "[Describe the useful content of the image]"
---

## At a glance

- **Context:** [Product/domain and user need]
- **My scope:** [What Asanka personally owned]
- **Team:** [Safe, approximate team context]
- **Constraints:** [Hardware, connectivity, platform, privacy, release, or time constraints]
- **Outcome:** [Verified result; otherwise describe delivered capability without a number]

## Problem

[What was difficult and why it mattered.]

## Constraints and trade-offs

[Platform differences, device behavior, offline states, reliability, security/privacy, legacy integration, deadlines.]

## Decisions and implementation

[Architecture, interfaces, state model, testing strategy, native bridges, observability, release process. Explain why.]

## My contribution

[Use first person and distinguish individual work from team output.]

## Outcome

[Metrics with source/owner confirmation, or a precise qualitative result.]

## What I learned

[A mature reflection or what would change next time.]
```

For confidential work:

- Anonymize clients, product names, patient/customer data, proprietary protocols, internal screenshots, and commercially sensitive metrics.
- Use original diagrams showing generic architecture and data flow.
- State `Selected details are generalized to respect confidentiality.`
- Never invent replacement numbers. Use ranges or qualitative outcomes only when approved.
- Do not imply medical-device certification, regulatory approval, or clinical claims unless verified and publishable.

## International application strategy

Build one public website in clear international English. Do not create country flags, automatic country detection, or market-specific claims on the homepage. Use the résumé page to offer tailored documents and explain availability accurately.

### Germany

Official German guidance describes a carefully structured, role-tailored application, commonly including a cover letter, a tabular CV and requested references/certificates. It notes that photos are still common but vary by industry, and that German-language ability improves prospects.^7 A current German Senior Flutter posting also emphasizes design systems, state management, CI/CD, app distribution, complex APIs, dependable teamwork, and B1 German.^8

Implementation requirements:

- Offer an English Germany CV and, only if professionally translated and proofread, a German CV.
- A professional CV photo may be included in the Germany-specific file if the owner chooses; it is not required on the public website.
- Show language level using CEFR only if verified, e.g. `German: B1`.
- Allow a compact list of relevant certificates/publications on the Germany résumé route.
- Use truthful sponsorship/relocation language supplied by the owner.
- If targeting German-speaking roles, add a fully translated `/de/` site only when all core pages can be maintained consistently. Do not ship a partial or machine-translated experience.

### Canada

Canada’s Job Bank advises applicants not to include a photo or unnecessary personal information, and to emphasize specific achievements rather than generic responsibilities.^9 Current Canadian Flutter roles emphasize architecture, native integrations, accessibility, security, testing, CI/CD, delivery ownership, enterprise APIs, mentoring, and cross-functional work; some explicitly restrict eligibility to applicants already in Canada.^10

Implementation requirements:

- Canada résumé: no photo, age, date of birth, marital status, religion, full home address, government identifiers, or references.
- Use `résumé` or `resume`, not an academic-style exhaustive CV.
- Make achievements and ownership easy to scan.
- Do not say `eligible to work in Canada` unless true. Use an owner-confirmed line such as `Requires employer sponsorship` where appropriate.
- Do not imply that a remote role accepts international applicants; job eligibility must be checked per vacancy.

### Australia

Australian Human Rights Commission guidance says a résumé does not need a photo, date of birth, home location, gender, or marital status, and recommends a short, tailored career profile plus achievements.^11 Current Australian Senior Flutter hiring signals include production-grade clean/testable architecture, performance and reliability, CI/CD ownership, autonomy, cross-functional delivery, and work rights.^12

Implementation requirements:

- Australia résumé: no photo or sensitive personal details; city/country is sufficient for an international applicant.
- State work rights only if verified. If sponsorship is required, say so clearly in application materials rather than hiding it.
- Emphasize end-to-end delivery, reliability, communication, autonomy, and shipped production software.
- Use Australian spelling in the Australia-specific PDF where practical, while the public site may use consistent international English.

### Cross-market privacy rule

The safest public-site baseline is stricter than any one country’s CV custom: publish a professional email, general location (`Sri Lanka` or `Colombo, Sri Lanka` if approved), links, and owner-confirmed availability—nothing more. Do not publish phone number, street address, date of birth, marital status, nationality, passport details, or visa identifiers.

## Visual and interaction direction

### Style

- Editorial, precise, and calm.
- Neutral background, high-contrast text, and one restrained accent color.
- Strong typography and whitespace instead of decorative effects.
- Use project screenshots, small architecture diagrams, and code/technical artifacts only when they add evidence.
- Avoid stock photography, full-screen cinematic backgrounds, glassmorphism, animated skill clouds, particle effects, carousels, typewriter text, and continuously moving decorative elements.
- Use a maximum content width around `70rem` and a narrower reading width around `65–75ch` for prose.
- Prefer a system font stack or self-hosted variable font. Do not block rendering on third-party font requests.

### Responsive behavior

- Mobile-first layout with deliberate breakpoints driven by content, not device names.
- Hero actions stack cleanly on narrow screens.
- Case-study cards become a single column without horizontal scrolling.
- Navigation remains operable at 320 CSS pixels.
- Diagrams and code samples scroll or scale without clipping.
- Test at 320, 375/390, 768, 1024, 1280, and 1440 CSS-pixel widths.

### Motion

- No infinite animation.
- Keep transitions under roughly 200 ms and limited to opacity/color/transform where appropriate.
- Respect `prefers-reduced-motion: reduce` and make all content immediately available without animation.

## Technical architecture

### Recommended stack

Use the current stable Astro release at implementation time with strict TypeScript and plain/scoped CSS. Generate a fully static site for GitHub Pages. Astro is appropriate because the site is content-heavy, needs little client JavaScript, supports Markdown content collections, and has an official GitHub Pages deployment path.^13

Use dependencies sparingly:

- Astro core.
- Astro sitemap integration.
- A schema validator supplied through the Astro content layer.
- A lightweight icon approach: inline audited SVGs or text labels; do not load a large icon library.
- No React/Vue/Svelte unless a specific interactive requirement genuinely needs it.
- No runtime GitHub API dependency for core page content.

If the repository owner prefers zero build tooling, a well-structured semantic HTML/CSS rebuild is acceptable. However, the recommended Astro structure makes case studies, writing, metadata, and validation safer to maintain.

### Proposed repository structure

```text
/
├─ .github/
│  └─ workflows/
│     ├─ ci.yml
│     └─ deploy.yml
├─ public/
│  ├─ favicon.svg
│  ├─ images/
│  │  ├─ og-default.png
│  │  └─ work/
│  ├─ resume/
│  │  ├─ Asanka_Liyanage_Resume_Canada.pdf
│  │  ├─ Asanka_Liyanage_Resume_Australia.pdf
│  │  └─ Asanka_Liyanage_CV_Germany.pdf
│  ├─ robots.txt
│  └─ CNAME                  # only if a custom domain is configured
├─ src/
│  ├─ components/
│  │  ├─ Header.astro
│  │  ├─ Footer.astro
│  │  ├─ ProjectCard.astro
│  │  ├─ CapabilityGroup.astro
│  │  └─ ResumeChooser.astro
│  ├─ content/
│  │  ├─ work/
│  │  └─ writing/
│  ├─ layouts/
│  │  └─ BaseLayout.astro
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ about.astro
│  │  ├─ resume.astro
│  │  ├─ privacy.astro
│  │  ├─ 404.astro
│  │  ├─ work/
│  │  │  ├─ index.astro
│  │  │  └─ [...slug].astro
│  │  └─ writing/
│  │     ├─ index.astro
│  │     └─ [...slug].astro
│  ├─ styles/
│  │  ├─ global.css
│  │  └─ tokens.css
│  └─ content.config.ts
├─ astro.config.mjs
├─ package.json
├─ package-lock.json
├─ README.md
└─ tsconfig.json
```

### Content model

Define schemas that fail the build when required content is missing. At minimum, validate:

- `title`, `summary`, `role`, `period`, and `slug`.
- `featured` boolean.
- `platforms` and `capabilities` arrays.
- Cover image and alt text pairing.
- Optional `confidential` flag.
- Optional verified metrics as structured label/value items.
- Publication date and update date for writing.

Do not fetch LinkedIn, GitHub, Stack Overflow, or résumé data in the browser. Store curated content locally. External APIs can fail, rate-limit, leak visitor data, or create layout shifts.

## SEO, sharing, and discoverability

Implement per-route:

- Unique `<title>` and meta description.
- Canonical URL.
- Open Graph and Twitter/X card metadata.
- 1200×630 social image with name, role, and restrained brand treatment.
- `ProfilePage` and `Person` JSON-LD on the homepage/about page, using only visible, verified information. Google documents `ProfilePage` markup for pages focused on a person and recommends validation and sitemap submission.^14
- `WebSite` structured data where appropriate.
- XML sitemap and `robots.txt`.
- Descriptive URLs and one logical H1 per route.
- Descriptive internal link text.
- Favicon and web manifest only if the manifest is complete and accurate.

Suggested homepage metadata:

```text
Title: Asanka Liyanage — Senior Software Engineer, Flutter & Connected Devices
Description: Senior Software Engineer building reliable Flutter applications and connected-device experiences across Android, iOS, and Windows.
```

Verify how the preferred full name should appear. Do not alternate unpredictably among `B Liyanage Asanka`, `Borala Liyanage Asanka`, `Asanka B.L.`, and `Blasanka`.

## Accessibility requirements

Target WCAG 2.2 AA. W3C recommends WCAG 2.2 as the current conformance target.^15

Required implementation details:

- Semantic landmarks: header, nav, main, sections, footer.
- Skip link visible on focus.
- Correct heading hierarchy.
- Real buttons for actions and disclosures; real links for navigation.
- Fully keyboard-operable mobile navigation and any dialogs.
- Visible focus states with adequate contrast and no focus obstruction.
- Text contrast of at least 4.5:1 for normal text and 3:1 for large text/UI boundaries where applicable.
- Minimum practical pointer targets around 44×44 CSS pixels; never rely on tiny icon-only links.
- Useful image alt text; empty alt for purely decorative images.
- No information conveyed by color alone.
- No automatic carousels, blinking, typewriter effects, or infinite animation.
- Reduced-motion support.
- Reflow without two-dimensional scrolling at 320 CSS pixels, except genuinely two-dimensional content.
- Accessible names for icon links.
- If a dialog is introduced: native `<dialog>` where suitable, focus entry/return, Escape close, labelled title, and background interaction blocking.

Automated checks help but do not prove conformance. Add manual keyboard and screen-reader smoke tests to the definition of done.

## Performance requirements

Google’s current “good” Core Web Vitals thresholds are LCP ≤2.5 seconds, INP ≤200 ms, and CLS ≤0.1 at the 75th percentile.^16 Use these as production targets, not merely a Lighthouse-score goal.

Budgets:

- Ship zero client JavaScript on pages that do not need it.
- Initial JavaScript: ideally 0 KB; hard cap 40 KB compressed for the homepage.
- Initial CSS: target under 30 KB compressed.
- Optimize project images to AVIF/WebP with responsive dimensions and explicit width/height.
- Homepage total transfer target under 1 MB on first load, preferably much lower.
- No autoplay video.
- Self-host fonts or use the system stack; subset and preload only critical font files.
- Lazy-load below-fold images, but never lazy-load the primary LCP image.
- Prevent layout shift by reserving image/media dimensions.

Validate in a production build at mobile and desktop sizes. Add Lighthouse CI or an equivalent repeatable check, but avoid treating one synthetic run as field performance.

## Privacy and security

- Remove the existing `UA-129277090-1` scripts.
- Launch with no analytics unless the owner explicitly needs measurement.
- If analytics is added, choose a proportionate privacy-conscious approach, document what is collected, and implement consent where required. European Commission guidance demonstrates a model where visitors can accept or refuse analytics cookies.^17
- Do not embed YouTube, social timelines, map widgets, or third-party badges on initial load. Link out instead.
- Add `rel="me"` where appropriate and `rel="noopener noreferrer"` on external links opened in new tabs. Do not force new tabs unless useful.
- Do not expose phone number, street address, private email, identity documents, visitor IP logs, or résumé files containing unnecessary personal data.
- Do not add secrets to the repository. The static build must succeed without private credentials.
- Configure a basic Content Security Policy where compatible with GitHub Pages and chosen assets; avoid inline event handlers.
- Keep dependencies minimal and enable automated dependency updates if the owner wants them.

## GitHub Pages and delivery

Preserve the existing public URL. GitHub Pages supports custom workflows, custom domains, and HTTPS enforcement.^18 Astro provides an official GitHub Pages deployment workflow.^13

Implementation steps:

1. Inspect the actual repository state and preserve unrelated owner changes.
2. Create a working branch; do not edit production blindly.
3. Archive the old implementation in Git history. Do not keep `Old Portfolio` in primary navigation.
4. Build the new static site.
5. Add CI for install, type-check, build, link checking, and automated accessibility smoke tests.
6. Add a Pages deploy workflow triggered from the default branch, plus manual dispatch.
7. Configure `site: 'https://blasanka.github.io'`; no repository `base` path is needed for the username-root repository.
8. Replace `/my_resume/` with a permanent redirect or compatibility page leading to `/resume/`.
9. Add redirects or compatibility pages for other public routes that have inbound links. Never silently break `/myBlog/` without checking usage.
10. Test the generated artifact locally and through a preview before changing Pages settings.
11. Deploy only after owner review of content, confidential information, résumé files, and contact details.
12. Enforce HTTPS. A custom domain is optional; GitHub Pages supports it, but it is not required for a professional result.^19

## Implementation phases

### Phase 0 — Content and privacy audit

- [ ] Confirm preferred professional name.
- [ ] Confirm public professional email.
- [ ] Confirm location wording.
- [ ] Confirm relocation, remote/hybrid, sponsorship, work-authorisation, and notice-period wording separately for Germany, Canada, and Australia.
- [ ] Confirm exact experience timeline and whether `8+ years` refers to all software engineering or specifically Flutter/Dart.
- [ ] Confirm current role, prior roles, education, MSc status, language levels, publication URL/DOI, and certifications.
- [ ] Select three publishable case studies.
- [ ] Review NDAs and sanitize private work.
- [ ] Prepare country-specific resume PDFs.
- [ ] Remove or replace stale personal data on `/my_resume/`.

### Phase 1 — Foundation

- [ ] Initialize Astro with strict TypeScript.
- [ ] Create design tokens, base layout, semantic header/footer, responsive navigation, and global styles.
- [ ] Configure the canonical site URL, sitemap, 404 route, metadata component, and JSON-LD.
- [ ] Establish content schemas and sample placeholder entries clearly marked `draft`.
- [ ] Add CI and GitHub Pages deployment configuration.

### Phase 2 — Core content

- [ ] Build homepage sections in the specified order.
- [ ] Implement `/work/` and case-study pages.
- [ ] Implement `/about/`, `/resume/`, and `/privacy/`.
- [ ] Add curated writing/publication content only where links and dates are valid.
- [ ] Add owner-approved images and diagrams with dimensions and alt text.

### Phase 3 — Quality

- [ ] Validate all internal and external links.
- [ ] Test keyboard flow and visible focus.
- [ ] Run automated accessibility checks on all templates.
- [ ] Test with a screen reader smoke pass.
- [ ] Test responsive layouts at required widths.
- [ ] Validate metadata and structured data.
- [ ] Run production Lighthouse/Web Vitals tests.
- [ ] Check print/download behavior for resume links.
- [ ] Review spelling, name consistency, dates, and country variants.
- [ ] Confirm no stale personal information remains accessible through public routes.

### Phase 4 — Release

- [ ] Obtain owner approval for final copy, contact data, résumé files, and confidential case studies.
- [ ] Deploy to GitHub Pages.
- [ ] Verify HTTPS, canonical redirects, sitemap, robots, social preview, and 404 behavior in production.
- [ ] Check the homepage and case studies on real mobile and desktop browsers.
- [ ] Update the GitHub profile website link and résumé links only after production verification.

## Acceptance criteria

The work is complete only when all of the following are true:

### Content

- The first viewport identifies Asanka as a Senior Software Engineer and communicates cross-platform/connected-device value without scrolling.
- At least three substantial case studies show problem, constraints, decisions, individual contribution, and verified outcome.
- Experience, education, publication, language, availability, and contact details have been owner-verified.
- No invented metrics or confidential data appear.
- The old motivational quote, `100% Geek` positioning, social modals, Google+ link, old-portfolio CTA, skill bars, and exhaustive social directory are gone.
- `/my_resume/` no longer exposes stale early-career content or unnecessary personal data.

### UX and visual quality

- The site reads as a current senior-engineer portfolio, not a template or student résumé.
- Navigation is clear on mobile and desktop.
- No essential information is hidden behind hover, animation, or modal-only interaction.
- No horizontal overflow occurs at 320 CSS pixels.
- Project visuals are evidence-based, optimized, and approved for public use.

### Accessibility

- Automated audits report no serious accessibility violations.
- All routes are operable with keyboard only.
- Focus order and focus visibility are logical.
- Color contrast passes WCAG 2.2 AA.
- Reduced-motion preferences are honored.
- Headings, landmarks, labels, alternative text, and link text are meaningful.

### Performance

- Production build meets the Core Web Vitals targets in repeatable testing or records a documented reason and remediation plan.
- Homepage Lighthouse targets: Performance ≥95, Accessibility 100, Best Practices ≥95, SEO ≥95 on both mobile and desktop, recognizing that field data remains the real target.
- No unnecessary client-side framework bundle is shipped.
- Images have responsive sources and fixed dimensions.

### Engineering and operations

- Clean production build from a fresh checkout.
- CI checks install, type safety, build, link integrity, and automated accessibility.
- GitHub Pages deployment succeeds from the documented workflow.
- README explains local setup, content editing, image handling, testing, deployment, and route compatibility.
- Dependencies are current at implementation time and pinned through the lockfile.
- No secrets or private information are committed.

## Ready-to-use website content pack

The following content should be included in the repository as the initial data set. It combines information already published in the GitHub profile and LinkedIn public view with copy tailored for this portfolio. Anything marked `VERIFY` must remain a draft or be omitted from production until Asanka confirms it.

### Content status convention

- `READY` — supported by the current public GitHub profile or other reviewed public source and suitable as initial copy.
- `VERIFY` — likely correct, but the exact wording, date, URL, scope, or permission must be confirmed.
- `REQUIRED` — missing information that must be supplied before the related section can be published.
- `PRIVATE` — do not publish unless Asanka explicitly approves it.

### Core identity data

| Field | Initial value | Status |
|---|---|---|
| Full name | Borala Liyanage Asanka | READY |
| Recommended display name | Asanka Liyanage | VERIFY — public profiles currently use several variations |
| Preferred short name | Asanka | VERIFY |
| Current title | Senior Software Engineer | READY |
| Professional headline | Senior Software Engineer · Flutter & Cross-Platform · Connected Devices | READY |
| Base location | Colombo, Sri Lanka | VERIFY before publication |
| Experience | 8+ years across software engineering, mobile, and cross-platform development | VERIFY exact start date and wording |
| Current employer | Aeturnum | VERIFY publication permission and current dates |
| Primary specialization | Flutter and Dart applications for Android, iOS, and Windows | READY |
| Domain specialization | Healthcare software and connected medical devices | VERIFY confidentiality-safe wording |
| Education | BSc in Information Technology | VERIFY institution, dates, and official degree title |
| Current study | MSc in Artificial Intelligence — in progress | VERIFY University of Moratuwa, start date, and expected completion |
| Public language | English | READY |
| Language levels | Sinhala native; English and German CEFR levels | REQUIRED — do not infer levels from the old résumé |

### Global site settings

Create a single typed data file such as `src/data/site.ts` with this initial content:

```ts
export const site = {
  name: "Borala Liyanage Asanka", // VERIFY preferred display form
  shortName: "Asanka Liyanage",
  role: "Senior Software Engineer",
  headline:
    "Senior Software Engineer building reliable cross-platform products for mobile, desktop, and connected devices.",
  description:
    "Senior Software Engineer specializing in Flutter, native platform integration, and connected-device applications across Android, iOS, and Windows.",
  location: "Colombo, Sri Lanka", // VERIFY
  availability: {
    publicSummary: "", // REQUIRED
    remote: "", // REQUIRED: yes, no, or market-dependent
    relocation: "", // REQUIRED
    noticePeriod: "", // PRIVATE unless explicitly approved
  },
  links: {
    github: "https://github.com/Blasanka",
    linkedin: "", // VERIFY: current public result uses /in/asankabl; older profiles use another path
    stackOverflow: "https://stackoverflow.com/users/3675035/blasanka",
    youtube: "https://www.youtube.com/@asankab.l.5166", // VERIFY preferred channel
    email: "", // REQUIRED: confirm one professional public address
  },
  resumeFiles: {
    canada: "/resume/Asanka_Liyanage_Resume_Canada.pdf",
    australia: "/resume/Asanka_Liyanage_Resume_Australia.pdf",
    germanyEnglish: "/resume/Asanka_Liyanage_CV_Germany.pdf",
    germanyGerman: "", // optional; publish only after human proofreading
  },
} as const;
```

Do not add the old public phone number, Yahoo address, full home address, or any other contact value from `/my_resume/`.

### Homepage copy

#### Hero eyebrow

```text
Senior Software Engineer · Flutter · Connected Devices
```

#### Hero heading

```text
Building reliable software across mobile, desktop, and connected devices.
```

#### Hero summary

```text
I’m a Senior Software Engineer specializing in Flutter and cross-platform product development across Android, iOS, and Windows. My recent work sits at the intersection of software and hardware, including Bluetooth Low Energy, device integration, real-time data, and maintainable application architecture.
```

#### Hero actions

```text
View selected work
Download résumé
Contact me
```

#### Availability line

Use this template only after the bracketed content is confirmed:

```text
Based in Sri Lanka · Open to [remote/hybrid/relocation] roles in [approved markets] · [sponsorship or work-rights statement]
```

Do not list Germany, Australia, and Canada as though Asanka already has work rights there. If sponsorship is required, state that accurately in the market-specific résumé or application.

#### Credibility statements

Use three or four of these:

```text
8+ years across mobile and cross-platform engineering
Production applications for Android, iOS, and Windows
BLE, NFC, USB/serial, and native platform integration
Healthcare and connected-device experience
Architecture, code review, mentoring, and technical delivery
```

The first item is `VERIFY`; the other items are `READY` at the capability level but must not imply confidential product claims.

### About page copy

Use this as the initial narrative:

```text
I’m a Senior Software Engineer from Sri Lanka focused on building reliable applications across mobile, desktop, and connected-device environments.

My background spans Flutter and Dart, native Android and iOS integration, Windows desktop applications, backend services, and device communication. In recent work, I have focused on healthcare software and connected devices—areas where software must handle unreliable connections, platform differences, real-time data, and complex hardware behavior without compromising maintainability.

I enjoy the engineering work behind a polished interface: clarifying ambiguous requirements, designing boundaries between platform and application code, making failure states recoverable, improving architecture, reviewing code, and helping other engineers make sound technical decisions.

Earlier in my career I worked across Android, web, APIs, FinTech and digital payments, offline-first applications, and open-source Flutter packages. That breadth helps me approach cross-platform products as systems rather than isolated screens.

Alongside professional work, I contribute to the developer community through GitHub, Stack Overflow, technical writing, and educational content. I am also pursuing postgraduate study in artificial intelligence and remain interested in practical AI systems that solve real product problems.
```

Verification requirements:

- Confirm whether `FinTech and digital payments` is publishable.
- Confirm the current MSc institution, official program name, dates, and expected completion.
- Confirm whether “helping other engineers” should explicitly say mentoring or team leadership.
- Add one personal paragraph only if it reinforces the professional story. Do not restore the old long hobby list.

### Capability data

Add these as structured content rather than badges or proficiency meters:

```yaml
capabilityGroups:
  - title: Cross-platform product engineering
    summary: Building and maintaining applications across mobile and desktop platforms.
    skills:
      - Flutter
      - Dart
      - Android
      - iOS
      - Windows Desktop
      - Kotlin
      - Java
      - Swift

  - title: Connected devices and platform integration
    summary: Integrating application software with hardware, operating-system APIs, and real-time device data.
    skills:
      - Bluetooth Low Energy (BLE)
      - Bluetooth
      - NFC
      - USB and serial communication
      - Flutter platform channels
      - Native plugins
      - Device state and reconnection
      - Real-time data acquisition

  - title: Architecture and quality
    summary: Designing maintainable software and dependable delivery workflows.
    skills:
      - Clean Architecture
      - BLoC
      - SOLID principles
      - Modular application design
      - Unit, widget, and integration testing
      - SQLite
      - Firebase
      - REST APIs
      - CI/CD
      - GitHub Actions
      - Git

  - title: Technical leadership
    summary: Helping teams turn complex requirements into practical, maintainable solutions.
    skills:
      - Technical design
      - Code review
      - Mentoring
      - Estimation and delivery planning
      - Cross-functional collaboration
      - Engineering decision-making
```

Before publication, remove any item that cannot be supported with an experience bullet, case study, repository, or confident interview discussion. Treat Docker, Python, JavaScript, PHP, Node.js, Spring Boot, and SQL as secondary technologies; include them in the résumé or project context rather than the homepage unless they are central to a featured case study.

### Experience data

The public sources do not provide enough reliable role detail for a finished timeline. Add the following draft structure and keep `draft: true` until dates and achievements are supplied:

```yaml
experience:
  - organization: Aeturnum
    title: Senior Software Engineer
    location: Sri Lanka
    start: "[REQUIRED: YYYY-MM]"
    end: Present
    draft: true
    scope: "Cross-platform healthcare and connected-device software using Flutter across mobile and Windows environments."
    achievements:
      - "[REQUIRED: product or system delivered, personal ownership, and verified outcome]"
      - "[REQUIRED: architecture, reliability, performance, or device-integration achievement]"
      - "[REQUIRED: leadership, mentoring, code-review, or delivery impact]"

  - organization: "[REQUIRED]"
    title: "[REQUIRED]"
    start: "[REQUIRED: YYYY-MM]"
    end: "[REQUIRED: YYYY-MM]"
    draft: true
    scope: "[REQUIRED]"
    achievements:
      - "[REQUIRED]"
```

Use this achievement formula when collecting the missing data:

```text
Action and ownership + difficult technical context + measurable or observable result
```

Example structure—not factual copy:

```text
Designed [component/system] for [platforms or device class], addressing [constraint], which resulted in [verified outcome].
```

### Selected-work data

Create the following entries as unpublished drafts. These are themes supported by the public profile, not complete case studies.

#### Draft 1 — Connected medical-device software

```yaml
title: Connected medical-device software
slug: connected-medical-device-software
featured: true
draft: true
confidential: true
role: Senior Software Engineer
platforms: [Android, iOS, Windows]
capabilities: [Flutter, Dart, BLE, Device integration, Real-time data]
summary: Building reliable cross-platform software that communicates with connected medical and measurement devices.
detailsRequired:
  - Exact product context that may be disclosed
  - Individual ownership and team context
  - Device and protocol details safe to publish
  - Connection, recovery, and data-integrity challenges
  - Architecture and testing approach
  - Verified outcome or delivered capability
  - Approved screenshots or a sanitized architecture diagram
```

#### Draft 2 — Cross-platform architecture and delivery

```yaml
title: Cross-platform application architecture
slug: cross-platform-application-architecture
featured: true
draft: true
confidential: true
role: Senior Software Engineer
platforms: [Android, iOS, Windows]
capabilities: [Flutter, Architecture, Native integration, CI/CD, Testing]
summary: Creating maintainable application foundations across mobile and desktop while keeping platform-specific behavior explicit and testable.
detailsRequired:
  - Initial architecture or delivery problem
  - Important design decisions and alternatives considered
  - Module boundaries and state-management approach
  - Native platform integration
  - Test and release strategy
  - Mentoring or team adoption
  - Verified maintainability, release, quality, or delivery outcome
```

#### Draft 3 — Native integration or Flutter package

Choose the strongest codebase after a code-quality review:

```yaml
title: Flutter native integration and reusable packages
slug: flutter-native-integration
featured: true
draft: true
confidential: false
capabilities: [Flutter, Dart, Platform channels, Android, iOS]
summary: Extending Flutter with native capabilities and reusable components for production application needs.
candidateEvidence:
  - AWS S3 Flutter platform-channel project mentioned on LinkedIn
  - https://github.com/Blasanka/flutter_dropdown
detailsRequired:
  - Current source and package URLs
  - Asanka's exact contribution
  - Supported platforms and production use
  - Maintenance status and compatibility
  - Tests, examples, adoption, downloads, or other verified proof
```

#### Optional Draft 4 — SIFAA research

```yaml
title: Smart Intelligent Floriculture Assistant Agent (SIFAA)
slug: sifaa-applied-ai-research
featured: false
draft: true
confidential: false
period: "2023"
capabilities: [Applied AI, Android, Research]
summary: An applied research project exploring intelligent assistance for floriculture.
detailsRequired:
  - Canonical IEEE publication or DOI URL
  - Full author list and Asanka's authorship position
  - Research problem, dataset, method, evaluation, and individual contribution
  - Approved figures or screenshots
  - Accurate publication venue and date
```

### Public-project inventory

These repositories may support an archive or open-source section after code, documentation, license, and dependency review:

| Project | Public evidence | Portfolio use |
|---|---|---|
| [`flutter_dropdown`](https://github.com/Blasanka/flutter_dropdown) | Public Flutter/Dart package with stars and forks | Candidate for reusable Flutter component/package evidence |
| [`global_appointment_booking_mobile`](https://github.com/Blasanka/global_appointment_booking_mobile) | Public Dart repository updated in 2026 | Review for current architecture and code quality before featuring |
| [`video_lyric_add`](https://github.com/Blasanka/video_lyric_add) | Python content/video tooling updated in 2026 | Optional “experiments” item; not core to senior mobile positioning |
| [`stackoverflow_users`](https://github.com/Blasanka/stackoverflow_users) | React/Stack Overflow API project | Archive only unless modernized and relevant |
| [`wedagedara-android-client`](https://github.com/Blasanka/wedagedara-android-client) and related API/admin repositories | Android, API, and web components for an Ayurveda directory | Potential end-to-end project history; copy and spelling need professional revision |
| [`research-frontend`](https://github.com/Blasanka/research-frontend) | Public SIFAA Android repository | Supporting link for the research case study after review |

Do not automatically display all 107 public repositories. Pin or feature only the strongest, current, documented, and interview-ready work. Forked repositories should not appear as authored portfolio projects.

### Education and publication data

Use this draft:

```yaml
education:
  - qualification: MSc in Artificial Intelligence
    institution: University of Moratuwa
    start: "2025"
    end: "2027 expected"
    status: In progress
    draft: true
    verification: Confirm official program title, dates, and expected completion

  - qualification: BSc in Information Technology
    institution: "[REQUIRED]"
    start: "[REQUIRED]"
    end: "[REQUIRED]"
    status: Completed
    draft: true

publications:
  - title: Smart Intelligent Floriculture Assistant Agent (SIFAA)
    publisher: IEEE
    date: "2023"
    url: "[REQUIRED: canonical publication or DOI]"
    authors: "[REQUIRED]"
    contribution: "[REQUIRED]"
    draft: true
```

### Community and writing copy

```text
I share practical lessons from Flutter, Android, connected-device integration, and software problem solving through open-source projects, Stack Overflow, technical writing, and educational videos.
```

Curate links under these labels:

- `Open-source work` — GitHub profile plus no more than three reviewed repositories.
- `Technical Q&A` — Stack Overflow profile.
- `Publication` — SIFAA canonical IEEE/DOI link after verification.
- `Writing` — only maintained articles with accurate dates and working links.
- `Videos` — one professional channel or playlist; do not restore every old channel.

### Contact section copy

```text
Let’s build reliable cross-platform software.

I’m interested in senior engineering opportunities involving Flutter, mobile platforms, desktop applications, connected devices, and technically demanding product work.
```

Buttons/links:

```text
Email Asanka
Connect on LinkedIn
View GitHub
Choose a résumé
```

The email and LinkedIn targets must come from the verified global site settings. Do not copy contact values from the old résumé.

### Résumé chooser copy

```text
Choose the résumé prepared for your location. Each version presents the same experience with formatting and application details appropriate to that market.
```

| Card | Label | Supporting text |
|---|---|---|
| Canada | Canada résumé | Concise achievement-led résumé without a photo or unnecessary personal information. |
| Australia | Australia résumé | Role-focused résumé emphasizing delivery, architecture, reliability, and verified work-right information. |
| Germany | Germany CV — English | Structured CV with relevant education, languages, and certificates. |
| Germany | Lebenslauf — Deutsch | Optional; show only after professional translation and proofreading. |

If the PDFs do not yet exist, show `Available on request` or keep the cards unpublished. Never commit dummy PDFs behind working download buttons.

### Metadata and social profile data

Use these initial values after name and URL verification:

```yaml
home:
  title: Asanka Liyanage — Senior Software Engineer, Flutter & Connected Devices
  description: Senior Software Engineer building reliable Flutter applications and connected-device experiences across Android, iOS, and Windows.

about:
  title: About Asanka Liyanage — Senior Software Engineer
  description: Experience across Flutter, native mobile platforms, Windows applications, connected devices, architecture, and technical leadership.

work:
  title: Selected Work — Asanka Liyanage
  description: Case studies in cross-platform applications, connected-device software, native integration, architecture, and engineering delivery.

resume:
  title: Résumé — Asanka Liyanage
  description: Market-specific résumés for senior software engineering opportunities in Canada, Australia, and Germany.
```

The JSON-LD `sameAs` array should include only verified canonical profiles. Do not include old Facebook, Google+, Instagram, CodePen, CodeSandbox, StackBlitz, GitLab, Bitbucket, or multiple blog/video accounts unless each remains current and professionally useful.

### Content collection gate

Every experience, project, publication, and résumé entry should support `draft: true`. Production builds must exclude drafts. This prevents Codex from accidentally publishing placeholders such as `[REQUIRED]`, unapproved employer details, or invented outcomes.

Add a CI content check that fails if a published page contains any of these markers:

```text
[REQUIRED]
[VERIFY]
TODO
TBD
lorem ipsum
example metric
```

## Content required from the owner

Codex must not guess these items. Use visible placeholders or keep sections in draft until supplied:

| Item | Required detail |
|---|---|
| Preferred name | Exact public display name and pronunciation/preferred short name if relevant |
| Role timeline | Employers, titles, month/year ranges, and publishable scope |
| Impact evidence | Metrics, scale, reliability, performance, delivery time, adoption, or qualitative outcomes with approval |
| Case studies | Three publishable projects, contribution, team context, constraints, decisions, outcomes, images/diagrams |
| Confidentiality | What must be anonymized or omitted |
| Contact | One professional email and approved LinkedIn/GitHub URLs |
| Location | Public city/country wording |
| Mobility | Relocation, remote/hybrid preference, sponsorship needs, work rights, notice period |
| Education | Degree title, institution, completion date; current MSc program and expected completion if publishable |
| Languages | English/German/other CEFR levels only where accurate |
| Publication | Canonical title, authorship order, venue, year, DOI/URL |
| Résumés | Approved Canada, Australia, Germany English, and optional German-language PDFs |
| Portrait | Current professional headshot or explicit decision to omit |

## Do not implement

- A contact form, CMS, database, or server-side API for the first release.
- Auto-playing media or animation-heavy hero effects.
- Unverified live counters.
- A generic AI chatbot.
- A full multilingual site without maintainable human-reviewed translations.
- Hidden keyword stuffing or copied job-description text.
- Testimonials without explicit permission and attributable context.
- Public client or patient information.
- Visa claims, work-right claims, or language-level claims without confirmation.
- A framework migration merely for novelty; every dependency must serve a documented need.

## Sources

1. Borala Liyanage Asanka. “[Current portfolio](https://blasanka.github.io/).” Accessed September 13, 2026.
2. Borala Liyanage Asanka. “[blasanka.github.io repository](https://github.com/Blasanka/blasanka.github.io).” GitHub. Accessed September 13, 2026.
3. Google Analytics Help. “[Introducing the next generation of Analytics, Google Analytics 4](https://support.google.com/analytics/answer/10089681).” Accessed September 13, 2026.
4. Borala Liyanage Asanka. “[Current linked résumé page](https://blasanka.github.io/my_resume/).” Accessed September 13, 2026.
5. Borala Liyanage Asanka. “[GitHub profile README](https://github.com/Blasanka/Blasanka).” GitHub. Accessed September 13, 2026.
6. LinkedIn. “[B Liyanage Asanka — Aeturnum](https://lk.linkedin.com/in/asankabl).” Public search view. Accessed September 13, 2026.
7. Federal Employment Agency. “[Part 1 of the series on the application process in Germany: curriculum vitae](https://www.arbeitsagentur.de/vor-ort/zav/working-and-living-in-germany/iss-en/issue-01-2026/application-cv).” 2026; Make it in Germany. “[Applying for a job](https://www.make-it-in-germany.com/en/working-in-germany/job/application).” Accessed September 13, 2026.
8. Finanzfluss. “[Senior Mobile Engineer — Flutter — Berlin/Remote](https://www.finanzfluss.de/jobs/senior-mobile-engineer-flutter-berlin-remote/).” Accessed September 13, 2026. Job-posting details are time-sensitive.
9. Government of Canada Job Bank. “[How to write a good resume](https://www.on.jobbank.gc.ca/findajob/resources/write-good-resume).” Modified May 30, 2024; accessed September 13, 2026.
10. Canadian Tire Corporation. “[Senior Developer](https://canadiantirecorporation.wd3.myworkdayjobs.com/Enterprise_External_Careers_Site/job/Senior-Developer_JR161082).” 2026; gskinner. “[Senior Flutter Developer](https://gskinner.com/career-positions/gskinner-senior-flutter-developer.pdf).” January 21, 2026. Job-posting details are time-sensitive.
11. Australian Human Rights Commission. “[Writing a resume and cover letter](https://humanrights.gov.au/?a=68484).” Accessed September 13, 2026.
12. Just Digital People. “[Senior Flutter Developer](https://www.justdigitalpeople.com.au/job/senior-flutter-developer-2).” February 20, 2026. Job-posting details are time-sensitive.
13. Astro. “[Deploy your Astro Site to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/).” Accessed September 13, 2026; Astro. “[Content Collections API Reference](https://docs.astro.build/en/reference/modules/astro-content/).” Accessed September 13, 2026.
14. Google Search Central. “[Profile page (`ProfilePage`) structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page).” Accessed September 13, 2026.
15. W3C. “[Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).” W3C Recommendation; accessed September 13, 2026.
16. web.dev. “[How the Core Web Vitals metrics thresholds were defined](https://web.dev/articles/defining-core-web-vitals-thresholds).” Updated May 7, 2025; accessed September 13, 2026.
17. European Commission. “[Cookies policy](https://commission.europa.eu/cookies-policy_en).” Accessed September 13, 2026.
18. GitHub Docs. “[Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).” Accessed September 13, 2026.
19. GitHub Docs. “[About custom domains and GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)” and “[Securing your GitHub Pages site with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).” Accessed September 13, 2026.
