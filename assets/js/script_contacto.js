/* validaciones de contacto */

document.getElementById("form__contacto").addEventListener("submit", function (event) {

    // Obtener los valores de los campos del formulario

    var nombreCon = document.getElementById("nombres").value;
    var apellidosCon = document.getElementById("apellidos").value;
    var telefonoCon = document.getElementById("telefono").value;
    var emailCon = document.getElementById("email").value;
    var mensajeCon = document.getElementById("mensaje").value;

    if (nombreCon === "" || apellidosCon === "" || telefonoCon === "" || emailCon === "" || mensajeCon === "") {
        event.preventDefault();
        document.getElementById("mensajeError").innerHTML = "Todos los campos son obligatorios.";

    }

    // Limpiar campos después de enviar si todo es válido
    if (nombreCon !== "" && apellidosCon !== "" && telefonoCon !== "" && emailCon !== "" && mensajeCon !== "") {
        // Redirigir a otro HTML después de enviar exitosamente
        alert("Contacto exitoso. Serás redirigido.");
        abrirEnNuevaVentanaCerrarActual("index.html"); // Llama a la función abrirEnNuevaVentanaCerrarActual con el nombre del archivo HTML de destino
    }

    // Función para abrir una nueva ventana y cerrar la actual
    function abrirEnNuevaVentanaCerrarActual(url) {
        var nuevaVentana = window.open(url, '_blank');
        nuevaVentana.focus();
        window.close(); // Cierra la ventana actual
    }


});