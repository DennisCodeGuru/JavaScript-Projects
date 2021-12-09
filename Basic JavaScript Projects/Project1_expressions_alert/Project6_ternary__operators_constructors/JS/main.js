//OPERATORS_CONSTRUCTORS
function Ride_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_ride = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_ride + " to vote.";
}