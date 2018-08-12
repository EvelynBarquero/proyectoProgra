let sCedulaPerimetro = [];
let labesIMC= [];
let estatura = [];
let peso = [];
let imc = [];


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
            labels: labesIMC,
            datasets: [{
                data: estatura,
                label: "Estatura",
                borderColor: "#356975",
                fill: false,
                backgroundColor: '#356975',
            }, {
                data: peso,
                label: "Peso",
                borderColor: "#7fcfe4",
                fill: false,
                backgroundColor: '#7fcfe4',
            }, {
                data: imc,
                label: "IMC ",
                borderColor: "#b77bb1",
                fill: false,
                backgroundColor: '#b77bb1'
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