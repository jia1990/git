define(function(require,exports,module){
	require('jquery');
	require('alert');
	//判断是否已开通第三方账户
	$.ajax({
		url:"/member_borrow/useridentify/thirdPartyIsOpen.html",
		type:"get",
		dataType:"json",
		success:function(data){
			if(!data.result){
				alerts("认证提示",$(".pss").html(),560,240);
				$(".y_alertsBoxButton").click(function(){
					//绑定第三方
					window.location.href="/member_borrow/security/realNameIdentify.html";	
				});
			}
		}
	})
	
	//防止重复提交开始
	/*$(".y_submits").click (function  () {
		$.alert("<div style='margin:0 100px;'>" +
				"<img width=18 src='../../../themes/theme_default/images/loading.gif'/> " +
				"&nbsp;正在处理请稍候</div>","提示",function(){},false);
	})*/
	//防止重复提交结束
	
	$(".valicode_img").click(function(){	
		$(this).attr("src",'/validimg.html?t=' + Math.random());		
	});
	
	
	/*2015.5.31 start*/
	$(".y_radios").eq(0).attr("checked","checked");
	$(".c_pay_name").click(function(){
		var index=$(this).index(".c_pay_name");
		$(".c_pay_choose").eq(index).show().siblings(".c_pay_choose").hide();
		$(this).find("input").attr("checked","checked");
	})
	$(".c_exp_info").hover(function(){
		$(".c_exp_info i").show();
	},function(){
		$(".c_exp_info i").hide();
	})
	/*2015.5.31 end*/
	
	
	
	
	
    //提交验证
    require.async("/plugins/jquery-validation-1.13.0/jquery.validate",function(){
    	require.async(['/plugins/layer-v1.8.4/skin/layer.css','/plugins/layer-v1.8.4/layer.min'],function(){
    	$("#J_reCharge").validate({
			rules:{
				rechargeAmount: {
		    		required: true,
		    		min:0.01
		    	},
		    	valicode: {
		    		required: true,
		    		minlength: 4
		    	},
		    	valicode2: {
		    		required: true,
		    		minlength: 4
		    	},
		    	cardNo: {
		    		required: true,
		    		minlength: 15
		    	},
		    	paw: {
		    		required: true,
		    		minlength: 6
		    	}
		    },
		    messages:{
		    	rechargeAmount:{
		    		required: "请输入充值金额",
		    		min:"最小充值金额为0.01元"
		    	},
		    	valicode: {
		    		required: "请输入验证码",
		    		minlength: "验证码格式错误"
		    	},
		    	valicode2: {
		    		required: "请输入验证码",
		    		minlength: "验证码格式错误"
		    	},
		    	cardNo: {
		    		required: "请输入卡号",
		    		minlength: "卡号格式错误"
		    	},
		    	paw: {
		    		required: "请输入密码",
		    		minlength: "密码格式错误"
		    	}
		   },
		   errorPlacement:function(error,element){
			   if(error.text()==""){
				   
					if(element.attr("name")=='rechargeAmount'){
						element.parent().find("span").html("") ;
						element.parent().find("span").hide();
						element.css({marginBottom:"18px"});
					}
					if(element.attr("name")=='valicode'){
						element.parent().find("span").html("") ;
						element.parent().find("span").hide();
						element.css({marginBottom:"18px"});
					}
					if(element.attr("name")=='valicode2'){
						element.parent().find("span").html("") ;
						element.parent().find("span").hide();
						element.css({marginBottom:"18px"});
					}
					if(element.attr("name")=='cardNo'){
						element.parent().find("span").html("") ;
						element.parent().find("span").hide();
						element.css({marginBottom:"18px"});
					}
					if(element.attr("name")=='paw'){
						element.parent().find("span").html("") ;
						element.parent().find("span").hide();
						element.css({marginBottom:"18px"});
					}
				}else{
				   if(element.attr("name")=='rechargeAmount'){
						element.parent().find("span").html(error.text());
						element.parent().find("span").css("display","block");
						element.css({marginBottom:"30px"});
						element.parent().find("span").eq(0).css({border:"1px solid #FA9494"});
				   }
				   if(element.attr("name")=='valicode'){
						element.parent().find("span").html(error.text());
						element.parent().find("span").css("display","block");
						element.css({marginBottom:"30px"});
						element.parent().find("span").css({border:"1px solid #FA9494"});
				   }
				   if(element.attr("name")=='valicode2'){
					   element.parent().find("span").html(error.text());
					   element.parent().find("span").css("display","block");
					   element.css({marginBottom:"30px"});
					   element.parent().find("span").css({border:"1px solid #FA9494"});
				   }
				   if(element.attr("name")=='cardNo'){
					   element.parent().find("span").html(error.text());
					   element.parent().find("span").css("display","block");
					   element.css({marginBottom:"30px"});
					   element.parent().find("span").css({border:"1px solid #FA9494"});
				   }
				   if(element.attr("name")=='paw'){
					   element.parent().find("span").html(error.text());
					   element.parent().find("span").css("display","block");
					   element.css({marginBottom:"30px"});
					   element.parent().find("span").css({border:"1px solid #FA9494"});
				   }
				}
		   },
		   success:function(element){
			 //防止重复提交开始
				//初始化
				var validCode=true;
				var time=60;
				var code=$(".y_submits");
				// 重新获取
				$(".y_submits").click (function  () {
					if (validCode) {
						validCode=false;
					t=setInterval(function  () {
						$(".y_submits").attr("disabled",true);
						time--;
						code.val(time+"秒后重新提交");
						if (time==0) {
							window.location.reload();
							$('.y_submits').removeAttr("disabled");
							clearInterval(t);
							code.val("重新提交");
							validCode=true;
						}
					},1000)
					}
				})
				//防止重复提交结束
			},
		   submitHandler:function(form){
			   require.async('jquery.form',function(){
				 //防止重复提交开始 gjh
		    		$.alert("<div style='margin:0 100px;'>" +
		    				"<img width=18 src='../../../themes/theme_default/images/loading.gif'/> " +
		    				"&nbsp;正在处理请稍候</div>","提示",function(){},false);
		    		//防止重复提交结束  gjh
			    	$(form).ajaxSubmit(function(data){
			    		if(data.result== false){
			    			//layer.msg(data.msg, 1, -1);
			    			$.alert(data.msg,"提示",function(){},true);
						}else{
							
							if(data.msg=="petCard"){
								$.alert("体验卡充值成功", "提示", function(){window.location.reload();},true);
							}else{
								// 环迅充值接口赋值
								$("#frm1").attr("action",data.submitUrl);
								$("#number_id").val(data.ymd.numberId);
								$("#out_trade_no").val(data.ymd.outTradeNo);
								$("#amount").val(data.ymd.amount);
								$("#fee").val(data.ymd.fee);
								$("#nick_name").val(data.ymd.nickName);
								$("#advice_url").val(data.ymd.adviceUrl);
								$("#return_url").val(data.ymd.returnUrl);
								$("#remark").val(data.ymd.remark);
								$("#sign_info").val(data.ymd.signInfo);
								$("#frm1").submit();
								
								//构造确认框DOM
								$.layer({
									type: 1,
									closeBtn: false,
									title: false,
									area: ['460px', '240px'],
									shade: [0.5, '#000'],
									border: 0,
									page: {
										html: '<div class="fileconfirm"><div class="fileconfirm_title"><h1 class="float_left">充值提示</h1><span class="float_right closeBtn">X</span></div><div class="fileconfirm_msg"><p>您即将跳往汇潮支付进行充值操作，充值完成前，请不要关闭本窗口。充值完成后，请根据您的充值结果点击下面按钮。</p></div><div class="fileconfirmbtn"><a href="/member/recharge/log.html" class="okBtn">充值成功</a><a href="javascript:;" class="cancleBtn closeBtn">充值失败</a></div></div>'
									}
								});	
								$("#qui_pop").hide();
								//绑定失败操作
								$(".closeBtn").click(function(){
									layer.closeAll();
								});
							}
	
						}});
			    	});
		   		//环迅充值处理 异步提交处理注释
		   		// require.async("jquery.form",function(){
		   		// 	$(form).ajaxSubmit(function(data){
		   		// 		if(data.result)
		   		// 		{
		   		// 			// 环迅充值接口赋值
		   		// 			$("#form_recharge").attr("action",data.ips.submitUrl);
		   		// 			$("#pMerCode").val(data.ips.merCode);
		   		// 			$("#p3DesXmlPara").val(data.ips.desXmlPara);
		   		// 			$("#pSign").val(data.ips.sign);
		   		// 			$("#form_recharge").submit();
		   		// 			require.async(['/plugins/layer-v1.8.4/skin/layer.css','/plugins/layer-v1.8.4/layer.min'],function(){
							// 	//构造确认框DOM
							// 	$.layer({
							// 	    type: 1,
							// 	    closeBtn: false,
							// 	    title: false,
							// 	    area: ['460px', '240px'],
							// 	    shade: [0.5, '#000'],
							// 	    border: 0,
							// 	    page: {
							// 	        html: '<div class="fileconfirm"><div class="fileconfirm_title"><h1 class="float_left">充值提示</h1><span class="float_right closeBtn">X</span></div><div class="fileconfirm_msg"><p>您即将跳往环迅支付进行充值操作，充值完成前，请不要关闭本窗口。充值完成后，请根据您的充值结果点击下面按钮。</p></div><div class="fileconfirmbtn"><a href="/member/recharge/log.html" class="okBtn">充值成功</a><a href="javascript:;" class="cancleBtn closeBtn">充值失败</a></div></div>'
							// 	    }
							// 	});	
							// 	//绑定失败操作
							// 	$(".closeBtn").click(function(){
							// 		layer.closeAll();
							// 	});
							// });
		   		// 		}
		   		// 		else
		   		// 		{
		   		// 			$(".user_cash_form li:eq(2)").find("span").html('<em for="valicode" class="error">'+data.msg+'</em>');
		   		// 			$("input[name='valicode']").val('');
		   		// 			$(".valicode_img").trigger("click");
		   		// 		}
		   		// 	});
		   		// })
			   
		  } 
		   
    	})
		});
    })
    
	
	function show_recharge(){
		$(".J_valicode_img").each(function(){
			$(this).attr("src",'/validimg.html?t=' + Math.random());
		})
		jQuery( "#modal_dialog" ).dialog({ autoOpen: false , modal: true ,height: 160,width:360 });
		jQuery( "#modal_dialog" ).dialog( "open" );
	}

});