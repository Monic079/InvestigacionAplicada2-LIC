function validarCampo(campo) {
    const nombreInput = document.getElementById('nombre');
    const edadInput = document.getElementById('edad');
    const emailInput = document.getElementById('email');

    const checkNombre = document.getElementById('check-nombre');
    const checkEdad = document.getElementById('check-edad');
    const checkEmail = document.getElementById('check-email');

    if (campo === 'nombre') {
        const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
        if (regex.test(nombreInput.value.trim())) {
            checkNombre.style.display = 'flex';
            checkNombre.textContent = '✔';
        } else {
            alert("El nombre solo debe contener letras.");
            nombreInput.value = '';
            checkNombre.style.display = 'none';
        }
    }

    if (campo === 'edad') {
        const edadVal = parseInt(edadInput.value);
        if (!isNaN(edadVal) && edadVal > 0 && edadVal < 120) {
            checkEdad.style.display = 'flex';
            checkEdad.textContent = '✔';
        } else {
            alert("La edad debe ser un número válido entre 1 y 119.");
            edadInput.value = '';
            checkEdad.style.display = 'none';
        }
    }

    if (campo === 'email') {
        const regex = /^[^\s@]+@(gmail|yahoo|hotmail|outlook)\.(com|es)$/i;
        if (regex.test(emailInput.value.trim())) {
            checkEmail.style.display = 'flex';
            checkEmail.textContent = '✔';
        } else {
            alert("El email debe ser válido (ej: usuario@gmail.com, usuario@yahoo.com).");
            emailInput.value = '';
            checkEmail.style.display = 'none';
        }
    }

    // Mostrar botón adoptar si todos los campos están validados
    if (
        checkNombre.textContent === '✔' &&
        checkEdad.textContent === '✔' &&
        checkEmail.textContent === '✔'
    ) {
        document.getElementById('adoptar-btn').style.display = 'inline-block';
    }
}

function adoptarGatito() {
    // Lista de imágenes
    const gatitos = [
        'img/gato1.png',
        'img/gato2.png',
        'img/gato3.png',
        'img/gato4.png'
    ];

    // Elegir una aleatoria
    const imgAleatoria = gatitos[Math.floor(Math.random() * gatitos.length)];

    // Cambiar la imagen y mostrar el div
    const imgElement = document.getElementById('gatito-img');
    imgElement.src = imgAleatoria;

    document.getElementById('success-message').style.display = 'block';

    // Reproducir sonido
    const sonido = document.getElementById('adopt-sound');
    sonido.currentTime = 0;
    sonido.play();

    // Ocultar botón adoptar
    document.getElementById('adoptar-btn').style.display = 'none';
}
