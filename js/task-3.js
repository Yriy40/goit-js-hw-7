const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", updateGreeting);

function updateGreeting() {
  const enteredName = nameInput.value.trim();
  nameOutput.textContent = enteredName || "Anonymous";
}
