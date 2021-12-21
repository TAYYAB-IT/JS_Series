
function extraLongFactorials(n) {
    num=BigInt(n)     //convert to Biginteger >64bit
    // Write your code here
  
  var fact=1n; 
for(let i=0n;i<num;i++){
   // console.log(i)
fact*=(num-i);
}
console.log(fact.toString());
}
extraLongFactorials(25);