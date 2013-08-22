
// Menu collapse
$(document).ready(function() {
    
    
    $('i').click(function() {
    $('aside').slideToggle('fast');
    return false;
	});

    
});

// dribbble
$(document).ready(function () {		
	$.jribbble.getShotsByPlayerId('mikejolz', function (playerShots) {
	    var html = [];
	
	    $.each(playerShots.shots, function (i, shot) {
	        html.push('<li><a href="#">');
	        html.push('<img src="' + shot.image_teaser_url + '" ');
	        html.push('alt="' + shot.title + '"></a></li>');
	    });
	
	    $('#portfolio').html(html.join(''));
	}, {page: 1, per_page: 50});
});