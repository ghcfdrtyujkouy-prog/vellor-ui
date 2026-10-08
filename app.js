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

const categoryLabels = {
  all: "All",
  buttons: "Buttons",
  cards: "Cards",
  navbars: "Navigation",
  animations: "Animations",
  forms: "Forms",
  badges: "Badges"
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
    const matchesCategory = selectedCategory === "all" || component.category === selectedCategory;
    const searchable = `${component.title} ${component.description} ${component.categoryLabel}`.toLocaleLowerCase("en");
    return matchesCategory && searchable.includes(query);
  });

  grid.innerHTML = visibleComponents.map((component) => `
    <article class="component-card" data-component="${component.id}">
      <header class="component-head">
        <div class="component-title"><h3>${escapeHtml(component.title)}</h3><p>${escapeHtml(component.description)}</p></div>
        <span class="component-category">${escapeHtml(component.categoryLabel)}</span>
      </header>
        <div class="component-preview ${component.previewClass || ""}" data-preview>${component.html}<style>${component.css}</style></div>
      <div class="component-tabs" role="tablist" aria-label="Code view options">
        <button class="component-tab active" type="button" role="tab" aria-selected="true" data-code-tab="preview">Preview</button>
        <button class="component-tab" type="button" role="tab" aria-selected="false" data-code-tab="html">HTML</button>
        <button class="component-tab" type="button" role="tab" aria-selected="false" data-code-tab="css">CSS</button>
        <button class="copy-icon-button" type="button" data-copy="all" aria-label="Copy HTML and CSS" title="Copy HTML and CSS">${copyIcon}</button>
      </div>
      <pre class="component-code" data-code="html" hidden><code>${escapeHtml(component.html.trim())}</code></pre>
      <pre class="component-code" data-code="css" hidden><code>${escapeHtml(component.css.trim())}</code></pre>
      <footer class="component-card-footer"><span>${component.language || "HTML + CSS"}</span><button class="copy-code-button" type="button" data-copy="all">${copyIcon}<span>Copy code</span></button></footer>
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
