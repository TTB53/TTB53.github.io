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
					$('.navbar-brand').css({"width":"100%"})
					$('#menuClose').css({
						"margin-botton":"10%"
					});

					
				}else if(screen_Width<=768 && screen_Width>425){
					navMenu.animate({"padding-top":"0px"},500);
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
				$('.navbar-brand').toggle();
				$('navMenu li a:first').css({
					"margin-top":"0%"
				});
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
	
	//TOP RETURN ICON HOVER EFFECT. 
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
	
	
	$('#navigation').css({width:screen_Width});
	
	/**********************************************************************************
	 *                    LANDING PAGE FUNCTIONS
	 **********************************************************************************
	 */
	$('.landing-row').css({height:window_Height});
	

	

	/**********************************************************************************
	 *                    ABOUT-ME FUNCTIONS
	 **********************************************************************************
	 */
	
	//Toggling the advance to next section button on screens smaller then 768px
	if(screen_Width<768){
		$('.section-advance').toggle();
	}
	
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
			},"slow");

			//Toggling off the Job Title 
			if(screen_Width<768){
				$("#" + cardId + " .role-desc").animate({
					"top":"15%"
				},500);
			}
			
			
			//Toggling off the Job Description and changing the background color. 
			
			$("#" + cardJobDescID).slideToggle(1000,function(){});
			
		});
	};
	
	


	// Hover Effect on Cards.
	var toggleCardHover = function(){
		
		$('.job-position').hover(function() {
			
			var $this = $(this);
			var startingBG = $this.attr('background-imgae');
			$this;

			// Mouse Enter function
			if($this.attr('id') !=='education-card'){
				$this.css({
					"background-size -":"100%",
					"opacity" : ".40",
				}, 1000);
				$this;
			}else{
				$this.css({
					"background-image":"url('Images/IMG_EUP Sign-Alt.jpg')"
				},1000);
				$this;
			}

		}, function() {

			// Mouse Leave function
			$(this).css({
				"background-image" : "startingBG",
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
		//Mouse Leave
		$(this).css("color", "rgba(218,165,32,1)");
	});
	
	
	
	
	/**********************************************************************************
	 *                  GENERAL HOVER FUNCTIONS
	 **********************************************************************************
	 */
	
	$('.btn').hover(function(){
		//Mouse Enter 
		$(this).css({
			"color":"rgb(33,33,33)",
			"background-color":"rgb(255,193,7)"
		});
	},function(){
		//Mouse Leave
		$(this).css({
			"color":"rgba(255,255,255,1)",
			"background-color":"transparent"
		});
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
	
	
	
	//Return to top scroll animation
	$(window).scroll(function(){
		
		
		var positionFromTop = $(window).scrollTop();
		console.log("Current positon from the top of the Window - Scroll Function (positionFromTop)" + positionFromTop);
		
		var educationCard = 0;
		var educationTop = $('#education-card').position().top - navMenu.height();
		console.log("Education Element Top (educationTop)" + educationTop);
		console.log("Education Top < PositionFromTop =" + (educationTop < positionFromTop));
		
		var topReturn = $('#topReturn');
		
		
		
		if(educationTop < positionFromTop){
			topReturn.show();
		}else{
			topReturn.hide();
		}

	});
	
	
	/**********************************************************************************
	 *                   RESPONSIVE LOAD FUNCTIONS
	 **********************************************************************************
	 */
	
	var sizeToScreen = function(){
		if(screen_Width <= 425){
			$('.section-h1').removeClass("pull-right").removeClass("pull-left").addClass("text-center");
			$('p').css({"line-height":"1.2em"});
			
			//Landing
			$('.landing-row').css({"background-color":"rgba(33,33,33,.55)"});
			$('.landing-info h3').css({
				"font-size":"19px"
			});
			
			$('.landing-info h3 span .text-separator').css({
				"margin":"0"
			});
			
			//About
			$('.lang-list').addClass("text-center");
			$("#proPic").css({"max-height":"450px"});
			
			//Experience
			$('.card-info').css({"top":"10%"});
			$('#current-role-card,#prev-role-1-card,#education-card').css({
				"height":"100%"
			});
			
			
			//Contact/Footer
			$('.contact-info').css({
				"padding":"50px"
			});
			
			$('.contact-info  a h1').html("Email Me!");
		}//End of If for screen sizes smaller than 425px
	}
	
	//Screen size function, that allows the landing page and other elements to be adjusted according to screen sizes. 
	/*
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
	*/
	
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
	
	$(this).load(startingInformation());

	$('body').on("load",sizeToScreen());
	
	//Menu animations. 
	$('#menuIcons').click(toggleMenu());

	//Landing rown Animations 
	$(".landing-row").load(landingRowHeight()).on("resize",landingRowHeight());
	
	//About Me Animations


	
	//Experience Card animation. 
	$('.job-position').click(toggleCard());
	$('.job-position').click(toggleCardHover());
	$('*').scroll(anchorSmoothScroll());
	
	
	
	//Contact & footer animations.
	$("#topReturn").click(returnToTop());
	
	
	
	
	
};

$(document).ready(main);
