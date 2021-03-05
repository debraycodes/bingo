const getRandomObj = require('./getRandomObj');
const BingoCard = require('./bingoCard');

class BingoGame {
  constructor(players, type) {
    // players in game (empty array?)
    this.players = players;
    // type of game ('blackout' or regular)
    this.type = type;
    // Called numbers (includes 'FREE' space)
    this.calledNumbers = ['FREE'];
    // Cards in play (game)
    this.cards = [];
    // number of cards in play
    this.totalCards = this.cards.length;
    // Possible B.I.N.G.O. numbers
    this.numbers = [
      1,2,3,4,5,6,7,8,9,10,
      11,12,13,14,15,16,17,18,19,20,
      21,22,23,24,25,26,27,28,29,30,
      31,32,33,34,35,36,37,38,39,40,
      41,42,43,44,45,46,47,48,49,50,
      51,52,53,54,55,56,57,58,59,60,
      61,62,63,64,65,66,67,68,69,70,
      71,72,73,74,75
    ];
    // Winners will be pushed into this array
    this.winners = [];
  }
  // Create card(s)
  spawnCards(player){
    // If player has one card
    if (player.numCards == 1) {
      // create card
      let card = new BingoCard(player);
      this.cards.push(card)
    } else {
      // If player has more than one card create one card
      let count = 0;
      while (count < player.numCards) {
        // create card for each one of players cards if more than one
        let card = new BingoCard(player);
        this.cards.push(card);
        count++;
      }
    }
  }
  // Call Bingo number ie: B-12 (using getRandomObj func)
  callNumber(){
    let { numbers, calledNumbers } = this;
    let temp = getRandomObj(numbers);
    let { num } = temp;
    // If number hasn't been called already
    if (!calledNumbers.includes(num)) {
      // push number into calledNumbers array
      calledNumbers.push(num);
      return temp;
    } else {
      // If number has been called already
      while(calledNumbers.includes(temp.number)){
        temp  = getRandomObj(numbers);
      }
      calledNumbers.push(num);
      return temp;
    }
  }
  checkForWinners(){
    if (this.type == 'blackout') {
      // Blackout B.I.N.G.O. game
      let numMatches = 0;
      this.cards.map(card => {
        let {B, I, N, G, O} = card;
        let { calledNumbers } = this;
        // B
        let index = 0;
        let matches = true;
        while (index < B.length && calledNumbers.includes(B[index])) {
          if (!calledNumbers.includes(B[index + 1])){
            matches = false;
            return;
          }
          numMatches++;
          index++
        };
        // I
        index = 0;
        let matches = true;
        while (index < B.length && calledNumbers.includes(B[index])) {
          if (!calledNumbers.includes(B[index + 1])){
            matches = false;
            return;
          }
          numMatches++;
          index++
        };
        // N
        // G
        // O
      });
      // If all boxes on card were called it is a winner
      if (numMatches == 25) {

      }
    } else {
      // Regular B.I.N.G.O. game
      // Potential winning combinations
      // [B0-4], [I0-4], [N0-4], [G0-4], [O0-4]
      // [B0,I0,N0,G0,O0], [B1,I1,N1,G1,O1], [B2,I2,N2,G2,O2], [B3,I3,N3,G3,O3],
      // [B4,I4,N4,G4,O4], [B5,I5,N5,G5,O5], [B0,I1,N2,G3,O4], [B4,I3,N2,G1,O0]
      let { cards } = this;
      cards.map(card => {
        // [B0-4] If  entire B column has been called - Winner
        if (calledNumbers.includes(card.B[0]) && calledNumbers.includes(card.B[1])
            && calledNumbers.includes(card.B[2]) && calledNumbers.includes(card.B[3])
            && calledNumbers.includes(card.B[4])) {

        }
        // [I0-4] If  entire I column has been called - Winner
        if (calledNumbers.includes(card.I[0]) && calledNumbers.includes(card.I[1])
            && calledNumbers.includes(card.I[2]) && calledNumbers.includes(card.I[3])
            && calledNumbers.includes(card.I[4])) {

        }
        // [N0-4] If  entire N column has been called - Winner
        if (calledNumbers.includes(card.N[0]) && calledNumbers.includes(card.N[1])
            && calledNumbers.includes(card.N[2]) && calledNumbers.includes(card.N[3])
            && calledNumbers.includes(card.N[4])) {

        }
        // [G0-4] If  entire G column has been called - Winner
        if (calledNumbers.includes(card.B[0]) && calledNumbers.includes(card.B[1])
            && calledNumbers.includes(card.B[2]) && calledNumbers.includes(card.B[3])
            && calledNumbers.includes(card.B[4])) {

        }
      })
    }
  }
}
