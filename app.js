const components = [
  {
    id: "glow-button",
    title: "Glow Button",
    description: "A primary button with a soft glow and hover effect.",
    category: "buttons",
    categoryLabel: "Buttons",
    html: `<button class="vellor-glow-button" type="button">Start your project <span aria-hidden="true">↗</span></button>`,
    css: `.vellor-glow-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 18px;\n  padding: 13px 20px;\n  border: 1px solid #c9ff70;\n  border-radius: 6px;\n  background: #c9ff70;\n  color: #11140c;\n  font: 600 14px sans-serif;\n  cursor: pointer;\n  box-shadow: 0 0 28px #c9ff7040;\n  transition: transform .2s, box-shadow .2s;\n}\n.vellor-glow-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 7px 30px #c9ff7055;\n}` ,
    language: "HTML + CSS"
  },
  {
    id: "outline-button",
    title: "Gradient Outline Button",
    description: "A colorful outline gives this secondary button a refined look.",
    category: "buttons",
    categoryLabel: "Buttons",
    html: `<button class="vellor-outline-button" type="button"><span>Explore details</span><b aria-hidden="true">→</b></button>`,
    css: `.vellor-outline-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 22px;\n  padding: 12px 17px;\n  border: 1px solid #9b85ed;\n  border-radius: 6px;\n  background: #14131d;\n  color: #f5f2ff;\n  font: 500 13px sans-serif;\n  cursor: pointer;\n  transition: border-color .2s, background .2s;\n}\n.vellor-outline-button b { color: #c9ff70; font-size: 18px; }\n.vellor-outline-button:hover {\n  border-color: #c9ff70;\n  background: #1c1b27;\n}` ,
    language: "HTML + CSS"
  },
  {
    id: "card-glass",
    title: "Glassmorphism Card",
    description: "A frosted-glass card with subtle luminous details.",
    category: "cards",
    categoryLabel: "Cards",
    html: `<article class="vellor-glass-card"><span class="vellor-card-icon">✦</span><small>Room to create</small><h3>Start with an idea.<br>Design the rest.</h3><a href="#">Discover more <b>↗</b></a></article>`,
    css: `.vellor-glass-card {\n  width: 225px;\n  padding: 22px;\n  border: 1px solid #ffffff1c;\n  border-radius: 12px;\n  background: linear-gradient(145deg, #282536cc, #13131dcc);\n  color: #f6f3ff;\n  font-family: sans-serif;\n  box-shadow: 0 18px 50px #0005;\n}\n.vellor-card-icon {\n  display: grid;\n  width: 34px;\n  height: 34px;\n  place-items: center;\n  border-radius: 10px;\n  background: #c9ff7018;\n  color: #c9ff70;\n}\n.vellor-glass-card small { display: block; margin-top: 18px; color: #aaa6b7; }\n.vellor-glass-card h3 { font-size: 20px; line-height: 1.5; }\n.vellor-glass-card a { color: #c9ff70; font-size: 12px; text-decoration: none; }`,
    language: "HTML + CSS"
  },
  {
    id: "profile-card",
    title: "Profile Card",
    description: "A compact profile with an avatar and availability status.",
    category: "cards",
    categoryLabel: "Cards",
    html: `<article class="vellor-profile-card"><div class="vellor-avatar">A</div><div><strong>Alex Morgan</strong><small><i></i> Available for work</small></div><button type="button" aria-label="More options">···</button></article>`,
    css: `.vellor-profile-card {\n  width: 270px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px;\n  border: 1px solid #ffffff16;\n  border-radius: 10px;\n  background: #171720;\n  color: #f4f2f7;\n  font: 13px sans-serif;\n}\n.vellor-avatar {\n  width: 42px;\n  height: 42px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #c9ff70, #8f79dc);\n  color: #171720;\n  font-weight: 700;\n}\n.vellor-profile-card strong, .vellor-profile-card small { display: block; }\n.vellor-profile-card small { margin-top: 4px; color: #a6a3b0; font-size: 10px; }\n.vellor-profile-card small i { display: inline-block; width: 6px; height: 6px; margin-inline-end: 4px; border-radius: 50%; background: #91e995; }\n.vellor-profile-card button { margin-inline-start: auto; border: 0; background: transparent; color: #aaa6b7; font-size: 21px; }`,
    language: "HTML + CSS"
  },
  {
    id: "nav-pill",
    title: "Pill Navigation",
    description: "A tidy navigation menu with a clear active state.",
    category: "navbars",
    categoryLabel: "Navigation",
    html: `<nav class="vellor-nav"><a class="is-active" href="#">Home</a><a href="#">Services</a><a href="#">Projects</a></nav>`,
    css: `.vellor-nav {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px;\n  border: 1px solid #ffffff16;\n  border-radius: 9px;\n  background: #171720;\n  font: 12px sans-serif;\n}\n.vellor-nav a {\n  padding: 9px 13px;\n  border-radius: 6px;\n  color: #aaa6b7;\n  text-decoration: none;\n  transition: color .2s, background .2s;\n}\n.vellor-nav a:hover, .vellor-nav a.is-active {\n  background: #c9ff7016;\n  color: #c9ff70;\n}`,
    language: "HTML + CSS"
  },
  {
    id: "nav-cta",
    title: "Navigation with CTA",
    description: "A lightweight navbar with links and a call-to-action.",
    category: "navbars",
    categoryLabel: "Navigation",
    html: `<nav class="vellor-cta-nav"><strong>STUDIO<span>.</span></strong><div><a href="#">About</a><a href="#">Work</a><button type="button">Contact us ↗</button></div></nav>`,
    css: `.vellor-cta-nav {\n  width: min(390px, 100%);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 11px 13px;\n  border: 1px solid #ffffff17;\n  border-radius: 8px;\n  background: #171720;\n  font: 11px sans-serif;\n}\n.vellor-cta-nav strong { color: #f4f2f7; letter-spacing: 1px; }\n.vellor-cta-nav strong span { color: #c9ff70; }\n.vellor-cta-nav div { display: flex; align-items: center; gap: 12px; }\n.vellor-cta-nav a { color: #aaa6b7; text-decoration: none; }\n.vellor-cta-nav button { padding: 8px 9px; border: 0; border-radius: 4px; background: #c9ff70; color: #11140c; font: 600 9px sans-serif; }`,
    language: "HTML + CSS"
  },
  {
    id: "loader-ring",
    title: "Circular Loader",
    description: "A lightweight, CSS-only loading indicator.",
    category: "animations",
    categoryLabel: "Animations",
    html: `<div class="vellor-loader" role="status" aria-label="Loading"><span></span></div>`,
    css: `.vellor-loader {\n  width: 54px;\n  height: 54px;\n  display: grid;\n  place-items: center;\n  border: 2px solid #ffffff14;\n  border-top-color: #c9ff70;\n  border-right-color: #a78bfa;\n  border-radius: 50%;\n  animation: vellor-spin .85s linear infinite;\n}\n.vellor-loader span { width: 8px; height: 8px; border-radius: 50%; background: #c9ff70; box-shadow: 0 0 15px #c9ff70; }\n@keyframes vellor-spin { to { transform: rotate(360deg); } }\n@media (prefers-reduced-motion: reduce) { .vellor-loader { animation-duration: 2.5s; } }`,
    language: "HTML + CSS",
    previewClass: "preview-dark"
  },
  {
    id: "pulse-dots",
    title: "Pulsing Dots",
    description: "A lightweight waiting animation with three bouncing dots.",
    category: "animations",
    categoryLabel: "Animations",
    html: `<div class="vellor-dots" role="status" aria-label="Loading"><i></i><i></i><i></i></div>`,
    css: `.vellor-dots { display: flex; align-items: center; gap: 8px; }\n.vellor-dots i {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #c9ff70;\n  animation: vellor-pulse .8s ease-in-out infinite alternate;\n}\n.vellor-dots i:nth-child(2) { animation-delay: .2s; }\n.vellor-dots i:nth-child(3) { animation-delay: .4s; }\n@keyframes vellor-pulse { to { opacity: .25; transform: translateY(-9px); } }\n@media (prefers-reduced-motion: reduce) { .vellor-dots i { animation-duration: 2s; } }`,
    previewClass: "preview-dark"
  },
  {
    id: "notification",
    title: "Success Notification",
    description: "A compact message for important in-app updates.",
    category: "cards",
    categoryLabel: "Cards",
    html: `<div class="vellor-notice"><span>✓</span><div><strong>Saved successfully</strong><small>You can come back to it anytime.</small></div></div>`,
    css: `.vellor-notice {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 12px 14px;\n  border: 1px solid #91e99540;\n  border-radius: 8px;\n  background: #162019;\n  color: #f4f2f7;\n  font-family: sans-serif;\n}\n.vellor-notice>span { width: 25px; height: 25px; display: grid; place-items: center; border-radius: 50%; background: #91e99520; color: #91e995; }\n.vellor-notice strong, .vellor-notice small { display: block; }\n.vellor-notice strong { font-size: 12px; }\n.vellor-notice small { margin-top: 3px; color: #aaa6b7; font-size: 10px; }`,
    language: "HTML + CSS"
  },
  {
    id: "icon-button",
    title: "Icon Button",
    description: "A compact icon-only button with a clear hover state.",
    category: "buttons",
    categoryLabel: "Buttons",
    html: `<button class="vellor-icon-button" type="button" aria-label="Add to favorites">♡</button>`,
    css: `.vellor-icon-button {\n  width: 48px;\n  height: 48px;\n  display: grid;\n  place-items: center;\n  border: 1px solid #ffffff20;\n  border-radius: 50%;\n  background: #171720;\n  color: #c9ff70;\n  font: 26px/1 sans-serif;\n  cursor: pointer;\n  transition: transform .2s, background .2s;\n}\n.vellor-icon-button:hover {\n  transform: scale(1.08);\n  background: #c9ff7018;\n}`,
    language: "HTML + CSS"
  },
  {
    id: "gradient-button",
    title: "Gradient Button",
    description: "A bold gradient action button with a lifted hover state.",
    category: "buttons",
    categoryLabel: "Buttons",
    html: `<button class="vellor-gradient-button" type="button">Create account <span aria-hidden="true">↗</span></button>`,
    css: `.vellor-gradient-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 18px;\n  padding: 13px 19px;\n  border: 0;\n  border-radius: 7px;\n  background: linear-gradient(110deg, #c9ff70, #9be7a2);\n  color: #11140c;\n  font: 700 13px sans-serif;\n  cursor: pointer;\n  transition: transform .2s, box-shadow .2s;\n}\n.vellor-gradient-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 9px 25px #a8f78a40;\n}`,
    language: "HTML + CSS"
  },
  {
    id: "pricing-card",
    title: "Pricing Card",
    description: "A polished pricing plan with a clear call-to-action.",
    category: "cards",
    categoryLabel: "Cards",
    html: `<article class="vellor-pricing"><span class="vellor-plan">PRO PLAN</span><h3>$12 <small>/ month</small></h3><p>For makers ready to grow.</p><ul><li>✓ Unlimited projects</li><li>✓ Priority support</li></ul><button type="button">Choose Pro ↗</button></article>`,
    css: `.vellor-pricing {\n  width: 245px;\n  padding: 18px;\n  border: 1px solid #c9ff7040;\n  border-radius: 10px;\n  background: linear-gradient(145deg, #20201e, #14141a);\n  color: #f4f2f7;\n  font-family: sans-serif;\n}\n.vellor-plan { color: #c9ff70; font-size: 9px; letter-spacing: 1.4px; }\n.vellor-pricing h3 { margin: 10px 0 3px; font-size: 27px; }\n.vellor-pricing h3 small, .vellor-pricing p { color: #a6a3b0; font-size: 10px; font-weight: 400; }\n.vellor-pricing ul { display: grid; gap: 6px; padding: 0; margin: 14px 0; color: #d7d4df; font-size: 10px; list-style: none; }\n.vellor-pricing li::first-letter { color: #c9ff70; }\n.vellor-pricing button { width: 100%; padding: 10px; border: 0; border-radius: 5px; background: #c9ff70; color: #15170f; font-weight: 700; }`,
    language: "HTML + CSS"
  },
  {
    id: "feature-card",
    title: "Feature Card",
    description: "A compact feature highlight with an accent icon.",
    category: "cards",
    categoryLabel: "Cards",
    html: `<article class="vellor-feature"><span>✳</span><div><h3>Lightning fast</h3><p>Ship a polished interface in less time.</p></div><b aria-hidden="true">↗</b></article>`,
    css: `.vellor-feature {\n  width: 285px;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  border: 1px solid #ffffff18;\n  border-radius: 8px;\n  background: #171720;\n  color: #f4f2f7;\n  font-family: sans-serif;\n}\n.vellor-feature>span { color: #c9ff70; font-size: 22px; }\n.vellor-feature h3 { margin: 2px 0 4px; font-size: 13px; }\n.vellor-feature p { margin: 0; color: #aaa6b7; font-size: 10px; }\n.vellor-feature>b { margin-inline-start: auto; color: #c9ff70; }`,
    language: "HTML + CSS"
  },
  {
    id: "details-accordion",
    title: "Expandable FAQ",
    description: "A native HTML disclosure element styled as an FAQ.",
    category: "cards",
    categoryLabel: "Cards",
    html: `<details class="vellor-faq"><summary>Can I use this in a client project?<span>+</span></summary><p>Yes. Customize the component and use it in your own projects.</p></details>`,
    css: `.vellor-faq {\n  width: min(330px, 100%);\n  padding: 14px 16px;\n  border: 1px solid #ffffff1c;\n  border-radius: 7px;\n  background: #171720;\n  color: #f4f2f7;\n  font: 12px sans-serif;\n}\n.vellor-faq summary { display: flex; align-items: center; justify-content: space-between; gap: 10px; cursor: pointer; list-style: none; }\n.vellor-faq summary::-webkit-details-marker { display: none; }\n.vellor-faq summary span { color: #c9ff70; font-size: 18px; transition: transform .2s; }\n.vellor-faq[open] summary span { transform: rotate(45deg); }\n.vellor-faq p { margin: 12px 0 0; color: #aaa6b7; font-size: 10px; line-height: 1.8; }`,
    language: "HTML + CSS"
  },
  {
    id: "breadcrumb",
    title: "Breadcrumb Navigation",
    description: "A clear breadcrumb trail for nested pages.",
    category: "navbars",
    categoryLabel: "Navigation",
    html: `<nav class="vellor-breadcrumb" aria-label="Breadcrumb"><a href="#">Home</a><span>/</span><a href="#">Library</a><span>/</span><strong>Buttons</strong></nav>`,
    css: `.vellor-breadcrumb {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 10px 14px;\n  border: 1px solid #ffffff16;\n  border-radius: 6px;\n  background: #171720;\n  font: 11px sans-serif;\n}\n.vellor-breadcrumb a { color: #aaa6b7; text-decoration: none; }\n.vellor-breadcrumb a:hover, .vellor-breadcrumb strong { color: #c9ff70; }\n.vellor-breadcrumb span { color: #62606d; }`,
    language: "HTML + CSS"
  },
  {
    id: "text-input",
    title: "Styled Text Input",
    description: "A clean, accessible input with a visible focus ring.",
    category: "forms",
    categoryLabel: "Forms",
    html: `<label class="vellor-field"><span>Email address</span><input type="email" placeholder="you@example.com"></label>`,
    css: `.vellor-field { width: 260px; display: grid; gap: 7px; color: #d8d5df; font: 11px sans-serif; }\n.vellor-field input {\n  width: 100%;\n  padding: 11px 12px;\n  border: 1px solid #ffffff22;\n  border-radius: 5px;\n  outline: none;\n  background: #111119;\n  color: #f4f2f7;\n  font: 12px sans-serif;\n  transition: border-color .2s, box-shadow .2s;\n}\n.vellor-field input::placeholder { color: #777482; }\n.vellor-field input:focus { border-color: #c9ff70; box-shadow: 0 0 0 3px #c9ff7018; }`,
    language: "HTML + CSS"
  },
  {
    id: "search-form",
    title: "Search Field",
    description: "A ready-to-style search box with a submit button.",
    category: "forms",
    categoryLabel: "Forms",
    html: `<div class="vellor-search" role="search"><span aria-hidden="true">⌕</span><input type="search" aria-label="Search" placeholder="Search anything..."><button type="button" aria-label="Submit search">→</button></div>`,
    css: `.vellor-search {\n  width: min(330px, 100%);\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 5px 6px 5px 12px;\n  border: 1px solid #ffffff20;\n  border-radius: 7px;\n  background: #111119;\n  color: #aaa6b7;\n  font-family: sans-serif;\n}\n.vellor-search>span { color: #c9ff70; font-size: 20px; }\n.vellor-search input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; color: #f4f2f7; font-size: 11px; }\n.vellor-search input::placeholder { color: #777482; }\n.vellor-search button { width: 31px; height: 31px; border: 0; border-radius: 5px; background: #c9ff70; color: #11140c; font-size: 17px; cursor: pointer; }`,
    language: "HTML + CSS"
  },
  {
    id: "status-badges",
    title: "Status Badges",
    description: "Small semantic labels for common status states.",
    category: "badges",
    categoryLabel: "Badges",
    html: `<div class="vellor-badges"><span class="vellor-badge is-live">● Live</span><span class="vellor-badge is-draft">Draft</span><span class="vellor-badge is-new">New</span></div>`,
    css: `.vellor-badges { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 8px; font: 10px sans-serif; }\n.vellor-badge { padding: 6px 10px; border: 1px solid transparent; border-radius: 30px; }\n.vellor-badge.is-live { border-color: #76e59b40; background: #76e59b14; color: #91e9ac; }\n.vellor-badge.is-draft { border-color: #ffffff1a; background: #ffffff08; color: #aaa6b7; }\n.vellor-badge.is-new { border-color: #a78bfa55; background: #a78bfa18; color: #c3afff; }`,
    language: "HTML + CSS"
  },
  {
    id: "tech-tags",
    title: "Technology Tags",
    description: "Reusable pill tags for skills, topics, or filters.",
    category: "badges",
    categoryLabel: "Badges",
    html: `<div class="vellor-tags"><span>HTML</span><span>CSS</span><span>Design systems</span></div>`,
    css: `.vellor-tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; font: 10px sans-serif; }\n.vellor-tags span {\n  padding: 7px 11px;\n  border: 1px solid #ffffff1c;\n  border-radius: 5px;\n  background: #171720;\n  color: #d8d5df;\n  transition: border-color .2s, color .2s;\n}\n.vellor-tags span:hover { border-color: #c9ff70; color: #c9ff70; }`,
    language: "HTML + CSS"
  },
  {
    id: "progress-bar",
    title: "Animated Progress Bar",
    description: "A labeled progress indicator with a subtle fill animation.",
    category: "animations",
    categoryLabel: "Animations",
    html: `<div class="vellor-progress"><div><span>Uploading files</span><strong>72%</strong></div><span class="vellor-progress-track"><i></i></span></div>`,
    css: `.vellor-progress { width: min(300px, 100%); color: #d8d5df; font: 10px sans-serif; }\n.vellor-progress>div { display: flex; justify-content: space-between; margin-bottom: 8px; }\n.vellor-progress strong { color: #c9ff70; font-family: monospace; }\n.vellor-progress-track { height: 7px; display: block; overflow: hidden; border-radius: 10px; background: #ffffff16; }\n.vellor-progress-track i { width: 72%; height: 100%; display: block; border-radius: inherit; background: linear-gradient(90deg, #a78bfa, #c9ff70); transform-origin: left; animation: vellor-progress-in 1s ease-out both; }\n@keyframes vellor-progress-in { from { transform: scaleX(0); } to { transform: scaleX(1); } }\n@media (prefers-reduced-motion: reduce) { .vellor-progress-track i { animation: none; } }`,
    language: "HTML + CSS"
  },
  {
    id: "underline-link",
    title: "Animated Underline Link",
    description: "A text link with a smooth, expanding underline.",
    category: "animations",
    categoryLabel: "Animations",
    html: `<a class="vellor-underline-link" href="#">Explore the collection <span aria-hidden="true">↗</span></a>`,
    css: `.vellor-underline-link {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  padding-bottom: 5px;\n  color: #f4f2f7;\n  font: 13px sans-serif;\n  text-decoration: none;\n}\n.vellor-underline-link::after { position: absolute; right: 0; bottom: 0; left: 0; height: 1px; background: #c9ff70; content: \"\"; transform: scaleX(.25); transform-origin: left; transition: transform .25s; }\n.vellor-underline-link:hover::after { transform: scaleX(1); }\n.vellor-underline-link span { color: #c9ff70; }`,
    language: "HTML + CSS"
  }
];

