var elBody = document.querySelector("body");
var elDarkBtn = document.querySelector(".mode-btn");
var elLogo = document.querySelector(".logo");
var elImg = document.querySelector(".logo__img");

elDarkBtn.addEventListener("click", () => {
  elBody.classList.toggle("dark");

  if (elBody.classList[0] === 'dark') {
    elImg.src = "../images/site-logo-mode.svg";
  } else {
    elImg.src = "../images/logo.svg"; 
  }
});

// console.log();