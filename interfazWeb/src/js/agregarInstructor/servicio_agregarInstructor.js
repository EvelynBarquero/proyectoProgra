'use strict';


const obtenerListaInstructores = () =>{
    let mListaInstructores = JSON.parse(localStorage.getItem('listaInstructoresLS'));
    if(mListaInstructores == null){
        mListaInstructores = [
            ['../../img/ejercicios/3.jpg','Frank','Alberto', 'Rojas','Quesada','2397568','22 | 06 | 92', 'Masculino','87862325','fAlberto','alberto2018']
        ];
    }

    return mListaInstructores;
};

const registrarInstructor = (paNuevoInstructor) =>{
    let mListaInstructores = obtenerListaInstructores();

    mListaInstructores.push(paNuevoInstructor);

    localStorage.setItem('listaInstructoresLS', JSON.stringify(mListaInstructores));
}; 
