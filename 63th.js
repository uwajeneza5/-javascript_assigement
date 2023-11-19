//Write a function that converts a temperature from Celsius to Fahrenheit.//
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

// Example usage:
const temperatureInCelsius = 25;
const temperatureInFahrenheit = celsiusToFahrenheit(temperatureInCelsius);
console.log(`${temperatureInCelsius}°C is equal to ${temperatureInFahrenheit}°F`)