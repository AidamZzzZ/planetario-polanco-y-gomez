// Obtener kla masa en kilogramos
// Selecciones el planeta
// conversion de masa en cada planeta

// Selectores
const inputMassEl = document.querySelector('.input-mass')
const planetOptionEl = document.querySelector('select')
const buttonEl = document.querySelector('.btn')

// Alerta
const alertEl = document.querySelector('.alert-message')

// Resultado
const textResultEl = document.querySelector('.text-result')
const resultEl = document.querySelector('.result')

// Imagen
const imgEl = document.querySelector('img')

// Container
const containerEl = document.querySelector('.container')

buttonEl.addEventListener('click', (e) => {
    let valueMass = parseFloat(inputMassEl.value);
    let result
    if (inputMassEl.value === '') {
        alertEl.textContent = 'Ingrese una masa'
    } else if (planetOptionEl.value === '0') {
        alertEl.textContent = 'Ingrese un planeta';
    } else if (planetOptionEl.value === '1') {
        alertEl.textContent = '';
        result = Math.floor(valueMass * 3.7);
        resultEl.textContent = result + ".00 N"
        textResultEl.textContent = "Mercurio, el planeta más cercano al Sol, era conocido desde la antigüedad debido a su brillo y a su posición en el cielo. Sin embargo, entender sus características precisas requirió de avances tecnológicos y observaciones más detalladas."
        imgEl.src = './images/mercury.png'
        containerEl.style.visibility = 'visible'
        containerEl.style.opacity = '1'
    } else if (planetOptionEl.value === '2') {
        alertEl.textContent = '';
        result = Math.floor(valueMass * 8.87)
        resultEl.textContent = result + ".00 N"
        textResultEl.textContent = "Al igual que Mercurio, Venus era conocido desde la antigüedad debido a su gran brillo en el cielo nocturno. De hecho, después de la Luna, es el objeto natural más brillante que podemos ver desde la Tierra."
        imgEl.src = './images/venus.png'
        containerEl.style.visibility = 'visible'
        containerEl.style.opacity = '1'
    } else if (planetOptionEl.value === '3') {
        alertEl.textContent = ''; 
        result = Math.floor(valueMass * 9.807)
        resultEl.textContent = result + ".00 N"
        textResultEl.textContent = "La Tierra no fue 'descubierta' en el sentido tradicional. Nuestro planeta es nuestro hogar y la humanidad ha existido en él desde sus inicios. No hubo un momento específico en el que alguien dijera: '¡He encontrado un nuevo planeta!'.";
        imgEl.src = './images/earth.png'
        containerEl.style.visibility = 'visible'
        containerEl.style.opacity = '1'
    } else if (planetOptionEl.value === '4') {
        alertEl.textContent = '';
        result = Math.floor(valueMass * 1.622)
        resultEl.textContent = result + ".00 N"
        textResultEl.textContent = "La Luna ha sido un compañero constante en nuestro cielo nocturno desde tiempos inmemoriales. Nuestros antepasados la observaron, la admiraron y la utilizaron como guía para la agricultura, la navegación y la creación de calendarios."
        imgEl.src = './images/moon.png'
        containerEl.style.visibility = 'visible'
        containerEl.style.opacity = '1'
    } else if (planetOptionEl.value === '5') {
        result = Math.floor(valueMass * 3.711)
        resultEl.textContent = result + ".00 N"
        textResultEl.textContent = "Al igual que con la Luna y Venus, no hay una persona específica a la que se le atribuya el 'descubrimiento' de Marte. Marte era visible a simple vista desde la antigüedad. Civilizaciones como los babilonios, los egipcios y los griegos ya lo habían observado y registrado en sus registros astronómicos."
        alertEl.textContent = '';
        imgEl.src = './images/mars.png'
        containerEl.style.visibility = 'visible'
        containerEl.style.opacity = '1'
    } else if (planetOptionEl.value === '6') {
        result = Math.floor(valueMass * 24.79)
        resultEl.textContent = result + ".00 N"
        textResultEl.textContent = "El gigante gaseoso de nuestro sistema solar, era conocido desde la antigüedad. Su brillo lo hacía inconfundible en el cielo nocturno, y su movimiento aparente entre las estrellas fijas lo diferenciaba de ellas."
        alertEl.textContent = ''; 
        imgEl.src = './images/jupiter.png'
        containerEl.style.visibility = 'visible'
        containerEl.style.opacity = '1'
    } else if (planetOptionEl.value === '7') {
        result = Math.floor(valueMass * 10.44)
        resultEl.textContent = result + ".00 N"
        textResultEl.textContent = "Saturno, el segundo planeta más grande de nuestro sistema solar y famoso por sus impresionantes anillos, era conocido desde la antigüedad. Su brillo lo hacía visible a simple vista en el cielo nocturno, y su movimiento aparente entre las estrellas fijas lo diferenciaba de ellas."
        alertEl.textContent = ''; 
        imgEl.src = './images/saturn.png'
        containerEl.style.visibility = 'visible'
        containerEl.style.opacity = '1'
    } else if (planetOptionEl.value === '8') {
        result = Math.floor(valueMass * 8.69)
        resultEl.textContent = result + ".00 N"
        textResultEl.textContent = "Urano: Descubierto en 1781 por el astrónomo británico William Herschel, mientras realizaba un estudio sistemático del cielo nocturno."
        alertEl.textContent = '';
        imgEl.src = './images/uranus.png'
        containerEl.style.visibility = 'visible'
        containerEl.style.opacity = '1'
    } else if (planetOptionEl.value === '9') {
        result = Math.floor(valueMass * 11.15)
        resultEl.textContent = result + ".00 N"
        textResultEl.textContent = "Su existencia fue predicha matemáticamente antes de su observación visual en 1846. Los astrónomos Urbain Le Verrier y John Couch Adams calcularon su posición basándose en las perturbaciones observadas en la órbita de Urano. Johann Galle fue el primero en observarlo con un telescopio."
        alertEl.textContent = '';
        imgEl.src = './images/neptune.png'
        containerEl.style.visibility = 'visible'
        containerEl.style.opacity = '1'
    } else if (planetOptionEl.value === '10') {
        result = Math.floor(valueMass *  0.62)
        resultEl.textContent = result + ".00 N"
        textResultEl.textContent = "Plutón: Descubierto en 1930 por Clyde Tombaugh en el Observatorio Lowell. Sin embargo, en 2006, la Unión Astronómica Internacional reclasificó a Plutón como un planeta enano, debido a su tamaño relativamente pequeño y su órbita excéntrica."
        alertEl.textContent = ''; 
        imgEl.src = './images/pluto.png'
        containerEl.style.visibility = 'visible'
        containerEl.style.opacity = '1'
    }
})