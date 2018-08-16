'use strcit';
let Mcliente = "";

function setcliente(psMedidasCliente) {
    localStorage.setItem('cliente', JSON.stringify(psMedidasCliente));
}

function getCliente() {
    let Mcliente = JSON.parse(localStorage.getItem('cliente'));
    return Mcliente;
}

function determinarNumeroInstructores() {
    let numero = 0;
    let mListaInstructores = JSON.parse(localStorage.getItem('listaInstructoresLS'));
    if (mListaInstructores == null) {
        mListaInstructores = [
            ['Frank', 'Alberto', 'Rojas', 'Quesada', '2397568', '1992-06-22', '22', 'Masculino', '87862325', 'fAlberto', 'alberto2018', '../img/ejercicios/3.jpg']
        ];
    }
    numero = mListaInstructores.length;
    return numero;
}

function determinarNumeroEjercicios() {
    let numero = 0;
    let mListaEjercicios = JSON.parse(localStorage.getItem('ListaEjerciciosLS'));
    if (mListaEjercicios == null) {
        mListaEjercicios = [
            ['Pull ups', 'Brazos', 8, '../img/ejercicios/3.jpg'],
            ['Push ups', 'Brazos', 12, '../img/ejercicios/3.jpg'],
            ['Squats', 'Muslo', 20, '../img/ejercicios/squats.jpeg'],
            ['Sentadillas', 'Muslo', 15, '../img/ejercicios/squats.jpeg'],
            ['Remo', 'Espalda', 12, '../img/ejercicios/remo.jpg'],
            ['Remo abierto', 'Espalda', 12, '../img/ejercicios/remo.jpg'],
            ['Flexiones', 'Pecho', 8, '../img/ejercicios/1.jpg'],
            ['Peck deck', 'Pecho', 12, '../img/ejercicios/1.jpg'],
            ['Pantorrilla1', 'Pantorrilla', 30, '../img/ejercicios/1.jpg'],
            ['Pantorrilla2', 'Pantorrilla', 20, '../img/ejercicios/1.jpg'],
            ['Abdominales', 'Abdomen', 18, '../img/ejercicios/1.jpg'],
            ['Planchas', 'Abdomen', 1, '../img/ejercicios/1.jpg'],
            ['Remo-Mancuernas', "Espalda", 12, "../img/ejercicios/Remo-con-mancuernas..jpg"],
            ['Pres-Frances', "Brazos", 10, "../img/ejercicios/5.jpg"],
            ['Pull-Down', "Espalda", 12, "../img/ejercicios/Pull-Down.jpg"],
            ["Press-Pecho Barra", "Pecho", 8, "../img/ejercicios/Pres-Pecho-Barra.jpg"],
            ["Press-Pecho Mancuerna", "Pecho", 10, "../img/ejercicios/Press-mancuernas-neutro.jpg"],
            ["Press-Militar", "Brazos", 10, "../img/ejercicios/Press-militar-con-mancuernas.jpg"],
            ["Extension-Rodilla", "Muslo", 12, "../img/ejercicios/Extension-rodilla.jpg"],
            ["Abduccion-Cadera", "Muslo", 10, "../img/ejercicios/Abduccion-cadera.jpg"],
            ["Desplazamiento-Lateral", "Muslo", 12, "../img/ejercicios/Desplazamiento-Lateral.jpg"],
            ["Desplante-Hungaro", "Pantorrilla", 20, "../img/ejercicios/desplante-hungaro.jpg"],
            ["Elevacion-Pantorrilla", "Pantorrilla", 12, "../img/ejercicios/elevacion-pantorrilla.jpeg"],
            ["Abdominales-Cruzados", "Abdomen", 20, "../img/ejercicios/Abdominales-Cruzados.jpg"],
            ["Levantamiento-Piernas", "Abdomen", 18, "../img/ejercicios/Levantamiento-Piernas.jpg"]

        ]
    }
    numero = mListaEjercicios.length;
    return numero;
}