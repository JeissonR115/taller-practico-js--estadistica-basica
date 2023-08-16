class RegularPolygon {
    constructor(numSides, sideLength, unit = "m") {
        this.numSides = numSides;
        this.sideLength = sideLength;
        this.unit = unit;
        this.perimeter = this.calculatePerimeter();
        this.area = this.calculateArea();
    }

    calculatePerimeter = () => this.sideLength * this.numSides;
    calculateArea = () => (this.numSides * this.sideLength ** 2) / (4 * Math.tan(Math.PI / this.numSides));

    showInfoPolygon = (numDecimals = 2) =>
        `
        ***Regular Polygon***
        Number of sides: ${this.numSides.toFixed(numDecimals)}
        Side length: ${this.sideLength.toFixed(numDecimals)}${this.unit}
        Perimeter: ${this.perimeter.toFixed(numDecimals)}${this.unit}
        Area: ${this.area.toFixed(numDecimals)}${this.unit}^2
    `;

    static calculatePerimeter = (sideLength, numSides) => sideLength * numSides;
    static calculateArea = (sideLength, numSides) => (numSides * sideLength ** 2) / (4 * Math.tan(Math.PI / numSides));
}
class Triangle {
    constructor(side1, side2, side3, unit = 'm') {
        this.sides = [side1, side2, side3];
        this.numSides = this.sides.length;
        this.unit = unit;
        this.perimeter = this.calculatePerimeter()
        this.area = this.calculateArea();
    }
    calculatePerimeter = () => this.sides.reduce((sum, side) => sum + side)
    calculateArea = () => {
        const semiPerimeter = this.perimeter / 2;
        const product = (semiPerimeter - this.sides[0]) * (semiPerimeter - this.sides[1]) * (semiPerimeter - this.sides[2]) * semiPerimeter
        return Math.sqrt(product, 2);
    }
    showInfoTriangle = (numDecimals = 2) => `
        ***Triangle***
        Number of sides: ${this.numSides.toFixed(numDecimals)}
        Side length: ${this.sides.map(side => `${side.toFixed(numDecimals)}${this.unit}`)}
        Perimeter: ${this.perimeter.toFixed(numDecimals)}${this.unit}
        Area: ${this.area.toFixed(numDecimals)}${this.unit}^2
    `
    static calculatePerimeter = (side1, side2, side3) => {
        const sides = [side1, side2, side3]
        return sides.reduce((sum, side) => sum + side);
    }
    static calculateArea = (side1, side2, side3) => {
        const sides = [side1, side2, side3]
        const perimeter = sides.reduce((sum, side) => sum + side);
        const semiPerimeter = perimeter / 2;
        const product = sides.reduce((product, side) => product * (semiPerimeter - side), 1);
        return Math.sqrt(product * semiPerimeter);
    };
}


const scaleneTriangle1 = new Triangle(1, 6, 5);
const square1 = new RegularPolygon(100000, 10, 'cm');
const equilateralTriangle = new RegularPolygon(3, 1, 'cm');
const square2 = new RegularPolygon(4, 8.5);
const asd = new RegularPolygon(5, 525);

console.log(
    square1.showInfoPolygon(0),
    scaleneTriangle1.showInfoTriangle(6),
    square2.showInfoPolygon(3),
    asd.showInfoPolygon(0),
    equilateralTriangle.showInfoPolygon(),
)
