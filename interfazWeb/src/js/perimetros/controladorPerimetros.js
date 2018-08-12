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
let labesCliente = [];
let bicepD = [];
let bicepI = [];
let bicepCD = [];
let bicepCI = [];
let pantorrillaD = [];
let pantorrillaI = [];
let musloD = [];
let musloI = [];
let cintura = [];
let abdomen = [];
let cadera = [];
let pecho = [];
let espalda = [];

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

            labesCliente.push(mListaMediciones[i][0]);
            bicepD.push(mListaMediciones[i][1]);
            bicepI.push(mListaMediciones[i][2]);
            bicepCD.push(mListaMediciones[i][3]);
            bicepCI.push(mListaMediciones[i][4]);
            pantorrillaD.push(mListaMediciones[i][5]);
            pantorrillaI.push(mListaMediciones[i][6]);
            musloD.push(mListaMediciones[i][7]);
            musloI.push(mListaMediciones[i][8]);
            cintura.push(mListaMediciones[i][9]);
            abdomen.push(mListaMediciones[i][10]);
            cadera.push(mListaMediciones[i][11]);
            pecho.push(mListaMediciones[i][12]);
            espalda.push(mListaMediciones[i][13]);
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

    aNuevaMedida.push(dFecha, nBicepDerecho, nBicepIzquierdo, nBicepContDerecho, nBicepContIzquierdo, nPantorrillaDerecha, nPantorrillaIzquierda, nMusloDerecho, nMusloIzquierdo, nCintura, nAbdomen, nCadera, nPecho, nEspalda, sCedulaPerimetro);
    labesCliente.push(dFecha);
    bicepD.push(nBicepDerecho);
    bicepI.push(nBicepIzquierdo);
    bicepCD.push(nBicepContDerecho);
    bicepCI.push(nBicepContIzquierdo);
    pantorrillaD.push(nPantorrillaDerecha);
    pantorrillaI.push(nPantorrillaIzquierda);
    musloD.push(nMusloDerecho);
    musloI.push(nMusloIzquierdo);
    cintura.push(nCintura);
    abdomen.push(nAbdomen);
    cadera.push(nCadera);
    pecho.push(nPecho);
    espalda.push(nEspalda);

    registrarMedida(aNuevaMedida);
    mostrarTablaMediciones();
    limpiarFormularioP();

};


mostrarTablaMediciones();
botonGuardar.addEventListener('click', obtenerDatosRegistroP);
// botonActualizarP.addEventListener('click', obtenerDatosActualizar);

botonGuardar.addEventListener('click', hide);
// botonActualizarP .addEventListener('click' , hide);

hideGrafic();
// ------------------

function show() {
    var x = document.getElementById("tableEdit");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
function showGrafic() {
    var x = document.getElementById("line-chart");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    new Chart(document.getElementById("line-chart"), {

        type: 'line',
        data: {
            labels: labesCliente,
            datasets: [{
                data: bicepD,
                label: "Bicep-D",
                borderColor: "#375359",
                backgroundColor: '#375359',
                fill: false,
                fontSize: '20'
            }, {
                data: bicepI,
                label: "Bicep-I",
                borderColor: "#356975",
                fill: false,
                backgroundColor: '#356975',
            }, {
                data: bicepCD,
                label: "Bicep-C-D",
                borderColor: "#477d9e",
                fill: false,
                backgroundColor: '#477d9e',
            }, {
                data: bicepCI,
                label: "Bicep-C-I",
                borderColor: "#6a9aa5",
                fill: false,
                backgroundColor: '#6a9aa5',
            }, {
                data: pantorrillaD,
                label: "Pantorilla-D",
                borderColor: "#66a7d8",
                fill: false,
                backgroundColor: '#66a7d8',
            },
            {
                data: pantorrillaI,
                label: "Pantorilla-I",
                borderColor: "#7fcfe4",
                fill: false,
                backgroundColor: '#7fcfe4',
            },
            {
                data: musloD,
                label: "Muslo-D",
                borderColor: "#8ec2ae",
                fill: false,
                backgroundColor: '#8ec2ae',
            },
            {
                data: musloI,
                label: "Muslo-I",
                borderColor: "#ace5bb",
                fill: false,
                backgroundColor: '#ace5bb',
            },
            {
                data: cintura,
                label: "Cintura",
                borderColor: "#cce5d5",
                fill: false,
                backgroundColor: '#cce5d5',
            },
            {
                data: abdomen,
                label: "Abdomen",
                borderColor: "#cceaea",
                fill: false,
                backgroundColor: '#cceaea'
            },
            {
                data: cadera,
                label: "Cadera",
                borderColor: "#f2c4d3",
                fill: false,
                backgroundColor: '#f2c4d3'
            },
            {
                data: pecho,
                label: "Pecho",
                borderColor: "#d69dc3",
                fill: false,
                backgroundColor: '#d69dc3'
            },
            {
                data: espalda,
                label: "Espalda",
                borderColor: "#b77bb1",
                fill: false,
                backgroundColor: '#b77bb1'
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Historico de mediciones',
            }
        }
    });
}
function hide() {
    var x = document.getElementById("tableEdit");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function hideGrafic() {
    var x = document.getElementById("line-chart");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

