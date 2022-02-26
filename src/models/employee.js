import User from "./user.js"

export default class Employee extends User{
    constructor(id, firstName, lastName, city, age, salary) {
        super(id, firstName, lastName, city, age, salary) //Buradaki özellikler daha önce tanımladığımız Users objesinde de olduğu için super metodu ile direkt olarak kullanabiliyoruz. 
        this.salary = salary
    }
}