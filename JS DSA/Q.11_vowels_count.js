// Code 17: To find vowels and its count in a given string

function countVowels(){
    const string = 'Irfanghazi how are'
    const vowels = ['a','e','i','o','u']
    let words = ''
    let count = 0
    for(let i = 0; i < string.length; i++){
        if( vowels.includes(string[i].toLocaleLowerCase())){
            count++
            words += string[i] + ' '
        }
    }
    // console.log(count, words)
}
// countVowels()



// input
var user = {
    name: "Vishal",
    address: {
      primary: {
        house: "109",
        street: {             
          main: "21",
          cross: "32"
        }
      }
    }
  };
  
  function getDetails(obj){
      let data = {}
      for (let key in obj){
          // console.log(key)
          if(key == 'name'){
              data. user_name = obj[key]
          }
          if(key == 'address'){
            data.user_address_primary_house = obj[key].primary.house
          }
          
          console.log(data)
          // console.log(key, obj[key])
      }
  }
  // const data = getDetails(user)
  // console.log(data)
  //outputd
  // {
  //   user_name: "Vishal",
  //   user_address_primary_house: "109",
  //   user_address_primary_street_main: "21",
  //   user_address_primary_street_cross: "32",
  // }
  
  // const person = {
  //     name:'Irfan',
  //     location:'Delhi'
  // }
  // for(let [key] in Object.entries(person)){
  //     console.log(key)
  // }
  
  
  var x
  // console.log(x)
  x = 5
  
  
  const a = [1,3,5]
  const b = [2,4,6]
  
  const c = [...a, ...b]
  // console.log(c)
  function sortArray(arr){
     arr.reduce((a,c) => {
         return a > c ? a: c
     })
     console.log(arr)
     
  }
  //  sortArray(c)
   
   // rainning Tap Question 
  
  
  
  
  
  
  
  