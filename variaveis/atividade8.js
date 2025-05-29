// 1. Classificação por faixa etária
let categoria = Number(prompt("Digite a idade para classificação:"))

if (categoria >= 60) {
  console.log("Classificação: Idosa")
} else if (categoria >= 18 && categoria < 60) {
  console.log("Classificação: Adulta")
} else if (categoria >= 12 && categoria < 18) {
  console.log("Classificação: Adolescente")
} else if (categoria < 12 && categoria >= 0) {
  console.log("Classificação: Criança")
} else {
  console.log("Valor inválido para idade.")
}

// 2. Situação do voto
let idade = Number(prompt("Digite a idade para saber a situação do voto:"))

if (idade < 16) {
  console.log("Situação do voto: Não vota")
} else if ((idade >= 16 && idade < 18) || idade > 70) {
  console.log("Situação do voto: Voto facultativo")
} else if (idade >= 18 && idade <= 70) {
  console.log("Situação do voto: Voto obrigatório")
} else {
  console.log("Idade inválida")
}

// 3. Verificação de número positivo, negativo ou zero
let numero = Number(prompt("Digite um número:"))

if (numero > 0) {
  console.log("O número é positivo")
} else if (numero < 0) {
  console.log("O número é negativo")
} else {
  console.log("O número é zero ou inválido")
}

// 4. Tipo de combustível
let combustivel = prompt("Digite o tipo de combustível (Gasolina, Alcool, disel):")

if (combustivel === "Gasolina") {
  console.log("Você escolheu Gasolina")
} else if (combustivel === "Alcool") {
  console.log("Você escolheu Etanol")
} else if (combustivel === "disel") {
  console.log("Você escolheu Disel")
} else {
  console.log("Combustível não disponível")
}

// 5. Verificação de velocidade
let velocidade = Number(prompt("Digite a velocidade do veículo:"))

if (velocidade <= 60) {
  console.log("Dentro do limite de velocidade")
} else if (velocidade > 60) {
  console.log("Multado por excesso de velocidade")
} else {
  console.log("Velocidade inválida")
}
ECHO est  ativado.
