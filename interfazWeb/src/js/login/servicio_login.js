'use strict';

function validarUsuario(psCedula,psPassword){
    let listaUsuarios=obtenerListaUsuarios();
    let listaInstructores=obtenerListaInstructores();

    let bUsuario=0;

    for(let i=0; i<listaUsuarios.length; i++){
        if(listaUsuarios[i][0]==psCedula){
            if(listaUsuarios[i][1]==psPassword){
                bUsuario=1;
            }
        }
    }
    for(let i=0; i<listaInstructores.length; i++){
        if(listaInstructores[i][4]==psCedula){
            if(listaInstructores[i][10]==psPassword){
                bUsuario=2;
            }
        }
    }
    if(psCedula==999999999 & psPassword=="Admin123"){
        bUsuario=3
    }
    return bUsuario;
}

function construirMenuPricipalCliente(){
    /*Aqui se construye el menu */
}