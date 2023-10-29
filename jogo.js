let numeroSecreto = Math.trunc (Math.random()*20+1);
let score = 20
// Math.trunc = Arredondar o número 
console.log(numeroSecreto);

document.querySelector('.check'). addEventListener('click', checkResult)

function checkResult() {
    let numeroJogador = document.querySelector('.tentativa').value
    numeroJogador = Number(numeroJogador)
    console.log(numeroJogador)
    if (score <= 0) {
        document.querySelector('.status'). textContent = 'Game Over'
        document.querySelector('body').style.backgroundImage = 'radial-gradient(circle, #da0030, #e30037, #ed003f, #f60046, #ff004e)';
    } else if (numeroJogador > numeroSecreto) {
        console.log('Um pouco menos...')
        score--
        document.querySelector('.status'). textContent = 'Um pouco menos...';
        document.querySelector('.pontuacao'). textContent = `Pontuação: ${score}`;
    } else if (numeroJogador < numeroSecreto) {
        console.log('Um pouco mais...')
        score--
        document.querySelector('.status'). textContent = 'Um pouco mais...';
        document.querySelector('.pontuacao'). textContent = `Pontuação: ${score}`;
    } else if (numeroJogador === numeroSecreto) {
        console.log('Acertou!!!')
        document.querySelector('.status'). textContent = 'Acertou!!!';
        document.querySelector('body').style.backgroundImage = 'radial-gradient(circle, #e0ff0d, #ffa900, #ff4161, #e300a9, #2543cf)';
    } else {
        score--
        document.querySelector('.pontuacao'). textContent = `Pontuação: ${score}`;
        document.querySelector('.status'). textContent = 'Insira um numero'
    }
}
function resetaJogo() {
    score = 20;
    numeroSecreto = Math.trunc(Math.random()*20);
    document.querySelector('.status').textContent =  `Tente a sorte!`
    document.querySelector('.pontuacao').textContent = `Pontuação: ${score}`
    document.querySelector('.tentativa').value = '';
    console.log(numeroSecreto)
}

document.querySelector('.reset').addEventListener('click', resetaJogo)

function resetaJogo () {
    document.querySelector('body').style.backgroundImage = 'radial-gradient(circle, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)'
}

let btnmodal = document.querySelector('.btnmodal')

btnmodal.addEventListener('click', abrirModal)

function abrirModal() {
    document.querySelector('.janelamodal').style.display = 'block'
    overlay.style.display = 'block'
}

let close = document.querySelector('.janelamodal')
let overlay = document.querySelector('.overlay')

close.addEventListener('click', fecharModal) //ou 'mouseover' na ação

function fecharModal() {
    close.style.display = 'none'
    overlay.style.display = 'none'
}

