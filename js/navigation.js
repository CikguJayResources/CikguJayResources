/**
 * ==========================================================================
 * CIKGU JAY RESOURCES — NAVIGATION & ACCESSIBLE HEADER CONTROLLER
 * ==========================================================================
 */

(function () {
  "use strict";

  function initNavigation() {
    const header = document.getElementById("site-header");
    const toggleBtn = document.getElementById("nav-toggle");
    const drawer = document.getElementById("mobile-drawer");

    // 1. Sticky Scroll Elevation
    function handleScroll() {
      if (!header) return;
      if (window.scrollY > 12) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 2. Mobile Menu Drawer Toggle
    if (toggleBtn && drawer) {
      function setMenuState(open) {
        toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
        toggleBtn.setAttribute(
          "aria-label",
          open ? "Close navigation menu" : "Open navigation menu"
        );
        drawer.classList.toggle("is-open", open);
        drawer.setAttribute("aria-hidden", open ? "false" : "true");
        document.body.classList.toggle("nav-open", open);
      }

      toggleBtn.addEventListener("click", function () {
        const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
        setMenuState(!isExpanded);
      });

      // Close drawer when clicking any link inside it
      drawer.addEventListener("click", function (e) {
        if (e.target.closest("a")) {
          setMenuState(false);
        }
      });

      // Close drawer on Escape key
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && drawer.classList.contains("is-open")) {
          setMenuState(false);
          toggleBtn.focus();
        }
      });

      // Reset mobile drawer cleanly if viewport expands to laptop/desktop
      window.addEventListener("resize", function () {
        if (window.innerWidth >= 1024 && drawer.classList.contains("is-open")) {
          setMenuState(false);
        }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavigation);
  } else {
    initNavigation();
  }
})();
