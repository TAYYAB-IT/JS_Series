function kaprekarNumbers(p, q) {
    // Write your code here
const result=[];
for(let i=p;i<=q;i++){
    var val=i**2;
    var str=val.toString();
    var len=Math.floor((str.length/2));
    if(Number(str.slice(0,len))+Number(str.slice(len,))==i){
      result.push(i)
    }
}
console.log(result.join(" "));
}
kaprekarNumbers(1,100);