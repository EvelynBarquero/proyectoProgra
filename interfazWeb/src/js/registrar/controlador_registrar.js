"use strict";

//Leer los inputs 
const inputPrimerNombre=document.querySelector("#txtPrimerNombre");
const inputSegundoNombre=document.querySelector("#txtSegundoNombre");
const inputCedula=document.querySelector('#txtCedula');
const inputSexo=document.querySelector("#txtSexo");
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
    cedula=inputCedula.value;
    sexo=inputSexo.value;
    fecha= new Date (inputFecha.value);
    telefono=inputTelefono.value;
    password=inputPassword;
    confirmacion=inputConfirmarPassword.value;
    edad=0;

    // edad=calcularEdad(fecha); //Calcula la edad apartir de la fecha

    let bUsuario=0;
    //bUsuario=validarUsuario()
    let test=inputPrimerNombre.value;
    validarInputs();

};

function validarInputs(){
    let bError=false;
    let regexSoloLetras = /^[a-zA-Z]+$/;
    let regexSoloDigitos = /^[0-9]{1,3}$/;

    //Valida el Nombre
    if(primerNombre == "" || regexSoloLetras.test(primerNombre)==false){
        bError = true;
        inputPrimerNombre.classList.add("input-error");
    }else{
        console.log("Nombre Success");
    }

    //Valida el segundo Nombre
    if(regexSoloLetras.test(segundoNombre)==false){
        bError = true;
        inputPrimerNombre.classList.add("input-error");
    }else{
        console.log("Segundo nombre Success");
    }

    //valida el Primer Apellido
    if(primerApellido == "" || regexSoloLetras.test(primerApellido)==false){
        bError = true;
        inputPrimerNombre.classList.add("input-error");
    }else{
        console.log("Primer apellido Success");
    }

    //valida el Segundo Apellido
    if(segundoApellido == "" || regexSoloLetras.test(segundoApellido)==false){
        bError = true;
        inputPrimerNombre.classList.add("input-error");
    }else{
        console.log("Segundo apellido Success");
    }

    //validar cedula
    
};

