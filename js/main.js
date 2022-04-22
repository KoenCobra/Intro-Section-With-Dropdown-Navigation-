const featuresBtn = document.querySelector(".features");
const companyBtn = document.querySelector(".company");
const featuresDropdown = document.querySelector(".features-drop-down");
const companyDropdown = document.querySelector(".company-drop-down");

const featuresArrowUp = document.querySelector(".features-arrow-up");
const featuresArrowdown = document.querySelector(".features-arrow-down");

const companyArrowUp = document.querySelector(".company-arrow-up");
const companyArrowdown = document.querySelector(".company-arrow-down");

featuresBtn.addEventListener("click", function () {
  featuresDropdown.classList.toggle("active");
  featuresArrowUp.classList.toggle("active");
  featuresArrowdown.classList.toggle("active");
});

companyBtn.addEventListener("click", function () {
  companyDropdown.classList.toggle("active");
  companyArrowUp.classList.toggle("active");
  companyArrowdown.classList.toggle("active");
});
