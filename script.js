const nav = document.getElementById("nav");
const links = Array.from(nav.querySelectorAll("a"));

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) {
      return;
    }
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});
