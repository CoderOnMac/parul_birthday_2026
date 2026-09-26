import gameConfig from "../config.js";

const app = document.getElementById("app");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const TIMING = {
  reactionHold: prefersReducedMotion ? 800 : 2200,
  surpriseLine: prefersReducedMotion ? 600 : 1800,
  calcMin: prefersReducedMotion ? 1200 : 3200,
  revealStep: prefersReducedMotion ? 400 : 900,
};

const state = {
  phase: "landing",
  questionIndex: 0,
  answersLocked: false,
  surpriseStep: 0,
  revealStep: 0,
};

function assetUrl(path) {
  if (!path) return "";
  const base = import.meta.env.BASE_URL || "./";
  const normalized = path.replace(/^\.\//, "");
  return `${base}${normalized}`.replace(/\/+/g, "/").replace(":/", "://");
}

function applyDocumentMeta() {
  const { meta } = gameConfig;
  if (!meta) return;
  document.title = meta.pageTitle || document.title;
  setMetaContent('meta[name="description"]', meta.description);
  setMetaContent('meta[property="og:title"]', meta.ogTitle);
  setMetaContent('meta[property="og:description"]', meta.ogDescription);
  if (meta.ogImage) {
    const url = assetUrl(meta.ogImage);
    setMetaContent('meta[property="og:image"]', url);
    setMetaContent('meta[name="twitter:image"]', url);
  }
}

function setMetaContent(selector, content) {
  const el = document.querySelector(selector);
  if (el && content) el.setAttribute("content", content);
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function multilineHtml(text) {
  return escapeHtml(text).replace(/\n/g, "<br />");
}

function pickReaction(question, optionIndex) {
  const { reactions, preferredIndex } = question;
  if (reactions?.byOption && reactions.byOption[optionIndex]) {
    return reactions.byOption[optionIndex];
  }
  if (optionIndex === preferredIndex && reactions?.preferred) {
    return reactions.preferred;
  }
  const pool = reactions?.fallback?.length
    ? reactions.fallback
    : ["Interesting choice… 👀", "Hmmm. Noted.", "I had a feeling you'd pick that."];
  return pool[Math.floor(Math.random() * pool.length)];
}

function render() {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  app.innerHTML = "";
  app.className = `app app--${state.phase}`;

  switch (state.phase) {
    case "landing":
      renderLanding();
      break;
    case "question":
      renderQuestion();
      break;
    case "reaction":
      renderReaction();
      break;
    case "surprise":
      renderSurprise();
      break;
    case "calculating":
      renderCalculating();
      break;
    case "reveal":
      renderReveal();
      break;
    default:
      renderLanding();
  }
}

function renderLanding() {
  const { intro } = gameConfig;
  const section = document.createElement("section");
  section.className = "screen screen--landing";
  section.setAttribute("aria-label", "Introduction");

  section.innerHTML = `
    <div class="screen__content screen__content--landing">
      <p class="fade-in fade-in--1 text-lead">${escapeHtml(intro.line1)}</p>
      <h1 class="fade-in fade-in--2 headline">${escapeHtml(intro.line2)}</h1>
      <p class="fade-in fade-in--3 text-muted">${escapeHtml(intro.supporting)}</p>
      <button type="button" class="btn btn--primary fade-in fade-in--4" data-action="start">
        ${escapeHtml(intro.button)}
      </button>
    </div>
  `;

  section.querySelector('[data-action="start"]').addEventListener("click", startGame);
  app.appendChild(section);
  section.querySelector("button").focus();
}

function startGame() {
  state.phase = "question";
  state.questionIndex = 0;
  state.answersLocked = false;
  render();
}

function renderQuestion() {
  const total = gameConfig.questions.length;
  const q = gameConfig.questions[state.questionIndex];
  const progress = ((state.questionIndex + 1) / total) * 100;

  const section = document.createElement("section");
  section.className = "screen screen--question";
  section.setAttribute("aria-label", `Question ${state.questionIndex + 1} of ${total}`);

  const letters = ["A", "B", "C", "D"];

  section.innerHTML = `
    <header class="quiz-header">
      <p class="quiz-header__count">Question ${state.questionIndex + 1} of ${total}</p>
      <div class="progress" role="progressbar" aria-valuenow="${Math.round(progress)}" aria-valuemin="0" aria-valuemax="100">
        <div class="progress__fill" style="width: ${progress}%"></div>
      </div>
    </header>
    <div class="screen__content question-enter">
      <h2 class="question-title">${escapeHtml(q.question)}</h2>
      <div class="options" role="list">
        ${q.options
          .map(
            (opt, i) => `
          <button type="button" class="option-card" data-index="${i}" role="listitem">
            <span class="option-card__letter">${letters[i] || ""}.</span>
            <span class="option-card__text">${escapeHtml(opt)}</span>
          </button>
        `
          )
          .join("")}
      </div>
    </div>
  `;

  section.querySelectorAll(".option-card").forEach((btn) => {
    btn.addEventListener("click", () => onSelectAnswer(Number(btn.dataset.index)));
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onSelectAnswer(Number(btn.dataset.index));
      }
    });
  });

  app.appendChild(section);
}

