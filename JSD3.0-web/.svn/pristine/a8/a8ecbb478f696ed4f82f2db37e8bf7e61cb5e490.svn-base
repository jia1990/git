define(function(require, exports, module) {
	require('jquery');
	//require('alert');
	require('alertNew');
	$.ajax({
		type:"post",
		url:"/member_borrow/security/getPaypwd.html",
		dataType:"json",
		success:function(json){
			if(json.result){
				alerts("认证提示",$(".pss2").html(),560,240);	
				$(".y_alertsBoxButton").click(function(){
					//设置交易密码
					window.location.href="/member/useridentify/identify.html";	
				});
				
			}
		}
     })
	
	if ($(".y_account_right").height() > $(".y_account_nav").height()) {
		$(".y_account_nav").height($(".y_account_right").height() - 24)
	}
	
	var hq = true;

	$("#drawAmount").blur(function(){

		$("#cashFee").children().hide();

		var drawAmount = $("#drawAmount").val();
		var usableMount = $("#usableMount").data("val"); 
		
		var ex = /^\d+$/;
		
		if(drawAmount>usableMount){
			$("#cashFee").html("<font style='color:#FC6210'>转账金额不能大于可用余额</font>");
	    }else if(drawAmount>=1 && drawAmount<=usableMount){
	    	if (ex.test(drawAmount)) {
	    	}else{
	    		$("#cashFee").html("<font style='color:#FC6210'>转账金额必须为整数</font>");
	    	}
		}else{
			$("#cashFee").html("<font style='color:#FC6210'>转账金额必须大于1元</font>");
		}
	    
		
	});
	
	/*李建云加
	 * 交易密码加密
	 * */
	$("#payPwd").blur(function(){
		$("#pwd").val($(this).val());
	});
	
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
			drawAmount:{
				required:true,
				min:1,
				digits:true
			},
			payPwd:{
				required:true
			}
		},
		messages:{
			drawAmount:{
				required:"请输入转账金额",
				min:"不能小于1元",
				digits:"金额必须为整数"
			},
			payPwd:{
				required:"请输入交易密码",
				remote:"请先设置交易密码"
			}
		},
		   errorPlacement:function(error,element){
			   if(error.text()==""){
					if(element.attr("name")=='transferAmount'){
						element.parent().find("span").eq(0).html("") ;
						element.parent().find("span").eq(0).hide();
						element.css({border:"1px solid #cccccc"});
					}
					if(element.attr("name")=='payPwd'){
						element.parent().find("span").html("") ;
						element.parent().find("span").hide();
						element.css({border:"1px solid #cccccc"});
					}
				}else{
			   
			   if(element.attr("name")=='transferAmount'){
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
				}
			},
			success:function(element){
				
			},
			submitHandler:function(form){
		    	require.async('jquery.form',function(){
			    	$(form).ajaxSubmit(function(data){
			    		if(data.result==true){
			    		//JSDP-159 xingjia 2015-05-23 start
			    			if(data.type=="apply"){
			    				$.layer({
								    type: 1,
								    closeBtn: false,
								    title: false,
								    area: ['460px', '240px'],
								    shade: [0.5, '#000'],
								    border: 0,
								    page: {
								        html: '<div class="fileconfirm"><div class="fileconfirm_title"><h1 class="float_left">转账提示</h1><span class="float_right closeBtn">X</span></div><div class="fileconfirm_msg"><p>尊敬的用户您好，转账申请成功，请您等待审核。</p></div><div class="fileconfirmbtn"><a href="/member/invest/accounTyunGouLog.html" class="okBtn">申请成功</a><a href="javascript:;" class="cancleBtn closeBtn">申请失败</a></div></div>'
								    }
								});	
			    			}else{
			    				$.layer({
								    type: 1,
								    closeBtn: false,
								    title: false,
								    area: ['460px', '240px'],
								    shade: [0.5, '#000'],
								    border: 0,
								    page: {
								        html: '<div class="fileconfirm"><div class="fileconfirm_title"><h1 class="float_left">转账提示</h1><span class="float_right closeBtn">X</span></div><div class="fileconfirm_msg"><p>尊敬的用户您好，转账成功点击去云购查看。</p></div><div class="fileconfirmbtn"><a href="/member/invest/accounTyunGouLogin.html" class="okBtn">转账成功</a><a href="javascript:;" class="cancleBtn closeBtn">转账失败</a></div></div>'
								    }
								});
			    			}
			    			
			    			
			    			//JSDP-159 xingjia 2015-05-23 end
							//提现失败操作
							$(".closeBtn").click(function(){
								layer.closeAll();
							});
						}else{
							//layer.msg(data.msg, 1, -1);
							//$.alert(data.msg,"提示",function(){},true);
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