let btn_right = document.querySelector(".btn_right");
let btn_left = document.querySelector(".btn_left");
let advertising_first = document.querySelector(".advertising_first");
let advertising_second = document.querySelector(".advertising_second");

let arr = [advertising_first, advertising_second];

window.addEventListener("DOMContentLoaded", () => {
  arr[0].style.display = "block";
});

btn_right.addEventListener("click", () => {
  arr[0].style.display = "none";
  arr[1].style.display = "block";
});

btn_left.addEventListener("click", () => {
  arr[1].style.display = "none";
  arr[0].style.display = "block";
});
