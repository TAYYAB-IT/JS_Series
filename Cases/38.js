function cutTheSticks(arr) {
    // Write your code here
const sizes=[]
var small;
while(arr.length>=1){
    if(arr.length==1){
        sizes.push(1);
    break;
    }
    else{
        small=Math.min.apply(0,arr);
        sizes.push(arr.length)
        arr=arr.filter((value)=>value!=small)
        arr=arr.map((value)=>value-small)
    }
   // console.log(sizes)
}
return sizes;
}
cutTheSticks([5,4,4,2,2,8]).forEach((value)=>{console.log(value)})
