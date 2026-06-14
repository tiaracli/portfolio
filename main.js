/* ════════════════════════════════════════════════════════════════
   TIARA PORTFOLIO — main.js
   Handles: Custom cursor, nav scroll, reveal animations,
            skill bars, counter animation, contact form
   ════════════════════════════════════════════════════════════════ */

'use strict';

/* ── 1. CUSTOM CURSOR ───────────────────────────────────────────── */
(function initCursor() {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;
  let rafId;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function tick() {
    // Dot follows instantly
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
    // Ring lerps
    rx += (mx - rx) * 0.3;
    ry += (my - ry) * 0.3;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    rafId = requestAnimationFrame(tick);
  }
  tick();

  // Hover effect on interactive elements
  const hoverEls = document.querySelectorAll('a, button, .project-card, .info-card, .tag, .tl-card');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
})();


/* ── 2. NAV SCROLL EFFECT ───────────────────────────────────────── */
(function initNav() {
  const nav    = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  if (toggle && mobile) {
    toggle.addEventListener('click', () => mobile.classList.toggle('open'));
    // Close on link click
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobile.classList.remove('open')));
  }

  // Active link highlight
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => obs.observe(s));
})();


/* ── 3. REVEAL ON SCROLL ────────────────────────────────────────── */
(function initReveal() {
  const els = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  if (!els.length) return;

  // Stagger siblings inside same parent
  els.forEach((el, i) => {
    const group = [...el.parentElement.children].filter(c =>
      c.classList.contains('reveal-up') ||
      c.classList.contains('reveal-left') ||
      c.classList.contains('reveal-right')
    );
    const pos = group.indexOf(el);
    if (pos > 0) {
      const existingDelay = el.style.animationDelay;
      if (!existingDelay) {
        el.style.transitionDelay = (pos * 0.08) + 's';
      }
    }
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => obs.observe(el));
})();


/* ── 4. SKILL BARS ANIMATION ────────────────────────────────────── */
(function initSkillBars() {
  const fills = document.querySelectorAll('.pill-fill');
  if (!fills.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        // Small delay for stagger feel
        setTimeout(() => e.target.classList.add('animated'), 100);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(f => obs.observe(f));
})();


/* ── 5. COUNTER ANIMATION ───────────────────────────────────────── */
(function initCounters() {
  const nums = document.querySelectorAll('.stat-num[data-target]');
  if (!nums.length) return;

  function animateCounter(el, target) {
    const dur = 1400;
    const start = performance.now();
    function step(now) {
      const t = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 3); // easeOutCubic
      el.textContent = Math.round(ease * target);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = parseInt(e.target.dataset.target, 10);
        animateCounter(e.target, target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  nums.forEach(n => obs.observe(n));
})();


/* ── 6. CONTACT FORM ────────────────────────────────────────────── */
(function initForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form || !success) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn');
    const txt = btn.querySelector('.btn-text');
    // Simulate sending
    txt.textContent = 'Sending…';
    btn.disabled = true;
    btn.style.opacity = '.7';

    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.style.opacity = '1';
      txt.textContent = 'Send Message';
      success.classList.add('show');
      setTimeout(() => success.classList.remove('show'), 4000);
    }, 1400);
  });
})();


/* ── 7. SMOOTH SCROLL OFFSET (for fixed nav) ────────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const navH = document.getElementById('nav')?.offsetHeight || 68;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();


/* ── 8. PARALLAX BLOBS (subtle, on mousemove) ───────────────────── */
(function initParallax() {
  const blobs = document.querySelectorAll('.hero-blob');
  if (!blobs.length) return;

  const strengths = [0.02, 0.035, 0.025];

  window.addEventListener('mousemove', e => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;

    blobs.forEach((blob, i) => {
      const s = strengths[i] || 0.02;
      blob.style.transform = `translate(${dx * s}px, ${dy * s}px)`;
    });
  }, { passive: true });
})();


/* ── 9. TYPING EFFECT ON HERO TAGLINE ───────────────────────────── */
(function initTyping() {
  const el = document.querySelector('.hero-tagline');
  if (!el) return;

  const phrases = [
    'Turning data into decisions & ideas into systems.',
    'Passionate about analytics & IT Project Management.',
    'Building solutions, one query at a time.',
  ];

  let pIdx = 0, cIdx = 0, deleting = false;
  let timer;

  function type() {
    const current = phrases[pIdx];
    if (!deleting) {
      el.textContent = current.slice(0, ++cIdx);
      if (cIdx === current.length) {
        deleting = true;
        timer = setTimeout(type, 2400);
        return;
      }
    } else {
      el.textContent = current.slice(0, --cIdx);
      if (cIdx === 0) {
        deleting = false;
        pIdx = (pIdx + 1) % phrases.length;
      }
    }
    timer = setTimeout(type, deleting ? 40 : 68);
  }

  // Wait for hero to be visible
  setTimeout(type, 1200);
})();


/* ── 10. PAGE LOAD ANIMATION ────────────────────────────────────── */
(function initPageLoad() {
  document.body.style.opacity = '0';
  window.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => {
      document.body.style.transition = 'opacity 0.5s ease';
      document.body.style.opacity = '1';
    });
  });
  // Fallback
  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
  });
})();


/* ── 11. NAV ACTIVE LINK STYLE (CSS inject) ─────────────────────── */
(function injectActiveStyle() {
  const s = document.createElement('style');
  s.textContent = `.nav-links a.active { color: var(--c-teal-dk) !important; background: var(--c-teal-lt) !important; }`;
  document.head.appendChild(s);
})();
