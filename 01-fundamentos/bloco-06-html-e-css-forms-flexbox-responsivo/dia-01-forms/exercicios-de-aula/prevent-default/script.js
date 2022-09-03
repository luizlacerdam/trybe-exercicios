// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function funA() {
  HREF_LINK.addEventListener('click', function (event) {
    event.preventDefault();
  });
}
funA();

function funCheck() {
  INPUT_CHECKBOX.addEventListener('click', function (event) {
    event.preventDefault();
  });
}
funCheck();

function funKey() {
  INPUT_TEXT.addEventListener('keypress', function (event) {
    if (event.key != 'a') {
      event.preventDefault();
    }
  });
}
funKey();