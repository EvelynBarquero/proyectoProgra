'use strict';


const obtenerListaUsuarios = () =>{
    let mListaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLS'));
    if(mListaUsuarios == null){
        mListaUsuarios = [
            ['../img/ejercicios/3.jpg','Pull ups','Brazos', ''],
            ['../img/ejercicios/squats.jpeg', 'Squats', 'Piernas', ''],
            ['../img/ejercicios/remo.jpg', 'Remo','Espalda', ''],
            ['../img/ejercicios/1.jpg', 'Flexiones','Pecho', 'Lagartijas']
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
const modificarUsuario = (pEjercicioModificado) =>{
    let mListaUsuarios = obtenerListaUsuarios();
    for(let i = 0 ; i < mListaUsuarios.length; i++ ){
        if(mListaUsuarios[i][0] == pEjercicioModificado[0]){
            mListaUsuarios[i] = pEjercicioModificado;
        }
    }
    localStorage.setItem('listaUsuariosLS', JSON.stringify(mListaUsuarios));

};

