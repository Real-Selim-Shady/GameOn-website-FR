function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/////

let modalid = document.getElementById("modalid1");
let croix = document.getElementById("croix");
let go = document.getElementById("btnmodal1");
let croix2 = document.getElementById("croix2");
let croix3 = document.getElementById("croix3");
let modalid2 = document.getElementById("modalid2");
let btn_envoi = document.getElementById("bouton_envoi");
//pas de grosse dif avec une constante -> variant -> j'aurais pu mettre var ou let
//let met un contexte qui fait exister la variable, var existe presque partout, mais let créé un contexte plus restraint
//le let s'il est dans une fonction, il existera que quand la fontion s'activera, le var il existera quoi qu'il arrive, ce qui surcharge la mémoire

/////

croix.onclick = function() {
  modalid.style.display= "none" ;
}

go.onclick = function() {
  modalid.style.display= "block";
}

////


let validation = document.getElementById("bouton_envoi");


validation.addEventListener("click", f_valid);

let prenom = document.getElementById("first");
let prenom_m = document.getElementById("prenom_manquant");
let prenom_v = /^[a-zA-ZéèëÉÈËçÇîïÎÏ][a-zéèëçîï]+([-'\s][a-zA-ZéèëÉÈËîïÎÏ][a-zéèëçîï]+)?/;
let nom = document.getElementById("last");
let nom_m = document.getElementById("nom_manquant");
let nom_v = /^[a-zA-ZéèëÉÈËçÇîïÎÏ][a-zéèëçîï]+([-'\s][a-zA-ZéèëÉÈËîïÎÏ][a-zéèëçîï]+)?/;
let email = document.getElementById("email");
let email_m = document.getElementById("email_manquant");
let email_v = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let ddn = document.getElementById("ddn");
let ddn_m = document.getElementById("ddn_manquante");
let ddn_v = /((19[3-9][0-9])|(200[0-4]))-((0?[1-9])|(1[012]))-((0[1-9])|([12][0-9])|(3[01]))/;
let qt = document.getElementById("quantity");
let qt_m = document.getElementById("nombre_manquant")
let qt_v = /[0-9]{2}/




function f_valid (e) {
  if (prenom.validity.valueMissing) {
    e.preventDefault() ;
    prenom_m.textContent = "Prénom manquant";
    prenom_m.style.color ="red";
  }else if (prenom_v.test(prenom.value) == false) {
    e.preventDefault();
    prenom_m.textContent = "format incorrect";
    prenom_m.style.color ="red";
  }

  if (nom.validity.valueMissing) {
    e.preventDefault() ;
    nom_m.textContent = "Nom manquant";
    nom_m.style.color ="red";
  }else if (nom_v.test(nom.value) == false) {
    e.preventDefault();
    nom_m.textContent = "format incorrect";
    nom_m.style.color ="red";
  }

  if (email.validity.valueMissing) {
    e.preventDefault() ;
    email_m.textContent = "email manquant";
    email_m.style.color ="red";
  }else if (email_v.test(email.value) == false) {
    e.preventDefault();
    email_m.textContent = "format incorrect";
    email_m.style.color ="red";
  }


  if (ddn.validity.valueMissing) {
    e.preventDefault() ;
    ddn_m.textContent = "date de naissance manquante";
    ddn_m.style.color ="red";
  }else if (ddn_v.test(ddn.value) == false) {
    e.preventDefault();
    ddn_m.textContent = "format incorrect";
    ddn_m.style.color ="red";
  }

  if (qt.validity.valueMissing) {
    e.preventDefault() ;
    qt_m.textContent = "nombre de tournois manquant";
    qt_m.style.color ="red";
  }else if (ddn_v.test(qt.value) == false) {
    e.preventDefault();
    qt_m.textContent = "format incorrect";
    qt_m.style.color ="red";
  }






}

/*if (f_valid == true) {
  function test() {
  modalid.style.display= "none";
  modalid2.style.display= "block";
  console.log("coucou");
  }
}*/




croix2.onclick = function() {
  modalid2.style.display= "none" ;
}

croix3.onclick = function() {
  modalid2.style.display= "none" ;
}


/*if (f_valid == true) {
  function test() {
    modalid.style.display= "none";
    modalid2.style.display= "block";
    console.log("coucou");
  }
}*/



//console.log(ddn.value);
/*
function f_valid (e) {
  if (nom.validity.valueMissing) {
    e.preventDefault() ;
    nom_m.textContent = "Nom manquant";
    nom_m.style.color ="red";
  }else if (nom_v.test(nom.value) == false) {
    e.preventDefault();
    nom_m.textContent = "format incorrect";
    nom_m.style.color ="red";
  }else {

  }
}

function f_valid (e) {
  if (email.validity.valueMissing) {
    e.preventDefault() ;
    email_m.textContent = "email manquant";
    email_m.style.color ="red";
  }else if (email_v.test(email.value) == false) {
    e.preventDefault();
    email_m.textContent = "format incorrect";
    email_m.style.color ="red";
  }else {

  }
}

/*
let email = document.getElementById("email");
let email_m = document.getElementById("email_manquant");
let email_v = /^[a-zéèëçîï0-9][a-zéèëçîï0-9]+([-_.][a-zéèëçîï0-9][a-zéèëçîï0-9]+)?+@[a-zéèëçîï0-9]+.[a-z]/;
*/





/*
/////

document.getElementById("inscription").addEventListener("submit", function (e) {

  e.preventDefault();

  let prenom = document.getElementById("first");
  let nom = document.getElementById("last");
  let email = document.getElementById("email");
  let birthdate = document.getElementById("birthdate");
  let quantity = document.getElementById("quantity");
  let location1 = document.getElementById("location1");
  let location2 = document.getElementById("location2");
  let location3 = document.getElementById("location3");
  let location4 = document.getElementById("location4");
  let location5 = document.getElementById("location5");
  let location6 = document.getElementById("location6");
  let checkbox1 = document.getElementById("checkbox1");
  let checkbox2 = document.getElementById("checkbox2");
  let erreur;

  if (!prenom.value) {
    erreur = "Veuillez renseigner un Prénom";
  }

  if (!nom.value) {
    erreur = "Veuillez renseigner un Nom";
  }

  if (!email.value) {
    erreur = "Veuillez renseigner un Email";
  }

  if (!quantity.value) {
    erreur = "Veuillez renseigner un chiffre";
  }

  if (!checkbox1) {
    erreur = "Veuillez accepter la première case en acceptant nos conditions";
  }

  if (erreur) {
    e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur;
    return false;
  }else {
    alert ('formulaire envoyé!');
  }



})
*/