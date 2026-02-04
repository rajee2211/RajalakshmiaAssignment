///Assignemnet details
//  Given a string s consisting of words and spaces, return the length of the last word in the string. 
//Example 1: 
//Input: s = "Hello World" 
//Output: 5 
//Explanation: The last word is "World" with length 5. 
//Assignment requirements
//Example:1 
//1. Split the string into an array of words. 
//2. Find the last word in the array. 
//3. Calculate the length of this word. 



//Example1:
let s="Hello World"
let sp=s.split('')
//console.log(sp)
let sl= s.substring(6,11)
//console.log(sl)
let len= sl.length
console.log("The last word is "+sl+" "+"with length"+" "+len)


//Assignement details:
//Example 2:  
//Input: s = "   fly me   to   the moon  " 
//Output: 4 
//Explanation: The last word is "moon" with length 4. 
//Assignement requirements
//Example:2 
//1. Trim the String 
//2. Split the String into Words 
//3. Identify the Last Word 
//4. Calculate the Length of the Last Word 
//5. Return the length 

let sentence="   fly me   to   the moon  " 
let tri=sentence.trim()
console.log(tri)
let splitting=tri.split(' ')
console.log(splitting)
let lastWords=splitting[splitting.length-1]
console.log(lastWords)
let lengthmoon=lastWords.length
console.log( "The last word is "+" "+lastWords+" with length" +" "+lengthmoon)

//

let word1 = "listen"
let word2 = "silent"
if (word1.length === word2.length)
    console.log("Length of the given strings are same")
let chkana1 = word1.split("").sort().join()
let chkana2 = word2.split("").sort().join()
if(chkana1 === chkana2){
    console.log("Given string is Anagram")
    }
else
    console.log("Given string is not anagram")
//


let word3="hello"
let word4="world"
if(word3.length===word4.length){
  console.log("The length of the words are same")
}
let chkana3=word3.split("").sort().join()
let chkana4=word4.split("").sort().join()
if(chkana3 === chkana4){
    console.log("Given string is Anagram")
    }
else
    console.log("Given string is not anagram")
