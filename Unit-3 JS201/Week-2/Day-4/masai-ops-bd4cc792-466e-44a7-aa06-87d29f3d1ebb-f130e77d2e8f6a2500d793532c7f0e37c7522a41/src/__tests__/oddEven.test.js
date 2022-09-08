import getData from "../oddEven";
global.score = 1;

test("function getData return a promise", () => {
  const c = getData("");
  expect(typeof c).toBe("object");
  expect(typeof c.then).toBe("function");

  global.score += 2;
});

test("testing with string", async () => {
  // expect(getData).toBeDefined();
  const c = getData();
  expect(typeof c).toBe("object");
  expect(typeof c.then).toBe("function");
  let timer = 0;

  var newTimer = setInterval(() => {
    timer += 1000;
  }, 1000);

  try {
    var k = await getData("string");
    clearInterval(newTimer);
  } catch (e) {
    clearInterval(newTimer);
    expect(e).toBe("error");
    expect(timer).toBe(0);
  }

  global.score += 2;
});

test("testing with odd", async () => {
  // expect(getData).toBeDefined();
  const c = getData("");
  expect(typeof c).toBe("object");
  expect(typeof c.then).toBe("function");
  let timer = 0;

  var newTimer = setInterval(() => {
    timer += 1000;
  }, 1000);

  try {
    var k = await getData(3);
    clearInterval(newTimer);
    expect(k).toBe("odd");
    expect(timer).toBe(2000);
  } catch (e) {
    clearInterval(newTimer);
  }

  global.score += 2;
});
test("testing with even", async () => {
  const c = getData("");
  expect(typeof c).toBe("object");
  expect(typeof c.then).toBe("function");
  let timer = 0;
  var newTimer = setInterval(() => {
    timer += 1000;
  }, 1000);

  try {
    var k = await getData(4);
    clearInterval(newTimer);
    expect(k).toBe("even");
    expect(timer).toBe(4000);
  } catch (e) {
    clearInterval(newTimer);
  }
  global.score += 3;
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
