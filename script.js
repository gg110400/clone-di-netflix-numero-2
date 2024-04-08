//PAGINA TV SHOWS


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


let option2=document.getElementById("change-profile");
option2.addEventListener("click", function() {
  window.location.href="profiles.html";
})


let option1=document.getElementById("manage-profile");
option1.addEventListener("click", function() {
  window.location.href="profiles.html";
})

let exit=document.getElementById("exit");
exit.addEventListener("click", function(){
  window.location.href="login.html"
})

let kidsMenu=document.getElementById("kids-menu");
let kidsNav=document.getElementById("kids-nav");
kidsMenu.addEventListener("click", function(){
  window.location.href="kids.html"
})

kidsNav.addEventListener("click", function(){
  window.location.href="kids.html"
})

