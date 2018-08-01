'use strict';


const inputImagen = document.querySelector('#btnSeleccionarImagen');
const inputNombre = document.querySelector('#txtNombre');
const inputSegundoNombre = document.querySelector('#txtSegundoNombre');
const inputPrimerApellido = document.querySelector ('#txtPrimerApellido');
const inputSegundoApellido = document.querySelector ('#txtSegundoApellido');
const inputCedula = document.querySelector ('#txtCedula');
const inputFechaNacimiento = document.querySelector ('#txtFechaNacimiento');
const inputEdad = document.querySelector ('#txtEdad');
const inputSexo = document.querySelector ('#sltSexo');
const inputTelefono = document.querySelector ('#txtTelefono');
const inputUsuario = document.querySelector ('#txtUsuario');
const inputContrasenna = document.querySelector ('#txtContrasenna');

const botonRegistrar = document.querySelector('#btnRegistrar');

const mostrarTablaInstructores = () => {
    let mListaInstructores = obtenerListaInstructores();
    let tbody = document.querySelector('#tblInstructores tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < mListaInstructores.length; i++) {
        let fila = tbody.insertRow();

        // let celdaFoto = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let celdaSegundoNombre = fila.insertCell();
        let celdaPrimerApellido = fila.insertCell();
        let celdaSegundoApellido = fila.insertCell();
        let celdaCedula = fila.insertCell();
        let celdaFechaNacimiento = fila.insertCell();
        let celdaEdad = fila.insertCell();
        let celdaSexo = fila.insertCell();
        let celdaTelefono = fila.insertCell();
        let celdaUsuario = fila.insertCell();
        let celdaContrasenna = fila.insertCell();

       

        // celdaFoto.innerHTML = mListaInstructores[i][0];
        celdaNombre.innerHTML = mListaInstructores[i][1];
        celdaSegundoNombre.innerHTML = mListaInstructores[i][2];
        celdaPrimerApellido.innerHTML = mListaInstructores[i][3];
        celdaSegundoApellido.innerHTML = mListaInstructores[i][4];
        celdaCedula.innerHTML = mListaInstructores[i][5];
        celdaFechaNacimiento.innerHTML = mListaInstructores[i][6];
        celdaEdad.innerHTML = mListaInstructores[i][7];
        celdaSexo.innerHTML = mListaInstructores[i][8];
        celdaTelefono.innerHTML = mListaInstructores[i][9];
        celdaUsuario.innerHTML = mListaInstructores[i][10];
        celdaContrasenna.innerHTML = mListaInstructores[i][11];

        let imagen = document.createElement('img');
        // imagen.classList.add('imagen_tabla');

        let imagenUrl = mListaInstructores[i][0];

        if (imagenUrl == '') {
            imagenUrl = '../img/ejercicios/user_placeholder.png';
        };

        imagen.src = imagenUrl;

        // celdaFoto.appendChild(imagen);
    };
};


const limpiarFormulario = () => {
    inputImagen.src = '../img/ejercicios/user_placeholder.png';
    inputNombre.value = '';
    inputSegundoNombre.value = '';
    inputPrimerApellido.value = '';
    inputSegundoApellido.value = '';
    inputCedula.value = '';
    inputFechaNacimiento.value = '';
    inputSexo.value = '';
    inputTelefono.value = '';
    inputUsuario.value = '';
    inputContrasenna.value = '';
};



const obtenerDatosRegistro = () => {
    let aNuevoInstructor = [];

    let iFoto = inputImagen.src;
    let sNombre = inputNombre.value;
    let sSegundoNombre = inputSegundoNombre.value;
    let sPrimerApellido = inputPrimerApellido.value;
    let sSegundoApellido = inputSegundoApellido.value;
    let sCedula = inputCedula.value;
    let dFechaNacimiento = inputFechaNacimiento.value;
    let sSexo = inputSexo.value;
    let nTelefono = inputTelefono.value
    let sUsuario = inputUsuario.value
    let sContrasenna = inputContrasenna.value

    aNuevoInstructor.push(iFoto, sNombre,sSegundoNombre, sPrimerApellido, sSegundoApellido, sCedula, dFechaNacimiento, sSexo, nTelefono, sUsuario, sContrasenna);
    registrarInstructor(aNuevoInstructor);
    mostrarTablaInstructores();
    limpiarFormulario();

};


mostrarTablaInstructores();
botonRegistrar.addEventListener('click', obtenerDatosRegistro);



function show() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


