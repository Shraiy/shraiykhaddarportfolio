// script.js
// You can enhance this further for animations, dark mode toggle, etc.

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("nav a").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute("href"));
        section.scrollIntoView({ behavior: "smooth" });
      });
    });
  });