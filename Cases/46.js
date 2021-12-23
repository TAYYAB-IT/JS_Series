function minimumDistances(a) {
    // Write your code here
const len=[];
const unique=a.filter((value,index)=>index==a.indexOf(value));
//console.log(unique)
for(let i=0;i<unique.length;i++){
    var count=0;
    for(let j=0;j<a.length;j++){
        //console.log(count, unique[i])
        if(count==2){break;}
        if(unique[i]==a[j]){
        
        
            if(count==1){
                len.push(j-a.indexOf(unique[i]))
            }
              count++; 
        
}
    }
}
if(len.length==0){return -1}
return Math.min.apply(0,len)
}
console.log(minimumDistances([3,2,1,2,3]));