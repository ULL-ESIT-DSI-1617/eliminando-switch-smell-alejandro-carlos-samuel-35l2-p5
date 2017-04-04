/*
let temperaturaFile = require('./temperatura.js');
let Temperatura = temperaturaFile.Temperatura;
*/

class Celsius extends Temperatura {
    constructor(value, string) {
        super(value, string);
    }
    celsius2Kelvin() {
        let conversion = super.getValue + 273.15;
        return conversion.toPrecision(4);
    }
    celsius2Farenheit() {
        let conversion = (super.getValue * 1.8) + 32;
        return conversion.toPrecision(4);
    }
    convert() {
        if (super.getString == 'k' || super.getString == 'K') {
            return this.celsius2Kelvin();
        } else if (super.getString == 'f' || super.getString == 'F') {
            return this.celsius2Farenheit();
        }
    }
}

class Kelvin extends Temperatura {
    constructor(value, string) {
        super(value, string);
    }

    kelvin2Celsius() {
        let conversion = super.getValue - 273.15;
        return conversion.toPrecision(4);
    }

    kelvin2Farenheit() {
        let conversion = super.getValue * 9 / 5 - 459.67;
        return conversion.toPrecision(4);
    }
    convert() {
        if (super.getString == 'c' || super.getString == 'C') {
            return this.kelvin2Celsius();
        } else if (super.getString == 'f' || super.getString == 'F') {
            return this.kelvin2Farenheit();
        }
    }
}

class Farenheit extends Temperatura {
    constructor(value, string) {
        super(value, string)
    }
    farenheit2Kelvin() {
        let conversion = (super.getValue + 459.67) * 5 / 9;
        return conversion.toPrecision(4);
    }
    farenheit2Celsius() {
        let conversion = (super.getValue - 32) * 5 / 9;
        return conversion.toPrecision(4);
    }
    convert() {
        if (super.getString == 'k' || super.getString == 'K') {
            return this.farenheit2Kelvin();
        } else if (super.getString == 'c' || super.getString == 'C') {
            return this.farenheit2Celsius();
        }
    }
}
/*
module.exports = {
    Celsius: Celsius,
    Kelvin: Kelvin,
    Farenheit: Farenheit
};
*/