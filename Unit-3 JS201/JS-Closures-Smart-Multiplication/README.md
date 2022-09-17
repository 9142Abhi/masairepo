# JS-Closures-smart-multiplication

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ A function is being returned in all cases when smartMultiply is called - 1 mark
 ✅ multiplication of all 4 values are returned when called smartMultiply with 3 arguments - 2 mark
 ✅ Default value is set for param4 when not passed to child function of smartMultiply- 2 marks
 ✅ multiplication of the 2 values are returned when called smartMultiply with 2 arguments - 2 marks
 ✅ Double of the value is returned when called smartMultiply with 1 argument - 2 marks

```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Description

- You need to complete the `smartMultuply` function such that it fulfills the below criteria:

1.  If `smartMultuply` function is called with 3 arguments, it should return a function that accepts one parameter which will further return the multiplied value of all three arguments, and the argument passed to it.
2.  In the above case, if there is no value passed to the return function, keep default value as 1
3.  If `smartMultuply` function is called with 2 arguments, it should return a function which will further return the multiplied value of both values passed
4.  If `smartMultuply` function is called with 1 argument, it should return a function which will further return the double of the value passed

## Boilerplate

- Do not change the given folder structure
- inside src you will smartMultiplication.js file that is where you need to write the mentioned methods
- you can find the testcase under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
