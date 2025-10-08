document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const toggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const nav = document.querySelector(".nav");

  function setMenu(open) {
    if (!toggle || !mobileMenu) return;
    toggle.setAttribute("aria-expanded", String(open));
    mobileMenu.hidden = !open;
  }

  if (toggle && nav && mobileMenu) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      setMenu(!expanded);
    });

    nav.addEventListener("focusout", (e) => {
      if (!nav.contains(e.relatedTarget)) setMenu(false);
    });
  }

  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
      const nameErr = document.getElementById("name-error");
      const emailErr = document.getElementById("email-error");
      const messageErr = document.getElementById("message-error");
      const success = document.getElementById("form-success");

      let hasError = false;
      if (name && nameErr) {
        if (!name.value.trim()) { nameErr.hidden = false; hasError = true; }
        else { nameErr.hidden = true; }
      }
      if (email && emailErr) {
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
        if (!valid) { emailErr.hidden = false; hasError = true; }
        else { emailErr.hidden = true; }
      }
      if (message && messageErr) {
        if (message.value.trim().length < 10) { messageErr.hidden = false; hasError = true; }
        else { messageErr.hidden = true; }
      }

      if (!hasError && success) {
        success.hidden = false;
        form.reset();
        setTimeout(() => { success.hidden = true; }, 4000);
      }
    });
  }
});

