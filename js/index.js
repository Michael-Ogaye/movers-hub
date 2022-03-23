const inputs = document.querySelectorAll(".input");
const toggle_btn = document.querySelectorAll(".toggle");
const section = document.querySelector("section");
const bullets = document.querySelectorAll(".bullets span");
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

function moveSlider(){
    let index = this.dataset.value;
    
    
    bullets.forEach(bull => bull.classList.remove('active'));
    this.classList.add('active');
}

bullets.forEach(bullet =>{
    bullet.addEventListener('click', moveSlider);
})




























