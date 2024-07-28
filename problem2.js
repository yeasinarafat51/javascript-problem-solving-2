 
 import { calculateCircleArea } from './circle.js';
 // question 1
 const person = {
    name: "John",
    age: 30,
    occupation: "Developer"
  };
  
  // Destructuring
  const { name, age } = person;
  
  console.log(name); // "John"
  console.log(age);  // 30
  





 // question 2
 

const radius = 5;
const area = calculateCircleArea(radius);
console.log('Area of the circle:', area);




 // question 3
 class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  }
  
  // Example usage:
  const rect = new Rectangle(5, 10);
  console.log(rect.calculateArea()); // Output: 50
  




 // question 4
 class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Getter for fullName
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    // Setter for fullName
    set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  
  // Example usage
  const person = new Person('John', 'Doe');
  console.log(person.fullName); // John Doe
  
  person.fullName = 'Jane Smith';
  console.log(person.firstName); // Jane
  console.log(person.lastName);  // Smith
  console.log(person.fullName);  // Jane Smith
  



 // question 5
 const Circle = class {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Method to calculate the circumference
    calculateCircumference() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  // Example usage
  const myCircle = new Circle(5);
  console.log(`The circumference is: ${myCircle.calculateCircumference()}`);
  





 // question 6

 const prefix = 'user_';
const id = 123;

const obj = {
  [`${prefix}${id}`]: 'some value'
};

console.log(obj); // Output: { user_123: 'some value' }



 // question 7
 class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log('Generic animal sound');
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call parent constructor
      this.breed = breed;
    }
  
    makeSound() {
      console.log('Woof!');
    }
  }
  
  // Example usage:
  const animal = new Animal('Generic Animal');
  animal.makeSound(); // Output: Generic animal sound
  
  const dog = new Dog('Buddy', 'Golden Retriever');
  dog.makeSound(); // Output: Woof!
  console.log(dog.name); // Output: Buddy
  console.log(dog.breed); // Output: Golden Retriever
  



 // question 8
 class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new TypeError('Shape is an abstract class and cannot be instantiated directly');
      }
    }
  
    // Define abstract methods (without implementation)
    getArea() {
      throw new Error('getArea() is an abstract method and must be implemented in derived classes');
    }
  }
  
  // Derived class (example)
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Attempting to create a Shape object directly will throw an error
  try {
    const shape = new Shape();
  } catch (error) {
    console.error(error.message);  // Output: Shape is an abstract class and cannot be instantiated directly
  }
  
  // Creating a Circle object works as expected
  const circle = new Circle(5);
  console.log(circle.getArea()); // Output: 78.53981633974483
  



 // question 9
 class MathUtil {
    static square(number) {
      return number * number;
    }
  }
  
  const result = MathUtil.square(5);
  console.log(result); // Output: 25
  







 // question 10
 const mySymbol = Symbol('mySymbol');

const objs = {
  [mySymbol]: 'secret value'
};

console.log(objs[mySymbol]); // Output: secret value





