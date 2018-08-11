'use strict';


const obtenerListaPliegues = () =>{
    let mListaMediciones = JSON.parse(localStorage.getItem('listaPlieguesLS'));
    if(mListaMediciones == null){
        mListaMediciones = [
            ['2017-06-22','23','34', '54','35','35','6', '22', '46','46',"","","116320103"]
        ];
    }

    return mListaMediciones;
};

const registrarPliegues = (paNuevaMedida) =>{
    let mListaMediciones = obtenerListaMediciones();

    mListaMediciones.push(paNuevaMedida);

    localStorage.setItem('listaPlieguesLS', JSON.stringify(mListaMediciones));
}; 

const sumatoriaPliegues=()=>{
    let mListaMediciones=obtenerListaPliegues();
    let sumatoria=0;
    for(let i=0; i<mListaMediciones.length; i++){
        if(mListaMediciones[i][12]==getCliente()){
            for(let j=1; j<10; j++){
                sumatoria=sumatoria+mListaMediciones[i][j];
            }
        }

    }
    return sumatoria;
}

const calcularGrasaSubcutanea=()=>{
    let mListaClientes=obtenerListaUsuarios();
    let indice=0;
    let grasaSubcutanea=0;
    for(let i=0; i<mListaClientes.length; i++){
        if(mListaClientes[i][0]==getCliente()){
            indice=i;
        }
    }
    if(mListaClientes[indice][8]=="Masculino"){
        grasaSubcutanea=0.1051 * sumatoriaPliegues + 2.585;
    }else{
        grasaSubcutanea=0.1548 * sumatoriaPliegues + 3.580;
    }
}