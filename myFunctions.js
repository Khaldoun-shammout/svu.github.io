$(document).ready(function() {
    $('.details-button').click(function() {
        $(this).closest('tr').next('.property-details').toggle();
    });

    $('#proceed').click(function() {
        $('#application-form').show();
    });

    // Generate a simple captcha
    function generateCaptcha() {
        let captcha = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 6; i++) {
            captcha += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        $('#captcha').text('Captcha: ' + captcha);
    }

    generateCaptcha();
    
    $('#application-form').submit(function(event) {
        event.preventDefault();
        
        // Here you can add validation if needed
        alert('تم إرسال الطلب بنجاح!');
    });
});
