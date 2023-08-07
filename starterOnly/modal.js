function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalcrossclose = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};

// close modal event
modalcrossclose.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal event
function closeModal() {
  modalbg.style.display = "none";
};

// remplir le formulaire et validation submit click
let form = document.querySelector("form")
form.addEventListener("submit", (event) => {
  event.preventDefault()

  let baliseFirst = document.querySelector("#first")
  let first = baliseFirst.value

  let baliseLast = document.querySelector("#last")
  let last = baliseLast.value

  let baliseEmail = document.querySelector("#email")
  let email = baliseEmail.value

  let baliseBirthdate= document.querySelector("#birthdate")
  let birthdate = baliseBirthdate.value

  let baliseQuantity= document.querySelector("#quantity")
  let quantity = baliseQuantity.value

  
  let baliseLocation = document.querySelectorAll("input[name=location]")
  let location = ""
  for (let i = 0; i < baliseLocation.length; i++) {
    if (baliseLocation[i].checked) {
      location = baliseLocation[i].value
      break
    }
    
  let baliseAccept = document.getElementById("checkbox1")
  let accept = baliseAccept.checked
    
  let baliseInform = document.getElementById("checkbox2")
  let inform = baliseInform.checked

  }


  console.log(first, last, email, birthdate, quantity, location, accept, inform)

  // Vérification des champs
  if (first.length < 2 || last.length < 2 || !isValidEmail(email) || parseInt(quantity) < 0 || parseInt(quantity) > 99 || location === "" ) {
    return;
  }
  form.submit();
 

})


