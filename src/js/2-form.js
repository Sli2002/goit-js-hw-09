const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    formData = JSON.parse(savedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  } catch (e) {
    console.error('Error parsing saved form data:', e);
  }
}

form.addEventListener('input', evt => {
  const { name, value } = evt.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});

const submitBtn = form.querySelector("button[type='submit']");
submitBtn.classList.add('submit-btn');

const emailInput = document.querySelector('input[name="email"]');
emailInput.classList.add('email-class');

const messageTextarea = document.querySelector('textarea[name="message"]');
messageTextarea.classList.add('message-class');
