function circularArrayRotation(a, k, queries) {
    // Write your code here
    var now;
    var temp;
    for(let i=0;i<a;i++){
       temp=k[0]
      for(let j=0;j<k.length;j++){
          if(j==(k.length-1)){
              k[0]=temp
          }
          else{
              now=k[j+1]
             k[j+1]=temp
             temp=now
          }
      }
      //console.log(k)
    }

const result  =queries.map((value)=>k[value])
//console.log(result)
return result
}
var result=circularArrayRotation(2,[1,2,3],[0,1,2])
result.forEach((value)=>{console.log(value)})
