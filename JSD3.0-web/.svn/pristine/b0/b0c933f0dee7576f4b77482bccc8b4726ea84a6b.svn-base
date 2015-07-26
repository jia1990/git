define(function(require, exports, module) {
	require('jquery');
	require('alert');
	
	/*
	 * 2014.12.12
	 * 李建云
	 * 表单验证及提交
	 * 
	 * */ 
	/*$(".y_submits").click(function(){
		$(this).hide();
		$.alert("<div style='margin:0 100px;'>" +
					"<img width=18 src='../../../themes/theme_default/images/loading.gif'/> " +
					"&nbsp;正在处理请稍候</div>","提示",function(){},false);
	});*/
	require.async('/plugins/jquery-validation-1.13.0/jquery.validate',function(){
		require.async('/plugins/jquery-validation-1.13.0/additional-methods',function(){
			require.async(['/plugins/poshytip/tip-yellowsimple/tip-yellowsimple.css','/plugins/poshytip/jquery.poshytip.min'],function(){
				require.async(['/plugins/layer-v1.8.4/skin/layer.css','/plugins/layer-v1.8.4/layer.min'],function(){
			$("#form").validate({
				
				rules:{
					realName:{
			    		required: true,
			    		realName:true
			    	},
			    	cardNo:{
			    		required: true,
			    		isIdCardNo:true,
						remote:{
							type: "get",
							//url: "/user/checkMobilePhone.html",
							url: "/member/useridentify/checkVerifyOkCardNo.html",
							data:{
								cardId: function(){
									return $("#cardId").val();
								}
							}
						}
			    		
			    	},
			    	files:{
			    		required: true,
			    		accept:true
			    	}
			    },
			    messages:{
			    	realName:{
			    		required: "请输入真实姓名",
			    		
			    		realName: "真实姓名格式不对"
			    	},
			    	cardNo:{
			    		required: "请输入身份证号码",
			    		isIdCardNo: "身份证格式不对",
			    		remote:"该身份证号已经存在"
			    	},
			    	files:{
			    		required: "请选择上传图片",
			    		accept:"请上传正确的图片"
			    	}
			   },
			 	
			   ignore: ".ignore",
			   errorPlacement:function(error,element){
					element.poshytip('hide');
					element.attr("title",error.html());
					element.poshytip({
						className: 'tip-yellowsimple',
						showOn: 'none',
						alignTo: 'target',
						alignX: 'right',
						alignY:'center',
						fade:false,
						slide:false,
						offsetX: 5,
						offsetY: 5,
						showTimeout: 100
					});
					element.poshytip('show');

				},
				success:function(element){
					element.poshytip('hide');
				},
				submitHandler:function(form){
	    			require.async('jquery.form',function(){
	    				$(form).ajaxSubmit(function(data){
	    					if(data.success){
	    						$.alert("上传成功,正在审核中","提示",function(){location.reload();},true);
	    						//layer.msg("上传成功", 1, -1);					
	    					}else{
	    						$.alert(data.msg,"提示",function(){location.reload();},true);
	    						//layer.msg(data.msg, 1, -1);
	    					}
	    					//location.reload();
		    			});
	    			});
		        }
			   
			});
				})
			})
		})
	})
	
	//加载身份证 正反面
	$.ajax({
		url:"/user/userRealnameApplication/getUserPic.html",
		type:"get",
		dataType:"json",
		success:function(data){
			
		if(data.success== true){
			var sHtml = '<img src="' + data.userRealnameApplication.positivePhoto + '" alt="" style="width:100px;height:100px;float:left;"></a>';
			var sHtml2 = '<img src="' + data.userRealnameApplication.reversePhoto + '" alt="" style="width:100px;height:100px;float:left;"></a>';				
			$("#positivePhoto").html(sHtml);
			$("#reversePhoto").html(sHtml2);	
		 }
		}
	});

});