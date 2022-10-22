const elBody = document.querySelector("body");
const elDarkBtn = document.querySelector(".mode");
const elLoginbtn = document.querySelector(".login");
const elLogo = document.querySelector(".logo");
const elImg = document.querySelector(".logo-link__pic");

elDarkBtn.addEventListener("click", () => {
  elBody.classList.toggle("dark");
  elLogo.classList.toggle("logo");
  elImg.style.display = "none";
});
