// WEB03 Fundamentos de Programación Web G1 (2-2018) 
// Proyecto final segundo cuatrimestre 2018
// Evelyn Barquero - Javier Mendez

'use strict';

buscarRutina();

function getCliente(){
    let Mcliente = "";
    Mcliente = JSON.parse(localStorage.getItem('cliente'));
    return Mcliente;
}

function buscarRutina(psCliente){
    let listaRutinas = JSON.parse(localStorage.getItem('ListaRutinasLS'));
    if(listaRutinas == null){
        listaRutinas = [
            ["","","","","","","","","","",""]
        ];
    }
    let rutina=[];

    for(let i=0; i<listaRutinas.length; i++){
        if(listaRutinas[i][10]==psCliente){
            rutina=listaRutinas[i];
        }
    }
    return rutina;
}
