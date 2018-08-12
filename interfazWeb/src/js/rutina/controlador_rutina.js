'use strict';

const botonRutina = document.querySelector('#btnRutina');
const NombreCliente = document.querySelector("#txtNombreCliente");
botonRutina.addEventListener('click', agregarRutina);
let sCedula=getCliente();

function agregarRutina() {
    // let mListaEjercicios = []
    // mListaEjercicios = obtenerListaEjercicios();
    let mRutinaRandom = [];
    let mCategorias = ['Pecho', 'Espalda', 'Brazos', 'Abdomen', 'Muslo', 'Pantorrilla'];


    for (let i = 0; i < 5; i++) {
        let numero = Math.floor(Math.random() * mCategorias.length);
        let categoria = mCategorias[numero];

        for (let j = 0; j < 2; j++) {
            let ejercicio = [];
            ejercicio = rutinaRandom(categoria); //Se llena la tabla
            // mRutinaRandom[i].push (ejercicio);
            mRutinaRandom.push (ejercicio);
            

        }
        mCategorias.splice (numero, 1);
    }

    registrarRutina(mRutinaRandom,sCedula);

    let tbody = document.querySelector('#tblEjercicios tbody');
    tbody.innerHTML = '';
    for (let k = 0; k < 10; k++) {

    let fila = tbody.insertRow();

        let celdaFoto = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let celdaCategoria = fila.insertCell();
        let celdaNombreOpcional = fila.insertCell();
        let celdaConfiguracion = fila.insertCell();

        

        celdaNombre.innerHTML = mRutinaRandom[k][0];
        celdaCategoria.innerHTML = mRutinaRandom[k][1];
        celdaNombreOpcional.innerHTML = mRutinaRandom[k][2];


        let imagen = document.createElement('img');
        imagen.classList.add('imagen_tabla');

        let imagenUrl = mRutinaRandom[k][3];

        if (imagenUrl == '') {
            imagenUrl = '../img/ejercicios/user_placeholder.png';
        };
        imagen.src = imagenUrl;
        celdaFoto.appendChild(imagen);


        let botonIconoEditar = document.createElement('a');
        botonIconoEditar.classList.add('fa');
        botonIconoEditar.classList.add('fa-edit');

        let botonIconoBorrar = document.createElement('a');
        botonIconoBorrar.classList.add('fa');
        botonIconoBorrar.classList.add('fa-trash');
        botonIconoEditar.addEventListener('click' , eliminar);

        celdaConfiguracion.appendChild(botonIconoEditar);
        celdaConfiguracion.appendChild(botonIconoBorrar);
    }
   
}

// eliminar();


