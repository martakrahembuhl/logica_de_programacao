// 1. Classifica��o por faixa et�ria
let categoria = Number(prompt("Digite a idade para classifica��o:"))

if (categoria >= 60) {
  console.log("Classifica��o: Idosa")
} else if (categoria >= 18 && categoria < 60) {
  console.log("Classifica��o: Adulta")
} else if (categoria >= 12 && categoria < 18) {
  console.log("Classifica��o: Adolescente")
} else if (categoria < 12 && categoria >= 0) {
  console.log("Classifica��o: Crian�a")
} else {
  console.log("Valor inv�lido para idade.")
}

// 2. Situa��o do voto
let idade = Number(prompt("Digite a idade para saber a situa��o do voto:"))

if (idade < 16) {
  console.log("Situa��o do voto: N�o vota")
} else if ((idade >= 16 && idade < 18) || idade > 70) {
  console.log("Situa��o do voto: Voto facultativo")
} else if (idade >= 18 && idade <= 70) {
  console.log("Situa��o do voto: Voto obrigat�rio")
} else {
  console.log("Idade inv�lida")
}

// 3. Verifica��o de n�mero positivo, negativo ou zero
let numero = Number(prompt("Digite um n�mero:"))

if (numero > 0) {
  console.log("O n�mero � positivo")
} else if (numero < 0) {
  console.log("O n�mero � negativo")
} else {
  console.log("O n�mero � zero ou inv�lido")
}

// 4. Tipo de combust�vel
let combustivel = prompt("Digite o tipo de combust�vel (Gasolina, Alcool, disel):")

if (combustivel === "Gasolina") {
  console.log("Voc� escolheu Gasolina")
} else if (combustivel === "Alcool") {
  console.log("Voc� escolheu Etanol")
} else if (combustivel === "disel") {
  console.log("Voc� escolheu Disel")
} else {
  console.log("Combust�vel n�o dispon�vel")
}

// 5. Verifica��o de velocidade
let velocidade = Number(prompt("Digite a velocidade do ve�culo:"))

if (velocidade <= 60) {
  console.log("Dentro do limite de velocidade")
} else if (velocidade > 60) {
  console.log("Multado por excesso de velocidade")
} else {
  console.log("Velocidade inv�lida")
}
ECHO est� ativado.
