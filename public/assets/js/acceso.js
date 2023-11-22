const container = document.querySelector('#container');
const registerBtn = document.querySelector('#register');
const loginBtn = document.querySelector('#login');
const registerForm = document.querySelector('.register-form');
const loginForm = document.querySelector('.login-form');

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
