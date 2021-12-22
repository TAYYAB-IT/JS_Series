function taumBday(b, w, bc, wc, z) {
    b=BigInt(b)
    w=BigInt(w)
    bc=BigInt(bc)
    wc=BigInt(wc)
    z=BigInt(z)
    // Write your code here
if((bc>wc+z)){return BigInt(((w+b)*(wc))+(b*z)).toString()}

else if(wc>bc+z){return BigInt (((w+b)*(bc))+(w*z)).toString()}
else {return BigInt((w*wc)+(b*bc)).toString()}
}
console.log(taumBday(3,6,9,1,1))