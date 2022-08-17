const sum = (a, b) => a + b;
const something = "anything";

const user = {
  name: "Olamide",
  age: 27,
  "is married": false,
  [something]: "Pizza",
  shoot() {
    console.log("I can shoot you",this.name);
  },
  talk: () => { //arrow function
    console.log("I can talk");
  },
};

console.log(user);

function operation(a,b, func){
    return func(a,b)
}

console.log(operation(2,3,sum))
console.log(user.shoot("Boyo"));
console.log(user.talk());

// for(let key in user){
//     console.log(`${key} --> ${user[key]}`)
// }