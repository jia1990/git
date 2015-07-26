$(function(){
		//日期
		$(".c_recharge ul li").click(function(){
			$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
		})
		$(".c_date_range span").click(function(){
			$(".c_date_range").hide().siblings(".c_recharge_limit").show();
		})
		$(".c_recharge_limit span").click(function(){
			$(".c_recharge_limit").hide().siblings(".c_date_range").show();
		})
		//数据详细说明显示
		$(".c_recharge_detail dd i").hover(function(){
			var index=$(this).index(".c_recharge_detail dd i");
			$(".c_remark_info").hide();
			$(".c_remark_info").eq(index).show();
		},function(){
			$(".c_remark_info").hide();
		})
		$(".c_aside_nav").height($(".c_deal_record").height());
		//基本设置页面
		$(".c_deal_menu li").click(function(){
			var index=$(this).index();
			$(this).addClass("c_menu_this").siblings().removeClass("c_menu_this");
			$(".c_deal_operate").eq(index).show().siblings().hide();	
		})
		$(".c_safe_update").toggle(function(){
			$(this).css({background:"#129CDC",color:"#fff"});
			$(".c_safe_repwd").slideDown().show();
		},function(){
			$(this).css({background:"#fff",color:"#129CDC"});
			$(".c_safe_repwd").slideUp().hide();
		})
		$(".c_old_pwd").blur(function(){
			if($(".c_old_pwd").val()==""){
				$(this).next("span").show();
			}else{
				$(this).next("span").hide();
			}
		})
		$(".c_new_pwd").blur(function(){
			if($(".c_new_pwd").val()==""){
				$(this).next("span").css({display:"inline-block"}).html("请输入新密码");
			}else{
				$(this).next("span").hide();
				if($(".c_new_pwd").val()!=$(".c_new_repwd").val()){
					$(".c_new_repwd").next("span").show().css({display:"inline-block"}).html("请再次输入新密码");
				}
			}
		})
		$(".c_new_repwd").blur(function(){
			if($(".c_new_repwd").val()==""){
				$(this).next("span").css({display:"inline-block"}).html("请再次输入新密码");
			}else if($(".c_new_pwd").val()!=$(".c_new_repwd").val()){
				$(this).next("span").css({display:"inline-block"}).html("两次输入密码不一致");
			}else{
				$(this).next("span").hide();
			}
		})
		

})