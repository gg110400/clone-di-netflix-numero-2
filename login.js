//PAGINA LOGIN
let email = document.getElementById("email");
let password = document.getElementById("password");
email.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    email.value = ""; // Reimposta il valore del campo input su una stringa vuota
  }
});

password.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    password.value = ""; // Reimposta il valore del campo input su una stringa vuota
  }
});

let accesso = document.getElementById("log-in");
accesso.addEventListener("click", function (evento) {
  if (password.value === "" || email.value === "") {
    email.classList.remove("text-light");
    email.classList.add("input-error");
    email.style.border="1px solid red"
    email.value = "* Field required";
    password.classList.remove("text-light");
    password.classList.add("input-error");
    password.style.border="1px solid red"
    password.value = "* Field required";
  } else {
    password.value = "";
    email.value = "";
    window.location.href = "index.html";
  }
});


