function createDice(number) {
    const dotPositionMatrix = {
		1: [
			[50, 50]
		],
		2: [
			[20, 20],
			[80, 80]
		],
		3: [
			[20, 20],
			[50, 50],
			[80, 80]
		],
		4: [
			[20, 20],
			[20, 80],
			[80, 20],
			[80, 80]
		],
		5: [
			[20, 20],
			[20, 80],
			[50, 50],
			[80, 20],
			[80, 80]
		],
		6: [
			[20, 20],
			[20, 80],
			[50, 20],
			[50, 80],
			[80, 20],
			[80, 80]
		]
	};

    let dice = document.createElement("div");

    dice.classList.add("dice");

    for(const dotPosition of dotPositionMatrix[number]) {
        const dot = document.createElement("div");

        dot.classList.add("dice-dot");
        dot.style.setProperty("--top", dotPosition[0] + "%");
        dot.style.setProperty("--left", dotPosition[1] + "%");
        dice.appendChild(dot);


    }

    return dice;
}

function randomizeDice(diceContainer, numberOnDice) {
    diceContainer.innerHTML = "";

    for(let i = 0; i < numberOnDice; i++) {
        const random = Math.floor((Math.random() * 6) + 1)
        const dice = createDice(random);

        diceContainer.appendChild(dice);
    }
}

const diceContainer = document.querySelector(".dice-container");
const btnRollDice = document.querySelector(".btn-roll-dice");
//let rollBtn = document.querySelector("#btn-roll-dice");


btnRollDice.addEventListener("click", () => {
    let interval = setInterval(() => {
        randomizeDice(diceContainer, NUMBER_OF_DICE);
    }, 30)

    let NUMBER_OF_DICE = changeDiceNumber();
    randomizeDice(diceContainer, NUMBER_OF_DICE);

    setTimeout(() => clearInterval(interval), 500);
});

// change number of dice with radio buttons
//
function changeDiceNumber() {
    let radios = document.getElementsByName("numOfDice");
    for(let i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            return radios[i].value;
        }
    }
}

//doesn't work yet
function disableButton() {
    btnRollDice.disabled = true;
    setTimeout(function(){
        btnRollDice.disabled = false;
    }, 500);
}
