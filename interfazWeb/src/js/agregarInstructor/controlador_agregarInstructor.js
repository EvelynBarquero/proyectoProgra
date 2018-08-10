'use strict';

// const inputImagen = document.querySelector('#btnSeleccionarImagen');
const imagenFoto = document.querySelector('#imgFoto');
const inputNombre = document.querySelector('#txtNombre');
const inputSegundoNombre = document.querySelector('#txtSegundoNombre');
const inputPrimerApellido = document.querySelector ('#txtPrimerApellido');
const inputSegundoApellido = document.querySelector ('#txtSegundoApellido');
const inputCedula = document.querySelector ('#txtCedula');
const inputFechaNacimiento = document.querySelector ('#txtFechaNacimiento');
const inputEdad = document.querySelector ('#txtEdad');
const inputSexo = document.querySelector ('#sltSexo');
const inputTelefono = document.querySelector ('#txtTelefono');
const inputUsuario = document.querySelector ('#txtUsuario');
const inputContrasenna = document.querySelector ('#txtContrasenna');

const botonRegistrar = document.querySelector('#btnRegistrar');
const botonActualizar = document.querySelector('#btnActualizar');

let sImagenUrl;
let sNombre;
let sSegundoNombre;
let sPrimerApellido;
let sSegundoApellido;
let sCedula;
let dFechaNacimiento;
let nEdad;
let sSexo="";
let nTelefono;
let sUsuario;
let sContrasenna;

botonActualizar.hidden = true;

function obtenerInstructorPorCedula (){
    botonRegistrar.hidden = true;
    botonActualizar.hidden = false;

    let sCedula = this.dataset.cedula;
    let instructor = buscarInstructorPorCedula(sCedula);

    inputNombre.value = instructor[0];
    inputSegundoNombre.value = instructor[1];
    inputPrimerApellido.value = instructor[2];
    inputSegundoApellido.value = instructor[3];
    inputCedula.value = instructor[4];
    inputCedula.disabled = true;

    inputFechaNacimiento.value = instructor[5];
    inputSexo.value = instructor[7];
    inputTelefono.value = instructor[8];
    inputContrasenna.value = instructor[10];

    if(instructor[11] == ''){
        imagenFoto.src = 'img/user_placeholder.png';
    }else{
        imagenFoto.src = instructor[11];
    }

};

