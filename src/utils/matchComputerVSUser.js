const getStrikeCount = (computerNumber, userNumber) => {
  this.strikeCount = 0;
  for (let i = 0; i < 3; i += 1) {
    if (computerNumber[i] === userNumber[i]) this.strikeCount += 1;
  }
  return this.strikeCount;
};

const getBallCount = (computerNumber, userNumber) => {
  this.ballCount = 0;
  for (let i = 0; i < 3; i += 1) {
    if (
      computerNumber.includes(userNumber[i])
      && computerNumber[i] !== userNumber[i]
    ) { this.ballCount += 1; }
  }
  return this.ballCount;
};
const matchComputerVSUser = (computerNumber, userNumber) => {
  const strikeCount = getStrikeCount(computerNumber, userNumber);
  const ballCount = getBallCount(computerNumber, userNumber);
  return { strikeCount, ballCount };
};

module.exports = matchComputerVSUser;
