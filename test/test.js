/*
  Testing Conversor
 */
var conv = require("../lib/conversor/js/main.js");
var convertTemp = conv.convert;

var TEMPERATURES = ["32C to F","-1.43e2f to C","330e-1 F to C","323k C","93 f to c", "20p to s"];
var expected = ["89.60 ºF", "-97.22 ºC", "0.56 ºC", "49.85 ºC", "33.89 ºC", "ERROR! Try something like '4.2C to F' instead"];

describe("convertTemp", function() {
  it("Debe convertir correctamente xC to F", function() {
    convertTemp(TEMPERATURES[0]).should.equal(expected[0]);
  })
});

describe("convertTemp", function() {
  it("Debe permitir la lectura de número en notación decimal (ej: -1.43e2)", function() {
    convertTemp(TEMPERATURES[1]).should.equal(expected[1]);
  })
});

describe("convertTemp", function() {
  it("Debe permitir un espacio después del número x F to C", function() {
    convertTemp(TEMPERATURES[2]).should.equal(expected[2]);
  })
});

describe("convertTemp", function() {
  it("Debe permitir covertir Kelvin xk C", function() {
    convertTemp(TEMPERATURES[3]).should.equal(expected[3]);
  })
});

describe("convertTemp", function() {
  it("Debe permitir covertir Fahrenheit x f C", function() {
    convertTemp(TEMPERATURES[4]).should.equal(expected[4]);
  })
});

describe("convertTemp", function() {
  it("Debe reconocer fallos al introducir formato incorrecto", function() {
    convertTemp(TEMPERATURES[5]).should.equal(expected[5]);
  })
});