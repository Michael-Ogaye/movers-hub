const inputs = document.querySelectorAll(".input");
const toggle_btn = document.querySelectorAll(".toggle");
const section = document.querySelector("section");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    section.classList.toggle("logIn");
  });
});

// directing user to diffrent page
let signBtns= $('.signBtn');
signBtns.click(function(){
  window.location.href='profiles.html'
})





























