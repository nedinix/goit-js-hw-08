import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  message: document.querySelector('textarea[name="message"]'),
};

const objValues = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', onInputValue);
refs.message.addEventListener('input', onInputValue);

const parsedSettings = JSON.parse(localStorage.getItem('feedback-form-state'));

console.log(parsedSettings.email);
writeSavedValue(parsedSettings.email, refs.email);
console.log(parsedSettings.message);
writeSavedValue(parsedSettings.message, refs.message);

function writeSavedValue(savedValue, element) {
  if (savedValue) {
    element.value = savedValue;
  }
}

function onInputValue(e) {
  const element = e.currentTarget;
  if (element === refs.email) {
    objValues.email = element.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(objValues));
  }

  if (element === refs.message) {
    objValues.message = element.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(objValues));
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(objValues);
  // console.dir(e.currentTarget.value);
  // console.dir(e.currentTarget.email);
  // console.dir(e.currentTarget.message);
}
