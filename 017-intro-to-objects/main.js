const myArr = []

// console.log(typeof myObj)
// console.log(typeof myArr)
// console.log(myArry == myObj)
const myNumber = 9
const myObj = {
    name: 'Cassandra',
    age: 29,
    hobbies: ['readings', 'drawing','singing'],
    mobile: {
        make: 'pixel 7',
        OS: 'android'
    },
    myGreeting: function() {

        return `${this.name} says What is UP ${person}`
    }
}

const greeting = myObj.myGreeting('Jane')
console.log(greeting)
