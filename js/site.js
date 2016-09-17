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
});
