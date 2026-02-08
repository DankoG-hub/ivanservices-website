(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggleBtn = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");

  if (!toggleBtn || !nav) return;

  function openNav(){
    nav.classList.add("is-open");
    toggleBtn.classList.add("is-open");
    toggleBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-open");
  }

  function closeNav(){
    nav.classList.remove("is-open");
    toggleBtn.classList.remove("is-open");
    toggleBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }

  

  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.contains("is-open");
    isOpen ? closeNav() : openNav();
  });

  // Close when a link is clicked
  nav.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.matches("a")) closeNav();
  });

  // Close on ESC (pro UX)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) closeNav();
  });
})();

// ==============================
// IVAN Services – Chat UI
// ==============================
(function () {
  // Root wrapper
  const root = document.querySelector(".ivan-chat");
  if (!root) return; // Page without chat → exit safely

  const launcher = root.querySelector(".ivan-chat__launcher");
  const panel = root.querySelector(".ivan-chat__panel");
  const closeBtn = root.querySelector(".ivan-chat__close");

  if (!launcher || !panel || !closeBtn) return;

  function openChat() {
    root.classList.add("ivan-chat--open");
    launcher.setAttribute("aria-expanded", "true");
    closeBtn.focus();
  }

  function closeChat() {
    root.classList.remove("ivan-chat--open");
    launcher.setAttribute("aria-expanded", "false");
    launcher.focus();
  }

  launcher.addEventListener("click", openChat);
  closeBtn.addEventListener("click", closeChat);

  // Close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && root.classList.contains("ivan-chat--open")) {
      closeChat();
    }
  });
})();
