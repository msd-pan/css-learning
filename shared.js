const backDrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(
  ".modal__action.modal__action--negative"
);
const selectPlanButton = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

// console.log(modalNoButton);

selectPlanButton.forEach((button) => {
  button.addEventListener("click", () => {
    backDrop.style.display = "block";
    modal.style.display = "block";
  });
});

const closeModal = () => {
  backDrop.style.display = "none";
  modal.style.display = "none";
};

backDrop.addEventListener("click", () => {
  mobileNav.style.display = "none";
  closeModal();
});

modalNoButton.addEventListener("click", closeModal);

toggleButton.addEventListener("click", () => {
  mobileNav.style.display = "block";
  backDrop.style.display = "block";
});
