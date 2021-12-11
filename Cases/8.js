function timeConversion(s) {
    // Write your code here
    hr=parseInt(s.slice(0,2) )
    res=s.slice(2,-2)
   if( s.includes("PM") && hr<12){
    hr+=12
   }
   else if(s.includes("AM")&& hr==12){
      hr="00"
   }
   return(hr+res)
}
let t="07:05:45PM"
console.log(timeConversion(t))