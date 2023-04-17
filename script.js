const scriptURL =
  "https://script.google.com/macros/s/AKfycbznHuBNuiPtykLwgdOrCQLpnje61CAshhZYuttuepBH7AKUa4rl5USz4-40iLvkTNGXkw/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("Thanks for being our valuable member! We'll reach out soon!");
      location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
