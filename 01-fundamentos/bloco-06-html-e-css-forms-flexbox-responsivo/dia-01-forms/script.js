const ENVIAR_BUTTON = document.getElementById('enviar');

function enviar() {
    ENVIAR_BUTTON.addEventListener('click', function (event) {
        event.preventDefault();
    });
}
enviar();
