let respostaCorreta = 0
let respostaIncorreta = 0

// Pergunta 1
console.log("Qual é o nome do pai de Dean e Sam Winchester?")
console.log("A - John Winchester")
console.log("B - Bobby Singer")
console.log("C - Castiel")
console.log("D - Lucifer")

let pergunta1 = prompt("Digite sua resposta: ")
if (pergunta1 == "A" || pergunta1 == "John Winchester") {
console.log("resposta certa")
respostaCorreta++
} else {
console.log("resposta errada")
respostaIncorreta++
}

// Pergunta 2
console.log("Qual é o nome do anjo que ajuda os Winchesters?")
console.log("A - Castiel")
console.log("B - Gabriel")
console.log("C - Michael")
console.log("D - Uriel")

let pergunta2 = prompt("Digite sua resposta: ")
if (pergunta2 == "A" || pergunta2 == "Castiel") {
console.log("resposta certa")
respostaCorreta++
} else {
console.log("resposta errada")
respostaIncorreta++
}

// Pergunta 3
console.log("Quem é o demônio que possui o corpo de Sam Winchester?")
console.log("A - Azazel")
console.log("B - Crowley")
console.log("C - Lucifer")
console.log("D - Belphegor")

let pergunta3 = prompt("Digite sua resposta: ")
if (pergunta3 == "C" || pergunta3 == "Lucifer") {
console.log("resposta certa")
respostaCorreta++
} else {
console.log("resposta errada")
respostaIncorreta++
}

// Pergunta 4
console.log("Qual é o nome da arma que pode matar qualquer ser sobrenatural?")
console.log("A - Espada de Michael")
console.log("B - Colt")
console.log("C - Lança de Deus")
console.log("D - Anel de Saturno")

let pergunta4 = prompt("Digite sua resposta: ")
if (pergunta4 == "B" || pergunta4 == "Colt") {
console.log("resposta certa")
respostaCorreta++
} else {
console.log("resposta errada")
respostaIncorreta++
}

// Pergunta 5
console.log("Quem é o rei dos demônios em Supernatural?")
console.log("A - Azazel")
console.log("B - Crowley")
console.log("C - Belphegor")
console.log("D - Lilith")

let pergunta5 = prompt("Digite sua resposta: ")
if (pergunta5 == "B" || pergunta5 == "Crowley") {
console.log("resposta certa")
respostaCorreta++
} else {
console.log("resposta errada")
respostaIncorreta++
}

// Pergunta 6
console.log("Quantos anos Dean Winchester ficou preso no inferno?")
console.log("A - 4 meses")
console.log("B - 1 ano")
console.log("C - 6 meses")
console.log("D - 40 anos")

let pergunta6 = prompt("Digite sua resposta: ")
if (pergunta6 == "A" || pergunta6 == "4 meses") {
console.log("resposta certa")
respostaCorreta++
} else {
console.log("resposta errada")
respostaIncorreta++
}

// Pergunta 7
console.log("Qual é o nome do caçador que se torna amigo dos Winchester e morre várias vezes?")
console.log("A - Bobby Singer")
console.log("B - Jo Harvelle")
console.log("C - Castiel")
console.log("D - Ellen Harvelle")

let pergunta7 = prompt("Digite sua resposta: ")
if (pergunta7 == "A" || pergunta7 == "Bobby Singer") {
console.log("resposta certa")
respostaCorreta++
} else {
console.log("resposta errada")
respostaIncorreta++
}

// Pergunta 8
console.log("Qual é o nome da mãe de Dean e Sam Winchester?")
console.log("A - Mary Winchester")
console.log("B - Ellen Harvelle")
console.log("C - Jo Harvelle")
console.log("D - Meg Masters")

let pergunta8 = prompt("Digite sua resposta: ")
if (pergunta8 == "A" || pergunta8 == "Mary Winchester") {
console.log("resposta certa")
respostaCorreta++
} else {
console.log("resposta errada")
respostaIncorreta++
}

// Pergunta 9
console.log("Qual é o nome da criatura que mata pessoas com uma lâmina de prata?")
console.log("A - Lobisomem")
console.log("B - Vampiro")
console.log("C - Demoníaco")
console.log("D - Wendigo")

let pergunta9 = prompt("Digite sua resposta: ")
if (pergunta9 == "A" || pergunta9 == "Lobisomem") {
console.log("resposta certa")
respostaCorreta++
} else {
console.log("resposta errada")
respostaIncorreta++
}

// Pergunta 10
console.log("Quem é considerado o maior inimigo de Dean e Sam Winchester em Supernatural?")
console.log("A - Azazel")
console.log("B - Lucifer")
console.log("C - Michael")
console.log("D - Metatron")

let pergunta10 = prompt("Digite sua resposta: ")
if (pergunta10 == "B" || pergunta10 == "Lucifer") {
console.log("resposta certa")
respostaCorreta++
} else {
console.log("resposta errada")
respostaIncorreta++
}

// Exibir resultado
console.log("\nResumo final")
console.log("respostas certas: " + respostaCorreta)
console.log("respostas erradas: " + respostaIncorreta)
