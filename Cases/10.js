function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
appl=apples.map((value)=>
value+a
)
orang=oranges.map((value)=>
value+b
)
const result=[appl.filter((value)=>value>=s&&value<=t).length,orang.filter((value)=>value>=s&&value<=t).length]

return result
}
s=7,t=11,a=5,b=15
apples=[-2,2,1]
oranges=[5,-6]
result=countApplesAndOranges(s,t,a,b,apples,oranges)
for(val of result){
    console.log(val)
}