const layoutComponents = [
  {
    id: "page-body",
    title: "Page Body Shell",
    description: "A complete page body with a header, content area, and footer.",
    html: `<div class="vellor-page-body"><header><strong>STUDIO<span>.</span></strong><a href="#">Menu</a></header><main><small>WELCOME</small><h2>Make room<br>for good ideas.</h2><p>A simple starting point for your next page.</p><button type="button">Get started ↗</button></main><footer>© 2025 Studio · Made with care</footer></div>`,
    css: `.vellor-page-body { width: 300px; min-height: 155px; display: flex; flex-direction: column; padding: 12px; border: 1px solid #ffffff1c; border-radius: 9px; background: #111119; color: #f4f2f7; font: 10px sans-serif; }\n.vellor-page-body header, .vellor-page-body footer { display: flex; align-items: center; justify-content: space-between; }\n.vellor-page-body header { color: #aaa6b7; }\n.vellor-page-body header strong { color: #f4f2f7; letter-spacing: 1px; }\n.vellor-page-body header strong span, .vellor-page-body main small { color: #c9ff70; }\n.vellor-page-body main { flex: 1; padding: 19px 4px; }\n.vellor-page-body main h2 { margin: 6px 0; font-size: 23px; line-height: 1.15; }\n.vellor-page-body main p { color: #aaa6b7; }\n.vellor-page-body button { padding: 8px 11px; border: 0; border-radius: 4px; background: #c9ff70; color: #11140c; }\n.vellor-page-body footer { padding-top: 9px; border-top: 1px solid #ffffff18; color: #888592; font-size: 8px; }`
  },
  {
    id: "hero-section",
    title: "Hero Section",
    description: "A bold landing-page introduction with a clear call to action.",
    html: `<section class="vellor-hero"><span>✦ &nbsp; YOUR NEXT BIG IDEA</span><h2>Build something<br>people love.</h2><p>Start with a clear message and make your first impression count.</p><button type="button">Explore more ↗</button></section>`,
    css: `.vellor-hero { width: 300px; padding: 20px; border: 1px solid #ffffff18; border-radius: 9px; background: radial-gradient(ellipse at top right, #a78bfa26, transparent 60%), #15141d; color: #f4f2f7; font-family: sans-serif; }\n.vellor-hero>span { color: #c9ff70; font-size: 8px; letter-spacing: 1px; }\n.vellor-hero h2 { margin: 10px 0 6px; font-size: 25px; line-height: 1.15; }\n.vellor-hero p { color: #aaa6b7; font-size: 10px; }\n.vellor-hero button { padding: 8px 11px; border: 0; border-radius: 4px; background: #c9ff70; color: #11140c; font-weight: 700; }`
  },
  {
    id: "sidebar-layout",
    title: "Sidebar Navigation",
    description: "A compact sidebar layout for dashboards and app pages.",
    html: `<div class="vellor-sidebar"><strong>✳ &nbsp; WORKSPACE</strong><a class="active" href="#">⌂ &nbsp; Overview</a><a href="#">▦ &nbsp; Projects</a><a href="#">⚙ &nbsp; Settings</a><small>TEAM</small><a href="#">＋ &nbsp; Invite member</a></div>`,
    css: `.vellor-sidebar { width: 190px; display: grid; gap: 6px; padding: 13px; border: 1px solid #ffffff18; border-radius: 8px; background: #15151d; color: #aaa6b7; font: 10px sans-serif; }\n.vellor-sidebar strong { margin-bottom: 8px; color: #f4f2f7; letter-spacing: .5px; }\n.vellor-sidebar a { padding: 7px 9px; border-radius: 4px; color: inherit; text-decoration: none; }\n.vellor-sidebar a.active { background: #c9ff7014; color: #c9ff70; }\n.vellor-sidebar small { margin: 9px 0 0 9px; color: #777482; font-size: 8px; letter-spacing: 1px; }`
  },
  {
    id: "page-footer",
    title: "Page Footer",
    description: "A tidy footer with a brand, useful links, and copyright.",
    html: `<footer class="vellor-page-footer"><div><strong>VELLOR<span>.</span></strong><p>Thoughtful tools for better ideas.</p></div><nav><a href="#">About</a><a href="#">Contact</a><a href="#">Privacy</a></nav><small>© 2025 Vellor Studio</small></footer>`,
    css: `.vellor-page-footer { width: 310px; display: grid; grid-template-columns: 1fr auto; gap: 12px; padding: 15px; border: 1px solid #ffffff18; border-radius: 8px; background: #15151d; color: #aaa6b7; font: 9px sans-serif; }\n.vellor-page-footer strong { color: #f4f2f7; letter-spacing: 1px; }\n.vellor-page-footer strong span { color: #c9ff70; }\n.vellor-page-footer p { margin: 5px 0 0; }\n.vellor-page-footer nav { display: grid; gap: 5px; }\n.vellor-page-footer a { color: #c9ff70; text-decoration: none; }\n.vellor-page-footer>small { grid-column: 1 / -1; padding-top: 8px; border-top: 1px solid #ffffff18; color: #777482; }`
  },
  {
    id: "dashboard-layout",
    title: "Dashboard Content",
    description: "A small dashboard panel with a title and stat cards.",
    html: `<section class="vellor-dashboard"><header><div><small>OVERVIEW</small><h3>Good morning, Alex</h3></div><button type="button">This week⌄</button></header><div class="vellor-dashboard-stats"><article><small>Projects</small><strong>24</strong></article><article><small>Growth</small><strong>+18%</strong></article></div></section>`,
    css: `.vellor-dashboard { width: 300px; padding: 14px; border: 1px solid #ffffff18; border-radius: 8px; background: #15151d; color: #f4f2f7; font: 10px sans-serif; }\n.vellor-dashboard header { display: flex; align-items: center; justify-content: space-between; gap: 8px; }\n.vellor-dashboard header small, .vellor-dashboard-stats small { color: #92909f; font-size: 8px; }\n.vellor-dashboard h3 { margin: 3px 0 12px; font-size: 14px; }\n.vellor-dashboard button { padding: 6px 8px; border: 1px solid #ffffff1c; border-radius: 4px; background: #1c1c25; color: #d8d5df; font-size: 8px; }\n.vellor-dashboard-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }\n.vellor-dashboard-stats article { display: grid; gap: 5px; padding: 9px; border: 1px solid #ffffff14; border-radius: 5px; background: #111119; }\n.vellor-dashboard-stats strong { color: #c9ff70; font-size: 17px; }`
  }
].map((component) => ({
  ...component,
  category: "layouts",
  categoryLabel: "Layouts",
  language: "HTML + CSS"
}));

