var init = new function(){
  //Anchor Smooth Scrolling Animation for anchors.
  var anchorSmoothScroll = function(){
    $('.menu a').click(function(event){
      if(this.hash !==""){
        //preventing the link from going directly to the site.
        event.preventDefault();

        //Getting and storing hash or href value and the height of the fixed nav bar
        var hash = this.hash;
        var navHeight = $("#Navigation").height();


        $('html,body').animate({
          scrollTop:$(hash).offset().top - navHeight
        },1250,function(){
          //Setting the window location back to the hash value, this is the default action we turned off previously
          window.location.hash = hash;
        });
      }
    });

}
//Initiating the javascript to be run when the document is ready.
document.ready(init);
