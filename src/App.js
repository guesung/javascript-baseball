const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    while (1) {
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
      const computerNumberList = this.getRandomNumberList();
      const isReplay = this.doPlay(computerNumberList);
      if (!isReplay) break;
    }
  }

  // 1. 컴퓨터 숫자값 선택하기
  getRandomNumberList() {
    const computerNumberList = [];
    while (computerNumberList.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 10);
      if (computerNumberList.includes(randomNumber)) continue;
      computerNumberList.push(randomNumber);
    }
    return computerNumberList;
  }

  // 2. 게임 시작
  doPlay(computerNumberList) {
    let isReplay;
    while (isReplay === undefined) {
      const userNumberList = this.getUserNumberList();
      const { strikeCount, ballCount } = this.matchComputerVSUser(computerNumberList, userNumberList);
      MissionUtils.Console.print(`${ballCount ? ballCount + '볼' : ''} ${strikeCount ? strikeCount + '스트라이크' : ''}`);
      if (strikeCount === 3) {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
        MissionUtils.Console.readLine("", (input) => {
          if (input === '1') isReplay = true;
          else if (input === '2') isReplay = false
          else throw new Error("잘못된 값을 입력하였습니다.")
        })
      }
      if (strikeCount === 0 && ballCount === 0) MissionUtils.Console.print('낫싱');

    }
    return isReplay
  }

  // 2.1. 사용자 값 입력받기
  getUserNumberList() {
    let userInput;
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      const isValid = this.checkValidation(input)
      if (isValid) userInput = input;
      else throw new Error("잘못된 값을 입력하였습니다.")
    });
    return userInput.split('').map(it => +it)
  }

  // 2.2. 사용자 값 

  checkValidation(value) {
    const regexr = /^\d{3}$/
    return regexr.test(value)
  }
}

module.exports = App;
