class BingoCard {
  constructor(player) {
    this.B = [],
    this.I = [],
    this.N = [],
    this.G = [],
    this.O = [],
    this.player = player
  }
  fillCard(){
    // B
    while (this.B.length < 5){
      let num = Math.floor(Math.random() * 15);
      if (!this.B.includes(num + 1)){
        this.B.push(num + 1);
      };
    };
    // I
    while (this.I.length < 5){
      let num = Math.floor(Math.random() * 15);
      if (!this.I.includes(num + 16)){
        this.I.push(num + 16);
      };
    };
    // N
    while (this.N.length < 5){
      let num = Math.floor(Math.random() * 15);
      if (!this.N.includes(num + 31)){
        this.N.push(num + 31);
      };
    };
    this.N.splice(2, 1, 'FREE')
    // G
    while (this.G.length < 5){
      let num = Math.floor(Math.random() * 15);
      if (!this.G.includes(num + 46)){
        this.G.push(num + 46);
      };
    };
    // O
    while (this.O.length < 5){
      let num = Math.floor(Math.random() * 15);
      if (!this.O.includes(num + 61)){
        this.O.push(num + 61);
      };
    };
  };
};

// let card = new BingoCard()
// card.fillCard()
// console.log('B: ' + card.B, 'I: ' + card.I, 'N: ' + card.N, 'G: ' + card.G, 'O: ' + card.O);
module.exports = BingoCard;
