function Ingreso{
    const nombres = document.getElementById("nombres");
    const apellidos = document.getElementById("apellidos");
    const email = document.getElementById("email");
    const celular = document.getElementById("celular");
    const cedula = document.getElementById("cedula");
    const fecha = document.getElementById("fecha");
    const servicio = document.getElementById("servicios");

    if (nombres ! = "" && apellidos ! = ""  && email ! = ""  && celular ! = "" && fecha ! = "" && servicio ! = "" ){

        window.alert("Formulario enviado");
    }
}