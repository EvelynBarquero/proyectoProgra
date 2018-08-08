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
const outputNumeroClientes = document.querySelector("txtNumeroClientes");

const botonRegistrarClientes = document.querySelector('#btnRegistrarClientes');
const botonRegistrar = document.querySelector('#btnRegistrar');
const botonActualizar = document.querySelector('#btnActualizar');

let sImagenUrl = "";
let sNombre = "";
let sSegundoNombre = "";
let sPrimerApellido = "";
let sSegundoApellido = "";
let sCedula = "";
let dFechaNacimiento = "";
let sSexo = "";
let nTelefono = 0;
let sContrasenna = "";
let nEdad=0

botonActualizar.hidden = true;

function obtenerClientePorCedula (){
    botonRegistrar.hidden = true;
    botonActualizar.hidden = false;

    let sCedula = this.dataset.cedula;
    let cliente = buscarClientePorCedula(sCedula);

    inputNombre.value = cliente[2];
    inputSegundoNombre.value = cliente[3];
    inputPrimerApellido.value = cliente[4];
    inputSegundoApellido.value = cliente[5];
    inputCedula.value = cliente[0];
    inputCedula.disabled = true;
    inputFechaNacimiento.value = cliente[6];
    inputSexo.option = cliente[7];
    inputTelefono.value = cliente[9];
    inputContrasenna.value = cliente[1];

    if(cliente[10] == ''){
        imagenFoto.src = '"./img/ejercicios/user_placeholder.png"';
    }else{
        imagenFoto.src = cliente[10];
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
        let celdaConfiguracion = fila.insertCell();
        let celdaMediciones = fila.insertCell();

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

        let botonMediciones = document.createElement('a');
        botonMediciones.classList.add('fa');
        botonMediciones.classList.add('fa-area-chart');

        let botonRutina = document.createElement('a');
        botonRutina.classList.add('fa');
        botonRutina.classList.add('fa-book');

        botonMediciones.dataset.cedula = mListaUsuarios[i][0];

        botonIconoEditar.addEventListener('click' , obtenerClientePorCedula);
        botonIconoEditar .addEventListener('click' , show);

        celdaConfiguracion.appendChild(botonIconoEditar);
        celdaConfiguracion.appendChild(botonMediciones);
        celdaConfiguracion.appendChild(botonRutina);
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
    // let aNuevoCliente = [];

    sImagenUrl = imagenFoto.src;
    sNombre = inputNombre.value;
    sSegundoNombre = inputSegundoNombre.value;
    sPrimerApellido = inputPrimerApellido.value;
    sSegundoApellido = inputSegundoApellido.value;
    sCedula = inputCedula.value;
    dFechaNacimiento = inputFechaNacimiento.value;
    sSexo = inputSexo.value;
    nTelefono = inputTelefono.value
    sContrasenna = inputContrasenna.value
    nEdad=calcularEdad(dFechaNacimiento);

    let bUsuario=false;
    let inputsInvalidos=true;
    inputsInvalidos = validarInputs();
    //bUsuario=validarUsuario()
    
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
        let nuevoUsuario=[];
        nuevoUsuario.push(sCedula,sContrasenna,sNombre,sSegundoNombre,sPrimerApellido,sSegundoApellido,dFechaNacimiento,nEdad,sSexo,nTelefono,sImagenUrl,'User');
        registrarUsuario(nuevoUsuario);
        limpiarFormulario();
    }  
    
    mostrarTablaUsuarios();
    mostrarNumeroClientes();
    
};


const obtenerDatosActualizar = () =>{
    let aUsuarioModificado = [];

    sImagenUrl = imagenFoto.src;
    sNombre = inputNombre.value;
    sSegundoNombre = inputSegundoNombre.value;
    sPrimerApellido = inputPrimerApellido.value;
    sSegundoApellido = inputSegundoApellido.value;
    sCedula = inputCedula.value;
    dFechaNacimiento = inputFechaNacimiento.value;
    sSexo = inputSexo.value;
    nTelefono = inputTelefono.value
    sContrasenna = inputContrasenna.value
    nEdad=calcularEdad(dFechaNacimiento);


    aUsuarioModificado.push(sNombre,sSegundoNombre, sPrimerApellido, sSegundoApellido, sCedula, dFechaNacimiento, nEdad, sSexo, nTelefono, sContrasenna, sImagenUrl, 'user');
    
    modificarCliente(aUsuarioModificado);
    mostrarTablaUsuarios();
    limpiarFormulario();
    botonActualizar.hidden = true;
    botonRegistrar.hidden = false;
    inputCedula.disabled = false;

};
const mostrarNumeroClientes = () =>{
    let numeroClientes=determinarNumeroClientes();
    let dDiv = document.querySelector("#txtNumeroClientes");
    dDiv.innerHTML=numeroClientes;
}


mostrarNumeroClientes();
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