//Set up variables
let coin = document.querySelector(".coin");
let flipButton = document.querySelector("#flipButton");
let resetButton = document.querySelector("#resetButton");
let headCount = 0;
let tailCount = 0;

//what happens when flip button is clicked
flipButton.addEventListener("click", () => {
    //resets coin animations
    coin.style.animation = "none";
    
    // random number generator i
    let i = Math.random();

    //if i > 0.5, spin heads
    if(i > 0.5) {
        setTimeout(function(){
            coin.style.animation = "flipHeads 2s forwards";
        }, 100);
        headCount++;
    }

    //if i < 0.5, spin tails
    else{
        setTimeout(function(){
            coin.style.animation = "flipTails 2s forwards";
        }, 100);
        tailCount++;
    }

    //update head/tails score
    setTimeout(updateStats, 2000);
});

//update number of heads and tails
function updateStats() {
    document.querySelector("#headsCount").textContent = `Number of heads: ${headCount}`;
    document.querySelector("#tailsCount").textContent = `Number of tails: ${tailCount}`;
}

//reset counter and coin state
resetButton.addEventListener("click", () => {
    coin.style.animation = "none";
    headCount = 0;
    tailCount = 0;
    updateStats();
});