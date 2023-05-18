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

const cass = new Person("Cass", "Franco", "123 no way i will share it")
cass.showStatus() 
const nick = new Person("Nick", "Franco", "123 same house")