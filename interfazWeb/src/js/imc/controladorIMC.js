'use strict';

// const inputImagen = document.querySelector('#btnSeleccionarImagen');
const inputFecha = document.querySelector('#txtFecha');
const inputEstatura = document.querySelector('#txtEstatura');
const inputPeso  = document.querySelector('#txtPeso');
const outputMCI = document.querySelector ('#txtMCI');

const botonGuardar = document.querySelector('#btnGuardar');
const botonActualizar = document.querySelector('#btnActualizar');

// botonGuardar.addEventListener('click', calcularMCI);

botonActualizar.hidden = true;

// function obtenerInstructorPorCedula (){
//     botonRegistrar.hidden = true;
//     botonActualizar.hidden = false;

//     let sCedula = this.dataset.cedula;
//     let instructor = buscarInstructorPorCedula(sCedula);

//     inputNombre.value = instructor[0];
//     inputSegundoNombre.value = instructor[1];
//     inputPrimerApellido.value = instructor[2];
//     inputSegundoApellido.value = instructor[3];
//     inputCedula.value = instructor[4];
//     inputCedula.disabled = true;

//     inputFechaNacimiento.value = instructor[5];
//     inputEdad.value = instructor[6];
//     inputSexo.option = instructor[7];
//     inputTelefono.value = instructor[8];
//     inputUsuario.value = instructor[9];
//     inputContrasenna.value = instructor[10];

//     if(instructor[11] == ''){
//         imagenFoto.src = 'img/user_placeholder.png';
//     }else{
//         imagenFoto.src = instructor[11];
//     }

// };

const mostrarTablaMediciones = () => {
    let mListaMediciones = obtenerListaMediciones();
    let tbody = document.querySelector('#tblPerimetros tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < mListaMediciones.length; i++) {
        let fila = tbody.insertRow();

        let celdaFecha  = fila.insertCell();
        let celdaEstatura = fila.insertCell();
        let celdaPeso = fila.insertCell();
        let celdaIMC= fila.insertCell();

       
        // celdaFoto.innerHTML = mListaInstructores[i][0];
        celdaFecha.innerHTML = mListaMediciones[i][0];
        celdaEstatura.innerHTML = mListaMediciones[i][1];
        celdaPeso.innerHTML = mListaMediciones[i][2];
        celdaIMC.innerHTML = mListaMediciones[i][3];
       

       
        // let imagen = document.createElement('img');
        // imagen.classList.add('imagen_tabla');

        // let imagenUrl = mListaInstructores[i][11];

        // if (imagenUrl == '') {
        //     imagenUrl = '../img/ejercicios/user_placeholder.png';
        // };

        // imagen.src = imagenUrl;

        // celdaFoto.appendChild(imagen);

        // let botonIconoEditar = document.createElement('a');
        // botonIconoEditar.classList.add('fa');
        // botonIconoEditar.classList.add('fa-edit');
        // botonIconoEditar.dataset.cedula = mListaMediciones[i][0];

        // botonIconoEditar.addEventListener('click' , obtenerInstructorPorCedula);
        // botonIconoEditar .addEventListener('click' , show);

        // celdaConfiguracion.appendChild(botonIconoEditar);
    };
};



const limpiarFormulario = () => {
    inputFecha.value = 0;
    inputEstatura.value = 0;
    inputPeso.value = 0;
};


const obtenerDatosRegistro = () => {
    let aNuevaMedida = [];

    let dFecha = inputFecha.value;
    let nEstatura = inputEstatura.value;
    let nPeso = inputPeso.value;
    

    aNuevaMedida.push(dFecha , nEstatura, nPeso);
    registrarMedida(aNuevaMedida);
    mostrarTablaMediciones();
    limpiarFormulario();
    
};

// function mostrarMCI(){
//     let nMCI= calcularMCI (nEstatura, nPeso);    
//     outputMCI.value = "El MCI es" + nMCI;
// } 



// const obtenerDatosActualizar = () =>{
//     let aUsuarioModificado = [];

//     let sImagenUrl = imagenFoto.src;
//     let sNombre = inputNombre.value;
//     let sSegundoNombre = inputSegundoNombre.value;
//     let sPrimerApellido = inputPrimerApellido.value;
//     let sSegundoApellido = inputSegundoApellido.value;
//     let sCedula = inputCedula.value;
//     let dFechaNacimiento = inputFechaNacimiento.value;
//     let nEdad = Number(inputEdad.value);
//     let sSexo = inputSexo.value;
//     let nTelefono = inputTelefono.value
//     let sUsuario = inputUsuario.value
//     let sContrasenna = inputContrasenna.value


//     aUsuarioModificado.push(sNombre,sSegundoNombre, sPrimerApellido, sSegundoApellido, sCedula, dFechaNacimiento, nEdad, sSexo, nTelefono, sUsuario, sContrasenna, sImagenUrl );
    
//     modificarUsuario(aUsuarioModificado);
//     mostrarTablaInstructores();
//     limpiarFormulario();
//     botonActualizar.hidden = true;
//     botonRegistrar.hidden = false;
//     inputCedula.disabled = false;

// };


mostrarTablaMediciones();
botonGuardar.addEventListener('click', obtenerDatosRegistro);
// botonActualizar.addEventListener('click', obtenerDatosActualizar);

botonGuardar .addEventListener('click' , hide);
// botonActualizar .addEventListener('click' , hide);


// ------------------

function show() {
    var x = document.getElementById("tableEdit");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function hide() {
    var x = document.getElementById("tableEdit");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