components.push(...layoutComponents);

const bodyLayoutIdeas = [
  { id: "minimal-landing", title: "Minimal Landing Body", type: "center", eyebrow: "A QUIETER KIND OF WORK", heading: "Make space for your next idea.", copy: "A focused page body with a clear message and one useful action.", action: "Get started" },
  { id: "split-hero-body", title: "Split Hero Body", type: "split", eyebrow: "DESIGNED TO MOVE", heading: "Make your next launch effortless.", copy: "Pair a strong introduction with a compact visual panel.", action: "See how it works" },
  { id: "editorial-article-body", title: "Editorial Article Body", type: "article", eyebrow: "FIELD NOTES · 6 MIN READ", heading: "Good design starts with better questions.", copy: "The best digital experiences begin by listening. Make every detail feel intentional.", action: "Continue reading" },
  { id: "workspace-overview-body", title: "Workspace Overview Body", type: "dashboard", eyebrow: "MONDAY, MAY 19", heading: "Your work at a glance.", copy: "Check active projects, recent activity, and what is next on your list.", action: "Open workspace" },
  { id: "welcome-profile-body", title: "Welcome Profile Body", type: "profile", eyebrow: "YOUR CREATIVE SPACE", heading: "Welcome back, Alex.", copy: "Pick up where you left off or share your latest work.", action: "View profile" },
  { id: "product-page-body", title: "Product Page Body", type: "split", eyebrow: "INTRODUCING FORM 02", heading: "Tools that keep ideas flowing.", copy: "Introduce your product with helpful details and a direct next step.", action: "Explore product" },
  { id: "about-page-body", title: "About Page Body", type: "article", eyebrow: "A LITTLE ABOUT US", heading: "Small team. Thoughtful work.", copy: "We partner with ambitious people to shape useful digital products and lasting brands.", action: "Meet the team" },
  { id: "contact-page-body", title: "Contact Page Body", type: "center", eyebrow: "LET’S TALK", heading: "Have a good one in mind?", copy: "Tell us what you are working on. We would love to hear about your next project.", action: "hello@example.com" },
  { id: "blog-index-body", title: "Blog Index Body", type: "article", eyebrow: "THE JOURNAL", heading: "Ideas for making better things.", copy: "Notes on design, building products, and creating room for good work.", action: "Browse stories" },
  { id: "portfolio-intro-body", title: "Portfolio Introduction Body", type: "profile", eyebrow: "INDEPENDENT DESIGNER", heading: "I make digital things feel human.", copy: "Share your approach, selected projects, and what you can help with.", action: "View selected work" },
  { id: "pricing-page-body", title: "Pricing Page Body", type: "center", eyebrow: "SIMPLE, HONEST PRICING", heading: "Choose a plan that fits.", copy: "Start with what you need today and change your plan as your team grows.", action: "Compare plans" },
  { id: "help-center-body", title: "Help Center Body", type: "center", eyebrow: "HELP CENTER", heading: "What can we help you find?", copy: "Browse helpful guides, quick answers, and tips from the support team.", action: "Search the guides" },
  { id: "feature-overview-body", title: "Feature Overview Body", type: "split", eyebrow: "MADE FOR YOUR FLOW", heading: "Everything you need, nothing you don't.", copy: "Bring your everyday tools together in one calm, organized workspace.", action: "Explore features" },
  { id: "event-page-body", title: "Event Page Body", type: "center", eyebrow: "ONLINE · JUNE 12", heading: "A day for curious makers.", copy: "Join designers and builders for talks, fresh ideas, and good conversations.", action: "Reserve your place" },
  { id: "newsletter-signup-body", title: "Newsletter Signup Body", type: "center", eyebrow: "THE WEEKLY NOTE", heading: "A little inspiration, delivered.", copy: "One thoughtful email each week with useful links and things worth making.", action: "Join the newsletter" },
  { id: "app-dashboard-body", title: "App Dashboard Body", type: "dashboard", eyebrow: "PROJECT OVERVIEW", heading: "A clear view of what's moving.", copy: "Track active work, check recent updates, and keep your team in sync.", action: "View projects" },
  { id: "account-settings-body", title: "Account Settings Body", type: "profile", eyebrow: "ACCOUNT SETTINGS", heading: "Make this space yours.", copy: "Update your personal details, preferences, and workspace appearance.", action: "Edit settings" },
  { id: "launch-announcement-body", title: "Launch Announcement Body", type: "split", eyebrow: "NOW AVAILABLE", heading: "Meet a better way to build.", copy: "Introduce what's new and give visitors a clear next step.", action: "See what's new" },
  { id: "documentation-article-body", title: "Documentation Article Body", type: "article", eyebrow: "GETTING STARTED · 4 MIN", heading: "Your first project, step by step.", copy: "Create a workspace, invite your team, and turn your first idea into something real.", action: "Read the guide" },
  { id: "service-status-body", title: "Service Status Body", type: "dashboard", eyebrow: "ALL SYSTEMS OPERATIONAL", heading: "Everything is running smoothly.", copy: "See live service updates and recent incident history in one place.", action: "View uptime history" }
];

