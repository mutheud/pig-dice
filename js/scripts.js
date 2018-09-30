
$(document).ready(function () {
    $(".submits").click(function () {
        $(".player-one").toggle(4000)
    });
});
//user Interface
function rollDice() {
    var dice1 = document.getElementById("dice1");

    var status = document.getElementById("status");

    var d1 = Math.floor(Math.random() * 6) + 1;


    dice1.innerHTML = d1;
    var diceTotal = d1;
    status.innerHTML = "You rolled" + diceTotal + ".";

    // if (d1 == d2) { status.inneHTML = "DOUBLES! You get a free turn!!"; }
};

function rolledDice() {

    var dice2 = document.getElementById("dice2");
    var statuss = document.getElementById("statuss");

    var d2 = Math.floor(Math.random() * 6) + 1;

    dice2.innerHTML = d2;
    var dicesTotal = d2;
    statuss.innerHTML = "You rolled" + dicesTotal + ".";
};
//Business Logic
var total = function sum(arr) {
    var s = 0;
    for (var i = 0; i < arr.length; i++) {
        s = s + arr[i];
    }
    alert(s);
};
// var returnedVal=sum([1,2,3,4,5,6]);
// alert(returnedVal);
// var total= [];
// var sum = 0;
// for (d1 = 0; d1 <100; d1++) {
//     sum += d1 +d1;

// }
