const formAction = document.forms["login-form"];

let userInput = document.getElementById("userInput");
let passwordInput = document.getElementById("passwordInput");

let users = JSON.parse(localStorage.getItem("users"));

btnLogin.addEventListener("click", login);

function login() {
  let userValue = userInput.value;
  let passwordValue = passwordInput.value;

  for (let i = 0; i < users.length; i++) {
    if (
      userValue === users[i].userName &&
      passwordValue === atob(users[i].password)
    ) {
      document.getElementById("login-messages").innerHTML = "";
      window.location.replace("../index.html");
      sessionStorage.setItem("currentUserLogin", userValue);
    } else {
      document.getElementById("login-messages").innerHTML =
        "wrong user or password, try again";
    }
  }
}
