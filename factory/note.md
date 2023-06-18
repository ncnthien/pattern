## Factory pattern

### Problem
- Assume that at first you're just working with Truck class, and then clients want you to add Ship class also.
- The problem is your code currently is coupled to the Truck class only.
- Adding ship may cause you to change the entire codebase.
- Moreover, if you decide to add another type again, you have to re-write the entire app again.

### Solution
- Replace new keyword to init your object, you can get your object through the method of factory.
- And then you can use subclass to implement the factory class.
- Also, the factory method in the base class should have its return type declared as the product's interface.

### Applicability
- Use Factory Method pattern when you don't know beforehand the exact types and dependencies of the objects your code should work with.
    + For example, if you need to create a whole new object, you can create a new creator subclass, then implement the base class, and override the factory method in it.
- Use the Factory Method when you want to provide users of your library or framework with a way to extend its internal components.
    + For example, your library provide users with a method createButton(): Button
    + But users want to custom your createButton method to return RoundButton instead (button with rounded shape)
    + Then users can override the createButton method, and return RoundButton
- Use the Factory Method when you want to save system resources by reusing existing objects instead of rebuilding them each time.
    + For example, when you want to:
    + 1. Create some storages to keep track of all of the created objects.
    + 2. When someone requests an object, the program should look for a free object inside that pool
    + 3. ... and then return it to the client code.
    + 4. If there are no free objects, the program should create a new one (and add it to the pool for resuing next time).
    + That's a lot of steps for every time we need to create a new object.
    + Instead we can have a regular method capable of create new objects as well as reusing existing ones. That sounds very much like a factory method.

### How to implement
- 1. Make all products follow the same interface. This interface should declare methods that make sense in every product.
- 2. Add an empty factory method inside the creator class. The return type of the method should match the common product interface.
- 3. In the creator's code find all references to product constructors. One by one, replace them with calls to the factory method, while extracting the product creation code into the factory method.
- 4. Now, create a set of creator subclasses for each type of product listed in the factory method. Override the factory method in the subclasses and extract the appropriate bits of construction code from the base method.
- 5. If there are too many product types and it doesn't make sense to create subclasses for all of them, you can reuse control parameter from the base class in subclasses.
- 6. If, after all of the extractions, the base factory method has become empty, you can make it abstract. If there's something left, you can make it a default behavior of the method.

### Pros and Cons
- Pros
    + You avoid tight coupling between the creator and the concrete products.
    + Single Responsibility Principle. You can move the product creation code into on place in the program, making the code easier to support.
    + Open/Closed Principle. You can introduce new types of products into the program without breaking existing client code.
- Cons
    + The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best case scenario is when you're introducing the pattern into an existing hierachy of creator classes.

