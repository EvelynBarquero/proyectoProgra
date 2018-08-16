'use strict';
//10 y 11

const obtenerListaPliegues = () =>{
    let mListaMediciones = JSON.parse(localStorage.getItem('listaPlieguesLS'));
    if(mListaMediciones == null){
        mListaMediciones = [
            ['2017-06-22','23','34', '54','35','35','6', '22', '46',"12","20","116320103"],
            ['2017-07-22','23','34', '54','35','35','6', '22', '46',"13","21","116320103"],
            ['2017-08-22','23','34', '54','35','35','6', '22', '46',"14","21","116320103"],
            ['2017-09-22','23','34', '54','35','35','6', '22', '46',"15","23","116320103"],
            ['2017-10-22','23','34', '54','35','35','6', '22', '46',"16","24","116320103"],

            ['2018-06-22','23','34', '54','35','35','6', '22', '46',"0","0","116320103"],
            ['2018-07-22','23','34', '54','35','35','6', '22', '46',"0","0","116320103"],
            ['2018-08-22','23','34', '54','35','35','6', '22', '46',"0","0","116320103"],
            ['2018-09-22','23','34', '54','35','35','6', '22', '46',"0","0","116320103"],
            ['2018-10-22','23','34', '54','35','35','6', '22', '46',"0","0","116320103"],

        ];
    }

    return mListaMediciones;
};

const registrarPliegues = (paNuevaMedida) =>{
    let mListaMediciones = obtenerListaPliegues();

    mListaMediciones.push(paNuevaMedida);

    localStorage.setItem('listaPlieguesLS', JSON.stringify(mListaMediciones));
}; 

function calcularGSubcutanea(nTricepDerecho,nTricepIzquierdo,nSubescapularDerecho,nSubescapularIzquierdo,nSupraespinalDerecho,nSupraespinalIzquierdo,nAbdominalDerecho,nAbdominalIzquierdo){
    let mListaClientes=obtenerListaUsuarios();
    let sumatoriaPliegues= ((nTricepDerecho+nTricepIzquierdo)/2) + ((nSubescapularDerecho+nSubescapularIzquierdo)/2) + ((nSupraespinalDerecho+nSupraespinalIzquierdo)/2) +((nAbdominalDerecho+nAbdominalIzquierdo)/2);
    let grasaSubcutanea=0;
    let indice=0;
    for(let i=0; i<mListaClientes.length; i++){
        if(mListaClientes[i][0]==getCliente()){
            indice=i;
        }
    }
    if(mListaClientes[indice][8]=="Masculino"){
        grasaSubcutanea=0.1051 * (sumatoriaPliegues + 2.585);
    }else{
        grasaSubcutanea=0.1548 * (sumatoriaPliegues + 3.580);
    }
    return Math.round(grasaSubcutanea);
}

function calcularGMuscular(nTricepDerecho,nTricepIzquierdo,nSubescapularDerecho,nSubescapularIzquierdo,nSupraespinalDerecho,nSupraespinalIzquierdo,nAbdominalDerecho,nAbdominalIzquierdo){
    let sumatoriaPliegues= (((nTricepDerecho+nTricepIzquierdo)/2) + ((nSubescapularDerecho+nSubescapularIzquierdo)/2) + ((nSupraespinalDerecho+nSupraespinalIzquierdo)/2) +((nAbdominalDerecho+nAbdominalIzquierdo)/calcularGSubcutanea(nTricepDerecho,nTricepIzquierdo,nSubescapularDerecho,nSubescapularIzquierdo,nSupraespinalDerecho,nSupraespinalIzquierdo,nAbdominalDerecho,nAbdominalIzquierdo)));
    return Math.round(sumatoriaPliegues);
}

// const sumatoriaPliegues=()=>{
//     let mListaMediciones=obtenerListaPliegues();
//     let sumatoria=0;
//     for(let i=0; i<mListaMediciones.length; i++){
//         if(mListaMediciones[i][12]==getCliente()){
//             for(let j=1; j<10; j++){
//                 sumatoria=sumatoria+mListaMediciones[i][j];
//             }
//         }
//     }
//     return sumatoria;
// }

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
    return grasaSubcutanea;
}

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