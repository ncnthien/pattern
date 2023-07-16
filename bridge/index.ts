class Abstraction {
    implementation: Implementation

    constructor(implementation: Implementation) {
        this.implementation = implementation
    }

     operation() {
        return `Abstraction: Base operation with: ${this.implementation.operationImplementation()}`;
    }
}

class ExtendAbstraction extends Abstraction{
    operation() {
        return `ExtendAbstraction: Base operation with: ${this.implementation.operationImplementation()}`
    }
}


interface Implementation {
    operationImplementation(): string;
}

class ConcreteImplementationA implements Implementation {
    public operationImplementation(): string {
        return 'ConcreteImplementationA: Here\'s the result on the platform A.';
    }
}

class ConcreteImplementationB implements Implementation {
    public operationImplementation(): string {
        return 'ConcreteImplementationA: Here\'s the result on the platform B.';
    }
}

let implementation = new ConcreteImplementationA()
let abstraction = new Abstraction(implementation)
console.log(abstraction.operation())

implementation = new ConcreteImplementationB()
abstraction = new ExtendAbstraction(implementation)
console.log(abstraction.operation())
