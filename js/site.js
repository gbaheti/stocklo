$(document).ready(function() {
    $(".get-started, .mock-img").on("click", function(e) {
        e.preventDefault();
        $(".overlay").addClass("show");
        $(".message").addClass("show-message");
    });
    $(".close-btn").on("click", function(e) {
        e.preventDefault();
        $(".overlay").removeClass("show");
        $(".message").removeClass("show-message");
    });
    $(document).on('keyup', function(e) {
        if (e.keyCode === 27) {
            console.log("press");
            $(".overlay").removeClass("show");
            $(".message").removeClass("show-message");
        };
    });
    //collect email
    var form = $('#email-form');
    var button = $('.submit-btn');
    $(form).submit(function(e) {
        e.preventDefault();
        button.addClass("loading");
        var formData = $(".input-text").val();
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        }).done(function(response) {
            $(form).removeClass('error');
            $(button).addClass('success');
            $(button).text(response);
            $('.input-text').val('');
            button.removeClass("loading");
        }).fail(function(data) {
            $(form).addClass('error');
            $(button).removeClass('success');
            button.removeClass("loading");
        });
    });
});
