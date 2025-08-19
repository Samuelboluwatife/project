const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const form = document.querySelector(".get-started-form");

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
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

