var attempt = 3;

function validacion() {
  var usuario = document.getElementById("usuario").value;
  var password = document.getElementById("password").value;
  var rol = document.getElementById("rol").value;

  if (username == "") alert("Por favor, ingresa un nombre");

  if (password == "") alert("Por favor, ingresa un email");

  if (rol == "") alert("Por favor, ingresa un rol");

  if (usuario == "sebastian" && password == "123" && rol == "Coordinador") {
    alert("INGRESO EXITOSO");
    window.location = "admin.html";
    return false;
  } else {
    attempt--;
    alert("Lo siento le quedan " + attempt + " intentos;");

    if (attempt == 0) {
      document.getElementById("usuario").desabled = true;
      document.getElementById("password").desabled = true;
      document.getElementById("rol").desabled = true;
      document.getElementById("buton").desabled = true;
      return false;
    }
  }
}
