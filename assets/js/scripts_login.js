//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

//FUNCIONES

function anchoPage() {

    if (window.innerWidth > 850) {
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    } else {
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
    }
}

anchoPage();


function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "10px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.opacity = "0";
    } else {
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "none";
    }
}

function register() {
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }
}

/* validaciones de logueo */

document.getElementById("formulario__login").addEventListener("submit", function (event) {

    // Obtener los valores de los campos del formulario

    var correoLog = document.getElementById("email1").value;
    var contraseñaLog = document.getElementById("contraseña1").value;

    // Expresión regular para validar la contraseña
    var contraseñaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+,.?":{}|<>]).{8,}$/;


    if (correoLog === "" || contraseñaLog === "") {
        event.preventDefault();
        document.getElementById("mensajeError").innerHTML = "Todos los campos son obligatorios.";

    } else if (!contraseñaRegex.test(contraseñaLog)) { // Validar la contraseña con la expresión regular
        event.preventDefault();
        alert("La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.");
    }

    // Limpiar campos después de enviar si todo es válido
    if (correoLog !== "" && contraseñaLog !== "" && contraseñaRegex.test(contraseñaLog)) {
        // Redirigir a otro HTML después de enviar exitosamente
        alert("Inicio exitoso. Serás redirigido.");
        abrirEnNuevaVentanaCerrarActual("index.html"); // Llama a la función abrirEnNuevaVentanaCerrarActual con el nombre del archivo HTML de destino
    }

    // Función para abrir una nueva ventana y cerrar la actual
    function abrirEnNuevaVentanaCerrarActual(url) {
        var nuevaVentana = window.open(url, '_blank');
        nuevaVentana.focus();
        window.close(); // Cierra la ventana actual
    }


});


/* validaciones de registro */

document.getElementById("formulario__register").addEventListener("submit", function (event) {

    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("email").value;
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    // Expresión regular para validar la contraseña
    var contraseñaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+,.?":{}|<>]).{8,}$/;


    if (nombre === "" || correo === "" || contraseña === "" || usuario === "") {
        event.preventDefault();
        document.getElementById("mensajeError").innerHTML = "Todos los campos son obligatorios.";

    } else if (!contraseñaRegex.test(contraseña)) { // Validar la contraseña con la expresión regular
        event.preventDefault();
        alert("La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.");
    }

    // Limpiar campos después de enviar si todo es válido
    if (nombre !== "" && correo !== "" && contraseña !== "" && contraseñaRegex.test(contraseña)) {
        // Redirigir a otro HTML después de enviar exitosamente
        alert("Registro exitoso. Serás redirigido.");
        abrirEnNuevaVentanaCerrarActual("index.html"); // Llama a la función abrirEnNuevaVentanaCerrarActual con el nombre del archivo HTML de destino
    }

    // Función para abrir una nueva ventana y cerrar la actual
    function abrirEnNuevaVentanaCerrarActual(url) {
        var nuevaVentana = window.open(url, '_blank');
        nuevaVentana.focus();
        window.close(); // Cierra la ventana actual
    }

});


