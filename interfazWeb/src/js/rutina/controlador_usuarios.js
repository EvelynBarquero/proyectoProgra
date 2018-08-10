'use strict';

const botonRutina = document.querySelector('#btnRutina');
botonRutina.addEventListener('click', agregarRutina);



function agregarRutina() {
    let mListaEjercicios = []
    mListaEjercicios = obtenerListaEjercicios();


    let mCategorias = ['Pecho', 'Espalda', 'Brazos', 'Abdomen', 'Muslo', 'Pantorrilla'];


    for (i = 0; i <= 10; i++) {
        let numero = Math.floor(Math.random() * mCategorias.lenght);
        let categoria = mCategorias[numero];

        for (j = 0; j < 2; j++) {
            let ejercicio = rutinaRandom(categoria); //Se llena la tabla
            return ejercicio;
        }

        // function mostrarTablaEjercicios () {
        let tbody = document.querySelector('#tblEjercicios tbody');
        tbody.innerHTML = '';

        // for (let k = 0; k < mListaEjercicios.length; k++) {
            let fila = tbody.insertRow();

            let celdaFoto = fila.insertCell();
            let celdaNombre = fila.insertCell();
            let celdaCategoria = fila.insertCell();
            let celdaNombreOpcional = fila.insertCell();

            celdaNombre.innerHTML = mListaEjercicios[k][0];
            celdaCategoria.innerHTML = mListaEjercicios[k][1];
            celdaNombreOpcional.innerHTML = mListaEjercicios[k][2];

            let imagen = document.createElement('img');
            imagen.classList.add('imagen_tabla');

            let imagenUrl = mListaEjercicios[k][3];

            if (imagenUrl == '') {
                imagenUrl = '../img/ejercicios/user_placeholder.png';
            };

            imagen.src = imagenUrl;

            celdaFoto.appendChild(imagen);


        // };
        // };



        eliminarCategoria();
        mostrarTablaEjercicios();

    }

    return mListaEjercicios;
}