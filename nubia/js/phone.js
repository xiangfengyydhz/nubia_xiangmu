//-----------------------------------------top------------------------------------------
$(document).ready(function(){
	$('.top .nav').hover(function(){
	   $(".top .nav li").eq(2).children().removeClass('active');
	 
	},function(){
		$(".top .nav li").eq(2).children().addClass('active');
		
	})
	
	for(var i = 0; i < $(".top .nav").children().length; i++){
		$(".top .nav li").eq(i).hover(function(){
			$(this).children().addClass('active').siblings().removeClass('active');
			
		},function(){
			$(this).children().removeClass('active')
			
		})
		$(".top .nav li").eq(2).hover(function(){
			$(this).children().addClass('active').siblings().removeClass('active');
			return false;
		},function(){
			$(this).children().removeClass('active')
			//return false;
		})
		
	};
	$('.top .nav').mouseleave(function(){
		$(".top .nav li").eq(2).children().addClass('active');
	})
	
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
//-----------------------------------------content-----------------------------------------
$(function(){
	$.ajax({
		type:"get",
		url:"json/phone.json",
		async:true,
		success:function(data){
//			alert(data[0].title)
			var cont = "";
			for(var i  = 0; i < 6; i++){
				var cont1 = "";
				for(var j = 0; j < 8; j++){
					cont1 += '<li><a href = "details.html"><img src="'+data[j].pic+'"/><h2>'
					+data[j].title+'</h2><p>'+data[j].price+'</p><a></li>'
				}
				cont +=cont1
			}
		$(".cont_ul").html(cont);


				$(".cont_ul li ").hover(function(){
					$(this).find("img").stop().animate({"height":"252px", "width": "252px", "top":"-6px", 					"left":"24px"},400);
					$(this).find("h2").css("color", "red")
				},function(){
					$(this).find("img").stop().animate({"height":"240px", "width": "240px", "top":"0", 					"left":"30px"},400);
					$(this).find("h2").css("color", "#666")
				})
			
		}
	});
	
	
	
	
	
	
})









