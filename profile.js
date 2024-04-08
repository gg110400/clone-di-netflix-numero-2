
let profili = document.querySelectorAll(".profile");

// Itera attraverso ogni elemento all'interno della NodeList
profili.forEach(function(profilo) {
    // Aggiungi un listener a ciascun elemento
    profilo.addEventListener("click", function() {

        window.location.href = "index.html";
    });
});

let kidsProfile=document.getElementById("kids-profile");
kidsProfile.addEventListener("click", function(){
  window.location.href="kids.html"
})

let names = document.querySelectorAll(".name");

profili.forEach(function(profilo, index) {
    profilo.addEventListener("mouseover", function() {
       names[index].classList.remove("fw-normal");
       names[index].classList.remove("text-secondary");
        names[index].classList.add("highlight");
    });

    profilo.addEventListener("mouseout", function() {
        names[index].classList.remove("highlight");
        names[index].classList.add("fw-normal");
        names[index].classList.add("text-secondary");
    });
});





