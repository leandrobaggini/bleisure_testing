const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Verificar usuario y contraseña
  if (username.value === 'admin' && password.value === 'admin') {
    alert('Inicio de sesión exitoso');
  } else {
    alert('Usuario o contraseña incorrectos');
  }
});



