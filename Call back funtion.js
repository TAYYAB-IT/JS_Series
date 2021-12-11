//Callback functions are functions are passed as an arguments to another functions
//myCalculator(5, 5, myDisplayer); Here myDisplayer is an callback function, 
//Don't write pranthesis () in function defination 
/*
function myDisplayer(some) {
   console.log(some)
  }
  
  function myCalculator(num1, num2, myCallback) { //Here mycallback is callback funtion
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer); //myDisplayer is the funtion you have to pass as a callback function
*/

//ForEach(),map(),etc all work on call back funtion as they take a call back function as argument