const bodyLayoutStyles = {
  center: (s) => `${s} { width: min(310px, 100%); padding: 20px; border: 1px solid #ffffff1c; border-radius: 9px; background: radial-gradient(ellipse at 85% 0, #a78bfa22, transparent 58%), #15151d; color: #f4f2f7; text-align: center; font: 10px/1.7 sans-serif; } ${s} small { color: #c9ff70; font-size: 8px; letter-spacing: 1px; } ${s} h3 { margin: 9px 0 7px; font-size: 22px; line-height: 1.2; } ${s} p { margin: 0 auto 14px; max-width: 250px; color: #aaa6b7; } ${s} a { display: inline-block; padding: 7px 11px; border-radius: 4px; background: #c9ff70; color: #11140c; font-weight: 700; text-decoration: none; }`,
  split: (s) => `${s} { width: min(340px, 100%); display: grid; grid-template-columns: 1.15fr .85fr; gap: 12px; align-items: center; padding: 15px; border: 1px solid #ffffff1c; border-radius: 9px; background: linear-gradient(135deg, #1c1a27, #111119); color: #f4f2f7; font: 9px/1.7 sans-serif; } ${s} small { color: #c9ff70; font-size: 7px; letter-spacing: .8px; } ${s} h3 { margin: 7px 0; font-size: 18px; line-height: 1.2; } ${s} p { margin: 0 0 10px; color: #aaa6b7; } ${s} a { color: #c9ff70; font-weight: 700; text-decoration: none; } ${s} aside { min-height: 100px; display: grid; place-items: center; border: 1px solid #c9ff7030; border-radius: 7px; background: radial-gradient(circle, #c9ff7028, #a78bfa18 45%, #171720 75%); color: #c9ff70; font-size: 28px; }`,
  article: (s) => `${s} { width: min(310px, 100%); padding: 18px 20px; border: 1px solid #ffffff1c; border-radius: 8px; background: #14141b; color: #f4f2f7; font: 10px/1.8 Georgia, serif; } ${s} small { color: #c9ff70; font: 7px/1.5 sans-serif; letter-spacing: 1px; } ${s} h3 { max-width: 260px; margin: 9px 0; font-size: 21px; line-height: 1.2; } ${s} p { margin: 0 0 12px; color: #aaa6b7; } ${s} a { padding-bottom: 3px; border-bottom: 1px solid #c9ff70; color: #c9ff70; font: 9px sans-serif; text-decoration: none; }`,
  dashboard: (s) => `${s} { width: min(320px, 100%); padding: 14px; border: 1px solid #ffffff1c; border-radius: 8px; background: #15151d; color: #f4f2f7; font: 9px/1.6 sans-serif; } ${s} header { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; } ${s} header i { width: 7px; height: 7px; border-radius: 50%; background: #91e995; box-shadow: 0 0 10px #91e995; } ${s} small { color: #92909f; font-size: 7px; letter-spacing: .6px; } ${s} h3 { margin: 3px 0 9px; font-size: 16px; } ${s} p { margin: 0 0 10px; color: #aaa6b7; } ${s} .metrics { display: flex; gap: 7px; } ${s} .metrics span { flex: 1; padding: 7px; border: 1px solid #ffffff14; border-radius: 5px; background: #111119; color: #c9ff70; } ${s} a { display: block; margin-top: 9px; color: #c9ff70; text-decoration: none; }`,
  profile: (s) => `${s} { width: min(310px, 100%); padding: 17px; border: 1px solid #ffffff1c; border-radius: 10px; background: linear-gradient(145deg, #232131, #14141b 65%); color: #f4f2f7; font: 9px/1.7 sans-serif; } ${s} header { display: flex; align-items: center; gap: 10px; margin-bottom: 13px; } ${s} header i { width: 39px; height: 39px; display: grid; place-items: center; border-radius: 50%; background: linear-gradient(135deg, #c9ff70, #a78bfa); color: #11140c; font-size: 15px; font-style: normal; font-weight: 700; } ${s} small { color: #c9ff70; font-size: 7px; letter-spacing: .7px; } ${s} h3 { margin: 8px 0 5px; font-size: 19px; line-height: 1.2; } ${s} p { margin: 0 0 12px; color: #aaa6b7; } ${s} a { display: inline-block; padding: 6px 9px; border: 1px solid #c9ff7055; border-radius: 4px; color: #c9ff70; text-decoration: none; }`
};

