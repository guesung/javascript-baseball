const { Console, Random } = require('@woowacourse/mission-utils');
const Messages = require('./constants/Messages');
const Regexr = require('./constants/Regexr');

const checkValidation = (value) => Regexr.gong.test(value);

class InputView {
  static getUserNumber() {
    Console.readLine(Messages.INPUT_YOUR_GONG, (input) => {
      if (checkValidation(input)) this.userInput = input;
      else throw new Error(Messages.WRONG_INPUT);
    });
    return this.userInput.split('').map((it) => +it);
  }

  static getComputerNumber() {
    this.computerNumber = [];
    while (this.computerNumber.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 10);
      if (!this.computerNumber.includes(randomNumber)) { this.computerNumber.push(randomNumber); }
    }
    return this.computerNumber;
  }
}

module.exports = InputView;
