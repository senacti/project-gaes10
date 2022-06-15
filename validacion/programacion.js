
var Fecha = document.getElementById("Fecha");
var hora = document.getElementById("hora");
var Error = document.getElementById("Error");
Error.style.color = "red";


function EnviarFormulario() {
  console.log("Enviado formulario.....");
  var mensajesError = [];
  if (Fecha.value === null || Fecha.value === "") {
    mensajesError.push("Ingrese la fecha");
  }

  if (hora.value === null || hora.value === "") {
    mensajesError.push("Ingrese la hora ");
  }

  Error.innerHTML = mensajesError.join(",");

  return false;

 } 






 /*const Fecha=document.getElementById("Fecha")
 const hora=document.getElementById("hora")
 const lugar=document.getElementById("lugar")
 const form=document.getElementById("form")
 const parrafo=document.getElementById("warnings")

form.addEventListener("submit", e => {
 e.preventDefault()
 let warnings=""
 if (Fecha.value=== null || Fecha.value === ""){
     warnings += 'No ha ingresado la fecha'
 }


})*/
 