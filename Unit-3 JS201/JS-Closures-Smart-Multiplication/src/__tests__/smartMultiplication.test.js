import smartMultiply from "../smartMultiplication";
global.score = 1;

test("A function is being returned in all cases when smartMultiply is called", () => {
  var func1 = smartMultiply(1,2,3)
  var func2 = smartMultiply(1,2)
  var func3 = smartMultiply(1)
  expect(typeof func1).toBe("function")
  expect(typeof func2).toBe("function")
  expect(typeof func3).toBe("function")
  global.score += 1;
});

test("multiplication of all 4 values are returned when called smartMultiply with 3 arguments", () => {
  var func1 = smartMultiply(1,2,3)
  expect(func1(2)).toBe(12)

  var func2 = smartMultiply(2,2,3)
  expect(func2(3)).toBe(36)
  global.score += 2;
});

test("Default value is set for param4 when not passed to child function of smartMultiply", () => {
  var func1 = smartMultiply(1,2,3)
  expect(func1()).toBe(6)

  var func2 = smartMultiply(2,2,3)
  expect(func2()).toBe(12)
  global.score += 2;
});

test("multiplication of the 2 values are returned when called smartMultiply with 2 arguments", () => {
  var func1 = smartMultiply(1,2)
  expect(func1()).toBe(2)

  var func2 = smartMultiply(2,2)
  expect(func2()).toBe(4)
  global.score += 2;
});

test("Double of the value is returned when called smartMultiply with 1 argument", () => {
  var func1 = smartMultiply(1)
  expect(func1()).toBe(2)

  var func2 = smartMultiply(2)
  expect(func2()).toBe(4)
  global.score += 2;
});


afterAll(() => {
  console.log("Final Score is", global.score);
});
