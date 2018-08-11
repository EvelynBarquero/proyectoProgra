'use strict';

const obtenerListaEjercicios = () =>{

    let mListaEjercicios = JSON.parse(localStorage.getItem('ListaEjerciciosLS'));
    if(mListaEjercicios == null){
        mListaEjercicios = [
            ['Pull ups','Brazos', '','../img/ejercicios/3.jpg'],
            ['Push ups','Brazos', '','../img/ejercicios/3.jpg'],
            ['Squats', 'Muslo', 'xxx','../img/ejercicios/squats.jpeg'],
            ['Sentadillas', 'Muslo', 'xxx','../img/ejercicios/squats.jpeg'],
            ['Remo','Espalda', '','../img/ejercicios/remo.jpg'],
            ['Remo abierto','Espalda', '','../img/ejercicios/remo.jpg'],
            ['Flexiones','Pecho', 'Lagartijas', '../img/ejercicios/1.jpg'],
            ['Peck deck','Pecho', '', '../img/ejercicios/1.jpg'],
            ['Pantorrilla1','Pantorrilla', 'Lagartijas', '../img/ejercicios/1.jpg'],
            ['Pantorrilla2','Pantorrilla', '', '../img/ejercicios/1.jpg'],
            ['Abdominales','Abdomen', 'Lagartijas', '../img/ejercicios/1.jpg'],
            ['Planchas','Abdomen', '', '../img/ejercicios/1.jpg']
        ];
    }

    return mListaEjercicios;
}


// function  agregarRutina {
//     Math.floor(Math.random() * mListaEjercicios.lenght );
// }


function rutinaRandom (psCategoria){
    let mRandom  = [];
    let mListaEjercicios = obtenerListaEjercicios ();
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

