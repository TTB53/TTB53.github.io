//Reusable Functions
var populateChildren = function(parentElement){
  var arr = []
  $(parentElement).children().each(function(){
    arr.push($(this));
  });
  console.log("Populate Children Array " + arr);
  return arr;
};

var findClass = function (searchArray, className){
  if (searchArray.length <= 0){

    alert("The array is empty");

  }else{

    for(x=0;x<searchArray.length;x++){
      if(searchArray[x].hasClass(className)){
        return searchArray[x];
      }
    }
  }
};

var displayLoader = function(){
  $('.loader').css("display", "block");
};



//Site Specific functions
var smoothScroll = function(){

  $('.slide-section').on("click",function(e){

  var linkHref = $(this).attr('href');
  var navHeight = $('#Navigation').outerHeight();
  var targetLocation = $(linkHref).offset().top- navHeight;
  console.log(linkHref + ":" + "Element Top: " +$(linkHref).offset().top+ " "  + "Naigation height: " + navHeight + " " + "Target Location of Scroll: " +targetLocation);


    $('html,body').animate({
      scrollTop: targetLocation
    },1500,function(){
      console.log(linkHref + " smooth scroll is working.");
      console.log(linkHref + " scrolls to " + targetLocation);
    });

  e.preventDefault();

  });



};

var toggle_backToTop = function(){
  var topReturn = $('#back-to-top');
  topReturn.hide();

  $(window).on("scroll",function(){


		var positionFromTop = $(window).scrollTop();
		console.log("Current positon from the top of the Window " + positionFromTop);

		var SkillsandProjectsTop = 0;
		var SkillsandProjectsOffset = $('#SkillsandProjects').offset();
    var SkillsandProjectsTop = SkillsandProjectsOffset.top;
    var navHeight  = $('#Navigation').height();


		console.log("SkillsandProjects Top " + SkillsandProjectsTop);
    console.log("Navigation Height" + navHeight);
		console.log("SkillsandProjects Top < PositionFromTop =" + (SkillsandProjectsTop < positionFromTop));


		if(SkillsandProjectsTop - navHeight < positionFromTop){
			topReturn.fadeIn(500, function(){
        $(this).show();
      });
		}else{
			topReturn.fadeOut(250, function(){
        $(this).hide();
      });
		}

	});

};

var changeJobs = function(){

 var jobs = populateChildren(".jobContainer");
 var prev_activeJob_id;

  $('.job').on("click",function(e){

    var clicked_job_id = e.currentTarget.id;
    $clickedJob = $("#" + clicked_job_id);

    prev_activeJob_id = findClass(jobs,"active-job").attr("id");
    $prevActiveJob = $("#" + prev_activeJob_id);


    $prevActiveJob.fadeOut(150,function(){
              console.log('#'+ prev_activeJob_id + '.job-description');

      $( '#'+ prev_activeJob_id + ' > .job-description').hide();
              $(this).removeClass("active-job col-lg-8 col-md-8");
              $("#" + prev_activeJob_id + ' >.job-description').removeClass("active-job-desc");
            });


            $prevActiveJob.fadeIn(150,function(){
              $(this).addClass("col-lg-2 col-md-2");
            });

            $clickedJob.fadeIn(150,function(){

  //TODO JOB DESCRIPTION NOT SHOWING
              $('#'+ clicked_job_id  + ' .job-description').css("display","inline").show();

              $clickedJob.removeClass("col-lg-2 col-md-2");
              $clickedJob.addClass("active-job col-lg-8 col-md-8");
              $("#" + clicked_job_id  + " > .job-description").addClass("active-job-desc");
            });

    });//End of For Loop that is determining the objects that have the active-job class.







  };









//All functions will be called in the main function which will in turn be called once the document has finished loading.
var main = function(){
  //displayLoader();
  smoothScroll();
  toggle_backToTop();
  changeJobs();
};

$(document).ready(main());//END OF DOCUMENT.READY
