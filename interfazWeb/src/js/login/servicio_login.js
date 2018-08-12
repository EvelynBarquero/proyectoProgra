'use strict';

function validarUsuario(psCedula,psPassword){
    let listaUsuarios=obtenerListaUsuarios();
    let bUsuario=false;

    for(let i=0; i<listaUsuarios.length; i++){
        if(listaUsuarios[i][0]==psCedula){
            if(listaUsuarios[i][1]==psPassword){
                bUsuario=true;
            }
        }
    }
    return bUsuario;
}

function construirMenuPricipalCliente(){
    /*Aqui se construye el menu */
}