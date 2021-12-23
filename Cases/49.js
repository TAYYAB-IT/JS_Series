function serviceLane(n, cases) {
    // Write your code here
const result=[];
for( let i of cases){
    result.push(Math.min.apply(0,n.slice(i[0],(i[1]+1))));
}
return result;
}

serviceLane([2, 3, 1, 2, 3, 2, 3, 3],[[0, 3], [4, 6], [6, 7], [3, 5], [0, 7]]).forEach((value)=>console.log(value))