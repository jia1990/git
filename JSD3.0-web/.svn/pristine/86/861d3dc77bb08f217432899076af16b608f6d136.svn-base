define(function(require,exports,module){
	require('jquery');
	require('alert');
	require('alerts');
	$("#img1").each(function(){$(this).attr("src",'http://old.jinshangdai.com/validimg.html?t=' + Math.random());});
	//解决IE下不支持placeholder
	require.async('common1',function(){
		if($.browser.msie) { 
			$(":input[placeholder]").each(function(){
				$(this).placeholder();
			});
		}
	})
//登录选项卡
	$(".loginContent .login_outer_div ul li").click(function(){
		var index=$(this).index(".loginContent .login_outer_div ul li")
		$(this).addClass("clicklogin_li").siblings().removeClass("clicklogin_li");
		$(".ylogin_form").hide();
		$($(".ylogin_form")[index]).show()
	})

	function showError(error, element){
		
		if(error==""){
			if(element.attr("name")=='password'){
				$("#password").parent().height("46px");
			}
			if(element.attr("name")=='confirmPassword'){
				$("#repassword").parent().height("46px");
			}
			element.parent().find("p").html("") ;
			element.parent().find("p").hide();
			element.css({border:"1px solid #cccccc"});
		}else{
			if(element.attr("name")=='password'){
				$("#password").parent().height("72px");
			}
			if(element.attr("name")=='confirmPassword'){
				$("#repassword").parent().height("72px");
			}
			element.parent().find("p").html(error) ;
			element.parent().find("p").show();
			element.css({border:"1px solid #FA9494"});
		}
	}
	
	$(".c_shows").hover(function(){
		$(".c_down_kik").slideDown(200);
	},function(){
		$(".c_down_kik").slideUp(200);
	}) 

	$("#userName").focus(function(){
		$("#userName").css({color:"#333"});
		if($("#userName").val()=="用户名/邮箱/手机号"){
			$("#userName").val("");
		}
	})
	$("#userName").blur(function(){
		if($("#userName").val()==""){
			$("#userName").val("用户名/邮箱/手机号").css({color:"#ababab"});
		}
	})
	$("#userName1").focus(function(){
		$("#userName1").css({color:"#333"});
		if($("#userName1").val()=="请输入用户名"){
			$("#userName1").val("");
		}
	})
	$("#userName1").blur(function(){
		if($("#userName1").val()==""){
			$("#userName1").val("请输入用户名").css({color:"#ababab"});
		}
	})
	$("#validCode").focus(function(){
		$("#validCode").css({color:"#333"});
		if($("#validCode").val()=="验证码"){
			$("#validCode").val("");
		}
	})
	$("#validCode").blur(function(){
		if($("#validCode").val()==""){
			$("#validCode").val("验证码").css({color:"#ababab"});
		}
	})
	$("#validCode1").focus(function(){
		$("#validCode1").css({color:"#333"});
		if($("#validCode1").val()=="验证码"){
			$("#validCode1").val("");
		}
	})
	$("#validCode1").blur(function(){
		if($("#validCode1").val()==""){
			$("#validCode1").val("验证码").css({color:"#ababab"});
		}
	})
	$(".password").focus(function() {
		var text_value = $(this).val();
		if (text_value == this.defaultValue) {
		$(".password").hide();
		if($(this).parent().find("p").html()!=""){
			$("#password").parent().height("72px");
		}else{
			$("#password").parent().height("46px");
		}
		$(this).parent().find("p").css({bottom: "-46px",position: "relative"});
		$("#password").show().css({opacity:1,color:"#333"}).focus();
		}
	});
	$(".password1").focus(function() {
		var text_value = $(this).val();
		if (text_value == this.defaultValue) {
			$(".password1").hide();
			if($(this).parent().find("p").html()!=""){
				$("#password1").parent().height("72px");
			}else{
				$("#password1").parent().height("46px");
			}
			$(this).parent().find("p").css({bottom: "-46px",position: "relative"});
			$("#password1").show().css({opacity:1,color:"#333"}).focus();
		}
	});
	$("#password").keyup(function(){
		var pwd = $(this).val().replace(/^ +| +$/g,'');
		$(this).val(pwd);
	}); 
	$("#password").blur(function() {
		
		$("#pwd").val($(this).val());
		
		var text_value = $(this).val();
		if (text_value == "") {
			
			if($(this).parent().find("p").html()!=""){
				$("#password").parent().height("72px");
				$(".password").css({border:"1px solid #FA9494"});
			}else{
				$("#password").parent().height("46px");
			}
			$(this).parent().find("p").css({bottom: "-2px",position: "relative"});
			$("#password").show().css({opacity:0});
			$(".password").show().css({color:"#ababab"});
		}
	});
	$("#password1").keyup(function(){
		var pwd = $(this).val().replace(/^ +| +$/g,'');
		$(this).val(pwd);
	}); 
	$("#password1").blur(function() {
		
		$("#pwd1").val($(this).val());
		
		var text_value = $(this).val();
		if (text_value == "") {
			
			if($(this).parent().find("p").html()!=""){
				$("#password1").parent().height("72px");
				$(".password1").css({border:"1px solid #FA9494"});
			}else{
				$("#password1").parent().height("46px");
			}
			$(this).parent().find("p").css({bottom: "-2px",position: "relative"});
			$("#password1").show().css({opacity:0});
			$(".password1").show().css({color:"#ababab"});
		}
	});
	//前台登陆页面验证
	var count = $("#count").val();
	if( count == 1){
		$(".showErrorTips").before('<dd><input class="code" name="validCode" autocomplete="off" placeholder="验证码" type="text" maxlength="4" /><img src="/validimg.html" align="absmiddle" class="valicode_img" alt="点击刷新" /></dd>');
	    $(".valicode_img").click(function(){
	    	$(this).attr("src",'/validimg.html?t=' + Math.random());
	    });
	}

	require.async('/plugins/jquery-validation-1.13.0/jquery.validate',function(){
		require.async('/plugins/jquery-validation-1.13.0/additional-methods',function(){
			jQuery.validator.addMethod("emomc", function(value, element) { 
				var flag;
				  var length = value.length;   
				   var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1}))+\d{8})$/;   
				   var email = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/ ;
				   var username = /^([0-9a-zA-Z]{4,12})+|([\u4e00-\u9fa5]){2,6}$/;
					var username = /^([a-zA-Z0-9_]|[\u4e00-\u9fa5]){2,16}$/;
					var number =/^[0-9]{3,16}$/;
					if(WidthCheck(value,3 ,16)){
						if((value != "请输入用户名") && username.test(value) && value != "请输入用户名"){
							flag = true;	
						}
					}else{
						flag = false;	
					}
					//flag = WidthCheck(value, 15) && (value != "请输入用户名") && username.test(value);
				   return this.optional(element) || (length == 11 && mobile.test(value) || email.test(value)) || flag;       
				   //return this.optional(element) || (length == 11 && mobile.test(value));       
			}, "用户名格式错误,请输入正确的用户名、手机号、Email"); 
			jQuery.validator.addMethod("userName", function(value, element) { 
				var flag;
				var length = value.length;   
				var username = /^([a-zA-Z0-9_]|[\u4e00-\u9fa5]){2,15}$/;
				var number =/^[0-9]{3,15}$/;
				if(WidthCheck(value,3 ,15)){
					if((value != "请输入用户名") && username.test(value) && !number.test(value) && value != "请输入用户名"){
						flag = true;	
					}
				}else{
					flag = false;	
				}
				//flag = WidthCheck(value, 15) && (value != "请输入用户名") && username.test(value);
				return this.optional(element) || flag;       
				//return this.optional(element) || (length == 11 && mobile.test(value));       
			}, "用户名格式错误,请输入正确的用户名"); 
			jQuery.validator.addMethod("vcodenovalue", function(value, element) {    
				   return this.optional(element) || !(value == "验证码");       
			}, "验证码不能为空");
			$("#login").validate({
				rules:{
			    	userName:{
			    		required: true,
			    		emomc: true
			    	},
			    	password:{
			    		required: true
			    		//regexPassword:true
			    	},
			    	validCode:{
			    		required: true,
			    		minlength: 4
			    	}
			    },
			    messages:{
			    	userName:{
			    		required: "请输入用户名",
			    		emomc: "用户名格式错误,请输入正确的用户名、手机号、Email"
			    	},
			    	password:{
			    		required: "密码不能为空" 
						//regexPassword:'密码长度为8到16位，且包含英文、数字'
			    	},
			    	validCode:{
			    		required: "请输入验证码",
			    		minlength: "验证码格式错误"
			    	}
			   },
			 	
			 	errorPlacement:function(error, element){
					//element.next().html(error.text()) ;
					/*alert(element.attr("name"));*/
					
					if(error.text()==""){
						if(element.attr("name")=='password'){
							$("#password").parent().height("46px");
						}
						if(element.attr("name")=='confirmPassword'){
							$("#repassword").parent().height("46px");
						}
						element.parent().find("p").html("") ;
						element.parent().find("p").hide();
						element.css({border:"1px solid #cccccc"});
					}else{
						if(element.attr("name")=='password'){
							$("#password").parent().height("72px");
						}
						if(element.attr("name")=='confirmPassword'){
							$("#repassword").parent().height("72px");
						}
						element.parent().find("p").html(error.text()) ;
						element.parent().find("p").show();
						element.css({border:"1px solid #FA9494"});
					}
				},
				success:function(element){
				},
			    submitHandler:function(form){
			    	require.async('jquery.form',function(){
			    		//JSDP-44 gjh 2015-4-20 start
		    			/*$("#loginBtn").attr("disabled", true);
		    			$.alert("<div style='margin:0 100px;'>" +
								"<img width=18 src='../../../themes/theme_default/images/loading.gif'/> " +
								"&nbsp;正在加载中...</div>","提示",function(){},false);*/
		    			//JSDP-44 gjh 2015-4-20 end
				    	$(form).ajaxSubmit(function(data){
				    		if(data.result == true)
				    		  {
				    			$("#showCookie").css({display:"none"});
				    			var redirectURL=data.redirectURL;
				    			var timeout=data.timeout;
				    			//JSDBET-836 sxy 2015-3-19 start
				    			var client_id=data.client_id;
				    			var response_type=data.response_type;
				    			var callback=data.callback;
				    			// 云购全球单点登录
				    			if(client_id=='001'&&response_type=='code'){
					    			location.href ="/user/authorize.html?response_type=code&client_id=001&callback="+callback;
					    		//JSDBET-836 sxy 2015-3-19 end
					    			
					    		// 论坛单点登录(2015年3月30日孙晓勇-功能待定)
					    		}else if(client_id=='002'&&response_type=='code'){
					    			location.href ="/user/authorize.html?response_type=code&client_id=002&callback="+callback;
					    			
				    		  	}/*else if(redirectURL!=''&&timeout==1){
				    				location.href =redirectURL;
				    			}*/else{
				    				location.href = "/member/main.html";
				    			}
				    		  } else {
				    			//JSDP-44 gjh 2015-4-20 start
						    	/*$("#loginBtn").attr("disabled", false);
						    	$(".qui_pop").hide();
						    	$(".qui_shade").hide();*/
						    	//JSDP-44 gjh 2015-4-20 end
				    			  $("#showCookie").css({display:"none"});
				    			  if(data.msg == "验证码错误！"){
				    				  showError(data.msg,$("#validCode"));
				    			  }else if(data.code == "10"){
				    				  showError(data.msg,$("#userName"));
				    			  }else if(data.code == "11"){
				    				  showError("密码错误,密码错误次数超过"+data.sumCount+"次将锁定账户,当前错误次数为" + data.findCount + "次！",$("#password"));
				    			  }else if(data.code == "12"){
				    				  showError(data.msg,$("#userName"));
				    			  }else if(data.code == "13"){
				    				  showError(data.msg,$("#userName"));
				    			  }else if(data.code == "14"){
				    				  showError(data.msg,$("#userName"));
				    			  }else if(data.code == "15"){
				    				  showError(data.msg,$("#noCookie"));
				    			  }else if(data.code == "00"){
				    				  $("#showCookie").css({display:"block"});
				    			  }
				    			 
				    			  //alerts("登录错误",data.msg,300,120);
				    			  $("#validCode").val("");
				    			  $("#img").each(function(){$(this).attr("src",'/validimg.html?t=' + Math.random());});
				    			  
				    			  //李建云加 登录密码进行加密，如果登录密码输入错误，把加密密文制为空
				    			  $("#password").val("");
				    		  }	        	
				    	}); 
			    	})
			     }  

			});
			$("#login1").validate({
				rules:{
				useruame:{
				required: true,
				userName: true
			},
			password:{
				required: true
				//regexPassword:true
			},
			valicode:{
				required: true,
				minlength: 5
			}
			},
			messages:{
				useruame:{
				required: "请输入用户名",
				emomc: "用户名格式错误,请输入正确的用户名"
			},
			password:{
				required: "密码不能为空" 
					//regexPassword:'密码长度为8到16位，且包含英文、数字'
			},
			valicode:{
				required: "请输入验证码",
				minlength: "验证码格式错误"
			}
			},
			
			errorPlacement:function(error, element){
				//element.next().html(error.text()) ;
				/*alert(element.attr("name"));*/
				
				if(error.text()==""){
					if(element.attr("name")=='password'){
						$("#password1").parent().height("46px");
					}
					if(element.attr("name")=='confirmPassword'){
						$("#repassword1").parent().height("46px");
					}
					element.parent().find("p").html("") ;
					element.parent().find("p").hide();
					element.css({border:"1px solid #cccccc"});
				}else{
					if(element.attr("name")=='password'){
						$("#password1").parent().height("72px");
					}
					if(element.attr("name")=='confirmPassword'){
						$("#repassword1").parent().height("72px");
					}
					element.parent().find("p").html(error.text()) ;
					element.parent().find("p").show();
					element.css({border:"1px solid #FA9494"});
				}
			},
			success:function(element){
			},
			submitHandler:function(form){
			    	//require.async('jquery.form',function(){
			    		document.form1.submit();
			    	//})
			     } 
			});


		})
	})
	$("#noCookie i").click(function(){
		 alerts("如何开启","<p>1. ie浏览器：点击浏览器“工具”——“internet选项”——“隐私”——将“阻止所有cookie”调低级别——点击“保存”" +
			 		"——重启浏览器即可正常登录。</p><p>2. chrome浏览器：点击浏览器“设置”——“显示高级设置”——“隐私设置”——“内容设置”——取消" +
			 		"“阻止第三方cookie和网站数据”——选择“允许设置本地数据（推荐）”——点击“完成”——重启浏览器即可正常登录。</p>" +
			 		"<p>3. 火狐浏览器：点击浏览器“选项”——选择“隐私”——“自定义历史记录设置”，取消“" +
			 		"始终使用隐私浏览模式”，勾选“接受来自站点的cookie”——点击“确定”——重启浏览器即可生效。</p>",600,300);
		});
	$("#reset_email").live("click",function(){
    	$.ajax({
    		url:"/user/sentActivationEmail.html?userId="+$("#userid").val(),
    		type:"post",
    		data:{email:$("#email").val()},
    		success:function(data){
    			if(data)
    			{
    				loginEmail($("#email").val());
    			}
    			else
    			{
    				$(".errorTips b").html("邮件发送失败！");
    			}
    			
    		}
    	});
	});

	function WidthCheck(str, min , max){ 
		var w = 0; 
		for (var i=0; i<str.length; i++) { 
		   var c = str.charCodeAt(i); 
		   //单字节加1 
		   if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
		    w++; 
		   } 
		   else { 
		    w+=2; 
		   } 
		} 
		if (w > max) { 
		   return false; 
		}
		if (w < min){
			return false; 
		}
		return true; 
	}
	//["qq.com","gmail.com","126.com","163.com","hotmail.com","yahoo.com","yahoo.com.cn","live.com","sohu.com","sina.com"]	
	//点击登录邮箱地址
    function loginEmail(emailValue){
    	var email_suffix = (emailValue.split("@"))[1];
    	var loginEmailValue = "";
    	switch (email_suffix)
    	{
    		case "qq.com":
    			loginEmailValue = "mail.qq.com";
    			break;
    		case "gmail.com":
    			loginEmailValue = "mail.google.com";
    			break;
    		case "126.com":
    			loginEmailValue = "mail.126.com";
    			break;
    		case "163.com":
    			loginEmailValue = "mail.163.com";
    			break;
    		case "hotmail.com":
    			loginEmailValue = "login.live.com";
    			break;
    		case "yahoo.com":
    			loginEmailValue = "login.yahoo.com";
    			break;
    		case "live.com":
    			loginEmailValue = "login.live.com";
    			break;
    		case "sohu.com":
    			loginEmailValue = "mail.sohu.com";
    			break;
    		case "sina.com":
    			loginEmailValue = "mail.sina.com";
    			break;	
    	}
    	if(loginEmailValue)
    	{
    		$(".errorTips b").html('邮件已发送，点击<a href="http://'+loginEmailValue+'" target="_blank">立即激活</a>');
    	}
    	else
    	{
    		$(".errorTips b").html("邮件已发送，请注意查收！");
    	}
    }
})

