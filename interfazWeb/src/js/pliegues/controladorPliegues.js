'use strict';

// const inputImagen = document.querySelector('#btnSeleccionarImagen');
const inputFecha = document.querySelector('#txtFecha');
const inputTricepDerecho = document.querySelector('#txtTricepDerecho');
const inputTricepIzquierdo = document.querySelector('#txtTricepIzquierdo');
const inputSubescapularDerecho = document.querySelector('#txtSubescapularDerecho');
const inputSubescapularIzquierdo = document.querySelector('#txtSubescapularIzquierdo');
const inputSupraespinalDerecho = document.querySelector('#txtSupraespinalDerecho');
const inputSupraespinalIzquierdo = document.querySelector('#txtSupraespinalIzquierdo');
const inputAbdominalDerecho = document.querySelector('#txtAbdominalDerecho');
const inputAbdominalIzquierdo = document.querySelector('#txtAbdominalIzquierdo');

// const outputSubcutanea = document.querySelector ('#txtSubcutanea');
// const outputMuscular = document.querySelector ('#txtMuscular');

const botonGuardar = document.querySelector('#btnGuardar');
const botonActualizar = document.querySelector('#btnActualizar');

let sCedulaPerimetro = getCliente();
let labesCliente = [];
let TricepD = [];
let TricepI = [];
let SubescapularD = [];
let SubescapularI = [];
let SupraespinalD = [];
let SupraespinalI = [];
let AbdominalI = [];
let AbdominalD = [];
let GrasaS = [];
let GrasaM = [];


botonActualizar.hidden = true;
let sCedulaPliegue = getCliente();


const mostrarTablaMediciones = () => {
    let mPliegues = obtenerListaPliegues();
    let tbody = document.querySelector('#tblPliegues tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < mPliegues.length; i++) {
        if (mPliegues[i][11] == sCedulaPliegue) {
            let fila = tbody.insertRow();

            let celdaFecha = fila.insertCell();
            let celdaTricepDerecho = fila.insertCell();
            let celdaTricepIzquierdo = fila.insertCell();
            let celdaSubescapularDerecho = fila.insertCell();
            let celdaSubescapularIzquierdo = fila.insertCell();
            let celdaSupraespinalDerecho = fila.insertCell();
            let celdaSupraespinalIzquierdo = fila.insertCell();
            let celdaAbdominalDerecho = fila.insertCell();
            let celdaAbdominalIzquierdo = fila.insertCell();
            let celdaGrasaSubcutanea = fila.insertCell();
            let celdaGrasaMuscular = fila.insertCell();

            celdaFecha.innerHTML = mPliegues[i][0];
            celdaTricepDerecho.innerHTML = mPliegues[i][1];
            celdaTricepIzquierdo.innerHTML = mPliegues[i][2];
            celdaSubescapularDerecho.innerHTML = mPliegues[i][3];
            celdaSubescapularIzquierdo.innerHTML = mPliegues[i][4];
            celdaSupraespinalDerecho.innerHTML = mPliegues[i][5];
            celdaSupraespinalIzquierdo.innerHTML = mPliegues[i][6];
            celdaAbdominalDerecho.innerHTML = mPliegues[i][7];
            celdaAbdominalIzquierdo.innerHTML = mPliegues[i][8];
            celdaGrasaSubcutanea.innerHTML = mPliegues[i][9];
            celdaGrasaMuscular.innerHTML = mPliegues[i][10];

            labesCliente.push(mPliegues[i][0]);
            TricepD.push(mPliegues[i][1]);
            TricepI.push(mPliegues[i][2]);
            SubescapularD.push(mPliegues[i][3]);
            SubescapularI.push(mPliegues[i][4]);
            SupraespinalD.push(mPliegues[i][5]);
            SupraespinalI.push(mPliegues[i][6]);
            AbdominalI.push(mPliegues[i][7]);
            AbdominalD.push(mPliegues[i][8]);
            GrasaS.push(mPliegues[i][9]);
            GrasaM.push(mPliegues[i][10]);
        }

    };
};



