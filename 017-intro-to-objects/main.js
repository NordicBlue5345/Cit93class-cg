const myArr = []

// console.log(typeof myObj)
// console.log(typeof myArr)
// console.log(myArry == myObj)
const myNumber = 9
const myObj = {
    name: 'Cassandra',
    age: 29,
    hobbies: ['drawing', 'singing', 'reading'],
    mobile: {
        make: 'pixel 7',
        OS: 'android'
    },
    myGreeting: function(person) {
    return `${this.name} who loves to ${this.hobbies[0]} says What is UP ${person}`
    },

    increaseLikes: function(){
    this.likes += 1
    }
}

const color = {
    name: 'blue',
    type: 'watercolor',
}

const blueColor = color
    this.color += 2
console.log(blueColor)

const cassandraObj = myObj
cassandraObj.increaseLikes()
console.log(cassandraObj) 

const greeting = myObj.myGreeting('jane')
console.log(greeting)
cassandraObj.age = 29

console.log(myObj.mobile.make.length)

for(key in myObj) {
    console.log(`key ${key} and value ${myObj[key]} `)
}

// comment where you played around with these methods

//topics prim and obj <> looping over obj <> passed by value or referance