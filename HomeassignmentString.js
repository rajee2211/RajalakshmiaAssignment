//Create a JavaScript function that accepts a string, reverses it, and checks if the reversed string is a 
//palindrome, then test your function with various strings and print the results.

//Hints to solve
//1. Split string into characters using `split("")`. 
//2. Iterate backward through characters to build reversed string. 
//3. Use strict equality to compare original and reversed strings for palindrome check.

let word= "madam"
let name1=word.split('').reverse().join('')
if(word==name1){
console.log(word +" "+ "is a palindrome")
}
else{
   console.log(word +" "+ "is not a palindrome")
} 
console.log(name1)
