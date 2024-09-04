let text = prompt("write a text")
let textLength = text.length
let amountOfNumber = 140
let returnMessage = text.slice(0,140)
alert(returnMessage)
alert(`you have written "${returnMessage}"
characters, and you have ${amountOfNumber - returnMessage.length} characters left`)
console.log(returnMessage.length);