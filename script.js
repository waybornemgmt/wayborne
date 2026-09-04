:root {
  --bg: #0d0d0d;
  --panel: #151515;
  --panel-2: #1d1d1d;
  --text: #f3efe8;
  --muted: #b8b0a4;
  --line: rgba(255, 255, 255, 0.11);
  --accent: #d7c4aa;
  --light: #f3efe8;
  --dark-text: #171717;
  --max: 1180px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(calc(100% - 40px), var(--max));
  margin-inline: auto;
}

/* HEADER */

.site-header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.72);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.nav-wrap {
  min-height: 78px;
  display: flex;
  align-items: center;
  gap: 30px;
}

.logo,
.footer-logo {
  font-size: 1rem;
  letter-spacing: 0.22em;
  font-weight: 700;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-left: auto;
}

.desktop-nav a {
  font-size: 0.9rem;
  color: var(--muted);
  transition: color 0.2s ease;
}

.desktop-nav a:hover {
  color: var(--text);
}

.nav-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 11px 18px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 999px;
  font-size: 0.86rem;
  transition: all 0.2s ease;
}

.nav-cta:hover {
  background: var(--light);
  color: var(--dark-text);
}

.menu-toggle {
  display: none;
  margin-left: auto;
  border: 0;
  background: transparent;
  color: var(--text);
  font-size: 1.45rem;
  cursor: pointer;
}

.mobile-menu {
  display: none;
}

/* HERO */

.hero {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  background:
    linear-gradient(
      90deg,
      rgba(7, 7, 7, 0.97) 0%,
      rgba(7, 7, 7, 0.92) 38%,
      rgba(7, 7, 7, 0.7) 66%,
      rgba(7, 7, 7, 0.86) 100%
    ),
    radial-gradient(
      circle at 78% 28%,
      rgba(179, 151, 113, 0.19),
      transparent 31%
    ),
    linear-gradient(
      145deg,
      #0a0a0a 0%,
      #17130f 42%,
      #0c0c0c 100%
    );
  overflow: hidden;
}

.hero::after {
  content: "";
  position: absolute;
  width: 520px;
  height: 520px;
  right: -140px;
  top: 24%;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 50%;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.28)
    );
}

.hero-content {
  position: relative;
  z-index: 2;
  padding-top: 70px;
}

.eyebrow,
.section-label,
.mini-label {
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 600;
}

.hero h1 {
  max-width: 920px;
  margin-top: 20px;
  font-family: "Playfair Display", serif;
  font-size: clamp(3.8rem, 8vw, 7.2rem);
  line-height: 0.97;
  font-weight: 600;
  letter-spacing: -0.04em;
}

.hero h1 span {
  display: block;
  color: var(--accent);
}

.hero-text {
  max-width: 650px;
  margin-top: 28px;
  font-size: 1.14rem;
  color: #d2ccc2;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 23px;
  border-radius: 999px;
  border: 1px solid transparent;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--light);
  color: var(--dark-text);
}

.btn-secondary {
  border-color: rgba(255, 255, 255, 0.25);
  color: var(--text);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.08);
}

.hero-scroll {
  position: absolute;
  left: 40px;
  bottom: 28px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--muted);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
}

.scroll-line {
  width: 56px;
  height: 1px;
  background: rgba(255, 255, 255, 0.32);
}

/* INTRO */

.intro-section {
  padding: 120px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.intro-grid,
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 90px;
  align-items: start;
}

.intro-section h2,
.about-section h2,
.how-section h2,
.form-copy h2,
.contact-section h2 {
  margin-top: 14px;
  font-family: "Playfair Display", serif;
  font-size: clamp(2.4rem, 5vw, 4.6rem);
  line-height: 1;
  letter-spacing: -0.03em;
}

.intro-copy {
  display: grid;
  gap: 22px;
  color: var(--muted);
  font-size: 1.08rem;
}

/* SPLIT */

.split-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.split-panel {
  min-height: 680px;
  display: flex;
  align-items: center;
  padding: 80px;
}

.creator-panel {
  background:
    radial-gradient(
      circle at 20% 15%,
      rgba(204, 177, 139, 0.15),
      transparent 34%
    ),
    #171717;
}

.brand-panel {
  background:
    radial-gradient(
      circle at 70% 25%,
      rgba(204, 177, 139, 0.12),
      transparent 30%
    ),
    #111111;
  border-left: 1px solid var(--line);
}

.panel-inner {
  max-width: 580px;
}

.panel-inner h2 {
  margin-top: 16px;
  font-family: "Playfair Display", serif;
  font-size: clamp(2.6rem, 4vw, 4.2rem);
  line-height: 1.04;
  letter-spacing: -0.03em;
}

.panel-inner > p {
  margin-top: 22px;
  color: var(--muted);
  font-size: 1.04rem;
}

.feature-list {
  margin-top: 34px;
  border-top: 1px solid var(--line);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 0;
  border-bottom: 1px solid var(--line);
}

.feature-item span {
  color: var(--accent);
  font-size: 0.78rem;
}

.feature-item p {
  color: #e6e0d7;
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 34px;
}

.service-tags span {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 10px 14px;
  color: #d7d0c6;
  font-size: 0.88rem;
}

.text-link {
  display: inline-block;
  margin-top: 38px;
  font-weight: 600;
  color: var(--accent);
}

/* HOW IT WORKS */

.how-section {
  padding: 120px 0;
}

.section-heading-row {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 80px;
  align-items: end;
}

.section-heading-row p {
  color: var(--muted);
  max-width: 470px;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 60px;
}

