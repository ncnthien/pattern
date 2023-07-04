## Adapter

### Problem
- Imagine that you're creating a stock market monitoring app.
- The app downloads the stock data from multiple sources in XML format and then displays nice-looking charts and diagrams for the users.
- Then, you want to improve the app by integrating a smart 3rd-party analytics library. But that library only works with JSON.
- You can change the library to work with XML instead of JSON, but this will break existing code in library.

### Solution
- You can create an adapter, a special object that converts the interface of one object so that another object can understand it.
- An adapter wraps one of the objects to hide the complexity of conversion happening behind the scenes.
- Adapters can not only convert data into various formats but can also help objects with different interfaces collaborate.
- 1. The adapter gets an interface, compatible with one of the existing objects.
- 2. Using this interface, the existing object can safely call the adapter's methods.
- 3. Upon receiving call, the adapter passes the request to the second object, but in a format and order that the second object expects.
- Sometimes it's even possible to create a two-way adapter that can convert the calls in both directions.

### Applicability
- Use the Adapter class when you want to use some existing class, but its interface isn't compatible with the rest of your code.
- Use the pattern when you want to reuse several existing subclasses that lack some common functinality that can't be added to the superclass.

### How to implement
1. Make sure that you have at least two classes with incompatible interfaces:
  - A useful service class, which you can't change (often 3rd-party, legacy or with lots of existing dependencies).
  - One or several client classes that would benefit from using the service class.
2. Declare the client interface and describe how clients communicate with the service.
3. Create the adapter class and make it follow the client interface. Leave all the methods empty for now.
4. Add a field to the adapter class to store a reference to the service object. The common practice is to initialize this field via the constructor, but sometimes it's more convinient to pass it to the adapter when calling its methods.
5. One by one, implement all methods of the client interface in the adapter class. The adapter should delegate most of the real work to the service object, handling only the interface or data format conversion.
6. Clients should use the adapter via the client interface. This will let you change or extend the adapters without affecting the client code.

### Pros and Cons
- Pros:
  + Single Responsibility Principle. You can separate the interface or data conversion code from the primary business logic of the program.
  + Open/Closed Principle. You can introduce new types of adapters into the program without breaking the existing client code, as long as they work with the adapters through the client interface.

- Cons:
  + The overall complexity of the code increases because you need to introduce a set of new interfaces and classes. Sometimes it's simpler just to change the service class so that it matches the rest of your code.
