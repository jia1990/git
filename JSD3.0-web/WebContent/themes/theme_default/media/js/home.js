define(function(require,exports,modlue){
	require('jquery');
	require('formatterFunction');
	$(window).resize(function(){
		$(".flexslider").css({height:(400/1920)*$(window).width()+"px"});
	});
	$(window).resize();
	//HttpCookie hc = Request.Cookies["warn1"];
    
      $(".y_right_btn").unbind('click').click(function(){ 
            var y_parlex_project=$(this).parent().find(".y_parlex_project");
            if(y_parlex_project.find("dd").length>4){
            if (!(y_parlex_project.is(":animated"))) {
                y_parlex_project.stop();
                if(y_parlex_project.position().left<=-($(".y_parlex_project dd").width()+34)*(y_parlex_project.find("dd").length-4)){
              y_parlex_project.animate({left:0+"px"},600);
                }else{
                y_parlex_project.animate({left:y_parlex_project.position().left-$(".y_parlex_project dd").width()-34+"px"},600);
                }
            }
            }
      })
     $(".y_left_btn").unbind('click').click(function(){
            var y_parlex_project=$(this).parent().find(".y_parlex_project");
            if(y_parlex_project.find("dd").length>4){
            if (!(y_parlex_project.is(":animated"))) {
                y_parlex_project.stop();
                if(y_parlex_project.position().left>=0){
                y_parlex_project.animate({left:-($(".y_parlex_project dd").width()+34)*(y_parlex_project.find("dd").length-4)+"px"},600);
                }else{
                y_parlex_project.animate({left:y_parlex_project.position().left+$(".y_parlex_project dd").width()+34+"px"},600);
                }
            }
            }
    })
	
	var martop=0;
	setInterval(function(){
		martop++;
		 if(martop>($(".conbanner1-div-in a").length-2)){
			 $(".conbanner1-div-in").animate({top:-martop*80},1000,function(){
				
				 $(".conbanner1-div-in").css("top","0");
				 martop=0;
			});
		}else{
			$(".conbanner1-div-in").animate({top:-martop*80},1000);
		} 
	},4000)
	$(window).resize(function(){
		$(".index_bj").css({width:$(window).width()+"px",height:$("body").height()+"px"});
		$(".falshShow").css({position:"fixed",top:"0",left:"-30px",width:$(window).width() + 200 +"px",height:$(window).height() + 125 +"px"});
	})
	$(window).resize();
	
	$(".y_babyBoxTitle11 h1").click(function(){
		var index=$(this).index(".y_babyBoxTitle11 h1");
		$(".y_babyBoxIn1").hide();
		$($(".y_babyBoxIn1")[index]).show();
		$(this).parent().find("h1").removeClass("h1-index-y-click");
		$(this).addClass("h1-index-y-click");
	})
	$(".y_babyBoxTitle12 h1").click(function(){
		var index=$(this).index(".y_babyBoxTitle12 h1");
		$(".y_babyBoxIns").hide();
		$($(".y_babyBoxIns")[index]).show();
		$(this).parent().find("h1").removeClass("h1-index-y-click");
		$(this).addClass("h1-index-y-click");
	})
	
	/*if (!(document.cookie.length > 0) || document.cookie.indexOf("flash=") == -1 ){
		$(".YBjCon1").css({display:"block"});
		var exdate=new Date();
		setCookie('flash',true,1);
		$(".falshShow").css({position:"fixed",top:"0",left:"-30px",width:$(window).width() + 200 +"px",height:$(window).height() + 125 +"px"});
		$("#swf").ready(function(){
				var t = 0;
				setInterval(function () {
					if(t == 70){
					$(".YBjCon1").css({opacity:0.7});
					}else if(t == 72){
						$(".YBjCon1").css({opacity:0.5});
					}else if(t == 73){
						$(".YBjCon1").css({opacity:0.3});
					}else if(t == 100){
						$(".YBjCon1").hide();
						$(".YBjCon").show();
						$(window).resize(function(){
							$(".YBjCon").css({height:$("body").height()});
						})
						$(window).resize();
						$(".YBjConIn span").click(function(){
							$(".YBjCon").hide();
						})
						setCookie('warn',true,30);
					}
					t++;
				},100);
		});
	}*/
	
	function getCookie(name) 
	{ 
	    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	 
	    if(arr=document.cookie.match(reg))
	        return unescape(arr[2]); 
	    else 
	        return null; 
	} 
	/*if (document.cookie.indexOf("warn1=") != -1 ){
		$("#swf").css({width:$(window).width(),height:$(window).height()});
		$("#swf").ready(function(){
			alert(document.cookie.indexOf("warn1=") != -1 );
				var t = 0;
				var t = setInterval(function () {
					if(t == 73){
					$(".YBjCon1").css({opacity:0.7});
					}else if(t == 75){
						$(".YBjCon1").css({opacity:0.5});
					}else if(t == 76){
						$(".YBjCon1").css({opacity:0.3});
					}else if(t == 80){
						$(".YBjCon1").css({display:"none"});
					}
					t++;
				},100);
		});
	}*/
	
	//$(window).width()
	
	
	function setCookie(c_name, value, expiredays){
		var exdate=new Date();
		exdate.setDate(exdate.getDate() + expiredays);
		//alert(exdate.toGMTString());
		document.cookie=c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
	}
	if (!(document.cookie.length > 0) || document.cookie.indexOf("warn=") == -1 && $(".YBjCon1").css("display") == "none"){
		$(".YBjCon").show();
		$(window).resize(function(){
			$(".YBjCon").css({height:$("body").height()});
		})
		$(window).resize();
		$(".YBjConIn span").click(function(){
			$(".YBjCon").hide();
		})
		setCookie('warn',true,30);
	}
	
	
	
	//首页轮播图片加载
	$.ajax({
		url:"/index/articleList.html?nid=scrollPic&r="+Math.random(),
		type:"get",
		success:function(result){
			var data = result.data;
			var len = data.length;
			var str = "";
			for(i=0;i<len;i++){
				str+="<li><a href='"+ data[i].content+"' target='_blank'><div class='img'><img src="+data[i].picPath+"></div></a></li>";
			}
			$(".slides").html(str);
			
			
			require.async('./jquery.flexslider',function(){
				$('#banner').flexslider({
					animation: "slide",
					direction:"horizontal",
					easing:"swing",
					eventType : "click",
					slideshowSpeed:10000
					
				});
				$(window).resize(function(){
					$(".flexslider ul li img").css({height:(400/1920)*$(window).width()+"px"});
				});
				$(window).resize();
			})
		},
		error:function(){
			location.reload();
		}
	});
	
	//最新广告条的读取
	$.ajax({
		url:"/index/newestAd.html?nid=indexAd&r="+Math.random(),
		type:"get",
		success:function(result){
			if(result.data.length!=0){
				for(var i=0;i<result.data.length;i++){
					
					 var imageUrl = result.data[i].picPath;
					$(".conbanner1-div-in").append("<a class='conbanner'  style='background:url("+imageUrl+") no-repeat center 0;' target='_blank'></a>")
					if($.trim(result.data[i].content) !=""&&!(result.data[i].content==null)){
						$(".conbanner").eq(i).attr("href",result.data[i].content);
					}else{
						$(".conbanner").eq(i).attr("href","/user/register.html");
						
					}
				}
				$(".conbanner1-div-in").find("a").eq(0).clone().appendTo(".conbanner1-div-in");
				
				/* $(".conbanner11").css("background","url("+imageUrl+") no-repeat center 0") ;
				 $(".conbanner12").css("background","url("+imageUrl+") no-repeat center 0") ;*/
				//$(".conbanner").html("<img src='http://www.tuaniu.com/data/upfiles/images2014-12-31/1ArticleModel/091230.jpg'></img>");
				/*$(window).resize(function(){
					$(".conbanner img").width($(window).width());
					alert($(".conbanner img").width());
				})
				$(window).resize();*/
			/*	if($.trim(result.data[0].content) !=""&&!(result.data[0].content==null)){
					$(".conbanner").attr("href",result.data[0].content);
				}else{
					$(".conbanner").attr("href","/user/register.html");
					
				}*/
			}
	    },
		error:function(){
			location.reload();
		}
	
	});

	//页面加载时，判断是否登陆，并显示相应的登陆框口或已登陆框
	var session_status = "${session_status}";
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
    		url:"/user/sentActivationEmail.html?userId="+$("#userid").val() + "&r="+Math.random(),
    		type:"get",
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
    			
    		},
    		error:function(){
    			location.reload();
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
		},
		error:function(){
			location.reload();
		}
	})
	//债权列表
	$.ajax({
		url:"/indexCreditJson.html?random="+Math.random(),
		type:"get",
		dataType:"json",
		success:function(data){
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var tpl = require('/themes/theme_default/media/tpl/home_credit.tpl');//载入tpl模板
					var template = Handlebars.compile(tpl);
					var html = template(data);
					$(".y_babyBoxCreditorTable").html(html);
					//不同的进度，更换成不同的颜色
					require.async("jquery.circliful.min",function(){
		    			$('.myStat4').circliful();
		    			$('#banner').flexslider({
		    				animation: "slide",
		    				direction:"horizontal",
		    				easing:"swing"
		    			});
		    		});
				})
			})
		},
		error:function(){
			location.reload();
		}
	})
	nybAjaxUrl("type=113&status=-3","#y_one");//能源宝
	
	//能源宝的首页展示
	function nybAjaxUrl(param,box){
		$.ajax({
			type:'get',
			url:'/invest/investJson.html?size=5&'+param+'&randomTime='+(new Date()).getTime(),
			dataType:'json',
			success:function(json){
			//分页插件
		if(json.data.page.pages > 0){
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var tpl = require('../tpl/investListIndex.tpl');
					var template = Handlebars.compile(tpl);
					var html = template(json);
					$(box).html(html);
					$(box).css({width:($(box + " dd").width()+32)*($(box + " dd").length+1)});
					
					$("#y_one dd").hover(function(){
						var index=$(this).index("#y_one dd");
						$("#y_one .tender_info").hide();
						$("#y_one .tender_info").eq(index).css({display:"block"});
					},function(){
						$("#y_one .tender_info").hide();
					})
					//倒计时处理
					var interval = 1000; 
					window.setInterval(function(){
						var s = $(".y_countDownNew") ;
						for(var i=0 ;i<s.length;i++){
							var fixedTime = s.eq(i).attr("data") ;
							fixedTime = fixedTime.replace(/-/g,"/");
							var divname = ".y_countDownNew" ;
							var endDate= new Date(fixedTime);
							
							var now = new Date(); 
							var leftTime= endDate.getTime()-now.getTime();
							
							if(leftTime>=0){
								var leftsecond = parseInt(leftTime/1000); 
								//var day1=parseInt(leftsecond/(24*60*60*6)); 
								var day1=Math.floor(leftsecond/(60*60*24)); 
								var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
								var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
								var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
								//var cc = document.getElementsByClassName(divname); 
								//cc.innerHTML=hour+"小时"+minute+"分"+second+"秒"; 
								$(divname).eq(i).html(day1+"天"+hour+"小时"+minute+"分"+second+"秒");
								if(hour==0 && minute==0 && second==0){
									$(divname).eq(i).parent().hide();
									$(divname).eq(i).parent().next().show();
									cydAjaxUrl("type=103&status=-3","#y_two");
								}
							}else{
								$(divname).eq(i).parent().hide();
								$(divname).eq(i).parent().next().show();
							}
						}
					}, interval) ;
				});
			});
				}else{
					/*$(".c_no_data_energy").show();*/
					$("#y_one .c_no_data").show();
					
				}
		},
		error:function(){
			location.reload();
		}
		});	
	}
	//fgq   3.10
	$(".h12-index-y-click").click(function(){
		//设置更多链接地址
		$(".y_boxBabymores_wsd").attr("href","/invest/netLoan.html");
		wsdAjaxUrl("type=115&status=-3","#y_one_two");//微商贷
	
	})
	
	$(".h1-index-y-click").click(function(){
		//设置更多链接地址
		$(".y_boxBabymores_wsd").attr("href","/invest/goEnergy.html");
		nybAjaxUrl("type=113&status=-3","#y_one");//能源宝
	
	})
	
	
   
	
	//微商贷的首页展示
	function wsdAjaxUrl(param,box){
		$.ajax({
			type:'get',
			url:'/invest/investJson.html?size=5&'+param+'&randomTime='+(new Date()).getTime(),
			dataType:'json',
			success:function(json){
			//分页插件
		if(json.data.page.pages > 0){
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var tpl = require('../tpl/investListIndex.tpl');
					var template = Handlebars.compile(tpl);
					var html = template(json);
					$(box).html(html);
					$(box).css({width:($(box + " dd").width()+32)*($(box + " dd").length+1)});
					
					$("#y_one_two dd").hover(function(){
						var index=$(this).index("#y_one_two dd");
						$("#y_one_two .tender_info").hide();
						$("#y_one_two .tender_info").eq(index).css({display:"block"});
					},function(){
						$("#y_one_two .tender_info").hide();
					})
					
					$(".c_parlex_top span").hover(function(){
						$(this).find("img").stop();
						$(this).find("img").animate({width:"120%",height:"120%",left:"-10%",top:"-10%"},600);
					},function(){
						$(this).find("img").stop();
						$(this).find("img").animate({width:"100%",height:"100%",left:"0",top:"0"},600);
					});
					//鼠标滑过显示隐藏
					$(".c_show_hide dd.y_oldobj").hover(function(){
					    $(this).find("ul").hide();
					    $(".c_show_hide .c_par_support").hide();
					    $(this).find(".c_par_support").show();
					},function(){
						$(this).find("ul").show();
						$(this).find(".c_par_support").hide();
					});
					//倒计时处理
					var interval = 1000; 
					window.setInterval(function(){
						var s = $(".y_countDownNew") ;
						for(var i=0 ;i<s.length;i++){
							var fixedTime = s.eq(i).attr("data") ;
							fixedTime = fixedTime.replace(/-/g,"/");
							var divname = ".y_countDownNew" ;
							var endDate= new Date(fixedTime);
							
							var now = new Date(); 
							var leftTime= endDate.getTime()-now.getTime();
							
							if(leftTime>=0){
								var leftsecond = parseInt(leftTime/1000); 
								//var day1=parseInt(leftsecond/(24*60*60*6)); 
								var day1=Math.floor(leftsecond/(60*60*24)); 
								var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
								var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
								var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
								//var cc = document.getElementsByClassName(divname); 
								//cc.innerHTML=hour+"小时"+minute+"分"+second+"秒"; 
								$(divname).eq(i).html(day1+"天"+hour+"小时"+minute+"分"+second+"秒");
								if(hour==0 && minute==0 && second==0){
									$(divname).eq(i).parent().hide();
									$(divname).eq(i).parent().next().show();
									wsdAjaxUrl("type=115&status=-3","#y_one_two");//微商贷
								}
							}else{
								$(divname).eq(i).parent().hide();
								$(divname).eq(i).parent().next().show();
							}
						}
					}, interval) ;
				});
			});
				}else{
					/*$(".c_no_data_energy").show();*/
					$("#y_one_two .c_no_data").show();
				}
		},
		error:function(){
			location.reload();
		}
		});	
	}

	
	
	cydAjaxUrl("type=103&status=-3","#y_two");//车押贷
	//车押贷
	function cydAjaxUrl(param,box){
		$.ajax({
		type:'get',
		url:'/invest/investJson.html?size=5&'+param+'&randomTime='+(new Date()).getTime(),
		dataType:'json',
		success:function(json){
			//分页插件
			if(json.data.page.pages > 0){
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var tpl = require('../tpl/investListIndex.tpl');
					var template = Handlebars.compile(tpl);
					var html = template(json);
					$(box).html(html);
					$(box).css({width:($(box + " dd").width()+32)*($(box + " dd").length+1)});
				 
					//倒计时处理
					var interval = 1000; 
					window.setInterval(function(){
						var s = $(".y_countDownNew") ;
						for(var i=0 ;i<s.length;i++){
							var fixedTime = s.eq(i).attr("data") ;
							fixedTime = fixedTime.replace(/-/g,"/");
							var divname = ".y_countDownNew" ;
							var endDate= new Date(fixedTime);
							
							var now = new Date(); 
							var leftTime= endDate.getTime()-now.getTime();
							
							if(leftTime>=0){
								var leftsecond = parseInt(leftTime/1000); 
								//var day1=parseInt(leftsecond/(24*60*60*6)); 
								var day1=Math.floor(leftsecond/(60*60*24)); 
								var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
								var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
								var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
								//var cc = document.getElementsByClassName(divname); 
								//cc.innerHTML=hour+"小时"+minute+"分"+second+"秒"; 
								$(divname).eq(i).html(day1+"天"+hour+"小时"+minute+"分"+second+"秒");
								if(hour==0 && minute==0 && second==0){
									$(divname).eq(i).parent().hide();
									$(divname).eq(i).parent().next().show();
									cydAjaxUrl("type=103&status=-3","#y_two");
								}
							}else{
								$(divname).eq(i).parent().hide();
								$(divname).eq(i).parent().next().show();
							}
						}
					}, interval) ;
				});
			});
			}else{
				/*$(".c_no_data_car").show();*/
				$("#y_two .c_no_data").show();
			}
			},
			error:function(){
				location.reload();
			}
		})	
	}
	
	$(".h22-index-y-click").click(function(){
		
		$(".y_boxBabymores_fqb").attr("href","/invest/stages.html");
		fqbAjaxUrl("type=105&status=-3","#y_two_two");//分期宝
	})
	
	//fgq   3.10
	$(".h1-index-y-click").click(function(){
		
		$(".y_boxBabymores_fqb").attr("href","/invest/goCar.html");
		cydAjaxUrl("type=103&status=-3","#y_two");//车押贷
	})
	//分期宝
	function fqbAjaxUrl(param,box){
		$.ajax({
		type:'get',
		url:'/invest/investJson.html?size=5&'+param+'&randomTime='+(new Date()).getTime(),
		dataType:'json',
		success:function(json){
			//分页插件
			if(json.data.page.pages > 0){
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var tpl = require('../tpl/investListIndex.tpl');
					var template = Handlebars.compile(tpl);
					var html = template(json);
					$(box).html(html);
					$(box).css({width:($(box + " dd").width()+32)*($(box + " dd").length+1)});
				 
					//倒计时处理
					var interval = 1000; 
					window.setInterval(function(){
						var s = $(".y_countDownNew") ;
						for(var i=0 ;i<s.length;i++){
							var fixedTime = s.eq(i).attr("data") ;
							fixedTime = fixedTime.replace(/-/g,"/");
							var divname = ".y_countDownNew" ;
							var endDate= new Date(fixedTime);
							
							var now = new Date(); 
							var leftTime= endDate.getTime()-now.getTime();
							
							if(leftTime>=0){
								var leftsecond = parseInt(leftTime/1000); 
								//var day1=parseInt(leftsecond/(24*60*60*6)); 
								var day1=Math.floor(leftsecond/(60*60*24)); 
								var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
								var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
								var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
								//var cc = document.getElementsByClassName(divname); 
								//cc.innerHTML=hour+"小时"+minute+"分"+second+"秒"; 
								$(divname).eq(i).html(day1+"天"+hour+"小时"+minute+"分"+second+"秒");
								if(hour==0 && minute==0 && second==0){
									$(divname).eq(i).parent().hide();
									$(divname).eq(i).parent().next().show();
									fqbAjaxUrl("type=105&status=-3","#y_two_two");//分期宝
								}
							}else{
								$(divname).eq(i).parent().hide();
								$(divname).eq(i).parent().next().show();
							}
						}
					}, interval) ;
				});
			});
			}else{
				/*$(".c_no_data_car").show();*/
				$("#y_two_two .c_no_data").show();
				
			}
			},
			error:function(){
				location.reload();
			}
		})	
	}
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
		url:"/index/articleList.html?nid=notice&r="+Math.random(),
		type:"get",
		dataType:"json",
		success:function(data){
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var tpl = require('/themes/theme_default/media/tpl/home_notice.tpl');//载入tpl模板
					var template = Handlebars.compile(tpl);
					var html = template(data);
					$(".y_babyBoxNoticeIn1").html(html);
					
					$(".y_babyBoxNoticeIn li a").hover(function(){
			            $(this).css({color:"#00a0ea"});
			            $(this).find("span").css({backgroundPosition:" 0 -150px"});
			        },function(){
			            $(this).css({color:"#666666"});
			            $(this).find("span").css({backgroundPosition:" 0 -130px"});
			        })
				})
			})
		},
		error:function(){
			location.reload();
		}
	})
	
	//晋商文化
	$.ajax({
		url:"/index/articleList.html?nid=jsculture&r="+Math.random(),
		type:"get",
		dataType:"json",
		success:function(data){
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var tpl = require('/themes/theme_default/media/tpl/home_jsculture.tpl');//载入tpl模板
					var template = Handlebars.compile(tpl);
					var html = template(data);
					$(".y_babyBoxNoticeIn2").html(html);
					
					$(".y_babyBoxNoticeIn li a").hover(function(){
			            $(this).css({color:"#00a0ea"});
			            $(this).find("span").css({backgroundPosition:" 0 -150px"});
			        },function(){
			            $(this).css({color:"#666666"});
			            $(this).find("span").css({backgroundPosition:" 0 -130px"});
			        })
				})
			})
		},
		error:function(){
			location.reload();
		}
	})
	//最新动态
	//李建云加
	$.ajax({
		url:"/index/articleList.html?nid=notice&r="+Math.random(),
		type:"get",
		dataType:"json",
		success:function(data){
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var tpl = require('/themes/theme_default/media/tpl/home_recentNews.tpl');//载入tpl模板
					var template = Handlebars.compile(tpl);
					var html = template(data);
					$(".scroll_list_left").html(html);
					 $($(".scroll_list_left li")[0]).clone(true).insertAfter($($(".scroll_list_left li")[$(".scroll_list_left li").length - 1]));
				})
			})
		},
		error:function(){
			location.reload();
		}
	});
	
	//媒体报道列表
	$.ajax({
		url:"/index/articleList.html?nid=media&r="+Math.random(),
		type:"get",
		dataType:"json",
		success:function(data){
			if(data.data.length>0){
				for(var i=0;i<data.data.length;i++){
					if(i==4 || i==9){
						$(".y_babyBoxMediaIn").append("<li  class='y_noRght'><a href='/article/mediaDetail.html?nid=media'><img src='"+data.data[i].logoPath +"'  style='width: 157px;height: 60px;'  ></a></li>");
					}else{
						$(".y_babyBoxMediaIn").append("<li ><a href='/article/mediaDetail.html?nid=media'><img src='"+data.data[i].logoPath +"' style='width: 157px;height: 60px;' ></a></li>");
						
					}
					
				}
			}else{
				$(".y_babyBoxMediaIn").html("<div style='width:72px;margin:80px auto 0;'><img src='/themes/theme_default/images/no_data.png'/></div>");
				
			}
		},
		error:function(){
			location.reload();
		}
	})
	
	
	/*
	 * 李建云加
	 *首页当月实现借款、成功投资、成交数据展示 
	 * 
	 * */
	/*$.ajax({
		url:"/index/dataView.html",
		type:"get",
		dataType:"json",
		success:function(data){
			
			var str = "<em class='y_emOrange'>"+data.borrowUserCount+"</em><em class='y_fr'>人选择晋商贷</em>";
				
			$(".date").before(data.date+"月");
			
			$(".borrowUserCount").html(str);
			
		},
		error:function(){
			location.reload();
		}
	})*/
	
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
	function partnerList(){}
	$.ajax({
		url:"/index/articleList.html?nid=partners&r="+Math.random(),
		type:"get",
		dataType:"json",
		success:function(data){
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var tpl = require('/themes/theme_default/media/tpl/home_partner.tpl');//载入tpl模板
					var template = Handlebars.compile(tpl);
					var html = template(data);
					$("#partnerList").html(html);
				});
			});
		},
		error:function(){
			location.reload();
		}
	});
	
	
	//上月数据展示   郭俊辉
