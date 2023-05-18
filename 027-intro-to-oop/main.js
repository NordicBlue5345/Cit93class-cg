class Person {
    constructor(firstName, lastName, address){
        this.fistName = firstName;
        this.lastName = lastName;
        this.address = address;
    }
    showStatus(){
        console.log(`${this.fistName} lives at ${this.address}`)
    }
}

class Student extends Person {
    constructor(fistName, lastName, address, classList) {
        super(fistName, lastName, address)
        this.classList = classList
    }

    showStatus(){
        console.log(`${this.fistName} lives at ${this.address} is taking ${this.classList}`)
    }
}

const cass = new Person("Cass", "Franco", "123 no way i will share it", ["Eng1A", "CIT93"])
cass.showStatus() 
const nick = new Person("Nick", "Franco", "123 same house")
nick.showStatus() 