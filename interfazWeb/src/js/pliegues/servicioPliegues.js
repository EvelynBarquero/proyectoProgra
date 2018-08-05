'use strict';


const obtenerListaMediciones = () =>{
    let mListaMediciones = JSON.parse(localStorage.getItem('listaMedicionesLS'));
    if(mListaMediciones == null){
        mListaMediciones = [
            ['2017-06-22','23','34', '54','35','35','6', '22', '46','46']
        ];
    }

    return mListaMediciones;
};

const registrarMedida = (paNuevaMedida) =>{
    let mListaMediciones = obtenerListaMediciones();

    mListaMediciones.push(paNuevaMedida);

    localStorage.setItem('listaMedicionesLS', JSON.stringify(mListaMediciones));
}; 


// const buscarInstructorPorCedula = (pCedula) =>{
//     let mListaInstructores = obtenerListaInstructores();
//     let usuarioEncontrado = [];
//     for(let i = 0; i < mListaInstructores.length; i++ ){
//         if(mListaInstructores[i][0] == pCedula){
//             usuarioEncontrado = mListaInstructores[i];
//         }
//     };
//     return usuarioEncontrado;
// };



// pUsuarioModificado -> arreglo
// const modificarUsuario = (pUsuarioModificado) =>{
//     let mListaInstructores = obtenerListaInstructores();
//     for(let i = 0 ; i < mListaInstructores.length; i++ ){
//         if(mListaInstructores[i][0] == pUsuarioModificado[0]){
//             mListaInstructores[i] = pUsuarioModificado;
//         }
//     }
//     localStorage.setItem('listaInstructoresLS', JSON.stringify(mListaInstructores));

// };
