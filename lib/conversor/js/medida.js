let regexp = XRegExp('^                            \n' +
    '(?<value> [-+]?\\d+(\.\\d+)?(e[-+]?\\d+)?)  \n' +
    '(\\s*)                                        \n' +
    '(?<type> \\w+)                                \n' +
    '(\\s*)                                        \n' +
    '(to)?                                         \n' +
    '(\\s*)                                        \n' +
    '(?<to> \\w+)                                  \n' +
    '$', 'x');
    
let measures = {};

class Medida {
    constructor(value) {
        this.valor = value;
    }

    getValue() {
        return this.valor;
    }

    setValue(newValue) {
        this.valor = newValue;
    }

    convertir() {
        let match = this.match(this.getValue());
        
        measures.c = Celsius;
        measures.f = Farenheit;
        measures.k = Kelvin;

        if (match) {
            let numero = parseFloat(match.value),
                tipo = match.type.toLowerCase(),
                destino = match.to.toLowerCase();
            
            try {
                let source = new measures[tipo](numero);
                let target = "to" + measures[destino].name;
                return source[target]() + "" + measures[destino].name;
            } catch (err) {
              console.log(err);
              return 'Conversion from "' + tipo + '" to "' + destino + '" is not supported';
            }
        } else
            return "Try a valid conversion e.g.: 330e-1 F to C";
    }

    match(inputString) {
        if (regexp.test(inputString)) {
            return XRegExp.exec(inputString, regexp);
        } else {
            return null;
        }
    }
}