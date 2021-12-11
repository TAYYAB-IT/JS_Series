/*let and const has block scope,not support redeclartion ,not support Hoisting(Declare before initilization) ,
But var has global scope ,suppurt redeclation & Hoisting */

var x=21
var y=89
{
    let x=33
    //var x=10 //Will Cause an Error
console.log("In Block ::",x) //33
console.log(y)
}
console.log(x) //21

