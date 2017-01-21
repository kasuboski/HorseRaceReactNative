export function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

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
    let randomIndex = getRandomNumber(0, deck.length - 1);
    let card = deck[randomIndex];
    deck.splice(randomIndex, 1);
    return card;
}

// creates a deck of cards without the aces
// TODO shuffle the deck before returning
export function createDeck() {
    let deck = [];

    for(let i=2; i<=13; i++) {
        for(let suit=0; suit < 4; suit++) {
            deck.push(createCard(i, suit));
        }
    }
    shuffle(deck);

    return deck;
}

export function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

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
