// job.html   start
$(function(){
	$(".y_jsdposts li").hover(function(){
		$(this).find("p").css({color:"#12adff"});
		var index=$(this).index(".y_jsdposts li");
		$(".y_job_information ul li").css("display","none")
		$($(".y_job_information ul li")[index]).css("display","block");
	},function(){
		$(this).find("p").css({color:"#555555"});
	})
	/*跳转指定位置*/
	$(".y_jsdposts li").click(function(e){
		 var tops=$(".y_job_information").offset().top;
			e.preventDefault();
			$(document.documentElement).animate({
				scrollTop: tops
				},200);
			//支持chrome
			$(document.body).animate({
				scrollTop: tops
				},200);

	});
	
	$(".y_job_previous")[0].index=0;
	$(".y_job_previous").click(function(){
		for(i=0;i<$(".y_job_information ul li").length;i++){
			if($($(".y_job_information ul li")[i]).css("display")=="block"){
				 $(".y_job_previous")[0].index=i;
			 	if($(".y_job_previous")[0].index>0){
			 		$(".y_job_information ul li").css("display","none")
					$($(".y_job_information ul li")[$(".y_job_previous")[0].index-1]).css("display","block");
					return;
			 	}
			}
			
		}
	})
		$(".y_job_next").click(function(){
		for(i=0;i<$(".y_job_information ul li").length;i++){
			if($($(".y_job_information ul li")[i]).css("display")=="block"){
				 $(".y_job_previous")[0].index=i;
			 	if($(".y_job_previous")[0].index<$(".y_job_information ul li").length-1){
			 		$(".y_job_information ul li").css("display","none")
					$($(".y_job_information ul li")[$(".y_job_previous")[0].index+1]).css("display","block");
					return;
			 	}
			}
			
		}
	})
})
// job.html   end

// MemberCenter.html
$(function(){
	//time		
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

		$(".y_jy_title li").click(function(){
			var index=$(this).index(".y_jy_title li");
			$(".y_jy_title li").removeClass("liclicksx");
			$(this).addClass("liclicksx");	
			$(".record_conssin_num").css("display","none");
			$($(".record_conssin_num")[index]).css("display","block");
		})
})
// MemberCenter.html   end