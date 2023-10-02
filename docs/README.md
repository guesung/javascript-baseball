# 구현할 기능 목록

## 기능 목록

- 게임 시작 전
  1. `숫자 야구 게임을 시작합니다.`메시지 출력
- 게임 시작 중
  1. 컴퓨터의 숫자를 랜덤으로 생성
  2. 정답을 맞힐 때까지 아래 과정을 반복
     1. `숫자를 입력해주세요 :`메시지 출력 후 사용자 입력 받기
     2. 컴퓨터의 숫자와 사용자가 입력한 숫자를 비교
        1. 비교한 결과를 출력
        2. 3스트라이크일 경우 `3개의 숫자를 모두 맞히셨습니다! 게임 종료`, `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요`메시지 출력 후 게임 종료
        3. 3스트라이크가 아닐 경우 상위 1번으로 돌아가 게임을 계속 진행
  3. 사용자가 1을 입력했다면 게임을 다시 시작. 2를 입력했다면 게임을 종료

## 폴더 구조

```
javascript-baseball
├─ .eslintrc.js
├─ .gitignore
├─ .npmrc
├─ .nvmrc
├─ .prettierrc
├─ README.md
├─ __tests__
│  ├─ ApplicationTest.js
│  └─ StringTest.js
├─ docs
│  └─ README.md
├─ package-lock.json
├─ package.json
└─ src
   ├─ App.js
   ├─ constants
   │  └─ Messages.js
   └─ utils
      ├─ getComputerNumber.js
      ├─ getUserDesicion.js
      ├─ getUserNumber.js
      └─ matchComputerVSUser.js
```

## 리팩토링 목록
- [x] InputView, OutputView 파일 분리를 통해 비즈니스 로직과 UI로직 분리
- [ ] MVC패턴을 적용하여 객체 분리

## Flow Chart
![baseball drawio](https://github.com/gloddy-dev/gloddy-client/assets/62178788/b65d1e22-e6bd-4b25-bccf-d2a6397a405a)