//Setinterval(funtion_name,miliseconds),setTimeout(funtioname,mili_seconds)
//Both are Asynchrounus funtions 
//setTimeout(myFunction, 3000); //so myFunction() will be called after 3 seconds.
//setInterval(myFunction, 1000);//So myFuntion() will be called after every 1 sec break continously.
 /*function func1(){
console.log("Now Called")
}
setTimeout(func1,3000)
*/
function time_(){
    d=new Date()
    console.clear()  //this funtion is used to clear console completely
    console.log(d.getHours() +":",d.getMinutes()+":",d.getSeconds())
}
setInterval(time_,1000)