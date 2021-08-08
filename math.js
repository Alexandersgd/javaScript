console.log("Hello, World!");


console.group("Squares");
// const squareSide = 5;
// const area = squareSide * squareSide;

function squarePerimeter(sideMeasures) {
    return sideMeasures * 4;
}
function squareArea(sideMeasures) {
    return sideMeasures * sideMeasures;
}
console.groupEnd();

console.group("Triangles");

// const trianglePerimeter = triangleSideA + triangleSideB + triangleBase;
// const triangleArea = (triangleBase * triangleHeight) / 2;

function trianglePerimeter(sideA, sideB, base) {
    return sideA + sideB + base;
}
function triangleArea(base, height) {
    return (base * height) / 2;
}
console.groupEnd();

console.group("Circles");

//PI 
const pi = Math.PI;

function circleDiameter(radio) {
    return radio * 2;
}
function circlePerimeter(radio) {
    return circleDiameter(radio) * pi;
}
function circleArea(radio) {
    return (radio * radio) * pi;
}
// Circunference    const circleCircunference = circleDiameter * pi;
// Area const circleArea = (circleRadio * circleRadio) * pi;

console.groupEnd();
//When user click
function userCalculatePerimeter() {
    const userDato = document.getElementById("userForSquare");
    const result = document.getElementById("squareAnswer");
    const value = userDato.value;
    const perimeter = squarePerimeter(value);
    result.innerText = `The perimeter is ${perimeter}`
}
function userCalculateArea() {
    const userDato = document.getElementById("userForSquare");
    const result = document.getElementById("squareAnswer")
    const value = userDato.value;
    const area = squareArea(value);
    result.innerText = `The area is: ${area}`
}
//connect with HTML
