var scrollingBtn=document.createElement("div"),mainColor=document.body.getAttribute("data-main-color"),secondColor=document.body.getAttribute("data-second-color");for(btnStyle in"rtl"==document.dir||"rtl"==document.body.dir?scrollingBtn.style.left="20px":scrollingBtn.style.right="20px",scrollingBtnStyles={position:"fixed",bottom:"20px",width:"30px",height:"30px",lineHeight:"30px",textAlign:"center",fontSize:"16px",zIndex:"9999",backgroundColor:mainColor,color:secondColor,borderRadius:"50%",opacity:"1",transition:"all 0.5s ease-in-out",cursor:"pointer"},scrollingBtn.innerHTML='<i class="fa fa-fw fa-chevron-up"></i>',scrollingBtnStyles)scrollingBtnStyles.hasOwnProperty(btnStyle)&&(scrollingBtn.style[btnStyle]=scrollingBtnStyles[btnStyle]);function checkTheOffSet(){pageYOffset<window.innerHeight?$(scrollingBtn).fadeOut():$(scrollingBtn).fadeIn()}scrollingBtn.onmouseover=function(){this.style.backgroundColor=secondColor,this.style.color=mainColor,this.style.opacity=".8"},scrollingBtn.onmouseout=function(){this.style.backgroundColor=mainColor,this.style.color=secondColor,this.style.opacity="1"},$(scrollingBtn).on("click",function(){$("html,body").animate({scrollTop:0},1500),$(this).fadeOut(1400)}),setInterval(checkTheOffSet,1e3),document.body.appendChild(scrollingBtn);