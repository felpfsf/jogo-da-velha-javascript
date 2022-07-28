let x = document.querySelector('.x')
let o = document.querySelector('.o')
let boxes = document.querySelectorAll('.box')
let selectPlayer = document.querySelectorAll('#players-select button')
let modal = document.querySelector('#modal')
let msgModal = document.querySelector('#modal p')

let gameGrid = document.getElementById('game-grid')

let iaPlayer

// Contador
let player1 = 0
let player2 = 0

// boxes listeners
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', function () {
    let el = checkEl(player1, player2)

    // Verifica se já jogou X ou O
    if (this.childNodes.length == 0) {
      // Passa um clone do el
      let cloneEl = el.cloneNode(true)
      this.appendChild(cloneEl)
      // computando as jogadas
      if (player1 == player2) {
        player1++

        // Definindo o jogador IA
        if (iaPlayer == 'aiPlayer') {
          // AI
          aiPlay()
          player2++
        }
      } else {
        player2++
      }

      // condição de vitória
      checaCondVitoria()
    }
  })
}

// Verifica o turno do jogador
function checkEl(player1, player2) {
  if (player1 == player2) {
    // player 1
    el = x
  } else {
    // player 2
    el = o
  }
  return el
}

// Condições de vitória

function checaCondVitoria() {
  let b1 = document.getElementById('block-1')
  let b2 = document.getElementById('block-2')
  let b3 = document.getElementById('block-3')

  let b4 = document.getElementById('block-4')
  let b5 = document.getElementById('block-5')
  let b6 = document.getElementById('block-6')

  let b7 = document.getElementById('block-7')
  let b8 = document.getElementById('block-8')
  let b9 = document.getElementById('block-9')

  // Condições

  // Horizontal 1ª linha
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].innerText
    let b2Child = b2.childNodes[0].innerText
    let b3Child = b3.childNodes[0].innerText

    if (b1Child == 'X' && b2Child == 'X' && b3Child == 'X') {
      // vitoria x
      console.log('Vitória do Jogador #1')
      declaraVencedor('X')
    } else if (b1Child == 'O' && b2Child == 'O' && b3Child == 'O') {
      // vitoria o
      console.log('Vitória do Jogador #2')
      declaraVencedor('O')
    }
  }

  // Horizontal 2ª linha
  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.childNodes[0].innerText
    let b5Child = b5.childNodes[0].innerText
    let b6Child = b6.childNodes[0].innerText

    if (b4Child == 'X' && b5Child == 'X' && b6Child == 'X') {
      // vitoria x
      console.log('Vitória do Jogador #1')
      declaraVencedor('X')
    } else if (b4Child == 'O' && b5Child == 'O' && b6Child == 'O') {
      // vitoria o
      console.log('Vitória do Jogador #2')
      declaraVencedor('O')
    }
  }

  // Horizontal 3ª linha
  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7Child = b7.childNodes[0].innerText
    let b8Child = b8.childNodes[0].innerText
    let b9Child = b9.childNodes[0].innerText

    if (b7Child == 'X' && b8Child == 'X' && b9Child == 'X') {
      // vitoria x
      console.log('Vitória do Jogador #1')
      declaraVencedor('X')
    } else if (b7Child == 'O' && b8Child == 'O' && b9Child == 'O') {
      // vitoria o
      console.log('Vitória do Jogador #2')
      declaraVencedor('O')
    }
  }

  // Vertical 1ª linha
  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].innerText
    let b4Child = b4.childNodes[0].innerText
    let b7Child = b7.childNodes[0].innerText

    if (b1Child == 'X' && b4Child == 'X' && b7Child == 'X') {
      // vitoria x
      console.log('Vitória do Jogador #1')
      declaraVencedor('X')
    } else if (b1Child == 'O' && b4Child == 'O' && b7Child == 'O') {
      // vitoria o
      console.log('Vitória do Jogador #2')
      declaraVencedor('O')
    }
  }

  // Vertical 2ª linha
  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2Child = b2.childNodes[0].innerText
    let b5Child = b5.childNodes[0].innerText
    let b8Child = b8.childNodes[0].innerText

    // console.log(b1Child);

    if (b2Child == 'X' && b5Child == 'X' && b8Child == 'X') {
      // vitoria x
      console.log('Vitória do Jogador #1')
      declaraVencedor('X')
    } else if (b2Child == 'O' && b5Child == 'O' && b8Child == 'O') {
      // vitoria o
      console.log('Vitória do Jogador #2')
      declaraVencedor('O')
    }
  }

  // Vertical 3ª linha
  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].innerText
    let b6Child = b6.childNodes[0].innerText
    let b9Child = b9.childNodes[0].innerText

    // console.log(b1Child);

    if (b3Child == 'X' && b6Child == 'X' && b9Child == 'X') {
      // vitoria x
      console.log('Vitória do Jogador #1')
      declaraVencedor('X')
    } else if (b3Child == 'O' && b6Child == 'O' && b9Child == 'O') {
      // vitoria o
      console.log('Vitória do Jogador #2')
      declaraVencedor('O')
    }
  }

  // Diagonal 1ª linha
  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].innerText
    let b5Child = b5.childNodes[0].innerText
    let b9Child = b9.childNodes[0].innerText

    // console.log(b1Child);

    if (b1Child == 'X' && b5Child == 'X' && b9Child == 'X') {
      // vitoria x
      console.log('Vitória do Jogador #1')
      declaraVencedor('X')
    } else if (b1Child == 'O' && b5Child == 'O' && b9Child == 'O') {
      // vitoria o
      console.log('Vitória do Jogador #2')
      declaraVencedor('O')
    }
  }

  // Diagonal 2ª linha
  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].innerText
    let b5Child = b5.childNodes[0].innerText
    let b7Child = b7.childNodes[0].innerText

    // console.log(b1Child);

    if (b3Child == 'X' && b5Child == 'X' && b7Child == 'X') {
      // vitoria x
      console.log('Vitória do Jogador #1')
      declaraVencedor('X')
    } else if (b3Child == 'O' && b5Child == 'O' && b7Child == 'O') {
      // vitoria o
      console.log('Vitória do Jogador #2')
      declaraVencedor('O')
    }
  }

  // Velha

  // Percorre todos os elementos verificando se possuem childNodes, no caso 'X' ou 'O'
  // Se esse contador chegar a 9, que é o total de espaços, então ele deu velha
  // Por isso essa condição está no final da lógica, assim se nenhuma satisfazer
  let contador = 0

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      contador++
      console.log(contador)
    }
  }

  if (contador == 9) {
    console.log('Velha :( !')
    declaraVencedor()
  }
}

