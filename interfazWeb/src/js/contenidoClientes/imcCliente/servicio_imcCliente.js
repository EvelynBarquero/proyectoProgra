'use strict';
let Mcliente="";

function getCliente(){
    let Mcliente = JSON.parse(localStorage.getItem('cliente'));
    return Mcliente;
}


const obtenerListaIMC = () =>{
    let mListaMediciones = JSON.parse(localStorage.getItem('listaIMCLS'));
    if(mListaMediciones == null){
        mListaMediciones = [
            ['2017-06-22','23','34', '54', "116320103"],
            ['2017-07-22','23','34', '54', "116320103"]

        ];
    }

    return mListaMediciones;
};

const registrarMedida = (paNuevaMedida) =>{
    let mListaMediciones = obtenerListaMediciones();

    mListaMediciones.push(paNuevaMedida);

    localStorage.setItem('listaIMCLS', JSON.stringify(mListaMediciones));
}; 
