const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
form.classList.add("label");
form.classList.add("input");
function onFormSubmit(event) {
  event.preventDefault();
  console.log(form.elements);
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }
  const userData = {
    email,
    password,
  };
  console.log(userData);
  form.reset();
}
