const { Console } = require('@woowacourse/mission-utils');
const Messages = require('./constants/Messages');
const matchComputerVSUser = require('./utils/matchComputerVSUser');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  isReplay = true;

  play() {
    Console.print(Messages.GAME_START);
    this.gameStart();
  }

  gameStart() {
    while (this.isReplay) {
      const computerNumber = InputView.getComputerNumber();
      while (1) {
        const userNumber = InputView.getUserNumber();
        const { strikeCount, ballCount } = matchComputerVSUser(
          computerNumber,
          userNumber,
        );
        OutputView.printResult({ strikeCount, ballCount });

        if (strikeCount === 3) {
          OutputView.PrintSucessResult();
          Console.readLine('', (input) => {
            if (input === '1') return;
            if (input === '2') this.isReplay = false;
            else throw new Error(Messages.WRONG_INPUT);
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
