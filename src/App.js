const { Console, Random } = require('@woowacourse/mission-utils');
const Messages = require('./constants/Messages');

class App {
  play() {
    while (1) {
      Console.print(Messages.GAME_START);
      const computerNumberList = this.getRandomNumberList();
      const isReplay = this.doPlay(computerNumberList);
      if (!isReplay) break;
    }
  }

  // 1. 컴퓨터 숫자값 선택하기
  getRandomNumberList() {
    this.computerNumberList = [];
    while (this.computerNumberList.length < 3) {
      const randomNumber = Random.pickNumberInRange(1, 10);
      if (!this.computerNumberList.includes(randomNumber)) { this.computerNumberList.push(randomNumber); }
    }
    return this.computerNumberList;
  }

  // 2. 게임 시작
  doPlay(computerNumberList) {
    let isReplay;
    while (isReplay === undefined) {
      const userNumberList = this.getUserNumberList();
      const { strikeCount, ballCount } = this.matchComputerVSUser(
        computerNumberList,
        userNumberList,
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
          if (input === '1') isReplay = true;
          else if (input === '2') isReplay = false;
          else throw new Error('잘못된 값을 입력하였습니다.');
        });
      }
      if (strikeCount === 0 && ballCount === 0) { Console.print(Messages.GUESS_GONG_RESULT_NOTHING); }
    }
    return isReplay;
  }

  // 2.1. 사용자 값 입력받기
  getUserNumberList() {
    let userInput;
    Console.readLine(Messages.INPUT_YOUR_GONG, (input) => {
      const isValid = this.checkValidation(input);
      if (isValid) userInput = input;
      else throw new Error(Messages.WRONG_INPUT);
    });
    return userInput.split('').map((it) => +it);
  }

  // 2.2. 사용자 값

  checkValidation(value) {
    this.regexr = /^\d{3}$/;
    return this.regexr.test(value);
  }

  // 3. 컴퓨터 숫자와 사용자 숫자 비교
  matchComputerVSUser(computerNumberList, userNumberList) {
    const strikeCount = this.getStrikeCount(computerNumberList, userNumberList);
    const ballCount = this.getBallCount(computerNumberList, userNumberList);
    return { strikeCount, ballCount };
  }

  getStrikeCount(computerNumberList, userNumberList) {
    this.strikeCount = 0;
    for (let i = 0; i < 3; i += 1) {
      if (computerNumberList[i] === userNumberList[i]) this.strikeCount += 1;
    }
    return this.strikeCount;
  }

  getBallCount(computerNumberList, userNumberList) {
    this.ballCount = 0;
    for (let i = 0; i < 3; i += 1) {
      if (
        computerNumberList.includes(userNumberList[i])
        && computerNumberList[i] !== userNumberList[i]
      ) { this.ballCount += 1; }
    }
    return this.ballCount;
  }
}

module.exports = App;
