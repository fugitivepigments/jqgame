$(document).ready(function () {

    var minNumber = 19;
    var maxNumber = 120;
    var compNumber = compNumberFromRange(minNumber, maxNumber);
    //var winCount = 0;
    //var lossCount = 0;
    var yourNumber = 0;

    //generate random number for computer's number
    function compNumberFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    $("#compNumber").text(compNumber);
    //console.log(compNumber);

    $(".wheel").each(function (i, wheel) {
        var wheelValue = Math.floor(Math.random() * 12) + 1;
        $(wheel).attr("data-wheelValue", wheelValue);
        console.log(wheel, i);
    })
    //.data(wheelValue)
    //function wheelNum() { 

    //    ("#wheel1").attr("data-wheelValue", wheelValue);
    //    console.log(wheelValue);
    //}

    $(".wheel").on("click", function () {
        var value = $(this).attr("data-wheelValue");
        value = parseInt(value);
        yourNumber += value;
        $("#yourNumber").text(yourNumber);
        
    })
    
    //wheel.off click listener

    //function gameLock(){
    //
    //}

});
