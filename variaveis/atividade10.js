let usuario1 = "admin"
let senha1 = "admin"
let usuario2 = "user1"
let senha2 = "1234"
let usuario3 = "user2"
let senha3 = "abcd"
let usuario4 = "user3"
let senha4 = "senha3"
let usuario5 = "user4"
let senha5 = "senha4"
let usuario6 = "user5"
let senha6 = "senha5"
let usuario7 = "user6"
let senha7 = "senha6"
let usuario8 = "user7"
let senha8 = "senha7"
let usuario9 = "user8"
let senha9 = "senha8"
let usuario10 = "user9"
let senha10 = "senha9"

function verificarLogin(login, senha) {
  if (login === usuario1 && senha === senha1) {
    console.log("Login correto!")
  } else if (login === usuario2 && senha === senha2) {
    console.log("Login correto!")
  } else if (login === usuario3 && senha === senha3) {
    console.log("Login correto!")
  } else if (login === usuario4 && senha === senha4) {
    console.log("Login correto!")
  } else if (login === usuario5 && senha === senha5) {
    console.log("Login correto!")
  } else if (login === usuario6 && senha === senha6) {
    console.log("Login correto!")
  } else if (login === usuario7 && senha === senha7) {
    console.log("Login correto!")
  } else if (login === usuario8 && senha === senha8) {
    console.log("Login correto!")
  } else if (login === usuario9 && senha === senha9) {
    console.log("Login correto!")
  } else if (login === usuario10 && senha === senha10) {
    console.log("Login correto!")
  } else {
    console.log("Usuário não encontrado ou senha incorreta.")
  }
}

let login = prompt("Digite o nome de usuário:")
let senha = prompt("Digite a senha:")

verificarLogin(login, senha)
