// Event listeners
document.getElementById('name').addEventListener('blur', nameValidation);
document.getElementById('email').addEventListener('blur', emailValidation);
document.getElementById('phone').addEventListener('blur', phoneValidation);
document.getElementById('zip').addEventListener('blur', zipValidation);

// Name validation
function nameValidation(){  
  const name = document.getElementById('name');
  // console.log(name);
  const regExpression = /^[a-z]{2,10}$/i;

  if(regExpression.test(name.value)){
      name.classList.add('is-valid');
  }else{
    name.classList.add('is-invalid');
  }
  
}

// Email validation
function emailValidation(){  
  const email = document.getElementById('email');
  const regExpression = /^[a-z1-9]{5,20}@gmail\.com$/i;

  if(regExpression.test(email.value)){
      email.classList.add('is-valid');
  }else{
    email.classList.add('is-invalid');
  }
  
}

// Phone validation
function phoneValidation(){  
  const phone = document.getElementById('phone');
  const regExpression = /^\d{12}$/;

  if(regExpression.test(phone.value)){
      phone.classList.add('is-valid');
  }else{
    phone.classList.add('is-invalid');
  }
  
}

// Zipcode validation
function zipValidation(){  
  const zip = document.getElementById('zip');
  const regExpression = /^\d{5}$/;

  if(regExpression.test(zip.value)){
      zip.classList.add('is-valid');
  }else{
    zip.classList.add('is-invalid');
  }
  
}