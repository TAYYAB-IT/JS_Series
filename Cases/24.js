function hurdleRace(k, height) {
    // Write your code here
max=Math.max.apply(0,height)
//Doses required value will be return
if(max>k){return max-k} 
else{return 0}
}
n=5
k=4
height=[1 ,6 ,3 ,5 ,2]
console.log(hurdleRace(4,height))