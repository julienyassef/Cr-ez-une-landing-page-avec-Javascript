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
const inputRadio = document.querySelectorAll('input[type="radio"]');
const inputCGU = document.querySelector("#checkbox1");
const inputNewsLetter = document.querySelector("#checkbox2");


// =====================
//        GLOBALE
// =====================
const RESULTS = {
  first: '',
  last:'',
  email: '',
  birthdate: '',
  quantity: '',
  city: '',
  cgu: false,
  newsletter: false
}

// objet radio city
const cityLocation = {
  "New York": "New York",
  "San Francisco": "San Francisco",
  "Seattle": "Seattle",
  "Chicago": "Chicago",
  "Boston": "Boston",
  "Portland": "Portland"
}


// Text error message 
const textErrorMessage = {
  name: 'Veuillez entrer 2 caractères ou plus pour le champ du nom',
  email: 'Veuillez renseigner une adresse mail valide.',
  birthdate: 'Vous devez entrer votre date de naissance',
  quantity: 'Veuillez renseigner un nombre entre 0 et 99',
  city: 'Veuillez sélectionner une ville',
  cgu: `Vous devez accepter les conditions d'utilisation`
}


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

// function isValidBirthdate
const isValidBirthdate = (birthdate) => {
  const birthdateRegex = /^(19|20)\d{2}-(0[1-9]|1[0-2])-([0-2][0-9]|3[01])$/;
  return birthdateRegex.test(birthdate);
};

// function isValidQuantity
const isValidQuantity = (quantity) => {
  const parsedQuantity = parseInt(quantity);
  return !isNaN(parsedQuantity) && parsedQuantity >= 0 && parsedQuantity <= 99;
};

// // function isCheckedRadio
// const isCheckedRadio = (radioGroupName) => {
//   const radioGroup = document.querySelectorAll(`input[name="${radioGroupName}"]:checked`);
//   return radioGroup.length > 0;
// };

// // function isChecked
const isChecked = (input) => {
  return input.checked;

};
/* tentative 2 */
// // function errorMessage
// const displayErrorMessage = (inputElement, MessageText) => {
//   const errorMessage = inputElement.nextElementSibling;
//   if (errorMessage) {
//     errorMessage.textContent = MessageText;
//     errorMessage.classList.add('formData');
//     errorMessage.setAttribute('data-error', MessageText);
//     errorMessage.setAttribute('data-error-visible', 'true');
//   }
// };




// =====================
//      LOGIQUE 
// =====================

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalcrossclose.addEventListener("click", closeModal);

  /* tentative 1 */
// const errorMessage = document.createElement('p');

// validation de l'input firstName
inputFirst.addEventListener('input', (event) => {
  const isValid = isValidFirstName(inputFirst);
  
  if (isValid === true) {
  /* tentative 1 */
    // errorMessage.textContent = ''; 
      /* tentative 2 */
    // displayErrorMessage(inputFirst, '');
    RESULTS.first = inputFirst.value
  } else {
      /* tentative 1 */
    // errorMessage.textContent = textErrorMessage.name;
    /* tentative 2 */
    // displayErrorMessage(inputFirst, 'Le prénom doit comporter au moins 2 caractères');
    RESULTS.first = ''
      /* tentative 1 */
    // inputFirst.parentNode.insertBefore(errorMessage, inputFirst.nextSibling);
  }
});


// validation de l'input lastName
inputLast.addEventListener('input', (event) => {
  const isValid = isValidLasttName(inputLast);
  
  if (isValid === true) {
    RESULTS.last = inputLast.value
  } else {
    RESULTS.last = ''
  }
});

// validation de l'input Birthdate
inputBirthdate.addEventListener('change', (event) => {
  console.log('Change event triggered');
  console.log('Input value:', event.target.value);
  const isValid = isValidBirthdate(inputBirthdate.value);
  
  if (isValid === true) {
    RESULTS.birthdate = inputBirthdate.value
  } else {
    RESULTS.birthdate = ''
  }
});

// validation de l'input Email
inputEmail.addEventListener('input', (event) => {
  const isValid = isValidEmail(inputEmail.value);
  
  if (isValid === true) {
    RESULTS.email = inputEmail.value
  } else {
    RESULTS.email = ''
  }
});

// validation de l'input Quantity
inputQuantity.addEventListener('input', (event) => {
  const isValid = isValidQuantity(inputQuantity.value);
  console.log('isValid', isValid)
  
  if (isValid === true) {
    RESULTS.quantity = inputQuantity.value
  } else {
    RESULTS.quantity = ''
  }
});


// validation Ratio
inputRadio.forEach(input => {
  input.addEventListener("change", event => {
    const selectedValue = event.target.value;
    
    if (cityLocation[selectedValue])  {
      RESULTS.city = cityLocation[selectedValue]
    } 
    else {
      RESULTS.city = "error"
    }
  });
});



// // CGU constante
let isCGUChecked = false;

// Vérifier l'état initial de la case CGU 
RESULTS.cgu = inputCGU.checked ? "coché" : "non coché";
isCGUChecked = RESULTS.cgu;

// validation de l'input CGU
inputCGU.addEventListener('change', (event) => {
  RESULTS.cgu = event.target.checked ? "coché" : "non coché";
  isCGUChecked = event.target.checked;
  console.log(isCGUChecked)
});



// validation de l'input CGU
// inputCGU.addEventListener('input', (event) => {
//   const isCGUChecked = isChecked(inputCGU);
  
//   if (isCGUChecked === true) {
//     RESULTS.cgu = "coché";
//   } else {
//     RESULTS.cgu = "non coché";
//   }
// });



// Vérifier l'état initial de la case newsletter
RESULTS.newsletter = inputNewsLetter.checked ? "coché" : "non coché";

// validation de l'input inputNewsLetter
inputNewsLetter.addEventListener('change', (event) => {
  RESULTS.newsletter = event.target.checked ? "coché" : "non coché";
});

// validation de l'input NewsLetter
// inputNewsLetter.addEventListener('input', (event) => {
//   const isNewsLetterChecked = isChecked(inputNewsLetter);
  
//   if (isNewsLetterChecked === true) {
//     RESULTS.newsletter = "coché";
//   } else {
//     RESULTS.newsletter = "non coché";
//   }
// });


// =================================
//      VALIDATION FORMULAIRE
// =================================

// remplir le formulaire et validation submit click
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // let isValidRadio = isCheckedRadio("location");

  let isValid = true;
  
  // vérifier la variable RESULTS
  for (let key in RESULTS) {
    const value = RESULTS[key];
    console.log(`${key}: ${value}`);

    // pas valable pour les boolean
    // if(value.length === 0) {
    //   // error
      
    // }

    if ((typeof value === 'string' && value.length === 0) || (typeof value === 'boolean' && value === false)) {
      isValid = false;
      console.log(`Erreur dans le champ ${key}`);
    }

  }

  if (!isCGUChecked) {
    isValid = false;
    console.log("Erreur, veuillez accepter les conditions d'utilisation.");
  }

  if (isValid) {
    console.log("Formulaire valide");
   
  } else {
    console.log("Erreur, veuillez remplir correctement le formulaire");
  }

  // if (isValidRadio) {
  //   console.log("cocher radio est valide.");
  // } else {
  //   console.log("cocher radio est invalide.");
  // }
})


