define(function(require,exports,module){
    require('jquery');
  //判断用户验证信息
    $.ajax({
          type:"post",
          url:"/member_borrow/businessUserIdentify.html",
          dataType:"json",
          success:function(json){
              require.async("/plugins/handlebars-v1.3.0/handlebars-v1.3.0",function(){
                  require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
                	  $(".MemberCenter_con1in").append(Handlebars.compile(require("../../tpl/member_borrow/user_home_info.tpl"))(json));
                	  $(function(){
                	    	var path = $("#webpath").val() ;
                	    	var newda=new Date();
                			newdaHours=newda.getHours();
                			if(newdaHours>=7&&newdaHours<=10){
                				$(".time_text").hide();
                				$(".time_textmorning").show();
                				$(".MemberCenter_con1").css({background: "url("+path+"/images/mcenter/membercenter03.jpg) no-repeat center 0"})
                			}else if(newdaHours>10&&newdaHours<=13){
                				$(".time_text").hide();
                				$(".time_textnoon").show();
                				$(".MemberCenter_con1").css({background: "url("+path+"/images/mcenter/membercenter04.jpg) no-repeat center 0"})
                			}else if(newdaHours>13&&newdaHours<=18){
                				$(".time_text").hide();
                				$(".time_textafternoon").show();
                				$(".MemberCenter_con1").css({background: "url("+path+"/images/mcenter/membercenter04.jpg) no-repeat center 0"})
                			}else{
                				$(".time_text").hide();
                				$(".time_textnight").show();
                				$(".MemberCenter_con1").css({background: "url("+path+"/images/mcenter/membercenter02.jpg) no-repeat center 0"})
                			}
                			
                			require.async(["/plugins/fancybox/jquery.fancybox.css","/plugins/fancybox/jquery.fancybox.pack"],function(){
                                $(".fancybox").attr("rel","gallery").fancybox();
                            })
                            $(window).resize(function(){
        						if($(window).width()>=1911){
        							$(".MemberCenter_con1").css("backgroundSize","100%");
        						}else{
        						     $(".MemberCenter_con1").css("backgroundSize","");
        						}
        					});
        					$(window).resize();
        					//公司主页左右滚动
        					$(".c_company_list").hover(function(){
        						$(".c_team_btn").fadeIn();
        					},function(){
        						$(".c_team_btn").fadeOut();
        					})
        					$(".c_team_right").click(function(){
        							var c_team_img=$(".c_company_list ul");
        							if(c_team_img.position().left<=-($(".c_company_list ul li").width()+18)*(c_team_img.find("li").length-3)){
        							}else{
        							c_team_img.animate({left:c_team_img.position().left-$(".c_company_list ul li").width()-18+"px"},600);
        							}
        					})
        					$(".c_team_left").click(function(){
        							var c_team_img=$(".c_company_list ul");
        							if(c_team_img.position().left>=0){
        							}else{
        								c_team_img.animate({left:c_team_img.position().left+$(".c_company_list ul li").width()+18+"px"},600);
        							}
        					})
                	    });
                  });
              });
          }
    });
    var adminurl = $("#adminurl").val();
    //分期宝产品动态加载
    $.ajax({
    	type:"post",
    	url:"/member_borrow/stagesDetailList.html",
    	dataType:"json",
    	success:function(json){
    	if(json.page.pages > 0) {	
    	require.async("/plugins/handlebars-v1.3.0/handlebars-v1.3.0",function(){
    		require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
    			$(".y-new-stages-ul").find("ul").html(Handlebars.compile(require("../../tpl/member_borrow/stagesDetailList.tpl"))(json));
    			for(i=0;i<=$(".y-new-stages-ul ul li").length;i++){
    				$(".y-new-stages-ul ul li a img").eq(i).attr({src:adminurl+$(".y-new-stages-ul ul li a img").eq(i).attr("src")});
			        if(i%4==0){
			            $($(".y-new-stages-ul ul li")[i]).css({marginLeft:"0"});
			        }
			    }
    		});
    	});require.async(['/plugins/pager/mypager.css','/plugins/pager/pager'],function(){
			kkpager.generPageHtml({
				pno : json.page.currentPage,//当前页码
				total : json.page.pages,//总页码
				totalRecords : json.page.total,//总数据条数
				isShowFirstPageBtn	: false, 
				isShowLastPageBtn	: false, 
				isShowTotalPage 	: false, 
				isShowTotalRecords 	: false, 
				isGoPage 			: false,	
				mode:'click',//click模式匹配getHref 和 click
				click:function(n,total,totalRecords){
		        	$.ajax({
		        		type:"get",
		        		url:"/member_borrow/stagesDetailList.html?page="+n,
		        		dataType:"json",//这个必不可少，如果缺少，导致传回来的不是json格式
		        		success:function(json){
		        			require.async(['/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js','/plugins/handlebars-v1.3.0/transFormatJson'],function(){
		        				$(".y-new-stages-ul").find("ul").html(Handlebars.compile(require("../../tpl/member_borrow/stagesDetailList.tpl"))(json));
		        				for(i=0;i<=$(".y-new-stages-ul ul li").length;i++){
							        if(i%4==0){
							            $($(".y-new-stages-ul ul li")[i]).css({marginLeft:"0"});
							        }
							    }
		        			});
		        		}
		        	});
					this.selectPage(n); //处理完后可以手动条用selectPage进行页码选中切换
				}
			});
		});
    	}else{
			$('.y_parlex_projects').html("<div class='c_nodata'></div>");
			$("#kkpager").html('');
		}
    }
    });
    
    var newda=new Date();
	newdaHours=newda.getHours();
	if(newdaHours>=7&&newdaHours<=10){
		$(".time_text").hide();
		$(".time_textmorning").show();
		$(".MemberCenter_con1").css({background: "url(images/MemberCenter/MemberCenter_03.jpg) no-repeat center 0"})
	}else if(newdaHours>10&&newdaHours<=13){
		$(".time_text").hide();
		$(".time_textnoon").show();
		$(".MemberCenter_con1").css({background: "url(images/MemberCenter/MemberCenter_04.jpg) no-repeat center 0"})
	}else if(newdaHours>13&&newdaHours<=18){
		$(".time_text").hide();
		$(".time_textafternoon").show();
		$(".MemberCenter_con1").css({background: "url(images/MemberCenter/MemberCenter_04.jpg) no-repeat center 0"})
	}else{
		$(".time_text").hide();
		$(".time_textnight").show();
		$(".MemberCenter_con1").css({background: "url(images/MemberCenter/MemberCenter_02.jpg) no-repeat center 0"})
	}
	$(window).resize(function(){
		if($(window).width()>=1911){
						    $(".MemberCenter_con1").css("backgroundSize","100%");
		}else{
		     $(".MemberCenter_con1").css("backgroundSize","");
		}
	});
	$(window).resize();
	//公司主页左右滚动
	$(".c_company_list").hover(function(){
		$(".c_team_btn").fadeIn();
	},function(){
		$(".c_team_btn").fadeOut();
	})
	$(".c_team_right").click(function(){
			var c_team_img=$(".c_company_list ul");
			if (!(c_team_img.is(":animated"))){
				if(c_team_img.position().left<=-($(".c_company_list ul li").width()+18)*(c_team_img.find("li").length-3)){
				}else{
				c_team_img.animate({left:c_team_img.position().left-$(".c_company_list ul li").width()-18+"px"},600);
				}
			}
	})
	$(".c_team_left").click(function(){
			var c_team_img=$(".c_company_list ul");
			if (!(c_team_img.is(":animated"))){
			if(c_team_img.position().left>=0){
			}else{
				c_team_img.animate({left:c_team_img.position().left+$(".c_company_list ul li").width()+18+"px"},600);
			}
		}
	})
	$(".y-list-div-ul li").click(function(){
		var index=$(this).index(".y-list-div-ul li");
		$(this).addClass("stages-liclick").siblings().removeClass("stages-liclick");
		$($(".y-list-div-con")[index]).show().siblings().hide();
	})
	for (var i = 0; i <$(".y-new-stages-ul li").length; i++) {
		if(i%4==0){
			$($(".y-new-stages-ul li")[i]).css({marginLeft:"0px"});
		}
	};
});

