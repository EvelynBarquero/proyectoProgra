'use strict';

const botonRegistrar = document.querySelector('#btnRutina');
mostrarTablaUsuarios();
botonRutina.addEventListener('click', agregarRutina);



function agregarRutina() {
    let mListaEjercicios = []
    mListaEjercicios = obtenerListaUsuarios();


    let mCategorias = ['Pecho', 'Espalda', 'Brazos', 'Abdomen', 'Muslo', 'Pantorrilla'];


    for (i = 0; i < 10; i++) {
        let numero = Math.floor(Math.random() * mCategorias.lenght);
        let categoria = mCategorias [numero];

        for( j=0; j < 2; j++ ){
            let ejercicio = rutinaRandom (categoria); //Se llena la tabla
        }

        eliminarCategoria ();
    }


}






return mListaEjercicios;