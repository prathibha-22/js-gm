const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const deck = [];
var drawn1;
var drawn2;
const discDeck1 = [];
const discDeck2 = [];
const penDeck = [];
const deck1 = [];
const deck2 = [];
var flag = true;
for (let i = 1; i < 5; i++) {
  for (let x = 0; x < values.length; x++) {
    deck.push(values[x]);
  }
}
shuffle(deck, deck.length);

for (i = 0; i < deck.length; i++) {
  if (i >= deck.length / 2) deck1.push(deck[i]);
  else if (Number.isInteger(deck[i])) deck2.push(deck[i]);
}

function shuffle(deckObj, lngth) {
  for (let i = deckObj.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * lngth);
    let temp = deckObj[i];
    deckObj[i] = deckObj[j];
    deckObj[j] = temp;
  }
  return deckObj;
}

while (flag) {
  console.log("\n");
  var ttlDeck1 = deck1.length + discDeck1.length;
  var ttlDeck2 = deck2.length + discDeck2.length;
  if (deck1.length != 0) {
    drawn1 = deck1.pop();
  } else if (discDeck1.length != 0) {
    shuffle(discDeck1, discDeck1.length);
    for (i = 0; i < discDeck1.length; i++) {
      deck1.push(discDeck1.pop());
    }
    drawn1 = deck1.pop();
  } else {
    flag = false;
    console.log("Player 2 wins the game");
    break;
  }
  if (deck2.length != 0) {
    drawn2 = deck2.pop();
  } else if (discDeck2.length != 0) {
    shuffle(discDeck2, discDeck2.length);
    for (i = 0; i < discDeck2.length; i++) deck2.push(discDeck2.pop());
    drawn1 = deck2.pop();
  } else {
    flag = false;
    console.log("Player 1 wins the game");
    break;
  }

  console.log("player 1 (" + ttlDeck1 + " cards): " + drawn1);
  console.log("player 2 (" + ttlDeck2 + " cards): " + drawn2);
  if (drawn1 > drawn2) {
    discDeck1.push(drawn1);
    discDeck1.push(drawn2);
    for (i = 0; i < penDeck.length; i++) discDeck1.push(penDeck.pop());
    console.log("player 1 wins  this round");
  } else if (drawn1 < drawn2) {
    discDeck2.push(drawn1);
    discDeck2.push(drawn2);
    for (i = 0; i < penDeck.length; i++) discDeck2.push(penDeck.pop());
    console.log("player 2 wins this round");
  } else {
    console.log("toss ");
    penDeck.push(drawn1);
    penDeck.push(drawn2);
  }
}
