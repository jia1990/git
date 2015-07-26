
define(function(require, exports,module){
	require('jquery');
	$("#userName").focus(function(){
		if($("#userName").val()=="请输入手机号或邮箱号"){
			$("#userName").val("");
		}
		$("#userName").show().css({color:"#333"});
	})
	$("#userName").blur(function(){
		if($("#userName").val()==""){
			$("#userName").val("请输入手机号或邮箱号");
		}
		$("#userName").show().css({color:"#ababab"});
	})
	$("#validCode").focus(function(){
		if($("#validCode").val()=="验证码"){
			$("#validCode").val("");
		}
		$("#validCode").show().css({color:"#333"});
	})
	$("#validCode").blur(function(){
		if($("#validCode").val()==""){
			$("#validCode").val("验证码");
		}
		$("#validCode").show().css({color:"#ababab"});
	})
	$("#meailValidCode").focus(function(){
		if($("#meailValidCode").val()=="验证码"){
			$("#meailValidCode").val("");
		}
		$("#meailValidCode").show().css({color:"#333"});
	})
	$("#meailValidCode").blur(function(){
		if($("#meailValidCode").val()==""){
			$("#meailValidCode").val("验证码");
		}
		$("#meailValidCode").show().css({color:"#ababab"});
	})
	$("#mobileValidCode").focus(function(){
		if($("#mobileValidCode").val()=="验证码"){
			$("#mobileValidCode").val("");
		}
		$("#mobileValidCode").show().css({color:"#333"});
	})
	$("#mobileValidCode").blur(function(){
		if($("#mobileValidCode").val()==""){
			$("#mobileValidCode").val("验证码");
		}
		$("#mobileValidCode").show().css({color:"#ababab"});
	})

	function showError(error, element){
		//element.next().html(error.text()) ;
		/*alert(element.attr("name"));*/
		
		if(error==""){
			if(element.attr("name")=='password'){
				$("#password").parent().height("46px");
			}
			if(element.attr("name")=='confirmPassword'){
				$("#repassword").parent().height("46px");
			}
			element.parent().find("i").html("") ;
			element.parent().find("i").hide();
			element.css({border:"1px solid #cccccc"});
		}else{
			if(element.attr("name")=='password'){
				$("#password").parent().height("72px");
			}
			if(element.attr("name")=='confirmPassword'){
				$("#repassword").parent().height("72px");
			}
			element.parent().find("i").html(error) ;
			element.parent().find("i").show();
			element.css({border:"1px solid #FA9494"});
		}
	}
	//JSDP-223 gjh 2015-7-15 start
	function showError1(error, element){
		//element.next().html(error.text()) ;
		/*alert(element.attr("name"));*/
		
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
	//JSDP-223 gjh 2015-7-15 end
	var validCode=true;//获取验证码状态
	var emailValidCode=true;//获取邮箱验证码状态
	//修改获取验证码按钮状态
	function mobileVaildBtn(){
		var getCodeText = "获取短信验证码";
		var time=120;
		if (validCode) {
			getCodeText = "获取短信验证码";
			validCode=false;
			var t=setInterval(function () {
			time--;
				$("#mobileCode").html(time+"秒后重新获取");
				if (time==0) {
					clearInterval(t);
					$("#mobileCode").html(getCodeText);
					validCode=true;
				}
			},1000)
		}
	}
	function emailVaildBtn(){
		var getCodeText = "重新获取";
		var time=120;
		if (emailValidCode) {
			getCodeText = "重新获取";
			emailValidCode=false;
			var t=setInterval(function () {
				time--;
				$("#emailCode").html(time+"秒后重新获取");
				if (time==0) {
					clearInterval(t);
					$("#emailCode").html(getCodeText);
					emailValidCode=true;
				}
			},1000)
		}
	}
	//获取手机验证码单击事件
	//JSDP-223 gjh 2015-7-15 start
	$("#checkPhoneCodeSubmit").click(function(){
		var getCodeText = "获取短信验证码";
		var time=120;
		if (validCode) {
			if($("#mobileCode").html() == "获取短信验证码"){
				getCodeText = "获取短信验证码";
				$.ajax({
					type: "POST",
					url: "/user/getFindPwdByMobileCode.html",
					data: "mobile=" + $("#mobile").val()+ "&validCode=" + $("#sendSmsValidCode").val(),
					//data: "userName=" + "gjh123" + "&emom=" + "13643466905",
					success: function(msg){
					if(msg.result == true){
						$(".calculatorCpmBoxPhone").hide();
						$(".calculatorCpmBottom").hide();
						showError1("",$("#sendSmsValidCode"));
						validCode=false;
						var t=setInterval(function () {
						time--;
							$("#mobileCode").html(time+"秒后重新获取");
							if (time==0) {
								clearInterval(t);
								$("#mobileCode").html(getCodeText);
								validCode=true;
							}
						},1000)
					}else{
						showError1(msg.msg,$("#sendSmsValidCode"));
					}
					$("#sendSmsValidCode").val("");
					$("#img0").each(function(){$(this).attr("src",'/validimg.html?t=' + Math.random());});
					}
				});
			}
		}
	});
	
	$("#mobileCode").click(function(){
		if (validCode){
			$(".calculatorCpmBoxPhone").show();
			$(".calculatorCpmBottom").show();
			$("#sendSmsValidCode").val("");
			$("#img0").each(function(){$(this).attr("src",'/validimg.html?t=' + Math.random());});
		}
	})
	
	$("#checkEmailCodeSubmit").click(function(){
		var time=120;
		if (emailValidCode) {
			$.ajax({
				   type: "POST",
				   url: "/user/getFindPwdByEmailCode.html",
				   data: "email=" + $("#email").val()+ "&validCode=" + $("#sendEmailValidCode").val(),
				   success: function(msg){
						if(msg.result == true){
							$(".calculatorCpmBoxEmail").hide();
							$(".calculatorCpmBottom").hide();
							showError1("",$("#sendEmailValidCode"));
							emailValidCode=false;
							var t=setInterval(function  () {
								time--;
								$("#emailCode").html(time+"秒后重新获取");
								if (time==0) {
									clearInterval(t);
									$("#emailCode").html("重新获取");
									emailValidCode=true;
								}
							},1000)
						}else{
							showError1(msg.msg,$("#sendEmailValidCode"));
						}
						$("#sendEmailValidCode").val("");
						$("#img00").each(function(){$(this).attr("src",'/validimg.html?t=' + Math.random());});
				  }
			});
			
		}
	});
	
	$("#emailCode").click(function(){
		if (emailValidCode){
			$(".calculatorCpmBoxEmail").show();
			$(".calculatorCpmBottom").show();
			$("#sendEmailValidCode").val("");
			$("#img00").each(function(){$(this).attr("src",'/validimg.html?t=' + Math.random());});
		}
	})
	//JSDP-223 gjh 2015-7-15 end
	//表单验证
	require.async('/plugins/jquery-validation-1.13.0/jquery.validate',function(){
		require.async('/plugins/jquery-validation-1.13.0/additional-methods',function(){
			jQuery.validator.addMethod("emomc", function(value, element) {       
				  var length = value.length;   
				   var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1}))+\d{8})$/;   
				   var email = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/ ;
				   var username = /^([0-9a-zA-Z]{4,6})+|([\u4e00-\u9fa5]){2,6}$/;
				   return this.optional(element) || (length == 11 && mobile.test(value) || email.test(value));       
				   //return this.optional(element) || (length == 11 && mobile.test(value));       
			}, "请填写正确的手机号码或邮箱"); 
			jQuery.validator.addMethod("vcodenovalue", function(value, element) {    
				   return this.optional(element) || !(value == "验证码");       
			}, "验证码不能为空"); 
			$("#findStepfrom1").validate({
				rules: {
				userName:{
				  		required:true,
				  		emomc:true
					},
				   validCode:{
				   		required:true,
				   		vcodenovalue:true 
				   }
				},
				messages:{
				   	userName:{
							required:"登录名不能为空",
							regexUserName:"请输入正确的手机或邮箱"
					   },
					validCode:{
				   			required:"请输入验证码",
				   			vcodenovalue:"验证码不能为空"
				   	}
				},
				errorPlacement:function(error, element){
					//element.next().html(error.text()) ;
					/*alert(element.attr("name"));*/
					
					if(error.text()==""){
						element.parent().find("i").html("") ;
						element.parent().find("i").hide();
						element.css({border:"1px solid #cccccc"});
					}else{
						element.parent().find("i").html(error.text()) ;
						element.parent().find("i").show();
						element.css({border:"1px solid #FA9494"});
					}
				},
				success:function(element){
				},
				submitHandler: function(form,event,validator) 
				{      
				   	require.async('jquery.form',function(){
				   		$(form).ajaxSubmit(function(data){
					    	  if(data.result == true)
				    		  {
					    		  $("#showCookie").css({display:"none"});
					    		 if(data.code == "010"){//手机方式成功
					    			 mobileVaildBtn();
					    			 $("#showMobile").html($("#userName").val());
					    			 $("#showUserName").html($("#userName").val());
					    			 $("#mobile").val($("#userName").val());
					    			 $("#accounter").val($("#userName").val());
					    			 $("#find_pwd1").attr({style:"display:none;"});
					    			 $("#find_pwd2").attr({style:""});
					    			 $.ajax({
					    					url:"/user/useridentify/thirdPartyIsOpenByInfo.html",
					    					type:"post",
					    					data:{userName:$("#userName").val()},
					    					dataType:"json",
					    					success:function(data){
					    						if(data.result==true){
					    							$("#identityVerify").show();
					    						}
					    					}
					    				});
					    		 }else if(data.code == "011"){//邮箱方式成功
					    			 emailVaildBtn();
					    			 $("#showEmail").html($("#userName").val());
					    			 $("#showUserName").html($("#userName").val());
					    			 $("#email").val($("#userName").val());
					    			 $("#accounter").val($("#userName").val());
					    			 $("#find_pwd1").attr({style:"display:none;"});
					    			 $("#find_pwd2_email").attr({style:""});
					    			 $(".goEmail").attr("href",loginEmail($("#userName").val()));
					    			 $.ajax({
					    					url:"/user/useridentify/thirdPartyIsOpenByInfo.html",
					    					type:"post",
					    					data:{userName:$("#userName").val()},
					    					dataType:"json",
					    					success:function(data){
					    						if(data.result==true){
					    							$("#identityVerify1").show();
					    						}
					    					}
					    				});
					    		 }
				    		  } else {
				    			  $("#showCookie").css({display:"none"});
				    			  if(data.code == "100"){
				    				  showError(data.msg,$("#userName"));
				    			  }else if(data.msg == "验证码错误！"){
				    				  showError(data.msg,$("#validCode"));
				    			  }else if(data.code == "00"){
				    				  $("#showCookie").css({display:"block"});
				    			  }else{
				    				  showError(data.msg,$("#userName"));
				    			  }
				    			  $("#validCode").val("");
				    			  $("#img").each(function(){$(this).attr("src",'/validimg.html?t=' + Math.random());});
				    		  }
				        });
				   	});
				}  
			});
			$("#noCookie").click(function(){
				 alerts("如何开启","<p>1. ie浏览器：点击浏览器“工具”——“internet选项”——“隐私”——将“阻止所有cookie”调低级别——点击“保存”" +
					 		"——重启浏览器即可正常登录。</p><p>2. chrome浏览器：点击浏览器“设置”——“显示高级设置”——“隐私设置”——“内容设置”——取消" +
					 		"“阻止第三方cookie和网站数据”——选择“允许设置本地数据（推荐）”——点击“完成”——重启浏览器即可正常登录。</p>" +
					 		"<p>3. 火狐浏览器：点击浏览器“选项”——选择“隐私”——“自定义历史记录设置”，取消“" +
					 		"始终使用隐私浏览模式”，勾选“接受来自站点的cookie”——点击“确定”——重启浏览器即可生效。</p>",600,300);
				});
			//找回密码第二步（手机）
			$("#findStepfrom2").validate({
				rules: {
				   validCode:{
				   		required:true,
				   		vcodenovalue:true 
				   }
				},
				messages:{
					validCode:{
				   			required:"请输入验证码",
				   			vcodenovalue:"验证码不能为空"
				   	}
				},
				errorPlacement:function(error, element){
					//element.next().html(error.text()) ;
					/*alert(element.attr("name"));*/
					
					if(error.text()==""){
						element.parent().find("i").html("") ;
						element.parent().find("i").hide();
						element.css({border:"1px solid #cccccc"});
					}else{
						element.parent().find("i").html(error.text()) ;
						element.parent().find("i").show();
						element.css({border:"1px solid #FA9494"});
					}
				},
				success:function(element){
				},
				submitHandler: function(form,event,validator) 
				{    
					var realNameFlag = false;
					if($("#identityVerify").css("display")!="none"){
						var realName = $("#realName").val();
						var cardNo = $("#cardNo").val();
						$("#realName").focus(function(){
							showError("",$("#realName"));
						});
						$("#cardNo").focus(function(){
							showError("",$("#cardNo"));
						});
						if(realName == ""){
							realNameFlag = false;
							showError("请输入真实姓名",$("#realName"));
						}
						if(cardNo == ""){
							realNameFlag = false;
							showError("请输入身份证号码",$("#cardNo"));
						}
						if(realName != "" && cardNo != ""){
							if(!/[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/.test(realName)){
								showError("请输入中文",$("#realName"));
							}else if(!isIdCardNo(cardNo)){
								showError("请正确输入您的身份证号码",$("#cardNo"));
							}else{
								$.ajax({
			    					url:"/user/useridentify/checkRealNameInfo.html",
			    					type:"post",
			    					async: false,
			    					data:{userName:$("#userName").val(),realName:realName,cardNo:cardNo},
			    					dataType:"json",
			    					success:function(data){
			    						if(data.result==true){
			    							showError("",$("#realName"));
			    							showError("",$("#cardNo"));
			    							realNameFlag = true;
			    						}else{
			    							realNameFlag = false;
			    							if(data.code == 1){
			    								$("#realName").val("");
			    								showError(data.msg,$("#realName"));
			    							}else{
			    								$("#cardNo").val("");
			    								showError(data.msg,$("#cardNo"));
			    							}
			    						}
			    					}
			    				});
							}
						}
					}else{
						realNameFlag = true;
					}
					if(realNameFlag == true){
						require.async('jquery.form',function(){
							$(form).ajaxSubmit(function(data){
								if(data.result == true)
								{
									if(data.code == "020"){//手机方式成功
										$("#find_pwd2").attr({style:"display:none;"});
										$("#find_pwd3").attr({style:""});
									}
								} else {
									showError(data.msg,$("#mobileValidCode"));
									//alerts(data.msg,data.msg,false);
									$("input[name='validCode']").val('');
									if(data.msg == "用户名格式错误！")
									{
										$(".reg_table li:eq(1)").find(".msg_tip").html('<label id="customTest-error" class="error" for="customTest">用户名格式错误！</label>');
									}
									else if(data.msg == "验证码错误！")
									{
										$(".reg_table li:eq(6)").find(".msg_tip").html('<label id="customTest-error" class="error" for="customTest">验证码错误！</label>');
									}
									else if(data.msg == "手机已经被使用.")
									{
										$(".reg_table li:eq(2)").find(".msg_tip").html('<label id="customTest-error" class="error" for="customTest">手机已经存在！</label>');
									}
									$(".valicode_img").each(function(){$(this).attr("src",'/validimg.html?t=' + Math.random());})
								}
							});
						});
					}
				   	
				}  
			});
			//找回密码第二步（邮箱）
			$("#findStepfromEmail2").validate({
				rules: {
				validCode:{
				required:true,
				vcodenovalue:true 
			}
			},
			messages:{
				validCode:{
				required:"请输入验证码",
				vcodenovalue:"验证码不能为空"
			}
			},
			errorPlacement:function(error, element){
				//element.next().html(error.text()) ;
				/*alert(element.attr("name"));*/
				
				if(error.text()==""){
					element.parent().find("i").html("") ;
					element.parent().find("i").hide();
					element.css({border:"1px solid #cccccc"});
				}else{
					element.parent().find("i").html(error.text()) ;
					element.parent().find("i").show();
					element.css({border:"1px solid #FA9494"});
				}
			},
			success:function(element){
			},
			submitHandler: function(form,event,validator) 
			{      
				var realNameFlag = false;
				if($("#identityVerify").css("display")!="none"){
					var realName = $("#realName1").val();
					var cardNo = $("#cardNo1").val();
					$("#realName").focus(function(){
						showError("",$("#realName1"));
					});
					$("#cardNo").focus(function(){
						showError("",$("#cardNo1"));
					});
					if(realName == ""){
						realNameFlag = false;
						showError("请输入真实姓名",$("#realName1"));
					}
					if(cardNo == ""){
						realNameFlag = false;
						showError("请输入身份证号码",$("#cardNo1"));
					}
					if(realName != "" && cardNo != ""){
						if(!/[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/.test(realName)){
							showError("请输入中文",$("#realName1"));
						}else if(!isIdCardNo(cardNo)){
							showError("请正确输入您的身份证号码",$("#cardNo1"));
						}else{
							$.ajax({
		    					url:"/user/useridentify/checkRealNameInfo.html",
		    					type:"post",
		    					async: false,
		    					data:{userName:$("#userName1").val(),realName:realName,cardNo:cardNo},
		    					dataType:"json",
		    					success:function(data){
		    						if(data.result==true){
		    							showError("",$("#realName1"));
		    							showError("",$("#cardNo1"));
		    							realNameFlag = true;
		    						}else{
		    							realNameFlag = false;
		    							if(data.code == 1){
		    								$("#realName1").val("");
		    								showError(data.msg,$("#realName1"));
		    							}else{
		    								$("#cardNo1").val("");
		    								showError(data.msg,$("#cardNo1"));
		    							}
		    						}
		    					}
		    				});
						}
					}
				}else{
					realNameFlag = true;
				}
				if(realNameFlag == true){
					require.async('jquery.form',function(){
						$(form).ajaxSubmit(function(data){
							if(data.result == true)
							{
								if(data.code == "020"){//手机方式成功
									$("#find_pwd2_email").attr({style:"display:none;"});
									$("#find_pwd3").attr({style:""});
								}
							} else {
								showError(data.msg,$("#meailValidCode"));
								//alerts(data.msg,data.msg,false);
								$("input[name='validCode']").val('');
								if(data.msg == "用户名格式错误！")
								{
									$(".reg_table li:eq(1)").find(".msg_tip").html('<label id="customTest-error" class="error" for="customTest">用户名格式错误！</label>');
								}
								else if(data.msg == "验证码错误！")
								{
									$(".reg_table li:eq(6)").find(".msg_tip").html('<label id="customTest-error" class="error" for="customTest">验证码错误！</label>');
								}
								else if(data.msg == "手机已经被使用.")
								{
									$(".reg_table li:eq(2)").find(".msg_tip").html('<label id="customTest-error" class="error" for="customTest">手机已经存在！</label>');
								}
								$(".valicode_img").each(function(){$(this).attr("src",'/validimg.html?t=' + Math.random());})
							}
						});
					});
				}
			}  
			});
			//找回密码第三步、重置密码
			$("#findStepfrom3").validate({
			rules: {
				password:{
					required: true,
					regexPassword:true 
				},
				confirmNewPwd:{
					required: true,
					equalTo: "#newPwd"
				}
			},
			messages:{
				password:{
					required: "8到16位的密码，且至少包含英文和数字" ,
					regexPassword:'8到16位的密码，且至少包含英文和数字'
				},
				confirmNewPwd:{
					required: "请输入确认密码",
					equalTo: "两次输入密码不一致"
				}
			},
			errorPlacement:function(error, element){
				//element.next().html(error.text()) ;
				/*alert(element.attr("name"));*/
				
				if(error.text()==""){
					element.parent().find("i").html("") ;
					element.parent().find("i").hide();
					element.css({border:"1px solid #cccccc"});
				}else{
					element.parent().find("i").html(error.text()) ;
					element.parent().find("i").show();
					element.css({border:"1px solid #FA9494"});
				}
			},
			success:function(element){
			},
			submitHandler: function(form,event,validator) 
			{    
				
				require.async('jquery.form',function(){
					$(form).ajaxSubmit(function(data){
						if(data.result == true)
						{
							if(data.code == "030"){
								$("#find_pwd3").attr({style:"display:none;"});
								$("#find_pwd4").attr({style:""});
							}
						} else {
							showError(data.msg,$("#newPwd"));
							//alerts(data.msg,data.msg,false);
							$("input[name='validCode']").val('');
							if(data.msg == "用户名格式错误！")
							{
								$(".reg_table li:eq(1)").find(".msg_tip").html('<label id="customTest-error" class="error" for="customTest">用户名格式错误！</label>');
							}
							else if(data.msg == "验证码错误！")
							{
								$(".reg_table li:eq(6)").find(".msg_tip").html('<label id="customTest-error" class="error" for="customTest">验证码错误！</label>');
							}
							else if(data.msg == "手机已经被使用.")
							{
								$(".reg_table li:eq(2)").find(".msg_tip").html('<label id="customTest-error" class="error" for="customTest">手机已经存在！</label>');
							}
							$(".valicode_img").each(function(){$(this).attr("src",'/validimg.html?t=' + Math.random());})
						}
					});
				});
				
			}  
			});
			
			
		});
	});
	//["qq.com","gmail.com","126.com","163.com","hotmail.com","yahoo.com","yahoo.com.cn","live.com","sohu.com","sina.com"]	
	//点击登录邮箱地址
    function loginEmail(emailValue){
    	var loginEmailBox = $("#loginEmail");
    	var loginEmailValue = "";
    	emailValue = (emailValue.split("@"))[1];
    	switch (emailValue)
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
    	return "http://"+loginEmailValue;
    } 
});
