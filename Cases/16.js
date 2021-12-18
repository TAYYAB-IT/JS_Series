function dayOfProgrammer(year) {
    // Write your code here
    //Programmer day is 256th 
var leap=false
var d= new Date()
if(year>=1700 && year<=1917){
    if(year%4==0){leap=true}
}
else if((year%4==0 &&year%100!=0)||year%400==0){
    leap=true
}
var days_before= 243
if (leap){
d.setFullYear(year,8,256-(days_before+1))
//console.log("leap",256-(days_before+1))
}
else{
    d.setFullYear(year,8,256-days_before)
}
var date=d.getDate()
if(year==1918){ date+=13} // The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th.
var month=d.getMonth()+1
if(date<10){
    date="0"+month
}
if(month<10){
    month="0"+month
}
return (date+"."+month+"."+d.getFullYear())
}
const year=1918
console.log(dayOfProgrammer(year))