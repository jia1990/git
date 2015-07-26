define(function(require,exports,module){
	require('jquery');	
	//require('alert');	
	require('alertNew');	
	//查看邮箱认证是否都通过
	$.ajax({
		url:"/member/useridentify/emailStatus.html?randomTime=" + (new Date()).getTime(),
		type:"get",
		dataType:"json",
		success:function(data){
			if(data.result==false){
				alerts("认证提示",$(".pss").html(),"560","240");
				$(".y_alertsBoxButton").click(function(){
					window.location.href="/member/useridentify/identify.html";
				});
			}else {
				if(data.user.realName !=null &&  data.user.realName !='undefined' && data.user.cardNO !=null &&  data.user.cardNO !='undefined' && data.user.thirdPartyIsOpen=='N'){
					$(".y_input_name").attr("disabled","disabled");
					$("#cardId").attr("disabled","disabled");
					
				}
			}
		}
	})
	
	/*
	 * 如果后台审核资料通过
	 * 给元素追加样式
	 * */
	var flag = $("#flag").val();
	if(flag == "flag"){
		$(".input_css").attr({disabled:"disabled"});
	}
	
	require.async('/plugins/jquery-validation-1.13.0/jquery.validate',function(){
		require.async('/plugins/jquery-validation-1.13.0/additional-methods',function(){
			require.async(['/plugins/poshytip/tip-yellowsimple/tip-yellowsimple.css','/plugins/poshytip/jquery.poshytip.min'],function(){
				require.async(['/plugins/layer-v1.8.4/skin/layer.css','/plugins/layer-v1.8.4/layer.min'],function(){
			$("#payAccountFor").validate({
				
				rules:{
					realName:{
			    		required: true,
			    		realName:true
			    	},
			    	cardNO:{
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
			    		
			    	}
			    },
			    messages:{
			    	realName:{
			    		required: "请输入真实姓名",
			    		
			    		realName: "真实姓名格式不对"
			    	},
			    	cardNO:{
			    		required: "请输入身份证号码",
			    		isIdCardNo: "身份证格式不对",
			    		remote:"该身份证号已经存在"
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
				    		if(data.result==false) {
				    			//$.alert(data.msg);
				    			alertNew(data.msg);
				    		}else{
				    			// 汇潮开户接口赋值
			   		 			$("#frm1").attr("action",data.submitUrl);
			   		 			$("#mode").val(data.ymd.mode);
			   		 			$("#account_name").val(data.ymd.account_name);
			   		 			$("#real_name").val(data.ymd.real_name);
			   		 		   $("#card_no").val(data.ymd.card_no);
			   		 		    $("#nick_name").val(data.ymd.nickName);
			   		 	        $("#advice_url").val(data.ymd.adviceUrl);
			   		            $("#return_url").val(data.ymd.returnUrl);
			   		            $("#remark").val(data.ymd.remark);
			   		            $("#sign_info").val(data.ymd.signInfo);
			   		 			$("#frm1").submit();
									//构造确认框DOM
									//构造确认框DOM
						$.layer({
						    type: 1,
						    closeBtn: false,
						    title: false,
						    area: ['460px', '240px'],
						    shade: [0.5, '#000'],
						    border: 0,
						    page: {
						        html: '<div class="fileconfirm"><div class="fileconfirm_title"><h1 class="float_left">认证提示</h1><span class="float_right closeBtn">X</span></div><div class="fileconfirm_msg"><p>您即将跳往汇潮支付进行认证操作，认证完成前，请不要关闭本窗口。认证完成后，请根据您的认证结果点击下面按钮。</p></div><div class="fileconfirmbtn"><a href="javascript:;" class="okBtn">认证成功</a><a href="javascript:;" class="cancleBtn failBtn">认证失败</a></div></div>'
						    }
						});		
									//绑定失败操作
									$(".closeBtn").click(function(){
										layer.closeAll();
									});
		
				    		}
				    	});
			    	});
			     }  
			});
				})
			})
		})
	})
});