function repeatedString(s, n) {
    // Write your code here
    var i=n-s.length;
    var x=0
while(i>0){
    if(x==s.length){x=0}
s=s.concat(s[x])
i--;
x++;
}
//console.log(s)
var count=0;
for(i=0;i<s.length;i++){
    if(s[i]=='a'){count++;}
}
return count;
}
console.log(repeatedString('a',100000))