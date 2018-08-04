'use strict';

// const inputCedula = document.querySelector('#txtCedula');
const imagenFoto = document.querySelector('#imgFoto');
const inputNombre = document.querySelector('#txtNombre');
const inputNombreOpcional = document.querySelector('#txtNombreOpcional');
const inputCategoria = document.querySelector('#sltCategoria');


const botonRegistrar = document.querySelector('#btnRegistrar');
const botonActualizar = document.querySelector('#btnActualizar');

botonActualizar.hidden = true;

function obtenerEjercicioPorNombre (){
    botonRegistrar.hidden = true;
    botonActualizar.hidden = false;

    let sNombre = this.dataset.nombre;
    let ejercicio = buscarEjercicioPorNombre(sNombre);

    inputNombre.value = ejercicio[0];
    inputNombre.disabled = true;
    // inputNombre.value  = ejercicio[1];
    inputCategoria.value = ejercicio[1];
    inputNombreOpcional.value = ejercicio[2];

    


    if(ejercicio[3] == ''){
        imagenFoto.src = '../img/user_placeholder.png';
    }else{
        imagenFoto.src = ejercicio[3];
    }

};

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
        let celdaConfiguracion = fila.insertCell();

        celdaNombre.innerHTML = mListaUsuarios[i][0];
        celdaCategoria.innerHTML = mListaUsuarios[i][1];
        celdaNombreOpcional.innerHTML = mListaUsuarios[i][2];

        let imagen = document.createElement('img');
        imagen.classList.add('imagen_tabla');

        let imagenUrl = mListaUsuarios[i][3];

        if (imagenUrl == '') {
            imagenUrl = '../img/ejercicios/user_placeholder.png';
        };

        imagen.src = imagenUrl;

        celdaFoto.appendChild(imagen);


        let botonIconoEditar = document.createElement('a');
        botonIconoEditar.classList.add('fa');
        botonIconoEditar.classList.add('fa-edit');
        botonIconoEditar.dataset.nombre = mListaUsuarios[i][0];

        botonIconoEditar.addEventListener('click' , obtenerEjercicioPorNombre);
        botonIconoEditar .addEventListener('click' , show);

        celdaConfiguracion.appendChild(botonIconoEditar);
    };
};


const limpiarFormulario = () => {
    inputNombre.value = '';
    inputCategoria.value = '';
    inputNombreOpcional.value = '';
    imagenFoto.src = '../img/ejercicios/user_placeholder.png';
};




const obtenerDatosRegistro = () => {
    let aNuevoEjercicio = [];

    let sNombre = inputNombre.value;
    let sCategoria = inputCategoria.value;
    let sNombreOpcional = inputNombreOpcional.value;
    let sImagenUrl = imagenFoto.src;


    aNuevoEjercicio.push(sNombre, sCategoria, sNombreOpcional, sImagenUrl);
    registrarUsuario(aNuevoEjercicio);
    mostrarTablaUsuarios();
    limpiarFormulario();

};



const obtenerDatosActualizar = () =>{
    let aEjercicioModificado = [];

    let sImagenUrl = imagenFoto.src;
    let sNombre  = inputNombre.value;
    let sCategoria = inputCategoria.value;
    let sNombreOpcional = inputNombreOpcional.value;


    aEjercicioModificado.push(sNombre,sCategoria, sNombreOpcional, sImagenUrl);
    
    modificarEjercicio(aEjercicioModificado);
    mostrarTablaUsuarios();
    limpiarFormulario();
    botonActualizar.hidden = true;
    botonRegistrar.hidden = false;
    inputNombre.disabled = false;

};


mostrarTablaUsuarios();
botonRegistrar.addEventListener('click', obtenerDatosRegistro);
botonActualizar.addEventListener('click', obtenerDatosActualizar);


// --------------------------------------------
function show() {
    var x = document.getElementById("myForm");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function hide() {
    var x = document.getElementById("myForm");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
