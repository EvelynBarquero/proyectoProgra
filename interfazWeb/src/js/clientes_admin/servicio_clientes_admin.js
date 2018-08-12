'use strcit';
let Mcliente="";

function setcliente(psMedidasCliente){
    localStorage.setItem('cliente', JSON.stringify(psMedidasCliente));
}

function getCliente(){
    let Mcliente = JSON.parse(localStorage.getItem('cliente'));
    return Mcliente;
}

