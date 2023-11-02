document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burgerMenu");
  const navbarMenu = document.getElementById("navbarMenu");

  burgerMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("show");
    burgerMenu.classList.toggle("toggle");
  });
});
