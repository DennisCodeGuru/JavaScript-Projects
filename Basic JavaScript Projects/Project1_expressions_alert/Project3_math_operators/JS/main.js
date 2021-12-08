// Math function
function additional_Function() {
    var additional = 2+2;
    document.getElementById("math").innerHTML ="2+2=" + additional;
}
//Subtraction
function subtraction_Function() {
    var subtraction = 5-2;
    document.getElementById("math").innerHTML = "5-2=" + subtraction;
}

//Multiplication
function multiplication() {
    var simple_Math = 6*8;
    document.getElementById("math").innerHTML = "6 x 8 =" + simple_Math;
}

//Division
function division() {
    var simple_Math = 48/6;
    document.getElementById("math").innerHTML = "48 / 6 =" + simple_Math;
}

//More math
function more_Math() {
    var simple_Math = (1+2) * 10 / 2-5;
    document.getElementById("math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

//Modulus
function modulus_Operator() {
    var simple_Math = 25%6;
    document.getElementById("math").innerHTML = "When you divide 25 by 6 you have a remainder of:" + simple_Math;
}

//Negation
function negation_Operator() {
    var x=10;
    document.getElementById("math").innerHTML = -x;
}

//Increment and Decrement
function also1 () {
    var X = 5;
    X++;
    document.write(X);
    document.getElementById("math").innerHTML = "X++"
}

//
function also () {
    var Y = 5.25;
    Y--;
    document.write(Y);
    document.getElementById("math").innerHTML = "Y--"
}


//Random
window.alert(Math.random());