bodyLayoutIdeas.forEach((idea) => {
  const className = `vellor-body-${idea.id}`;
  const selector = `.${className}`;
  let html;

  if (idea.type === "split") {
    html = `<section class="${className}"><div><small>${idea.eyebrow}</small><h3>${idea.heading}</h3><p>${idea.copy}</p><a href="#">${idea.action} ↗</a></div><aside aria-hidden="true">✦</aside></section>`;
  } else if (idea.type === "article") {
    html = `<article class="${className}"><small>${idea.eyebrow}</small><h3>${idea.heading}</h3><p>${idea.copy}</p><a href="#">${idea.action} →</a></article>`;
  } else if (idea.type === "dashboard") {
    html = `<section class="${className}"><header><i></i><small>${idea.eyebrow}</small></header><h3>${idea.heading}</h3><p>${idea.copy}</p><div class="metrics"><span>Active · 08</span><span>Updated · Today</span></div><a href="#">${idea.action} ↗</a></section>`;
  } else if (idea.type === "profile") {
    html = `<section class="${className}"><header><i aria-hidden="true">V</i><small>${idea.eyebrow}</small></header><h3>${idea.heading}</h3><p>${idea.copy}</p><a href="#">${idea.action} ↗</a></section>`;
  } else {
    html = `<section class="${className}"><small>${idea.eyebrow}</small><h3>${idea.heading}</h3><p>${idea.copy}</p><a href="#">${idea.action} ↗</a></section>`;
  }

  components.push({
    id: idea.id,
    title: idea.title,
    description: idea.copy,
    category: "layouts",
    categoryLabel: "Layouts",
    html,
    css: bodyLayoutStyles[idea.type](selector),
    language: "HTML + CSS"
  });
});

const extraComponentIdeas = [
  { title: "Soft Glow", description: "A bright call to action with a gentle halo.", category: "buttons" },
  { title: "Split Action", description: "A crisp action button with a compact arrow.", category: "buttons" },
  { title: "Quiet Action", description: "A minimal secondary action for calm interfaces.", category: "buttons" },
  { title: "Rounded Action", description: "A friendly rounded button with a vivid accent.", category: "buttons" },
  { title: "Creator Profile", description: "A focused profile card for a creative portfolio.", category: "cards" },
  { title: "Project Spotlight", description: "A compact feature card for a featured project.", category: "cards" },
  { title: "Membership Plan", description: "A clear plan card with a simple highlighted action.", category: "cards" },
  { title: "Quick Announcement", description: "A small announcement panel for timely updates.", category: "cards" },
  { title: "Section Links", description: "A compact set of links with a highlighted destination.", category: "navbars" },
  { title: "Workspace Menu", description: "A tidy navigation strip for a product workspace.", category: "navbars" },
  { title: "Page Trail", description: "A lightweight trail showing the current page location.", category: "navbars" },
  { title: "Studio Navigation", description: "A simple studio menu with a prominent action.", category: "navbars" },
  { title: "Orbit Loader", description: "A small rotating indicator for loading states.", category: "animations" },
  { title: "Wave Dots", description: "Three animated dots to indicate ongoing activity.", category: "animations" },
  { title: "Upload Progress", description: "A compact progress meter with a bright fill.", category: "animations" },
  { title: "Underline Motion", description: "A link with a smooth animated accent underline.", category: "animations" },
  { title: "Email Field", description: "A labeled email field with a clear focus treatment.", category: "forms" },
  { title: "Quick Search", description: "A compact search field for finding content.", category: "forms" },
  { title: "Availability Labels", description: "Small status labels for quick visual scanning.", category: "badges" },
  { title: "Topic Tags", description: "Reusable topic tags for content and projects.", category: "badges" }
];

const extraPalettes = [
  { name: "Lime", color: "#c9ff70" },
  { name: "Violet", color: "#b89cff" },
  { name: "Coral", color: "#ff9d8f" },
  { name: "Sky", color: "#80d9ff" },
  { name: "Mint", color: "#78e8c0" }
];

extraComponentIdeas.forEach((idea, ideaIndex) => {
  extraPalettes.forEach((palette, paletteIndex) => {
    const id = `extra-${ideaIndex + 1}-${palette.name.toLowerCase()}`;
    const className = `vellor-${id}`;
    let html;
    let css;

    if (idea.category === "buttons") {
      html = `<button class="${className}" type="button">${idea.title} <span aria-hidden="true">↗</span></button>`;
      css = `.${className} { display: inline-flex; align-items: center; gap: 16px; padding: 12px 17px; border: 1px solid ${palette.color}; border-radius: ${6 + paletteIndex * 3}px; background: ${palette.color}; color: #11140c; font: 700 12px sans-serif; cursor: pointer; box-shadow: 0 0 24px ${palette.color}35; transition: transform .2s; } .${className}:hover { transform: translateY(-3px); } .${className} span { font-size: 16px; }`;
    } else if (idea.category === "cards") {
      html = `<article class="${className}"><small>${palette.name} / FEATURE</small><h3>${idea.title}</h3><p>${idea.description}</p><a href="#">Explore <b aria-hidden="true">↗</b></a></article>`;
      css = `.${className} { width: 245px; padding: 17px; border: 1px solid ${palette.color}55; border-radius: ${7 + paletteIndex * 2}px; background: linear-gradient(145deg, ${palette.color}18, #171720 72%); color: #f4f2f7; font-family: sans-serif; } .${className} small { color: ${palette.color}; font-size: 8px; letter-spacing: 1px; } .${className} h3 { margin: 11px 0 5px; font-size: 16px; } .${className} p { margin: 0 0 13px; color: #aaa6b7; font-size: 10px; } .${className} a { color: ${palette.color}; font-size: 10px; text-decoration: none; }`;
    } else if (idea.category === "navbars") {
      html = `<nav class="${className}" aria-label="${idea.title}"><strong>VELLOR<span>.</span></strong><a href="#">${idea.title}</a><a href="#">Explore ↗</a></nav>`;
      css = `.${className} { width: min(330px, 100%); display: flex; align-items: center; justify-content: space-between; gap: 9px; padding: 11px; border: 1px solid #ffffff1c; border-radius: ${5 + paletteIndex * 2}px; background: #171720; font: 9px sans-serif; } .${className} strong { color: #f4f2f7; letter-spacing: 1px; } .${className} strong span, .${className} a:last-child { color: ${palette.color}; } .${className} a { color: #b4b0be; text-decoration: none; }`;
    } else if (idea.category === "animations") {
      html = `<div class="${className}" role="status" aria-label="${idea.title}"><span></span><span></span><span></span></div>`;
      css = `.${className} { width: 180px; display: flex; align-items: center; justify-content: center; gap: 9px; padding: 20px; border: 1px solid #ffffff14; border-radius: ${6 + paletteIndex * 2}px; background: #171720; } .${className} span { width: 10px; height: 10px; border-radius: 50%; background: ${palette.color}; animation: ${id}-bounce .75s ease-in-out infinite alternate; } .${className} span:nth-child(2) { animation-delay: .18s; } .${className} span:nth-child(3) { animation-delay: .36s; } @keyframes ${id}-bounce { to { opacity: .35; transform: translateY(-8px); } } @media (prefers-reduced-motion: reduce) { .${className} span { animation-duration: 2s; } }`;
    } else if (idea.category === "forms") {
      html = `<label class="${className}"><span>${idea.title}</span><input type="${idea.title === "Email Field" ? "email" : "search"}" placeholder="${idea.title === "Email Field" ? "you@example.com" : "Search projects..."}"></label>`;
      css = `.${className} { width: 255px; display: grid; gap: 7px; color: #d8d5df; font: 10px sans-serif; } .${className} input { width: 100%; padding: 11px; border: 1px solid #ffffff24; border-radius: ${4 + paletteIndex * 2}px; outline: 0; background: #111119; color: #f4f2f7; font: 11px sans-serif; } .${className} input::placeholder { color: #777482; } .${className} input:focus { border-color: ${palette.color}; box-shadow: 0 0 0 3px ${palette.color}22; }`;
    } else {
      html = `<div class="${className}"><span>${palette.name}</span><span>${idea.title}</span><span>Ready</span></div>`;
      css = `.${className} { display: flex; flex-wrap: wrap; justify-content: center; gap: 7px; font: 9px sans-serif; } .${className} span { padding: 6px 9px; border: 1px solid ${palette.color}45; border-radius: ${20 + paletteIndex * 3}px; background: ${palette.color}14; color: ${palette.color}; } .${className} span:nth-child(2) { color: #e3e0e9; border-color: #ffffff20; background: #171720; }`;
    }

    components.push({
      id,
      title: `${idea.title} — ${palette.name}`,
      description: idea.description,
      category: idea.category,
      categoryLabel: ({ buttons: "Buttons", cards: "Cards", navbars: "Navigation", animations: "Animations", forms: "Forms", badges: "Badges" })[idea.category],
      html,
      css,
      language: "HTML + CSS",
      previewClass: idea.category === "animations" ? "preview-dark" : ""
    });
  });
});

