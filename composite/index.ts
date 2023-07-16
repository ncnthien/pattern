abstract class Component {
    protected parent: Component | null

    setParent(component: Component | null) {
        this.parent = component
    }

    getParent(): Component | null {
        return this.parent
    }

    public remove(component: Component | null): void {

    }

    public add(component: Component | null): void {

    }

    public isComposite(): boolean {
        return false
    }

    public abstract operation(): string


}

class Leaf extends Component {
    operation(): string {
        return 'Leaf'
    }
}

class Composite extends Component {
    protected children: Component[] = []

    public add(component: Component) {
        this.children.push(component)
        component.setParent(this)
    }

    public remove(component: Component) {
        const componentIndex = this.children.indexOf(component)
        this.children.splice(componentIndex, 1)
        component.setParent(null)
    }

    public isComposite(): boolean {
        return true;
    }

    public operation(): string {
        const result = []
        for (const child of this.children) {
            result.push(child.operation())
        }
        return `Branch(${result.join('+')})`
    }

}

// For example, get the total of all products in box

abstract class Product {
    protected parent: Product | null
    a: number
    b: number

    protected constructor(a, b) {
        this.a = a
        this.b = b
    }

    setParent(product: Product) {
        this.parent = product
    }

    getParent(product: Product) {
        return this.parent
    }

    abstract total() : number
}

class ConcreteProduct extends Product {
    total(): number {
        return this.a + this.b
    }
}

class ProductComposite extends Product {
    products: Product[]

    total(): number {
        let result = 0

        for (const product of this.products) {
            result += product.total()
        }

        return result
    }
}

// And then, we can calculate the total of any products we want!
