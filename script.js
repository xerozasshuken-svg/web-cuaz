const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const choices = document.getElementById("choices");
const background = document.getElementById("background");

//Circulo de fondo
setTimeout(() => {
  background.classList.remove("hidden");
  background.classList.add("show");
}, 200);
// Aparece el sobre
setTimeout(() => {
  envelope.classList.remove("hidden");
  envelope.classList.add("show");
}, 500);

//Se abre el sobre
setTimeout(() => {
  envelope.classList.add("open");
}, 1800);

//Sale el papel
setTimeout(() => {
  letter.classList.remove("hidden");
  letter.classList.add("show");
}, 2600);

//El sobre desaparece
setTimeout(() => {
  envelope.classList.add("fade-out");
}, 3400);

//Aparecen botones
setTimeout(() => {
  choices.classList.remove("hidden");
  choices.classList.add("show");
}, 4200);

//Al elegir opción
document.querySelectorAll(".choices button").forEach(btn => {
  btn.addEventListener("click", () => {
    letter.classList.add("fade-out");
    choices.classList.add("fade-out");
  });
});