//	dataShow();
//	function dataShow(){
//		$.ajax({
//			url:"/index/investIn.html?r="+Math.random(),
//			type:"get",
//			success:function(data){
//			if(data){
//				if(typeof data != "undefined" && typeof data.showData != "undefined"){
//					
//					var myDate = new Date();
//					var month = myDate.getMonth();
//					if(month == 0){
//						month = 12;
//					}
//					$(".y_rights_num .y_titless").html("平台数据" + $(".y_rights_num .y_titless").html());
//					$(".y_rights_num .y_emOrange").eq(0).html(numFormat(data.showData.ultimo_data.tender_count.value));
//					$(".y_rights_num .y_emOrange").eq(1).html(numFormat(data.showData.ultimo_data.invest_people_num.value));
//					$(".y_rights_num .y_emOrange").eq(2).html(numFormat(data.showData.ultimo_data.invest_money_sum.value));
//				}else{
//					dataShow();
//				}
//			}
//		}
//		});
//	}
	
	
	// 于俊斐加
	/*$(window).resize(function() {
		$(".calculatorCpmBox").css({left:($(window).width()-852)/2+"px",top:($(window).height()-444)/2+"px"});
		$(".calculatorCpmBottom").css({height:$(window).height()+"px"});
	});
	$(window).resize();
	$(".calculatorCpmBox h1 img").click(function(){
		$(".calculatorCpmBox").hide();
		$(".calculatorCpmBottom").hide();
	})
	$(".c_counter_cf").click(function(){
		$(".calculatorCpmBox").show();
		$(".calculatorCpmBottom").show();
	}) ;*/
});