$(document).ready(function () {
		$('#imageCarousel').carousel();
	})

$(document).ready(function () {
    $('.nav-toggle').click(function () {
        var collapse_content_selector = $(this).attr('href');
        var toggle_switch = $(this);
        $(collapse_content_selector).toggle(function () {
        });
    });

});