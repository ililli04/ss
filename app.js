const leftCard = document.querySelector(".left");
const rightCard = document.querySelector(".right");

rightCard.addEventListener("click", () => {
  rightCard.classList.toggle("flip");
});
leftCard.addEventListener("click", () => {
  leftCard.classList.toggle("rflip");
});
