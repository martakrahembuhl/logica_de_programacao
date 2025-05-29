// 1. Verificação de maioridade
let idade = 16

if (idade >= 18) {
  console.log("Maior de idade")
} else {
  console.log("Menor de idade")
}

// 2. Saudações por horário
let tempo = Number(prompt("Digite a hora (0-23):"))

if (tempo >= 6 && tempo < 11) {
  console.log("Bom dia")
} else if (tempo > 12 && tempo <= 18) {
  console.log("Boa tarde")
} else if (tempo > 18) {
  console.log("Boa noite")
}

// 3. Verificação de entrada com idade
if (idade >= 16) {
  console.log("Entrada autorizada")
} else {
  console.log("Entrada não autorizada")
}

// 4. Comparação entre dois números
let num1 = Number(prompt("Digite o primeiro número:"))
let num2 = Number(prompt("Digite o segundo número:"))

if (num1 > num2) {
  console.log(num1, "é maior que", num2)
} else if (num1 < num2) {
  console.log(num1, "é menor que", num2)
} else {
  console.log(num1, "é igual a", num2)
}

// 5. Verificação de temperatura
let temperatura = Number(prompt("Qual a temperatura?"))

if (temperatura < 18) {
  console.log("Está frio lá fora")
} else if (temperatura >= 19 && temperatura < 24) {
  console.log("O clima está ameno")
} else {
  console.log("Está calor")
}

// 6. Verificação de palavra correta
let palavra = prompt("Digite a palavra:")

if (palavra === "Felicidade") {
  console.log("A palavra está correta.")
} else {
  console.log("Palavra incorreta")
}

// 7. Quantidade de moedas
let moedas = Number(prompt("Quantas moedas você tem?"))

if (moedas < 10) {
  console.log("Você tem poucas moedas")
} else if (moedas >= 10 && moedas <= 20) {
  console.log("Quantidade média de moedas")
} else {
  console.log("Você tem muitas moedas!")
}

// 8. Número positivo ou negativo
let num = Number(prompt("Digite um número:"))

if (num > 0) {
  console.log("O número é positivo")
} else {
  console.log("O número é negativo")
}

// 9. Verificação de animal
let animal = prompt("Digite um animal:")

if (animal === "Cachorro" || animal === "Gato" || animal === "Pássaro") {
  console.log("O animal está na lista.")
} else {
  console.log("O animal não é listado")
}

// 10. Verificação de dia da semana
let diaSemana = Number(prompt("Digite o dia da semana (1 a 7):"))

if (diaSemana === 6 || diaSemana === 7) {
  console.log("Fim de semana")
} else if (diaSemana >= 1 && diaSemana <= 5) {
  console.log("Dia útil")
} else {
  console.log("Opção inválida")
}

// 11. Verificação de experiência
let experiencia = Number(prompt("Quantos anos de experiência?"))

if (experiencia > 2) {
  console.log("Experiente")
} else {
  console.log("Iniciante")
}
