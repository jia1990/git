define(function(require,exports,module){
	require('jquery');	
	require('jquery.form');	
	require('alert');
	
		$(".numLists").css({width:$(".numLists span").length*45+"px"});
		var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1}))+\d{8})$/; 
		var username = /^([a-zA-Z0-9_]){4,16}$/;
		var password = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%\^&*?]{8,16}$/;
		$(".w_add_link").click(function(){
			var flag = 0;
			if($("#mobile").val() == ""){
				$.alert("手机号不能为空","提示",function(){},true);
			}else if(!mobile.test($("#mobile").val())){
				$.alert("手机号输入有误","提示",function(){},true);
			}else{
				//手机校验成功，进行用户名校验
				flag = flag+1;
				if($("#username").val() == ""){
					$.alert("用户名不能为空","提示",function(){},true);
				}else if(!username.test($("#username").val())){
					$.alert("用户名格式错误,长度为4到16位,由英文、数字、_组成,且不能为纯数字","提示",function(){},true);
				}else{
					//判断用户名是否存在
					var userName = $("#username").val();
					$.ajax({
						url:"/user/checkUsername.html",
						type:"post",
						data:"userName="+userName,
						success:function(data){
							if(data){
								//用户名校验成功，进行密码校验
								flag = flag+1;
								if($("#password").val() == ""){
									$.alert("密码不能为空","提示",function(){},true);
								}else if(!password.test($("#password").val())){
									$.alert("密码格式错误,长度为8到20位,必须包含英文、数字","提示",function(){},true);
								}else {
									//密码校验成功进行确认密码校验
									flag = flag+1;
									if ($("#confirmPassword").val() == "") {
										$.alert("确认密码不能为空","提示",function(){},true);
									}else if(!password.test($("#confirmPassword").val())){
										$.alert("确认密码格式有误，格式是长度为8到20位,必须包含英文、数字","提示",function(){},true);
									} else if ($("#confirmPassword").val() != $("#password").val()) {
										$.alert("两次密码不一致","提示",function(){},true);
									} else {
										//确认密码之后进行验证码长度校验
										flag = flag+1;
										
										if ($("#validCode").val() == "") {
											$.alert("验证码不能为空","提示",function(){},true);
										}else if($("#validCode").val().length!=4){
											$.alert("验证码不正确","提示",function(){},true);
										} else {
											flag = flag+1;
											if (flag == 5) {
												$(".w_form").ajaxSubmit(function(data) {
													if(data.result == true){
														location.href = "/user/register.html?activity=register&mobile=" + $("#mobile").val();
													}else{
														$("#validCode").val("");
										    			$("#img").each(function(){$(this).attr("src",'/validimg.html?t=' + Math.random());});
														$.alert(data.msg,"提示",function(){},true);
													}
												});
											}
										}
									}
								
							}
							}else{
								$.alert("用戶名已存在","提示",function(){},true);
							}
						 }
					})//end ajax
					
					}
				}
		});
	
	$(function(){
		$.ajax({
			url:"/index/investIn.html",
			type:"post",
			success:function(data){
				// userInvestTotal   userEarnTotal   personTopInvestCount  w-num
				$(".userInvestTotal").html((data.showData.user_invest_total.value/100000000).toFixed(1) + "亿元");
				$(".userEarnTotal").html((data.showData.user_income.value/100000000).toFixed(1) + "亿元");
				$(".personTopInvestCount").html(moneyFormat(data.showData.person_highest_invest_times.value));
				$(".w-num").html(data.showData.jsd_reinvest_scale.value+"%");
			}
			})
			
			function moneyFormat(money){
				if (money == 0) {
					return money;
				} else {
					n = 2;
					money = parseFloat((money + "").replace(/[^\d\.-]/g, ""))
							.toFixed(n)
							+ "";
					var l = money.split(".")[0].split("").reverse(), r = money
							.split(".")[1];
					t = "";
					for (i = 0; i < l.length; i++) {
						t += l[i]
								+ ((i + 1) % 3 == 0 && (i + 1) != l.length ? ","
										: "");
					}
					return t.split("").reverse().join("") + "." + r;
				}
			}
		$(window).scroll(function(){
			var w_height = $(window).height();//浏览器高度
			var scroll_top = $(document).scrollTop();//滚动条到顶部的垂直高度
			if(scroll_top > w_height){
					$(".c_to_top").fadeIn(500);
				}else{
					$(".c_to_top").fadeOut(500);
			}
		});
		$(".u-025").click(function(e){
			e.preventDefault();
			$(document.documentElement).animate({
				scrollTop: 0
				},200);
			//支持chrome
			$(document.body).animate({
				scrollTop: 0
				},200);
		});
	})
});