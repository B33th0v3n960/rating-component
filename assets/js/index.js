//Submit Button
const submitBtn = document.querySelector("#submit");
const cards = document.querySelectorAll(".rating__card");
const rate = document.querySelectorAll(".rating__number");
const tag = document.querySelector(".rating__info");
let active = document.querySelector(".active--btn");

rate.forEach((number) =>
  number.addEventListener("click", () => {
    rate.forEach((element) => element.classList.remove("active--btn"));
    if (number.classList.contains("active--btn"))
      number.classList.remove("active--btn");
    else number.classList.add("active--btn");
    return (active = document.querySelector(".active--btn"));
  })
);

submitBtn.addEventListener("click", () => {
  if (active) {
    cards.forEach((card) => {
      if (card.classList.contains("hidden")) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
      tag.innerText = `You selected ${active.innerHTML} out of 5`;
    });
  } else {
    cards.forEach((card) => {
      if (!card.classList.contains("hidden")) {
        setTimeout(() => card.classList.remove("animate__headShake"), 1000);
        card.classList.add("animate__headShake");
      }
    });
  }
});
