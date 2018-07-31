'use strict';

// const inputCedula = document.querySelector('#txtCedula');
const imagenFoto = document.querySelector('#imgFoto');
const inputNombre = document.querySelector('#txtNombre');
const inputNombreOpcional = document.querySelector('#txtNombreOpcional');
const inputCategoria = document.querySelector('#sltCategoria');


const botonRegistrar = document.querySelector('#btnRegistrar');

const mostrarTablaUsuarios = () => {
    let mListaUsuarios = obtenerListaUsuarios();
    let tbody = document.querySelector('#tblUsuarios tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < mListaUsuarios.length; i++) {
        let fila = tbody.insertRow();

        let celdaFoto = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let celdaCategoria = fila.insertCell();
        let celdaNombreOpcional = fila.insertCell();

        celdaNombre.innerHTML = mListaUsuarios[i][1];
        celdaCategoria.innerHTML = mListaUsuarios[i][2];
        celdaNombreOpcional.innerHTML = mListaUsuarios[i][3];

        let imagen = document.createElement('img');
        imagen.classList.add('imagen_tabla');

        let imagenUrl = mListaUsuarios[i][0];

        if (imagenUrl == '') {
            imagenUrl = '../img/ejercicios/user_placeholder.png';
        };

        imagen.src = imagenUrl;

        celdaFoto.appendChild(imagen);
    };
};


const limpiarFormulario = () => {
    inputNombre.value = '';
    inputCategoria.value = '';
    inputNombreOpcional.value = '';
    imagenFoto.src = '../img/ejercicios/user_placeholder.png';
};


let sNombre = inputNombre.value;
let sCategoria = inputCategoria.value;

const obtenerDatosRegistro = () => {
    let aNuevoUsuario = [];

    // let sCedula = inputCedula.value;
    // let sNombre = inputNombre.value;
    // let sCategoria = inputCategoria.value;
    let sNombreOpcional = inputNombreOpcional.value;
    let sImagenUrl = imagenFoto.src;

    // Validación de error
    let bError = false;
    bError = validar();
    if (bError == true) {
        swal({
            type: 'warning',
            title: 'Campos vacios', //Ver documentación https://cdn.jsdelivr.net/npm/sweetalert2
            text: 'No se pudo realizar el registro',
        })
        // console.log('No se pudo registrar el usuario');
    } else {
        swal({
            type: 'success',
            title: 'Perfecto', //Ver documentación https://cdn.jsdelivr.net/npm/sweetalert2
            text: 'Registro exitoso',
        })
    }

    aNuevoUsuario.push(sImagenUrl, sNombre, sCategoria, sNombreOpcional);
    registrarUsuario(aNuevoUsuario);
    mostrarTablaUsuarios();
    limpiarFormulario();

};

// botonRegistrar.addEventListener('click', obtenerDatosRegistro);

function validar() {
    let bError = false;
    let regexSoloLetras = /^[a-zA-Z]+$/;
    // let regexSoloNumeros = /^[0-9]{1,3}$/; //el uno y 3 son el mínimo y máximo de caracteres

    //Validación del campo Nombre1
    if (sNombre == '' || regexSoloLetras.test(sNombre) == false) {
        bError = true;
        inputNombre.classList.add('input-error');
    } else { //dejar el else vacío porque en caso de que el apellido esté incorrecto, pone todo como error
        // inputNombre.classList.remove('input-error');
    }

    return bError;
}

mostrarTablaUsuarios();
botonRegistrar.addEventListener('click', obtenerDatosRegistro);