function onSelectAnswer(index) {
  if (state.answersLocked) return;
  state.answersLocked = true;

  const q = gameConfig.questions[state.questionIndex];
  state.lastReaction = pickReaction(q, index);
  state.lastSelectedIndex = index;

  const cards = app.querySelectorAll(".option-card");
  cards.forEach((card, i) => {
    card.disabled = true;
    if (i === index) card.classList.add("option-card--selected");
    else card.classList.add("option-card--dimmed");
  });

  window.setTimeout(() => {
    state.phase = "reaction";
    render();
  }, prefersReducedMotion ? 350 : 650);
}

function renderReaction() {
  const section = document.createElement("section");
  section.className = "screen screen--reaction";
  section.innerHTML = `
    <div class="screen__content reaction-enter">
      <p class="reaction-text" aria-live="polite">${escapeHtml(state.lastReaction)}</p>
      <p class="text-muted reaction-continue" aria-hidden="true">…</p>
    </div>
  `;
  app.appendChild(section);

  window.setTimeout(advanceAfterReaction, TIMING.reactionHold);
}

function advanceAfterReaction() {
  const isLast = state.questionIndex >= gameConfig.questions.length - 1;
  if (isLast) {
    state.phase = "surprise";
    state.surpriseStep = 0;
  } else {
    state.questionIndex += 1;
    state.answersLocked = false;
    state.phase = "question";
  }
  render();
}

function renderSurprise() {
  const s = gameConfig.surprise;
  const steps = [s.leadIn, s.line1, s.line2, s.line3];
  const text = steps[state.surpriseStep] || s.line3;

  const section = document.createElement("section");
  section.className = "screen screen--surprise";
  section.setAttribute("aria-live", "polite");
  section.innerHTML = `
    <div class="screen__content surprise-enter">
      <p class="surprise-text ${state.surpriseStep === steps.length - 1 ? "surprise-text--emphasis" : ""}">
        ${escapeHtml(text)}
      </p>
    </div>
  `;
  app.appendChild(section);

  window.setTimeout(() => {
    if (state.surpriseStep < steps.length - 1) {
      state.surpriseStep += 1;
      render();
    } else {
      state.phase = "calculating";
      render();
    }
  }, TIMING.surpriseLine);
}

