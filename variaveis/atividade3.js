// 1. Verifica��o de maioridade
let idade = 16

if (idade >= 18) {
  console.log("Maior de idade")
} else {
  console.log("Menor de idade")
}

// 2. Sauda��es por hor�rio
let tempo = Number(prompt("Digite a hora (0-23):"))

if (tempo >= 6 && tempo < 11) {
  console.log("Bom dia")
} else if (tempo > 12 && tempo <= 18) {
  console.log("Boa tarde")
} else if (tempo > 18) {
  console.log("Boa noite")
}

// 3. Verifica��o de entrada com idade
if (idade >= 16) {
  console.log("Entrada autorizada")
} else {
  console.log("Entrada n�o autorizada")
}

// 4. Compara��o entre dois n�meros
let num1 = Number(prompt("Digite o primeiro n�mero:"))
let num2 = Number(prompt("Digite o segundo n�mero:"))

if (num1 > num2) {
  console.log(num1, "� maior que", num2)
} else if (num1 < num2) {
  console.log(num1, "� menor que", num2)
} else {
  console.log(num1, "� igual a", num2)
}

// 5. Verifica��o de temperatura
let temperatura = Number(prompt("Qual a temperatura?"))

if (temperatura < 18) {
  console.log("Est� frio l� fora")
} else if (temperatura >= 19 && temperatura < 24) {
  console.log("O clima est� ameno")
} else {
  console.log("Est� calor")
}

// 6. Verifica��o de palavra correta
let palavra = prompt("Digite a palavra:")

if (palavra === "Felicidade") {
  console.log("A palavra est� correta.")
} else {
  console.log("Palavra incorreta")
}

// 7. Quantidade de moedas
let moedas = Number(prompt("Quantas moedas voc� tem?"))

if (moedas < 10) {
  console.log("Voc� tem poucas moedas")
} else if (moedas >= 10 && moedas <= 20) {
  console.log("Quantidade m�dia de moedas")
} else {
  console.log("Voc� tem muitas moedas!")
}

// 8. N�mero positivo ou negativo
let num = Number(prompt("Digite um n�mero:"))

if (num > 0) {
  console.log("O n�mero � positivo")
} else {
  console.log("O n�mero � negativo")
}

// 9. Verifica��o de animal
let animal = prompt("Digite um animal:")

if (animal === "Cachorro" || animal === "Gato" || animal === "P�ssaro") {
  console.log("O animal est� na lista.")
} else {
  console.log("O animal n�o � listado")
}

// 10. Verifica��o de dia da semana
let diaSemana = Number(prompt("Digite o dia da semana (1 a 7):"))

if (diaSemana === 6 || diaSemana === 7) {
  console.log("Fim de semana")
} else if (diaSemana >= 1 && diaSemana <= 5) {
  console.log("Dia �til")
} else {
  console.log("Op��o inv�lida")
}

// 11. Verifica��o de experi�ncia
let experiencia = Number(prompt("Quantos anos de experi�ncia?"))

if (experiencia > 2) {
  console.log("Experiente")
} else {
  console.log("Iniciante")
}
