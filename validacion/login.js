
function validate() {
  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;
  const rol = document.getElementById("rol").value;

  if (usuario == "") alert("Por favor, ingresa un nombre");

  if (password == "") alert("Por favor, ingresar una contraseña");

  if (rol == "--Selecione Rol--") alert("Por favor, ingresa un rol");

  if (usuario == "sebastian" && password == "123" && rol == "coordinador") {
    alert("INGRESO EXITOSO");
    window.location = "admin.html";
    return false;
  } else {
    alert("Datos incorrectos")
  }
}
