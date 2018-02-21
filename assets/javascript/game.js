//$(document).ready(function(){
//    
var minNumber = 19;
var maxNumber = 120;
var compNumber = compNumberFromRange(minNumber, maxNumber);
//var winCount = 0;
//var lossCount = 0;
var yourNumber = 0;
var wheelValue = wheelNum;

function compNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
$("#compNumber").text(compNumber);
//console.log(compNumber);

function wheelNum() {
    return Math.floor(Math.random() * 12) + 1;
    ("#wheel1").attr("data-wheelValue", wheelValue);
    console.log(wheelValue);
}

    $("#wheel1").on("click", function () {
        var wheelOne = ($(this).attr("data-wheelValue"));
        wheelOne = parseInt(wheel1);
        yourNumber += wheel1;
    })
    $("#yourNumber").text(yourNumber);


    //function gameLock(){
    //
    //}

    //});
