'use strict';


const obtenerListaIMC = () =>{
    let mListaMediciones = JSON.parse(localStorage.getItem('listaIMCLS'));
    if(mListaMediciones == null){
        mListaMediciones = [
            ['2017-06-22','23','34', '54', "116320103"],
            ['2017-07-22','23','34', '54', "116320103"],
            ['2017-07-22','20','30', '50', "116320103"]
    
        ];
    }

    return mListaMediciones;
};

const registrarMedida = (paNuevaMedida) =>{
    let mListaMediciones = obtenerListaIMC();

    mListaMediciones.push(paNuevaMedida);

    localStorage.setItem('listaIMCLS', JSON.stringify(mListaMediciones));
}; 

function calcularIMC(altura,peso){
    let imc=peso/Math.pow(altura,2);
    return imc;
}

// const mostrarMCI = (pnEstatura, pnPeso) => {

//     let nMCI = 0;
//     for (let i = 0; i < mListaMediciones.length; i++){
//         nMCI = pnPeso / pnEstatura;
//     }

//     return nMCI;
// }




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
