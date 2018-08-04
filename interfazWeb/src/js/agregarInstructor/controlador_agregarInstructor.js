'use strict';

// const inputImagen = document.querySelector('#btnSeleccionarImagen');
const imagenFoto = document.querySelector('#imgFoto');
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
const botonActualizar = document.querySelector('#btnActualizar');

botonActualizar.hidden = true;

function obtenerInstructorPorCedula (){
    botonRegistrar.hidden = true;
    botonActualizar.hidden = false;

    let sCedula = this.dataset.cedula;
    let instructor = buscarInstructorPorCedula(sCedula);

    inputNombre.value = instructor[0];
    inputSegundoNombre.value = instructor[1];
    inputPrimerApellido.value = instructor[2];
    inputSegundoApellido.value = instructor[3];
    inputCedula.value = instructor[4];
    inputCedula.disabled = true;

    inputFechaNacimiento.value = instructor[5];
    inputEdad.value = instructor[6];
    inputSexo.option = instructor[7];
    inputTelefono.value = instructor[8];
    inputUsuario.value = instructor[9];
    inputContrasenna.value = instructor[10];

    if(instructor[11] == ''){
        imagenFoto.src = 'img/user_placeholder.png';
    }else{
        imagenFoto.src = instructor[11];
    }

};

const mostrarTablaInstructores = () => {
    let mListaInstructores = obtenerListaInstructores();
    let tbody = document.querySelector('#tblInstructores tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < mListaInstructores.length; i++) {
        let fila = tbody.insertRow();

        let celdaFoto = fila.insertCell();
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
        let celdaConfiguracion = fila.insertCell();

       

        // celdaFoto.innerHTML = mListaInstructores[i][0];
        celdaNombre.innerHTML = mListaInstructores[i][0];
        celdaSegundoNombre.innerHTML = mListaInstructores[i][1];
        celdaPrimerApellido.innerHTML = mListaInstructores[i][2];
        celdaSegundoApellido.innerHTML = mListaInstructores[i][3];
        celdaCedula.innerHTML = mListaInstructores[i][4];
        celdaFechaNacimiento.innerHTML = mListaInstructores[i][5];
        celdaEdad.innerHTML = mListaInstructores[i][6];
        celdaSexo.innerHTML = mListaInstructores[i][7];
        celdaTelefono.innerHTML = mListaInstructores[i][8];
        celdaUsuario.innerHTML = mListaInstructores[i][9];
        celdaContrasenna.innerHTML = mListaInstructores[i][10];

       
        let imagen = document.createElement('img');
        imagen.classList.add('imagen_tabla');

        let imagenUrl = mListaInstructores[i][11];

        if (imagenUrl == '') {
            imagenUrl = '../img/ejercicios/user_placeholder.png';
        };

        imagen.src = imagenUrl;

        celdaFoto.appendChild(imagen);

        let botonIconoEditar = document.createElement('a');
        botonIconoEditar.classList.add('fa');
        botonIconoEditar.classList.add('fa-edit');
        botonIconoEditar.dataset.cedula = mListaInstructores[i][0];

        botonIconoEditar.addEventListener('click' , obtenerInstructorPorCedula);
        botonIconoEditar .addEventListener('click' , show);

        celdaConfiguracion.appendChild(botonIconoEditar);
    };
};


const limpiarFormulario = () => {
    imagenFoto.src = '../img/ejercicios/user_placeholder.png';
    inputNombre.value = '';
    inputSegundoNombre.value = '';
    inputPrimerApellido.value = '';
    inputSegundoApellido.value = '';
    inputCedula.value = '';
    inputEdad.value = 0;
    inputFechaNacimiento.value = '';
    inputSexo.option = '';
    inputTelefono.value = '';
    inputUsuario.value = '';
    inputContrasenna.value = '';
};



const obtenerDatosRegistro = () => {
    let aNuevoInstructor = [];

    let sImagenUrl = imagenFoto.src;
    let sNombre = inputNombre.value;
    let sSegundoNombre = inputSegundoNombre.value;
    let sPrimerApellido = inputPrimerApellido.value;
    let sSegundoApellido = inputSegundoApellido.value;
    let sCedula = inputCedula.value;
    let dFechaNacimiento = inputFechaNacimiento.value;
    let nEdad = inputEdad.value;
    let sSexo = inputSexo.value;
    let nTelefono = inputTelefono.value
    let sUsuario = inputUsuario.value
    let sContrasenna = inputContrasenna.value

    aNuevoInstructor.push(sNombre,sSegundoNombre, sPrimerApellido, sSegundoApellido, sCedula, dFechaNacimiento, nEdad, sSexo, nTelefono, sUsuario, sContrasenna, sImagenUrl);
    registrarInstructor(aNuevoInstructor);
    mostrarTablaInstructores();
    limpiarFormulario();
    
};


const obtenerDatosActualizar = () =>{
    let aUsuarioModificado = [];

    let sImagenUrl = imagenFoto.src;
    let sNombre = inputNombre.value;
    let sSegundoNombre = inputSegundoNombre.value;
    let sPrimerApellido = inputPrimerApellido.value;
    let sSegundoApellido = inputSegundoApellido.value;
    let sCedula = inputCedula.value;
    let dFechaNacimiento = inputFechaNacimiento.value;
    let nEdad = Number(inputEdad.value);
    let sSexo = inputSexo.value;
    let nTelefono = inputTelefono.value
    let sUsuario = inputUsuario.value
    let sContrasenna = inputContrasenna.value


    aUsuarioModificado.push(sNombre,sSegundoNombre, sPrimerApellido, sSegundoApellido, sCedula, dFechaNacimiento, nEdad, sSexo, nTelefono, sUsuario, sContrasenna, sImagenUrl );
    
    modificarUsuario(aUsuarioModificado);
    mostrarTablaInstructores();
    limpiarFormulario();
    botonActualizar.hidden = true;
    botonRegistrar.hidden = false;
    inputCedula.disabled = false;

};


mostrarTablaInstructores();
botonRegistrar.addEventListener('click', obtenerDatosRegistro);
botonActualizar.addEventListener('click', obtenerDatosActualizar);

botonRegistrar .addEventListener('click' , hide);
botonActualizar .addEventListener('click' , hide);




// --------------------------------------------------

function show() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function hide() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}




