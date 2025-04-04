alert('Vamos jogar! Tente não cair')

let jogada = 1

while(jogada <= 10) {

    playerjogada = prompt('Nivel ' +jogada+ ' Digite um Número entre 1 e 10, para testar a sua sorte.')
    pisoquebrado = Math.floor(Math.random() * 10) + 1

    if(playerjogada == pisoquebrado) {
        alert('Você não teve sorte, pisou no vidro quebrado. Tente novamente')
        break // encera o jogo de forma imediata
    } else {
        alert('Parabens! Você passou. O piso quebrado estava no '+ pisoquebrado)
    }

    jogada++
}

alert('Obrigado por jogar!')