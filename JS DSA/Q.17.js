/* Code 34: Write a program that prints the numbers from 1 to 100. But for multiples of three,
print "Fizz" instead of the number, and for the multiples of five, print "Buzz". 
For numbers which are multiples of both three and five, print "FizzBuzz" */


function abc(n){
  let array = []
  for(let i = 1; i <= n; i++){
    if( i % 3 == 0){
      array.push('Fizz')
    } else if( i % 5 == 0){
      array.push('Buzz')
    } else if (i % 3 == 0 && i % 5 == 0){
      array.push("FizzBuzz")
    } else{
      array.push(i)
    }
  }
  console.log(array)
}
// abc(100)