/*
    Selects numCards cards from deck to be used for the sideCards
    returns an array of these cards
*/
export function getSideCards(deck, numCards) {
    let sideCards = [];

    for(let i=0; i < numCards; i++) {
        sideCards.push(getRandomCard(deck));
    }

    return sideCards;
}

function getRandomCard(deck) {
    return deck[getRandomNumber(0, deck.length - 1)];
}

// creates a deck of cards without the aces
export function createDeck() {
    let deck = [];

    for(let i=2; i<=13; i++) {
        for(let suit=0; suit < 4; suit++) {
            deck.push(createCard(i, suit));
        }
    }

    return deck;
}

// generates a card that isn't an ace
function createCard(id, suitId) {
    let name = getCardName(id); // king is 13 ace is 1
    let suit = suits[suitId];
    let image = {uri: `card_${name}_of_${suit}`};

    return {
            name: name,
            suit: suit,
            image: image
        };
}

function getCardName(value) {
    switch(value) {
        case 1:
            return 'ace';
        case 11:
            return 'jack';
        case 12:
            return 'queen';
        case 13:
            return 'king';
        default:
            return value;

    }
}

function cardIsDuplicate(list, card) {
    list.forEach((elem) => {
        if(elem.image.uri == card.image.uri) {
            return true;
        }
    });

    return false;
}

/**
 * Returns a random whole number between min (inclusive) and max (inclusive)
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
