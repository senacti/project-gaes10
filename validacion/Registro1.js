

const formulario = document.getElementById("form");
const nombre = document.querySelectorAll("nombre");
const apellido = document.querySelectorAll("apellido");
const usuario = document.querySelectorAll("usuario");
const contraseña = document.querySelectorAll("contraseña");
const confirmar = document.querySelectorAll("confirmar");
const telefono = document.querySelectorAll("telefono");
const email = document.querySelectorAll("email");
const genero = document.querySelectorAll("genero");
const codigo = document.querySelectorAll("codigo");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
if (nombre.values.length <6){
  alert("como es como seria")
}


});

const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  contraseña: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};
