let currentUser = sessionStorage.getItem("currentUserLogin");
let logoutBtn = document.getElementById("logoutBtn");

if (!currentUser) {
  window.location.replace("../page/login.html");
} else {
  document.getElementById("user-name").innerHTML = currentUser;
}

logoutBtn.addEventListener("click", logout);
function logout() {
  sessionStorage.clear();
  window.location.reload();
}
