'use strict';


const obtenerListaInstructores = () =>{
    let mListaInstructores = JSON.parse(localStorage.getItem('listaInstructoresLS'));
    if(mListaInstructores == null){
        mListaInstructores = [
            ['Frank','Alberto', 'Rojas','Quesada','2397568','1992-06-22', '22', 'Masculino','87862325','fAlberto','alberto2018', '../img/ejercicios/3.jpg']
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

function calcularEdad(fecha) {
    let hoy = new Date();
    let cumpleanos = new Date(fecha);
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    let m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

