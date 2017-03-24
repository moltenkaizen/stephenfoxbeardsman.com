$(function() {
    
	$( "#mobile-menu-open" ).click(function() {
  		$( ".topnav" ).slideDown( "slow" );
  		$("#mobile-menu-open").hide();
  		$("#mobile-menu-close").show();
  		// $("#mobile-menu-open").addClass("hidden");
  		// $("#mobile-menu-close").removeClass("hidden");
  		console.log("open");

	});

	$( "#mobile-menu-close" ).click(function() {
  		$( ".topnav" ).slideUp( "slow" );
  		$("#mobile-menu-close").hide();
  		$("#mobile-menu-open").show();
  		// $("#mobile-menu-close").addClass("hidden");
  		// $("#mobile-menu-open").removeClass("hidden");
  		console.log("close");
	});

	  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('ul.topnav').removeAttr('style');
			$("#mobile-menu-close").removeAttr('style');
			$("#mobile-menu-open").removeAttr('style');
		 }
	});//end resize

	var userFeed = new Instafeed({
        get: 'user',
        userId: '3144997008',
        accessToken: '8e307617dd5d4bd3abed88e9ce1e78ae',
        template: '<a href="{{link}}"><img src="{{image}}" /></a>'
    });
    userFeed.run();

});