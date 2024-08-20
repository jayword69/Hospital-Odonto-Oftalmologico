document.getElementById('turno-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    alert(`Turno reservado con éxito para ${nombre}. ¡Nos vemos pronto!`);
});
