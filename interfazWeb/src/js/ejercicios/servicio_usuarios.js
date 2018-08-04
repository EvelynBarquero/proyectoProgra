'use strict';


const obtenerListaUsuarios = () =>{
    let mListaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLS'));
    if(mListaUsuarios == null){
        mListaUsuarios = [
            ['Pull ups','Brazos', '','../img/ejercicios/3.jpg'],
            ['Squats', 'Piernas', 'xxx','../img/ejercicios/squats.jpeg'],
            ['Remo','Espalda', '','../img/ejercicios/remo.jpg'],
            ['Flexiones','Pecho', 'Lagartijas', '../img/ejercicios/1.jpg']
        ];
    }

    return mListaUsuarios;
};

const registrarUsuario = (paNuevoUsuario) =>{
    let mListaUsuarios = obtenerListaUsuarios();

    mListaUsuarios.push(paNuevoUsuario);

    localStorage.setItem('listaUsuariosLS', JSON.stringify(mListaUsuarios));
}; 



const buscarEjercicioPorNombre = (psNombre) =>{
    let mListaUsuarios = obtenerListaUsuarios();
    let ejercicioEncontrado = [];
    for(let i = 0; i < mListaUsuarios.length; i++ ){
        if(mListaUsuarios[i][0] == psNombre){
            ejercicioEncontrado = mListaUsuarios[i];
        }
    };
    return ejercicioEncontrado;
};

// pUsuarioModificado -> arreglo
const modificarEjercicio = (paEjercicioModificado) =>{
    let mListaUsuarios = obtenerListaUsuarios();
    for(let i = 0 ; i < mListaUsuarios.length; i++ ){
        if(mListaUsuarios[i][0] == paEjercicioModificado[0]){
            mListaUsuarios[i] = paEjercicioModificado;
        }
    }
    localStorage.setItem('listaUsuariosLS', JSON.stringify(mListaUsuarios));

};

