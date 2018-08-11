'use strcit';
let Mcliente="";

function setcliente(psMedidasCliente){
    Mcliente = sMedidasCliente;
    localStorage.setItem('cliente', JSON.stringify(Mcliente));
}

function getCliente(){
    let Mcliente = JSON.parse(localStorage.getItem('cliente'));
    return Mcliente;
}