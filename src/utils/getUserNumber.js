const { Console } = require('@woowacourse/mission-utils');
const Messages = require('../constants/Messages');

const checkValidation = (value) => {
  this.regexr = /^\d{3}$/;
  return this.regexr.test(value);
};

const getUserNumber = () => {
  let userInput;
  Console.readLine(Messages.INPUT_YOUR_GONG, (input) => {
    if (checkValidation(input)) userInput = input;
    else throw new Error(Messages.WRONG_INPUT);
  });
  return userInput.split('').map((it) => +it);
};

module.exports = getUserNumber;
