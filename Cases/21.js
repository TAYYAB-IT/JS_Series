function catAndMouse(x, y, z) {
cat1=z-x
cat2=z-y
if(Math.sign(cat1)==-1){cat1=-1*cat1}
if(Math.sign(cat2)==-1){cat2=-1*cat2}
//console.log(cat1,"  ",cat2)
if(cat1<cat2){return "Cat A"}
else if(cat1>cat2){return "Cat B"}
else{return "Mouse C"}

}
const q=2;
const arr1=[1,2,3]
const arr2=[1,3,2]
console.log(catAndMouse(arr1[0],arr1[1],arr1[2]))
console.log(catAndMouse(arr2[0],arr2[1],arr2[2]))