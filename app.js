/**
 * Adding interactivity to the web site.
 */

var main = function() {

	var openMenuIcon = $('#menuOpen');
	var closeMenuIcon = $('#menuClose');
	var navMenu = $('#menu');
	var jobPosition = $('.job-position');

	
	//Toggle Menu Function
	
	var toggleMenu = function(){
		// Menu Open 
		openMenuIcon.click(function() {

			// Animating the menu after it is show
			navMenu.toggle(500,function(){
				/*
				 * Callback function or basically the code that needs to be executed after the animation has finished.
				 * this puts the non animated code on a delay to until the animation is finished. 
				 */
				navMenu.animate({"padding-top":"40px"},500);
				// turning the menu open icon off
				openMenuIcon.toggle();

				// turning the menu close icon on
				closeMenuIcon.toggle();
			});

		});

		// Menu Close 
		closeMenuIcon.click(function() {
			// Closing the menu
			navMenu.toggle(500,function(){
				//Callback Function: what's to execute after animation completes.
				navMenu.animate({"padding-top":"0px"},500);
				// turning the menu close icon off.
				closeMenuIcon.toggle();

				// turning the menu open icon on.
				openMenuIcon.toggle();
				
				});

		});
	};
	

	
	
	
	//Card Toggle Animation 
	
	var toggleCard = function(){
		// function that is going to toggle the cards between job title and job
		// accomplishments.

		jobPosition.click(function(event) {
			var origBGColor = $(this).parent().css("background-color");
			
			// Turning off the hover effect
			$(this).css({
				"opacity" : "1",
				"background-image" : "none"
			});
			
			var cardId = $(this).attr('id');
			var cardJobDescID = $(this).children('.role-info').attr('id');

			
			
			$("#" + cardId + " .card-info").slideToggle(500,function(){
				jobPosition.animate({
					"background-color":"rgba(105,105,105,1)"
				},1550);
			});
			
			$("#" + cardJobDescID).slideToggle(1000);

		});
	};
	
	


	// Hover Effect on Cards.
	var toggleCardHover = function(){
		$('.job-position').hover(function() {
			// Mouse Enter function
			$(this).css({
				"background-image" : "url('Images/IMG_0510.jpg')",
				"opacity" : ".65",
				"animation-duration":"2s",
				"animation-delay":"0s",
				"animation-iteration-count":"1"
			}, 1000);
			$(this).addClass("animated rotateInUpLeft");
		}, function() {

			// Mouse Leave function
			$(this).css({
				"background-image" : "none",
				"opacity" : "1",
				"animation-duration":"0s",
				"animation-delay":"0s",
				"animation-iteration-count":"1"
			}, 1000);
			$(this).removeClass("animated rotateInUpRight");
		});

	};
	
	
	// Hover Effect on Social Media Icons.
	$('.soc-media-icons').hover(function() {
		// Mouse Enter
		$(this).css("color", "rgba(218,165,32,.6");
	}, function() {
		$(this).css("color", "palegreen");
	});
	
	
	
	$('.btn').hover(function() {
		// Mouse Enter
		$(this).animate({
			"opacity" : "1",
			"background-color":"palegreen"
		}, 1000).addClass("animated infinite tada");
	}, function() {
		// Mouse Leave
		$(this).animate({
			"opacity" : "1",
			"background-color":"transparent"
		},1000).removeClass("animated infinite tada");
	});
	

	
	//NEXT PAGE ICON HOVER EFFECT. 
	$('#nextPageIcon').hover(function() {
		// Mouse Enter
		$(this).animate({
			"opacity" : "1",
			"background-color":"palegreen"
		}, 1000).addClass("animated infinite tada");
	}, function() {
		// Mouse Leave
		$(this).animate({
			"opacity" : ".5",
			"background-color":"goldenrod"
		},1000).removeClass("animated infinite tada");
	});

	// Advance to the next slide.
	$('#nextPageIcon').click(function() {
		
		var currSection = $(this).closest('.section');
		console.log(currSection);
		
		var nextSection = $(this).closest('.section').next();
		console.log(nextSection);
		nextSection.animate({
			"scrollTop":nextSection.scollTop + currSection.offset()
		},1250);
		
	});


	
	
	//Smooth Scrolling Animation for anchors. 
	var anchorSmoothScroll = function(){
		$('a').click(function(event){
			if(this.hash !==""){
				//preventing the link from going directly to the site. 
				event.preventDefault();
				
				//Getting and storing hash or href value and the height of the fixed nav bar
				var hash = this.hash;
				var navHeight = $("#navigation").height();
				
				
				$('html,body').animate({
					scrollTop:$(hash).offset().top - navHeight
				},1250,function(){
					//Setting the window location back to the hash value, this is the default action we turned off perviously
					window.location.hash = hash;
				});
			}
		});
		
	};    
	
		

	
	/*
	 * *****************************************************************
	 * -------------- ANIMATION CALLS SECTION --------------------------
	 * *****************************************************************
	 */
	
	
	
	//Menu animations. 
	$('#menuIcons').click(toggleMenu());
	
	//Experience Card animation. 
	$('.job-position').click(toggleCard());
	$('.job-position').click(toggleCardHover());
	$('*').scroll(anchorSmoothScroll());
	
	
	
	
	
	
	
	
};

$(document).ready(main);
