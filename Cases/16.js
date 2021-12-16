function dayOfProgrammer(year) {
    // Write your code here
    //Programmer day is 256th 
leap=false
var d= new Date()
if(year%4==0 ){
    leap=true
}
days_before= 243
if (leap){
d.setFullYear(year,08,256-(days_before+1))
//console.log("leap",256-(days_before+1))
}
else{
    d.setFullYear(year,08,256-days_before)
}
date=d.getDate()
month=d.getMonth()+1
if(date<10){
    date="0"+month
}
if(month<10){
    month="0"+month
}
return (date+"."+month+"."+d.getFullYear())
}
const year=2017
console.log(dayOfProgrammer(year))