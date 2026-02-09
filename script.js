const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const choices = document.getElementById("choices");

// 1️⃣ Aparece el envelope
setTimeout(() => {
  envelope.classList.remove("hidden");
  envelope.classList.add("show");
}, 500);

// 2️⃣ Se abre el envelope
setTimeout(() => {
  envelope.classList.add("open");
}, 1800);

// 3️⃣ Sale el papel
setTimeout(() => {
  letter.classList.remove("hidden");
  letter.classList.add("show");
}, 2600);

// 4️⃣ El envelope desaparece
setTimeout(() => {
  envelope.classList.add("fade-out");
}, 3400);

// 5️⃣ Aparecen botones
setTimeout(() => {
  choices.classList.remove("hidden");
  choices.classList.add("show");
}, 4200);

// 6️⃣ Al elegir opción
document.querySelectorAll(".choices button").forEach(btn => {
  btn.addEventListener("click", () => {
    letter.classList.add("fade-out");
    choices.classList.add("fade-out");
  });
});
