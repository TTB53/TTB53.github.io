/**
 * Adding interactivity to the web site.
 */

var main = function() {
	//Variable Declaration
	var openMenuIcon = $('#menuOpen');
	var closeMenuIcon = $('#menuClose');
	var navMenu = $('#menu');
	var jobPosition = $('.job-position');
	
	
	var screen_Width = screen.width;
	var screen_Height = screen.height;
	var window_Height = $(window).height();
	var window_Width = $(window).width();

	
/**********************************************************************************
 *                    NAVIGATION & MENU FUNCTIONS
 **********************************************************************************
 */
	
	
	//Toggle Menu Function
	
	var toggleMenu = function(){
		// Menu Open 
		openMenuIcon.click(function() {
			
			// Animating the menu after it is shown
			navMenu.toggle(500,function(){
				/*
				 * Callback function or basically the code that needs to be executed after the animation has finished.
				 * this puts the non animated code on a delay to until the animation is finished. 
				 */
				if(screen_Width<=425){
					navMenu.animate({"margin-top":"40px"},500);
				}else{
					navMenu.animate({"padding-top":"40px"},500);
				}
				
				// turning the menu open icon off
				openMenuIcon.toggle();

				// turning the menu close icon on
				closeMenuIcon.toggle();
			});

		});

		// Menu Close 
		closeMenuIcon.click(function() {
			// Closing the menu
			if(screen_Width<=425){
				navMenu.animate({"margin-top":"0px"},500);
			}else{
				navMenu.animate({"padding-top":"0px"},500);
			}
		
			
			navMenu.toggle(500,function(){
				//Callback Function: what's to execute after animation completes.
				
				// turning the menu close icon off.
				closeMenuIcon.toggle();

				// turning the menu open icon on.
				openMenuIcon.toggle();
				
				});

		});
	};
	
	//NEXT PAGE ICON HOVER EFFECT. 
	$('#topReturn').hover(function() {
		// Mouse Enter
		$(this).animate({
			"opacity" : "1",
		}, 1000);
	}, function() {
		// Mouse Leave
		$(this).animate({
			"opacity" : ".5",
		},1000);
	});

	// Go back to the top of the page.
	var returnToTop = function(){
		$('#topReturn').click(function(e) {
			$('html,body').animate({
				scrollTop:0
			},1250);
			
			e.preventDefault();
		});
	};
	

	/**********************************************************************************
	 *                    ABOUT-ME FUNCTIONS
	 **********************************************************************************
	 */
	
	/**********************************************************************************
	 *                   EXPERIENCE FUNCTIONS
	 **********************************************************************************
	 */
	
	
	//Card Toggle Animation 
	
	var toggleCard = function(){
		// function that is going to toggle the cards between job title and job
		// accomplishments.

		jobPosition.click(function(event) {
			var origBGColor = $(this).css("background-color");
			console.log("Current Card Background Color: " + origBGColor);
			
			var changedBGColor = "rga(105,105,105,1)";
			
		
			
			var cardId = $(this).attr('id');
			console.log("Current Card ID: " + cardId);
			
			var cardJobDescID = $(this).children('.role-info').attr('id');
			console.log("Current Card Job Description ID: " + cardJobDescID);
			
			
			// Turning off the hover effect
			$(this).css({
				"opacity" : "1",
				"background-image" : "none"
			});
			
			if($("#"+cardId).css("background-color")===origBGColor){
				$("#"+cardId).css({"background-color":"pink"});
			}else{
				$("#"+cardId).css({"background-color":origBGColor});
			}
			//Toggling off the Job Title 
			
			//$("#" + cardId + " .card-info").slideToggle(500);	
			
			//Toggling off the Job Description and changing the background color. 
			
			$("#" + cardJobDescID).slideToggle(1000,function(){});
			
		});
	};
	
	


	// Hover Effect on Cards.
	var toggleCardHover = function(){
		
		$('.job-position').hover(function() {

			// Mouse Enter function
			if((this) !== 'Education'){
				$(this).css({
					"background-image" : "url('Images/IMG_0510.jpg')",
					"opacity" : ".65",
					"animation-duration":"2s",
					"animation-delay":"0s",
					"animation-iteration-count":"1"
				}, 1000);
				$(this);
			}else{
				$(this).css({
					"background-image":"url('Images/IMG_EUP Sign-Alt.jpg"
				},1000);
			}

		}, function() {

			// Mouse Leave function
			$(this).css({
				"background-image" : "none",
				"opacity" : "1",
				"animation-duration":"0s",
				"animation-delay":"0s",
				"animation-iteration-count":"1"
			}, 1000);
			$(this);
		});

	};
	
	
	/**********************************************************************************
	 *                   CONTACT & FOOTER FUNCTIONS
	 **********************************************************************************
	 */
	
	// Hover Effect on Social Media Icons.
	$('.soc-media-icons').hover(function() {
		// Mouse Enter
		$(this).css("color", "rgba(218,165,32,.6");
	}, function() {
		$(this).css("color", "rgba(105,105,105,1);");
	});
	
	


	/**********************************************************************************
	 *                   SCROLLING  FUNCTIONS
	 **********************************************************************************
	 */
	
	
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
	
	
	$(window).scroll(function(){
		
		
		var positionFromTop = $(window).scrollTop();
		console.log("Current positon from the top of the Window - Scroll Function (positionFromTop)" + positionFromTop);
		
		var contactMeTop = 0;
		var contactMeTop = $('.contact-footer-wrapper').position().top;
		console.log("Contact-Footer-Wrapper Element Top (contactMeTop)" + contactMeTop);
		console.log(contactMeTop < positionFromTop);
		
		var topReturn = $('#topReturn');
		
		
		
		if(contactMeTop < positionFromTop){
			topReturn.show();
		}else{
			topReturn.hide();
		}

	});
	
	
	/**********************************************************************************
	 *                   RESPONSIVE LOAD FUNCTIONS
	 **********************************************************************************
	 */
	
	//Screen size function, that allows the landing page and other elements to be adjusted according to screen sizes. 
	
	var screenSize_CSS_loader = function(){
		//Mobile-SMALL
		if(screen_Width <= 320){
			$('#topReturn').css({"display":"none"});
			$("#navigation").css({"width":screen_Width});
			$('.landing-row').css({"height":window_Height});
			$(".job-description").css({"font-size":"smaller"});
			$(".section-h1").css({"font-size":"-webkit-xx-large"}).removeClass("pull-right").addClass("text-center");
			$(".landing-info").css({
				"top":"25%",
				"left":"0%",
				"right":"0%"
			});
			
			}
		//Mobile-SMALL to Mobile-MEDIUM
		else if (screen_Width > 320 && screen_Width<=375){
				$('#topReturn').css({"display":"none"});
				$("#navigation").css({"width":screen_Width});
				$('.landing-row').css({"height":window_Height});
				$(".job-description").css({"font-size":"smaller"});
				$(".section-h1").css({"font-size":"-webkit-xx-large"}).removeClass("pull-right").addClass("text-center");
				$(".landing-info").css({
					"top":"20.5%",
					"right":"15%",
					"left":"15%"
				});
			}
		//Mobile-LARGE to Tablet
		else if(screen_Width > 375 && screen_Width<=768){
				$('#topReturn').css({"display":"none"});
				$("#navigation").css({"width":screen_Width});
				$('.landing-row').css({"height":window_Height});
				$(".job-description").css({"font-size":"smaller"});
				$(".section-h1").css({"font-size":"-webkit-xx-large"}).removeClass("pull-right").addClass("text-center");
				$(".landing-info").css({
					"top":"15%",
					"left":"8%",
					"right":"8%"
				});
			}
		//Tablet
		else if(screen_Width > 425 && screen_Width<=768){
			$('#topReturn').css({"display":"none"});
			$("#navigation").css({"width":screen_Width});
			$('.landing-row').css({"height":window_Height});
			$(".job-description").css({"font-size":"smaller"});
			$(".section-h1").css({"font-size":"-webkit-xx-large"}).removeClass("pull-right").addClass("text-center");
			$(".landing-info").css({
				"top":"25%",
				"left":"15%",
				"right":"15%"
			});
			$(".role-info").css({"top":"0"});
		}
		
		
	};
	
	
	var landingRowHeight = function(){
		
		//Determining the height of the landing row on load when the video background is present.
		
		var vid = $('#landingVideo');
		var landingRow = $('.landing-row');
		var vid_width = vid.width();
		var vid_height = vid.height();
		var aspectRatio = 1920/1080;
		
		
		console.log("Original video width :" +vid_width);
		console.log("Original video height :" + vid_height);
		console.log("Original video Aspect Ratio : " + aspectRatio);
		
		var newHeight = window_Width/aspectRatio;
		
		//If the screen is smaller than tablet size, we will just show a regular background image.
		if(window_Width >=768){
			landingRow.css({"height":newHeight});
		}else{
			vid.hide();
			landingRow.css({
				"background-image":"url(Images/IMG_0581.jpg)",
				"background-repeat":"no repeat",
				"background-position":"50% 50%",
				"background-size":"cover",
			});
		}
		
	}
	

	
	/**********************************************************************************
	 *                   GENERAL INFORMATION FUNCTIONS
	 **********************************************************************************
	 */
	
	var startingInformation = function (){
		
		console.log("=======================================");
		console.log("Screen Information");
		console.log("=======================================");
		console.log("Screen Width (px): " + screen_Width);
		console.log("Screen Height (px): " + screen_Height);
		
		console.log("=======================================");
		
		console.log("Window Information");
		console.log("=======================================");
		console.log("Window Width (px): " + window_Width);
		console.log("Window Height (px): " + window_Height);
		
		console.log("=======================================");
	}
	
	
	
	

	

		

	
	/*
	 * *****************************************************************
	 * -------------- ANIMATION CALLS SECTION --------------------------
	 * *****************************************************************
	 */

	
	//Loading that is going to take care of CSS positioning for certain screen sizes. 
	
	$(this).load(screenSize_CSS_loader()).load(startingInformation());
	$('body').on("resize",screenSize_CSS_loader());
	
	//Menu animations. 
	$('#menuIcons').click(toggleMenu());

	//Landing rown Animations 
	$(".landing-row").load(landingRowHeight()).on("resize",landingRowHeight());
	
	//About Me Animations


	
	//Experience Card animation. 
	$('.job-position').click(toggleCard());
	$('.job-position').click(toggleCardHover());
	$('*').scroll(anchorSmoothScroll());
	$("#topReturn").click(returnToTop());
	
	
	//Contact & footer animations.
	
	
	
	
	
	
};

$(document).ready(main);
