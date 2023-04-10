const btnEnviar = document.getElementById('btn-enviar');

function validarFormulario(){
    const nombreUsuario = document.getElementById('nombre');
    const direccionEmail = document.getElementById('email');
    const mensajeUsuario = document.getElementById('mensaje');

    if(nombre.value === ""){
        nombre.focus();
    }
    else if(email.value === ""){
        email.focus();
    }
     else if(mensaje.value === "")
    {
        mensaje.focus();
    }else{
        alert("Datos enviados")
    }

}
