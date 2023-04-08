import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const KEY_DATA_STORAGE = 'feedback-form-state';

const formData = {
  // email: '',
  // message: '',
};

refs.form.addEventListener('input', throttle(onInputForm, 500));
refs.form.addEventListener('submit', onFormSubmit);

const parsedSettings = JSON.parse(localStorage.getItem(KEY_DATA_STORAGE));

writeSavedValue(parsedSettings.email, refs.form.email);
writeSavedValue(parsedSettings.message, refs.form.message);

function writeSavedValue(savedValue, element) {
  if (savedValue) {
    element.value = savedValue;
  }
}

function onInputForm(e) {
  const currentItem = e.target;
  console.log(currentItem.elements);

  if (currentItem === refs.form.email) {
    formData.email = currentItem.value.trim() ?? '';
  }
  if (currentItem === refs.form.message) {
    formData.message = currentItem.value ?? '';
    return localStorage.setItem(KEY_DATA_STORAGE, JSON.stringify(formData));
  }
  return localStorage.setItem(KEY_DATA_STORAGE, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  if (!refs.form.email.value) {
    return alert('Введіть email');
  }
  if (!refs.form.message.value) {
    return alert('Заповніть поле "Message"');
  }

  console.log('data:', formData);

  e.currentTarget.reset();
  localStorage.removeItem(KEY_DATA_STORAGE);
}
