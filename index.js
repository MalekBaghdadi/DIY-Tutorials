$(document).ready(function () {
    let currentTimer;

    $("#startTimer").click(function () {
        let timeLeft = parseInt($("#timerInput").val());
        if (isNaN(timeLeft) || timeLeft <= 0) {
            alert("Please enter a valid number of seconds!");
            return;
        }
        clearInterval(currentTimer); 
        let display = $("#timerDisplay");
        display.text(timeLeft + " sec");

        currentTimer = setInterval(function () {
            timeLeft--;
            display.text(timeLeft + " sec");

            if (timeLeft <= 0) {
                clearInterval(currentTimer);
                alert("Time's up! Flip your pancake!");
                display.text("00:00");
            }
        }, 1000);
    });
});
const steps = [
    "Start with a square sheet of paper, color side down.",
    "Fold the paper in half diagonally and unfold.",
    "Fold the other diagonal and unfold.",
    "Bring the corners together to form a triangle base.",
    "Fold the corners of the triangle up to form the dragon’s head and tail.",
    "Shape the wings by folding the sides outward.",
    "Adjust the creases and details to refine your dragon."
];
let stepIndex = 0;

document.getElementById("nextStep").addEventListener("click", function() {
    if (stepIndex < steps.length - 1) {
        stepIndex++;
        document.getElementById("stepDisplay").innerText = steps[stepIndex];
        document.getElementById("prevStep").disabled = false;
    }
    if (stepIndex === steps.length - 1) {
        this.disabled = true;
    }
});

document.getElementById("prevStep").addEventListener("click", function() {
    if (stepIndex > 0) {
        stepIndex--;
        document.getElementById("stepDisplay").innerText = steps[stepIndex];
        document.getElementById("nextStep").disabled = false;
    }
    if (stepIndex === 0) {
        this.disabled = true;
    }
});