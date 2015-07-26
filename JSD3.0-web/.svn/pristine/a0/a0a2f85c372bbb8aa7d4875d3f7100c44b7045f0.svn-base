define(function(require,exports,module){
    require("jquery");
    $.ajax({
        type:"get",
        url:"/member_borrow/companyHomeJson.html?id="+window.location.search.split("=")[1],
        dataType:"json",
        success:function(json){
             require.async("/plugins/handlebars-v1.3.0/handlebars-v1.3.0",function(){
                require.async("/plugins/handlebars-v1.3.0/transFormatJson",function(){
                    $("#company").html(Handlebars.compile(require("../../tpl/member_borrow/home.tpl"))(json));
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
            			
            	    });
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
                })
             })
        }
    });
})