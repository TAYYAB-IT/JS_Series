function jumpingOnClouds(c) {
    // Write your code here
    var currunt=c.indexOf(0);
    var count=0;
while(currunt<=(c.length-1)){
    if(currunt==c.length-1){
        if(c[currunt+1]==0){
        count++;
        currunt+=1;
        }
        else{break;} 
    }
else{
if(c[currunt+2]==0){
    count++;
    currunt+=2
}
else if(c[currunt+1]==0){
count++;
currunt+=1;
}
}
//console.log(count," ",currunt)
}
return count;
}
console.log(jumpingOnClouds([0,0,1,0,0,1,0]))