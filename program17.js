class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    displayDetails() {
        console.log(this.make, this.model, this.year)
    }
}
let c1 = new Car("Toyota", "Camry", 2020)
let c2 = new Car("Honda", "Civic", 2022)
c1.displayDetails()
c2.displayDetails()
