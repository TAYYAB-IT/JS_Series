function equalizeArray(arr) {
    // Write your code here
    var unique=arr.sort((a,b)=>a-b)
    var count=0;
    for(let x of unique){
        var co=0
        for(let y of arr){
            if(x==y){co++}
        }
        if(co>count){count=co}
    }
    return (arr.length-count)
}
console.log(equalizeArray([3,3,2,1,3]))