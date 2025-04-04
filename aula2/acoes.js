nome = prompt('Como posso te chamar?')

let sad = document.getElementById('saudacao')
sad.innerHTML = `Olá, ${nome}`

let res = document.getElementById('resutado')

 //esta funcionado
/*function jogar() {
    //mapeia os números para as escolhas
    const chance = ['pedra', 'papel', 'tesoura']

    // Verifica se aescolha do jogador está entre 1 e 3
    if(jogada < 1 || jogada > 3){
        res.innerText = 'Escolha inválida! Digite 1 para Pedra, 2 para Papel ou 3 para Tesoura.'; return;// Sai da função se aescolha for inválida
    }

    const playerselector = chance[jogada - 1]

    let jogada = document.getElementById('SJ')
    jogada = Number(jogada.value)
    let jogadacom = Math.floor(Math.random() * 3) + 1
    res = ''

    if(jogada == jogadacom){
        res = 'Empate! Ambos escolheram' + jogada + '.'
    } else if(
        (jogada == 'pedra' && jogadacom == 'tesoura') ||
        (jogada == 'papel' && jogadacom == 'pedra') ||
        (jogada == 'tesoura' && jogadacom == 'papel')
    ){
        res = 'Você ganhou!' + 'vence' + jogadacom + '.'
    }
}*/

function play(jogadorchances){
    const chances = ['pedra', 'papel', 'tesoura']
    const compchance = chances[Math.floor(Math.random() * chances.length)]
    let resut = ''

    if(jogadorchances == compchance){
        result = 'Empate! Ambos escolheram' + jogadorchances + '.'
    } else if(
        (jogadorchances == 'pedra' && compchance == 'tesoura') ||
        (jogadorchances == 'papel' && compchance == 'pedra') ||
        (jogadorchances == 'tesoura' && compchance == 'papel')
    ){
        resut = 'Você ganhou! ' + jogadorchances + ' vence ' + compchance + '.'
    } else{
        resut = 'Você perdeu! ' + compchance + ' vence ' + jogadorchances + '.'
    }

    document.getElementById('resutado').innerText = resut

}