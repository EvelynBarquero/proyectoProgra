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
                borderColor: "#8ec2ae",
                fill: false
            }, {
                data: peso,
                label: "Peso",
                borderColor: "#7fcfe4",
                fill: false
            }, {
                data: imc,
                label: "IMC ",
                borderColor: "#ee6085",
                fill: false
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