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

const messageMap = {
  en: "Hello! Welcome to Bara Furniture Udhyog. How can we help you today?",
  ne: "नमस्ते! Bara Furniture Udhyog मा तपाईंलाई स्वागत छ। हामी तपाईंलाई कसरी सहयोग गर्न सक्छौं?",
};

let selectedLang = "en";

const langButtons = Array.from(document.querySelectorAll(".lang-btn"));
const waButtons = Array.from(document.querySelectorAll(".wa-btn"));

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedLang = btn.dataset.lang;
    langButtons.forEach((item) => item.classList.remove("is-active"));
    btn.classList.add("is-active");
  });
});

waButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const phone = btn.dataset.phone;
    const text = encodeURIComponent(messageMap[selectedLang]);
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank", "noopener");
  });
});
