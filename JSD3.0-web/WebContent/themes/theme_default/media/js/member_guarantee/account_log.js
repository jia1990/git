define(function(require,exports,module){
	require('jquery');
	//require('headerfooter');
	$("#status a:eq(0)").addClass("current");
	var tpl = require('../../tpl/member_guarantee/account_log.tpl');//载入tpl模板
	//初始化显示表格、搜索
	require.async(['./showTable','./search'],function(showTable,search){
		showTable.ajaxUrl('/member/account/logList.html?typeName='+0,tpl);
		search.search('/member/account/logList.html?',tpl);
		
		    	
	});
	$(function(){
		
		$(".c_recharge_more").hide();
		$(".c_recharge_type .c_right_more").click(function(){
			$(".c_recharge_more").show();
			$(".c_right_more").hide();
			$(".c_left_more").css({display:"inline-block"});
		})
		$(".c_recharge_type .c_left_more").click(function(){
			$(".c_recharge_more").hide();
			$(".c_left_more").hide();
			$(".c_right_more").show();
		})
		
	});
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
		$(".c_aside_nav").height($(".c_deal_record").height());

	})
	
	
});