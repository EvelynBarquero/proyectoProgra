'use strict';


const obtenerListaUsuarios = () =>{
    let mListaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLS'));
    if(mListaUsuarios == null){
        mListaUsuarios = [
            ['../img/ejercicios/3.jpg','Pull ups','Brazos', ''],
            ['../img/ejercicios/squats.jpeg', 'Squats', 'Piernas', ''],
            ['../img/ejercicios/remo.jpg', 'Remo','Espalda', ''],
            ['../img/ejercicios/1.jpg', 'Flexiones','Pecho', 'Lagartijas']
        ];
    }

    return mListaUsuarios;
};

const registrarUsuario = (paNuevoUsuario) =>{
    let mListaUsuarios = obtenerListaUsuarios();

    mListaUsuarios.push(paNuevoUsuario);

    localStorage.setItem('listaUsuariosLS', JSON.stringify(mListaUsuarios));
}; 


function verForm(){
    var x = document.getElementById("myForm");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}