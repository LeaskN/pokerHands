function winningPokerHand(hand1, hand2) {
  let handValue1 = 0; 
  let handValue2 = 0; 
  let numVal1 = hand1.reduce((c, a) => c.value + a); 
  let numVal2 = hand2.reduce((c, a) => c.value + a);
  // check for straight  
  handValue1 = checkFlush(hand1) && checkStraight(hand1) ? 5 : handValue1;  
  handValue2 = checkFlush(hand2) && checkStraight(hand2) ? 5 : handValue2;
  // Check for flush  
  handValue1 = checkFlush(hand1) ? 6 : handValue1;  
  handValue2 = checkFlush(hand2) ? 6 : handValue2;
  // Check Four of a kind  
  handValue1 = check4OfKind(hand1) ? 8 : handValue1;  
  handValue2 = check4OfKind(hand1) ? 8 : handValue2;
  // Check for straight flush  
  handValue1 = checkFlush(hand1) && checkStraight(hand1) ? 9 : handValue1;
  handValue2 = checkFlush(hand2) && checkStraight(hand2) ? 9 : handValue2;
  //Check for royal flush  
  handValue1 = checkFlush(hand1) && checkStraight(hand1) && (numVal1 === 60) ? 10 : handValue1;  
  handValue1 = checkFlush(hand1) && checkStraight(hand1) && (numVal2 === 60) ? 10 : handValue1;
  return pickWin(handValue1, handValue2);
}
function pickWin(handValue1, handValue2) { 
  if (handValue1 !== handValue2) { 
    return handValue1 > handValue2 ? handValue1 : handValue2; 
  } else if (handValue1 === handValue2) { 
    return `Draw`; 
  } 
}
function check4OfKind(hand) { 
  let dict = {}; 
  for (let i = 0; i < hand.length; i++) { 
    dict[hand[i].value] ? dict[hand[i].value]++ : dict[hand[i].value] = 1; 
    if (dict[hand[i].value] === 4) { return true } 
  } 
}
function checkStraight(hand) {
  const numVals = hand.map(card => card.value)//[1,2,3,4,5]  
  numVals.sort()  
  for(let i = 0; i < numVals.length-1; i++){    
    if(numVals[i] + 1 !== numVals[i+1]){return false}  
  }  
  return true;
}
function checkFlush(hand) { 
  if (hand[0].suit === hand[1].suit && hand[0].suit === hand[2].suit && hand[0].suit === hand[3].suit && hand[0].suit === hand[4].suit) { 
    return true; 
  } 
}
winningPokerHand(
  [{ value: 14, suit: 'S' }, { value: 13, suit: 'S' }, { value: 12, suit: 'S' }, { value: 11, suit: 'S' }, { value: 10, suit: 'S' }], 
  [{ value: 10, suit: 'H' }, { value: 9, suit: 'H' }, { value: 8, suit: 'D' }, { value: 7, suit: 'D' }, { value: 6, suit: 'D' }]
)