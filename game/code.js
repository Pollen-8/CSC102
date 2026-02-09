//casino JavaScript logic 
var spinCount = 0;

function playGame() {
	//checks if you're shorting me on a name
	var playerName = document.getElementById("playerName").value;
	if (playerName === "") {
		document.getElementById("messageOutput").textContent = "Name please.";
		return false;}
	//no name, no game
	else { 
	updateSpinCounter();
	var reel1 = Math.floor(Math.random() * 5) + 1; 	
	var reel2 = Math.floor(Math.random() * 5) + 1; 
	var reel3 = Math.floor(Math.random() * 5) + 1; 
		//gambling addiction activated
document.getElementById("gameOutput").textContent="🎰 Reels: " + reel1 + " | " + reel2 + " | " + reel3;
//this SHOULD show the results on the page. we'll see. [update] IT DOES
		if (reel1 === reel2 && reel2 === reel3) {
			document.getElementById("messageOutput").textContent = "JACKPOT !" + playerName + " won BIG!";}  
		else if (reel1 === reel2 || reel1 === reel3 || reel2 === reel3) {
			document.getElementById("messageOutput").textContent = "Nice spin, " + playerName +"! You got a small win.";} 
		else { 
			document.getElementById("messageOutput").textContent = "Nice try, spin again, " + playerName + "!";}  
		return false;} 
}

function updateSpinCounter() { 

spinCount++;
	
	document.getElementById("spinOutput").textContent = "Spins: " + spinCount;
	//keeps track of your gambling addiction

}