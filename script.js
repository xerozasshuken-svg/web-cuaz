const envelope = document.getElementById("envelope");
const letter = document.querySelector(".letter");
const choices = document.getElementById("choices");
const heart = document.querySelector(".bg-heart");

//corazon de fondo
setTimeout(() => {
  heart.classList.add("show");
}, 400);
// Aparece el sobre
setTimeout(() => {
  envelope.classList.remove("hidden");
  envelope.classList.add("show");
}, 700);

//Se abre el sobre
setTimeout(() => {
  envelope.classList.add("open");
}, 1950);

//Sale el papel
setTimeout(() => {
  letter.classList.add("show");
}, 2500);

//El sobre desaparece
setTimeout(() => {
  envelope.classList.add("fade-out");
}, 2950);

//Aparecen botones
setTimeout(() => {
  choices.classList.remove("hidden");
  choices.classList.add("show");
}, 1000);

//Al elegir opción
document.querySelectorAll(".choices button").forEach(btn => {
  btn.addEventListener("click", () => {
    letter.classList.add("fade-out");
    choices.classList.add("fade-out");
  });
});
