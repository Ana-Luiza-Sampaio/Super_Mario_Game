let mario = document.querySelector(".super-mario");
let pipe = document.querySelector(".pipe-game"); 
let pontos = document.getElementById('score');
const game_over = document.querySelector('#game_over');
const reset_button = document.querySelector('#reset_button');
const start_button = document.querySelector('#start_button');

let pontuacao = 0;

function updated() {
  pontos.innerHTML = "score: " + pontuacao++;
};

/*function tocaMarioDeath(){
    document.querySelector("#mario_death").play();
};
function tocaMarioCoin(){
    document.querySelector("#mario_coin").play();
};*/

const jump = () => {
    mario.classList.add("jump-mario"); 

    setTimeout(() =>{
        mario.classList.remove("jump-mario");
    }, 500); 
};


const loopGame = setInterval(() => { 
    
    let pipePosition = pipe.offsetLeft;
    let marioPosition = +window 
        .getComputedStyle(mario)
        .bottom.replace("px", "");

    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = "none";
        pipe.style.left =`${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./images/mario-game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "45px"; 

        //tocaMarioDeath();
        game_over.style.display = 'block';
        clearInterval(loopGame);

        reset_button.addEventListener('click', () => {
        });
            

    }else if(pipePosition <= 0  && marioPosition > 0){

        //tocaMarioCoin();
        updated();

    }

}, 100);
 
document.addEventListener("keydown", jump);
