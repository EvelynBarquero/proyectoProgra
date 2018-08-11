'use strict';

// const inputImagen = document.querySelector('#btnSeleccionarImagen');
const inputFecha = document.querySelector('#txtFecha');
const inputBicepDerecho = document.querySelector('#txtBicepDerecho');
const inputBicepIzquierdo = document.querySelector('#txtBicepIzquierdo');
const inputBicepContDerecho = document.querySelector('#txtBicepContDerecho');
const inputBicepContIzquierdo = document.querySelector('#txtBicepContIzquierdo');
const inputPantorrillaDerecha = document.querySelector('#txtPantorrillaDerecha');
const inputPantorrillaIzquierda = document.querySelector('#txtPantorrillaIzquierda');
const inputMusloDerecho = document.querySelector('#txtMusloDerecho');
const inputMusloIzquierdo = document.querySelector('#txtMusloIzquierdo');
const inputCintura = document.querySelector('#txtCintura');
const inputAbdomen = document.querySelector('#txtAbdomen');
const inputCadera = document.querySelector('#txtCadera');
const inputPecho = document.querySelector('#txtPecho');
const inputEspalda = document.querySelector('#txtEspalda');

const botonGuardar = document.querySelector('#btnGuardar');
const botonActualizarP = document.querySelector('#btnActualizar');

let sCedulaPerimetro = getCliente();

botonActualizarP.hidden = true;

const mostrarTablaMediciones = () => {
    let mListaMediciones = obtenerListaMediciones();
    let tbody = document.querySelector('#tblPerimetros tbody');
    tbody.innerHTML = '';
    for (let i = 0; i < mListaMediciones.length; i++) {

        if (mListaMediciones[i][14] == sCedulaPerimetro) {
            let fila = tbody.insertRow();

            let celdaFecha = fila.insertCell();
            let celdaBicepDerecho = fila.insertCell();
            let celdaBicepIzquierdo = fila.insertCell();
            let celdaBicepContDerecho = fila.insertCell();
            let celdaBicepContIzquierdo = fila.insertCell();
            let celdaPantorrillaDerecha = fila.insertCell();
            let celdaPantorrillaIzquierda = fila.insertCell();
            let celdaMusloDerecho = fila.insertCell();
            let celdaMusloIzquierdo = fila.insertCell();
            let celdaCintura = fila.insertCell();
            let celdaAbdomen = fila.insertCell();
            let celdaCadera = fila.insertCell();
            let celdaPecho = fila.insertCell();
            let celdaEspalda = fila.insertCell();
            celdaFecha.innerHTML = mListaMediciones[i][0];
            celdaBicepDerecho.innerHTML = mListaMediciones[i][1];
            celdaBicepIzquierdo.innerHTML = mListaMediciones[i][2];
            celdaBicepContDerecho.innerHTML = mListaMediciones[i][3];
            celdaBicepContIzquierdo.innerHTML = mListaMediciones[i][4];
            celdaPantorrillaDerecha.innerHTML = mListaMediciones[i][5];
            celdaPantorrillaIzquierda.innerHTML = mListaMediciones[i][6];
            celdaMusloDerecho.innerHTML = mListaMediciones[i][7];
            celdaMusloIzquierdo.innerHTML = mListaMediciones[i][8];
            celdaCintura.innerHTML = mListaMediciones[i][9];
            celdaAbdomen.innerHTML = mListaMediciones[i][10];
            celdaCadera.innerHTML = mListaMediciones[i][11];
            celdaPecho.innerHTML = mListaMediciones[i][12];
            celdaEspalda.innerHTML = mListaMediciones[i][13];
        }


    };
    console.log(sCedulaPerimetro);
};



const limpiarFormularioP = () => {
    inputFecha.value = 0;
    inputBicepDerecho.value = 0;
    inputBicepIzquierdo.value = 0;
    inputBicepContDerecho.value = 0;
    inputBicepContIzquierdo.value = 0;
    inputPantorrillaDerecha.value = 0;
    inputPantorrillaIzquierda.value = 0;
    inputMusloDerecho.value = 0;
    inputMusloIzquierdo.value = 0;
    inputCintura.value = 0;
    inputAbdomen.value = 0;
    inputCadera.value = 0;
    inputPecho.value = 0;
    inputEspalda.value = 0;
};



const obtenerDatosRegistroP = () => {
    let aNuevaMedida = [];

    let dFecha = inputFecha.value;
    let nBicepDerecho = inputBicepDerecho.value;
    let nBicepIzquierdo = inputBicepIzquierdo.value;
    let nBicepContDerecho = inputBicepContDerecho.value;
    let nBicepContIzquierdo = inputBicepContIzquierdo.value;
    let nPantorrillaDerecha = inputPantorrillaDerecha.value;
    let nPantorrillaIzquierda = inputPantorrillaIzquierda.value;
    let nMusloDerecho = inputMusloDerecho.value;
    let nMusloIzquierdo = inputMusloIzquierdo.value;
    let nCintura = inputCintura.value;
    let nAbdomen = inputAbdomen.value
    let nCadera = inputCadera.value
    let nPecho = inputPecho.value
    let nEspalda = inputEspalda.value

    aNuevaMedida.push(dFecha, nBicepDerecho, nBicepIzquierdo, nBicepContDerecho, nBicepContIzquierdo, nPantorrillaDerecha, nPantorrillaIzquierda, nMusloDerecho, nMusloIzquierdo, nCintura, nAbdomen, nCadera, nPecho, nEspalda,sCedulaPerimetro);
    registrarMedida(aNuevaMedida);
    mostrarTablaMediciones();
    limpiarFormularioP();

};


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
//     botonActualizarP.hidden = true;
//     botonRegistrar.hidden = false;
//     inputCedula.disabled = false;

// };


mostrarTablaMediciones();
botonGuardar.addEventListener('click', obtenerDatosRegistroP);
// botonActualizarP.addEventListener('click', obtenerDatosActualizar);

botonGuardar.addEventListener('click', hide);
// botonActualizarP .addEventListener('click' , hide);


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

