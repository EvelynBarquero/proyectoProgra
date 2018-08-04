'use strcit';

const botonRegistrar = document.querySelector('#btnRegistrar');

const crearFormularioRegistro = () =>{
    window.location=("register_Admin.html");
}

botonRegistrar.addEventListener("click", crearFormularioRegistro);

const mostrarTablaUsuarios = () =>{
    let mListaUsuarios = obtenerListaUsuarios();
    let tbody = document.querySelector('#tblUsuarios tbody');
    tbody.innerHTML = '';

    for(let i = 0; i < mListaUsuarios.length; i++){
        let fila = tbody.insertRow();
        

        let celdaFoto = fila.insertCell();
        let celdaCedula = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let celdaSegundoNombre = fila.insertCell();
        let celdaPrimerApellido = fila.insertCell();
        let celdaSegundoApellido = fila.insertCell();
        let celdaSexo = fila.insertCell();
        let celdaEdad = fila.insertCell();
        let celdaNacimiento = fila.insertCell();
        let celdaTelefono = fila.insertCell();
        let celdaRutina = fila.insertCell();
        let celdaConfiguracion = fila.insertCell();

        celdaCedula.innerHTML = mListaUsuarios[i][0];
        celdaNombre.innerHTML = mListaUsuarios[i][2];
        celdaSegundoNombre.innerHTML = mListaUsuarios[i][3];
        celdaPrimerApellido.innerHTML = mListaUsuarios[i][4];
        celdaSegundoApellido.innerHTML = mListaUsuarios[i][5];
        celdaSexo.innerHTML=mListaUsuarios[i][8];
        celdaEdad.innerHTML=mListaUsuarios[i][7];
        celdaNacimiento.innerHTML = mListaUsuarios[i][6];
        celdaTelefono.innerHTML = mListaUsuarios[i][9];

        let imagen = document.createElement('img');
        imagen.classList.add('imagen_tabla');

        let imagenUrl = mListaUsuarios[i][10];
        
        if(imagenUrl == ''){
            imagenUrl = "../img/ejercicios/user_placeholder.png";
        };

        imagen.src = imagenUrl;
        
        celdaFoto.appendChild(imagen);

        let botonIconoEditar = document.createElement('a');
        botonIconoEditar.classList.add('fa');
        botonIconoEditar.classList.add('fa-edit');
        botonIconoEditar.dataset.cedula = mListaUsuarios[i][0];

        // botonIconoEditar.addEventListener('click' , obtenerInstructorPorCedula);
        // botonIconoEditar .addEventListener('click' , show);

        celdaConfiguracion.appendChild(botonIconoEditar);
    };
}

mostrarTablaUsuarios();
