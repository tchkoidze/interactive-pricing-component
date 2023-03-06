"use strict";

const pageviewsRange = document.querySelectorAll("#views");

const amount = document.querySelector(".amount");

let x;

const switchBtn = document.querySelector('input[type="checkbox"]');
const discountBox = document.querySelector(".discount-box");
const folowersNumber = document.querySelector(".folowers-number");

pageviewsRange.forEach((i) => {
  i.addEventListener("input", (event) => {
    x = event.target.value;
    /*slider range background size*/

    if (event.target.value == 1000000) {
      amount.textContent = "$36.00";
      folowersNumber.textContent = "1M";
    } else if (500000 <= event.target.value && event.target.value < 1000000) {
      amount.textContent = "$24.00";
      folowersNumber.textContent = "500K";
    } else if (100000 <= event.target.value && event.target.value < 500000) {
      amount.textContent = "$16.00";
      folowersNumber.textContent = "100K";
    } else if (50000 <= event.target.value && event.target.value < 100000) {
      amount.textContent = "$12.00";
      folowersNumber.textContent = "50K";
    } else {
      amount.textContent = "$08.00";
      folowersNumber.textContent = "10K";
    }

    event.target.style.backgroundSize =
      (event.target.value * 100) / i.max + "%";
  });
});

/*how/ hide yearly discount*/
switchBtn.addEventListener("click", () => {
  discountBox.classList.toggle("show");
  console.log("sete");
});
