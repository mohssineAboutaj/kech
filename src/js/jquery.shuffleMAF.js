/*
** Name         : jquery.shuffleMAF
** Requirements : jquery library [ min version 1.11.1 ]
** Version      : 1.9.19
** Github repo  : https://github.com/mohssineAboutaj/jquery.shuffleMAF
** Author       : Mohssine Aboutaj
** Contact      : mohssineaboutajtemplates@gmail.com
*/

function shuffleMAF(e) {

	// the main effect if not defined the default effect is fadeIn/fadeOut
  myEffect = void 0 === e.effect ? "fade" : e.effect;

  // active class name
  classActive = void 0 === e.active ? "shuffle-active" : e.active;

  // main dyration to do the effect
  time = void 0 === e.time ? 700 : e.time;

  // on click event
  $(".shuffleMAF .shuffle-nav li").on("click", function() {
		// add class active on this and remove from others
    $(this).addClass(classActive).siblings().removeClass(classActive);

    // check if this is first btn
    if ($(this).is(":first-child")) {
    	if (myEffect === "fade") {
    		$(".shuffleMAF .shuffle-content .shuffle-item").fadeIn(time);
    	} else if (myEffect === "opacity") {
    		$(".shuffleMAF .shuffle-content .shuffle-item").animate({
    			opacity: 1
    		}, time);
    	} else {
    		$(".shuffleMAF .shuffle-content .shuffle-item").fadeIn(time)
    	}
    } else { // check if this is not first btn
    	if (myEffect === "fade") {
    		$(".shuffleMAF .shuffle-content .shuffle-item").fadeOut(time);
        $(".shuffleMAF .shuffle-content .shuffle-item." + $(this).data("filter")).fadeIn(time);
    	} else if (myEffect === "opacity") {
    		$(".shuffleMAF .shuffle-content .shuffle-item").animate({
    			opacity: .1
    		}, time);
    		$(".shuffleMAF .shuffle-content .shuffle-item." + $(this).data("filter")).animate({
            opacity: 1
        }, time);
    	} else {
    		$(".shuffleMAF .shuffle-content .shuffle-item").fadeOut(time);
        $(".shuffleMAF .shuffle-content .shuffle-item." + $(this).data("filter")).fadeIn(time);
    	}
    }
  });
}