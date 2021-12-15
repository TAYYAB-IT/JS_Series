function migratoryBirds(arr) {
    // Write your code here
const unique=arr.filter((value,index,arr)=>{
    return index==arr.indexOf(value)
})
const elements_length=[]
for(i of unique){
    count=0
    for(j of arr){
        if(i==j){
            count++
        }
    }
    elements_length.push(count)
} 
max=Math.max.apply(0,elements_length)
 tot=0
 elements_length.forEach((value)=>{
    if(value!=max){
      tot+=value
    }
})
return tot;
}
const n=11
const arr=[1, 2, 3 ,4 ,5 ,4 ,3, 2, 1, 3, 4]
console.log(migratoryBirds(arr))