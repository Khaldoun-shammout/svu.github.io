$(document).ready(function() {
    $(".details-button").click(function() {
        $(this).closest("tr").next(".property-details").toggle();
    });

    $("#proceed").click(function() {
        $("#application-form").toggle();
    });

    $("#application-form button").click(function(event) {
        event.preventDefault();
        var isValid = validateForm();
        if (isValid) {
            alert("Form submitted successfully!");
        }
    });

    function validateForm() {
        var fullName = $("#full-name").val();
        var nationalId = $("#national-id").val();
        var birthdate = $("#birthdate").val();
        var mobileNumber = $("#mobile-number").val();
        var email = $("#email").val();

        var fullNameRegex = /[\u0600-\u06FF\u0750-\u077F]/; // Arabic characters and spaces
        var nationalIdRegex = /^\d{11}$/;
        var mobileNumberRegex = /^(09)\d{8}$/;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!fullNameRegex.test(fullName)) {
            alert("الاسم الكامل يجب أن يكون باللغة العربية فقط.");
            return false;
        }
        if (!nationalIdRegex.test(nationalId)) {
            alert("الرقم الوطني يجب أن يتكون من 11 رقم.");
            return false;
        }
        if (!mobileNumberRegex.test(mobileNumber)) {
            alert("رقم الموبايل يجب أن يبدأ بـ 09 ويحتوي على 10 أرقام.");
            return false;
        }
        if (!emailRegex.test(email)) {
            alert("يرجى إدخال بريد إلكتروني صالح.");
            return false;
        }

        return true;
    }
});