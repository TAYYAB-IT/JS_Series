function utopianTree(n) {
    // Write your code here
let result=[]
for (val of n){
    a=0
for(i=0;i<=val;i++){
    b=a
if(i==0 ||i%2==0){a+=1}
else{a=b*2}
//console.log(i,"  ",a)
}
result.push(a)
}
return result;
}
const t=3;
const n=[0,1,4];
res=utopianTree(n)
res.forEach((value) => console.log(value));