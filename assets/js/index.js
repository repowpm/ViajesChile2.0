

document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('#carouselExampleIndicators');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000,  // Cambiar cada 3 segundos
        ride: 'carousel' // Iniciar automáticamente
    });

    myCarousel.addEventListener('mouseenter', function () {
        carousel.pause();
    });

    myCarousel.addEventListener('mouseleave', function () {
        carousel.cycle();
    });
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })    
    var form = document.querySelector(".contact-form");
    var submitButton = document.getElementById("btn-enviar");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Previene el envío del formulario
        alert("Tu mensaje fue enviado correctamente, pronto te contactaremos");
        form.reset(); // Opcional: Limpia el formulario después de mostrar la alerta
    });
});