const backgroundComponents = [
  {
    id: "background-soft-glow",
    title: "Soft Glow",
    description: "A calm dark body background with gentle lime and violet light.",
    html: `<div class="vellor-bg-soft-glow" role="img" aria-label="Soft green and violet glowing background"></div>`,
    css: `.vellor-bg-soft-glow { position: relative; width: 320px; height: 130px; overflow: hidden; border-radius: 9px; background: radial-gradient(ellipse at 25% 80%, #c9ff7040, transparent 42%), radial-gradient(ellipse at 78% 15%, #a78bfa55, transparent 45%), #101018; }
.vellor-bg-soft-glow::after { position: absolute; inset: 0; background: linear-gradient(120deg, transparent 25%, #ffffff08 50%, transparent 75%); content: ""; }`
  },
  {
    id: "background-neon-pulse",
    title: "Neon Pulse",
    description: "A glowing body background with neon light that slowly breathes in and out.",
    html: `<div class="vellor-bg-neon-pulse" role="img" aria-label="Pulsing neon background"></div>`,
    css: `.vellor-bg-neon-pulse { width: 320px; height: 130px; border-radius: 9px; background: radial-gradient(ellipse at 50% 110%, #ff36c855, transparent 48%), radial-gradient(ellipse at 15% 10%, #35d9ff55, transparent 40%), #090b16; animation: vellor-neon-pulse 3.5s ease-in-out infinite alternate; }
@keyframes vellor-neon-pulse { to { filter: brightness(1.55) saturate(1.2); } }
@media (prefers-reduced-motion: reduce) { .vellor-bg-neon-pulse { animation: none; } }`
  },
  {
    id: "background-flames",
    title: "Ember Flames",
    description: "A fiery body background with orange and red glow and softly flickering embers.",
    html: `<div class="vellor-bg-flames" role="img" aria-label="Abstract glowing ember background"></div>`,
    css: `.vellor-bg-flames { position: relative; width: 320px; height: 130px; overflow: hidden; border-radius: 9px; background: radial-gradient(ellipse at 50% 120%, #ffb21c 0, #ff542b88 28%, transparent 62%), radial-gradient(ellipse at 15% 100%, #ff362e99, transparent 45%), #100d13; }
.vellor-bg-flames::before { position: absolute; inset: 0; background: radial-gradient(ellipse at 70% 95%, #ff7a1c99, transparent 32%), radial-gradient(ellipse at 38% 75%, #ffcf3c66, transparent 25%); content: ""; animation: vellor-embers 1.8s ease-in-out infinite alternate; }
@keyframes vellor-embers { to { opacity: .45; transform: scale(1.08) translateY(-5px); } }
@media (prefers-reduced-motion: reduce) { .vellor-bg-flames::before { animation: none; } }`
  },
  {
    id: "background-aurora",
    title: "Aurora Drift",
    description: "A body background with a smooth blend of green, teal, and violet aurora light.",
    html: `<div class="vellor-bg-aurora" role="img" aria-label="Soft flowing aurora background"></div>`,
    css: `.vellor-bg-aurora { width: 320px; height: 130px; border-radius: 9px; background: radial-gradient(ellipse at 15% 80%, #49e6ad88, transparent 40%), radial-gradient(ellipse at 52% 5%, #65b7ff77, transparent 42%), radial-gradient(ellipse at 95% 85%, #bd71ff77, transparent 38%), #0a1018; background-size: 140% 140%; animation: vellor-aurora 7s ease-in-out infinite alternate; }
@keyframes vellor-aurora { to { background-position: 100% 0, 0 100%, 50% 0; filter: hue-rotate(18deg); } }
@media (prefers-reduced-motion: reduce) { .vellor-bg-aurora { animation: none; } }`
  },
  {
    id: "background-calm-mist",
    title: "Calm Mist",
    description: "A quiet body background with a low-contrast gradient for focused content.",
    html: `<div class="vellor-bg-calm-mist" role="img" aria-label="Quiet misty gradient background"></div>`,
    css: `.vellor-bg-calm-mist { width: 320px; height: 130px; border: 1px solid #ffffff12; border-radius: 9px; background: radial-gradient(ellipse at 20% 20%, #8092b51c, transparent 50%), radial-gradient(ellipse at 80% 90%, #a78bfa18, transparent 48%), linear-gradient(135deg, #171923, #101117); }`
  },
  {
    id: "background-sunset",
    title: "Quiet Sunset",
    description: "A warm sunset body background with a soft, understated glow.",
    html: `<div class="vellor-bg-sunset" role="img" aria-label="Muted sunset gradient background"></div>`,
    css: `.vellor-bg-sunset { width: 320px; height: 130px; border-radius: 9px; background: radial-gradient(ellipse at 50% 105%, #ffb17a55, transparent 48%), linear-gradient(160deg, #27202a, #17151d 60%, #111117); }`
  },
  {
    id: "background-starry-night",
    title: "Starry Night",
    description: "A starry night-sky body background with a deep gradient and tiny stars.",
    html: `<div class="vellor-bg-starry-night" role="img" aria-label="Dark starry night background"></div>`,
    css: `.vellor-bg-starry-night { width: 320px; height: 130px; border-radius: 9px; background: radial-gradient(circle at 15% 25%, #ffffffaa 0 1px, transparent 1.5px), radial-gradient(circle at 72% 35%, #c9ff70aa 0 1px, transparent 1.5px), radial-gradient(circle at 48% 72%, #ffffff88 0 1px, transparent 1.5px), radial-gradient(ellipse at 50% 0, #50408066, transparent 65%), #0b0d16; background-size: 53px 47px, 71px 59px, 83px 67px, auto, auto; }`
  },
  {
    id: "background-color-wash",
    title: "Fading Color Wash",
    description: "A body background with a soft color wash that fades gently into a dark base.",
    html: `<div class="vellor-bg-color-wash" role="img" aria-label="Fading violet and blue color wash"></div>`,
    css: `.vellor-bg-color-wash { width: 320px; height: 130px; border-radius: 9px; background: linear-gradient(115deg, #8b6bff66, transparent 55%), radial-gradient(ellipse at 85% 15%, #4bb9ff55, transparent 48%), #11121a; }`
  }
].map((component) => {
  const previewHtml = component.html;
  const previewCss = component.css;
  const previewSelector = `.vellor-bg-${component.id.replace("background-", "")}`;
  const bodyCss = component.css
    .replaceAll(previewSelector, "body")
    .replace(/width: 320px;\s*/g, "")
    .replace(/height: 130px;\s*/g, "")
    .replace(/border-radius: 9px;\s*/g, "")
    .replace(/overflow: hidden;\s*/g, "");

  return {
    ...component,
    html: "<!-- No extra HTML is needed; this background styles the page body. -->",
    css: `body { min-height: 100vh; margin: 0; background-attachment: fixed; background-repeat: no-repeat; background-size: cover; }\n${bodyCss}`,
    previewHtml,
    previewCss,
    category: "backgrounds",
    categoryLabel: "Backgrounds",
    language: "CSS for body",
    previewClass: "preview-dark"
  };
});

components.push(...backgroundComponents);

