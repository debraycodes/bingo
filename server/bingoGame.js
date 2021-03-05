const getRandomObj = require('./getRandomObj');
const BingoCard = require('./bingoCard');

class BingoGame {
  constructor(players, type) {
    this.players = players;
    this.type = type;
    this.calledNumbers = ['FREE'];
    this.cards = [];
    this.totalCards = this.cards.length;
  }
  spawnCards(player){
    if (player.numCards == 1) {
      let card = new BingoCard(player);
      this.cards.push(card)
    } else {
      let count = 0;
      while (count < player.numCards) {
        let card = new BingoCard(player);
        this.cards.push(card);
        count++;
      }
    }
  }
  checkForWinners(){
    if (this.type == 'blackout') {
      let numMatches = 0;
      this.cards.map(card => {
        let {B, I, N, G, O} = card;
        let { calledNumbers } = this;
        // B
        let index = 0;
        let matches = true;
        while (index < B.length && calledNumbers.includes(B[index])) {
          if (!calledNumbers.includes(B[index + 1])){
            matches =  false;
            return;
          };
          numMatches++;
          index++
        };
        // I
        // N
        // G
        // O
      })
    } else {

    }
  }
}
