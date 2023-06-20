// Ejercicio 1
function longitud(palabra) {
    return palabra.length;
}

function mayusculas(palabra) {
    return palabra.toUpperCase();
}

function minusculas(palabra) {
    return palabra.toLowerCase();
}
function primerCaracter(palabra) {
    return palabra.charAt(0);
}


function principal() {
    let palabra = document.getElementById("palabra").value;
    let opcion = parseInt(document.getElementById("opcion").value);

    switch (parseInt(opcion)) {
        case 1:
            alert("La longitu de su palabra " + palabra + " es: " + longitud(palabra));
            break;

        case 2:
            alert("La palabra " + palabra + " en mayusculas es: " + mayusculas(palabra));
            break;
        case 3:
            alert("La palabra " + palabra + " en minusculas es: " + minusculas(palabra));
            break;
        case 4:
            alert("El primer caracter de la palabra: " + palabra + " es: " + primerCaracter(palabra));
            break;
        default:
            alert("Algo salio mal, por favor intente de nuevo");
            break;
    }
}


// Ejercicio 2
function celsiusToFahrenheit(temperatura) {
    return (temperatura * 9 / 5) + 32;
}

function celsiusToKelvin(temperatura) {
    return temperatura + 273.15;
}

function fahrenheitToCelsius(temperatura) {
    return (temperatura - 32) * 5 / 9;
}

function fahrenheitToKelvin(temperatura) {
    return (temperatura + 459.67) * 5 / 9;
}

function kelvinToCelsius(temperatura) {
    return temperatura - 273.15;
}

function kelvinToFahrenheit(temperatura) {
    return (temperatura * 9 / 5) - 459.67;
}

function convertirTemperatura() {
    let temperatura = parseFloat(document.getElementById("temperatura").value);
    let convertirDe = document.getElementById("convertirDe").value;
    let convertirA = document.getElementById("convertirA").value;
    let resultado;

    switch (convertirDe) {
        case "celsius":
            switch (convertirA) {
                case "fahrenheit":
                    resultado = `La temperatura convertida es: ${celsiusToFahrenheit(temperatura)}°F`;
                    break;
                case "kelvin":
                    resultado = `La temperatura convertida es: ${celsiusToKelvin(temperatura)}K`;
                    break;
                default:
                    resultado = "Por favor, elija una opción válida para convertir a.";
            }
            break;
        case "fahrenheit":
            switch (convertirA) {
                case "celsius":
                    resultado = `La temperatura convertida es: ${fahrenheitToCelsius(temperatura)}°C`;
                    break;
                case "kelvin":
                    resultado = `La temperatura convertida es: ${fahrenheitToKelvin(temperatura)}K`;
                    break;
                default:
                    resultado = "Por favor, elija una opción válida para convertir a.";
            }
            break;
        case "kelvin":
            switch (convertirA) {
                case "celsius":
                    resultado = `La temperatura convertida es: ${kelvinToCelsius(temperatura)}°C`;
                    break;
                case "fahrenheit":
                    resultado = `La temperatura convertida es: ${kelvinToFahrenheit(temperatura)}°F`;
                    break;
                default:
                    resultado = "Algo ha salido mal, intente de nuevo";
            }
            break;
        default:
            resultado = "Algo ha salido mal, intente de nuevo";
    }

    alert(resultado);
}

// Ejercicio 3
function determinarTipoTriangulo() {
    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    var lado3 = parseFloat(document.getElementById("lado3").value);

    if (lado1 === lado2 && lado2 === lado3) {
        alert("El triángulo es equilátero");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        alert("El triángulo es isósceles");
    } else {
        alert("El triángulo es escaleno");
    }
}

// Ejercicio 4
function verificarSeleccion() {
    var nombreSeleccionado = document.getElementById("nombre").value;
    var apellidoSeleccionado = document.getElementById("apellido").value;
    var actividadSeleccionada = document.getElementById("actividad").value;

    if (
        nombreSeleccionado === "Juan" &&
        apellidoSeleccionado === "Gómez" &&
        actividadSeleccionada === "Yoga"
    ) {
        alert("La respuesta es correcta");
    } else {
        alert("La respuesta es incorrecta");
    }
}

//Ejercicio 5
function calculateCircle() {
    const radius = parseFloat(document.getElementById("circleRadius").value);
    const perimeter = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);
    alert(`Perímetro del círculo: ${perimeter.toFixed(2)}\nÁrea del círculo: ${area.toFixed(2)}`);
}

function calculateTriangle() {
    const base = parseFloat(document.getElementById("triangleBase").value);
    const height = parseFloat(document.getElementById("triangleHeight").value);
    const perimeter = base + 2 * Math.sqrt(Math.pow(base / 2, 2) + Math.pow(height, 2));
    const area = (base * height) / 2;
    alert(`Perímetro del triángulo: ${perimeter.toFixed(2)}\nÁrea del triángulo: ${area.toFixed(2)}`);
}

function calculateRectangle() {
    const width = parseFloat(document.getElementById("rectangleWidth").value);
    const height = parseFloat(document.getElementById("rectangleHeight").value);
    const perimeter = 2 * (width + height);
    const area = width * height;
    alert(`Perímetro del rectángulo: ${perimeter.toFixed(2)}\nÁrea del rectángulo: ${area.toFixed(2)}`);
}

function calculateSquare() {
    const side = parseFloat(document.getElementById("squareSide").value);
    const perimeter = 4 * side;
    const area = Math.pow(side, 2);
    alert(`Perímetro del cuadrado: ${perimeter.toFixed(2)}\nÁrea del cuadrado: ${area.toFixed(2)}`);
}


/*$(document).ready(function () {
    $('.navbar-toggle').click(function () {
        $('.navbar-menu').toggleClass('active');
    });
});*/