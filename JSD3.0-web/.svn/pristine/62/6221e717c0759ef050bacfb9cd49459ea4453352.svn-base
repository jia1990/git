define(function(require,exports,module){
	require('jquery');
	$(function(){
		$(".c_aside_nav").height($(".c_deal_record").height());
		$(".c_deal_menu li").click(function(){
			var index=$(this).index();
			$(this).addClass("c_menu_this").siblings().removeClass("c_menu_this");
			$(".c_deal_operate").eq(index).show().siblings().hide();	
		})
		$(".c_safe_update").toggle(function(){
			$(this).css({background:"#129CDC",color:"#fff"});
			$(".c_safe_repwd").slideDown().show();
		},function(){
			$(this).css({background:"#fff",color:"#129CDC"});
			$(".c_safe_repwd").slideUp().hide();
		})
	}) ;
	require.async('/plugins/jquery-validation-1.13.0/jquery.validate.min',function(){
		require.async('/plugins/jquery-validation-1.13.0/additional-methods',function(){
			//-登录密码修改验证
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
						regexPassword:"<i class=\"iconfont\">&#xe614;</i>原密码格式错误"
					},
					newPwd:{
						required: "至少8到16位英文和数字",
						regexPassword:'<i class=\"iconfont\">&#xe614;</i>至少8到16位英文和数字'
					},
					confirmNewPwd: {
						required: "请再输一次新密码",
						equalTo: "<i class=\"iconfont\">&#xe614;</i>两次密码不一致"
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
	    						$("#modifyPwdForm span:eq(0)").html('<i class=\"iconfont\">&#xe614;</i><em>'+data.msg+'</em>');
	    					}
	    					else
	    					{
	    						$("#modifyPwdForm")[0].reset();
	    						$("#modifyPwdForm").hide();
	    						$(".successMsg").html('<em style="color:#6DBA2C;">登录密码修改成功！</em>')
	    					}
		    			});
	    			});
		        } 
			})
			//-E登陆密码修改验证
		});
	})
	
});