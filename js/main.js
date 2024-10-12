// Obtener kla masa en kilogramos
// Selecciones el planeta
// conversion de masa en cada planeta

// Selectores
const inputMassEl = document.querySelector('.input-mass')
const planetOptionEl = document.querySelector('option')
const buttonEl = document.querySelector('.btn')

// Alerta
const alertEl = document.querySelector('.alert-message')

// Mensaje
const textResultEl = document.querySelector('.text-result')
const resultEl = document.querySelector('.result')

buttonEl.addEventListener('click', (e) => {
    if (inputMassEl.value === '') {
        alertEl.textContent = 'Ingrese una masa'
    } else if (planetOptionEl.value === '0') {
        alertEl.textContent = 'Ingrese un planeta';
    }

    if (planetOptionEl.value === '1') {
        console.log("si");
        
    }
    
})