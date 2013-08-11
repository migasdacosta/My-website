$(document).ready(function() {
    // Append class to contact
    $('.wrapper aside div.aux section.logo a').click(function() {
        $(".wrapper aside").removeClass("menu-open");
        $(".wrapper aside").addClass("menu-open");
    });
});