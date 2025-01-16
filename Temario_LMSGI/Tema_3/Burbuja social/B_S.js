function mostrarSeccion(seccion) {
    // Ocultar todas las secciones
    var secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function(sec) {
        sec.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    var seccionMostrar = document.getElementById(seccion);
    if (seccionMostrar) {
        seccionMostrar.style.display = 'block';
    }
}

// Mostrar la sección "inicio" por defecto
mostrarSeccion('inicio');