const premiumBackgroundIdeas = [
  {
    id: "background-deep-ocean",
    title: "Deep Ocean",
    description: "A polished body background with layered navy, teal, and underwater light.",
    image: "radial-gradient(ellipse at 15% 15%, #1fc8db55, transparent 32%), radial-gradient(ellipse at 85% 75%, #2457c566, transparent 38%), radial-gradient(ellipse at 48% 110%, #0b8f8766, transparent 48%), linear-gradient(145deg, #071522, #0a1020 58%, #101426)"
  },
  {
    id: "background-violet-velvet",
    title: "Violet Velvet",
    description: "A refined dark-purple body background with a soft lavender spotlight.",
    image: "radial-gradient(ellipse at 72% 12%, #c084fc55, transparent 32%), radial-gradient(ellipse at 12% 85%, #6d45bc55, transparent 42%), linear-gradient(135deg, #171222, #100f19 58%, #17101d)"
  },
  {
    id: "background-emerald-forest",
    title: "Emerald Forest",
    description: "A calm forest-green body background with layered emerald light.",
    image: "radial-gradient(ellipse at 18% 25%, #32d58348, transparent 34%), radial-gradient(ellipse at 90% 80%, #087f5b55, transparent 40%), radial-gradient(ellipse at 55% 0%, #a3e63520, transparent 36%), linear-gradient(145deg, #071914, #0a1718 58%, #10151a)"
  },
  {
    id: "background-rose-quartz",
    title: "Rose Quartz",
    description: "A sophisticated charcoal background with muted rose and blush illumination.",
    image: "radial-gradient(ellipse at 80% 8%, #fb718555, transparent 35%), radial-gradient(ellipse at 12% 90%, #be557955, transparent 42%), linear-gradient(145deg, #1c121b, #131118 58%, #1b1219)"
  },
  {
    id: "background-midnight-grid",
    title: "Midnight Grid",
    description: "A modern midnight body background with a subtle blue technical grid.",
    image: "linear-gradient(#60a5fa12 1px, transparent 1px), linear-gradient(90deg, #60a5fa12 1px, transparent 1px), radial-gradient(ellipse at 50% 0%, #2563eb38, transparent 48%), linear-gradient(#0b1220, #090d17)",
    size: "42px 42px, 42px 42px, auto, auto"
  },
  {
    id: "background-solar-flare",
    title: "Solar Flare",
    description: "A dramatic amber and copper body background with a warm horizon glow.",
    image: "radial-gradient(ellipse at 50% 110%, #ffb02088, transparent 36%), radial-gradient(ellipse at 12% 80%, #f05a2880, transparent 38%), radial-gradient(ellipse at 88% 15%, #ff6b3540, transparent 35%), linear-gradient(160deg, #1b1114, #100d13 60%, #17100e)"
  },
  {
    id: "background-arctic-glass",
    title: "Arctic Glass",
    description: "A crisp cool-toned body background with icy blue and silver light.",
    image: "radial-gradient(ellipse at 16% 16%, #a5f3fc35, transparent 38%), radial-gradient(ellipse at 88% 78%, #60a5fa40, transparent 42%), radial-gradient(ellipse at 50% 105%, #e0f2fe18, transparent 45%), linear-gradient(145deg, #0c1722, #111722 58%, #10131d)"
  },
  {
    id: "background-desert-dusk",
    title: "Desert Dusk",
    description: "A warm, understated body background inspired by sunset over desert sand.",
    image: "radial-gradient(ellipse at 75% 12%, #f4a26155, transparent 36%), radial-gradient(ellipse at 15% 88%, #c56b4a50, transparent 42%), linear-gradient(160deg, #241820, #19151c 55%, #171218)"
  },
  {
    id: "background-blue-hour",
    title: "Blue Hour",
    description: "A clean deep-blue body background with a quiet electric-blue glow.",
    image: "radial-gradient(ellipse at 55% 0%, #3b82f655, transparent 42%), radial-gradient(ellipse at 0% 100%, #0ea5e955, transparent 38%), linear-gradient(145deg, #091321, #0d1220 58%, #10111b)"
  },
  {
    id: "background-monochrome-noir",
    title: "Monochrome Noir",
    description: "A minimal charcoal body background with layered soft silver highlights.",
    image: "radial-gradient(ellipse at 78% 10%, #d4d4d822, transparent 35%), radial-gradient(ellipse at 10% 90%, #73737320, transparent 40%), linear-gradient(145deg, #191a1d, #101114 58%, #171719)"
  },
  {
    id: "background-holographic-mesh",
    title: "Holographic Mesh",
    description: "A vivid but balanced body background blending teal, violet, and magenta light.",
    image: "radial-gradient(ellipse at 10% 20%, #2dd4bf55, transparent 34%), radial-gradient(ellipse at 88% 18%, #a855f755, transparent 37%), radial-gradient(ellipse at 55% 100%, #ec489955, transparent 42%), linear-gradient(145deg, #11121b, #10121a 55%, #17111c)"
  },
  {
    id: "background-moss-stone",
    title: "Moss & Stone",
    description: "An organic muted body background with moss-green and slate highlights.",
    image: "radial-gradient(ellipse at 20% 12%, #84cc1640, transparent 36%), radial-gradient(ellipse at 86% 86%, #64748b44, transparent 42%), linear-gradient(145deg, #141915, #111519 56%, #17191a)"
  }
];

premiumBackgroundIdeas.forEach((idea) => {
  const selector = `.vellor-${idea.id}`;
  const size = idea.size || "cover";
  const previewHtml = `<div class="vellor-${idea.id}" role="img" aria-label="${idea.title} body background"></div>`;
  const previewCss = `${selector} { width: 320px; height: 130px; border-radius: 9px; background-image: ${idea.image}; background-size: ${size}; background-repeat: no-repeat; }`;
  const bodyCss = `body { min-height: 100vh; margin: 0; background-attachment: fixed; background-repeat: no-repeat; background-size: ${size}; background-image: ${idea.image}; }`;

  const premiumBackground = {
    id: idea.id,
    title: idea.title,
    description: idea.description,
    html: "<!-- No extra HTML is needed; this background styles the page body. -->",
    css: bodyCss,
    previewHtml,
    previewCss,
    category: "backgrounds",
    categoryLabel: "Backgrounds",
    language: "CSS for body",
    previewClass: "preview-dark"
  };
  backgroundComponents.push(premiumBackground);
  components.push(premiumBackground);
});

const professionalButtons = [
  {
    id: "button-neon-glow",
    title: "Neon Glow Button",
    description: "A dark button that lights up with a vivid neon glow on hover.",
    html: `<button class="vellor-neon-glow" type="button">Launch project <span aria-hidden="true">↗</span></button>`,
    css: `.vellor-neon-glow { display: inline-flex; align-items: center; gap: 16px; padding: 13px 19px; border: 1px solid #a78bfa; border-radius: 6px; background: #15131e; color: #e9e2ff; font: 600 13px sans-serif; cursor: pointer; transition: color .25s, background .25s, box-shadow .25s, transform .25s; }
.vellor-neon-glow span { color: #c9ff70; }
.vellor-neon-glow:hover { transform: translateY(-2px); background: #a78bfa; color: #100d18; box-shadow: 0 0 12px #a78bfa, 0 0 32px #a78bfa88; }
.vellor-neon-glow:hover span { color: #100d18; }
@media (prefers-reduced-motion: reduce) { .vellor-neon-glow { transition: none; } }`
  },
  {
    id: "button-scale-pop",
    title: "Scale Pop Button",
    description: "A clean accent button that grows smoothly when hovered.",
    html: `<button class="vellor-scale-pop" type="button">Get started <span aria-hidden="true">→</span></button>`,
    css: `.vellor-scale-pop { display: inline-flex; align-items: center; gap: 15px; padding: 13px 20px; border: 0; border-radius: 7px; background: #c9ff70; color: #11140c; font: 700 13px sans-serif; cursor: pointer; transition: transform .22s cubic-bezier(.2,.8,.2,1), box-shadow .22s; }
.vellor-scale-pop:hover { transform: scale(1.08); box-shadow: 0 9px 24px #c9ff7045; }
.vellor-scale-pop:active { transform: scale(1.02); }
@media (prefers-reduced-motion: reduce) { .vellor-scale-pop { transition: none; } }`
  },
  {
    id: "button-side-fill",
    title: "Side-Swipe Fill Button",
    description: "A calm outlined button filled with color from the side on hover.",
    html: `<button class="vellor-side-fill" type="button"><span>Explore services</span><b aria-hidden="true">↗</b></button>`,
    css: `.vellor-side-fill { position: relative; isolation: isolate; display: inline-flex; align-items: center; gap: 18px; overflow: hidden; padding: 12px 17px; border: 1px solid #c9ff70; border-radius: 5px; background: transparent; color: #f4f2f7; font: 600 12px sans-serif; cursor: pointer; }
.vellor-side-fill::before { position: absolute; z-index: -1; inset: 0; background: #c9ff70; content: ""; transform: scaleX(0); transform-origin: left; transition: transform .32s ease; }
.vellor-side-fill b { color: #c9ff70; transition: color .25s; }
.vellor-side-fill:hover::before { transform: scaleX(1); }
.vellor-side-fill:hover { color: #11140c; }
.vellor-side-fill:hover b { color: #11140c; }
@media (prefers-reduced-motion: reduce) { .vellor-side-fill::before { transition: none; } }`
  },
  {
    id: "button-gradient-sweep",
    title: "Gradient Sweep Button",
    description: "A polished gradient action with a brighter color sweep on hover.",
    html: `<button class="vellor-gradient-sweep" type="button">Create account <span aria-hidden="true">✦</span></button>`,
    css: `.vellor-gradient-sweep { display: inline-flex; align-items: center; gap: 13px; padding: 13px 19px; border: 0; border-radius: 7px; background: linear-gradient(110deg, #8f74f5, #c39cff 48%, #79e6c0); background-size: 200% 100%; color: #11121a; font: 700 12px sans-serif; cursor: pointer; transition: background-position .4s, box-shadow .3s, transform .3s; }
.vellor-gradient-sweep:hover { transform: translateY(-2px); background-position: 100% 0; box-shadow: 0 8px 26px #a78bfa55; }
@media (prefers-reduced-motion: reduce) { .vellor-gradient-sweep { transition: none; } }`
  },
  {
    id: "button-shine-pass",
    title: "Shine Pass Button",
    description: "A bright primary action with a moving highlight that passes across it.",
    html: `<button class="vellor-shine-pass" type="button"><span>Book a demo</span><b aria-hidden="true">→</b></button>`,
    css: `.vellor-shine-pass { position: relative; display: inline-flex; align-items: center; gap: 18px; overflow: hidden; padding: 13px 19px; border: 1px solid #d7ff9a; border-radius: 6px; background: #c9ff70; color: #11140c; font: 700 12px sans-serif; cursor: pointer; }
.vellor-shine-pass::after { position: absolute; inset: -50% auto -50% -45%; width: 35%; background: #ffffff99; content: ""; transform: skewX(-22deg); transition: left .45s ease; }
.vellor-shine-pass:hover::after { left: 120%; }
.vellor-shine-pass:hover { box-shadow: 0 6px 22px #c9ff7045; }
.vellor-shine-pass span, .vellor-shine-pass b { position: relative; z-index: 1; }
@media (prefers-reduced-motion: reduce) { .vellor-shine-pass::after { transition: none; } }`
  },
  {
    id: "button-lift-shadow",
    title: "Lift & Shadow Button",
    description: "A refined neutral button that lifts with a soft shadow on hover.",
    html: `<button class="vellor-lift-shadow" type="button">View collection <span aria-hidden="true">↗</span></button>`,
    css: `.vellor-lift-shadow { display: inline-flex; align-items: center; gap: 15px; padding: 12px 18px; border: 1px solid #ffffff26; border-radius: 6px; background: #20202a; color: #f4f2f7; font: 600 12px sans-serif; cursor: pointer; transition: transform .22s, border-color .22s, box-shadow .22s; }
.vellor-lift-shadow span { color: #c9ff70; }
.vellor-lift-shadow:hover { transform: translateY(-4px); border-color: #c9ff7070; box-shadow: 0 10px 22px #0006; }
@media (prefers-reduced-motion: reduce) { .vellor-lift-shadow { transition: none; } }`
  },
  {
    id: "button-border-trace",
    title: "Border Glow Button",
    description: "A minimal dark button with a glowing accent border on hover.",
    html: `<button class="vellor-border-glow" type="button">Learn more <span aria-hidden="true">↗</span></button>`,
    css: `.vellor-border-glow { display: inline-flex; align-items: center; gap: 15px; padding: 12px 18px; border: 1px solid #ffffff25; border-radius: 6px; background: #15151d; color: #dedbe6; font: 600 12px sans-serif; cursor: pointer; transition: border-color .25s, color .25s, box-shadow .25s; }
.vellor-border-glow span { color: #92909f; transition: color .25s; }
.vellor-border-glow:hover { border-color: #c9ff70; color: #c9ff70; box-shadow: 0 0 18px #c9ff7028, inset 0 0 12px #c9ff7010; }
.vellor-border-glow:hover span { color: #c9ff70; }`
  },
  {
    id: "button-press-depth",
    title: "Press Depth Button",
    description: "A dimensional button that presses down naturally when clicked.",
    html: `<button class="vellor-press-depth" type="button">Add to workspace <span aria-hidden="true">＋</span></button>`,
    css: `.vellor-press-depth { display: inline-flex; align-items: center; gap: 13px; padding: 13px 18px; border: 1px solid #8ee8c0; border-radius: 6px; background: #78e8c0; color: #102019; font: 700 12px sans-serif; cursor: pointer; box-shadow: 0 4px 0 #398c70; transition: transform .12s, box-shadow .12s, filter .2s; }
.vellor-press-depth:hover { filter: brightness(1.08); }
.vellor-press-depth:active { transform: translateY(3px); box-shadow: 0 1px 0 #398c70; }`
  }
].map((button) => ({
  ...button,
  category: "buttons",
  categoryLabel: "Buttons",
  language: "HTML + CSS"
}));

