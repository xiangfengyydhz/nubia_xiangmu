//-----------------top---------------------------------
$(document).ready(function(){
	$('.top .nav').hover(function(){
	   $(".top .nav li").eq(1).children().removeClass('active');
	 
	},function(){
		$(".top .nav li").eq(1).children().addClass('active');
		
	})
	
	for(var i = 0; i < $(".top .nav").children().length; i++){
		$(".top .nav li").eq(i).hover(function(){
			$(this).children().addClass('active').siblings().removeClass('active');
			
		},function(){
			$(this).children().removeClass('active')
			
		})
		$(".top .nav li").eq(1).hover(function(){
			$(this).children().addClass('active').siblings().removeClass('active');
			return false;
		},function(){
			$(this).children().removeClass('active')
			//return false;
		})
		
	};
	$('.top .nav').mouseleave(function(){
		$(".top .nav li").eq(1).children().addClass('active');
	})
	
})
//-----------------------------------------侧边栏---------------------------
$(function(){
	$.ajax({
		type:"get",
		url:"json/shop.json",
		async:true,
		success:function(data){
			
			var cont = "";
			for(var i = 0; i < data.length; i++){
				
					var li_span = '';
	        	for(var j = 0; j < data[i].a.length; j++){
					li_span += '<p><img src="'+data[i].a[j].imgurl+'"/>'+data[i].a[j].name+'</p>'
			
	        	}
	        	cont +='<li><div class="meal-left"></div><div class="meal-middle"><h2>'+data[i].num1+'</h2><p>'+data[i].num2+'</p></div><div class="meal-rig">&gt</div>'+
	        				'<span>'+ li_span +'</span></li>'
	        	}
			$(".menu").html(cont);
			
		//添加事件hover
			for(var n = 0; n < data.length; n++){
				$(".menu").find("li").eq(n).hover(function(){
					$(this).find("span").css("display", "block");
					
	
				},function(){
					$(this).find("span").css("display", "none")
				})
			}
			
		}//success结束
	});
})
//--------------------------------banner图-----------------------------
$(function(){
		var num=0;
		$('.banner .dot span').eq(num).addClass('active');
		$('.banner ul li').eq(num).addClass("active");
		$('.banner ul li').eq(num).css({'opacity':1,'alpha':'alpha(opacity:100)'});
		function lunbo(time){
			$('.banner .dot span').eq(time).addClass('active').siblings().removeClass('active');
			$('.banner ul li').eq(time).addClass("active").siblings().removeClass('active');
			$('.banner ul li').eq(time).stop().animate({'opacity':1,'alpha':'alpha(opacity:100)'},1000).siblings().stop().animate({'opacity':0,'alpha':'alpha(opacity:0)'},1000);
		}
		
		var timer=setInterval(function(){
			num++;
			if(num==4){
				num=0;
			}
			lunbo(num);
		},4000);
		
	//划上停止事件	
		$('#banner').hover(function(){
			clearInterval(timer)
		},function(){
			timer=setInterval(function(){
				num++;
				if(num==4){
					num=0;
				}
				lunbo(num);
			},4000);
			//return false;
		})
		
		//点击切换事件
		for(var i = 0; i < 4; i++){
			$('#banner .dot span').eq(i).click(function(){
				num=$(this).index();
				lunbo(num);
				
			})
		}
	
		//左右滑动事件
		$(".banner").hover(function(){
			$(".derict").css("display", "block")
		},function(){
			$(".derict").css("display", "none")
		})
		
		$(".derict_left").hover(function(){
			$(this).css("background", "gray")
		},function(){
			$(this).css("background", "")
		})
		
		$(".derict_left").click(function(){
			clearInterval(timer);
			num--;
			if(num==-1){
					num=3;
				}
			lunbo(num);
			
		})
		$(".derict_rig").click(function(){
			clearInterval(timer);
			num++;
			if(num==4){
					num=0;
				}
			lunbo(num);
			
		})
		
		$(".derict_rig").hover(function(){
			$(this).css("background", "gray")
		},function(){
			$(this).css("background", "")
		})
	
})
//--------------------------------phone----------------------
$(function(){
	$(".phone1_rig").hover(function(){
		$(".phone1_rig dt").stop().animate({"width":280,"height":280,"top":-15,"left":-15},500)
	},function(){
		$(".phone1_rig dt").stop().animate({"width":250,"height":250,"top":0,"left":0},500)
	})
	$(".phone1_left").hover(function(){
		$(".phone1_left dt").stop().animate({"width":280,"height":280,"top":-15,"left":-15},500)
	},function(){
		$(".phone1_left dt").stop().animate({"width":250,"height":250,"top":0,"left":0},500)
	})
})
//----------左右滑----------
$(function(){
	$(".hot_pro .hot_top_rig").hover(function(){
		$(".hot_pro .hot_top_rig dt p ").stop().animate({"left":-100},500)
		$(".hot_pro .hot_top_rig dt .pirce ").stop().animate({"left":-200},500)
		$(".hot_pro .hot_top_rig dd").stop().animate({"left":210},500)
	},function(){
		$(".hot_pro .hot_top_rig dt p ").stop().animate({"left":0},500)
		$(".hot_pro .hot_top_rig dt .pirce ").stop().animate({"left":0},500)
		$(".hot_pro .hot_top_rig dd").stop().animate({"left":400},500)
	})
})
//----------------------------little_banner------------------------
$(function(){
		var num=0;
		$('.hot_pro  .dot span').eq(num).addClass('active1');
		$('.hot_pro .out_ul .out_li').eq(num).addClass("active");
		$('.hot_pro .out_ul .out_li').eq(num).css({'opacity':1,'alpha':'alpha(opacity:100)'});
		function lunbo(time){
			$('.hot_pro .dot span').eq(time).addClass('active1').siblings().removeClass('active1');
			$('.hot_pro .out_ul .out_li').eq(time).addClass("active").siblings().removeClass('active');
			$('.hot_pro .out_ul .out_li').eq(time).stop().animate({'opacity':1,'alpha':'alpha(opacity:100)'},1000).siblings().stop().animate({'opacity':0,'alpha':'alpha(opacity:0)'},1000);
		}
		
		var timer=setInterval(function(){
			num++;
			if(num==3){
				num=0;
			}
			lunbo(num);
		},4000);
		
	
})
//------------------热卖产品main-----------

