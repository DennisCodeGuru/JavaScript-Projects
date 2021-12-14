//Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
// Array
function cat_pics () {
    var Cat_Picture =[];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML ="In this picture, the cat is" + Cat_Picture[2] + ".";
}
// CONST KEYWORD
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "200";
    document.getElementById("Constant").innerHTML = "The cost of the " + 
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}
//LET
var X = 85
document.write(X);
{
    let X = 35;
    document.write("<br>" + X);
}
document.write("<br>" + X)
//OBJECTS
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color +this.make + this.model;
        }
};
document.getElementById("Car_Object").innerHTML = car.description();