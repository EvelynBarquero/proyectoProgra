
/*inputs*/
let inputCedula = document.querySelector("#txtCedula");
let inputPassword = document.querySelector("#txtPassword");

const botonRegistrar = document.querySelector("#btnRegistrarme");
const botonIniciarSesion = document.querySelector("#btnIniciarSesion");
const botonOlvidoContrasenna = document.querySelector("#btnOlvidoContrasenna");

/* Botones: Iniciar Sesion, Olvido Contrasenna y Registrarme */
botonIniciarSesion.addEventListener('click', iniciarSesion);
botonRegistrar.addEventListener('click', registrar);
/*botonOlvidoContrasenna.addEventListener('click', recuperarContrasenna);*/

function iniciarSesion() {
    let sCedula = inputCedula.value;
    let sPassword = inputPassword.value;
    let bUsuario = false;

    /*Verifica si el usuario esta en la matriz*/
    bUsuario = validarUsuario(sCedula, sPassword);

    if (bUsuario != 0) {
        if (bUsuario == 1) {
            localStorage.setItem('cliente', JSON.stringify(sCedula));
            window.location = ("interfazRutinaCliente.html");
        }else{
            if(bUsuario==2){
                localStorage.setItem('cliente', JSON.stringify(sCedula));
                window.location = ("interfazRutinaCliente.html");
            }else{
                if(bUsuario==3){
                    localStorage.setItem('cliente', JSON.stringify(sCedula));
                    window.location = ("homeAdmin.html");
                }
            }
        }
    } else {
        console.log("Error"); /* Aqui hay que poner un error message */
        inputCedula.classList.add("input-error");
        swal({
            type: "error",
            title: "Informacion invalida",
            text: "Verifique su Cedula y Contrasena",
            confirmButtonText: "Entendido"

        })
    }
}

function registrar() {
    window.location = ("register.html");
}