// Declara o vencedor
function declaraVencedor(vencedor) {
  // Pontos
  let scoreX = document.querySelector('#p1-points')
  let scoreO = document.querySelector('#p2-points')
  let mensagem = ''

  // Condição que checa qual valor foi vencedor
  // Como se trata de uma string, precisa ser convertido para int e então somar ao placar
  // Em caso de empate/velha não é somado nenhum ponto, apenas retorna uma mensagem
  if (vencedor == 'X') {
    scoreX.textContent = parseInt(scoreX.textContent) + 1
    mensagem = 'Vitória do Jogador #1!'
  } else if (vencedor == 'O' && iaPlayer == 'aiPlayer') {
    scoreO.textContent = parseInt(scoreO.textContent) + 1
    mensagem = 'Vitória da IA!'
  } else if (vencedor == 'O') {
    scoreO.textContent = parseInt(scoreO.textContent) + 1
    mensagem = 'Vitória do Jogador #2!'
  } else {
    mensagem = 'Deu Velha :('
  }

  msgModal.innerHTML = mensagem
  modal.classList.remove('hidden')
  gameGrid.style.pointerEvents = 'none'
  
  setTimeout(function () {
    modal.classList.add('hidden')
    gameGrid.style.pointerEvents = 'initial'
  }, 3000)

  // Reinicia as jogadas
  player1 = 0
  player2 = 0

  setTimeout(function () {
    // Reinicia o tabuleiro
    let reiniciaTab = document.querySelectorAll('.box div')

    for (let i = 0; i < reiniciaTab.length; i++) {
      reiniciaTab[i].parentNode.removeChild(reiniciaTab[i])
    }
  })
}

// AI

// Listeners dos botões
for (let i = 0; i < selectPlayer.length; i++) {
  selectPlayer[i].addEventListener('click', function () {
    iaPlayer = this.getAttribute('id')

    for (let j = 0; j < selectPlayer.length; j++) {
      selectPlayer[j].style.display = 'none'
    }
    setTimeout(function () {
      gameGrid.classList.remove('hidden')
      gameGrid.classList.add('game-grid')
    }, 250)
  })
}

// Função recursiva que adiciona um contador e um verficador de campos preenchidos
//  Assim evita ela ficar iterando infitamente
function aiPlay() {
  let cloneO = o.cloneNode(true)

  contador = 0
  preenchido = 0

  for (let i = 0; i < boxes.length; i++) {
    let randomNum = Math.floor(Math.random() * 5)

    // verifica se o campo está vazio e preeenche ele
    if (boxes[i].childNodes[0] == undefined) {
      if (randomNum <= 1) {
        boxes[i].appendChild(cloneO)
        contador++
        break
      }
      // Checa quantos campos estão preeenchidos
    } else {
      preenchido++
    }
  }
  if (contador == 0 && preenchido < 9) {
    aiPlay()
  }
}
