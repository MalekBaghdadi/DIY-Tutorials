$(document).ready(function () {  // On page load
    $(".form-signin form").submit(function (event) {  // On form submit
        event.preventDefault();  // Prevent default action
        let isValid = true;  

        $("input[type='email'], input[type='password']").each(function () {  // Check inputs
            if (!$(this).val().trim()) {  // If empty
                isValid = false;
                $(this).addClass("is-invalid");  // Mark invalid
            } else {
                $(this).removeClass("is-invalid");  // Remove error
            }
        });

        if (isValid) {  // If valid, redirect
            window.location.href = "index.html";
        }
    });
});
