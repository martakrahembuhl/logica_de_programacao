let sistemas = prompt("Digite o nome do sistema operacional que deseja obter informações (Linux ou CMD):")

if (sistemas == "CMD" || sistemas == "cmd") {
  console.log("O modo CMD foi ativado")
  let cmd = prompt("Qual comando do CMD gostaria de saber mais?")
  switch (cmd) {
    case "dir":
      console.log("Este comando serve para listar arquivos e pastas dentro de um diretório.")
      break
    case "cd..":
      console.log("Serve para sair de dentro de um diretório.")
      break
    case "cd":
      console.log("Serve para entrar em um diretório ou uma pasta")
      break
    case "echo":
      console.log("Este comando serve para criar um arquivo.")
      break
    case "move":
      console.log("Este comando serve para mover arquivos ou renomear pastas.")
      break
    case "cd ..":
      console.log("Serve para voltar para a pasta acessada anteriormente")
      break
    case "del":
      console.log("Este comando serve para excluir os arquivos do diretório")
      break
    case "cls":
      console.log("Este comando é usado para limpar os comandos executados anteriormente na sua tela.")
      break
    case "copy":
      console.log("Este comando é usado para copiar arquivos de um diretório para o outro.")
      break
    case "rmdir":
      console.log("Este comando é utilizado para remover diretórios vazios")
      break
    case "exit":
      console.log("O exit serve para fechar o prompt de comando ou scripts e sessões de terminal")
      break
    default:
      console.log("Este comando é inválido.")
  }
}
else if (sistemas == "Linux" || sistemas == "linux") {
  console.log("O modo Linux foi ativado!")
  let comando = prompt("Digite o comando que deseja conhecer:")
  switch (comando) {
    case "Ls":
      console.log("Para aparecer as pastas presentes no seu usuário.")
      break
    case "mkdir":
      console.log("Serve para criar uma nova pasta ou diretório.")
      break
    case "cd":
      console.log("Este comando mostra o que há dentro de uma pasta ou diretório.")
      break
    case "cd ..":
      console.log("Este comando serve para voltar para a pasta acessada anteriormente.")
      break
    case "rm":
      console.log("Este comando serve para remover os arquivos e diretório.")
      break
    case "clear":
      console.log("Este comando é usado para limpar os comandos executados anteriormente.")
      break
    case "cp":
      console.log("Ele é utilizado para copiar um arquivo.")
      break
    case "mv":
      console.log("Este comando é para mover um arquivo")
      break
    case "cat":
      console.log("É utilizado para mostrar o texto escrito dentro do arquivo")
      break
    case "echo":
      console.log("Serve para criar um arquivo dentro da pasta.")
      break
    default:
      console.log("Este comando não é reconhecido.")
  }
}
else {
  console.log("Não há um sistema com esse nome.")
}
