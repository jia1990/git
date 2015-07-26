define(function(require,exports,module){
	require('jquery');
	require.async('/plugins/jquery-validation-1.13.0/jquery.validate.min',function(){
		require.async('/plugins/jquery-validation-1.13.0/additional-methods',function(){
			//-S登陆密码修改验证
			$("#modifyPwdForm").validate({
				rules:{
					pwd:{
						required:true,
						regexPassword:true
					},
					newPwd:{
						required:true,
						regexPassword:true
					},
					confirmNewPwd:{
						required:true,
						equalTo: "#password"
					}
				},
				messages:{
					pwd:{
						required:"请输入原密码",
						regexPassword:"原密码格式错误"
					},
					newPwd:{
						required: "至少8到16位英文和数字",
						regexPassword:'至少8到16位英文和数字'
					},
					confirmNewPwd: {
						required: "请再输一次新密码",
						equalTo: "两次密码不一致"
					  }
				},
				errorElement:'em',
				errorPlacement:function(error,element){
					element.next().html(error);
			    },
			    success:function(label){
			    },  
			    submitHandler:function(form){
	    			require.async('jquery.form',function(){
	    				$(form).ajaxSubmit(function(data){
	    					if(!data.result)
	    					{
	    						$("#modifyPwdBox ul li:eq(0) span").html('<em class="error">'+data.msg+'</em>');
	    					}
	    					else
	    					{
	    						$("#modifyPwdBox ul li:eq(0) span").html('<em class="error">登录密码修改成功！</em>');
	    						$("#modifyPwdForm")[0].reset();
	    					}
		    			});
	    			});
		        } 
			})
			//-E登陆密码修改验证
		});
	})

	//手风琴切换效果
	require.async('commonJS/jquery.accordion',function(){
		$(".setting dd").accordion({
			wrapBox    : ".setting",//最外围wrap元素
			titleBox   : ".setting_btn",//显示的标题
			contentBox : ".setting_form",//隐藏的内容
			hoverClass : "setting_btn_selected",//展示之后的样式
			isClick    : true  //默认点击展开
		});
	})

});