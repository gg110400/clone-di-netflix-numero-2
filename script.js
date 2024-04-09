
//FUNZIONE PER FAR COMPARIRE LA BARRA DI RICERCA SOLO QUANDO CLICCO SULLA LENTE DI INGRANDIMENTO
let button = document.getElementById("submit-button");
let bar = document.getElementById("search-bar");

button.addEventListener("click", function () {
  if (bar.classList.contains("invisible")) {
    bar.classList.remove("invisible");
    bar.classList.add("visible");
  } else {
    bar.classList.remove("visible");
    bar.classList.add("invisible");
  }
});

//Funzione per resettare il contenuto della barra di ricerca ogni volta che premo invio
bar.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    bar.value = ""; // Reimposta il valore del campo input su una stringa vuota
  }
});


//Quando clicco su manage profile oppure su change profile mi porta alla pagina dove seleziono i profili
let option1 = document.getElementById("manage-profile");
option1.addEventListener("click", function () {
  window.location.href = "profiles.html";
});

let option2 = document.getElementById("change-profile");
option2.addEventListener("click", function () {
  window.location.href = "profiles.html";
});


//Quando clicco su exit compare la pagina di login
let exit = document.getElementById("exit");
exit.addEventListener("click", function () {
  window.location.href = "login.html";
});


//Quando clicco su kids nel menù del profilo mi porta alla sezione entflix kids
let kidsMenu = document.getElementById("kids-menu");
let kidsNav = document.getElementById("kids-nav");
kidsMenu.addEventListener("click", function () {
  window.location.href = "kids.html";
});

//Quando clicco sulla scritta kids nella nav mi porta alla sezione netflix kids
kidsNav.addEventListener("click", function () {
  window.location.href = "kids.html";
});
