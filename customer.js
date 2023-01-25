const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  console.log(`Name: ${name} Email: ${email}`);
});