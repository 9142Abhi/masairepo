function smartMultiply(param1, param2, param3) {
  // If smartMultuply function is called with 3 arguments, it should return a function that accepts one parameter which will further return the multiplied value of all three arguments, and the argument passed to it.
  // In the above case, if there is no value passed to the return function, keep default value as 1
  // If smartMultuply function is called with 2 arguments, it should return a function which will further return the multiplied value of both values passed
  // If smartMultuply function is called with 1 argument, it should return a function which will further return the double of the value passed
  if (param1 && param2 && param3) {
    return function func1(param1, param2, param3) {
      console.log(param1 * param2 * param3);
    };
  } else if (!param3) {
    return function func2(param1, param2) {
      console.log(param1 * param2);
    };
  } else if (param1 && param2 && !param3) {
    function func3(param1) {
      let param4 = 2 * param1;
      return param4;
    }
  } else {
    return 1;
  }
}

export default smartMultiply;
