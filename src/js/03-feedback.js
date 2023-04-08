import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const formData = {};

refs.form.addEventListener('input', throttle(onInputValue, 500));
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

  if (currentItem === refs.form.email) {
    formData.email = currentItem.value || '';
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
  if (currentItem === refs.form.message) {
    formData.message = currentItem.value || '';
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  formData.email
    ? console.log('email:', formData ?? '')
    : console.log('email:', parsedSettings.email);
  formData.message
    ? console.log('message:', formData ?? '')
    : console.log('message:', parsedSettings.message);
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
