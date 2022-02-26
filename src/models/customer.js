import User from "./user.js"

export default class Customer extends User{
    constructor(id, firstName, lastName, city, age, creditCardNumber) {
        super(id, firstName, lastName, city, age, creditCardNumber) //Buradaki özellikler daha önce tanımladığımız Users objesinde de olduğu için super metodu ile direkt olarak kullanabiliyoruz. 
        this.creditCardNumber = creditCardNumber
    }
}

