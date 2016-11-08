//top
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

//content
$(document).ready(function(){
	$.ajax({
		type:"get",
		url:"json/data.json",
		async:true,
		success:function(data){
			//alert(data.length);
			//初始默认的选择
			
			$(".phone-color").children().eq(2).css("border-color","red").siblings().css("border-color","#e9e9e9");
    		$(".cont .cont-left img").attr("src","detimg/pic"+2+".png");
    		$(".cont .cont-right .phone-edition").html("<li>"+data[2].title1.edition+"</li>");
    		$(".cont .cont-right .select-edition span").html(data[2].title1.det);
    		$(".total span").html(data[2].title1.price);
    		$(".jianjie").html(data[2].title1.price);
			$(".shifty").html('<p class="select-meal">3、选择优惠配套菜单</p>'+
					        			'<ul class="phone-meal">'+
					        				'<li><span>仅手机</span><p>￥'+data[2].title1.price+'</p></li></ul>'+
					        			'<p class="select-insure">4、可选意外宝(可选) <a href="#">了解"nubia意外宝"</a></p>'+
					        			'<ul class="insure"><li>一年意外宝￥<span>'+data[2].title1.bao +'</span></li></ul>'+
					        			'<div class="phone-net-zj">'+
					        				'<p class="selected">你选择的商品：</p>'+
					        				'<p class="selected-size">nubia Z11'+ data[2].name+ data[2].title1.edition+'<span></span></p>'+
					        				'<p class="jianjie">'+data[2].title1.active+'</p>'+
					        				'<p class="total">总计：￥<span>'+data[2].title1.price+'</span></p>'+
					        				
					        				'<p class="huabei">支持花呗分期：</p><ul class="select-huabei"><li><span>￥1431.86*3</span><p>(含￥96.58手续费)</p></li><li><span>￥699.83*6</span><p>(含￥0.00手续费)</p></li><li><span>￥377.91*12</span><p>(含￥335.92手续费)</p></li></ul>'+
					        				'<a class="buy" href="shop-car.html">立即购买</a>'+
					        			'</div>')
			//top-menu
			$(".top-menu .p1").html('<a class="buy" href="shop-car.html">立即购买</a>')
			$(".top-menu .p3").html('nubia Z11'+ data[2].name+" "+ data[2].title1.edition);
			$(".top-menu .p2").html(data[2].title1.price+"元");
			
	        for(var i = 0;i < 8; i++){
	        	//var index = i;
	        	$(".phone-color li").eq(i).click(function(){
	        		//alert($(this).index())
	        		//改变边框颜色
	        		$(this).css("border-color","red").siblings().css("border-color","#e9e9e9");
	        		$(".cont .cont-left img").attr("src","detimg/pic"+$(this).index()+".png");
	        		$(".cont .cont-right .phone-edition").html("<li>"+data[$(this).index()].title1.edition+"</li>");
	        		$(".cont .cont-right .select-edition span").html(data[$(this).index()].title1.det);
	        		$(".total span").html(data[$(this).index()].title1.price);
	        		$(".jianjie").html(data[$(this).index()].title1.price);
	        		
	        		
	        		//判断有没有货
	        		if(data[$(this).index()].title1.goods){
	        			//alert("youhuo");
	        			//有货的
	        			
		        				$(".shifty").html('<p class="select-meal">3、选择优惠配套菜单</p>'+
					        			'<ul class="phone-meal">'+
					        				'<li><span>仅手机</span><p>￥'+data[$(this).index()].title1.price+'</p></li></ul>'+
					        			'<p class="select-insure">4、可选意外宝(可选) <a href="#">了解"nubia意外宝"</a></p>'+
					        			'<ul class="insure"><li>一年意外宝￥<span>'+data[$(this).index()].title1.bao +'</span></li></ul>'+
					        			'<div class="phone-net-zj">'+
					        				'<p class="selected">你选择的商品：</p>'+
					        				'<p class="selected-size">nubia Z11'+ data[$(this).index()].name+ data[$(this).index()].title1.edition+'<span></span></p>'+
					        				'<p class="jianjie">'+data[$(this).index()].title1.active+'</p>'+
					        				'<p class="total">总计：￥<span>'+data[$(this).index()].title1.price+'</span></p>'+
					        				
					        				'<p class="huabei">支持花呗分期：</p><ul class="select-huabei"><li><span>￥1431.86*3</span><p>(含￥96.58手续费)</p></li><li><span>￥699.83*6</span><p>(含￥0.00手续费)</p></li><li><span>￥377.91*12</span><p>(含￥335.92手续费)</p></li></ul>'+
					        				'<a class="buy" href="shop-car.html">立即购买</a>'+
					        			'</div>')
		        				
	        					//top-menu
								$(".top-menu .p1").html('<a class="buy" href="shop-car.html">立即购买</a>')
								$(".top-menu .p3").html('nubia Z11'+ data[$(this).index()].name+" "+data[$(this).index()].title1.edition);
								$(".top-menu .p2").html(data[$(this).index()].title1.price+"元");
								$(".top-menu .p1").css("background", "#e8380d");
								
	        		}else{
	        			//alert('mei')
	        			//没货的
	        			
	        				$(".shifty").html('<div class="phone-net-zj">'+
		        				'<p class="selected">你选择的商品：</p>'+
		        				'<p class="selected-size">nubia Z11 '+data[$(this).index()].name+ data[$(this).index()].title1.edition+'<span></span></p>'+
		        				'<p class="jianjie">'+data[$(this).index()].title1.active+'</p>'+
		        				'<p class="total">总计：￥<span>'+data[$(this).index()].title1.price+'</span></p>'+
		        				'<a class="buy">缺货登记</a>'+
	        				'</div>')
	        			$(".shifty .buy").css('background',"#ADACAC");
	        			//top-menu
						$(".top-menu .p1").html('<a class="buy">缺货登记</a>')
						$(".top-menu .p3").html('nubia Z11 '+data[$(this).index()].name+" "+ data[$(this).index()].title1.edition);
						$(".top-menu .p2").html(data[$(this).index()].title1.price+"元");
						$(".top-menu .p1").css("background", "#ADACAC")
	        			
	        		}
	        		
	        		
	        		//百合金的判断
	        		if(data[$(this).index()].title2.edition){
	        			$(".cont .cont-right .phone-edition").append("<li>"+data[$(this).index()].title2.edition+"</li>");
	        			$(".cont .cont-right .phone-edition li").css("border-color","#e9e9e9");
	        			$(".cont .cont-right .select-edition span").html("");
	        			$(".shifty").html('<div class="phone-net-zj">'+
		        				'<p class="selected">你选择的商品：</p>'+
		        				'<p class="selected-size">nubia Z11 '+data[$(this).index()].name+'<span></span></p>'+
		        				'<p class="jianjie"></p>'+
		        		        '<a class="buy" href="shop-car.html">立即购买</a>'+
	        				'</div>')
	        			//top-menu
	        			$(".top-menu .p1").html('<a class="buy" href="shop-car.html">立即购买</a>')
						$(".top-menu .p3").html('nubia Z11 '+data[$(this).index()].name);
						$(".top-menu .p2").html('');
						$(".top-menu .p1").css("background", "#e8380d");
						
						
        				$(".cont .cont-right .phone-edition").on("click", "li:eq(0)", function(){
        					
        					$(".cont .cont-right .select-edition span").html(data[6].title1.det);
        					$(this).css("border-color", "red").siblings().css("border-color","#e9e9e9");
        					$(".shifty").html('<p class="select-meal">3、选择优惠配套菜单</p>'+
					        			'<ul class="phone-meal">'+
					        				'<li><span>仅手机</span><p>￥'+data[6].title1.price+'</p></li></ul>'+
					        			'<p class="select-insure">4、可选意外宝(可选) <a href="#">了解"nubia意外宝"</a></p>'+
					        			'<ul class="insure"><li>一年意外宝￥<span>'+data[6].title1.bao +'</span></li></ul>'+
					        			'<div class="phone-net-zj">'+
					        				'<p class="selected">你选择的商品：</p>'+
					        				'<p class="selected-size">nubia Z11'+ data[6].name+ data[6].title1.edition+'<span></span></p>'+
					        				'<p class="jianjie">'+data[6].title1.active+'</p>'+
					        				'<p class="total">总计：￥<span>'+data[6].title1.price+'</span></p>'+
					        				
					        				'<p class="huabei">支持花呗分期：</p><ul class="select-huabei"><li><span>￥1431.86*3</span><p>(含￥96.58手续费)</p></li><li><span>￥699.83*6</span><p>(含￥0.00手续费)</p></li><li><span>￥377.91*12</span><p>(含￥335.92手续费)</p></li></ul>'+
					        				'<a class="buy" href="shop-car.html">立即购买</a>'+
					        			'</div>');
					        //top-menu
							$(".top-menu .p1").html('<a class="buy" href="shop-car.html">立即购买</a>')
							$(".top-menu .p3").html('nubia Z11 '+ data[6].name+" "+data[6].title1.edition);
							$(".top-menu .p2").html(data[6].title1.price+"元");
							$(".top-menu .p1").css("background", "#e8380d");
					        			
					        
        					//意外宝的选择
					        		var num = false;
									if(!num){
										$(".insure li").css("border-color", "#e9e9e9");
										
									}
									var obj = $(this).index()
										$(".insure li").click(function(){
											if(!num){
												$(".insure li").css("border-color", "red");
												num = true;
											}else{
												$(".insure li").css("border-color", "#e9e9e9");
												num = false;
											}
											if(num){
												$(".selected-size span").html("一年意外宝");
												$(".total span").html((parseFloat(data[obj].title1.price)+parseFloat(data[6].title1.bao)).toFixed(2));//转化为两位小数的字符串
												//top-menu
										        $(".top-menu .p2").html((parseFloat(data[obj].title1.price)+parseFloat(data[6].title1.bao)).toFixed(2)+"元");	
										    }else{
										    	$(".selected-size span").html("");
												$(".total span").html(parseFloat(data[obj].title1.price).toFixed(2));
												//top-menu
										        $(".top-menu .p2").html(parseFloat(data[obj].title1.price).toFixed(2)+"元");
											}
										
									})
        								
						
        					
        			})
        				$(".cont .cont-right .phone-edition").on("click", "li:eq(1)", function(){
        					//百合金缺货
        					$(".cont .cont-right .select-edition span").html(data[6].title2.det);
        					$(this).css("border-color", "red").siblings().css("border-color","#e9e9e9");
        					$(".shifty").html('<div class="phone-net-zj">'+
		        				'<p class="selected">你选择的商品：</p>'+
		        				'<p class="selected-size">nubia Z11 '+data[6].name+ data[6].title2.edition+'<span></span></p>'+
		        				'<p class="jianjie">'+data[6].title2.active+'</p>'+
		        				'<p class="total">总计：￥<span>'+data[6].title2.price+'</span></p>'+
		        				'<a class="buy">缺货登记</a>'+
	        				'</div>');
        					$(".shifty .buy").css('background', "#ADACAC");
        					
	        				//top-menu
							$(".top-menu .p1").html('<a class="buy">缺货登记</a>')
							$(".top-menu .p3").html('nubia Z11 '+data[6].name+" "+data[6].title2.edition);
							$(".top-menu .p2").html(data[6].title2.price+"元");
							$(".top-menu .p1").css("background", "#ADACAC")
				        					
        					
        					
        				})
	        		}
	        		//意外宝的选择
	        		var num = false;
					if(!num){
						$(".insure li").css("border-color", "#e9e9e9");
						
					}
					var obj = $(this).index()
						$(".insure li").click(function(){
							if(!num){
								$(".insure li").css("border-color", "red");
								num = true;
							}else{
								$(".insure li").css("border-color", "#e9e9e9");
								num = false;
							}
							if(num){
								$(".selected-size span").html("一年意外宝");
								$(".total span").html((parseFloat(data[obj].title1.price)+parseFloat(data[obj].title1.bao)).toFixed(2));//转化为两位小数的字符串
								//top-menu
								$(".top-menu .p2").html((parseFloat(data[obj].title1.price)+parseFloat(data[obj].title1.bao)).toFixed(2)+"元");
						    }else{
						    	$(".selected-size span").html("");
								$(".total span").html(parseFloat(data[obj].title1.price).toFixed(2));
								//top-menu
								$(".top-menu .p2").html(parseFloat(data[obj].title1.price).toFixed(2)+"元");
							}

					})

	        		
	        	})	        
	        }
	        	
	        
		}
	});
	
		
		
});





	 
	 
	 
//吸菜单
$(function(){
	window.onscroll = function(){
        
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop >= 60){
        	$(".top-menu").slideDown();
        }else{
        	$(".top-menu").slideUp();
        }
       }

})

	

