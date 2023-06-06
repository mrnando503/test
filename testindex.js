let expect = chai.expect;

describe('shuffle', function() {
    it('should return my answer' , function() {
        let shuffleDeck = new Deck();
        shuffleDeck.shuffle()
        console.log(shuffleDeck);
        expect(shuffleDeck.deck.length).to.equal(40)
    });
    });
   