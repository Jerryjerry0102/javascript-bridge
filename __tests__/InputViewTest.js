const InputView = require("../src/InputView");

describe("InputView 테스트 코드", () => {
  test.each([[2], [21], ["이십"]])(
    "3과 20 사이의 숫자가 아닌 경우 예외 처리",
    (input) => {
      expect(() => {
        InputView.validateBridgeSize(input);
      }).toThrow;
    }
  );
  test.each([[3], [10], [20]])(
    "3과 20 사이의 숫자인 경우 그 숫자를 반환",
    (input) => {
      const result = InputView.validateBridgeSize(input);
      expect(result).toBe(input);
    }
  );
});