'use strict';

let clienteRutina=getCliente();
let rutina=[];


function mostrarRutina() {
    let tbody = document.querySelector('#tblEjercicios tbody');
    tbody.innerHTML = '';
    let mRutinaRandom=[];
    mRutinaRandom=buscarRutina(clienteRutina);

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
    }
}

mostrarRutina();