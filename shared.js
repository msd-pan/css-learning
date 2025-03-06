const backDrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(
  ".modal__action.modal__action--negative"
);
const selectPlanButton = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

// console.log(backDrop.style["background-image"]);

// console.log(modalNoButton);

selectPlanButton.forEach((button) => {
  button.addEventListener("click", () => {
    // backDrop.style.display = "block";
    // modal.style.display = "block";
    // modal.className = "open"; // This will actually overwrite the complete class list
    backDrop.classList.add("open");
    modal.classList.add("open");
  });
});

const closeModal = () => {
  //   backDrop.style.display = "none";
  //   modal.style.display = "none";
  backDrop.classList.remove("open");
  if (modal) modal.classList.remove("open");
};

backDrop.addEventListener("click", () => {
  //   mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) modalNoButton.addEventListener("click", closeModal);

toggleButton.addEventListener("click", () => {
  //   mobileNav.style.display = "block";
  //   backDrop.style.display = "block";
  mobileNav.classList.add("open");
  backDrop.classList.add("open");
});
