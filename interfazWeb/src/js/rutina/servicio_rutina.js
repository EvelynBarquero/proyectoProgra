'use strict';

let sClienteRutina="";

const obtenerListaEjercicios = () =>{

    let mListaEjercicios = JSON.parse(localStorage.getItem('ListaEjerciciosLS'));
    if(mListaEjercicios == null){
        mListaEjercicios = [
            ['Pull ups','Brazos', 8,'../img/ejercicios/3.jpg'],
            ['Push ups','Brazos', 12,'../img/ejercicios/3.jpg'],
            ['Squats', 'Muslo', 20,'../img/ejercicios/squats.jpeg'],
            ['Sentadillas', 'Muslo', 15,'../img/ejercicios/squats.jpeg'],
            ['Remo','Espalda', 12,'../img/ejercicios/remo.jpg'],
            ['Remo abierto','Espalda', 12,'../img/ejercicios/remo.jpg'],
            ['Flexiones','Pecho', 8, '../img/ejercicios/1.jpg'],
            ['Peck deck','Pecho', 12, '../img/ejercicios/1.jpg'],
            ['Pantorrilla1','Pantorrilla', 30, '../img/ejercicios/1.jpg'],
            ['Pantorrilla2','Pantorrilla', 20, '../img/ejercicios/1.jpg'],
            ['Abdominales','Abdomen', 18, '../img/ejercicios/1.jpg'],
            ['Planchas','Abdomen', 1, '../img/ejercicios/1.jpg'],
            ['Remo-Mancuernas',"Espalda", 12, "../img/ejercicios/Remo-con-mancuernas..jpg"],
            ['Pres-Frances', "Brazos", 10, "../img/ejercicios/5.jpg"],
            ['Pull-Down', "Espalda", 12, "../img/ejercicios/Pull-Down.jpg"],
            ["Press-Pecho Barra", "Pecho", 8, "../img/ejercicios/Pres-Pecho-Barra.jpg"],
            ["Press-Pecho Mancuerna", "Pecho", 10,"../img/ejercicios/Press-mancuernas-neutro.jpg"],
            ["Press-Militar", "Brazos", 10,"../img/ejercicios/Press-militar-con-mancuernas.jpg"],
            ["Extension-Rodilla", "Muslo", 12, "../img/ejercicios/Extension-rodilla.jpg"],
            ["Abduccion-Cadera", "Muslo", 10, "../img/ejercicios/Abduccion-cadera.jpg"],
            ["Desplazamiento-Lateral", "Muslo", 12, "../img/ejercicios/Desplazamiento-Lateral.jpg"],
            ["Desplante-Hungaro", "Pantorrilla", 20, "../img/ejercicios/desplante-hungaro.jpg"],
            ["Elevacion-Pantorrilla", "Pantorrilla", 12, "../img/ejercicios/elevacion-pantorrilla.jpeg"],
            ["Abdominales-Cruzados", "Abdomen", 20, "../img/ejercicios/Abdominales-Cruzados.jpg"],
            ["Levantamiento-Piernas", "Abdomen", 18, "../img/ejercicios/Levantamiento-Piernas.jpg"]

        ];
    }

    return mListaEjercicios;
}

const obtenerListaRutinas = () =>{
    let mListaRutinas = JSON.parse(localStorage.getItem('ListaRutinasLS'));
    if(mListaRutinas == null){
        mListaRutinas = [
            ["","","","","","","","","","",""]
        ];
    }
    return mListaRutinas;
}

const registrarRutina = (paNuevaRutina) =>{
    let mListaRutinas = obtenerListaRutinas();

    mListaRutinas.push(paNuevaRutina);
    mListaRutinas[mListaRutinas.length-1][10]=getCliente();

    localStorage.setItem('ListaRutinasLS', JSON.stringify(mListaRutinas));
};

function rutinaRandom (psCategoria){
    let mRandom  = [];
    let mListaEjercicios = obtenerListaEjercicios();
    let mCategoria = [];

    for (let i = 0 ; i < mListaEjercicios.length; i++){
        if (mListaEjercicios [i][1] == psCategoria){
            // mRandom = mListaEjercicios [i];
            mCategoria.push (mListaEjercicios [i]);
        }
    }
    let numero = Math.floor(Math.random() * mCategoria.length);
    return mCategoria [numero]; 

}

function getCliente(){
    let Mcliente = "";
    Mcliente = JSON.parse(localStorage.getItem('cliente'));
    return Mcliente;
}

function construirRutinaCliente(){
    window.location=("rutina.html");
}
























// const obtenerListaUsuarios = () =>{
//     let mListaEjercicios = JSON.parse(localStorage.getItem('listaEjerciciosLS'));
//     if(mListaEjercicios == null){
//         mListaEjercicios = [
//             ['Pull ups','Brazos', '','../img/ejercicios/3.jpg'],
//             ['Squats', 'Piernas', 'xxx','../img/ejercicios/squats.jpeg'],
//             ['Remo','Espalda', '','../img/ejercicios/remo.jpg'],
//             ['Flexiones','Pecho', 'Lagartijas', '../img/ejercicios/1.jpg']
//         ];
//     }

//     return mListaEjercicios;
// };

// const registrarUsuario = (paNuevoUsuario) =>{
//     let mListaEjercicios = obtenerListaEjercicios();

//     mListaEjercicios.push(paNuevoUsuario);

//     localStorage.setItem('listaEjerciciosLS', JSON.stringify(mListaEjercicios));
// }; 



// const buscarEjercicioPorNombre = (psNombre) =>{
//     let mListaEjercicios = obtenerListaEjercicios();
//     let ejercicioEncontrado = [];
//     for(let i = 0; i < mListaEjercicios.length; i++ ){
//         if(mListaEjercicios[i][0] == psNombre){
//             ejercicioEncontrado = mListaEjercicios[i];
//         }
//     };
//     return ejercicioEncontrado;
// };

// // pUsuarioModificado -> arreglo
// const modificarEjercicio = (paEjercicioModificado) =>{
//     let mListaEjercicios = obtenerListaEjercicios();
//     for(let i = 0 ; i < mListaEjercicios.length; i++ ){
//         if(mListaEjercicios[i][0] == paEjercicioModificado[0]){
//             mListaEjercicios[i] = paEjercicioModificado;
//         }
//     }
//     localStorage.setItem('listaEjerciciosLS', JSON.stringify(mListaEjercicios));

// };

