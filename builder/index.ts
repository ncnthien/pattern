interface Builder {
    producePartA(): this
    producePartB(): this
    producePartC(): this
}

class Product1 {
    public parts: string[] = [];
}

class ConcreteBuilder1 implements Builder {
    private product: Product1

    constructor() {
    this.reset()
    }

    reset() {
        this.product = new Product1()
    }

    producePartA() {
        this.product.parts.push('partA')
        return this
    }

    producePartB() {
        this.product.parts.push('partB')
        return this
    }

    producePartC() {
        this.product.parts.push('partC')
        return this
    }

    getProduct(): Product1 {
        const result = this.product
        this.reset()
        return result
    }
}

class Director {
    private builder: Builder

    public setBuilder(builder: Builder) {
        this.builder = builder
    }

    buildMinimalViableProduct() {
        this.builder.producePartA()
    }

    buildFullFeatureProduct() {
        this.builder
            .producePartA()
            .producePartB()
            .producePartC()
    }
}

const director = new Director()
const concreteBuilder1 = new ConcreteBuilder1()
director.setBuilder(concreteBuilder1)

director.buildMinimalViableProduct()
const minimalViableProduct = concreteBuilder1.getProduct()
console.log(minimalViableProduct)

director.buildFullFeatureProduct()
const fullFeatureProduct = concreteBuilder1.getProduct()
console.log(fullFeatureProduct)
