// dec2hex :: Integer -> String
// i.e. 0-255 -> '00'-'ff'
function dec2hex (dec) {
  return dec.toString(16).padStart(2, "0")
}

// generateId :: Integer -> String
function generateId (len=40) {
  var arr = new Uint8Array((len ) / 2)
  window.crypto.getRandomValues(arr)
  return Array.from(arr, dec2hex).join('')
}

console.log(generateId()) //By Default length 40
// "82defcf324571e70b0521d79cce2bf3fffccd69"

console.log(generateId(20)) //pass length to function
// "c1a050a4cd1556948d41"