.step-card {
  min-height: 310px;
  background: #141414;
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 28px;
  transition:
    transform 0.22s ease,
    border-color 0.22s ease;
}

.step-card:hover {
  transform: translateY(-5px);
  border-color: rgba(215, 196, 170, 0.45);
}

.step-number {
  color: var(--accent);
  font-size: 0.8rem;
}

.step-card h3 {
  margin-top: 54px;
  font-family: "Playfair Display", serif;
  font-size: 2rem;
}

.step-card p {
  margin-top: 14px;
  color: var(--muted);
  font-size: 0.95rem;
}

/* STATEMENT */

.statement-section {
  padding: 140px 0;
  background:
    radial-gradient(
      circle at 50% 50%,
      rgba(184, 153, 111, 0.14),
      transparent 42%
    ),
    #101010;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.statement-wrap {
  max-width: 920px;
  text-align: center;
}

.statement-wrap blockquote {
  margin-top: 22px;
  font-family: "Playfair Display", serif;
  font-size: clamp(2.7rem, 6vw, 5.3rem);
  line-height: 1.03;
  letter-spacing: -0.035em;
}

/* ABOUT */

.about-section {
  padding: 120px 0;
}

.about-grid > div:last-child {
  display: grid;
  gap: 20px;
  color: var(--muted);
  font-size: 1.05rem;
}

/* FORMS */

.forms-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.form-panel {
  padding: 86px;
  background: #ece6dd;
  color: var(--dark-text);
}

.dark-form-panel {
  background: #171717;
  color: var(--text);
  border-left: 1px solid var(--line);
}

.form-copy {
  max-width: 560px;
}

.form-copy p:not(.section-label) {
  margin-top: 18px;
  color: #625e58;
}

.dark-form-panel .form-copy p:not(.section-label) {
  color: var(--muted);
}

.wayborne-form {
  margin-top: 36px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.field {
  display: grid;
  gap: 8px;
  margin-bottom: 14px;
}

.field label {
  font-size: 0.8rem;
  font-weight: 600;
}

.field input,
.field textarea {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: rgba(255, 255, 255, 0.72);
  color: #191919;
  border-radius: 13px;
  padding: 14px 15px;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.field input:focus,
.field textarea:focus {
  border-color: rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
}

.dark-form-panel .field input,
.dark-form-panel .field textarea {
  background: #101010;
  color: var(--text);
  border-color: var(--line);
}

.dark-form-panel .field input:focus,
.dark-form-panel .field textarea:focus {
  border-color: rgba(215, 196, 170, 0.55);
  box-shadow: 0 0 0 3px rgba(215, 196, 170, 0.07);
}

.checkbox-field {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin: 7px 0 20px;
  font-size: 0.84rem;
}

.btn-dark {
  background: #181818;
  color: white;
}

.btn-light {
  background: var(--light);
  color: var(--dark-text);
}

.form-note {
  margin-top: 14px;
  font-size: 0.75rem;
  opacity: 0.58;
}

/* CONTACT */

.contact-section {
  padding: 110px 0;
  border-top: 1px solid var(--line);
}

.contact-wrap {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 50px;
}

.contact-details {
  display: grid;
  gap: 10px;
  text-align: right;
}

.contact-details a {
  color: var(--muted);
  font-size: 1.05rem;
}

.contact-details a:hover {
  color: var(--text);
}

/* FOOTER */

.site-footer {
  border-top: 1px solid var(--line);
  padding: 40px 0;
}

.footer-wrap {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: end;
}

.footer-wrap > div p,
.copyright {
  margin-top: 8px;
  color: #777;
  font-size: 0.78rem;
}

/* REVEAL ANIMATIONS */

.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition:
    opacity 0.75s ease,
    transform 0.75s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* MOBILE */

@media (max-width: 980px) {
  .desktop-nav,
  .nav-cta {
    display: none;
  }

  .menu-toggle {
    display: block;
  }

  .mobile-menu {
    padding: 0 20px 18px;
    background: rgba(10, 10, 10, 0.97);
  }

  .mobile-menu.open {
    display: grid;
  }

  .mobile-menu a {
    padding: 14px 0;
    border-bottom: 1px solid var(--line);
    color: var(--muted);
  }

  .intro-grid,
  .about-grid,
  .section-heading-row {
    grid-template-columns: 1fr;
    gap: 38px;
  }

  .split-section,
  .forms-section {
    grid-template-columns: 1fr;
  }

  .brand-panel,
  .dark-form-panel {
    border-left: 0;
    border-top: 1px solid var(--line);
  }

  .split-panel,
  .form-panel {
    padding: 72px 32px;
  }

  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .container {
    width: min(calc(100% - 28px), var(--max));
  }

  .nav-wrap {
    min-height: 70px;
  }

  .hero {
    min-height: 92vh;
  }

  .hero-content {
    padding-top: 90px;
  }

  .hero h1 {
    font-size: clamp(3.15rem, 16vw, 5.1rem);
  }

  .hero-text {
    font-size: 1rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
  }

  .hero-scroll {
    display: none;
  }

  .intro-section,
  .how-section,
  .about-section,
  .contact-section {
    padding: 82px 0;
  }

  .split-panel,
  .form-panel {
    padding: 64px 22px;
  }

  .steps-grid {
    grid-template-columns: 1fr;
  }

  .step-card {
    min-height: 240px;
  }

  .step-card h3 {
    margin-top: 34px;
  }

  .statement-section {
    padding: 95px 0;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .contact-wrap,
  .footer-wrap {
    display: grid;
    align-items: start;
  }

  .contact-details {
    text-align: left;
  }
}
