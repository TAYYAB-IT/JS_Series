function birthdayCakeCandles(candles) {
    // Write your code here
max=Math.max.apply(0,candles)
console.log((candles.filter((val)=>
    val==max
)).length)
}
n=4
candles=[3 ,2 ,1, 3]
birthdayCakeCandles(candles)