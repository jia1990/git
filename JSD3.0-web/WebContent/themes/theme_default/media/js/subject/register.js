define(function(require,exports,module){
	require('jquery');	
	require('jquery.form');	
	require('alert');
	
	$(".numLists").css({width:$(".numLists span").length*45+"px"});
	var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1}))+\d{8})$/; 
	var username = /^([a-zA-Z0-9_]){4,16}$/;
	var password = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%\^&*?]{8,16}$/;
	$(".Now_re_y").click(function(){
			var flag = 0;
			if($("#mobile").val() == ""){
				$.alert("手机号不能为空","提示",function(){},true);
			}else if(!mobile.test($("#mobile").val())){
				$.alert("手机号输入有误","提示",function(){},true);
			}else{
				$.ajax({
					url:"/user/checkMobilePhone.html",
					type:"post",
					data:"mobilePhone="+$("#mobile").val(),
					success:function(data){
						if(data){
							flag = flag+1;
							//用户名校验
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
											flag = flag+1;
											//密码校验
											if($("#password").val() == ""){
												$.alert("密码不能为空","提示",function(){},true);
											}else if(!password.test($("#password").val())){
												$.alert("密码格式有误，格式为数字加字母或者字符两种以上的在字符","提示",function(){},true);
											}else {
												flag = flag+1;
												//确认密码校验
												if ($("#confirmPassword").val() == "") {
													$.alert("确认密码不能为空","提示",function(){},true);
												}else if(!password.test($("#confirmPassword").val())){
													$.alert("确认密码格式有误，格式为数字加字母或者字符两种以上的在字符","提示",function(){},true);
												} else if ($("#confirmPassword").val() != $("#password").val()) {
													$.alert("两次密码不一致","提示","提示",function(){},true);
												} else {
													flag = flag+1;
													if (flag == 4) {
														$("#signupForm").ajaxSubmit(function(data) {
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
										}else{
											$.alert("用户名被占用","提示",function(){},true);
										}
									}
								})
							}
						}else{
							$.alert("手机号被占用","提示",function(){},true);
						}
					}
				})
			}
			
			//$.alert("用户名格式错误,长度为4到16位,由英文、数字、_组成,且不能为纯数字","提示",function(){},true);
		});
	/*$(".Now_re_y").click(function(){
		$("#signupForm").submit();
	});*/
	//表单验证
	/*require.async('/plugins/jquery-validation-1.13.0/jquery.validate',function(){
		require.async('/plugins/jquery-validation-1.13.0/additional-methods',function(){
			jQuery.validator.addMethod("emomc", function(value, element) {       
				  var length = value.length;   
				   var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1}))+\d{8})$/;   
				   var email = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/ ;
				   var username = /^([a-zA-Z0-9_]|[\u0391-\uFFE5]){2,15}$/;
				   return this.optional(element) || (length == 11 && mobile.test(value) && value != "请输入手机号码");       
			}, "请填写正确的手机号码"); 
			
			jQuery.validator.addMethod("checkUserName", function(value, element) {       
				var flag;
				var length = value.length;   
				var username = /^([a-zA-Z0-9_]){4,16}$/;
				var number =/^[0-9]{4,16}$/;
				return (value != "请输入用户名") && username.test(value) && !number.test(value);
			}, "用户名格式错误,长度为4到16位,由英文、数字、_组成,且不能为纯数字"); 
			jQuery.validator.addMethod("vcodenovalue", function(value, element) {    
				   return this.optional(element) || !(value == "验证码");       
			}, "验证码不能为空"); 
			$("#signupForm").validate({
				rules: {
					userName:{
				  		required:true,
				  		checkUserName:true,
						remote:{
							type: "POST",
							url: "/user/checkUsername.html",
							dataType: "json",
							data:{userName: function(){return $("#username").val();}}
						}
					},
					emom: {
						required: true,
						emomc:true,
						remote:{
							type: "POST",
							url: "/user/checkUserNameType.html",
							dataType: "json",
							data:{emom: function(){return $("#mobile").val();}}
						}
			   		},
				   password: {
							required: true,
							regexPassword:true
				   },
					confirmPassword: {
						required: true,
						equalTo: "#password"
				   },
				   validCode:{
				   		required:true,
				   		vcodenovalue:true 
				   }
				},
				messages:{
				   	userName:{
							required:"用户名不能为空",
							regexUserName:"用户名格式错误,长度为4到16位,由英文、数字、_组成,且不能为纯数字",
							remote:"该用户名已经存在"
					   },
				    emom: {
							required: "手机号不能为空",
							emomc: "请输入正确的手机号",
							remote:"手机号已存在"
						   },
					password: {
							required: "密码不能为空" ,
							regexPassword:'密码格式错误,长度为8到16位,必须包含英文、数字'
						},
				   confirmPassword: {
							required: "请输入确认密码",
							equalTo: "两次输入密码不一致"
						},
					validCode:{
				   			required:"请输入验证码",
				   			vcodenovalue:"验证码不能为空"
				   	}
				},
				errorPlacement:function(error, element){
					
					if(error.text()==""){
						element.css({border:"1px solid #cccccc"});
					}else{
						$.alert(error.text());
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
					    		  location.href = "/user/register.html?activity=register&mobile=" + $("#mobile").val();
				    		  } else {
				    			  	alerts(data.msg,data.msg,true);
					    		  	$("#validCode").val("");
					    			$("#img").each(function(){$(this).attr("src",'/validimg.html?t=' + Math.random());});
				    		  }
				        });
				   	})
				}  
			});
		})
	})*/
});