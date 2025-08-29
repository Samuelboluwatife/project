const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const form = document.querySelector(".get-started-form");

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
      });

  const points = [
  " Corrective joint rehabilitation for older adults and those in recovery",
  " Functional training for limitless strength endurance",
  " Body recomposition and nutrition strategies for lasting health"
];

let index = 0;
let charIndex = 0;
const typewriterEl = document.getElementById("typewriter");

function typeEffect() {
  if (charIndex < points[index].length) {
    typewriterEl.textContent += points[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 20); // typing speed
  } else {
    setTimeout(eraseEffect, 1500); // wait before erasing
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typewriterEl.textContent = points[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 20); // erasing speed
  } else {
    index = (index + 1) % points.length;
    setTimeout(typeEffect, 200); // start typing next
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});


  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert("Thanks for joining! We'll reach out to you soon.");
      form.reset();
    } else {
      alert("Oops! Something went wrong. Please try again.");
    }
  });

