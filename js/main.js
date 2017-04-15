function main() {
  let input = document.getElementById('original').value;
  converted.innerHTML = calculate(input);
}

function calculate(value) {
    let medida = new Medida(value);
    return medida.convertir();
}