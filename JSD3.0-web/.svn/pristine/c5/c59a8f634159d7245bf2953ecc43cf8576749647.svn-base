define(function(require, exports, module) {
	require('jquery');
	require('alertNew');
	//判断是否已经绑定银行卡
	$.ajax({
		url:"/member_borrow/cash/bankStatus.html",
		type:"get",
		 async: false,
		dataType:"json",
		success:function(data){
			if(data.result==false){
				alerts("认证提示",$(".pss").html(),560,240);	
				$(".y_alertsBoxButton").click(function(){
					//绑定银行卡
					window.location.href="/member_borrow/cash/bank.html";	
				});
			}else{
				

				$.ajax({
					type:"post",
					url:"/member_borrow/security/getPaypwd.html",
					dataType:"json",
					success:function(json){
						if(json.result){
							alerts("认证提示",$(".pss2").html(),560,240);	
							$(".y_alertsBoxButton").click(function(){
								//设置交易密码
								window.location.href="/member_borrow/account/asetpre.html";	
							});
							
						}
					}
		         })
			}
		}
	})
	
	if ($(".y_account_right").height() > $(".y_account_nav").height()) {
		$(".y_account_nav").height($(".y_account_right").height() - 24)
	}
	
	//防止重复提交开始
	/*$(".y_submits").click (function  () {
		alertNew("<div style='margin:0 100px;'>" +
				"<img width=18 src='../../../themes/theme_default/images/loading.gif'/> " +
				"&nbsp;正在处理请稍候</div>","提示",function(){},false);
	})*/
	//防止重复提交结束
	
	var hq = true;
	/*$(".verify_code").click(function() {
		var time = 120;
		if (hq) {
			hq = false;
			$.ajax({
		        type:"get",
		        dataType:"json",
		        url:"/member/cash/getCashPhoneVerifyCode.html?id="+Math.random(),
		        dataType:"json",
		        success:function(json){
		        if(json.result== true){
		        
		        $(".verify_y_spans").html("<font style='color:#FC6210'>发送成功</font>");
		        }else if(json.result== false){
		        	
		        $(".verify_y_spans").html("<font style='color:#FC6210'>发送失败，稍后重新获取</font>");	
		        }
		        }
		    });
			
			var t = setInterval(function() {
				time--;	
				$(".verify_code").addClass("verify_code_on");
				$(".verify_code_on").removeClass("verify_code");
				$(".verify_code_on").html(time +"秒后重新获取");
				if (time == 0) {
					clearInterval(t);
					$(".verify_code_on").addClass("verify_code");
					$(".verify_code").removeClass("verify_code_on");
					$(".verify_code").html("重新获取");
					$(".verify_y_spans").html("");
					hq = true;
				}
			}, 1000)
		}
	})*/

	//提现金额失去焦点 计算提现手续费
	$("#drawAmount").blur(function(){
		var drawAmount = $("#drawAmount").val();
		var usableMount = $("#usableMount").data("val");
		
		if(drawAmount==""){	
			$("#cashFee").html("<font style='color:#FC6210'>请输入提现金额</font>");
		}else if(drawAmount < 100){
			$("#cashFee").html("<font style='color:#FC6210'>提现金额必须大于100元</font>");
		}else if(drawAmount>usableMount){
			$("#cashFee").html("<font style='color:#FC6210'>提现金额不能大于可用余额</font>");
		}else if(drawAmount>0 && drawAmount<=usableMount){
			
			$.ajax({
		        type:"get",
		        dataType:"json",
		        url:"/member/cash/drawMoneyFee.html?drawAmount="+drawAmount+"&id="+Math.random(),
		        dataType:"json",
		        success:function(json){
		        	
		        var drawAmount = json.inAccount;
		        var cashFee =json.drawFee;		    	   
		        $("#cashFee").html("<font style='color:#FC6210'>时间到账金额："+drawAmount+"元,提现手续费为:"+cashFee+"元</font>");
		        }
		    });
		}
	});
	
	//提现金额获得焦点
	$("#drawAmount").focus(function(){
		$("#cashFee").html("");		
	});
	//交易密码失去焦点
	$("#payPwd").blur(function(){
		
		/*$(".paypwd_y_spans").html("<font style='color:#FC6210'>请输入交易密码</font>");*/
	});
	//交易密码获得焦点
	$("#payPwd").focus(function(){
		$(".paypwd_y_spans").html("");
	});
	/*//验证码失去焦点
	$("#verifyCode").blur(function(){
		$(".verify_y_spans").html("<font style='color:#FC6210'>请输入手机验证码</font>");
	});
	//验证码获得焦点
	$("#verifyCode").focus(function(){
		$(".verify_y_spans").html("");
	});*/
		
	/*
	 * 2014.12.12
	 * 李建云
	 * 表单验证及提交
	 * 
	 * */ 
	require.async("/plugins/jquery-validation-1.13.0/jquery.validate",function(){
		require.async("/plugins/jquery-validation-1.13.0/additional-methods",function(){
			require.async(['/plugins/poshytip/tip-yellowsimple/tip-yellowsimple.css','/plugins/poshytip/jquery.poshytip.min'],function(){
				require.async(['/plugins/layer-v1.8.4/skin/layer.css','/plugins/layer-v1.8.4/layer.min'],function(){
	//表单验证
	$("#drawCash").validate({
		rules:{
			bankNo:{
				required:true
			},
			drawAmount:{
				required:true,
				min:100
			},
			payPwd:{
				required:true
			}/*,
			verifyCode:{
				required:true
			}*/
		},
		messages:{
			bankNo:{
				required:"请输入银行账号"
			},
			drawAmount:{
				required:"请输入提现金额",
				min:"不能小于100元"
			},
			payPwd:{
				required:"请输入交易密码"
			}/*,
			verifyCode:{
				required:"请输入手机验证码"
			}*/	
		},
		errorPlacement:function(error,element){
			   if(error.text()==""){
					if(element.attr("name")=='bankNo'){
						element.parent().find("span").html("") ;
						element.parent().find("span").hide();
						element.css({border:"1px solid #cccccc"});
					}
					if(element.attr("name")=='drawAmount'){
						element.parent().find("span").eq(0).html("") ;
						element.parent().find("span").eq(0).hide();
						element.css({border:"1px solid #cccccc"});
					}
					if(element.attr("name")=='payPwd'){
						element.parent().find("span").html("") ;
						element.parent().find("span").hide();
						element.css({border:"1px solid #cccccc"});
					}
					/*if(element.attr("name")=='verifyCode'){
						element.parent().find("span").html("") ;
						element.parent().find("span").hide();
						element.css({border:"1px solid #cccccc"});
					}*/
				}else{
			   
			   if(element.attr("name")=='bankNo'){
					element.parent().find("span").html(error.text());
					element.parent().find("span").show();
					element.parent().find("span").css("display","block");
					element.parent().find("span").css({border:"1px solid #FA9494"});
			   }
			   if(element.attr("name")=='drawAmount'){
					element.parent().find("span").eq(0).html(error.text());
					element.parent().find("span").eq(0).show();
					element.parent().find("span").eq(0).css("display","block");
					element.parent().find("span").eq(0).css({border:"1px solid #FA9494"});
			   }
			   if(element.attr("name")=='payPwd'){
					element.parent().find("span").html(error.text());
					element.parent().find("span").show();
					element.parent().find("span").css("display","block");
					element.parent().find("span").css({border:"1px solid #FA9494"});
			   }
			  /* if(element.attr("name")=='verifyCode'){
					element.parent().find("span").html(error.text());
					element.parent().find("span").show();
					element.parent().find("span").css("display","block");
					element.parent().find("span").css({border:"1px solid #FA9494"});
			   }*/
				}
			},
			success:function(element){		
			},
			submitHandler:function(form){
		    	require.async('jquery.form',function(){
		    		//防止重复提交开始 gjh
		    		alertNew("<div style='margin:0 100px;'>" +
		    				"<img width=18 src='../../../themes/theme_default/images/loading.gif'/> " +
		    				"&nbsp;正在处理请稍候</div>","提示",function(){},false);
		    		//防止重复提交结束  gjh
			    	$(form).ajaxSubmit(function(data){
			    		if(data.result==true){
			    			$.layer({
							    type: 1,
							    closeBtn: false,
							    title: false,
							    area: ['460px', '240px'],
							    shade: [0.5, '#000'],
							    border: 0,
							    page: {
							        html: '<div class="fileconfirm"><div class="fileconfirm_title"><h1 class="float_left">提现提示</h1><span class="float_right closeBtn">X</span></div><div class="fileconfirm_msg"><p>尊敬的用户您好，提现申请成功，请您等待审核。</p></div><div class="fileconfirmbtn"><a href="/member/cash/log.html" class="okBtn">申请成功</a><a href="javascript:;" class="cancleBtn closeBtn">申请失败</a></div></div>'
							    }
							});	
			    			$("#qui_pop").hide();
							//提现失败操作
							$(".closeBtn").click(function(){
								layer.closeAll();
							});
						}else{
							//layer.msg(data.msg, 1, -1);
							alertNew(data.msg,"提示",function(){},true);
						}
			    		
			    		})
		    		})
				}
			});	
	
		});
			});
			
		});
	});
	$("#payPwd").keyup(function(){
		var pwd = $(this).val().replace(/^ +| +$/g,'');
		$(this).val(pwd);
		
	});
	
});