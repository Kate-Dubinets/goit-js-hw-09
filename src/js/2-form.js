
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: ''
};

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  form.email.value = formData.email || '';
  form.message.value = formData.message || '';
}

form.addEventListener('input', e => {
  if (e.target.name in formData) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const { email, message } = formData;

  if (!email.trim() || !message.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});