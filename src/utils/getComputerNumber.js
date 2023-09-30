const { Random } = require('@woowacourse/mission-utils');

const getComputerNumber = () => {
  this.computerNumber = [];
  while (this.computerNumber.length < 3) {
    const randomNumber = Random.pickNumberInRange(1, 10);
    if (!this.computerNumber.includes(randomNumber)) { this.computerNumber.push(randomNumber); }
  }
  return this.computerNumber;
};

module.exports = getComputerNumber;
