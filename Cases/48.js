function chocolateFeast(n, c, m) {
    // Write your code here
    var buy=0;
    var money=n;
  var wrap =0
while(money>=c){
    
    var val=Math.floor(money/c)
    buy+=val;
   // console.log(wrap, buy)
    wrap+=val;
    
    money-=(val*c);
    //console.log("Wrap=",wrap)
    if(wrap>=m){
        money+=(Math.floor(wrap/m)*c);
        wrap=(wrap%m)}
    //console.log(`Wrap=${wrap}  Money=${money}  Buy=${buy}`)
}
return buy;
}
console.log(chocolateFeast(7 ,3 ,2))
/*int n: Bobby's initial amount of money
int c: the cost of a chocolate bar
int m: the number of wrappers he can turn in for a free bar
*/