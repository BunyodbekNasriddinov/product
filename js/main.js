var elBody = document.querySelector("body");
var elDarkBtn = document.querySelector(".mode-btn");
var elLogo = document.querySelector(".logo");
var elImg = document.querySelectorAll(".logo__img");

elDarkBtn.addEventListener("click", () => {
  elBody.classList.toggle("dark");

  if (elBody.classList[0] === 'dark') {
    elImg[0].src = "../images/site-logo-mode.svg";
    elImg[1].src = "../images/site-logo-mode.svg";
  } else {
    elImg[0].src = "../images/logo.svg";
    elImg[1].src = "../images/logo.svg";
  }
});

// console.log(elImg);