$(function(){
		$(window).resize(function(){
			/*banner*/
			if($(window).width()>=1000){
			 $(".c_banner_content dl img").css({marginLeft:($(window).width()-$(".c_banner_content dl img").width())/2+"px",marginRight:($(window).width()-$(".c_banner_content dl img").width())/2+"px"});
			}else{
				$(".c_banner_content dl img").css({marginLeft:0,marginRight:0});
			}

		})
		$(window).resize();
		/*banner  srcoll*/
		$($(".c_banner_content dl img")[0]).clone().appendTo(".c_banner_content dl");
		var numy=0;
		var www=$(window).width();
		function settime(){
			numy++;
			if($(window).width()>1000){
				www=$(window).width();
			}else{
				www=1000;
			}
			if($(".c_banner_content dl").css("left").slice(0,-2)<=-www){
				$(".c_banner_content ul li").removeClass("libanner");
				$($(".c_banner_content ul li")[0]).addClass("libanner");
				$(".c_banner_content dl").animate({left:-www*numy},3000,function(){
					$(".c_banner_content dl").css({left:0});
					numy=0;
				});
			}else{
				$(".c_banner_content dl").animate({left:-www*numy},3000);
				$(".c_banner_content ul li").removeClass("libanner");
				$($(".c_banner_content ul li")[numy]).addClass("libanner");
			}
		}
		var ts=setInterval(settime,6000)
		/*banner  srcoll end*/
		/*开关灯
		$(".c_switch_circle").toggle(function(){
			$(".c_switch_line").animate({height: '64px'});
			$(".c_light").css({background:"none"});
		},function(){
			$(".c_switch_line").animate({height: '74px'});
			$(".c_light").css({background:"url(../../images/light.png) no-repeat 10px -4px"});
		})*/
		/*元素跳动*/
		$(".c_team").mouseover(function(){  
			if(!($(".c_finance").is(":animated"))){   //防止其反复跳动
				$(".c_finance").animate({"top":"40px",},200).animate({"top":"20px",},200)  
				.animate({"top":"35px",},200).animate({"top":"20px",},200)  
				.animate({"top":"40px",},200).animate({"top":"30px",},200)  
				.animate({"top":"35px",},200).animate({"top":"40px",},200);  
		    } 
			if(!($(".c_user").is(":animated"))){   //防止其反复跳动
				$(".c_user").animate({"top":"74px",},200).animate({"top":"40px",},200)  
				.animate({"top":"60px",},200).animate({"top":"40px",},200)  
				.animate({"top":"60px",},200).animate({"top":"50px",},200)  
				.animate({"top":"40px",},200).animate({"top":"74px",},200);  
		    } 
			if(!($(".c_service").is(":animated"))){   //防止其反复跳动
				$(".c_service").animate({"top":"0px",},200).animate({"top":"20px",},200)  
				.animate({"top":"30px",},200).animate({"top":"10px",},200)  
				.animate({"top":"20px",},200).animate({"top":"30px",},200)  
				.animate({"top":"10px",},200).animate({"top":"0px",},200);  
		    } 
		});
		$(".c_manage_money").mouseover(function(){  
			if(!($(".c_money_invest").is(":animated"))){   //防止其反复跳动
				$(".c_money_invest").animate({"top":"0",},200).animate({"top":"10px",},200)  
				.animate({"top":"30px",},200).animate({"top":"20px",},200)  
				.animate({"top":"35px",},200).animate({"top":"20px",},200)  
				.animate({"top":"35px",},200).animate({"top":"0",},200);  
		    }
		}); 
		$(".c_trust").mouseover(function(){  
			if(!($(".c_invest_man").is(":animated"))){   //防止其反复跳动
				$(".c_invest_man").animate({"bottom":"20px",},200).animate({"bottom":"40px",},200)  
				.animate({"bottom":"20px",},200).animate({"bottom":"40px",},200)  
				.animate({"bottom":"20px",},200).animate({"bottom":"30px",},200)  
				.animate({"bottom":"10px",},200).animate({"bottom":"20px",},200);  
		    } 
			if(!($(".c_loan_man").is(":animated"))){   //防止其反复跳动
				$(".c_loan_man").animate({"bottom":"130px",},200).animate({"bottom":"150px",},200)  
				.animate({"bottom":"130px",},200).animate({"bottom":"150px",},200)  
				.animate({"bottom":"130px",},200).animate({"bottom":"150px",},200)  
				.animate({"bottom":"140px",},200).animate({"bottom":"130px",},200);  
		    } 
		});
		//安全防护无限旋转
		for (var i = 0; i <= 100000; i++) {
			$(".c_security_img img").rotate({
				animateTo: i,
				duration: 10000000
			});
		}
	})