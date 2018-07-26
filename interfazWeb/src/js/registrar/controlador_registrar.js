"use strict";

const inputPrimerNombre=document.querySelector("#txtPrimerNombre");
const inputSegundoNombre=document.querySelector("#txtSegundoNombre");
const inputCedula=document.querySelector('#txtCedula');
const inputSexo=document.querySelector("#txtSexo");
const inputFecha=document.querySelector("#txtFecha");
const inputTelefono=document.querySelector("#txtTelefono");
const inputPassword=document.querySelector("#txtPassword");
const inputConfirmarPassword=document.querySelector("#txtConfirmarPassword");

const botonCrearCuenta=document.querySelector("#btnCrearCuenta");

botonCrearCuenta.addEventListener("click", crearCuenta);

let primerNombre=inputPrimerNombre.value;
let segundoNombre=inputSegundoNombre;
let cedula=inputCedula;
let sexo=inputSexo;
let fecha= new Date (inputFecha);
let telefono=inputTelefono;
let password=inputPassword;
let confirmacion=inputConfirmarPassword;
let edad=0;

function crearCuenta(){

    // edad=calcularEdad(fecha); //Calcula la edad apartir de la fecha

    let bUsuario=0;
    //bUsuario=validarUsuario()
    validarInputs();
    let test=inputPrimerNombre.value;

};

function validarInputs(){
    let bError=false;
    let regexSoloLetras = /^[a-zA-Z]+$/;
    let regexSoloDigitos = /^[0-9]{1,3}$/;
    primerNombre;

    if(primerNombre == "" || regexSoloLetras.test(primerNombre)==false){
        bError = true;
    }else{
        console.log("error");
    }
    console.log(bError);
};

