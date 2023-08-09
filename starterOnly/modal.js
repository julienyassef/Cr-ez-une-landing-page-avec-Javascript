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


    // message  d'erreur
const errorMessageFirst = document.querySelector("#error-message-first");
const errorMessageLast = document.querySelector("#error-message-last");



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
};

const isValidLasttName = (input) => {
  const value = input.value;

  if (value.length >= 2) {
    return true
  } 
  else {
    return false
  }
};


// const isValidEmail = () => {
//   // regex que tu as fait toi même ;)

// };


// =====================
//      LOGIQUE 
// =====================

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalcrossclose.addEventListener("click", closeModal);



// validation de l'input firstName
inputFirst.addEventListener('input', (event) => {
  const isValid = isValidFirstName(inputFirst);
  
  if (isValid === true) {
    errorMessageFirst.textContent = " ";
  } else {
    errorMessageFirst.textContent = "Veuillez entrer 2 caratères ou plus pour le champ du prénom";
  }
});

// validation de l'input lastName
inputLast.addEventListener('input', (event) => {
  const isValid = isValidLasttName(inputLast);
  
  if (isValid === true) {
    errorMessageLast.textContent = " ";
  } else {
    errorMessageLast.textContent = "Veuillez entrer 2 caratères ou plus pour le champ du nom";
  }
});





// remplir le formulaire et validation submit click
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const first = inputFirst.value
  const last = inputLast.value
  const email = inputEmail.value
  const birthdate = inputBirthdate.value
  const quantity = inputQuantity.value
  console.log(first, last, email, birthdate, quantity)
})


