class Celsius extends Temperatura {
    constructor(value, string) {
        super(value, string);
    }
    toKelvin() {
        let conversion = super.getValue + 273.15;
        return conversion.toPrecision(4);
    }
    toFarenheit() {
        let conversion = (super.getValue * 1.8) + 32;
        return conversion.toPrecision(4);
    }
}

class Kelvin extends Temperatura {
    constructor(value, string) {
        super(value, string);
    }
    toCelsius() {
        let conversion = super.getValue - 273.15;
        return conversion.toPrecision(4);
    }
    toFarenheit() {
        let conversion = super.getValue * 9 / 5 - 459.67;
        return conversion.toPrecision(4);
    }
}

class Farenheit extends Temperatura {
    constructor(value, string) {
        super(value, string)
    }
    toKelvin() {
        let conversion = (super.getValue + 459.67) * 5 / 9;
        return conversion.toPrecision(4);
    }
    toCelsius() {
        let conversion = (super.getValue - 32) * 5 / 9;
        return conversion.toPrecision(4);
    }
}