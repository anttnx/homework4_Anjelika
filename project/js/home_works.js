//gmail


const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[a-zA-Z0-8._%+-]+@gmail \.com$/;

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    }else {
        gmailResult.innerHTML = "NOT OK"
        gmailResult.style.color = "red"
    }
}



//move Block

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let positionX = 0;
let positionY = 0;

const maxOffsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const maxOffsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

console.log(maxOffsetWidth);

const moveBlock = () => {
    if (positionX < maxOffsetWidth && positionY=== 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock);
    }else if(positionY < maxOffsetHeight && positionX=== maxOffsetWidth ) {
        positionY++
        childBlock.style.top =`${positionY}px`
        requestAnimationFrame(moveBlock);
    }else if(positionX > 0 && positionY=== maxOffsetHeight){
        positionX--
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(moveBlock);
    }else if(positionY > 0 && positionX=== 0){
        positionY--
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(moveBlock);
    }else {
        positionY=0 
        positionX=0
        requestAnimationFrame(moveBlock);
    }      
};

moveBlock();


//STOP WATCH

const secondsBlock = document.querySelector("#seconds");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let count = 0;
let interval = null;
let begin = false;

startBtn.addEventListener("click",()=> {
    if(!begin){
        begin = true
        interval = setInterval(() => {
        count++
        secondsBlock.innerHTML = `${count}`
    } ,1000 ) }
});

stopBtn.addEventListener("click",() => {
    clearInterval(interval)
    begin = false
});

resetBtn.addEventListener("click",() => {
    clearInterval(interval)
    begin = false
    count = 0 
    secondsBlock.innerHTML = `${count}`
});





