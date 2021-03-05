const getRandomObj = require('./getRandomObj');
const BingoCard = require('./bingoCard');

class BingoGame {
  constructor(players, type) {
    this.players = players;
    this.type = type;
    this.calledNumbers = ['FREE'];
    this.cards = [];
    this.totalCards = this.cards.length;
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
  callNumber(){
    let { numbers, calledNumbers } = this;
    let temp = getRandomObj(numbers);
    let { num } = temp;
    if (!calledNumbers.includes(num)) {
      calledNumbers.push(num);
      return temp;
    } else {
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
      // Regular B.I.N.G.O. game

    }
  }
}
