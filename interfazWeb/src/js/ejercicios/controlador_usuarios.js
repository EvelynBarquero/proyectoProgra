'use strict';

// const inputCedula = document.querySelector('#txtCedula');
const imagenFoto = document.querySelector('#imgFoto');
const inputNombre =  document.querySelector('#txtNombre');
const inputRepeticiones = document.querySelector('#txtRepeticiones');
const inputCategoria = document.querySelector('#sltCategoria');


const botonRegistrar = document.querySelector('#btnRegistrar');

const mostrarTablaUsuarios = () =>{
    let mListaUsuarios = obtenerListaUsuarios();
    let tbody = document.querySelector('#tblUsuarios tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < mListaUsuarios.length; i++){
        let fila = tbody.insertRow();

        let celdaFoto = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let celdaCategoria = fila.insertCell();
        let celdaRepeticiones = fila.insertCell();

        celdaNombre.innerHTML = mListaUsuarios[i][1];
        celdaCategoria.innerHTML = mListaUsuarios[i][2];
        celdaRepeticiones.innerHTML = mListaUsuarios[i][3];

        let imagen = document.createElement('img');
        imagen.classList.add('imagen_tabla');

        let imagenUrl = mListaUsuarios[i][0];
        
        if(imagenUrl == ''){
            imagenUrl = '../img/ejercicios/user_placeholder.png';
        };

        imagen.src = imagenUrl;

        celdaFoto.appendChild(imagen);
    };
};


const limpiarFormulario = () =>{
    inputNombre.value = '';
    inputCategoria.value = '';
    inputRepeticiones.value = '';
    imagenFoto.src = '../img/ejercicios/user_placeholder.png';
};


const obtenerDatosRegistro = () =>{
    let aNuevoUsuario = [];

    // obtener valores;
    let sNombre = inputNombre.value;
    let sCategoria = inputCategoria.value;
    let sRepeticiones = inputRepeticiones.value;
    let sImagenUrl = imagenFoto.src;

    aNuevoUsuario.push(sImagenUrl, sNombre, sCategoria, sRepeticiones);
    registrarUsuario(aNuevoUsuario);
    mostrarTablaUsuarios();
    limpiarFormulario();

};

function validar(){
    let bError = false;
    let regexSoloLetras = /^[a-zA-Z]+$/;
    let regexSoloNumeros = /^[0-9]{1,3}$/; //el uno y 3 son el mínimo y máximo de caracteres
    
    //Validación del campo Nombre1
    if(sNombre == '' || regexSoloLetras.test(sNombre1)==false ){
        bError = true;
        inputNombre1.classList.add('input-error');
    }
    else{ //dejar el else vacío porque en caso de que el apellido esté incorrecto, pone todo como error
        inputNombre1.classList.remove('input-error');
    }
}

mostrarTablaUsuarios();
botonRegistrar.addEventListener('click', obtenerDatosRegistro);





