const user =  {
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


 //outputd
// {
//   user_name: "Vishal",
//   user_address_primary_house: "109",
//   user_address_primary_street_main: "21",
//   user_address_primary_street_cross: "32",
// }

const arr = [1,3,2,5,8,6]
let res = []
arr.reduce((a,c) => {
    console.log(a > c? a:c);
    return a > c? a:c
})
// console.log(arr);