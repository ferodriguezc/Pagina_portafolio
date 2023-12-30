function cambiarDiv(seccion) {
    var secciones = ['Sobre_Mi', 'Conocimientos', 'proyectos', 'conctato'];

    secciones.forEach(function (item) {
        var div = document.getElementById(item);
        div.style.display = item === seccion ? 'block' : 'none';
    });
}


// Espera 5 segundos (5000 milisegundos) y luego ejecuta la función
setTimeout(function() {
    // Selecciona los elementos por su clase y agrega una nueva clase para ocultarlos
    document.querySelector('.Animacion_Inicio_1').classList.add('oculto');
    document.querySelector('.Animacion_Inicio_2').classList.add('oculto');
    document.querySelector('.Animacion_Inicio_3').classList.add('oculto');
}, 3000);

