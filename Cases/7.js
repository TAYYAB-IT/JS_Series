function birthdayCakeCandles(candles) {
    // Write your code here
max=Math.max.apply(0,candles)
return((candles.filter((val)=>
    val==max
)).length)
}
n=4
candles=[3 ,2 ,1, 3]
consolr.log(birthdayCakeCandles(candles))