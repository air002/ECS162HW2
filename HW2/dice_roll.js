function rollDice() {
	let numOfDice = changeDiceNumber();
	let dicePics = document.getElementById("dicePics");
	let images = [];

	for(let i = 0; i < numOfDice; i++) {
		let ranNum = Math.random();
        let value = Math.floor((ranNum * 6) + 1);
		images.push(`<img src="dice${value}.png" alt="dice${value}">`);
	}

	dicePics.innerHTML = images.join('');
}

// change number of dice with radio buttons
function changeDiceNumber() {
    let radios = document.getElementsByName("numOfDice");
    for(let i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            return radios[i].value;
        }
    }
}