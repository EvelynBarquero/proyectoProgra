'use strict';


const obtenerListaUsuarios = () =>{
    let mListaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosGymLS'));
    if(mListaUsuarios == null){
        mListaUsuarios = [
            [116320103, 'Caballo2', 'Javier', 'Emanuel', 'Mendez','Hernandez', "12/27/1993", 24, "Masculino", "71708724", "", 'User'],
            [123459988, 'Caballo3', 'Evelyn', 'De la Trinidad', 'Barquero', "XXX", "06/22/1992", 26, "Femenina", "xxxxxxxx", "", "User"]
        ];
    }
    return mListaUsuarios;
};

const registrarUsuario = (paNuevoUsuario) =>{
    let mListaUsuarios = obtenerListaUsuarios();

    mListaUsuarios.push(paNuevoUsuario);

    localStorage.setItem('listaUsuariosGymLS', JSON.stringify(mListaUsuarios));
};

const crearMenuUsuario=(pCedula)=>{
    window.alert("Se creo el usuario - menu to be added");
};