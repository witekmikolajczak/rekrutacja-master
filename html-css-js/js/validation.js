'use strict';

document.getElementById('btn').addEventListener('click', (event) => {
  event.preventDefault();

  const firstname = document.getElementById('first-name');
  const lastname = document.getElementById('last-name');
  const email = document.getElementById('email');
  const data = [firstname, lastname, email];
  const regexName = /^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/;
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  for (let i = 0; i < data.length; i++) {
    if (data[i].value == '') {
      data[i].style.borderColor = 'red';
      alert('Wprowadź poprawne dane');
      break;
    }
  }
  if (
    regexName.test(firstname.value) == false ||
    regexName.test(lastname.value) == false ||
    regexEmail.test(email.value == false)
  ) {
  } else {
    firstname.style.borderColor = 'black';
    lastname.style.borderColor = 'black';
    email.style.borderColor = 'black';
  }
});
