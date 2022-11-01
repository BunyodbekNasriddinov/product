var elBody = document.querySelector("body");
var elDarkBtn = document.querySelector(".mode-btn");
var elLogo = document.querySelector(".logo");
var elImg = document.querySelector(".logo__img");
var elFooterImg = document.querySelector(".logo-link__pic");
var productSection = document.querySelector(".product");
var processSection = document.querySelector(".process");

elDarkBtn.addEventListener("click", () => {
  elBody.classList.toggle("dark");

  if (elBody.classList[0] === 'dark') {
    elImg.src = "../images/site-logo-mode.svg";
  }
});

// console.log();