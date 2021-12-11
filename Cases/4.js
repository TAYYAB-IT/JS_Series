function plusMinus(arr) {
    // Write your code here
pos=neg=zer=0
for(val of arr){
    x=Math.sign(val)
    if(x==1){pos++}
    else if(x==-1){neg++}
    else{zer++}
}
console.log((pos/arr.length).toFixed(6))
console.log((neg/arr.length).toFixed(6))
console.log((zer/arr.length).toFixed(6))

}

let n=5
arr=[1,1,0,-1,-1]
plusMinus(arr)
