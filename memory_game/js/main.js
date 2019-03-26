console.log("Up and running!");




var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

//var cardOne = cards[0];
//var cardTwo = cards[1]

//cardsInPlay.push(cardOne);
//cardsInPlay.push(cardTwo);

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("you found a match!");
				} else {
					console.log("Sorry, try again");
		}
		
	}
}	

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);

	cardsInPlay.push(cards[cardId]);

	checkForMatch();	
	

}

flipCard(3);
flipCard(0);



