function compareTriplets(a, b) {
    // Write your code here
    alice=0,bob=0;
    for(let i=0;i<a.length;i++)
    if(a[i]>b[i]){
        alice++
    }
    else if(a[i]<b[i]){
        bob++
    }
  return [alice,bob]
  }
  a=[17,28,30]
  b=[99,16,8]
  
  console.log(compareTriplets(a,b).join(" "))

