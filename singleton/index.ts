class Counter {
    private static instance: Counter
    value: number

    private constructor(initValue: number) {
        this.value = initValue
    }

    static getInstance() {
        if (!this.instance) {
            return new Counter(0)
        }
        return this.instance
    }

    static increase(value: number) {
        this.instance.value += value
        return this
    }

    static decrease(value: number) {
        this.instance.value -= value
        return this
    }
}

const firstCounter = Counter.getInstance()
const secondCounter = Counter.getInstance()

if (firstCounter === secondCounter) {
    console.log('Singleton works, both variables contain the same instance.')
} else {
    console.log('Singleton failed, variables contain different instances.')
}


