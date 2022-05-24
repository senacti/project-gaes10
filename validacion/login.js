function validacion(){

    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var rol = document.getElementById("rol").value;

    if (usuario == ""){
        alert ("porfavor ingresar su nombre")
    }
        if (password == ""){
            alert("porfavor infgrese su contraseña")
        }
        if (rol == ""){
            alert ("porfavor ingrsar un rol")
        }


}