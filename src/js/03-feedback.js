import throttle from 'https://cdn.skypack.dev/lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';


const saveFormState = throttle(() => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}, 500); 

window.addEventListener('load', () => {
  const savedFormData = localStorage.getItem(localStorageKey);

  if (savedFormData) {
    const { email, message } = JSON.parse(savedFormData);
    form.elements.email.value = email;
    form.elements.message.value = message;
  }
});

form.addEventListener('input', () => {
  saveFormState();
});


form.addEventListener('submit', evt => {
  evt.preventDefault();

  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  console.log(formData);

  localStorage.removeItem(localStorageKey);
  form.reset();
});
