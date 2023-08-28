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
const modalcrossclose = document.querySelector(".close");
const modalcrosssecondclose = document.querySelector(".second-close");
const modalCloseBtn = document.querySelector(".btn-close");
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
  
}

// objet radio city
const cityLocation = {
  "New York": "New York",
  "San Francisco": "San Francisco",
  Seattle: "Seattle",
  Chicago: "Chicago",
  Boston: "Boston",
  Portland: "Portland"
}


// Text error message 
const textErrorMessage = {
  first: 'Veuillez entrer 2 caractères ou plus pour le champ du nom',
  last: 'Veuillez entrer 2 caractères ou plus pour le champ du nom',
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

// function launch modal form
const launchModal = () => {
  modalbg.classList.add('display')
};
// function close modal event
const closeModal = () => {
  modalbg.classList.remove('display')
};


// function isValidFirstName
const isValidFirstName = (input) => {
  const value = input.value;
  const FirstNameRegex = /^[A-Za-z\s]+$/;

  return value.length >= 2 && FirstNameRegex.test(value); 
};



// function isValidlastName
const isValidLasttName = (input) => {
  const value = input.value;
  const LastNameRegex = /^[A-Za-z\s]+$/;

 return value.length >= 2 && LastNameRegex.test(value); 
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


// // function isChecked
const isChecked = (input) => {
  return input.checked;

};

// // function launchSecondModal
const launchSecondModal = () => {
  const secondModal = document.querySelector('.secondModal');
  secondModal.style.display = 'block';
};

// // function close second modal
const closeSecondModal = () => {
  const secondModal = document.querySelector('.secondModal');
  secondModal.style.display = 'none';
};




// =====================
//      LOGIQUE 
// =====================

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalcrossclose.addEventListener("click", closeModal);
// close second modal
modalcrosssecondclose.addEventListener("click", closeSecondModal);
// Close second modal btn fermer
modalCloseBtn.addEventListener("click", closeSecondModal);




// validation de l'input firstName
inputFirst.addEventListener('input', (event) => {
  const isValid = isValidFirstName(inputFirst);
 
  if (isValid === true) {
    RESULTS.first = inputFirst.value;
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
inputBirthdate.addEventListener('change', (event) => {
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
      RESULTS.city = false
    }
  });
});


// // CGU constante
let isCGUChecked = false;

// Vérifier l'état initial de la case CGU 
RESULTS.cgu = inputCGU.checked 
isCGUChecked = RESULTS.cgu;

// validation de l'input CGU
inputCGU.addEventListener('change', (event) => {
  RESULTS.cgu = event.target.checked 
  isCGUChecked = event.target.checked;
  // console.log(isCGUChecked)
});



// Vérifier l'état initial de la case newsletter
RESULTS.newsletter = inputNewsLetter.checked 

// validation de l'input inputNewsLetter
inputNewsLetter.addEventListener('change', (event) => {
  RESULTS.newsletter = event.target.checked
});


// =================================
//      VALIDATION FORMULAIRE
// =================================

// remplir le formulaire et validation submit click
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formDataFirst =document.querySelector(".formData-First")
  const formDataLast =document.querySelector(".formData-Last")
  const formDataEmail =document.querySelector(".formData-Email")
  const formDataBirthdate =document.querySelector(".formData-Birthdate")
  const formDataQuantity =document.querySelector(".formData-Quantity")
  const formDataCity =document.querySelector(".formData-City")
  const formDataCgu =document.querySelector(".formData-Cgu")
  
  
  const formDatas = {
    first: formDataFirst,
    last: formDataLast,
    email: formDataEmail,
    birthdate: formDataBirthdate,
    quantity: formDataQuantity,
    city: formDataCity,
    cgu: formDataCgu
  }
  

  for (let key in formDatas) {
    formDatas[key].setAttribute("data-error-visible", false)
  }
 
  let isValid = true;
  
  // vérifier la variable RESULTS
  for (let key in RESULTS) {
    const value = RESULTS[key];
    // console.log(`${key}: ${value}`);


    if(key!=="newsletter"){
        if ((typeof value === 'string' && value.length === 0) || (typeof value === 'boolean' && value === false)) {
          isValid = false;
        formDatas[key].setAttribute("data-error-visible", true)
        formDatas[key].setAttribute("data-error", textErrorMessage[key])
      }
    }
  }

  if (isValid) {
    console.log("Formulaire valide");
    // ferme le formulaire validé
    closeModal();
    // ouvre la deuxième modal de message de confirmation
    launchSecondModal();
   
  } else {
    console.error("Erreur, veuillez remplir correctement le formulaire");
  }


  console.table(RESULTS)
})




