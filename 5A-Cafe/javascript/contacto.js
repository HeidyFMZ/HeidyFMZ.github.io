document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("contacto-formulario");
    const mensajeExito = document.getElementById("mensaje-exito");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();  // Evita que la página se recargue al enviar el formulario

        // Mostrar mensaje de éxito
        formulario.style.display = "none"; // Oculta el formulario
        mensajeExito.style.display = "block"; // Muestra el mensaje de éxito

       
    });
});