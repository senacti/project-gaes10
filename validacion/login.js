var attempt = 3; 
function validacion(){

    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var rol = document.getElementById("rol").value;

    if (usuario ==""){
        alert ("Ingrese su nombre")
    }
        if (password ==""){
            alert("Ingrese su contraseña")
        }
        if(rol==""){
            alert("ingrese un rol")
        }

    if(usuario =="sebastian" && password == "123" && rol=="coordinador"){
        alert("bienbenido");
        window.location = "padmin.html" ;
        return false;
    }
    else{
        attempt--;
        alert("Lo siento le quedan "+attempt+" intentos;");
    
        if(attempt==0){
            document.getElementById("usuario").desabled = true;
            document.getElementById("password").desabled = true;
            document.getElementById("rol").desabled = true;
            document.getElementById("buton").desabled = true;
            return false;
        }
    }
}