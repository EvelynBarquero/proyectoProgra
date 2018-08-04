'use strict';


const obtenerListaInstructores = () =>{
    let mListaInstructores = JSON.parse(localStorage.getItem('listaInstructoresLS'));
    if(mListaInstructores == null){
        mListaInstructores = [
            ['../img/ejercicios/3.jpg','Frank','Alberto', 'Rojas','Quesada','2397568','1992-06-22', '22', 'Masculino','87862325','fAlberto','alberto2018']
        ];
    }

    return mListaInstructores;
};

const registrarInstructor = (paNuevoInstructor) =>{
    let mListaInstructores = obtenerListaInstructores();

    mListaInstructores.push(paNuevoInstructor);

    localStorage.setItem('listaInstructoresLS', JSON.stringify(mListaInstructores));
}; 


const buscarInstructorPorCedula = (pCedula) =>{
    let mListaInstructores = obtenerListaInstructores();
    let usuarioEncontrado = [];
    for(let i = 0; i < mListaInstructores.length; i++ ){
        if(mListaInstructores[i][0] == pCedula){
            usuarioEncontrado = mListaInstructores[i];
        }
    };
    return usuarioEncontrado;
};

// pUsuarioModificado -> arreglo
const modificarUsuario = (pUsuarioModificado) =>{
    let mListaInstructores = obtenerListaInstructores();
    for(let i = 0 ; i < mListaInstructores.length; i++ ){
        if(mListaInstructores[i][0] == pUsuarioModificado[0]){
            mListaInstructores[i] = pUsuarioModificado;
        }
    }
    localStorage.setItem('listaInstructoresLS', JSON.stringify(mListaInstructores));

};

