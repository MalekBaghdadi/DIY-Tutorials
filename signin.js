$(document).ready(function () {
    $(".form-signin form").submit(function (event) {
        event.preventDefault();
        let isValid = true;

        $("input[type='email'], input[type='password']").each(function () {
            if (!$(this).val().trim()) {
                isValid = false;
                $(this).addClass("is-invalid");
            } else {
                $(this).removeClass("is-invalid");
            }
        });

        if (isValid) {
            window.location.href = "index.html";
        }
    });
});