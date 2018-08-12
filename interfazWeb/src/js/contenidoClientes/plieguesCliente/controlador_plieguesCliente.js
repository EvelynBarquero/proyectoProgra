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
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: bicepI,
                label: "Bicep-I",
                borderColor: "#8e5ea2",
                fill: false
            }, {
                data: bicepCD,
                label: "Bicep-C-D",
                borderColor: "#3cba9f",
                fill: false
            }, {
                data: bicepCI,
                label: "Bicep-C-I",
                borderColor: "#e8c3b9",
                fill: false
            }, {
                data: pantorrillaD,
                label: "Pantorilla-D",
                borderColor: "#c45850",
                fill: false
            },
            {
                data: pantorrillaI,
                label: "Pantorilla-I",
                borderColor: "#81F7BE",
                fill: false
            },
            {
                data: musloD,
                label: "Muslo-D",
                borderColor: "#2EFE2E",
                fill: false
            },
            {
                data: musloI,
                label: "Muslo-I",
                borderColor: "#BF00FF",
                fill: false
            },
            {
                data: cintura,
                label: "Cintura",
                borderColor: "#BF00FF",
                fill: false
            },
            {
                data: abdomen,
                label: "Abdomen",
                borderColor: "#BF00FF",
                fill: false
            },
            {
                data: cadera,
                label: "Cadera",
                borderColor: "#BF00FF",
                fill: false
            },
            {
                data: pecho,
                label: "Pecho",
                borderColor: "#BF00FF",
                fill: false
            },
            {
                data: espalda,
                label: "Espalda",
                borderColor: "#BF00FF",
                fill: false
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