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

mostrarTablaMediciones();

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