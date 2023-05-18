class Person {
    constructor(firstName, lastName, address) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._address = address;
    }
  
    get firstName() {
      return this._firstName;
    }
  
    set firstName(newFirstName) {
      this._firstName = newFirstName;
    }
  
    get lastName() {
      return this._lastName;
    }
  
    set lastName(newLastName) {
      this._lastName = newLastName;
    }
  
    get address() {
      return this._address;
    }
  
    set address(newAddress) {
      this._address = newAddress;
    }
  
    showStatus() {
      console.log(`${this._firstName} ${this._lastName} lives at ${this._address}`);
    }
  }
  
  class Student extends Person {
    constructor(firstName, lastName, address, classList) {
      super(firstName, lastName, address);
      this._classList = classList;
    }
  
    get classList() {
      return this._classList;
    }
  
    set classList(newClassList) {
      this._classList = newClassList;
    }
  
    showStatus() {
      console.log(`${this._firstName} ${this._lastName} lives at ${this._address} is taking ${this._classList}`);
    }
  }
  
  const cass = new Student("Cass", "Franco", "123 no way I will share it", ["Eng1A", "CIT93"]);
  cass.showStatus();
  
  const nick = new Person("Nick", "Franco", "123 same house");
  nick.showStatus();
  
  console.log(cass.firstName);