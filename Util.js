/*
    Creates numCards cards to be used on the sideCards
    returns an array of these cards
*/
export function generateSideCards(numCards) {
    let sideCards = [];

    for(let i=0; i < numCards; i++) {
        let card = generateCard();
        while(cardIsDuplicate(sideCards, card)) {
            card = generateCard();
        }

        sideCards.push(card);
    }

    return sideCards;
}

// generates a card that isn't an ace
function generateCard() {
    let name = getCardName(getRandomNumber(2, 13)); // king is 13 ace is 1
    let suit = suits[getRandomNumber(0, 3)];
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
