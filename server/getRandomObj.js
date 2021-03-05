const getRandomObj = (numbers) => {
  let randomNumber = Math.floor(Math.random() * numbers.length -1);
  return (numbers[randomNumber] <= 15) ? {
    letter: 'B',
    number: numbers[randomNumber]
  } : (numbers[randomNumber] > 15 && numbers[randomNumber] <= 30) ? {
    letter: 'I',
    number: numbers[randomNumber]
  } : (numbers[randomNumber] > 30 && numbers[randomNumber] <= 45) ? {
    letter: 'N',
    number: numbers[randomNumber]
  } : (numbers[randomNumber] > 45 && numbers[randomNumber] <= 60) ? {
    letter: 'G',
    number: numbers[randomNumber]
  } : {
    letter: 'O',
    number: numbers[randomNumber]
  };
};

module.exports = getRandomObj;
