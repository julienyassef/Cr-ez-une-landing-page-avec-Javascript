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
const inputRadio = document.querySelectorAll(".checkbox-input");


// =====================
//        GLOBALE
// =====================
const RESULTS = {
  first: '',
  last:'',
  email: '',
  birthdate: '',
  quantity: '',
  // city: '',
  // cgu: false,
  // newsletter: false
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
  const birthdateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
  return birthdateRegex.test(birthdate);
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
    RESULTS.first = inputFirst.value
  } else {
    RESULTS.first = ''
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
inputBirthdate.addEventListener('input', (event) => {
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
// inputRadio.forEach(input => {
//   input.addEventListener("change", event => {
//     const selectedValue = event.target.value;
//     console.log("Selected city:", selectedValue);
    
//     if (selectedValue === "") {
//       errorMessageRatio.textContent = " Vous devez choisir un tournoi ";
//     } else {
//       errorMessageRatio.textContent = " ";
//     }
//   });
// });


// remplir le formulaire et validation submit click
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // vérifier la variable RESULTS
  for (let key in RESULTS) {
    const value = RESULTS[key]

    // pas valable pour les boolean
    if(value.length === 0) {
      // error
      console.log("key", key)

    }

  }
})


