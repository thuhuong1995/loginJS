const form = document.forms["register-form"];
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

let users = JSON.parse(localStorage.getItem("users")) || [];

const accountInput = document.getElementById("create-account");
const passwordInput = document.getElementById("create-password");
const emailInput = document.getElementById("create-email");
const confirmPasswordInput = document.getElementById("create-confirm-password");

const createBtn = document.getElementById("create-btn");

createBtn.addEventListener("click", createAccount);

function createAccount() {
  let accountValue = accountInput.value;
  let password = passwordInput.value;
  let email = emailInput.value;
  let confirmPassword = confirmPasswordInput.value;

  //check user name exits or not
  const checkAccountExist = users.some(
    (item) => item.userName === accountValue
  );

  //validate
  //doan nay k can doc dau e nhe
  if (!accountValue) {
    document.getElementById("account-message").innerHTML =
      "Please enter account name!!!";
  } else if (checkAccountExist) {
    document.getElementById("account-message").innerHTML =
      "Your account is exits, please try again!!!";
    return;
  } else {
    document.getElementById("account-message").innerHTML = "";
  }
  if (!password) {
    document.getElementById("password-message").innerHTML =
      "Please enter account name!!!";
  } else {
    document.getElementById("password-message").innerHTML = "";
  }
  if (confirmPassword !== password) {
    document.getElementById("confirm-password-message").innerHTML =
      "Confirm password is not correct, please check";
    return false;
  } else {
    document.getElementById("confirm-password-message").innerHTML = "";
  }
  //end validate & save to data, bat dau doc tu day ne e  =>>
  if (accountValue && !checkAccountExist && confirmPassword) {
    users.push({
      userName: accountValue,
      email: email,
      password: btoa(password),
    });
    localStorage.setItem("users", JSON.stringify(users));
    //end save data
    // show alert and set default value
    alert("Congratulation! Now you can login with user name : " + accountValue);
    accountInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";
  }
}
