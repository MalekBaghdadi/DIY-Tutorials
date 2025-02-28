$(document).ready(function () {
    let currentTimer; // Timer interval

    $("#startTimer").click(function () {
        let timeLeft = parseInt($("#timerInput").val()); // Get input
        if (isNaN(timeLeft) || timeLeft <= 0) { // Validate
            alert("Please enter a valid number of seconds!");
            return;
        }
        clearInterval(currentTimer); // Clear old timer
        let display = $("#timerDisplay");
        display.text(timeLeft + " sec"); // Set initial time

        currentTimer = setInterval(function () { // Start countdown
            timeLeft--;
            display.text(timeLeft + " sec");

            if (timeLeft <= 0) { // Time's up
                clearInterval(currentTimer);
                alert("Time's up! Flip your pancake!");
                display.text("00:00");
            }
        }, 1000); // Update every second
    });
});

$(document).ready(function() {
    const steps = [ // Tutorial steps
        "Start with a square sheet of paper, color side down.",
        "Fold the paper in half diagonally and unfold.",
        "Fold the other diagonal and unfold.",
        "Bring the corners together to form a triangle base.",
        "Fold the corners of the triangle up to form the dragon’s head and tail.",
        "Shape the wings by folding the sides outward.",
        "Adjust the creases and details to refine your dragon.",
        "Finished!"
    ];
    let stepIndex = 0; // Current step

    // Next step
    $("#nextStep").on("click", function() {
        if (stepIndex < steps.length - 1) {
            stepIndex++;
            $("#stepDisplay").text(steps[stepIndex]); // Update text
            $("#prevStep").prop("disabled", false); // Enable previous
        }
        if (stepIndex === steps.length - 1) {
            $(this).prop("disabled", true); // Disable next
        }
    });

    // Previous step
    $("#prevStep").on("click", function() {
        if (stepIndex > 0) {
            stepIndex--;
            $("#stepDisplay").text(steps[stepIndex]); // Update text
            $("#nextStep").prop("disabled", false); // Enable next
        }
        if (stepIndex === 0) {
            $(this).prop("disabled", true); // Disable previous
        }
    });

    // Dragon color change
    const $dragonImage = $("#dragonImage");
    const $dragonColor = $("#dragonColor");

    $dragonColor.on("change", function() {
        const selectedColor = $(this).val(); // Get color
        $dragonImage.attr("src", `img/dragon_${selectedColor}.jpg`); // Update image
    });
});
