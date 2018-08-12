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
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: tricepI,
                label: "Tricep-I",
                borderColor: "#8e5ea2",
                fill: false
            }, {
                data: subescapularD,
                label: "Subescapular-D",
                borderColor: "#3cba9f",
                fill: false
            }, {
                data: subescapularI,
                label: "Subescapular-D",
                borderColor: "#e8c3b9",
                fill: false
            }, {
                data: supraespinalD,
                label: "Supraespinal-D",
                borderColor: "#c45850",
                fill: false
            },
            {
                data: supraespinalI,
                label: "Supraespinal-I",
                borderColor: "#81F7BE",
                fill: false
            },
            {
                data: abdominalD,
                label: "Abdominal-D",
                borderColor: "#2EFE2E",
                fill: false
            },
            {
                data: abdominalI,
                label: "AbdominalD-I",
                borderColor: "#BF00FF",
                fill: false
            },
            {
                data: grasaSub,
                label: "Grasa Subcutanea",
                borderColor: "#BF00FF",
                fill: false
            },
            {
                data: grasaMusc,
                label: "Grasa muscular",
                borderColor: "#BF00FF",
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