
/*Gestion du burger menu de la version mobile*/
function burgermenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function menu_apparition(x) {
  var x = document.getElementById("myLinks");
  if (y.matches) { 
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var y = window.matchMedia("(min-width: 801px)")
menu_apparition(y) 
y.addListener(menu_apparition) 

/////
/*Variables de gestion de la pop-in de formulaire*/
let modalid = document.getElementById("modalid1");
let croix = document.getElementById("croix");
let go = document.getElementById("btnmodal1");
let go2 = document.getElementById("btnmodalb")
let croix2 = document.getElementById("croix2");
let croix3 = document.getElementById("croix3");
let modalid2 = document.getElementById("modalid2");
let btn_envoi = document.getElementById("bouton_envoi");

/////

/*Fonctions de gestion de la pop-in de formulaire*/
croix.onclick = function() {
  modalid.style.display= "none" ;
}

go.onclick = function() {
  modalid.style.display= "block";
}

go2.onclick = function() {
  modalid.style.display= "block";
}

////

/*Variables visant à aider l'utilisateur à compléter le formulaire*/
let prenom = document.getElementById("first");
let prenom_m = document.getElementById("prenom_manquant");
let prenom_v = /^[a-zA-ZéèëÉÈËçÇîïÎÏ][a-zéèëçîï]+([-'\s][a-zA-ZéèëÉÈËîïÎÏ][a-zéèëçîï]+)?$/;
let nom = document.getElementById("last");
let nom_m = document.getElementById("nom_manquant");
let nom_v = /^[a-zA-ZéèëÉÈËçÇîïÎÏ][a-zéèëçîï]+([-'\s][a-zA-ZéèëÉÈËîïÎÏ][a-zéèëçîï]+)?$/;
let email = document.getElementById("email");
let email_m = document.getElementById("email_manquant");
let email_v = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let ddn = document.getElementById("ddn");
let ddn_m = document.getElementById("ddn_manquante");
let d = Date.parse(ddn.value);
let dmin = new Date ();
dmin.setFullYear(dmin.getFullYear()-99);
let dmax = new Date ();
dmax.setFullYear(dmax.getFullYear()-18);
let qt = document.getElementById("quantity");
let qt_m = document.getElementById("nombre_manquant");
let q = parseInt(qt.value);
let qt_v = /^[0-9][0-9]?$/
let hors_champs = document.getElementById("saisie")
let checkbox1 = document.getElementById("saisie2")


/*Fonctions visant à faire vivre les contraintes de remplissage, et faisant apparaitre les messages d'erreur*/
function validate (e) {
  var valid = true;
  console.log(checkbox1.value);
  if (prenom.validity.valueMissing) {
    prenom_m.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    prenom_m.style.color ="red";
    prenom.style.borderBlockColor="red";
    prenom.style.borderRightColor="red";
    prenom.style.borderLeftColor="red";
    valid=false;
    
  }else if (prenom_v.test(prenom.value) == false) {
    prenom_m.textContent = "format incorrect";
    prenom_m.style.color ="red";
    prenom.style.borderBlockColor="red";
    prenom.style.borderRightColor="red";
    prenom.style.borderLeftColor="red";
    valid=false;
  }

  if (nom.validity.valueMissing) {
    nom_m.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    nom_m.style.color ="red";
    nom.style.borderBlockColor="red";
    nom.style.borderRightColor="red";
    nom.style.borderLeftColor="red";
    valid=false;
  }else if (nom_v.test(nom.value) == false) {
    nom_m.textContent = "format incorrect";
    nom_m.style.color ="red";
    nom.style.borderBlockColor="red";
    nom.style.borderRightColor="red";
    nom.style.borderLeftColor="red";
    valid=false;
  }

  if (email.validity.valueMissing) {
    email_m.textContent = "Vous devez entrer un email.";
    email_m.style.color ="red";
    email.style.borderBlockColor="red";
    email.style.borderRightColor="red";
    email.style.borderLeftColor="red";
    valid=false;
  }else if (email_v.test(email.value) == false) {
    email_m.textContent = "format incorrect";
    email_m.style.color ="red";
    email.style.borderBlockColor="red";
    email.style.borderRightColor="red";
    email.style.borderLeftColor="red";
    valid=false;
  }


  if (isNaN(Date.parse(ddn.value))) {
    ddn_m.textContent = "Vous devez avoir entre 18 et 99 ans.";
    ddn_m.style.color ="red";
    ddn.style.borderBlockColor="red";
    ddn.style.borderRightColor="red";
    ddn.style.borderLeftColor="red";
    valid=false;
  }else {
    d= new Date (ddn.value);
    if (d<dmin || d>dmax) {
      ddn_m.textContent = "Vous devez avoir entre 18 et 99 ans.";
      ddn_m.style.color ="red";
      ddn.style.borderBlockColor="red";
      ddn.style.borderRightColor="red";
      ddn.style.borderLeftColor="red";
      valid=false;
    }
  }

  if (qt_v.test(qt.value) == false) {
    qt_m.textContent = "Vous devez saisir un nombre de tournois entre 0 et 99.";
    qt_m.style.color ="red";
    qt.style.borderBlockColor="red";
    qt.style.borderRightColor="red";
    qt.style.borderLeftColor="red";
    valid=false;
  }

  if (document.forms["reserve"].location.value == "") {
    hors_champs.textContent = "Vous devez saisir au moins un tournoi.";
    hors_champs.style.color ="red";
    valid=false;
  }

  if (document.getElementById("checkbox1").checked == false) {
    checkbox1.textContent = "Vous devez lire et accepter les conditions d'utilisation.";
    checkbox1.style.color ="red";
    valid=false;
  }

  if (valid == true) {
    //fermer le formulaire
    document.getElementById("modalid1").style.display = "none";
    //remettre le formulaire à zero
    document.forms["reserve"].reset();
    //afficher le message
    document.getElementById("modalid2").style.display ="block";
  }

  if (valid == false) {
    e.preventDefault();
  }

}

/*Fermeture de la pop-in d'erreur*/
croix2.onclick = function() {
  modalid2.style.display= "none" ;
}

croix3.onclick = function() {
  modalid2.style.display= "none" ;
}
