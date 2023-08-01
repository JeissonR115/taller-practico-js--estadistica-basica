const degreesToRadians = (degrees) => degrees * Math.PI / 180;

class RegularPolygon {
    constructor(numSides, sideLength, unit = "cm") {
        this.sideLength = sideLength;
        this.numSides = numSides;
        this.unit = unit;

        this.angle = 360 / (2 * numSides);
        this.perimeter = this.calculatePerimeter(sideLength, numSides);
        this.apothem = this.calculateApothem(sideLength, this.angle);
        this.area = this.calculateArea(this.perimeter, this.apothem);
    }

    calculateApothem = (sideLength, angle) => sideLength / (2 * Math.tan(degreesToRadians(angle)));
    calculatePerimeter = (sideLength, numSides) => sideLength * numSides;
    calculateArea = (perimeter, apothem) => perimeter * apothem / 2;

    printInfo = (numDecimals, unit = this.unit) => console.log(
        `
Number of sides: ${this.numSides.toFixed(numDecimals)}
Side length: ${this.sideLength.toFixed(numDecimals)}${unit}
Apothem: ${this.apothem.toFixed(numDecimals)}${unit}
Perimeter: ${this.perimeter.toFixed(numDecimals)}${unit}
Area: ${this.area.toFixed(numDecimals)}${unit}^2
`
    )
}
const square1 = new RegularPolygon(4, 10, 'cm');
square1.printInfo(1)
const triangle1 = new RegularPolygon(3, 1, 'cm');
triangle1.printInfo(2)
const square2 = new RegularPolygon(4, 8.5, "m")
square2.printInfo(5)