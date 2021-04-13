const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const backbtn = document.querySelector(".back-btn")

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  backbtn.style.color = "#5995fd";
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  backbtn.style.color = "#fff";
});

const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  password2.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});