## Composite

### Problem
- Using the Composite pattern makes sense only when the core model of your app can be represented as a tree.
- For example, imagine that you have two types of objects: `Products` and `Boxes`. A `Box` can contain several `Products` as well as a number of smaller `Boxes`. These little `Boxes` can also hold some `Products` or even smaller `Boxes`, and so on.
- Say you devide to create an ordering system that uses these classes. Orders could contain simple products without any wrapping, as well as boxes stuffed with products... and other boxes. How would you determine the total price of such an order?
- You could try the direct approach: unwrap all the boxes, go over all the products and then calculate the total. That would be doable in the real world; but in a program, it's not as simple as running a loop. You have to know the classes of `Pridcts` and `Boxes` you're going through, the nesting level of the boxes and other nasty details beforehand. All of this makes the direct approach either too awkward or even impossible

### Solution
- The Composite pattern suggests that you work with `Products` and `Boxes` through a  common interface wich declares a method for calculating the total price.
- How would this method work? For a product, it'd simply return a total for this box. If one of these items were a smaller box, that box would also start going over its contents and so on, until the prices of all inner components were calculated. A box could even add some extra cost to the final price, such as packaging cost.
- The greatest benefit of this approach is that you don't need to care about the concrete classes of objects that compose the tree. You don't nneed to know whether an object is a simple product or a sophisticated box. You can treat them all the same via the common interface. When you call a method, the objects themselves pass the request down the tree.

### Applicability
- **Use the Composite pattern when you have to implement a tree-like object structure.**
- **Use the pattern when you want the client code to treat both simple and complex elements uniformly.**

### How to implement
1. Make sure that the core model of your app can be represented as a tree structure. Try to break it down into simple elements and containers. Rememeber that containers must be able to contain both simple elements and other containers.
2. Declare the component interface with a list of methods that make sense for both simple and complex components.
3. Create a leaf class to represent simple elements. A program may have multiple different leaf classes.
4. Create a container class to represent complex elements. In this class, provide an array field for storing references to sub-elements. The array must be able to store both leaves and containers, so make sure it's declared with the component interface type.
While implementing the methods of the component interface, remember that a container is supposed to be delegating most of the work to sub-elements.
5. Finally, define the methods for adding and removal of child elements in the container.
Keep in mind that these operations can be declared in the component interface. This would violate the *Interface Segregation Principle* because the methods will be empty in the leaf class. However, the client will be able to treat all the elements equally, even when composing the tree.

### Pros and Cons:
- Pros:
  - You can work with complex tree structures more conveniently: use polymorphism and recursion to your advantage.
  - *Open/Closed Principle*. You can introduce new element types into the app without breaking the existing code, which now works with the object tree.
- Cons:
  - It might be difficult to provide a common interface for classes whose functionality differs too much. In certain scenarios, you'd need to overgeneralize the component interface, making it harder to comprehend.
