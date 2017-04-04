/*
let unidadesFile = require('./unidades.js');
let temperaturaFile = require('./temperatura.js');
let medidaFile = require('./medida.js');
*/

function calculate() {
    let result;
    let temp = original.value;
    //let regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkK])/;
    let regexp = /^([-+])?(\d+)(.\d*)?(e[-+]?\d+)?([cCfFkK])(\sto)?\s([cCfFkK])$/;
    let m = temp.match(regexp);
    let numero = "";

    if (m) {
        for (let i = 1; i < 5; i++) {
            if (typeof m[i] != 'undefined') {
                numero += m[i];
            }
        }

        let valor = parseFloat(numero);

        let num = valor; // valor
        let clase = m[5]; // 2 es la clase
        let unidad = m[7]; // 4 es la unidad a convertir
        num = parseFloat(num);

        if (clase == 'c' || clase == 'C') {
            let celsius = new Celsius(num, unidad);
            result = celsius.convert();
        } else if (clase == 'k' || clase == 'K') {
            let kelvin = new Kelvin(num, unidad);
            result = kelvin.convert();
        } else if (clase == 'f' || clase == 'F') {
            let farenheit = new Farenheit(num, unidad);
            result = farenheit.convert();
        }
        console.log(result);
        converted.innerHTML = result;

    } else {
        converted.innerHTML = "ERROR! Try something like '4.2C to F' instead";
    }
}