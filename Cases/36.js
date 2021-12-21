function squares(a, b) {
    // Write your code here
var count=0;
for(let num=a;num<=b;num++){
    if(Number.isInteger(Math.sqrt(num))){count++}
}
return count;
}
console.log(squares(3,9))