class Celsius extends Temperatura {
    constructor(value) {
        super(value);
    }
    toKelvin() {
        let conversion = super.getValue() + 273.15;
        return conversion.toFixed(2);
    }
    toFarenheit() {
        let conversion = (super.getValue() * 1.8) + 32;
        return conversion.toFixed(2);
    }
}

class Kelvin extends Temperatura {
    constructor(value) {
        super(value);
    }
    toCelsius() {
        let conversion = super.getValue() - 273.15;
        return conversion.toFixed(2);
    }
    toFarenheit() {
        let conversion = super.getValue() * 9 / 5 - 459.67;
        return conversion.toFixed(2);
    }
}

class Farenheit extends Temperatura {
    constructor(value) {
        super(value)
    }
    toKelvin() {
        let conversion = (super.getValue() + 459.67) * 5 / 9;
        return conversion.toFixed(2);
    }
    toCelsius() {
        let conversion = (super.getValue() - 32) * 5 / 9;
        return conversion.toFixed(2);
    }
}