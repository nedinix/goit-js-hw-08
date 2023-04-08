import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const KEY_DATA_STORAGE = 'feedback-form-state';
const parsedSettings = JSON.parse(localStorage.getItem(KEY_DATA_STORAGE));

let formData = parsedSettings ?? {};

refs.form.addEventListener('input', throttle(onInputForm, 500));
refs.form.addEventListener('submit', onFormSubmit);

getSavedSettings();

function getSavedSettings() {
  const { email, message } = refs.form.elements;
  email.value = formData.email ?? '';
  message.value = formData.message ?? '';
}

function onInputForm(e) {
  const currentEl = e.target;
  formData[currentEl.name] = currentEl.value;
  localStorage.setItem(KEY_DATA_STORAGE, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log('data:', formData);
  e.currentTarget.reset();
  localStorage.removeItem(KEY_DATA_STORAGE);
  formData = {};
}
