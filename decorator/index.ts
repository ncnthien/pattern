interface Component {
    operation(): string
}

class ConcreteComponent implements Component {
    operation(): string {
        return 'Concrete Component Operation'
    }
}

class Decorator implements Component {
    protected component: Component

    constructor(component: Component) {
        this.component = component
    }

    operation(): string {
        return this.component.operation()
    }
}

class ConcreteDecoratorA extends Decorator {

    operation(): string {
        return `ConcreteDecoratorA${super.operation()}`
    }
}

class ConcreteDecoratorB extends Decorator {

    operation(): string {
        return `ConcreteDecoratorB${super.operation()}`
    }
}

const simple = new ConcreteComponent()
console.log(simple.operation())

const decorator1 = new ConcreteDecoratorA(simple)
const decorator2 = new ConcreteDecoratorB(decorator1)
console.log(decorator2.operation())
