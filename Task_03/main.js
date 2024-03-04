// This code is Designed by Barsha Saha
// Logic for the digital watch
function currentTime() {
    let p1 = document.getElementById("p1")
    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let ss = date.getSeconds();
    let current_time = hr + ":" + mn + ":" + ss;
    p1.innerHTML = current_time;
    let t = setTimeout(function () { currentTime() }, 1000);
}
currentTime();

// Logic for temperature converter
function temperature() {
    let inputValue = document.getElementById('inputValue').value;
    let type1 = document.getElementById('type1');
    let type2 = document.getElementById('type2');
    let result = document.getElementById('result');

    if (type1.value == "celcius" && type2.value == "fahrenheit") {
        let Fahrenheit = (Number.parseFloat(inputValue) * (9 / 5)) + 32;
        result.innerHTML = Fahrenheit.toFixed(3) + " F";
    } else if (type1.value == "fahrenheit" && type2.value == "celcius") {
        let Celsius = (Number.parseFloat(inputValue) - 32) * (5 / 9);
        result.innerHTML = Celsius.toFixed(3) + ` &deg;C`;
    } else if (type1.value == "fahrenheit" && type2.value == "fahrenheit") {
        let Fahrenheit = Number.parseFloat(inputValue);
        result.innerHTML = Fahrenheit.toFixed(3) + " F";
    } else if (type1.value == "fahrenheit" && type2.value == "kelvin") {
        let Kelvin = (Number.parseFloat(inputValue) - 32) * (5 / 9) + 273.15;
        result.innerHTML = Kelvin.toFixed(3) + " K";
    } else if (type1.value == "kelvin" && type2.value == "fahrenheit") {
        let Fahrenheit = (Number.parseFloat(inputValue) - 273.15) * (9 / 5) + 32;
        result.innerHTML = Fahrenheit.toFixed(3) + " F";
    } else if (type1.value == "kelvin" && type2.value == "celcius") {
        let Celsius = Number.parseFloat(inputValue) - 273.15;
        result.innerHTML = Celsius.toFixed(3) + ` &deg;C`;
    } else if (type1.value == "celcius" && type2.value == "kelvin") {
        let Kelvin = Number.parseFloat(inputValue) + 273.15;
        result.innerHTML = Kelvin.toFixed(3) + " K";
    } else if (type1.value == "kelvin" && type2.value == "kelvin") {
        result.innerHTML = inputValue + " K";
    } else if (type1.value == "celcius" && type2.value == "celcius") {
        result.innerHTML = inputValue + ` &deg;C`;
    }
}
