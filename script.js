let order = [];
let clickedOrder = [];
let score = 0;

//0 - VERDE
//1 - VERMELHO
//2 - AMARELO
//3 - AZUL

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');


//CRIANDO ORDEM ALEATÓRIA DE CORES
let shuffleOrder = () => {

    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}


//LIGANDO A PRÓXIMA COR
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}


//VERIFICANDO SE A ORDEM É A MESMA QUE FOI GERADA RANDOMICAMENTE
let checkOrder = () => {
    for( let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }

    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}


//FUNÇÃO PARA O CLIQUE DO USUÁRIO
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}


//FUNÇÃO QUE RETORNA A COR
let createColorElement = (color) => {
    if (color == 0){
        return green;
    }else if (color == 1){
        return red;
    }else if (color == 2){
        return yellow;
    }else if (color == 3){
        return blue;
    }
}


//FUNÇÃO PARA O PRÓXIMO NÍVEL DE JOGO
let nextLevel = () => {
    score++;
    shuffleOrder();
}


//FUNÇÃO GAME OVER
let gameOver = () => {
    somGameover.play();
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`);
    order = [];
    clickOrder = [];

    playGame();
}


//FUNÇÃO DE INICIAR O JOGO
let playGame = () => {
    alert('Bem vindo ao Jogo Genêsis! Iniciando um novo jogo!');
    score = 0;
    
    var somGameover=document.getElementById("somGameover");

    nextLevel();
}


//EVENTOS DE CLIQUES PARA AS CORES
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//INICIO DO JOGO
playGame();