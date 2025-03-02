$(document).ready(function () {  // Run when page loads
    $(".form-signup form").submit(function (event) {  // On form submit
        event.preventDefault();  // Prevent default submission
        let isValid = true; 

        $("input[type='text'], input[type='email'], input[type='password']").each(function () {  
            if (!$(this).val().trim()) {  // Check if empty
                isValid = false;
                $(this).addClass("is-invalid");  // Highlight invalid fields
            } else {
                $(this).removeClass("is-invalid");  // Remove error styling
            }
        });

        if ($("#floatingPassword").val() !== $("#floatingConfirmPassword").val()) {  // Check passwords match
            isValid = false;
            $("#floatingPassword, #floatingConfirmPassword").addClass("is-invalid");  
            alert("Passwords do not match!");  // Show error message
        } else {
            $("#floatingPassword, #floatingConfirmPassword").removeClass("is-invalid");  
        }

        if (!$("#termsCheck").is(":checked")) {  // Check terms agreement
            isValid = false;
            $("#termsCheck").addClass("is-invalid");  
            alert("You must agree to the terms and conditions!");  
        } else {
            $("#termsCheck").removeClass("is-invalid");  
        }

        if (isValid) {  // If form is valid
            window.location.href = "index.html";  // Redirect to home page
        }
    });
});
