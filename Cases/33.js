function jumpingOnClouds(c, k) {
    var i=0;
    var e=100;
do{
i+=k;
if(i>=c.length){i-=c.length}
if(c[i]==1){
e-=3;
}
else{e-=1;}
}
while(i!=0);
return e;
}
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0],2))