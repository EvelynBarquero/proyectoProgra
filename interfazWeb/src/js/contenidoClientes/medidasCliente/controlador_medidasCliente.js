let sCedulaPerimetro = [];
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