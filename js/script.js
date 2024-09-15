const handleFormSubmit = (e) => {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  handleRemoveAllErrors();
  handleCheckInputField(firstName, "firstName", "First name cannot be empty");
  handleCheckInputField(lastName, "lastName", "Last name cannot be empty");
  handleCheckInputField(email, "email", "Looks like this is not an email");
  handleCheckInputField(password, "password", "Password cannot be empty");
};
const handleCheckInputField = (fieldName, fieldId, errorMessage) => {
  if (!fieldName) {
    handleErrorMessageAndIcon(fieldId, errorMessage);
    return;
  }
};
const handleErrorMessageAndIcon = (fieldId, errorMessage) => {
  const findParentFieldName = document.getElementById(fieldId).parentElement;
  console.log(findParentFieldName);
  const errorIcon = document.createElement("img");
  errorIcon.src = "/images/icon-error.svg";
  errorIcon.alt = "ErrorIcon";
  errorIcon.classList.add("error-icon");
  findParentFieldName.appendChild(errorIcon);

  const errorText = document.createElement("p");
  errorText.textContent = errorMessage;
  errorText.classList.add("error-text");
  findParentFieldName.appendChild(errorText);
};
const handleRemoveAllErrors = () => {
  const errorElements = document.querySelectorAll(".error-icon,.error-text");
  errorElements.forEach((error) => {
    error.remove();
  });
};
