function validate() {
  const nombres = document.getElementById("nombres").value;
  const apellidos = document.getElementById("apellidos").value;
  const celular = document.getElementById("celular").value;
  const cedula = document.getElementById("cedula").value;
  const fecha = document.getElementById("fecha").value;
  const servicio = document.getElementById("ciudad").value;

  if (nombres!== ""){
    if(apellidos!== ""){
      if (celular!== ""){
        if(cedula!== "" ){
          if(fecha!== ""){
            if(servicio!== "--Servicios Basicos--"){
              alert("Formulario Enviado")
            }else{
              alert("ingrese un servicio")
            }
          }else("ingrese fecha")
        }else{
          alert("ingrese su cedula")
        }
      }else{
        alert("ingrese un celular")
      }
    }else{
      alert("ingrese sus apellidos")
    }
  }else{
    alert("ingrese un nombre")
  }

}
