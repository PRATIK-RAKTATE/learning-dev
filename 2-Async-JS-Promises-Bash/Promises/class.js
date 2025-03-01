// Classes in Js

// primitive types
// Number
// String
// Boolean

// complex types 
// Object
// Arrays
// CLASSES

class Rectangle {
    constructor(width, height, color) {
        console.log(this); // o/p => Rectangle {}
        
         this.width = width;  // here this varable belongs to rect variable below or this is used to get access of current obj.
         this.height = height;
         this.color = color; 
    }
    
    area() {
        const area = this.width * this.height;
          return area;
    }
    
    paint() {
             console.log(`Painting with color ${this.color}`);
    }
    
 }
 
 const rect = new Rectangle(2, 4) // instance of rectangle class
 const area = rect.area();
 console.log(area)

 // working of this - give access of current object
 // here this is points to current object rect
 // if we create rect2 then this will points to rect2

//  Points to the Current Instance:

//  Inside a class method, this refers to the object on which the method was called, i.e., the current instance.
//  Dynamic Nature of this:
 
//  The value of this can change depending on how and where the method is invoked. For example, if the method is assigned to a standalone variable, this might not point to the expected object (without using proper binding).
//  Arrow Functions:
 
//  In an arrow function inside a class, this does not refer to the instance but instead is lexically inherited from the surrounding context.
//  Constructor Context:
 
//  In a class constructor, this refers to the newly created object (the one being constructed).



//  // difference between funtion
//  Normal Functions:

// Used to define reusable behavior (operations, logic, etc.).
// Can be called directly like myFunction().
// Constructor Functions:

// Specifically designed to initialize an object.
// Automatically called when using the new keyword to create an object.
// Primarily used to set up initial properties for an object.


 // KEY CONCEPTS 
//  Key Concepts
// Class Declaration:
// You declare a class using the class keyword.
// Inside a class, you define properties (variables) and methods (functions) that will belong to the objects created from this class.

// Constructor:
// A special method inside the class that is called when you create an instance (an object) of the class.
// It’s used to initialize the properties of the object.
// Methods:
// Functions that are defined inside the class and can be used by all instances of the class.

// Inheritance:
// Classes can inherit properties and methods from other classes, allowing you to create a new class based on an existing one.

// Static Methods:
// Methods that belong to the class itself, not to instances of the class. You call them directly on the class.

// Getters and Setters:
// Special methods that allow you to define how properties are accessed and modified


