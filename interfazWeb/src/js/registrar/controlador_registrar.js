"use strict";

//Leer los inputs 
const inputPrimerNombre=document.querySelector("#txtPrimerNombre");
const inputSegundoNombre=document.querySelector("#txtSegundoNombre");
const inputCedula=document.querySelector('#txtCedula');
const inputSexo=document.querySelector("#txtSexo");
const inputFoto=document.querySelector("#imgFoto");
const inputFecha=document.querySelector("#txtFecha");
const inputTelefono=document.querySelector("#txtTelefono");
let inputPassword=document.querySelector("#txtPassword");
const inputConfirmarPassword=document.querySelector("#txtConfirmarPassword");
const inputPrimerApellido=document.querySelector("#txtPrimerApellido");
const inputSegundoApellido=document.querySelector("#txtSegundoApellido");

//Boton Crear Cuenta
const botonCrearCuenta=document.querySelector("#btnCrearCuenta");
botonCrearCuenta.addEventListener("click", crearCuenta);

//Declaracion de las variables para su local
let primerNombre="";
let segundoNombre="";
let primerApellido="";
let segundoApellido="";
let cedula="";
let sexo="";
let foto=inputFoto.src;
let fecha= new Date (inputFecha.value);
let telefono="";
let password="";
let confirmacion="";
let edad=0;


//Funcion que maneja las funciones pertinenetes a agregar a un nuevo cliente
function crearCuenta(){

    primerNombre=inputPrimerNombre.value;
    segundoNombre=inputSegundoNombre.value;
    primerApellido=inputPrimerApellido.value;
    segundoApellido=inputSegundoApellido.value;
    cedula=Number(inputCedula.value);
    sexo=inputSexo.value;
    fecha= inputFecha.value;
    telefono=inputTelefono.value;
    password=inputPassword.value;
    confirmacion=inputConfirmarPassword.value;
    edad=calcularEdad(fecha);a

    // let bUsuario=false;
    let inputsInvalidos=validarInputs();
    //bUsuario=validarUsuario()
    
    if(inputsInvalidos==true){
        window.alert("Error message to be added")
    }
    else{
        let nuevoUsuario=[];
        nuevoUsuario.push(cedula,password,primerNombre,segundoNombre,primerApellido,segundoApellido,fecha,edad,sexo,telefono,foto,"user");
        console.log(nuevoUsuario);
        registrarUsuario(nuevoUsuario);
        crearMenuUsuario(cedula);
    }
<<<<<<< HEAD
    
=======

>>>>>>> d4a84d9660ba207a2b9029bcb37180391081f979
};

function validarInputs(){
    let bError=false;
    let regexSoloLetras = /^[a-zA-Z]+$/;
    let regexSoloDigitos = /^[0-9]+$/;

    //Valida el Nombre
    if(primerNombre == "" || regexSoloLetras.test(primerNombre)==false){
        bError = true;
        inputPrimerNombre.classList.add("input-error");
    }else{
        inputPrimerNombre.classList.remove("input-error");
    }

    //Valida el segundo Nombre
<<<<<<< HEAD
    if(segundoNombre!="" & regexSoloLetras.test(segundoNombre)==false){
        bError = true;
        inputSegundoNombre.classList.add("input-error");
    }else{
        inputSegundoNombre.classList.remove("input-error");
    }
=======
    // if(regexSoloLetras.test(segundoNombre)==false){
    //     bError = true;
    //     inputSegundoNombre.classList.add("input-error");
    // }else{
    //     inputSegundoNombre.classList.remove("input-error");
    // }
>>>>>>> d4a84d9660ba207a2b9029bcb37180391081f979

    //valida el Primer Apellido
    if(primerApellido == "" || regexSoloLetras.test(primerApellido)==false){
        bError = true;
        inputPrimerApellido.classList.add("input-error");
    }else{
        inputPrimerApellido.classList.remove("input-error");
    }

    //valida el Segundo Apellido
    if(segundoApellido == "" || regexSoloLetras.test(segundoApellido)==false){
        bError = true;
        inputSegundoApellido.classList.add("input-error");
    }else{
        inputSegundoApellido.classList.remove("input-error");
    }
    
    //valida la cedula 
    if(cedula=="" || regexSoloDigitos.test(cedula)==false){
        bError = true;
        inputCedula.classList.add("input-error");
    }else{
        inputCedula.classList.remove("input-error");
    }

    //valida el sexo 
    if(sexo=="0"){
        bError = true;
        inputSexo.classList.add("input-error");
    }else{
        inputSexo.classList.remove("input-error");
    }

    //valida la fecha - To be fix
    if(fecha==""){
        bError = true;
        inputFecha.classList.add("input-error");
    }else{
        inputFecha.classList.remove("input-error");
    }

    //valida el numero de telefono
    if(telefono== "" || regexSoloLetras.test(telefono)==true){
        bError = true;
        inputTelefono.classList.add("input-error");
    }else{
        inputTelefono.classList.remove("input-error");
    }

    //valida el contrasenna
    if(password == ""){
        bError = true;
        inputPassword.classList.add("input-error");
    }else{
        inputPassword.classList.remove("input-error");
    }

    //valida la confirmacion de contrasenna
    if(confirmacion!=password){
        bError = true;
        inputConfirmarPassword.classList.add("input-error");
    }else{
        inputConfirmarPassword.classList.remove("input-error");
    }
    return bError;
};

