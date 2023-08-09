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
const errorMessageEmail = document.querySelector("#error-message-email");
const errorMessageBirthdate = document.querySelector("#error-message-birthdate");
const errorMessageQuantity = document.querySelector("#error-message-quantity");



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

// function isValidFirstName
const isValidFirstName = (input) => {
  const value = input.value;

  if (value.length >= 2) {
    return true
  } else {
    return false
  }
};

// function isValidlastName
const isValidLasttName = (input) => {
  const value = input.value;

  if (value.length >= 2) {
    return true
  } 
  else {
    return false
  }
};

// function isValidEmail
const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};

// function isValidQuantity
const isValidQuantity = (quantity) => {
  const parsedQuantity = parseInt(quantity);
  return !isNaN(parsedQuantity) && parsedQuantity >= 0 && parsedQuantity <= 99;
};





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

// validation de l'input Email
inputEmail.addEventListener('input', (event) => {
  const isValid = isValidEmail(inputEmail.value);
  
  if (isValid === true) {
    errorMessageEmail.textContent = " ";
  } else {
    errorMessageEmail.textContent = "Veuillez entrer une adresse e-mail valide.";
  }
});

// validation de l'input Quantity
inputQuantity.addEventListener('input', (event) => {
  const isValid = isValidQuantity(inputQuantity.value);
  
  if (isValid === true) {
    errorMessageQuantity.textContent = " ";
  } else {
    errorMessageQuantity.textContent = "Veuillez entrer une valeur valide entre 0 et 99.";
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


