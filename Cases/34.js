function findDigits(n) {
    // Write your code here
var count=0;
const div=n.toString();
for(let i of div){
    if (n%i==0) {
        count++;
    }
}
return count;
}
console.log(findDigits(12))