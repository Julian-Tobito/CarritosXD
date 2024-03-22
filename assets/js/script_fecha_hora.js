document.getElementById("form_fecha_hora").addEventListener("submit", function (event) {

    var fechaActual = new Date();

    // Validar fecha de recogida
    var fechaRecogida = document.getElementById("fechaRecogida").value;
    var fechaRecogidaDate = new Date(fechaRecogida);
    if (fechaRecogidaDate < fechaActual) {
        event.preventDefault();
        alert("La fecha de recogida no puede estar en el pasado.");
    }

    // Validar fecha de devolución
    var fechaDevolucion = document.getElementById("fechaDevolucion").value;
    var fechaDevolucionDate = new Date(fechaDevolucion);
    if (fechaDevolucionDate < fechaActual) {
        event.preventDefault();
        alert("La fecha de devolución no puede estar en el pasado.");
    }

    // Validar que la fecha de devolución sea posterior a la fecha de recogida
    if (fechaDevolucionDate <= fechaRecogidaDate) {
        event.preventDefault();
        alert("La fecha de devolución debe ser posterior a la fecha de recogida.");
    }
});