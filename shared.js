const backDrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(
  ".modal__action.modal__action--negative"
);
const selectPlanButton = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const ctaButton = document.querySelector(".main-nav__item--cta");

// console.log(backDrop.style["background-image"]);

// console.log(modalNoButton);

selectPlanButton.forEach((button) => {
  button.addEventListener("click", () => {
    // backDrop.style.display = "block";
    // modal.style.display = "block";
    // modal.className = "open"; // This will actually overwrite the complete class list
    backDrop.classList.add("open");
    backDrop.style.display = "block";
    setTimeout(() => modal.classList.add("open"), 10);
  });
});

const closeModal = () => {
  //   backDrop.style.display = "none";
  //   modal.style.display = "none";
  backDrop.classList.remove("open");
  if (modal) modal.classList.remove("open");
  setTimeout(() => (backDrop.style.display = "none"), 200);
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
  setTimeout(() => backDrop.classList.add("open"), 10);
});

ctaButton.addEventListener("animationstart", () =>
  console.log("Animation started!")
);

ctaButton.addEventListener("animationend", () =>
  console.log("Animation ended!")
);

ctaButton.addEventListener("animationiteration", () =>
  console.log("Animation iteration!")
);
