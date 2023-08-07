const editNav = () => {
  const x = document.querySelector("#myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// =====================
//     DOM Elements
// =====================
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalcrossclose = document.querySelector(".close");

const form = document.querySelector("form");
const inputFirst = document.querySelector("#first");
const inputLast = document.querySelector("#last");
const inputEmail = document.querySelector("#email");
const inputBirthdate= document.querySelector("#birthdate");
const inputQuantity= document.querySelector("#quantity");



// =====================
//     FUNCTIONS
//   (définitions)
// =====================
// launch modal form
const launchModal = () => {
  modalbg.classList.add('display')
};
// close modal event
const closeModal = () => {
  modalbg.classList.remove('display')
};

const isValidFirstName = (input) => {
  const value = input.value;

  if (value.length >= 2) {
    return true
  } else {
    return false
  }
}

const isValidLastName = () => {

}

const isValidEmail = () => {
  // regex que tu as fait toi même ;)

}


// =====================
//      LOGIQUE 
// =====================

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalcrossclose.addEventListener("click", closeModal);

// validation de l'input firstName
inputFirst.addEventListener('input', (event) => {
  const isValid = isValidFirstName(inputFirst)
  
  // si c'est pas valid alors....
  if (isValid === true) {
    console.log("super faut supprimer le message d'erreur si y'en a")
  } else {
    console.log("pas bien faut afficher le message d'erreur")
  }
})













// remplir le formulaire et validation submit click
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const first = baliseFirst.value
  const last = baliseLast.value
  const email = baliseEmail.value
  const birthdate = baliseBirthdate.value
  const quantity = baliseQuantity.value
  console.log(first, last, email, birthdate, quantity)
})


