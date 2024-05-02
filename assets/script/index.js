// Burger icon
const responsiveToggle = document.getElementById("menu_toggle");
const navMenu = document.querySelector(".nav-menu");

responsiveToggle.addEventListener("change", (e) => {
  if (responsiveToggle.checked) {
    navMenu.classList.add("active");
  } else {
    navMenu.classList.remove("active");
  }
});


const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navMenu.classList.remove("active");
    responsiveToggle.checked = false;
  });
});

const imageTrigger = document.querySelectorAll(".image-trigger");
const imageModal = document.querySelector(".modal-image");

imageTrigger.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    imageModal.src = trigger.src;
  });
});