ECHO est  ativado.
/*let nome = prompt("Digite seu nome de usuário:")
while (!nome) {
    nome = prompt("Nome inválido. Digite seu nome de usuário:")
}
console.log("bem-vindo(a)")*/

//2
/*let senha = prompt("Crie sua senha:")
while (!senha) {
    senha = prompt("Senha inválida. Crie sua senha:")
}
//3
let confirmarSenha = prompt("Confirme sua senha:")
while (confirmarSenha !== senha) {
    confirmarSenha = prompt("As senhas não coincidem. Confirme sua senha:");
}*/

// 4
/*let login = prompt("Digite o login:")
let senhaLogin = prompt("Digite a senha:")
while (login !== "admin" || senhaLogin !== "1234") {
    login = prompt("Digite o login:")
    senhaLogin = prompt("Digite a senha:")
}
alert("Login bem-sucedido!")
*/
// 5

  /*  login = prompt("Digite o login:");
    senhaLogin = prompt("Digite a senha:")
    if (login !== "admin" || senhaLogin !== "1234") {
        alert("Usuário ou senha incorretos.")
    }
} while (login !== "admin" || senhaLogin !== "1234")
alert("Login bem-sucedido!")*/

// 6. 
/*let tentativas = 0
let acessoLiberado = false

while (tentativas < 3) {
    login = prompt("Digite o login:")
    senhaLogin = prompt("Digite a senha:")

    if (login === "admin" && senhaLogin === "1234") {
        acessoLiberado = true
        break;
    } else {
        alert("Usuário ou senha incorretos.")
        tentativas++
    }
}
if (acessoLiberado) {
    alert("Login bem-sucedido!")
} else {
    alert("Acesso bloqueado.")
}
*/
// 7
/*let novoUsuario = prompt("Cadastre seu nome de usuário:")
let novaSenha = prompt("Cadastre sua senha:")

let usuarioLogin = prompt("Digite seu nome de usuário:")
let senhaLogin2 = prompt("Digite sua senha:")

while (usuarioLogin !== novoUsuario || senhaLogin2 !== novaSenha) {
    alert("Usuário ou senha incorretos.");
    usuarioLogin = prompt("Digite seu nome de usuário:")
    senhaLogin2 = prompt("Digite sua senha:")
}
alert("Login realizado com sucesso!")
*/
// 8
/*let user = "admin";
let senhaSalva = "1234"

while (true) {
    let usuario = prompt("Login:")
    let senha = prompt("Senha:")

    if (usuario === user && senha === senhaSalva) {
        alert("Login realizado com sucesso!")
        break
    } else {
        alert("Usuário ou senha incorretos.")
        let esqueceu = prompt("Esqueceu a senha? (sim/não)")
        if (esqueceu && esqueceu.toLowerCase() === "sim") {
            alert("Sua senha é: " + senhaSalva)
        }
    }
}
*/
// 9. 
/*usuario = "admin"
senhaCorreta = "1234"

while (true) {
    let login = prompt("Login:")
    let senha = prompt("Senha:")

    if (login === usuario && senha === senhaCorreta) {
        alert("Você está logado!")
        let comando = prompt("Digite 'sair' para fazer logout:")
        while (comando !== "sair") {
            comando = prompt("Você ainda está logado. Digite 'sair' para fazer logout:")
        }
        alert("Logout realizado.")
        break;
    } else {
        alert("Usuário ou senha incorretos.")
    }
}
*/