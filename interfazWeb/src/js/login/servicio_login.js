'use strict';

const mUsuarios = [
    ["12345","12345"],
    [],
    [],
];

function validarUsuario(psCedula,psPassword){
    
    let bUsuario=false;

    for(let i=0; i<mUsuarios.length; i++){
        if(mUsuarios[i][0]===psCedula){
            if(mUsuarios[i][1]==psPassword){
                bUsuario=true;
            }
        }
    }
    return bUsuario;
}

function construirMenuPricipalCliente(){
    /*Aqui se construye el menu */
}