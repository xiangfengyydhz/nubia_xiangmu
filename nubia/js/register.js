$(function(){
	$(".label_left").css("color","red");
	$("#phone_num").css("display","block");
	var code = testCode(4);
	$(".ver_middle").html(code);
	
	$(".label_left").click(function(){
		$(this).css("color","red");
		$("#phone_num").css("display","block");
		$(".label_rig").css("color","#000");
		$("#mail_num").css("display","none");
		var code = testCode(4);
		$(".ver_middle").html(code);
	
	})
	$(".label_rig").click(function(){
		$(this).css("color","red");
		$("#mail_num").css("display","block");
		$(".label_left").css("color","#000");
		$("#phone_num").css("display","none");
		var code = testCode(4);
		$(".ver_middle").html(code);
		$(".ver_middle").click(function(){
			var code = testCode(4);
			$(".ver_middle").html(code);
		})
		
		
	})
	
})
window.onload = function(){
		//手机号
		var phone_tel = document.getElementById("phone_tel");
		var phone_input = phone_num.getElementsByTagName("input")[0];
		var phone_span = phone_num.getElementsByTagName("span")[0];
		phone_input.onblur = function(){
			var tel = phone_input.value.replace(/^\s+/,"")
			if(tel){
				if(/^[1-3]\d{10}$/.test(tel)){
					phone_span.innerHTML = ""
				}else{
					phone_span.innerHTML = "手机号码格式错误！"	
				}
			}else{
				phone_span.innerHTML = "请填写信息！"
			}
		}
	
		//密码
		var password_form = document.getElementById("password_form");
		var password_input = password_form.getElementsByTagName("input")[0];
		var password_span = password_form.getElementsByTagName("p")[0];
		password_input.onblur = function(){
			var passw = password_input.value.replace(/^\s+/,"");
	
			if(passw){
					
				//判断长度6-16
				if(passw.length > 16||passw.length <6){
					
					password_span.innerHTML = "密码为6-16个字符(数字、字母、符号至少包含两种)"
				}else{
						if(/\d/g.test(passw)&&/[a-zA-Z]/g.test(passw)||/[a-zA-Z]/g.test(passw)&&/\s/.test(passw)||/\d/g.test(passw)&&/\s/.test(passw)){
							password_span.innerHTML = "";
						}else{
							password_span.innerHTML = "密码为6-16个字符(数字、字母、符号至少包含两种)"
						}
					}
					
				}else{
					
					password_span.innerHTML = "请填写信息！"
				}
			}
			//验证码
			var ver_code = document.getElementById("ver_code");
			var ver_input = ver_code.getElementsByTagName("input")[0];
			var ver_div = ver_code.getElementsByTagName("div")[0];
			var ver_span = ver_code.getElementsByTagName("span")[0];
			ver_input.onblur = function(){
				
				if(ver_input.value){
					
				}else{
					ver_span.innerHTML = "请填写信息！"
				}
			}
			//手机验证码
			var gain_code = document.getElementById("gain_code");
			var gain_input = gain_code.getElementsByTagName("input")[0];
			var gain_span = gain_code.getElementsByTagName("span")[0];
			gain_input.onblur = function(){
				if(gain_input.value){
					gain_span.innerHTML="";
				}else{
					gain_span.innerHTML="手机验证码不能为空";
					
				}
		}
//-------------------------------邮箱--------------------------------------------------
		var label_rig = document.getElementsByClassName("label_rig")[0];
		label_rig.onclick = function(){
			//邮箱
			var address = document.getElementById("address");
			var address_input = address.getElementsByTagName("input")[0];
			var address_span = address.getElementsByTagName("span")[0];
			console.log(address);
			console.log(address_input);
			console.log(address_span);
			
			address_input.onblur = function(){
				if(address_input.value){
					if(/(@([a-zA-Z0-9]+)\.com)$/.test(address_input.value)){
						address_span.innerHTML = "";
					}else{
						address_span.innerHTML = "格式不正确！"
					}
				}else{
					address_span.innerHTML = "请填写信息！"
				}
			}
			
			//密码
			var password_form = document.getElementById("password_form1");
			var password_input = password_form.getElementsByTagName("input")[0];
			var password_span = password_form.getElementsByTagName("span")[0];
			password_input.onblur = function(){
				var passw = password_input.value.replace(/^\s+/,"");
		
				if(passw){
						
					//判断长度6-16
					if(passw.length > 16||passw.length <6){
						
							password_span.innerHTML = "密码为6-16个字符(数字、字母、符号至少包含两种)"
						}else{
							if(/\d/g.test(passw)&&/[a-zA-Z]/g.test(passw)||/[a-zA-Z]/g.test(passw)&&/\s/.test(passw)||/\d/g.test(passw)&&/\s/.test(passw)){
								password_span.innerHTML = "";
							}else{
								password_span.innerHTML = "密码为6-16个字符(数字、字母、符号至少包含两种)"
							}
						}
					
				}else{
					
					password_span.innerHTML = "请填写信息！"
				}
			}
			//验证码
			var ver_code = document.getElementById("ver_code1");
			var ver_input = ver_code.getElementsByTagName("input")[0];
			var ver_div = ver_code.getElementsByTagName("div")[0];
			var ver_span = ver_code.getElementsByTagName("span")[0];
			ver_input.onblur = function(){
				
				if(ver_input.value){
					
				}else{
					ver_span.innerHTML = "请填写信息！"
				}
			}
			//手机验证码
			var gain_code = document.getElementById("gain_code1");
			var gain_input = gain_code.getElementsByTagName("input")[0];
			var gain_span = gain_code.getElementsByTagName("span")[0];
			gain_input.onblur = function(){
				if(gain_input.value){
					gain_span.innerHTML="";
				}else{
					gain_span.innerHTML="邮箱验证码不能为空";
					
				}
			}

		}
	
	
	
}




function testCode(n){ //传入n,生成n位的验证码
	var arr = []; //记录每一次生成的验证码
	for(var i = 0; i < n; i++){
		var num = parseInt(Math.random() * 100);
		if(num >= 0 && num <= 9){
			arr.push(num);
		}else if(num >= 10 && num <= 35){
			var charStr = String.fromCharCode(num + 87);
			arr.push(charStr);
		}else if(num >= 65 && num <= 90){
			var charStr = String.fromCharCode(num);
			arr.push(charStr);
		}else{
			i--; //再去将那次无用操作补回来
		}
	}
	return arr.join("");
}
