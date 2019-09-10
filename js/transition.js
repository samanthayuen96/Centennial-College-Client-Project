$(document).ready(function() {
	//Scroll to top when hit logo/home button
	$(".big_logo").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	  	return false;
	});

	setTimeout(function() {
		$('#loading').fadeOut('slow');
		$("html,body").scrollTop(0,0);

	}, 750); // <-- time in milliseconds
});


