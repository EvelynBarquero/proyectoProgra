'use strict';

const mUsuarios = [
    ["116320103", "*javi123", "Javier","Emanuel","Mendez","Hernandez","Masculino", "12/27/1993",24, 71708724, "admin"],
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