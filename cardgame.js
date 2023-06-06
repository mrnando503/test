let suits = ['diamonds', 'spades','heats', 'clubs' ];
let values = ['A', '2', '3', '4', '5', '6', '7', 'J', 'Q', 'K'];

class Deck {
    constructor () {
        this.deck = [];
        for (const suit of suits) {
            for (const value of values) {
                this.deck.push({ suit, value });
            }
        }
    }

    shuffle() {
        for (let index = this.deck.length -1; index > 0; index--){
            const n = Math.floor(Math.random() * (index + 1));
            [this.deck[index], this.deck[n]] = [this.deck[n], this.deck[index]]
        }
    } 
        }

        let deck = new Deck();
        deck.shuffle();

        let player1Card = [];
        let player2Card = [];
        let player1 = [];
        let player2 = [];

        for (let index = 0; index < 20; index++) {
            player1.push(deck.deck[index])
            player2.push(deck.deck[index + 20]);
        
        };
    let player1Score = 0;
    let player2Score = 0;

 while (player1.length > 0 && player2.length > 0) {
    let player1Card = player1.shift();
    let player2Card = player2.shift();
 
 if (values.indexOf(player1Card.value) > values.indexOf(player2Card.value)){
    player1Score++;
 } else if (values.indexOf(player1Card.value) < values.indexOf(player2Card.value)){
    player2Score++;
}
 }

 console.log(`Player 1: ${player1Score} points`);
 console.log(`Player 2: ${player2Score} points`);
 if (player1Score > player2Score){
    console.log("player1 wins")
 } else if (player1Score < player2Score) {
    console.log("player: 2 wins")
 } else {
    console.log("No body wins");
 }
