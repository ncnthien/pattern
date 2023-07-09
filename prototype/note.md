## Prototype

### Problem
- Say you have an object, and you want to create an exact copy of it. How would you do it? First, you have to create a new object of the same class. Then you have to go through all the fields of the original object and copy their values over to the new object.
- Nice! But there's a catch. Not all objects can be copied that way because some of the object's fields may be private and not visible from outside of the object itself.
- There's one more problem with the direct approach. Since you have to know the object's class to create a duplicate, your code becomes dependent on that class. If the extra dependency does not scare you, there's another catch. Sometimes you only know the interface that the object follows, but not its concrete class, when, for example, a parameter in a method accepts any objects that follow some interface.

### Solution
- The Prototype pattern delegates the cloning process to the actual objects that are being cloned. The pattern declares a common interface for all objects that support cloning. This interface lets you clone an object without coupling your code to the class of that object. Usually, such an interface contains just a single clone method.
- The implementation of the clone method is very similar in all classes. The method creates an object of the current class and carries over all of the field values of the old object into the new one. You can even copy private fields of other objects that belong to the same class.
- An object that supports cloning is called a prototype. When your objects have dozens of fields and hundreds of possible configurations, cloning them might serve as an alternative to subclassing. 
- Here's how it works: you create a set of objects, configured in various ways. When you need an object like the one you've configured, you just clone a prototype instead of constructing a new object from scratch.

### Applicability
- Use the Prototype pattern when your code shouldn't depened on the concrete classes of objects that you need to copy.
- Use the pattern when you want to reduce the number of subclasses that only differ in the way they initialize their respective objects.

### How to implement
- Create the prototype interface and declare the clone method in it. Or just add the method to all classes of an existing calss hierarchy, if you have one.
- A prototype class must define the alternative constructor that accepts an object of that class as an argument. The constructor must copy the values of all fields defined in the class from the passed object into the newly created instance. If you're changing a subclass, you must call the parent constructor to let the superclass handle the cloning of its private fields.
- If your programming language doesn't support method overloading, you won't be able to create a separate "prototype" constructor. Thus, copying the object's data into the newly created clone will have to be performed within the clone method. Still, having this code in a regular constructor is safer because the resulting object is returned fully configured right after you call the new operator.
- The cloning method usually consists of just one line: running a new operator with the prototypical version of the constructor. Note, that every class must explicitly override the cloning method and use its own class name along with the new operator. Otherwise, the cloning method may produce an object of a parent class.
- Optionally, create a centralized prototype registry to store a catalog of frequently used prototypes.
- You can implement the registry as a new factory class or put it in the base prototype class with a static method for fetching the prototype. This method should search for a prototype based on serach criteria that the client code passes to the method. The criteria might either be a simple string tag or a complex set of search parameters. After the appropriate prototype is found, the registry should clone it and return the copy to the client.
- Finally, replace the direct calls to the subclasses' constructors with calls to the factory method of the prototype registry.

### Pros and cons
- Pros:
  - You can clone objects without coupling to their concrete classes.
  - You can get rid of repeated initialization code in favor of cloning pre-build prototypes.
  - You can produce complex objects more conveniently.
  - You get an alternative to inheritance when dealing with configuration presets for complex objects.
- Cons:
  - Cloning complex obejcts that have circular references might be very tricky
