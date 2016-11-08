$(function(){
	$(".label_left").css("color","red");
	$(".account").css("display","block");
	var code = testCode(4);
	$(".ver_middle").html(code);
	
	$(".label_left").click(function(){
		$(this).css("color","red");
		$(".account").css("display","block");
		$(".label_rig").css("color","#000");
		$(".tel").css("display","none");
		var code = testCode(4);
		$(".ver_middle").html(code);
	
	})
	$(".label_rig").click(function(){
		$(this).css("color","red");
		$(".tel").css("display","block");
		$(".label_left").css("color","#000");
		$(".account").css("display","none");
		var code = testCode(4);
		$(".ver_middle").html(code);
		$(".ver_middle").click(function(){
			var code = testCode(4);
			$(".ver_middle").html(code);
		})
		
		
	})
	
})
window.onload = function(){
	//用户名等
	var user = document.getElementById("user");
	var user_input = user.getElementsByTagName("input")[0];
	var user_span = user.getElementsByTagName("span")[0];
	user_input.onblur = function(){
		if(user_input.value){
			user_span.innerHTML = "";
		}else{
			user_span.innerHTML = "请填写信息！";
		}
	}
	
		//手机号
		var phone_tel = document.getElementById("phone_tel");
		var phone_input = phone_tel.getElementsByTagName("input")[0];
		var phone_span = phone_tel.getElementsByTagName("span")[0];
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
		//验证码
		//验证码
			var ver_code = document.getElementById("ver_code");
			var ver_input = ver_code.getElementsByTagName("input")[0];
			var ver_div = ver_code.getElementsByTagName("div")[0];
			var ver_span = ver_code.getElementsByTagName("span")[0];
			ver_input.onblur = function(){
				
				if(ver_input.value){
					if(ver_input.value == ver_span.innerHTML){
						ver_span.innerHTML = "";
					}else{
						ver_span.innerHTML = "验证码输入不正确，请重新输入！"
					}
					
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
					gain_span.innerHTML="邮箱验证码不能为空";
					
				}
			}
	
	
}



//--------------------------验证码-----------------------------------------
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

