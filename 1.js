function hi(){
  console.log('Hi',this)
}

const user1 = {
  name: "name1",
  age: "age1",
  nameInfo: hi,
  logInfo: function(){
    console.log(`Name is ${this.name}`)
  },
  ageInfo: function(){
    console.log(`Age is ${this.age}`)
  }
}
Object.prototype.userInfo = function() {
  console.log(`Username is ${this.name}`)
  console.log(`User age is ${this.age}`)
}