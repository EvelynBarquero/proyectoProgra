'use strict';


const obtenerListaUsuarios = () =>{
    let mListaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosGymLS'));
    if(mListaUsuarios == null){
        mListaUsuarios = [
            [116320103, 'Caballo2', 'Javier', 'Emanuel', 'Mendez','Hernandez', "12/27/1993", 24, "Masculino", "71708724", "", 'User'],
            [123459988, 'Caballo3', 'Evelyn', "", 'Barquero', "XXX", "06/22/1992", 26, "Femenina", "xxxxxxxx", "", "User"],
            [116460190, 'Caballo4', 'Sharon', '', 'Mendez', 'Hernandez', '07/03/1996', '22','Femenina', '62957881', "",'User' ]
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
    localStorage.setItem('cliente', JSON.stringify(pCedula));
    window.location = ("interfazRutinaCliente.html")
};

const determinarNumeroClientes = () =>{
    let mListaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosGymLS'));
    if(mListaUsuarios == null){
        mListaUsuarios = [
            [116320103, 'Caballo2', 'Javier', 'Emanuel', 'Mendez','Hernandez', "12/27/1993", 24, "Masculino", "71708724", "img/user_placeholder.png", 'User'],
            [123459988, 'Caballo3', 'Evelyn', "", 'Barquero', "XXX", "06/22/1992", 26, "Femenina", "xxxxxxxx", "img/user_placeholder.png", "User"],
            [116460190, 'Caballo4', 'Sharon', '', 'Mendez', 'Hernandez', '07/03/1996', '22','Femenina', '62957881', "img/user_placeholder.png",'User' ]
        ];
    }
    return mListaUsuarios.length;
}

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

function buscarClientePorCedula(pCedula){
    let mListaUsuarios = obtenerListaUsuarios();
    let usuarioEncontrado = [];
    for(let i = 0; i < mListaUsuarios.length; i++ ){
        if(mListaUsuarios[i][0] == pCedula){
            usuarioEncontrado = mListaUsuarios[i];
        }
    };
    return usuarioEncontrado;
}

const modificarCliente = (pUsuarioModificado) =>{
    let mListaUsuarios = obtenerListaUsuarios();
    for(let i = 0 ; i < mListaUsuarios.length; i++ ){
        if(mListaUsuarios[i][0] == pUsuarioModificado[0]){
            mListaUsuarios[i] = pUsuarioModificado;
        }
    }
    localStorage.setItem('listaUsuariosGymLS', JSON.stringify(mListaUsuarios));

};