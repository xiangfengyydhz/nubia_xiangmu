// JavaScript Document
//-----------------------------------------top------------------------------------------
$(document).ready(function(){
	
	for(var i = 0; i < $(".top .nav").children().length; i++){
		$(".top .nav li").eq(i).hover(function(){
			$(this).children().addClass('active').siblings().removeClass('active');
			
		},function(){
			$(this).children().removeClass('active')
			
		})
		
		
	};
	
})
//--------------------------------banner图-----------------------------
$(function(){
	var num=0;
	$('#banner .dot span').eq(num).addClass('active');
	$('#banner ul li').eq(num).addClass("active");
	$('#banner ul li').eq(num).css({'opacity':1,'alpha':'alpha(opacity:100)'});
	function lunbo(){
		$('#banner .dot span').eq(num).addClass('active').siblings().removeClass('active');
		$('#banner ul li').eq(num).addClass("active").siblings().removeClass('active');
		$('#banner ul li').eq(num).stop().animate({'opacity':1,'alpha':'alpha(opacity:100)'},1000).siblings().stop().animate({'opacity':0,'alpha':'alpha(opacity:0)'},1000);
	}
	
	var timer=setInterval(function(){
		num++;
		if(num==5){
			num=0;
		}
		lunbo();
	},4000);
	
	//划上停止事件	
	$('#banner').hover(function(){
		clearInterval(timer)
	},function(){
		timer=setInterval(function(){
			num++;
			if(num==5){
				num=0;
			}
			lunbo();
		},4000);
		//return false;
	})
	
	//点击切换事件
	for(var i = 0; i < 5; i++){
		$('#banner .dot span').eq(i).click(function(){
			num=$(this).index();
			lunbo();
			
		})
	}


	
})

$(document).ready(function(){
	$('.cont li').hover(function(){
		$(this).find('span').stop().animate({"width":500,"height":210,"top":-3,"margin-left":-250},500)
	},function(){
		$(this).find('span').stop().animate({"width":478,"height":200,"top":4,"margin-left":-239},500)
	})
})

$(document).ready(function(){
	$('.bottom .option').hover(function(){
		$(".bottom .option .option-in").css('display','block')
	},function(){
		$(".option-in").css('display','none')
	})
})
