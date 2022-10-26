const elBody = document.querySelector("body");
const elDarkBtn = document.querySelector(".mode");
const elLogo = document.querySelector(".logo");
const elImg = document.querySelector(".logo-link__pic");
const productSection = document.querySelector(".product");
const processSection = document.querySelector(".process");

elDarkBtn.addEventListener("click", () => {
  elBody.classList.toggle("dark");
  elLogo.classList.toggle("logo");
  productSection.classList.toggle("product-dark");
  processSection.classList.toggle("process-dark")
  processSection.classList.add("process-dark");
  elImg.style.display = "none";
});

// console.log(productSection);
