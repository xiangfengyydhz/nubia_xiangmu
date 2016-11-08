//-----------------------------------------top--------------------------------------------
$(document).ready(function(){
	
	
	for(var i = 0; i < $(".top .nav").children().length; i++){
		$(".top .nav li").eq(i).hover(function(){
			$(this).children().addClass('active').siblings().removeClass('active');
			
		},function(){
			$(this).children().removeClass('active')
			
		})
		
		
	};
	
	
});
//$(function(){
//	
//	var date=new Date(); //创建一个 
//	date.setDate(date.getDate() +7);
//	document.cookie="user="+ encodeURIComponent('田雨飞')+";age='12';expires=" +date;
//	alert(decodeURIComponent(document.cookie));
//
//})
