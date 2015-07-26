define(function(require,exports,modlue){
	require('jquery');
	
	//首页轮播图片加载
	$.ajax({
		url:"/index/articleList.html?nid=scrollPic",
		type:"post",
		success:function(result){
			var data = result.data;
			var len = data.length;
			var str = "";
			for(i=0;i<len;i++){
				str+="<li style='background:url("+data[i].picPath+") no-repeat center 0'><a href='"+data[i].introduction+"' ></a></li>";
			}
			$(".banner_con").html(str);
			require.async('./jquery.flexslider-min',function(){
				$('.flexslider').flexslider({
					directionNav: true,
					pauseOnAction: false
				});
			})
		}
	});
	
	//页面加载时，判断是否登陆，并显示相应的登陆框口或已登陆框
	$(function(){
		if(session_status==1){
			$(".login_before").hide();
    		$(".logined").show();				
		}else{
			$(".logined").hide();
			$(".login_before").show();
    		
		}
	})
	
	var count = $("#count").val();
	if( count == 1){
		$(".showForgetBox").before('<dd><input class="code" name="validCode" autocomplete="off" placeholder="验证码" type="text" maxlength="4" /><img src="/validimg.html" align="absmiddle" class="valicode_img" alt="点击刷新" /></dd>');
	    $(".valicode_img").click(function(){
	    	$(this).attr("src",'/validimg.html?t=' + Math.random());
	    });
	    $(".login_bg").css("height","380px");
	}
	//首页登陆验证
	require.async('/plugins/jquery-validation-1.13.0/jquery.validate.min',function(){
		require.async('/plugins/jquery-validation-1.13.0/additional-methods',function(){
			$("#loginForm").validate({
				rules:{
					userName: {
			    		required: true,
			    		minlength: 4
			    	},
			    	pwd: {
			    		required: true,
			    		regexPassword:true
			    	},
			    	validCode: {
			    		required: true,
			    		minlength: 4
			    	}
			    },
			    messages:{
			    	userName:{
			    		required: "请输入用户名",
			    		minlength: "用户名格式错误"
			    	},
			    	pwd: {
			    		required: "请输入密码",
			    		regexPassword:"密码格式错误"
			    	},
			    	validCode: {
			    		required: "请输入验证码",
			    		minlength: "验证码格式错误"
			    	}
			   },
			   showErrors: function(errorMap, errorList) {
			    	this.defaultShowErrors();
			    	$(".showErrorTips div").css("display","none");
			    	if(errorMap.userName){
			    		$(".errorTips b").html(errorMap.userName);
			    		$(".showErrorTips div").css("display","block");
			    	}else if(errorMap.pwd){
			    		$(".errorTips b").html(errorMap.pwd);
			    		$(".showErrorTips div").css("display","block");
			    	}else if(errorMap.validCode){
			    		$(".errorTips b").html(errorMap.validCode);
			    		$(".showErrorTips div").css("display","block");
			    	}else{
			    		$(".errorTips b").html('');
			    	}
			    },
			    errorPlacement:function(error,element){
			    },
			    submitHandler:function(form){
			    	require.async('jquery.form',function(){
				    	$("form").ajaxSubmit(function(data){
				        	if(data.result==true){
				        		if(data.userNature == 2){
				        			window.location.href = "/member/main.html";
				        		}else{
				        			//顶部
					        		$(".loginStatus").html('<a href="/help/guide.html" class="guide">新手指引</a>&nbsp;&nbsp;欢迎您，&nbsp;&nbsp;<a href="/member/main.html">'+data.userName+'</a>&nbsp;&nbsp;<a href="/user/logout.html" title="退出登录">退出登录</a>')
					        		//登陆框
					        		$(".login_before").hide();
					        		$(".logined").show();	      
					        		$(".logined_name").text(data.userName);
					        		$(".userImg").attr("src",data.imgurl);
					        		$(".login_bg").css("height","380px");
				        		}
				        	}else{
				        		$(".showErrorTips div").css("display","block");
				        		$(".errorTips b").html(data.msg);
				        		if(data.count){
				        			$(".showForgetBox").before('<dd><input class="code" name="validCode" autocomplete="off" placeholder="验证码" type="text" maxlength="4" /><img src="/validimg.html" align="absmiddle" class="valicode_img" alt="点击刷新" /></dd>');
				        		    $(".valicode_img").click(function(){
				        		    	$(this).attr("src",'/validimg.html?t=' + Math.random());
				        		    });
				        		    $("input[typ='validCode']").val('');
				        		    $(".login_bg").css("height","380px");
				        		}else{
				        			$(".errorTips b").html(data.msg);
				        			$("#email").val(data.email)
					        		$("#userid").val(data.userid);
					        		$("input[typ='validCode']").val('');
					        		$(".valicode_img").each(function(){
										$(this).attr("src",'/validimg.html?t=' + Math.random());
					        		})
				        		}
	
				        	}
				    	});   
			    	})
			     }  
			});
		})
	})
	
	$("#reset_email").live("click",function(){
    	$.ajax({
    		url:"/user/sentActivationEmail.html?userId="+$("#userid").val(),
    		type:"post",
    		data:{email:$("#email").val()},
    		success:function(data){
    			if(data)
    			{
    				loginEmail($("#email").val());
    			}
    			else
    			{
    				$(".errorTips b").html("邮件发送失败！");
    			}
    			
    		}
    	});
	});
	
	//["qq.com","gmail.com","126.com","163.com","hotmail.com","yahoo.com","yahoo.com.cn","live.com","sohu.com","sina.com"]	
	//点击登录邮箱地址
    function loginEmail(emailValue){
    	var email_suffix = (emailValue.split("@"))[1];
    	var loginEmailValue = "";
    	switch (email_suffix)
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
    	if(loginEmailValue)
    	{
    		$(".errorTips b").html('邮件已发送，点击<a href="http://'+loginEmailValue+'" target="_blank">立即激活</a>');
    	}
    	else
    	{
    		$(".errorTips b").html("邮件已发送，请注意查收！");
    	}
    }

    //判断时间是否小于10月10日10点10分
    if((new Date()).valueOf() < 1412907000000)
    {
    	$(".countDown").css("display","block").html('<img src="/themes/theme_default/images/Countdown.png" class="CountdownImg" />');
    }
    else
    {
    	$(".countDown").css("display","block");
    }
	
	//投标列表
	$.ajax({
		url:"/indexJson.html?random="+Math.random(),
		type:"get",
		dataType:"json",
		success:function(data){
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var tpl = require('/themes/theme_default/media/tpl/home_invest.tpl');//载入tpl模板
					var template = Handlebars.compile(tpl);
					var html = template(data);
					$("#index_invest_list").html(html);
					require.async('/plugins/jquery.yomi/jquery.yomi',function(){
						$.invokeYomi();
					});
					//不同的进度，更换成不同的颜色
					require.async('/plugins/jquery.knob/jquery.knob.min',function(){
						$('.knob').each(function(){
							var val = parseInt($(this).val());
							if(val <= 25)
							{
								$(this).attr("data-fgColor","#5bc0de");
							}
							else if(val > 25 && val <= 50)
							{
								$(this).attr("data-fgColor","#12adff");
							}
							else if(val > 50 && val < 100)
							{
								$(this).attr("data-fgColor","#28b726");
							}
							else
							{
								var isIE = function(ver){
								    var b = document.createElement('b')
								    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
								    return b.getElementsByTagName('i').length === 1
								}
								if(isIE(8)){
								    $(this).next().addClass("investComplete100");
					 			}
								$(this).attr("data-fgColor","#c83e41");
							}
						});
						$('.knob').knob({
							'width':50,
   							'height':50,
   							'thickness':.2
						});
					});
					require.async('commonJS/jquery.accordion',function(){
						$(".index_invest_list").accordion({
							wrapBox    : ".index_invest_list",//最外围wrap元素
							titleBox   : ".index_invest_item",//显示的标题
							contentBox : ".index_invest_more",//隐藏的内容
							hoverClass : "active",//展示之后的样式
							isClick    : false  //默认点击展开
						});
					});
				})
			})
		}
	})
	
	//介绍轮播图片加载
	/*$.ajax({
		url:'/themes/theme_default/media/json/indexIntro.json',
		type:"post",
		success:function(result){
			var data = result.data;
			var len = data.length;
			var str = "";
			for(i=0;i<len;i++){
				str+="<li style='background:url("+data[i].content+") no-repeat center 0'></li>";
			}
			$(".index_intro_box ul").html(str);
			require.async('./jquery.flexslider-min',function(){
				$('.index_intro_box').flexslider({
					directionNav: true,
					pauseOnAction: false
				});
			})
		}
	});*/
	
	$(function(){
		require.async('./jquery.flexslider-min',function(){
			$('.index_intro_box').flexslider({
				directionNav: true,
				pauseOnAction: false
			});
		})
	});
	
	
	//公告列表
	$.ajax({
		url:"/index/articleList.html?nid=notice",
		type:"get",
		dataType:"json",
		success:function(data){
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var tpl = require('/themes/theme_default/media/tpl/home_notice.tpl');//载入tpl模板
					var template = Handlebars.compile(tpl);
					var html = template(data);
					$("#index_notice_list").html(html);
				})
			})
		}
	})
	
	//媒体报到列表
	$.ajax({
		url:"/index/articleList.html?nid=news",
		type:"get",
		dataType:"json",
		success:function(data){
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var tpl = require('/themes/theme_default/media/tpl/home_notice.tpl');//载入tpl模板
					var template = Handlebars.compile(tpl);
					var html = template(data);
					$("#index_news_list").html(html);
				})
			})
		}
	})
	// $.ajax({
	// 	url:"/index/articleList.html?nid=mtbd",
	// 	type:"get",
	// 	dataType:"json",
	// 	success:function(data){
	// 		require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
	// 			require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
	// 				var tpl = require('/themes/theme_default/media/tpl/home_media.tpl');//载入tpl模板
	// 				var template = Handlebars.compile(tpl);
	// 				var html = template(data);
	// 				$(".index_media_list").html(html);
	// 				//媒体TAB
	// 				require('common1');
	// 				$(".index_media_list").tabChange({
	// 					isClick:true,
	// 				    isHover:false,
	// 					childLi:".index_media_tab li",//tab选项卡
	// 					childContent:".index_media_content",//tab内容
	// 					hoverClassName:"hover",//选中当前选项卡的样式
	// 					callBack:false	
	// 				});
				
	// 			})
	// 		})
	// 	}
	// })

	//媒体TAB
	// require('common1');
	// $(".index_media_list").tabChange({
	// 	isClick:true,
	//     isHover:false,
	// 	childLi:".index_media_tab li",//tab选项卡
	// 	childContent:".index_media_content",//tab内容
	// 	hoverClassName:"hover",//选中当前选项卡的样式
	// 	callBack:false	
	// });
	
	//合作伙伴
	$.ajax({
		url:"/index/articleList.html?nid=partner",
		type:"get",
		dataType:"json",
		success:function(data){
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var tpl = require('/themes/theme_default/media/tpl/home_partner.tpl');//载入tpl模板
					var template = Handlebars.compile(tpl);
					var html = template(data);
					$("#partnerList").html(html);
				})
			})
		}
	})
});
