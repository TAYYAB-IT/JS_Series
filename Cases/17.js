function bonAppetit(bill, k, b) {
    // Write your code here
total_bill=bill.reduce((tot,value)=>tot+=value)
bill_h=((total_bill-bill[k])/2)
if(bill_h<b){
    return b-bill_h
}
else{
    return "Bon Appetit"
}

}
const  n=4 //items
const k=1 //Not eated item index
const bill=[3,10,2,9] //Item prices
const b=12  //Payed 
console.log(bonAppetit(bill,k,b))