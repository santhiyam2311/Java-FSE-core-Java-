class Animal {
    makeSound() {
        console.log("Some sound")
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Bark")
    }
}
let a = new Animal()
let d = new Dog()
a.makeSound()
d.makeSound()
