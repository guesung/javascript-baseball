const { Console } = require('@woowacourse/mission-utils');

const getUserDesicion = () => {
  Console.readLine('', (input) => {
    if (input === '1') return;
    if (input === '2') this.isReplay = false;
    else throw new Error('잘못된 값을 입력하였습니다.');
  });
};
module.exports = getUserDesicion;