$(function(){
	var cont = "";
	for(var i = 0; i < 6; i++){
		cont +='<li class="main_li"><dl class="main_dl"><dt><p><img src="shop-img/hot_t2.jpg"></p>'+	
			    '<div class="pirce"><h2>Z11 mini 64G</h2><div>￥<span>2499</span></div></div></dt>'+
			    '<dd><h2>Z11 mini 64G</h2><div>￥<span>2499</span></div><ul><li>全新配色</li><li>无边框设计</li>'+
			    '<li>骁龙820</li><li>4GB RAM+64GB ROM </li><li>1600W+800W像素</li></ul><p><a href="details.html" class="shop">进入购买</a>'+
			    '<a href="#" class="det">查看详情</a></p></dd></dl></li>'
	}
	$(".hot_pro .main").html(cont)
})
$(function(){
	for(var j = 0; j < 6; j++){
		$(".hot_pro .main").children().eq(j).hover(function(){
			
			$(this).find(".main_dl dt p").stop().animate({"left":-100},500)
			$(this).find(" .main_dl .pirce ").stop().animate({"left":-200},500)
			$(this).find(".main_dl dd").stop().animate({"left":210},500)
		},function(){
			$(this).find(".main_dl dt p").stop().animate({"left":0},500)
			$(this).find(" .main_dl .pirce ").stop().animate({"left":0},500)
			$(this).find(".main_dl dd").stop().animate({"left":400},500)
		})
	}
})
//-------------------------热卖套装main------------------------

