const backDrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButton = document.querySelectorAll(".plan button");

// console.log(backDrop);

selectPlanButton.forEach((button) => {
  button.addEventListener("click", () => {
    backDrop.style.display = "block";
    modal.style.display = "block";
  });
});
