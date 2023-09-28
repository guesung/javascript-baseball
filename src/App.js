const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computerNumberList = this.getRandomNumberList();
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

}

module.exports = App;
