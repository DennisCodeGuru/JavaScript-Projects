//Operator
document.write(typeof 2);

//Infinity
function infinity () {
    var x= 2E310;
    document.getElementById("infinity").innerHTML = 1.7976931348623157E308;
}
//-Infinity
function  negative_infinity() {
    var G = -3E310;
    document.getElementById("negative_infinity").innerHTML = -1.7976931348623157E308;
}

//BOOLEAN LOGIC
//true
function test () {
    var h = 10>2;
    document.getElementById("true").innerHTML = true;
}
//false
function test1 () {
    var v = 10<2;
    document.getElementById("false").innerHTML = false;
}

//console.log
console.log(2+2);

//DOUBLE EQUAL SIGNS
//true
function my () {
    var z = 10==10;
    document.getElementById("true").innerHTML = true;
}
//false
function my1 () {
    var q = 3==11;
    document.getElementById("false").innerHTML = false;
}

//TRIPLE EQUAL
//true
function triple () {
    var a = 10;
    var c = 10;
    document.getElementById("true").innerHTML = (a===c);
}
//false
function triple1 () {
    var a = 82;
    var c = "82";
    document.getElementById("false").innerHTML = (a===c);
}

//LOGICAL OPERATORS
//true
function local () {
    
    document.getElementById("true").innerHTML = (5>2 && 10>4);
}
//false
function local1 () {
    
    document.getElementById("false").innerHTML = (5>10 && 10>4);
}
// NOT 
//true
 function not_Function1() {
    document.getElementById("Not1").innerHTML = !(5 > 10);
}
//fals
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}