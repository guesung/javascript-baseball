const { Console } = require('@woowacourse/mission-utils');
const Messages = require('./constants/Messages');
const getUserNumber = require('./utils/getUserNumber');
const getComputerNumber = require('./utils/getComputerNumber');
const matchComputerVSUser = require('./utils/matchComputerVSUser');

class App {
  isReplay = true;

  play() {
    Console.print(Messages.GAME_START);
    this.gameStart();
  }

  gameStart() {
    while (this.isReplay) {
      const computerNumber = getComputerNumber();
      while (1) {
        const userNumber = getUserNumber();
        const { strikeCount, ballCount } = matchComputerVSUser(
          computerNumber,
          userNumber,
        );
        Console.print(
          `${ballCount ? `${ballCount}${Messages.GUESS_GONG_RESULT_BALL}` : ''} ${strikeCount
            ? `${strikeCount}${Messages.GUESS_GONG_RESULT_STRIKE}`
            : ''
          }`,
        );
        if (strikeCount === 3) {
          Console.print(Messages.GUESS_GONG_RESULT_SUCCESS);
          Console.print(Messages.REPLAY);
          Console.readLine('', (input) => {
            if (input === '1') return;
            if (input === '2') this.isReplay = false;
            else throw new Error('잘못된 값을 입력하였습니다.');
          });
          break;
        }
        if (strikeCount === 0 && ballCount === 0) Console.print(Messages.GUESS_GONG_RESULT_NOTHING);
      }
    }
    return this.isReplay;
  }
}

module.exports = App;
