let numero1 = Number(prompt("Digite o primeiro número:"))
let numero2 = Number(prompt("Digite o segundo número:"))
console.log("1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão (/)")

let operacao = prompt("Digite a operação a ser realizada:")
let resultado = 0

function soma(numero1, numero2) {
  return resultado = numero1 + numero2
}

function subtracao(numero1, numero2) {
  return resultado = numero1 - numero2
}

function multiplicacao(numero1, numero2) {
  return resultado = numero1 * numero2
}

function divisao(numero1, numero2) {
  return resultado = numero1 / numero2
}

// Soma
switch (operacao) {
  case "1":
  case "soma":
  case "adição":
  case "+":
    resultado = soma(numero1, numero2)
    break
}

// Subtração
switch (operacao) {
  case "2":
  case "subtração":
  case "menos":
  case "-":
    resultado = subtracao(numero1, numero2)
    break
}

// Multiplicação
switch (operacao) {
  case "3":
  case "multiplicação":
  case "vezes":
  case "*":
    resultado = multiplicacao(numero1, numero2)
    break
}

// Divisão
switch (operacao) {
  case "4":
  case "divisão":
  case "/":
    resultado = divisao(numero1, numero2)
    break
}

console.log("O resultado é", resultado)
