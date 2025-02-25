$(document).ready(function () {
    $(".form-signup form").submit(function (event) {
        event.preventDefault();
        let isValid = true;

        $("input[type='text'], input[type='email'], input[type='password']").each(function () {
            if (!$(this).val().trim()) {
                isValid = false;
                $(this).addClass("is-invalid");
            } else {
                $(this).removeClass("is-invalid");
            }
        });

        if ($("#floatingPassword").val() !== $("#floatingConfirmPassword").val()) {
            isValid = false;
            $("#floatingPassword, #floatingConfirmPassword").addClass("is-invalid");
            alert("Passwords do not match!");
        } else {
            $("#floatingPassword, #floatingConfirmPassword").removeClass("is-invalid");
        }

        if (!$("#termsCheck").is(":checked")) {
            isValid = false;
            $("#termsCheck").addClass("is-invalid");
            alert("You must agree to the terms and conditions!");
        } else {
            $("#termsCheck").removeClass("is-invalid");
        }

        if (isValid) {
            window.location.href = "index.html";
        }
    });
});