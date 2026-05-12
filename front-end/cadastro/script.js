const robo = document.getElementById("robo");

let subindo = true;
let posicao = 0;

setInterval(() => {

    if(subindo){
        posicao++;
    }else{
        posicao--;
    }

    robo.style.transform = `translateY(${-posicao}px)`;

    if(posicao >= 15){
        subindo = false;
    }

    if(posicao <= 0){
        subindo = true;
    }

}, 40);