define(function(require,exports,module){
	var showTableInvest = require('./awardLogShowTable');
	var search = function(param,tpl){
		//具体日期搜索
		$(".c_date_range li").click(function(){
			$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
			var param0 = param + "time=" + $(this).data("val") + "&awardType=" + $("#c_awardType_status li.c_recharge_this").data("val") ;
			showTableInvest.ajaxUrl(param0,tpl);
		});

		//交易状态(结果)
		$("#c_awardType_status li").click(function(){
			$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
		
			var param0 = param + "awardType=" + $(this).data("val");
		
			if (!$(".c_recharge_limit").is(":hidden")){
				if($("#startTime").val()!=""){
					param0 += "&startTime=" + $("#startTime").val();
				}
				if($("#endTime").val() != ""){
					param0 +=  "&endTime="+ $("#endTime").val();
				}
			}else{	
			
				param0 += "&time=" + $(".c_date_range li.c_recharge_this").data("val");
			}
			showTableInvest.ajaxUrl(param0,tpl);
		});

		//日期范围搜索
		$("#searchBtn").click(function(){
			
			var param0 = param + "awardType=" + $("#c_awardType_status li.c_recharge_this").data("val");
		
			if($('.c_date_range').is(":visible"))
			{
				param0 += "&time="+$('.c_date_range li').data("val");
			}else if($('.c_recharge_limit').is(":visible")){
				param0 += "&startTime="+$('#startTime').val()+"&endTime="+$('#endTime').val();
			}
			showTableInvest.ajaxUrl(param0,tpl);
		});
		
	};
	exports.search = search;
	
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

	
});