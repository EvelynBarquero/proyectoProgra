let sCedula = [];
let labesPliegues = [];
let tricepD = [];
let tricepI = [];
let subescapularD = [];
let subescapularI = [];
let supraespinalD = [];
let supraespinalI = [];
let abdominalD = [];
let abdominalI = [];
let grasaSub= [];
let grasaMusc = [];

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
            labels: labesPliegues,
            datasets: [{
                data: tricepD,
                label: "Tricep-D",
                borderColor: "#375359",
                backgroundColor: '#375359',
                fill: false,
            }, {
                data: tricepI,
                label: "Tricep-I",
                borderColor: "#356975",
                fill: false,
                backgroundColor: '#356975',
            }, {
                data: subescapularD,
                label: "Subesc-D",
                borderColor: "#477d9e",
                fill: false,
                backgroundColor: '#477d9e',
            }, {
                data: subescapularI,
                label: "Subesc-D",
                borderColor: "#6a9aa5",
                fill: false,
                backgroundColor: '#6a9aa5',
            }, {
                data: supraespinalD,
                label: "Supraesp-D",
                borderColor: "#66a7d8",
                fill: false,
                backgroundColor: '#66a7d8',
            },
            {
                data: supraespinalI,
                label: "Supraesp-I",
                borderColor: "#7fcfe4",
                fill: false,
                backgroundColor: '#7fcfe4',
            },
            {
                data: abdominalD,
                label: "Abdominal-D",
                borderColor: "#8ec2ae",
                fill: false,
                backgroundColor: '#8ec2ae',
            },
            {
                data: abdominalI,
                label: "AbdominalD-I",
                borderColor: "#ace5bb",
                fill: false,
                backgroundColor: '#ace5bb',
            },
            {
                data: grasaSub,
                label: "Grasa Subcutanea",
                borderColor: "#cce5d5",
                fill: false,
                backgroundColor: '#cce5d5',
            },
            {
                data: grasaMusc,
                label: "Grasa muscular",
                borderColor: "#cceaea",
                fill: false,
                backgroundColor: '#cceaea'
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