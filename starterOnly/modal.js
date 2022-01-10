function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } 
  else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn"); 
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//c'est pour mettre un clic sur tous les boutons, risque que 
//ça impacte un autre bouton dont on ne souhaite pas cette action

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