const mostrarTablaInstructores = () => {
    let mListaInstructores = obtenerListaInstructores();
    let tbody = document.querySelector('#tblInstructores tbody');
    tbody.innerHTML = '';

    for (let i = 0; i < mListaInstructores.length; i++) {
        let fila = tbody.insertRow();

        let celdaFoto = fila.insertCell();
        let celdaNombre = fila.insertCell();
        let celdaSegundoNombre = fila.insertCell();
        let celdaPrimerApellido = fila.insertCell();
        let celdaSegundoApellido = fila.insertCell();
        let celdaCedula = fila.insertCell();
        let celdaFechaNacimiento = fila.insertCell();
        let celdaEdad = fila.insertCell();
        let celdaSexo = fila.insertCell();
        let celdaTelefono = fila.insertCell();
        //let celdaUsuario = fila.insertCell();
        let celdaContrasenna = fila.insertCell();
        let celdaConfiguracion = fila.insertCell();

       

        // celdaFoto.innerHTML = mListaInstructores[i][0];
        celdaNombre.innerHTML = mListaInstructores[i][0];
        celdaSegundoNombre.innerHTML = mListaInstructores[i][1];
        celdaPrimerApellido.innerHTML = mListaInstructores[i][2];
        celdaSegundoApellido.innerHTML = mListaInstructores[i][3];
        celdaCedula.innerHTML = mListaInstructores[i][4];
        celdaFechaNacimiento.innerHTML = mListaInstructores[i][5];
        celdaEdad.innerHTML = mListaInstructores[i][6];
        celdaSexo.innerHTML = mListaInstructores[i][7];
        celdaTelefono.innerHTML = mListaInstructores[i][8];
        //celdaUsuario.innerHTML = mListaInstructores[i][9];
        celdaContrasenna.innerHTML = mListaInstructores[i][10];

       
        let imagen = document.createElement('img');
        imagen.classList.add('imagen_tabla');

        let imagenUrl = mListaInstructores[i][11];

        if (imagenUrl == '') {
            imagenUrl = '../img/ejercicios/user_placeholder.png';
        };

        imagen.src = imagenUrl;

        celdaFoto.appendChild(imagen);

        let botonIconoEditar = document.createElement('a');
        botonIconoEditar.classList.add('fa');
        botonIconoEditar.classList.add('fa-edit');
        botonIconoEditar.dataset.cedula = mListaInstructores[i][0];

        botonIconoEditar.addEventListener('click' , obtenerInstructorPorCedula);
        botonIconoEditar .addEventListener('click' , show);

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
    inputSexo.value = 'Vacio';
    inputTelefono.value = '';
    inputContrasenna.value = '';
};



const obtenerDatosRegistro = () => {
    let aNuevoInstructor = [];

    sImagenUrl = imagenFoto.src;
    sNombre = inputNombre.value;
    sSegundoNombre = inputSegundoNombre.value;
    sPrimerApellido = inputPrimerApellido.value;
    sSegundoApellido = inputSegundoApellido.value;
    sCedula = inputCedula.value;
    dFechaNacimiento = inputFechaNacimiento.value;
    nEdad = calcularEdad(dFechaNacimiento);
    sSexo = inputSexo.value;
    nTelefono = inputTelefono.value
    //sUsuario = inputUsuario.value
    sContrasenna = inputContrasenna.value

    let bUsuario=false;
    let inputsInvalidos=true;
    inputsInvalidos = validarInputs();

    if(inputsInvalidos==true){
        swal({
            type : "error",
            title: "Informacion invalida",
            text: "Por favor verifique los campos en rojo e intente de nuevo",
            confirmButtonText: "Entendido"

        })
        show();
    }
    else{
        aNuevoInstructor.push(sNombre,sSegundoNombre, sPrimerApellido, sSegundoApellido, sCedula, dFechaNacimiento, nEdad, sSexo, nTelefono, sUsuario, sContrasenna, sImagenUrl);
        registrarInstructor(aNuevoInstructor);
        mostrarTablaInstructores();
        limpiarFormulario();
    }
    
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
    let nEdad = calcularEdad(dFechaNacimiento);
    let sSexo = inputSexo.value;
    let nTelefono = inputTelefono.value
    let sUsuario = inputUsuario.value
    let sContrasenna = inputContrasenna.value


    aUsuarioModificado.push(sNombre,sSegundoNombre, sPrimerApellido, sSegundoApellido, sCedula, dFechaNacimiento, nEdad, sSexo, nTelefono, sUsuario, sContrasenna, sImagenUrl );
    
    modificarUsuario(aUsuarioModificado);
    mostrarTablaInstructores();
    limpiarFormulario();
    botonActualizar.hidden = true;
    botonRegistrar.hidden = false;
    inputCedula.disabled = false;

};


mostrarTablaInstructores();
botonRegistrar.addEventListener('click', obtenerDatosRegistro);
botonActualizar.addEventListener('click', obtenerDatosActualizar);

botonRegistrar .addEventListener('click' , hide);
botonActualizar .addEventListener('click' , hide);



function LimpiarYMostrar(){
    show();
    limpiarFormulario();
}
// --------------------------------------------------

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

function validarInputs(){
    let bError=false;
    let regexSoloLetras = /^[a-zA-Z]+$/;
    let regexSoloDigitos = /^[0-9]+$/;

    //Valida el Nombre
    if(sNombre == "" || regexSoloLetras.test(sNombre)==false){
        bError = true;
        inputNombre.classList.add("input-error");
    }else{
        inputNombre.classList.remove("input-error");
    }

    //Valida el segundo Nombre
    if(sSegundoNombre!="" && regexSoloLetras.test(sSegundoNombre)==false){
        bError = true;
        inputSegundoNombre.classList.add("input-error");
    }else{
            inputSegundoNombre.classList.remove("input-error");
    }

    //valida el Primer Apellido
    if(sPrimerApellido == "" || regexSoloLetras.test(sPrimerApellido)==false){
        bError = true;
        inputPrimerApellido.classList.add("input-error");
    }else{
        inputPrimerApellido.classList.remove("input-error");
    }

    //valida el Segundo Apellido
    if(sSegundoApellido == "" || regexSoloLetras.test(sSegundoApellido)==false){
        bError = true;
        inputSegundoApellido.classList.add("input-error");
    }else{
        inputSegundoApellido.classList.remove("input-error");
    }
    
    //valida la cedula 
    if(sCedula=="" || regexSoloDigitos.test(sCedula)==false){
        bError = true;
        inputCedula.classList.add("input-error");
    }else{
        inputCedula.classList.remove("input-error");
    }

    //valida el sexo 
    if(sSexo==""){
        bError = true;
        inputSexo.classList.add("input-error");
    }else{
        inputSexo.classList.remove("input-error");
    }

    //valida la fecha - To be fix
    if(dFechaNacimiento==""){
        bError = true;
        inputFechaNacimiento.classList.add("input-error");
    }else{
        inputFechaNacimiento.classList.remove("input-error");
    }

    //valida el numero de telefono
    if(nTelefono== "" || regexSoloLetras.test(nTelefono)==true){
        bError = true;
        inputTelefono.classList.add("input-error");
    }else{
        inputTelefono.classList.remove("input-error");
    }

    //valida el contrasenna
    if(sContrasenna == ""){
        bError = true;
        inputContrasenna.classList.add("input-error");
    }else{
        inputContrasenna.classList.remove("input-error");
    }
    return bError;

};