const limpiarFormulario = () => {
    inputFecha.value = "";
    inputTricepDerecho.value = 0;
    inputTricepIzquierdo.value = 0;
    inputSubescapularDerecho.value = 0;
    inputSubescapularIzquierdo.value = 0;
    inputSupraespinalDerecho.value = 0;
    inputSupraespinalIzquierdo.value = 0;
    inputAbdominalDerecho.value = 0;
    inputAbdominalIzquierdo.value = 0;
};



const obtenerDatosRegistro = () => {
    let aNuevaMedida = [];

    let dFecha = inputFecha.value;
    let nTricepDerecho = inputTricepDerecho.value;
    let nTricepIzquierdo = inputTricepIzquierdo.value;
    let nSubescapularDerecho = inputSubescapularDerecho.value;
    let nSubescapularIzquierdo = inputSubescapularIzquierdo.value;
    let nSupraespinalDerecho = inputSupraespinalDerecho.value;
    let nSupraespinalIzquierdo = inputSupraespinalIzquierdo.value;
    let nAbdominalDerecho = inputAbdominalDerecho.value;
    let nAbdominalIzquierdo = inputAbdominalIzquierdo.value;
    let nGrasaSubcutanea = calcularGSubcutanea(nTricepDerecho,nTricepIzquierdo,nSubescapularDerecho,nSubescapularIzquierdo,nSupraespinalDerecho,nSupraespinalIzquierdo,nAbdominalDerecho,nAbdominalIzquierdo);
    let nGrasaMuscular = calcularGMuscular(nTricepDerecho,nTricepIzquierdo,nSubescapularDerecho,nSubescapularIzquierdo,nSupraespinalDerecho,nSupraespinalIzquierdo,nAbdominalDerecho,nAbdominalIzquierdo);


    aNuevaMedida.push(dFecha, nTricepDerecho, nTricepIzquierdo, nSubescapularDerecho, nSubescapularIzquierdo, nSupraespinalDerecho, nSupraespinalIzquierdo, nAbdominalDerecho, nAbdominalIzquierdo,nGrasaSubcutanea,nGrasaMuscular,sCedulaPliegue);
    registrarPliegues(aNuevaMedida);
    mostrarTablaMediciones();
    limpiarFormulario();

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
//     botonActualizar.hidden = true;
//     botonRegistrar.hidden = false;
//     inputCedula.disabled = false;

// };


mostrarTablaMediciones();
botonGuardar.addEventListener('click', obtenerDatosRegistro);
// botonActualizar.addEventListener('click', obtenerDatosActualizar);

botonGuardar.addEventListener('click', hide);
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
                data: TricepD,
                label: "Tricep-D",
                borderColor: "#375359",
                backgroundColor: '#375359',
                fill: false,
            }, {
                data: TricepI,
                label: "Tricep-I",
                borderColor: "#356975",
                fill: false,
                backgroundColor: '#356975',
            }, {
                data: SubescapularD,
                label: "Subesc-D",
                borderColor: "#356975",
                fill: false,
                backgroundColor: '#356975',
            }, {
                data: SubescapularI,
                label: "Subesc-I",
                borderColor: "#477d9e",
                fill: false,
                backgroundColor: '#477d9e',
            }, {
                data: SupraespinalD,
                label: "Supraes-D",
                borderColor: "#6a9aa5",
                fill: false,
                backgroundColor: '#6a9aa5',
            },
            {
                data: SupraespinalI,
                label: "Supraesp-I",
                borderColor: "#66a7d8",
                fill: false,
                backgroundColor: '#66a7d8',
            },
            {
                data: AbdominalD,
                label: "Abdominal-D",
                borderColor: "#7fcfe4",
                fill: false,
                backgroundColor: '#7fcfe4',
            },
            {
                data: AbdominalI,
                label: "Abdominal-I",
                borderColor: "#8ec2ae",
                fill: false,
                backgroundColor: '#8ec2ae',
            },
            {
                data: GrasaS,
                label: "%GrasaSub",
                borderColor: "#ace5bb",
                fill: false,
                backgroundColor: '#ace5bb',
            },
            {
                data: GrasaM,
                label: "%GrasaMusc",
                borderColor: "#cce5d5",
                fill: false,
                backgroundColor: '#cce5d5',
            },
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
