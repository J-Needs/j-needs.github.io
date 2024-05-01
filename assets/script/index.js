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

const imageTrigger = document.querySelectorAll(".image-trigger");
const imageModal = document.querySelector(".modal-image");

imageTrigger.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    console.log(trigger)
    imageModal.src = trigger.src;
  });
});