let numero1 = Number(prompt("Digite o primeiro n�mero:"))
let numero2 = Number(prompt("Digite o segundo n�mero:"))
console.log("1 - Soma (+)\n2 - Subtra��o (-)\n3 - Multiplica��o (*)\n4 - Divis�o (/)")

let operacao = prompt("Digite a opera��o a ser realizada:")
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
  case "adi��o":
  case "+":
    resultado = soma(numero1, numero2)
    break
}

// Subtra��o
switch (operacao) {
  case "2":
  case "subtra��o":
  case "menos":
  case "-":
    resultado = subtracao(numero1, numero2)
    break
}

// Multiplica��o
switch (operacao) {
  case "3":
  case "multiplica��o":
  case "vezes":
  case "*":
    resultado = multiplicacao(numero1, numero2)
    break
}

// Divis�o
switch (operacao) {
  case "4":
  case "divis�o":
  case "/":
    resultado = divisao(numero1, numero2)
    break
}

console.log("O resultado �", resultado)
