const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game"); 

let placar = setInterval(updated);
let pontuacao = 0;

function updated(){
    var pontos = document.getElementById('score');
    pontos.innerHTML = "score: " + pontuacao++;
    clearInterval(placar);
}

function tocaMarioDeath(){
    document.querySelector("#mario_death").play();
};
function tocaMarioCoin(){
    document.querySelector("#mario_coin").play();
};

const jump = () => {
    mario.classList.add("jump-mario"); 

    setTimeout(() =>{
        mario.classList.remove("jump-mario");
    }, 500); 
};

const loopGame = setInterval(() => { 
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window 
        .getComputedStyle(mario)
        .bottom.replace("px", "")

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = "none";
        pipe.style.left =`${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./images/mario-game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "45px";

        tocaMarioDeath();

        clearInterval(loopGame);

    }else if(pipePosition <= 0 && marioPosition >= 0){

        tocaMarioCoin();
        updated();

    };

}, 10);

document.addEventListener("keydown", jump);