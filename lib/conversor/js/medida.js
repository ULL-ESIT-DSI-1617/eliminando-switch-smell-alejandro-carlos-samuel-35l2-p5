let regexp = XRegExp('^                            \n' +
    '(?<value> [-+]?\\d+(\.\\d+)?(e[-+]?\\d+)?)  \n' +
    '(\\s*)                                        \n' +
    '(?<type> \\w+)                                \n' +
    '(\\s*)                                        \n' +
    '(to)?                                         \n' +
    '(\\s*)                                        \n' +
    '(?<to> \\w+)                                  \n' +
    '$', 'x');


/*let str =  '-1.43e2f to C';
let str2 =  '32f to C';
let result = regexp.test(str);
let result2 = regexp.test(str2);

console.log(result);
console.log(XRegExp.exec(str, regexp).value);
console.log(XRegExp.exec(str, regexp).type);
console.log(XRegExp.exec(str, regexp).to);

console.log(result2);
console.log(XRegExp.exec(str2, regexp).value);
console.log(XRegExp.exec(str2, regexp).type);
console.log(XRegExp.exec(str2, regexp).to);
*/

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
        console.log(this.getValue());
        let measures = Medida.measures;
        let match = this.match(this.getValue());
        
        if (match) {
            let numero = match.value,
                tipo = match.type,
                destino = match.to;
                
            console.log("Numero:" + numero + "\nTipo:" + tipo + "\nDestino:" + destino);
            try {
                let source = new measures[tipo](numero);
                let target = "to" + measures[destino].name;
                return source[target]().toFixed(2) + " " + target;
            } catch (e) {
                return 'Conversion from "' + tipo + '" to "' + destino + '" is not supported';
            }
        } else
            return "Try a valid conversion e.g.: 330e-1 F to C";
    }

    match(inputString) {
        if(regexp.test(inputString)) {
          return XRegExp.exec(inputString, regexp);
        } else {
          return null;
        }
    }
}