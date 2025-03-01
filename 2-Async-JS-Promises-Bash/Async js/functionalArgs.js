// in funtional arguments we have to only pass
// name of funtion no need to apply brackets in front of that name.
// basically we passing function signiture of reference

function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function doOperation(a, b, fun) {
    return fun(a, b)
  }
  
  console.log(doOperation(1, 2, sum))