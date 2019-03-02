var targetNumber = Math.floor(Math.random() * (65 - 20 + 1) + 20);
$('#target-number').html(targetNumber);
var redRupee = Math.floor(Math.random() * 10) + 1;
var greenRupee = Math.floor(Math.random() * 10) + 1;
var blueRupee = Math.floor(Math.random() * 10) + 1;
var purpleRupee = Math.floor(Math.random() * 10) + 1;
var totalPoints = 0;
$('#total').html(totalPoints);

//redRupee !== greenRupee && redRupee !== blueRupee && greenRupee !== blueRupee;

$('#green-rupee').on('click', function() {
    totalPoints += parseInt(greenRupee);
    console.log(totalPoints);
    $('#total').html(totalPoints);
    if (totalPoints === targetNumber) {
        winCondition();
    }
    else if (totalPoints > targetNumber) {
        loseCondition();
    }
});
$('#red-rupee').on('click', function() {
    totalPoints += parseInt(redRupee);
    console.log(totalPoints);
    $('#total').html(totalPoints);
    if (totalPoints === targetNumber) {
        winCondition();
    }
    else if (totalPoints > targetNumber) {
        loseCondition();
    }
});
$('#blue-rupee').on('click', function() {
    totalPoints += parseInt(blueRupee);
    console.log(totalPoints);
    $('#total').html(totalPoints);
    if (totalPoints === targetNumber) {
        winCondition();
    }
    else if (totalPoints > targetNumber) {
        loseCondition();
    }
});
$('#purple-rupee').on('click', function() {
    totalPoints += parseInt(purpleRupee);
    console.log(totalPoints);
    $('#total').html(totalPoints);
    if (totalPoints === targetNumber) {
        winCondition();
    }
    else if (totalPoints > targetNumber) {
        loseCondition();
    }
});

function winCondition() {
    alert("Congradulations You Win!");
    alert("Refresh the page to play again.");
};
function loseCondition() {
    alert("Sorry you lose.");
    alert("Refresh the page to play again.");
};