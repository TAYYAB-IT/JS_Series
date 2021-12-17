function pickingNumbers(a) {
    // Write your code here
const count=[]
var arr=[]
unique=a.filter((value,index)=>index==a.indexOf(value));    //unique elements
a=a.sort((yy,zz)=>yy-zz
)
unique= unique.sort((yy,zz)=>yy-zz)
for(x of unique){
    c=0
for( i of a){
 if(i==x){c++}
   }
   count.push(c);     //Occurance of each element in array
}
//console.log(unique,count)
var found=unique.length;
for(i=0;i<(unique.length);i++){
    if(unique[i]+1==unique[i+1]&& found!=i){
      arr.push(count[i]+count[i+1])
      found=i+1
    }
    else if(found!=i){
        arr.push(count[i])
    }
}
//console.log(arr)  //contains lengths of subsets
return Math.max.apply(0,arr) 
}

const n=6;
 a=[4,6 ,5 ,3, 3, 1]
 //a=[1, 2, 2, 3, 1, 2]
 //a=[1,1,2,2,4,4,5,5,5]
 //a=[1,2,2,3,5,7,7,8]
console.log(pickingNumbers(a))