components.push(...professionalButtons);

const categoryLabels = {
  all: "All",
  buttons: "Buttons",
  cards: "Cards",
  navbars: "Navigation",
  animations: "Animations",
  forms: "Forms",
  badges: "Badges",
  layouts: "Layouts",
  backgrounds: "Backgrounds",
  body: "Body backgrounds"
};
const grid = document.querySelector("#componentGrid");
const searchInput = document.querySelector("#searchInput");
const toast = document.querySelector("#toast");
let selectedCategory = "all";
let toastTimer;

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function renderComponents() {
  const query = searchInput.value.trim().toLocaleLowerCase("en");
  const visibleComponents = components.filter((component) => {
    const matchesCategory = selectedCategory === "all"
      || component.category === selectedCategory
      || (selectedCategory === "body" && component.category === "backgrounds");
    const searchable = `${component.title} ${component.description} ${component.categoryLabel}`.toLocaleLowerCase("en");
    return matchesCategory && searchable.includes(query);
  });

  grid.innerHTML = visibleComponents.map((component) => `
    <article class="component-card" data-component="${component.id}">
      <header class="component-head">
        <div class="component-title"><h3>${escapeHtml(component.title)}</h3><p>${escapeHtml(component.description)}</p></div>
        <span class="component-category">${escapeHtml(component.categoryLabel)}</span>
      </header>
        <div class="component-preview ${component.previewClass || ""}" data-preview>${component.previewHtml || component.html}<style>${component.previewCss || component.css}</style></div>
      <div class="component-tabs" role="tablist" aria-label="Code view options">
        <button class="component-tab active" type="button" role="tab" aria-selected="true" data-code-tab="preview">Preview</button>
        <button class="component-tab" type="button" role="tab" aria-selected="false" data-code-tab="html">HTML</button>
        <button class="component-tab" type="button" role="tab" aria-selected="false" data-code-tab="css">CSS</button>
        <button class="copy-icon-button" type="button" data-copy="all" aria-label="Copy HTML and CSS" title="Copy HTML and CSS">${copyIcon}</button>
      </div>
      <pre class="component-code" data-code="html" hidden><code>${escapeHtml(component.html.trim())}</code></pre>
      <pre class="component-code" data-code="css" hidden><code>${escapeHtml(component.css.trim())}</code></pre>
      <footer class="component-card-footer"><span>${component.language || "HTML + CSS"}</span>${component.category === "backgrounds" ? `<button class="apply-background-button" type="button" data-apply-background="${component.id}" aria-pressed="${document.body.dataset.background === component.id}">${document.body.dataset.background === component.id ? "Reset background" : "Apply to page"}</button>` : ""}<button class="copy-code-button" type="button" data-copy="all">${copyIcon}<span>Copy code</span></button></footer>
    </article>
  `).join("");

  document.querySelector("#totalCount").textContent = components.length;
  document.querySelector("#resultSummary").textContent = query
    ? `Search results: ${visibleComponents.length}`
    : `${categoryLabels[selectedCategory]} · ${visibleComponents.length} components`;
  document.querySelector("#emptyState").hidden = visibleComponents.length > 0;
}

const copyIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"></rect><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"></path></svg>`;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2200);
}

async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        console.error("Clipboard API copy failed.", error);
        if (!copyWithLegacyClipboard(text)) throw error;
      }
    } else if (!copyWithLegacyClipboard(text)) {
      throw new Error("The browser did not allow clipboard access.");
    }
    showToast("Code copied — ready to use ✦");
  } catch (error) {
    console.error("Clipboard copy failed.", error);
    showToast("Couldn't copy the code. Select and copy it manually.");
  }
}

function copyWithLegacyClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  return copied;
}

document.querySelector("#filterList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  selectedCategory = button.dataset.category;
  searchInput.value = "";
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    const active = chip === button;
    chip.classList.toggle("active", active);
    chip.setAttribute("aria-pressed", String(active));
  });
  renderComponents();
});

searchInput.addEventListener("input", renderComponents);
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && searchInput.value.trim()) {
    document.querySelector("#library").scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".component-card");
  if (!card) return;
  const component = components.find((item) => item.id === card.dataset.component);
  if (!component) return;

  const backgroundButton = event.target.closest("[data-apply-background]");
  if (backgroundButton) {
    const backgroundId = backgroundButton.dataset.applyBackground;
    if (document.body.dataset.background === backgroundId) {
      delete document.body.dataset.background;
      showToast("Original page background restored.");
    } else {
      document.body.dataset.background = backgroundId;
      showToast("Background applied to the whole page.");
    }
    document.querySelectorAll("[data-apply-background]").forEach((button) => {
      const applied = document.body.dataset.background === button.dataset.applyBackground;
      button.setAttribute("aria-pressed", String(applied));
      button.textContent = applied ? "Reset background" : "Apply to page";
    });
    return;
  }

  const tab = event.target.closest("[data-code-tab]");
  if (tab) {
    const selectedTab = tab.dataset.codeTab;
    card.querySelectorAll("[data-code-tab]").forEach((item) => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    card.querySelector("[data-preview]").hidden = selectedTab !== "preview";
    card.querySelectorAll("[data-code]").forEach((panel) => {
      panel.hidden = panel.dataset.code !== selectedTab;
    });
    return;
  }

  const copyButton = event.target.closest("[data-copy]");
  if (copyButton) {
    copyText(copyButton.dataset.copy === "html"
      ? component.html.trim()
      : copyButton.dataset.copy === "css"
        ? component.css.trim()
        : `${component.html.trim()}\n\n<style>\n${component.css.trim()}\n</style>`);
  }
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
});

renderComponents();
