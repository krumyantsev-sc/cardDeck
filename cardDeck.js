class Card {
    constructor(suit, cardName) {
        this.suit = suit;
        this.cardName = cardName;
    }
}

class Deck {
    cards = [];
    fill() {
        const suites = ["бубен","крести","червей", "пик"];
        const cardNames = ["6", "7", "8", "9", "10", "Валет", "Дама", "Король", "Туз"];
        for (let i = 0; i < cardNames.length; i++) {
            for (let k = 0; k < suites.length; k++) {
                const card = new Card(suites[k], cardNames[i]);
                this.cards.push(card);
            }
        }
    }

    takeCard() {
        if (this.cards.length === 0) {
            return this.cards;
        }
        return this.cards.pop();
    }

}

function deckWrap() {
    let deck = new Deck();
    deck.fill();
    return function takeCards(number) {
        console.log(`В колоде было ${deck.cards.length}`)
        for (let i = 0; i < number; i++) {
            console.log(deck.takeCard());
        }
        console.log(`В колоде стало ${deck.cards.length}`)
    }
}

let cardDeck = deckWrap();
console.log(cardDeck(6));
console.log(cardDeck(6));