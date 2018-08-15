// WEB03 Fundamentos de Programación Web G1 (2-2018) 
// Proyecto final segundo cuatrimestre 2018
// Evelyn Barquero - Javier Mendez

'use strcit';

//Inputs 
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

// Variables locales
let sMedidasCliente="";
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


// Construye la pagina de las mediciones. El set guarda en un JSON la cedula del cliente
function costruirMediciones(){
    sMedidasCliente = this.dataset.cedula;
    setcliente(sMedidasCliente);
    costruirMedicionesCliente(sMedidasCliente);
}

// Construye la pagina de la rutina. El set guarda en un JSON la cedula del cliente
function construirRutina(){
    let sRutinaCliente = this.dataset.cedula;
    setcliente(sRutinaCliente);
    construirRutinaCliente();

}

// Muestra todos los usuarios registrados en formato de tabla
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

        celdaCedula.innerHTML = mListaUsuarios[i][0];
        celdaNombre.innerHTML = mListaUsuarios[i][2];
        celdaSegundoNombre.innerHTML = mListaUsuarios[i][3];
        celdaPrimerApellido.innerHTML = mListaUsuarios[i][4];
        celdaSegundoApellido.innerHTML = mListaUsuarios[i][5];
        celdaNacimiento.innerHTML = mListaUsuarios[i][6];
        celdaEdad.innerHTML=mListaUsuarios[i][7];
        celdaSexo.innerHTML=mListaUsuarios[i][8];
        celdaTelefono.innerHTML = mListaUsuarios[i][9];

        let imagen = document.createElement('img');
        imagen.classList.add('imagen_tabla');

        let imagenUrl = mListaUsuarios[i][10];
        
        if(imagenUrl == ''){
            imagenUrl = "../img/ejercicios/user_placeholder.png";
        };

        imagen.src = imagenUrl;
        
        celdaFoto.appendChild(imagen);
        let botonMediciones = document.createElement('a');
        botonMediciones.classList.add('fa');
        botonMediciones.classList.add('fa-area-chart');
        botonMediciones.dataset.cedula = mListaUsuarios[i][0];

        let botonRutina = document.createElement('a');
        botonRutina.classList.add('fa');
        botonRutina.classList.add('fa-book');
        botonRutina.dataset.cedula = mListaUsuarios[i][0];
        botonMediciones.addEventListener('click', costruirMediciones);

        botonRutina.addEventListener('click', construirRutina)
        celdaConfiguracion.appendChild(botonMediciones);
        celdaConfiguracion.appendChild(botonRutina);
    };
};


mostrarTablaUsuarios();

