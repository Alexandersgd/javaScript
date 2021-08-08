
// const squareSide = 5;
// const area = squareSide * squareSide;

function squarePerimeter(sideMeasures) {
    return sideMeasures * 4;
}
function squareArea(sideMeasures) {
    return sideMeasures * sideMeasures;
}

// const trianglePerimeter = triangleSideA + triangleSideB + triangleBase;
// const triangleArea = (triangleBase * triangleHeight) / 2;

function trianglePerimeter(sideA, sideB, base) {
    return (sideA + sideB + base);
}
function triangleArea(base, height) {
    return (base * height) / 2;
}

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
/* triangle */
function CalculatePerimeterT() {
    const result = document.getElementById("triangleAnswer");

    const userTSA = document.getElementById("userTSA");
    const valueTA = Number(userTSA.value);

    const userTSB = document.getElementById("userTSB");
    const valueTB = Number(userTSB.value);

    const userTBase = document.getElementById("userTBase");
    const valueTBase = Number(userTBase.value);

    const perimeterTriangle = trianglePerimeter(valueTA, valueTB, valueTBase);

    result.innerText = `The perimeter of triangle is ${perimeterTriangle}`
}
function CalculateAreaT() {
    const result = document.getElementById("triangleAnswer");

    const userTBase = document.getElementById("userTBase");
    const valueTBase = Number(userTBase.value);

    const userTHeight = document.getElementById("userTHeight");
    const valueTHeight = Number(userTHeight.value);

    const areaTriangle = triangleArea(valueTBase, valueTHeight);
    result.innerText = `The Area of triangle is ${areaTriangle}`
}