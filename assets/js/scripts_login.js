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
/* validaciones de login y registro */

document.getElementById("contenedor__login-register").addEventListener("submit", function (event) {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;


});
document.getElementById("contenedor__login-register").addEventListener("submit", function (event) {
    // Obtener los valores de los campos del formulario

    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;

    var contraseñaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+,.?":{}|<>]).{8,}$/;

    if (nombre === "" || correo === "" || contraseña === "") {
        event.preventDefault();
        document.getElementById("mensajeError").innerHTML = "Todos los campos son obligatorios.";
    } else if (!contraseñaRegex.test(contraseña)) { // Validar la contraseña con la expresión regular
        event.preventDefault();
        alert("La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.");
    }

    if (nombre !== "" && email !== "" && contraseña !== "" && fechaNacimiento !== "" &&
        contraseñaRegex.test(contraseña) && edad >= edadMinima && fechaNacimientoDate < fechaActual &&
        fechaRecogidaDate >= fechaActual && fechaDevolucionDate >= fechaActual && fechaDevolucionDate > fechaRecogidaDate) {
        // Redirigir a otro HTML después de enviar exitosamente
        alert("Registro exitoso. Serás redirigido.");
        abrirEnNuevaVentanaCerrarActual("sitio2.html"); // Llama a la función abrirEnNuevaVentanaCerrarActual con el nombre del archivo HTML de destino
    }

    // Función para abrir una nueva ventana y cerrar la actual
    function abrirEnNuevaVentanaCerrarActual(url) {
        var nuevaVentana = window.open(url, '_blank');
        nuevaVentana.focus();
        window.close(); // Cierra la ventana actual
    }

    // Establecer la fecha máxima en el campo de fecha de nacimiento
    var fechaMaxima = new Date().toISOString().split('T')[0];
    document.getElementById("fechaNacimiento").setAttribute("max", fechaMaxima);

});