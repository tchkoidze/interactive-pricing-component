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
    event.target.style.backgroundSize =
      (event.target.value * 100) / i.max + "%";

    if (event.target.value == 1000000) {
      console.log(console.log(x));
      amount.textContent = "$36.00";
      folowersNumber.textContent = "1M";
    } else if (500000 <= event.target.value && event.target.value < 1000000) {
      amount.textContent = "$24.00";
      folowersNumber.textContent = "500K";
      console.log(console.log(x));
      return x;
    } else if (100000 <= event.target.value && event.target.value < 500000) {
      console.log(console.log(x));

      amount.textContent = "$16.00";
      folowersNumber.textContent = "100K";
      return x;
    } else if (50000 <= event.target.value && event.target.value < 100000) {
      console.log(console.log(x));
      amount.textContent = "$12.00";
      folowersNumber.textContent = "50K";
    } else {
      amount.textContent = "$08.00";
      folowersNumber.textContent = "10K";
      console.log(console.log(x));
    }

    /*event.target.style.backgroundSize =
      ((event.target.value - event.target.min) * 100) /
      (event.target.max - event.target.min);
    console.log(
      (event.target.style.backgroundSize =
        (event.target.value * 100) / i.max + "%")
    );*/
  });
});

switchBtn.addEventListener("click", () => {
  discountBox.classList.toggle("show");
  console.log("sete");
});
