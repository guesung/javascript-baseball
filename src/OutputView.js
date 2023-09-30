const { Console } = require('@woowacourse/mission-utils');
const Messages = require('./constants/Messages');

class OutputView {
  static printResult({ ballCount, strikeCount }) {
    Console.print(
      `${ballCount ? `${ballCount}${Messages.GUESS_GONG_RESULT_BALL}` : ''} ${strikeCount
        ? `${strikeCount}${Messages.GUESS_GONG_RESULT_STRIKE}`
        : ''
      }`,
    );
  }

  static PrintSucessResult() {
    Console.print(Messages.GUESS_GONG_RESULT_SUCCESS);
    Console.print(Messages.REPLAY);
  }
}

module.exports = OutputView;