function renderCalculating() {
  const { fakeScore } = gameConfig;
  const section = document.createElement("section");
  section.className = "screen screen--calculating";
  section.innerHTML = `
    <div class="screen__content">
      <p class="calc-text" data-calc-phase="loading">${escapeHtml(fakeScore.calculating)}</p>
      <div class="calc-dots" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div class="calc-bar" aria-hidden="true"><div class="calc-bar__fill"></div></div>
    </div>
  `;
  app.appendChild(section);

  const calcText = section.querySelector(".calc-text");
  const phases = [
    { at: TIMING.calcMin * 0.45, text: fakeScore.pivot },
    { at: TIMING.calcMin * 0.65, text: fakeScore.noScore },
    { at: TIMING.calcMin * 0.85, text: fakeScore.bridge },
  ];

  phases.forEach(({ at, text }) => {
    window.setTimeout(() => {
      calcText.textContent = text;
      calcText.classList.add("calc-text--shift");
    }, at);
  });

  window.setTimeout(() => {
    state.phase = "reveal";
    state.revealStep = 0;
    render();
  }, TIMING.calcMin + 400);
}

function renderReveal() {
  const f = gameConfig.finalReveal;
  const steps = [
    { key: "label", class: "reveal-label", html: multilineHtml(f.label) },
    { key: "headline", class: "reveal-headline", html: escapeHtml(f.headline) },
    { key: "subhead", class: "reveal-subhead", html: multilineHtml(f.subhead) },
    { key: "main", class: "reveal-main", html: escapeHtml(f.mainAnswer) },
    { key: "bridge", class: "reveal-bridge", html: escapeHtml(f.bridge) },
    { key: "coda", class: "reveal-coda", html: escapeHtml(f.coda) },
    { key: "message", class: "reveal-message", html: multilineHtml(f.personalMessage) },
    { key: "photo", class: "reveal-photo-wrap", photo: true },
    { key: "restart", class: "reveal-actions", restart: true },
  ];

  const visible = steps.slice(0, state.revealStep + 1);

  const section = document.createElement("section");
  section.className = "screen screen--final";
  section.setAttribute("aria-label", "Final message");

  let inner = '<div class="screen__content screen__content--final">';
  visible.forEach((step) => {
    if (step.restart) {
      inner += `<button type="button" class="btn btn--ghost reveal-step--new" data-action="restart">${escapeHtml(f.restartLabel)}</button>`;
      return;
    }
    if (step.photo) {
      inner += `<figure class="reveal-photo reveal-photo--pending" id="reveal-photo" hidden>
        <img src="" alt="" loading="lazy" decoding="async" />
      </figure>`;
      return;
    }
    const isNew = step.key === visible[visible.length - 1]?.key;
    inner += `<p class="${step.class} reveal-step${isNew ? " reveal-step--new" : ""}">${step.html}</p>`;
  });
  inner += "</div>";

  section.innerHTML = inner;
  app.appendChild(section);

  if (visible.some((s) => s.photo)) {
    mountOptionalPhoto(section.querySelector("#reveal-photo"));
  }

  const restartBtn = section.querySelector('[data-action="restart"]');
  if (restartBtn) {
    restartBtn.addEventListener("click", resetExperience);
  }

  if (state.revealStep < steps.length - 1) {
    window.setTimeout(() => {
      state.revealStep += 1;
      render();
    }, TIMING.revealStep);
  }
}

function mountOptionalPhoto(figure) {
  if (!figure) return;
  const path = gameConfig.finalReveal.photo;
  if (!path) return;

  const img = figure.querySelector("img");
  const url = assetUrl(path);
  img.src = url;
  img.alt = gameConfig.recipientName
    ? `A photo for ${gameConfig.recipientName}`
    : "A photo";

  img.onload = () => {
    figure.hidden = false;
    figure.classList.remove("reveal-photo--pending");
    figure.classList.add("reveal-photo--new");
  };
  img.onerror = () => {
    figure.remove();
  };
}

function resetExperience() {
  state.phase = "landing";
  state.questionIndex = 0;
  state.answersLocked = false;
  state.surpriseStep = 0;
  state.revealStep = 0;
  render();
}

applyDocumentMeta();
render();
