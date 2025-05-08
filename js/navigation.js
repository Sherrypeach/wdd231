const menu = document.getElementById("menu");
const nav = document.getElementById("nav-links");

menu.addEventListener("click", () => {
  nav.classList.toggle("open");
});
