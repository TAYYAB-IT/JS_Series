function print(x){
    console.log(x)
}

x="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//print(x.length)
//print(x[0])
//print(x[x.length-1])
//print(x.toUpperCase())
print(x.toLowerCase())
/*
slice(start, end)
substring(start, end)
substr(start, length)
*/
//print(x.slice(1,4))
//print(x.slice(-4,-1))
//print(x.slice(0,-1))
//print(x.substr(0,4))
//print(x.substr(-9,3))
//*Strings are Immutable
x="Pakistan is a Country. pakistan   country   "
//print(x.length)
//print(x.replace("Country","Safe country"))
//print(x)
//print(x.replace(/country/i,'Safe Place')) //not case-sensitive but first occurence
//print(x.replace(/country/g,'Safe Place')) //case-sensitive but all occurences
//print(x.replace(/country/ig,'Safe Place'))//case-sensitive and all occurences
//*The trim() method removes whitespace from both sides of a string
//print(x.trim())
//text="ABCDE"
//text[0] = "G";    // Gives no error, but does not work
//print(text)
//string can be converted to an array with the split()
//x="Tayyab"
//print(x.split(''))

//*Both indexOf(), and lastIndexOf() return -1 if the text is not found:
//print(x.indexOf("try"))
//print(x.lastIndexOf("try"))
//The lastIndexOf() method returns the index of the last occurrence of a specified text
//Both methods accept a second parameter as the starting position for the search:
//if the second parameter of lastindex() is 15, the search starts at position 15,
// and searches to the beginning of the string.
//search() works same like indexof() but don't carry length
//print(x.search('country'))
//The match() method searches a string for a match against a regular expression, 
//and returns the matches, as an Array object.Otherwise return null Object
//print(x.match(/tan/gi))
//The includes() method returns true if a string contains a specified value.
//print(x.includes("try"))
//string.startsWith(searchvalue, start)
//print(x.startsWith("Pakistan"))
//string.endswith(searchvalue, length)
//print(x.trim().endsWith("country"))

x=3,y=1
//print(`${x}+${y}=${x+1}`)  //string templates
print(typeof x.toString())