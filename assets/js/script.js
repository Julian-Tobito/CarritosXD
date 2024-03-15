var mostrador = document.getElementById("mostrador");
var seleccion = document.getElementById("seleccion");
var imgSeleccionada = document.getElementById("img");
var modeloSeleccionado = document.getElementById("modelo");
var descripSeleccionada = document.getElementById("descripcion");
var precioSeleccionado = document.getElementById("precio1");



function cargar(item) {
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";

    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

    modeloSeleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;

    descripSeleccionada.innerHTML = "Descripción del modelo";

    precioSeleccionado.innerHTML = item.getElementsByTagName("span")[0].innerHTML;


}

function quitarBordes() {
    var items = document.getElementsByClassName("item");
    for (i = 0; i < items.length; i++) {
        items[i].style.border = "none";
    }
}

function cerrar() {
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}



document.getElementById('marca').addEventListener('change', function () {
    var marcaSeleccionada = this.value;
    if (marcaSeleccionada === 'Marca1') {
        document.getElementById('Renault').scrollIntoView({ behavior: 'smooth' });
    } else if (marcaSeleccionada === 'Marca2') {

        document.getElementById('Chevrolet').scrollIntoView({ behavior: 'smooth' });
    } else if (marcaSeleccionada === 'Marca3') {

        document.getElementById('Mazda').scrollIntoView({ behavior: 'smooth' });
    }
});






