// function User(name) {
//   this.name = name
// }

// User.prototype.greet = function () {

// }

class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    return `my name is ${this.name}`
  }
}

const user = new User('john doe', 10)
console.log(user.greet());

