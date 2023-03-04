const form = document.querySelector("#signup-form");
const errorMessage = document.querySelector("#error-message");
const successMessage = document.querySelector("#success-message");
const passwordInput = document.querySelector("#password");

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 8) {
    passwordInput.setCustomValidity(
      "Password must be at least 8 characters long"
    );
  } else {
    passwordInput.setCustomValidity("");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.checkValidity()) {
    successMessage.textContent = "Signup successful!";
    form.reset();
  } else {
    errorMessage.textContent = "All fields are required";
  }
});
