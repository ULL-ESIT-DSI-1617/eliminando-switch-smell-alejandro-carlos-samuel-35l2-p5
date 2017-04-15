let regexp = XRegExp('^ \n' +
    '(?<value> [-+]?\\d+(\.\\d*)?(?:e[-+]?\\d+)?) \n' +
    '(\\s*)                                             \n' +
    '(?<type> \\w+)                                    \n' +
    '(\\s*)                                             \n' +
    '(to)?                                              \n' +
    '(\\s*)                                             \n' +
    '(?<to> \\w+)                                      \n' +
    '$', 'x');

// let str =  '-1.43e2f to C';
// let result = regexp.test(str);

// console.log(XRegExp.exec(str, regexp).value);
// console.log(XRegExp.exec(str, regexp).type);
// console.log(XRegExp.exec(str, regexp).to);


class Medida {
    constructor(value) {
        this.valor = value;
    }

    get getValue() {
        return this.valor;
    }

    set setValue(newValue) {
        this.valor = newValue;
    }

    convert() {
        let measures = Medida.measures;
        let match = Medida.match;
        if (match) {
            let numero = match.numero,
                tipo = match.tipo,
                destino = match.destino;
            try {
                let source = new measures[tipo](numero);
                let target = "to" + measures[destino].name;
                return source[target]().toFixed(2) + " " + target;
            } catch (e) {
                return 'Conversion from ' + tipo + '" to "' + destino + '" is not supported';
            }
        } else
            return "Try a valid conversion e.g.: 330e-1 F to C";
    }
}