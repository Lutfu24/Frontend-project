// advertising section

let btn_right = document.querySelector(".btn_right");
let btn_left = document.querySelector(".btn_left");
let advertising_first = document.querySelector(".advertising_first");
let advertising_second = document.querySelector(".advertising_second");

let arr = [advertising_first, advertising_second];

window.addEventListener("DOMContentLoaded", () => {
  arr[0].style.display = "block";
});

btn_right.addEventListener("click", () => {
  if (arr[1].style.display === "block") {
    arr[1].style.display = "none";
    arr[0].style.display = "block";
  } else {
    arr[0].style.display = "none";
    arr[1].style.display = "block";
  }
});

btn_left.addEventListener("click", () => {
  if (arr[0].style.display === "block") {
    arr[0].style.display = "none";
    arr[1].style.display = "block";
  } else {
    arr[1].style.display = "none";
    arr[0].style.display = "block";
  }
});

// trend section

let trend_cards = document.querySelector(".trend_cards");
let trend_btn_right = document.querySelector(".trend_btn_right");
let trend_btn_left = document.querySelector(".trend_btn_left");
let item = trend_cards.getElementsByClassName("trend_card");

trend_btn_right.addEventListener("click", () => {
  getNext();
});

const getNext = () => {
  trend_cards.append(item[0]);
};

trend_btn_left.addEventListener("click", () => {
  getPrew();
});

const getPrew = () => {
  trend_cards.prepend(item[3]);
};

// customer section

let customer_btn_next = document.querySelector(".customer_btn_next");
let customer_btn_prew = document.querySelector(".customer_btn_prew");
let customer_wrappers = document.querySelectorAll(".customer_wrapper");

// shoping section

let shop_cards = document.querySelector(".shop_cards");
let shop_btn_right = document.querySelector(".shop_btn_right");
let shop_btn_left = document.querySelector(".shop_btn_left");
let shopItem = shop_cards.getElementsByClassName("shop_card");

shop_btn_right.addEventListener("click", () => {
  getNextShopCard();
});

const getNextShopCard = () => {
  shop_cards.append(shopItem[0]);
};

shop_btn_left.addEventListener("click", () => {
  getPrewShopCard();
});

const getPrewShopCard = () => {
  shop_cards.prepend(shopItem[3]);
};

// modal login

let login = document.querySelector(".login_user");
let modal = document.querySelector(".modal");
let modal_form = document.querySelector(".modal_form");

login.addEventListener("click", () => {
  modal.classList.toggle("active");
});

window.addEventListener("click", (e) => {
  if (e.target === login || e.target === modal || e.target === modal_form) {
  } else {
    modal.classList.remove("active");
  }
});

// menu bar

let menu = document.querySelector(".menu_bar");
let menuItem = document.querySelector(".menu_bar i");
let menu_card = document.querySelector(".menu_card");

menu.addEventListener("click", () => {
  menu_card.style.height = "300px";
});

window.addEventListener("click", (e) => {
  if (e.target === menu_card || e.target === menuItem) {
  } else {
    menu_card.style.height = "0";
  }
});
