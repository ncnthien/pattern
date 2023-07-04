// For example, at first our project only works with RoundPeg, and functionalities around RoundPeg
class RoundPeg {
    radius: number

    constructor(radius: number) {
        this.radius = radius
    }

    getRadius(): number {
        return this.radius
    }
}

class RoundHole {
    radius: number

    constructor(radius: number) {
        this.radius = radius
    }

    getRadius():number {
        return this.radius
    }

    fits(roundPeg: RoundPeg): boolean {
        return this.getRadius() > roundPeg.getRadius()
    }
}

// If then, we have to work with a new class called SquarePeg
class SquarePeg {
    width: number

    constructor(width: number) {
        this.width = width
    }

    getWidth(): number {
        return this.width
    }
}

// Although a square page can fit a round hole, but method of RoundHole does not support SquarePeg
// To avoid violating Open/Closed principle, we can use an adapter to wrap the SquarePeg

class SquarePegAdapter extends RoundPeg {
    squarePeg: SquarePeg

    constructor(squarePeg: SquarePeg) {
        super(squarePeg.getWidth() / 2);
        this.squarePeg = squarePeg
    }

    // Here, we can override the method getRadius
    getRadius(): number {
        return (this.squarePeg.getWidth() * Math.sqrt(2)) / 2
    }
}

// Now, we can use SquarePegAdapter in order to pass to the RoundHole.fits without changing RoundHole class

const roundPeg: RoundPeg = new RoundPeg(5)
const roundHole: RoundHole = new RoundHole(5)
roundHole.fits(roundPeg) // This should return true

const smallSquarePeg: SquarePeg = new SquarePeg(5)
const largeSquarePeg: SquarePeg = new SquarePeg(10)
roundHole.fits(smallSquarePeg) // This shouldn't run because of wrong type

const smallSquarePegAdapter: SquarePegAdapter = new SquarePegAdapter(smallSquarePeg)
const largeSquarePegAdapter: SquarePegAdapter = new SquarePegAdapter(largeSquarePeg)
roundHole.fits(smallSquarePegAdapter) // This should run and return true
roundHole.fits(largeSquarePegAdapter) // This should run and return false

