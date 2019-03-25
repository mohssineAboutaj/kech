/*
>>>> INFO <<<<
*** Project Name         : scrollTopMAF
*** version              : v1.2
*** Date of Construction : 30/10/2017
*** Project Description  : Button scroll to top
*** Athour               : Mohssine Aboutaj
*** Language use         : javaScript
*** Licence              : Free & Available to everyone
*** requirement          : jQuery liberary [ min version 1.11 ]
*/


// create scrollingBtn
var scrollingBtn = document.createElement('div');
var mainColor = document.body.getAttribute('data-main-color');
var secondColor = document.body.getAttribute('data-second-color');

// add some Css property in scrollingBtn
if (document.dir == "rtl" || document.body.dir == "rtl") {
  scrollingBtn.style.left = '20px';
} else {
  scrollingBtn.style.right = '20px';
}

scrollingBtnStyles = {
	position				: 'fixed',
	bottom 					: '20px',
	width 					: '30px',
	height 					: '30px',
	lineHeight 			: '30px',
	textAlign 			: 'center',
	fontSize 				: '16px',
	zIndex  				: '9999',
	backgroundColor : mainColor,
	color 					: secondColor,
	borderRadius 		: '50%',
	opacity 				: '1',
	transition 			: 'all 0.5s ease-in-out',
	cursor 					: 'pointer',
};

scrollingBtn.innerHTML = '<i class="fa fa-fw fa-chevron-up"></i>';
for (btnStyle in scrollingBtnStyles) {
	if (scrollingBtnStyles.hasOwnProperty(btnStyle)) {
		scrollingBtn.style[btnStyle] = scrollingBtnStyles[btnStyle];
	}
}

/*
scrollingBtn.innerHTML = '<i class="fa fa-fw fa-chevron-up"></i>';
scrollingBtn.style.position = 'fixed';
scrollingBtn.style.bottom = '20px';
scrollingBtn.style.width = '30px';
scrollingBtn.style.height = '30px';
scrollingBtn.style.lineHeight = '30px';
scrollingBtn.style.textAlign = 'center';
scrollingBtn.style.fontSize = '16px';
scrollingBtn.style.zIndex = '9999';
scrollingBtn.style.backgroundColor = mainColor;
scrollingBtn.style.color = secondColor;
scrollingBtn.style.borderRadius = '50%';
scrollingBtn.style.opacity = '1';
scrollingBtn.style.transition = 'all 0.5s ease-in-out';
scrollingBtn.style.cursor = 'pointer';
*/

// add events to scrollingBtn
scrollingBtn.onmouseover = function(){
  this.style.backgroundColor = secondColor;
  this.style.color = mainColor;
  this.style.opacity = '.8';
};

scrollingBtn.onmouseout = function(){
  this.style.backgroundColor = mainColor;
  this.style.color = secondColor;
  this.style.opacity = '1';
};

$(scrollingBtn).on("click", function(){
  $('html,body').animate({scrollTop: 0}, 1500);
  $(this).fadeOut(1400);
});

// check the offSet of page
function checkTheOffSet(){
  if(pageYOffset < window.innerHeight){
    $(scrollingBtn).fadeOut();
  } else {
    $(scrollingBtn).fadeIn();
  }
}

setInterval(checkTheOffSet, 1000);

// append the scrollingBtn to body
document.body.appendChild(scrollingBtn);

/* Thank you for choose this Plugin */