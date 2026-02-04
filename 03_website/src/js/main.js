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
