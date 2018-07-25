
/*inputs*/
let inputCedula = document.querySelector("#txtCedula");
let inputPassword = document.querySelector("#txtPassword") ;

const botonRegistrar = document.querySelector("#btnRegistrarme");
const botonIniciarSesion = document.querySelector("#btnIniciarSesion");
const botonOlvidoContrasenna = document.querySelector("#btnOlvidoContrasenna");

/* Botones: Iniciar Sesion, Olvido Contrasenna y Registrarme */
botonIniciarSesion.addEventListener('click', iniciarSesion);
botonRegistrar.addEventListener('click', registrar);
/*botonOlvidoContrasenna.addEventListener('click', recuperarContrasenna);*/

function iniciarSesion(){
    let sCedula=inputCedula.value;
    let sPassword=inputPassword.value;
    let bUsuario=false;

    /*Verifica si el usuario esta en la matriz*/
    bUsuario=validarUsuario(sCedula,sPassword);

    if(bUsuario==true){
        window.location=("home.html");
        console.log("success");
    }else{
        console.log("Error"); /* Aqui hay que poner un error message */
    }
}

function registrar(){
    window.location=("register.html");
}

