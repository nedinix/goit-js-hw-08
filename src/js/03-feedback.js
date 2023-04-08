import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const formData = {};

refs.form.addEventListener('input', onInputValue);
refs.form.addEventListener('submit', onFormSubmit);

const formSettings = localStorage.getItem('feedback-form-state');
const parsedSettings = JSON.parse(formSettings);

writeSavedValue(parsedSettings.email, refs.form.email);
writeSavedValue(parsedSettings.message, refs.form.message);

function writeSavedValue(savedValue, element) {
  if (savedValue) {
    element.value = savedValue;
  }
}

function onInputValue(e) {
  const currentItem = e.target;

  if (currentItem === refs.form.email && currentItem.value) {
    formData.email = currentItem.value;
    return localStorage.setItem(
      'feedback-form-state',
      JSON.stringify(formData)
    );
  }
  if (currentItem === refs.form.message && currentItem.value) {
    formData.message = currentItem.value;
    return localStorage.setItem(
      'feedback-form-state',
      JSON.stringify(formData)
    );
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  formData.email
    ? console.log('email:', formData.email ?? '')
    : console.log('email:', parsedSettings.email ?? '');
  formData.message
    ? console.log('message:', formData.message ?? '')
    : console.log('message:', parsedSettings.message ?? '');
}
