console.log("Hello, World!");
//Square
console.group("Squares");
const squareSide = 5;
console.log("The side of the square measures: " + squareSide + " cm.");
const perimeter = squareSide * 4;
console.log("The perimeter of the square is: " + perimeter + " cm.");
const area = squareSide * squareSide;
console.log("The area of the square is: " + area + " cm^2.");
console.groupEnd();
// Triángulo
console.group("Triangles");
const triangleSideA = 6;
const triangleSideB = 6;
const triangleBase = 4;
const triangleHeight = 5.5;
const trianglePerimeter = triangleSideA + triangleSideB + triangleBase;
const triangleArea = (triangleBase * triangleHeight) / 2;
console.log(
    "The side A of the triangle measures: " + triangleSideA + " cm.\n"
    + "The side B of the triangle measures: " + triangleSideB + " cm.\n"
    + "The Base of the triangle measures: " + triangleBase + " cm.\n"
    + "The Height of the triangle measures: " + triangleHeight + " cm.\n"
    + "The Perimeter of the triangle measures: " + trianglePerimeter + " cm.\n"
    + "The Area of the triangle measures: " + triangleArea + " cm^2.\n"
);
console.groupEnd();

//Circle
console.group("Circles");
const circleRadio = 10;
const circleDiameter = circleRadio * 2;
//PI
const pi = Math.PI;
// Circunference
const circleCircunference = circleDiameter * pi;
// Area
const circleArea = (circleRadio * circleRadio) * pi;

console.log(
    "The radio of the circle measures: " + circleRadio + " cm.\n"
    + "The diameter of the circle measures: " + circleDiameter + " cm.\n"
    + "The pi of the circle measures: " + pi + " cm.\n"
    + "The circunference of the circle measures: " + circleCircunference + " cm.\n"
    + "The area of the circle measures: " + circleArea + " cm^2.\n"
);
console.groupEnd();