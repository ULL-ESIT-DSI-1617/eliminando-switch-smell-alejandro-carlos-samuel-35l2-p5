let regexp = XRegExp('^ \n' +
                '(?<value> [-+]?\\d+(\.\\d*)?(?:e[-+]?\\d+)?) \n' +
                '(\\s*)                                             \n' +
                '(?<type> \\w+)                                    \n' +
                '(\\s*)                                             \n' +
                '(to)?                                              \n' +
                '(\\s*)                                             \n' +
                '(?<to> \\w+)                                      \n' +
                '$','x');
                
/*
let str =  '-1.43e2f to C';
let result = regexp.test(str);
             
console.log(XRegExp.exec(str, regexp).value);
console.log(XRegExp.exec(str, regexp).type);
console.log(XRegExp.exec(str, regexp).to);
*/

function match(inputString) {
  return regexp.test(inputString);
}

class Medida {
    constructor(value, string) {
        this.valor = value;
        this.cadena = string;
    }

    get getValue() {
        return this.valor;
    }

    get getString() {
        return this.cadena;
    }

    set setValue(newValue) {
        this.valor = newValue;
    }

    set setString(newString) {
        this.cadena = newString;
    }
}
