const formulario = document.getElementById('form');
const nombre = document.querySelectorAll('nombre');
const apellido = document.querySelectorAll('nombre');
const usuario = document.querySelectorAll('nombre');
const contraseña = document.querySelectorAll('nombre');
const confirmar = document.querySelectorAll('nombre');
const telefono = document.querySelectorAll('nombre');
const email = document.querySelectorAll('nombre');
const genero = document.querySelectorAll('nombre');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


