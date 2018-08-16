'use strict';

// const inputImagen = document.querySelector('#btnSeleccionarImagen');
const inputFecha = document.querySelector('#txtFecha');
const inputEstatura = document.querySelector('#txtEstatura');
const inputPeso = document.querySelector('#txtPeso');
const outputMCI = document.querySelector('#txtMCI');

const botonGuardar = document.querySelector('#btnGuardar');
const botonActualizar = document.querySelector('#btnActualizar');

// botonGuardar.addEventListener('click', calcularMCI);

botonActualizar.hidden = true;

let sCedulaIMC = getCliente();

let labesCliente=[];
let dataEstatura=[];
let dataPeso=[];
let dataIMC=[];

const mostrarTablaMediciones = () => {
    let mIMC = obtenerListaIMC();
    let tbody = document.querySelector('#tblPerimetros tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < mIMC.length; i++) {
        if (mIMC[i][4] == sCedulaIMC) {
            let fila = tbody.insertRow();

            let celdaFecha = fila.insertCell();
            let celdaEstatura = fila.insertCell();
            let celdaPeso = fila.insertCell();
            let celdaIMC = fila.insertCell();


            celdaFecha.innerHTML = mIMC[i][0];
            celdaEstatura.innerHTML = mIMC[i][1];
            celdaPeso.innerHTML = mIMC[i][2];
            celdaIMC.innerHTML = mIMC[i][3];

            labesCliente.push(mIMC[i][0]);
            dataEstatura.push(mIMC[i][1]);
            dataPeso.push(mIMC[i][2]);
            dataIMC.push(mIMC[i][3]);

        }
    };
};



const limpiarFormulario = () => {
    inputFecha.value = "";
    inputEstatura.value = 0;
    inputPeso.value = 0;
};


const obtenerDatosRegistro = () => {
    let aNuevaMedida = [];

    let dFecha = inputFecha.value;
    let nEstatura = inputEstatura.value;
    let nPeso = inputPeso.value;
    let imc = calcularIMC(nEstatura,nPeso);

    aNuevaMedida.push(dFecha, nEstatura, nPeso, imc,sCedulaIMC);
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
                data: dataEstatura,
                label: "Estatura",
                borderColor: "#375359",
                backgroundColor: '#375359',
                fill: false,
            }, {
                data: dataPeso,
                label: "Peso",
                borderColor: "#7fcfe4",
                fill: false,
                backgroundColor: '#7fcfe4',
            }, {
                data: dataIMC,
                label: "IMC",
                borderColor: "#d69dc3",
                fill: false,
                backgroundColor: '#d69dc3'
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

function hideGrafic() {
    var x = document.getElementById("line-chart");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

