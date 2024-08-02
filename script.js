document.addEventListener("DOMContentLoaded", function () {
  let password = document.getElementById("pword").value;
  let confirmPassword = document.getElementById("cpword").value;
  let error = document.getElementById("error");

  if (password === "" && confirmPassword === "") {
    error.innerHTML = "* Passwords don't match.";
  }

  console.log(4);
});
