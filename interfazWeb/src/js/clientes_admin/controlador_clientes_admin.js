'use strcit';
const imagenFoto = document.querySelector('#imgFoto');
const inputNombre = document.querySelector('#txtNombre');
const inputSegundoNombre = document.querySelector('#txtSegundoNombre');
const inputPrimerApellido = document.querySelector ('#txtPrimerApellido');
const inputSegundoApellido = document.querySelector ('#txtSegundoApellido');
const inputCedula = document.querySelector ('#txtCedula');
const inputFechaNacimiento = document.querySelector ('#txtFechaNacimiento');
const inputSexo = document.querySelector ('#sltSexo');
const inputTelefono = document.querySelector ('#txtTelefono');
const inputContrasenna = document.querySelector ('#txtContrasenna');

const botonRegistrarClientes = document.querySelector('#btnRegistrarClientes');
const botonRegistrar = document.querySelector('#btnRegistrar');
const botonActualizar = document.querySelector('#btnActualizar');

botonActualizar.hidden = true;

function obtenerClientePorCedula (){
    botonRegistrar.hidden = true;
    botonActualizar.hidden = false;

    let sCedula = this.dataset.cedula;
    let cliente = buscarClientePorCedula(sCedula);

    inputNombre.value = cliente[1];
    inputSegundoNombre.value = cliente[2];
    inputPrimerApellido.value = cliente[3];
    inputSegundoApellido.value = cliente[4];
    inputCedula.value = cliente[5];
    inputCedula.disabled = true;

    inputFechaNacimiento.value = cliente[6];
    inputEdad.value = cliente[7];
    inputSexo.option = cliente[8];
    inputTelefono.value = cliente[9];
    inputContrasenna.value = cliente[11];

    if(cliente[0] == ''){
        imagenFoto.src = 'img/user_placeholder.png';
    }else{
        imagenFoto.src = cliente[0];
    }

};

// const crearFormularioRegistro = () =>{
//     window.location=("register_Admin.html");
// }

// botonRegistrar.addEventListener("click", crearFormularioRegistro);



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
};

const limpiarFormulario = () => {
    imagenFoto.src = '../img/ejercicios/user_placeholder.png';
    inputNombre.value = '';
    inputSegundoNombre.value = '';
    inputPrimerApellido.value = '';
    inputSegundoApellido.value = '';
    inputCedula.value = '';
    inputFechaNacimiento.value = '';
    inputSexo.option = '';
    inputTelefono.value = '';
    inputContrasenna.value = '';
};

const obtenerDatosRegistro = () => {
    let aNuevoCliente = [];

    let sImagenUrl = imagenFoto.src;
    let sNombre = inputNombre.value;
    let sSegundoNombre = inputSegundoNombre.value;
    let sPrimerApellido = inputPrimerApellido.value;
    let sSegundoApellido = inputSegundoApellido.value;
    let sCedula = inputCedula.value;
    let dFechaNacimiento = inputFechaNacimiento.value;
    let sSexo = inputSexo.value;
    let nTelefono = inputTelefono.value
    let sContrasenna = inputContrasenna.value
    let nEdad=0;

    aNuevoCliente.push(sImagenUrl, sNombre,sSegundoNombre, sPrimerApellido, sSegundoApellido, sCedula, dFechaNacimiento, nEdad, sSexo, nTelefono, sContrasenna);
    //registrarInstructor(aNuevoInstructor);
    mostrarTablaUsuarios();
    limpiarFormulario();
    
};


const obtenerDatosActualizar = () =>{
    let aUsuarioModificado = [];

    let sImagenUrl = imagenFoto.src;
    let sNombre = inputNombre.value;
    let sSegundoNombre = inputSegundoNombre.value;
    let sPrimerApellido = inputPrimerApellido.value;
    let sSegundoApellido = inputSegundoApellido.value;
    let sCedula = inputCedula.value;
    let dFechaNacimiento = inputFechaNacimiento.value;
    let sSexo = inputSexo.value;
    let nTelefono = inputTelefono.value
    let sContrasenna = inputContrasenna.value


    aUsuarioModificado.push(sImagenUrl, sNombre,sSegundoNombre, sPrimerApellido, sSegundoApellido, sCedula, dFechaNacimiento, nEdad, sSexo, nTelefono, sContrasenna);
    
    //modificarUsuario(aUsuarioModificado);
    mostrarTablaInstructores();
    limpiarFormulario();
    botonActualizar.hidden = true;
    botonRegistrar.hidden = false;
    inputCedula.disabled = false;

};




mostrarTablaUsuarios();
hide();
botonRegistrar.addEventListener('click', obtenerDatosRegistro);
botonActualizar.addEventListener('click', obtenerDatosActualizar);

botonRegistrar .addEventListener('click' , hide);
botonActualizar .addEventListener('click' , hide);



function show() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function hide() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}