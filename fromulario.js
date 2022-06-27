function validate() {
  const nombres = document.getElementById("nombres").value;
  const apellidos = document.getElementById("apellidos").value;
  const celular = document.getElementById("celular").value;
  const cedula = document.getElementById("cedula").value;
  const fecha = document.getElementById("fecha").value;
  const servicio = document.getElementById("ciudad").value;



  /*if (nombres == "" && apellidos == "" && celular == "" && cedula == "" && fecha == "" && servicio == "--Servicios Basicos--"){
    alert("Ingrese todos los datos")

  }else{
    alert("formulario eviado")
  }*/

  if (nombres!== ""){
    if(apellidos!== ""){
      if (celular!== ""){
        if(cedula!== "" ){
          if(fecha!== ""){
            if(servicio!== "--Servicios Basicos--"){
              alert("Enviado")
            }else{
              alert("ingrese un servicio")
            }
          }else("ingrese fecha")
        }else{
          alert("ingrese cedula")
        }
      }else{
        alert("ingrese celular")
      }
    }else{
      alert("ingrese un aplli")
    }
  }else{
    alert("ingrese un nombre")
  }

}
