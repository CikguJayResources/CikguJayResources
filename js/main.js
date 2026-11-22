/**
 * ==========================================================================
 * CIKGU JAY RESOURCES — MAIN INTERACTIONS, ACCORDION, MOTION & FORMS
 * ==========================================================================
 */

(function () {
  "use strict";

  /* --------------------------------------------------------------------------
     1. Accessible FAQ Accordion
     -------------------------------------------------------------------------- */
  function initFaqAccordion() {
    const triggers = document.querySelectorAll(".faq-trigger");
    if (!triggers.length) return;

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", function () {
        const isExpanded = trigger.getAttribute("aria-expanded") === "true";
        const panelId = trigger.getAttribute("aria-controls");
        const panel = panelId ? document.getElementById(panelId) : null;

        const parentAccordion = trigger.closest(".faq-accordion");
        if (parentAccordion && !isExpanded) {
          parentAccordion.querySelectorAll(".faq-trigger").forEach((other) => {
            if (other !== trigger) {
              other.setAttribute("aria-expanded", "false");
              const otherPanelId = other.getAttribute("aria-controls");
              const otherPanel = otherPanelId ? document.getElementById(otherPanelId) : null;
              if (otherPanel) otherPanel.classList.remove("is-open");
            }
          });
        }

        trigger.setAttribute("aria-expanded", !isExpanded ? "true" : "false");
        if (panel) {
          panel.classList.toggle("is-open", !isExpanded);
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     2. Subtle Scroll Reveal (Respects prefers-reduced-motion)
     -------------------------------------------------------------------------- */
  function initScrollReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.08
      }
    );

    elements.forEach((el) => observer.observe(el));
  }

  /* --------------------------------------------------------------------------
     3. Bilingual Contact & Licensing Inquiry Form Handler
     -------------------------------------------------------------------------- */
  /* --------------------------------------------------------------------------
     4. Scroll-Triggered Autoplay Video & Sound Controller
     Autoplays the video whenever the user scrolls into view (muted, browser compliant),
     pauses when scrolled away, and allows one-click sound unmuting and video clicking.
     -------------------------------------------------------------------------- */
  function initVideoScrollAutoplay() {
    const video = document.getElementById("eggs-video-player") || document.querySelector("video.video-element");
    if (!video) return;

    const frameCard = document.getElementById("video-frame-card");
    const soundToggle = document.getElementById("video-sound-toggle");
    const centerPlayBtn = document.getElementById("video-center-play");
    const badgeTag = document.getElementById("video-badge-tag");

    // Always ensure muted & playsinline for 100% browser autoplay compatibility
    video.muted = true;
    video.playsInline = true;

    function playVideo() {
      const p = video.play();
      if (p !== undefined) {
        p.catch(function (err) {
          console.warn("Autoplay was prevented by browser policy:", err);
        });
      }
    }

    function pauseVideo() {
      video.pause();
    }

    video.addEventListener("play", function () {
      if (frameCard) frameCard.classList.remove("is-paused");
      if (badgeTag) badgeTag.style.opacity = "0";
    });

    video.addEventListener("pause", function () {
      if (frameCard) frameCard.classList.add("is-paused");
      if (badgeTag) badgeTag.style.opacity = "1";
    });

    if (centerPlayBtn) {
      centerPlayBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        playVideo();
      });
    }

    // Toggle play/pause when user clicks the video
    video.addEventListener("click", function () {
      if (video.paused) {
        playVideo();
      } else {
        pauseVideo();
      }
    });

    // Sound toggle button (Unmute / Mute)
    if (soundToggle) {
      soundToggle.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        video.muted = !video.muted;
        updateSoundUI();
        if (video.paused) {
          playVideo();
        }
      });
    }

    function updateSoundUI() {
      if (!soundToggle) return;
      const soundIcon = soundToggle.querySelector(".sound-icon");
      const soundText = soundToggle.querySelector(".sound-text");
      if (video.muted) {
        soundToggle.classList.remove("is-unmuted");
        if (soundText) soundText.textContent = soundToggle.getAttribute("data-text-unmute") || "Hidupkan Suara";
        if (soundIcon) {
          soundIcon.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>';
        }
      } else {
        soundToggle.classList.add("is-unmuted");
        if (soundText) soundText.textContent = soundToggle.getAttribute("data-text-mute") || "Senyapkan";
        if (soundIcon) {
          soundIcon.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>';
        }
      }
    }

    // IntersectionObserver: Autoplay every time user scrolls to the video section!
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              playVideo();
            } else {
              pauseVideo();
            }
          });
        },
        {
          rootMargin: "0px 0px -40px 0px",
          threshold: 0.2
        }
      );
      observer.observe(video);
    } else {
      playVideo();
    }
  }

  function initContactForm() {
    const form = document.getElementById("cjr-contact-form");
    if (!form) return;

    const subjectSelect = document.getElementById("inquiry-topic");
    const messageInput = document.getElementById("inquiry-message");
    const feedbackEl = document.getElementById("contact-form-feedback");

    const params = new URLSearchParams(window.location.search);
    const productParam = params.get("product");
    const topicParam = params.get("topic");
    let userEditedMessage = false;

    if (messageInput) {
      messageInput.addEventListener("input", function () {
        userEditedMessage = true;
      });
    }

    function applyProductPrefill() {
      if (!productParam || !window.CJR || typeof window.CJR.getProductById !== "function") {
        return;
      }
      const rawProd = window.CJR.getProductById(productParam);
      if (!rawProd) return;
      if (subjectSelect) subjectSelect.value = "licensing";

      if (messageInput && !userEditedMessage) {
        const locProd = window.CJR.getLocalizedProduct
          ? window.CJR.getLocalizedProduct(rawProd)
          : rawProd;
        const prefix =
          window.CJR.i18n && window.CJR.i18n.t
            ? window.CJR.i18n.t("contactPage.form.prefill")
            : "";
        messageInput.value = `${prefix}${locProd.name} (${locProd.fullName}).`;
      }
    }

    if (productParam) {
      applyProductPrefill();
      document.addEventListener("cjr:langchange", applyProductPrefill);
    } else if (topicParam && subjectSelect) {
      if (topicParam === "notify") subjectSelect.value = "upcoming";
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = (document.getElementById("inquiry-name")?.value || "").trim();
      const email = (document.getElementById("inquiry-email")?.value || "").trim();
      const topic = subjectSelect
        ? subjectSelect.options[subjectSelect.selectedIndex].text
        : "Inquiry";
      const message = (messageInput?.value || "").trim();

      if (!name || !email || !message) return;

      const mailSubject = encodeURIComponent(`[Cikgu Jay Resources] ${topic} — ${name}`);
      const mailBody = encodeURIComponent(
        `Nama / Name: ${name}\nE-mel / Email: ${email}\nTopik / Topic: ${topic}\n\nMesej / Message:\n${message}`
      );

      if (feedbackEl) {
        const i18n = window.CJR && window.CJR.i18n;
        const readyStrong = i18n ? i18n.t("contactPage.form.readyStrong") : "Draft ready.";
        const readyBody = i18n ? i18n.t("contactPage.form.readyBody") : "";
        const readyLink = i18n ? i18n.t("contactPage.form.readyLink") : "Open email";
        feedbackEl.innerHTML = `
          <strong>${readyStrong}</strong> ${readyBody}
          <a href="mailto:jaypah2@gmail.com?subject=${mailSubject}&body=${mailBody}" style="text-decoration: underline; font-weight: 700;">${readyLink}</a>.
        `;
        feedbackEl.classList.add("is-visible");
      }

      window.location.href = `mailto:jaypah2@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    });
  }

  /* --------------------------------------------------------------------------
     4. Bootstrap Page Modules
     -------------------------------------------------------------------------- */
  function initApp() {
    if (window.CJR) {
      if (typeof window.CJR.initHeroShowcase === "function") {
        window.CJR.initHeroShowcase("#hero-suite-cards");
      }

      const homeGrid = document.getElementById("featured-product-grid");
      if (homeGrid) {
        window.CJR.initProductCatalog({
          gridSelector: "#featured-product-grid",
          pillsSelector: "#featured-category-pills",
          searchSelector: "#featured-catalog-search",
          countSelector: "#featured-catalog-count",
          featuredOnly: true,
          editorialShowcase: true
        });
      }

      const fullCatalogGrid = document.getElementById("full-product-grid");
      if (fullCatalogGrid) {
        window.CJR.initProductCatalog({
          gridSelector: "#full-product-grid",
          pillsSelector: "#full-category-pills",
          searchSelector: "#full-catalog-search",
          countSelector: "#full-catalog-count",
          featuredOnly: false,
          editorialShowcase: true
        });
      }

      window.CJR.initProductDetailsPage();
    }

    initFaqAccordion();
    initScrollReveal();
    initContactForm();
    initVideoScrollAutoplay();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();
