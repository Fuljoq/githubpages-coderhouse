document.addEventListener('DOMContentLoaded', () => {
    const dateError = document.querySelector('[data-error="date-error"]');
    const nombreError = document.querySelector('[data-error="nombre-error"]');
    const passwordError = document.querySelector('[data-error="password-error"]');
    const form = document.getElementById('form');
    const contentDiv = document.getElementById('content');
    const nombreInput = document.getElementById('nombre');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        function verificarEdad() {
            const birthdate = document.getElementById('birthdate').value;
            const birthDateNuevo = new Date(birthdate);
            const today = new Date();
            let age = today.getFullYear() - birthDateNuevo.getFullYear();
            console.log(age)
            const monthDifference = today.getMonth() - birthDateNuevo.getMonth();
            const dayDifference = today.getDate() - birthDateNuevo.getDate();

            if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
                age--;
            }

            if (age >= 18) {
                dateError.textContent = '';
                return true;
            } else {
                dateError.textContent = 'Lo sentimos, debes tener al menos 18 años para acceder a este contenido.';
                return false;
            }
        }

        function validarNombre() {
            if (nombreInput.value.trim() === '') {
                nombreError.innerText = 'Complete este campo';
                return false;
            } else {
                nombreError.innerText = '';
                return true;
            }
        }

        function validarPassword() {
            if (passwordInput.value.trim() === '') {
                passwordError.innerText = 'Complete este campo';
                return false;
            } else {
                passwordError.innerText = '';
                return true;
            }
        }

        const esEdadValida = verificarEdad();
        const esNombreValido = validarNombre();
        const esPasswordValido = validarPassword();

        if (esEdadValida && esNombreValido && esPasswordValido) {
            console.log('Los inputs tienen información válida, puedo enviar la data');
            const data = {
                nombre: nombreInput.value.trim(),
                password: passwordInput.value.trim()
            };
            console.log(data);
            contentDiv.style.visibility = 'visible';
        } else {
            console.log('Los inputs no tienen información válida');
        }
let productos = [
    { nombre: 'Vodka', edadMinima: 18 },
    { nombre: 'Whisky', edadMinima: 21 },
    { nombre: 'Cerveza Artesanal', edadMinima: 18 }
  ];
function VerificarProductos() {
    const birthdate = document.getElementById('birthdate').value;
    const birthDateNuevo = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDateNuevo.getFullYear();
    console.log(age)
    const monthDifference = today.getMonth() - birthDateNuevo.getMonth();
    const dayDifference = today.getDate() - birthDateNuevo.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    productos.forEach(producto => {
        const edadMin = producto.edadMinima
        const nombreProd = producto.nombre
        if(age > edadMin){
            const h2 = document.createElement('h2')
            h2.innerText = `Podés tomar ${nombreProd}`
            contentDiv.appendChild(h2)
        }

    });
}
VerificarProductos()
    });
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const esEdadValida = verificarEdad();
    const esNombreValido = validarNombre();
    const esPasswordValido = validarPassword();

    if (esEdadValida && esNombreValido && esPasswordValido) {
        const data = {
            nombre: nombreInput.value.trim(),
            password: passwordInput.value.trim(),
            birthdate: document.getElementById('birthdate').value
        };
        const jsonData = JSON.stringify(data);
        console.log(jsonData);

        contentDiv.style.visibility = 'visible';
    } else {
        console.log('Los inputs no tienen información válida');
    }

    VerificarProductos();
});
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const esEdadValida = verificarEdad();
    const esNombreValido = validarNombre();
    const esPasswordValido = validarPassword();

    if (esEdadValida && esNombreValido && esPasswordValido) {
        const data = {
            nombre: nombreInput.value.trim(),
            password: passwordInput.value.trim(),
            birthdate: document.getElementById('birthdate').value
        };
        localStorage.setItem('formData', JSON.stringify(data));
        console.log('Datos guardados en localStorage:', data);

        contentDiv.style.visibility = 'visible';
    } else {
        console.log('Los inputs no tienen información válida');
    }

    VerificarProductos();
});