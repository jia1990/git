define(function(require, exports, module) {
	require('jquery');
	require('alert');
	//获取真实身份信息
	$.ajax({
		type:"post",
		url:"/member/info/realityInformation.html?id="+Math.random(),
		dataType:"json",
		success:function(json){
		
		var cardNo = json.cardNo;
		var birthday = json.birthday;
		var address = json.address;
		var sex = json.sex;
		
		$("#birthday").html(birthday);
		$("#address").html(address);
		$("#sex").html(sex);
		$("#cardNo").html(cardNo);
		}
		});
	
	 $("#alterFace").click(function(){ $("#deal").css("display","none");
	 $("#face").css("display","block"); });
	 //用户昵称失去焦点
	 $(".nickName").blur(function() {
		 nickNameCheck(this);
		});
	

	//温馨提示
	$(".y_assessmentdlstitle").hover(function(){
		$(this).next(".y_tooltips").show();
	},function(){
		$(this).next(".y_tooltips").hide();
	})
	function showError(error, element , thisElement){
		$(element).html(
		"<font color='red'>" +error+ "</font>");
		$(thisElement).css("border","1px solid #fa9494");
		$(element).css("display","block");
	}
	 function nickNameCheck(thisElement) {
		var nickName = $(".nickName").val();
		if (nickName == null || nickName == "") {
			$("#nickName").html(
					"<font color='red'>请输入昵称！</font>");
			$(thisElement).css("border","1px solid #fa9494");
			$("#nickName").css("display","block");
			return false;
		} 
		return true;
	}
	 function secondContactRealnameCheck(thisElement) {
			var parttern = /^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/;
			var realName = $(".secondContactRealname").val();
			if (realName == null || realName == "") {
				$("#secondContactRealname").html(
						"<font color='red'>请输入联系人姓名！</font>");
				$(thisElement).css("border","1px solid #fa9494");
				$("#secondContactRealname").css("display","block");
				return false;
			} else if (!parttern.test(realName)) {
				$("#secondContactRealname").html(
						"<font color='red'>请输入正确的联系人姓名(英文或汉字)！</font>");
				$(thisElement).css("border","1px solid #fa9494");
				$("#secondContactRealname").css("display","block");
				return false;
			}
			return true;
		}

		function secondContactPhoneCheck(thisElement) {
			var phone = $(".secondContactPhone").val();
			var reg = /^[1][358]\d{9}$/; // 验证手机号码
			var a = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|(^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$)/;
			if (phone == null || phone == "") {
				$("#secondContactPhone").html("<font color='red'>请输入联系人号码！</font>");
				$(thisElement).css("border","1px solid #fa9494");
				$("#secondContactPhone").css("display","block");
				return false;
			} else if ((!reg.test(phone)) && (!a.test(phone))) {
				$("#secondContactPhone").html(
						"<font color='red'>请输入正确的联系人号码！</font>");
				$(thisElement).css("border","1px solid #fa9494");
				$("#secondContactPhone").css("display","block");
				return false;
			} 
			return true;
		}

		function relationshipsCheck(thisElement) {
			var parttern = /^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/;
			var relationships = $(".relationships").val();
			if (relationships == null || relationships == "") {
				$("#relationships").html("<font color='red'>请输入与联系人关系！</font>");
				$(thisElement).css("border","1px solid #fa9494");
				$("#relationships").css("display","block");
				return false;
			} else if (!parttern.test(relationships)) {
				$("#relationships").html("<font color='red'>请输入正确的关系！</font>");
				$(thisElement).css("border","1px solid #fa9494");
				$("#relationships").css("display","block");
				return false;
			}
			return true;

		}
		require.async(['/plugins/layer-v1.8.4/skin/layer.css','/plugins/layer-v1.8.4/layer.min'],function(){
		
	 //根据是否已经添加紧急联系人判断进行的那种操作
		$.ajax({
			url:"/member/info/detailContacts.html",
			type:"post",
			success:function(json){	
				if(json.uc.secondContactRealname !=null && json.uc.secondContactPhone !=null && json.uc.relationships!=null  
						&& json.uc.secondContactRealname !="" && json.uc.secondContactPhone !="" && json.uc.relationships!=""){
					$(".ContactsNext").append("<div><label class='y_input_labels' style='width:100px;'>紧急联系人：</label><i class='secondContactRealnameDiv'>"+json.uc.secondContactRealname+"</i>&nbsp&nbsp&nbsp&nbsp"+
					"<span class='updateContacts' style='cursor:default;color:#246bad;'>修改</span></div><input type='button' style='margin-bottom:76px;' value='保存' class='y_submits_part'/>");
					$(".updateContacts").click(function(){
						$(".y_submits_part").css("display","none");
						$(".updateContacts").css("display","none");
						verifyOf3Way();
					})
					
						  $(".y_submits_part").click(function(){
									var nickName = $(".nickName").val();
									var  maritalStatus =$('input:radio:checked').val();
									var  professional =$('.widthheight option:checked').val();
									if(nickNameCheck($(".nickName"))){
										$.ajax({
											url:"/member/info/detailUpdate.html",
											type:"post",
											data:{
												nickName:nickName,
												maritalStatus : maritalStatus,
												professional :professional
											},
											success:function(result){	
												if(result.result){
													layer.msg("保存成功！", 1, -1);		
													window.location.reload();
												}else{
													if(result.msg == "昵称不能与用户名相同"){
														showError(result.msg,$("#nickName"),$(".nickName"));
													}
												}
												
										    }
										});
									}
					    })
				}else{
					//没有设置紧急联系人
					require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
			            require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){      	
			           
						$(".ContactsNext").append(Handlebars.compile(require("../../tpl/member/ContactsInfo.tpl"))(json));
						var   secondContactRealname = $(".secondContactRealname").val();
						var   secondContactPhone = $(".secondContactPhone").val();
						var   relationships = $(".relationships").val();
						 //紧急联系人失去焦点
						$(".secondContactRealname").blur(function() {
							var flag =  secondContactRealnameCheck(this);
							if(flag){
								$(this).css("border","1px solid #c9c9cf");
								$("#secondContactRealname").css("display","none");
							}
						});
						 //紧急联系人电话失去焦点
						$(".secondContactPhone").blur(function() {
							var flag = secondContactPhoneCheck(this);
							if(flag){
								$(this).css("border","1px solid #c9c9cf");
								$("#secondContactPhone").css("display","none");
							}
						});
						 //与本人关系失去焦点
						$(".relationships").blur(function() {
							var flag =  relationshipsCheck(this);
							if(flag){
								$(this).css("border","1px solid #c9c9cf");
								$("#relationships").css("display","none");
							}
							
						});
						//表单提交
					     $(".y_submits").click(function() {
							var nickName = $(".nickName").val();
							var  maritalStatus =$('input:radio:checked').val();
							var  professional =$('.widthheight option:checked').val();
							var   secondContactRealname = $(".secondContactRealname").val();
							var   secondContactPhone = $(".secondContactPhone").val();
							var   relationships = $(".relationships").val();
							
							if(nickNameCheck($(".nickName"))&&secondContactRealnameCheck( $(".secondContactRealname"))&&secondContactPhoneCheck($(".secondContactPhone"))&&relationshipsCheck($(".secondContactPhone"))){
								$.ajax({
									url:"/member/info/detailUpdate.html",
									type:"post",
									data:{
										nickName:nickName,
										maritalStatus : maritalStatus,
										professional :professional,
										secondContactRealname  : secondContactRealname,
										secondContactPhone : secondContactPhone,
										relationships : relationships
									},
									success:function(result){	
										if(result.result){
											layer.msg("保存成功！", 1, -1);		
											window.location.reload();
										}else{
											if(result.msg == "昵称不能与用户名相同"){
												showError(result.msg,$("#nickName"),$(".nickName"));
											}
										}
										
								    }
								});
									
								
							}
					    				
						})
						
			            })
					})
				}
				
		    }
		});
		
		
		});
		
	
		//修改紧急联系人的三种校验认证
		function   verifyOf3Way(){
		$.ajax({
			type:"post",
			url:"/member_borrow/account/findPaypwd.html",
			dataType:"json",
			success:function(json){
				require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
		            require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){      	
		            //  修改紧急联系人信息
		            $(".ContactsNext").append(Handlebars.compile(require("../../tpl/member/updateContacts.tpl"))(json));
					//修改紧急联系人信息方式切换
					$(".c_find_way dd").eq(0).children().attr("checked",true);
					$(".c_find_way dd").click(function(){
						var index=$(this).index(".c_find_way dd");
						if(index==1){
							if(json.email==null || json.email==""){
								alerts("认证信息提示","<div style='display:block;text-align:center;font-size: 18px;'>请先进行邮箱认证</div><br><a href='/user/activeEmail.html' style='margin-right:40px;'>邮箱验证</a><a href='javascript:void(0);' class='y_alertsBoxButton cancelButton' style='background:#ddd;color:#333;'>取消</a>",400,200);
								$(".cancelButton").click(function(){
									$(".c_finds").hide();
									$(".c_find_way dd").eq(0).children().attr("checked",true);
									$(".c_finds").eq(0).show();
									
									
								});
								$(".y_alertsBoxButton").click(function(){
									$(".c_finds").hide();
									$(".c_find_way dd").eq(0).children().attr("checked",true);
									$(".c_finds").eq(0).show();
									
								});
							}else{
								$(".c_finds").hide();
								$(this).children().attr("checked",true);
								$(".c_finds").eq(index).show();
								}
						}else if(index ==2){
							$.ajax({
								type:"post",
								url:"/member_borrow/security/getQuestion.html",
								dataType:"json",
								success:function(json){
									if(!json.size>0){
										$.alert("密保问题尚未设置，请先设置密保问题","提示",function(){},true);
										$(".ok_btn").click(function(){
											$(this).attr("href","/member/useridentify/identify.html");
										})
									}else{
										$(".c_finds").hide();
										$(".c_find_way dd input").eq(2).attr("checked",true);
										$(".c_finds").eq(index).show();
										
									}
								}
							})
							
						}else{
						$(".c_finds").hide();
						$(this).children().attr("checked",true);
						$(".c_finds").eq(index).show();
						}
					})
					$(".ppgetcode").parent().next().hide();
					$(".ppgetcode").parent().next().next().hide();
					
					// 密保问题回答后提交 
					$(".que_one_next").click(function(){
						var answer = $("#queanswer").val() ;
						if(answer!=""){
							$.ajax({
								type:"post" ,
								url:"/member_borrow/account/checkQuestion.html",
								data:{answer:answer},
								datatype:"json",
								success:function(json){
									if(json.result){
										$.ajax({
											url:"/member/info/detailContacts.html",
											type:"post",
											success:function(json){	
												//进入第二步
												$(".que_one_next").parent().parent().parent().next().show() ;
												$(".que_one_next").parent().parent().parent().next().find(".c_pwd_error").show() ;
												$(".que_one_next").parent().parent().parent().hide();
												$("#my_que_form .secondContactRealname").val(json.uc.secondContactRealname);
												$("#my_que_form .secondContactPhone").val(json.uc.secondContactPhone);
												$("#my_que_form .relationships").val(json.uc.relationships);
												
												//  密保验证通过后，提交新交易密码
												require.async('/plugins/jquery-validation-1.13.0/jquery.validate.min',function(){
													require.async('/plugins/jquery-validation-1.13.0/additional-methods',function(){
														
														jQuery.validator.addMethod("emomc", function(value, element) {       
															  var length = value.length;   
															   var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1}))+\d{8})$/;   
															   return this.optional(element) || (length == 11 && mobile.test(value));       
														}, "请填写正确的手机号码"); 
														jQuery.validator.addMethod("scrnc", function(value, element) {       
															   var parttern = /^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/;
															   return this.optional(element) || (parttern.test(value));       
														}, "请输入正确的联系人姓名"); 
														
														jQuery.validator.addMethod("rlspc", function(value, element) {       
															  var parttern = /^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/;  
															   return this.optional(element) || (parttern.test(value));       
														}, "请输入正确的关系！"); 
														$("#my_que_form").validate({
															rules:{
																secondContactRealname:{
																	required:true,
																	scrnc:true
																},
																secondContactPhone:{
																	required:true,
																	emomc:true
																},
																relationships:{
																	required:true,
																	rlspc:true
																}
															},
															messages:{
																secondContactRealname:{
																	required: "请输入联系人姓名！",
																	scrnc:"请输入正确的联系人姓名"
																},
																secondContactPhone: {
																	required: "请输入联系人号码！",
																	emomc: "请输入正确的联系人号码！"
																},
																relationships:{
																	required:"请输入与联系人关系！",
																	rlspc:"请输入正确的关系！"
																}
															},
															errorElement:'div',
															errorPlacement:function(error,element){
																  if(error.text()==""){
																		if(element.attr("name")=='secondContactRealname'){
																			element.next().html("");
																			element.next().css("display","none");
																			 element.css("border","1px solid #c9c9cf");
																		}
																		if(element.attr("name")=='secondContactPhone'){
																			element.next().html("");
																			element.next().css("display","none");
																			 element.css("border","1px solid #c9c9cf");
																		}
																		if(element.attr("name")=='relationships'){
																			element.next().html("");
																			element.next().css("display","none");
																			 element.css("border","1px solid #c9c9cf");
																		}
																	}else{
																   
																	   if(element.attr("name")=='secondContactRealname'){
																		   element.next().html(error.text());
																		   element.next().css("display","block");
																			element.css("border","1px solid #fa9494");
																			
																	   }
																	   if(element.attr("name")=='secondContactPhone'){
																		   element.next().html(error.text());
																		   element.next().css("display","block");
																		   element.css("border","1px solid #fa9494");
																	   }
																	   if(element.attr("name")=='relationships'){
																		   element.next().html(error.text());
																		   element.next().css("display","block");
																		   element.css("border","1px solid #fa9494");
																	   }
																	}
														    },
														    success:function(label){
														    },  
														    submitHandler:function(form){
												    			require.async('jquery.form',function(){
												    				$(form).ajaxSubmit(function(data){
												    					if(data.result){
												    						$(".secondContactRealnameDiv").html($(".secondContactRealnameQue").val());
												    						$("#my_que_form").parent().parent().next().show();
																			$("#my_que_form").parent().parent().hide();
												    					}else{
												    						//alert(data.msg);
												    						$.alert(data.msg,"提示",function(){},true);
												    					}
													    			});
												    			});
													        } 
														})
													})
												}) ;
													}
										
										});
									}else{
										$(".c_qa_msg").html(json.msg);
									}
								}
							});
						}else{
							$(".c_qa_msg").html("请填写密保问题答案！");
						}
					}) ;
					
					
					// 通过手机修改紧急联系人信息发送验证码
					var validCode=true;//获取验证码状态
					var smsflag = "sms";
					
					$(".ppgetcode").click(function(){
						var getCodeText = "获取短信验证码";
						var time=120;
						if (validCode) {
							if($(".ppgetcode").html() == "获语音验证码"){
								smsflag = "voice" ;
								getCodeText = "获取短信验证码";
							}else if($(".ppgetcode").html() == "获取短信验证码"){
								smsflag = "sms" ;
								getCodeText = "获取短信验证码";
							}
							$.ajax({
								type:"post",
								url:"/member/info/sendMobileMsg.html?flag="+smsflag,
								dataType:"json",
								success:function(json){
									//  发送成功
									if(json.result){
										$(".ppgetcode").parent().find(".c_no_recieve").hide();
										$(".ppgetcode").next().next().hide();
										$(".ppgetcode").parent().find(".c_code_msg").show();
										$(".ppgetcode").parent().next().show();
										$(".ppgetcode").parent().next().next().show();
										// 手机修改紧急联系人信息验证码提交
									}else{
										
										$.alert(json.msg,"提示",function(){},true);
									}
								}
							});
							validCode=false;
							var t=setInterval(function () {
							time--;
								$(".ppgetcode").html(time+"秒后重新获取");
								if (time==0) {
									clearInterval(t);
									$(".ppgetcode").html(getCodeText);
									validCode=true;
								}
							},1000)
						}
					})
					//  通过手机验证修改联系人    现校验验证码
					$(".mobile_next").click(function(){
						var code = $("#mobilecode").val();
						if(code!=""){
							$.ajax({
								type:"get",
								url:"/member/info/verifyContactsMobileCode.html?code="+code,
								dataType:"json",
								success:function(json){
									//  发送成功
									if(json.result){
										$.ajax({
											url:"/member/info/detailContacts.html",
											type:"post",
												success:function(json){	
										  // 进入第二步
											$(".mobile_next").parent().parent().parent().next().show();
											$(".mobile_next").parent().parent().parent().hide();
											$(".c_mobile_pwd").next("span").css({display:"inline-block"})
											$(".c_mobile_repwd").next("span").css({display:"inline-block"});
											$("#my_m_form .secondContactRealname").val(json.uc.secondContactRealname);
											$("#my_m_form .secondContactPhone").val(json.uc.secondContactPhone);
											$("#my_m_form .relationships").val(json.uc.relationships);
											
											require.async('/plugins/jquery-validation-1.13.0/jquery.validate',function(){
												require.async('/plugins/jquery-validation-1.13.0/additional-methods',function(){
													jQuery.validator.addMethod("emomc", function(value, element) {       
														  var length = value.length;   
														   var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1}))+\d{8})$/;   
														   return this.optional(element) || (length == 11 && mobile.test(value));       
													}, "请填写正确的手机号码"); 
													jQuery.validator.addMethod("scrnc", function(value, element) {       
														   var parttern = /^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/;
														   return this.optional(element) || (parttern.test(value));       
													}, "请输入正确的联系人姓名"); 
													
													jQuery.validator.addMethod("rlspc", function(value, element) {       
														  var parttern = /^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/;  
														   return this.optional(element) || (parttern.test(value));       
													}, "请输入正确的关系！"); 
													$("#my_m_form").validate({
														rules:{
															secondContactRealname:{
																required:true,
																scrnc:true
															},
															secondContactPhone:{
																required:true,
																emomc:true
															},
															relationships:{
																required:true,
																rlspc:true
															}
														},
														messages:{
															secondContactRealname:{
																required: "请输入联系人姓名！",
																scrnc:"请输入正确的联系人姓名"
															},
															secondContactPhone: {
																required: "请输入联系人号码！",
																emomc: "请输入正确的联系人号码！"
															},
															relationships:{
																required:"请输入与联系人关系！",
																rlspc:"请输入正确的关系！"
															}
														},
														errorElement:'div',
														errorPlacement:function(error,element){
															  if(error.text()==""){
																	if(element.attr("name")=='secondContactRealname'){
																		$("#secondContactRealname").html("");
																		$("#secondContactRealname").css("display","none");
																		 element.css("border","1px solid #c9c9cf");
																	}
																	if(element.attr("name")=='secondContactPhone'){
																		$("#secondContactPhone").html("");
																		 $("#secondContactPhone").css("display","none");
																		 element.css("border","1px solid #c9c9cf");
																	}
																	if(element.attr("name")=='relationships'){
																		$("#relationships").html("");
																		 $("#relationships").css("display","none");
																		 element.css("border","1px solid #c9c9cf");
																	}
																}else{
															   
																   if(element.attr("name")=='secondContactRealname'){
																		$("#secondContactRealname").html(error.text());
																		$("#secondContactRealname").css("display","block");
																		element.css("border","1px solid #fa9494");
																		
																   }
																   if(element.attr("name")=='secondContactPhone'){
																	   $("#secondContactPhone").html(error.text());
																	   $("#secondContactPhone").css("display","block");
																	   element.css("border","1px solid #fa9494");
																   }
																   if(element.attr("name")=='relationships'){
																	   $("#relationships").html(error.text());
																	   $("#relationships").css("display","block");
																	   element.css("border","1px solid #fa9494");
																   }
																}
													    },
													    success:function(label){
													    },  
													    submitHandler:function(form){
											    			require.async('jquery.form',function(){
											    				$(form).ajaxSubmit(function(data){
											    					if(data.result){
											    						$(".secondContactRealnameDiv").html($(".secondContactRealname").val());
											    						$("#my_m_form").parent().parent().next().show();
																		$("#my_m_form").parent().parent().hide();
											    					}else{
											    						$.alert(data.msg,"提示",function(){},true);
											    					}
												    			});
											    			});
												        } 
													})
												})
											}) ;
										}
									});
								}else{
									//alert(json.msg);
									$.alert(json.msg,"提示",function(){},true);
								}
							}
						});
						}else{
							$.alert("请输入验证码","提示",function(){},true);
						}
					})
					var validEmailCode=true;//获取验证码状态
					// 邮箱找回交易密码发送验证码
		
					$(".sendemailmsg").click(function(){
						var time=120;
						if (validEmailCode) {
							getCodeText = "获取邮件验证码";
							validEmailCode=false;
							var t = setInterval(function () {
							time--;
								$(".sendemailmsg").html(time+"秒后重新获取");
								if (time==0) {
									clearInterval(t);
									$(".sendemailmsg").html(getCodeText);
									validEmailCode=true;
								}
							},1000)
							$.ajax({
								type:"post",
								url:"/member/info/sendContactsEmailMsg.html",
								dataType:"json",
								success:function(json){
									//  发送成功
									if(!json.result){
										//alert(json.msg) ;
										$.alert(json.msg,"提示",function(){},true);
									}
								}
							});
						}
					})
					// 邮箱修改紧急联系人信息验证码提交
					
					
	            	
					$(".email_next").click(function(){
						var code = $("#emailcode").val() ;
						if(code!=""){
								$.ajax({
									type:"get",
									url:"/member/info/verifyContactsEmailCode.html?code="+code,
									dataType:"json",
									success:function(json){
										//  发送成功
										if(json.result){
											$.ajax({
												url:"/member/info/detailContacts.html",
												type:"post",
													success:function(json){	
												// 进入第二步
													$(".email_next").parent().parent().next().show();
													$(".email_next").parent().parent().hide();
													$(".c_mobile_pwd").next("span").css({display:"inline-block"})
													$(".c_mobile_repwd").next("span").css({display:"inline-block"});
													$("#my_e_form .secondContactRealname").val(json.uc.secondContactRealname);
													$("#my_e_form .secondContactPhone").val(json.uc.secondContactPhone);
													$("#my_e_form .relationships").val(json.uc.relationships);
													require.async('/plugins/jquery-validation-1.13.0/jquery.validate.min',function(){
														require.async('/plugins/jquery-validation-1.13.0/additional-methods',function(){
															jQuery.validator.addMethod("emomc", function(value, element) {       
																  var length = value.length;   
																   var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1}))+\d{8})$/;   
																   return this.optional(element) || (length == 11 && mobile.test(value));       
															}, "请填写正确的手机号码"); 
															jQuery.validator.addMethod("scrnc", function(value, element) {       
																   var parttern = /^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/;
																   return this.optional(element) || (parttern.test(value));       
															}, "请输入正确的联系人姓名"); 
															
															jQuery.validator.addMethod("rlspc", function(value, element) {       
																  var parttern = /^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/;  
																   return this.optional(element) || (parttern.test(value));       
															}, "请输入正确的关系！"); 
															$("#my_e_form").validate({
																rules:{
																	secondContactRealname:{
																		required:true,
																		scrnc:true
																	},
																	secondContactPhone:{
																		required:true,
																		emomc:true
																	},
																	relationships:{
																		required:true,
																		rlspc:true
																	}
																},
																messages:{
																	secondContactRealname:{
																		required: "请输入联系人姓名！",
																		scrnc:"请输入正确的联系人姓名"
																	},
																	secondContactPhone: {
																		required: "请输入联系人号码！",
																		emomc: "请输入正确的联系人号码！"
																	},
																	relationships:{
																		required:"请输入与联系人关系！",
																		rlspc:"请输入正确的关系！"
																	}
																},
																errorElement:'div',
																errorPlacement:function(error,element){
																	  if(error.text()==""){
																			if(element.attr("name")=='secondContactRealname'){
																				element.next().html("");
																				element.next().css("display","none");
																				 element.css("border","1px solid #c9c9cf");
																			}
																			if(element.attr("name")=='secondContactPhone'){
																				element.next().html("");
																				element.next().css("display","none");
																				 element.css("border","1px solid #c9c9cf");
																			}
																			if(element.attr("name")=='relationships'){
																				element.next().html("");
																				element.next().css("display","none");
																				 element.css("border","1px solid #c9c9cf");
																			}
																		}else{
																	   
																		   if(element.attr("name")=='secondContactRealname'){
																			   element.next().html(error.text());
																			   element.next().css("display","block");
																				element.css("border","1px solid #fa9494");
																				
																		   }
																		   if(element.attr("name")=='secondContactPhone'){
																			   element.next().html(error.text());
																			   element.next().css("display","block");
																			   element.css("border","1px solid #fa9494");
																		   }
																		   if(element.attr("name")=='relationships'){
																			   element.next().html(error.text());
																			   element.next().css("display","block");
																			   element.css("border","1px solid #fa9494");
																		   }
																		}
															    },
															    success:function(label){
															    },  
															    submitHandler:function(form){
													    			require.async('jquery.form',function(){
													    				$(form).ajaxSubmit(function(data){
													    					if(data.result){
													    						$(".secondContactRealnameDiv").html($(".secondContactRealnameEmail").val());
													    						$("#my_e_form").parent().parent().next().show();
																				$("#my_e_form").parent().parent().hide();
													    					}else{
													    						$.alert(data.msg,"提示",function(){},true);
													    					}
														    			});
													    			});
														        } 
															})
														})
													}) ;
											}
										})
											}else{
												$.alert(json.msg,"提示",function(){},true);
											}
									}
								});
						}else{
							$.alert("请输入验证码","提示",function(){},true);
						}
					})
				  });	          
	            });
			}
		
		})
		}
		

});