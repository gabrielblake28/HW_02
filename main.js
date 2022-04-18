document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("custInfo").disabled = true;
  document.getElementById("existingCustInfo").disabled = true;
});

function newUserFormSubmit() {
  const userName = document.getElementById("custUser").value;

  alert(`Welcome ${userName}.`);
}

function existingUserFormSubmit() {
  const userName = document.getElementById("existingCustUser").value;

  alert(`Welcome back ${userName}.`);
}

function enableNewUser() {
  document.getElementById("custTypeInfo").disabled = true;
  document.getElementById("custInfo").disabled = false;
}

function enableExistingUser() {
  document.getElementById("custTypeInfo").disabled = true;
  document.getElementById("existingCustInfo").disabled = false;
}
