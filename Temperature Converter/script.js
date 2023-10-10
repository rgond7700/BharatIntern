const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

function convertTemperature() {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;
        fahrenheitInput.value = fahrenheit.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2);
    } else {
        fahrenheitInput.value = "";
        kelvinInput.value = "";
    }
}

celsiusInput.addEventListener("input", convertTemperature);