$(function(){
	var contg = "";
	for(var i = 0; i < 2; i++){
		contg += '<li class="group_li"><dl><dt><img src="shop-img/group'+(i+1)+'.png"></dt><dd><h2>Z11 mini 64G</h2>'+
			    '<ul><li>全新配色</li><li>无边框设计</li><li>4GB RAM+64GB ROM </li><li>1600W+800W像素</li></ul>'+
		        '<p>￥<span class="span1">1299</span><span class="span2">￥1376</span><span class="span3"> 立省77元</span></p>'+
			    '<a href="details.html">立刻购买</a></dd></dl></li>'
	}
	$(".group_main").html(contg);
	for(var j = 0; j < 2; j++){
		$(".group_main").children().eq(j).hover(function(){
			$(this).find("dt").stop().animate({"width":290,"height":290,"top":-10,"left":-10},500)
		},function(){
			$(this).find("dt").stop().animate({"width":270,"height":270,"top":0,"left":0},500)
		})
	}
})
//-------------------------精选配件--------------------------------
$(function(){
	$.ajax({
		type:"get",
		url:"json/shop_parts.json",
		async:true,
		success:function(data){
			var cont = "";
			for(var n = 0; n <data.length; n++){
				cont +=' <li><a href = "#"><dd><img src="'+data[n].pic+'"/></dd><dt>'+data[n].title+'</dt></a></li>'
			}
			$(".hot_parts .top").html(cont);
			for(var m = 0; m < data.length; m++){
				$(".hot_parts .top li a").hover(function(){
					$(this).find("dt").css("color", "red");
				},function(){
					$(this).find("dt").css("color", "#666");
				})
			}
		}
	});
	
	var cont_parts = "";
	for( var m = 0; m < 4; m++){
		//alert("jkdf")
		cont_parts += '<li class="main_li"><dl><dt><p><img src="shop-img/parts'+(m+1)+'.jpg"/></p><div class="price">'+
				     ' <h2>Z11 mini 64G</h2><div>￥<span>2499</span></div></div></dt><dd><h2>Z11 mini 64G</h2>'+
				      '<div>￥<span>2499</span></div><ul><li>全新配色</li><li>无边框设计</li><li>骁龙820</li>'+
				      '<li>4GB RAM+64GB ROM </li><li>1600W+800W像素</li></ul><p><a href="details.html" class="shop">进入购买</a>'+
				      '<a href="#" class="det">查看详情</a></p></dd></dl></li>'
				    
	}
	  $(".hot_parts .main_left").html(cont_parts)
	
	$(".hot_parts .main_left .main_li").hover(function(){
		$(this).find("dl dd").stop().animate({"left":200},500)
		$(this).find("dl dt img").stop().animate({"left":-40},500)
		$(this).find("dl dt .price").stop().animate({"left":-150},500)
	},function(){
		$(this).find("dl dd").stop().animate({"left":400},500)
		$(this).find("dl dt img").stop().animate({"left":65},500)
		$(this).find("dl dt .price").stop().animate({"left":40},500)
	})
	$(".hot_parts .main_rig .main_li").hover(function(){
		$(this).find("dl dd").stop().animate({"left":200},500)
		$(this).find("dl dt img").stop().animate({"left":-90},500)
		$(this).find("dl dt .price").stop().animate({"left":-150},500)
	},function(){
		$(this).find("dl dd").stop().animate({"left":400},500)
		$(this).find("dl dt img").stop().animate({"left":65},500)
		$(this).find("dl dt .price").stop().animate({"left":40},500)
	})
	
})
//--------------周边产品---------------------
$(function(){
	var cont = "";
	for(var i = 1; i < 4; i++){
		cont += '<li class="main_li"><dl><dt><p><img src="shop-img/fl5'+i+'.jpg"/></p><div class="price">'+
				     ' <h2>Z11 mini 64G</h2><div>￥<span>2499</span></div></div></dt><dd><h2>Z11 mini 64G</h2>'+
				      '<div>￥<span>2499</span></div><ul><li>全新配色</li><li>无边框设计</li><li>骁龙820</li>'+
				      '<li>4GB RAM+64GB ROM </li><li>1600W+800W像素</li></ul><p><a href="details.html" class="shop">进入购买</a>'+
				      '<a href="#" class="det">查看详情</a></p></dd></dl></li>'
	}
	$(".other_main").html(cont);
	$(".other_main .main_li").hover(function(){
		$(this).find("dl dd").stop().animate({"left":200},500)
		$(this).find("dl dt img").stop().animate({"left":-40},500)
		$(this).find("dl dt .price").stop().animate({"left":-150},500)
	},function(){
		$(this).find("dl dd").stop().animate({"left":400},500)
		$(this).find("dl dt img").stop().animate({"left":65},500)
		$(this).find("dl dt .price").stop().animate({"left":40},500)
	})
})
//-----------------------cont_bottom-----------------------------
$(function(){
	$.ajax({
		type:"get",
		url:"json/shop_bottom.json",
		async:true,
		success: function(data){
			
			var cont1 = "";
			for(var i = 0; i < data.length; i++){
				
				var cont2 = "";
				for(var j = 0; j < data[i].child.length; j++){
					cont2 += '<dd><a href="#">'+data[i].child[j]+'</a></dd>'
				}
				cont1 +='<dl><dt>'+data[i].title+'</dt>'+cont2+'</dl>'
			}
			$(".cont_bottom_left").html(cont1)
		}
	});
	
})
