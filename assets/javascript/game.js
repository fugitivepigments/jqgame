$(document).ready(function () {

    var minNumber = 19;
    var maxNumber = 120;
    var compNumber = compNumberFromRange(minNumber, maxNumber);
    var winCount = 0;
    var lossCount = 0;
    var yourNumber = 0;
    var hasScored = false;

    //generate random number for computer's number
    function compNumberFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    //console.log(compNumber);

    //give wheels random values
    function randomWheelValues() {
        $("#compNumber").text(compNumber);
        $(".wheel").each(function (i, wheel) {
            var wheelValue = Math.floor(Math.random() * 12) + 1;
            $(wheel).attr("data-wheelValue", wheelValue);
            console.log(wheel, i);
        })
    }
    randomWheelValues();

    //click event to add wheel values to yourNumber
    $(".wheel").on("click", function () {
        var value = $(this).attr("data-wheelValue");
        value = parseInt(value);
        yourNumber += value;
        $("#yourNumber").text(yourNumber);
        score();

    });

    //score count
    function score() {
        if (yourNumber === compNumber) {
            if (hasScored === false) {
                initReset();
            }
            hasScored = true
            winCount += 1;
            $("#wins").text(winCount)
        } else if (yourNumber > compNumber) {
            if (hasScored === false) {
                initReset();
            }
            hasScored = true
            losses += 1;
            $("#losses").text(lossCount)
        }

    }

    function initReset() {
        $(".reset-container").removeClass("d-none");
        $(".reset-button").on("click", function () {
            reset();
        })
    }

    function reset() {
        $("#yourNumber").empty();
        yourNumber = 0;
        $("#compNumber").empty();
        compNumber = compNumberFromRange(minNumber, maxNumber);
        randomWheelValues();
    }
});
