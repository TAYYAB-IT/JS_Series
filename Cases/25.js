function designerPdfViewer(h, word) {
    // Write your code here
    alpha=[]
//English Alphabets
for(al=65;al<=90;al++){
    alpha.push(String.fromCharCode(al));
}
    height=[]
    for(i of word){
height.push(h[alpha.indexOf(i.toUpperCase())])
    }
    return (Math.max.apply(0,height)*word.length)
}
const h=[1 ,3 ,1 ,3 ,1 ,4 ,1, 3, 2, 5, 5, 5, 5, 5, 5 ,5 ,5, 5, 5, 5, 5 ,5 ,5, 5, 5, 5]
const word="abc"
console.log(designerPdfViewer(h,word))

