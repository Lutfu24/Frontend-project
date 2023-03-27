

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