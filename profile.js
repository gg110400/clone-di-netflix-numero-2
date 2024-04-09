
//Quando clicco sul singolo profilo vengo reindirizzato verso la home

let profili = document.querySelectorAll(".profile");

profili.forEach(function (profilo) {
  profilo.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});

//Quando clicco sul profilo bambino vengo reindirizzato nella sezione kids di Netflix

let kidsProfile = document.getElementById("kids-profile");
kidsProfile.addEventListener("click", function () {
  window.location.href = "kids.html";
});



//Quando passo con il mouse su ogni profilo, il nome diventa bianco e il bordo diventa bianco e più spesso

let names = document.querySelectorAll(".name");

profili.forEach(function (profilo, index) {
  profilo.addEventListener("mouseover", function () {
    names[index].classList.remove("fw-normal");
    names[index].classList.remove("text-secondary");
    names[index].classList.add("highlight");
  });

  profilo.addEventListener("mouseout", function () {
    names[index].classList.remove("highlight");
    names[index].classList.add("fw-normal");
    names[index].classList.add("text-secondary");
  });
});


//Applico lo stesso comportamento di sopra al profilo kids
let kidsText = document.getElementById("kids-text");

kidsProfile.addEventListener("mouseover", function () {
  kidsText.classList.remove("fw-normal");
  kidsText.classList.remove("text-secondary");
  kidsText.classList.add("highlight");
});

kidsProfile.addEventListener("mouseout", function () {
  kidsText.classList.remove("highlight");
  kidsText.classList.add("fw-normal");
  kidsText.classList.add("text-secondary");
});
