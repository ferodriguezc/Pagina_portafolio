function cambiarDiv(seccion) {
    var secciones = ['Sobre_Mi', 'Conocimientos', 'proyectos', 'conctato'];

    secciones.forEach(function (item) {
        var div = document.getElementById(item);
        div.style.display = item === seccion ? 'block' : 'none';
    });
}

function expandir(elemento) {
    var todosLosCuadros = document.querySelectorAll('.cuadro_a');

    todosLosCuadros.forEach(function(cuadro) {
        if (cuadro !== elemento && cuadro.classList.contains('expandido')) {
            cuadro.classList.remove('expandido');
        }
    });

    elemento.classList.toggle('expandido');
}