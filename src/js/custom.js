/*
** Template name : kech
** Creation date : 27/07/2018 
** Author        : Mohssine Aboutaj 
** Contact Me    : mohssineaboutajtemplates@gmail.com
*/

$(function(){

/* Start customize plugins */

  // TriggerFire the jquery.niceScroll.js plugin and customiz it
  if (window.innerWidth > 991) {
    // turn on niceScroll on medium screen and large only
    $("body").niceScroll({
      cursorcolor: $('body').attr('data-main-color'),
      cursoropacitymin: 0.5,
      cursorwidth: '5px',
      cursorborder: 'none'
    });
  }

  // Trigger jquery.shuffleMAF.js
  shuffleMAF({
    effect: 'fade'
  });

  // Trigger slick carousel
  $('.tech').slick({
    dots: true,
    infinite: true,
    speed: 300,
    centerMode: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      }
    ]
  });
  $('#testemonialsSlider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false
        }
      }
    ]
  });

  // Trigger the wow.js library
  new WOW().init();

/* End customize plugins */

/* Start my function and codes */

  // make a smoth scrolling
  function smothScrolling(link){
    $('html,body').animate({
      scrollTop: $($(link).attr('href')).offset().top - $('nav').height()
    }, 2000);
  }

  // make header full screen
  function headerFullScreen(){
    $('header, header .full-centering')
        .height(window.innerHeight - $('nav').height());
  }

  $(window).on('load', headerFullScreen());
  $(window).on('resize', headerFullScreen());
  // Hide navbar on click for any link
  $('nav div#navbarSupportedContent li').on('click', function(){
    $('div#navbarSupportedContent').removeClass('show');
  });

  // Make smothing scroll to element on link clicked
  $('nav a').on("click", function(){
    // add class Active on active link
    $(this).parent().addClass('active').siblings().removeClass('active');
    var thisLink = this;
    smothScrolling(thisLink);
  });
  $('header a').on("click", function(){
    var thisLink = this;
    smothScrolling(thisLink);
  });

  // width equal height
  $(".h-equal-w").each(function(){
    $(this).css('height', $(this).width());
  });

  $(window).on('scroll', function(){
    // make navbar fixed on scroll
    if (pageYOffset > window.innerHeight - $('nav').height()) {
      $('nav').addClass('fixed-top');
    } else {
      $('nav').removeClass('fixed-top');
    }
  });

/* End my function and codes */

});