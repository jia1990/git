define(function(require,exports,module){
	var showTableScore = require('./showTableScore');
	var search = function(param,tpl){
		//具体日期搜索
		$(".c_date_range li").click(function(){
	
			$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
			
			if( $(".sInput").val() == undefined){
				var param0 = param + "time="+$(this).data("val") + "&scoreTypeNid=" + $(".c_score_type li.c_recharge_this").data("val") ;
			}else{
				var param0 = param + "time="+$(this).data("val") + "&scoreTypeNid=" + $(".c_score_type li.c_recharge_this").data("val") + "&borrowName=" + encodeURIComponent($(".sInput").val()); ;
			}
			showTableScore.ajaxUrl(param0,tpl);
		});

		//积分类型
		$(".c_score_type li").click(function(){
			$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
		
			if( $(".sInput").val() == undefined){
				var param0 = param + "scoreTypeNid=" + $(this).data("val");
			}else{
				var param0 = param + "scoreTypeNid=" + $(this).data("val") +"&borrowName=" + encodeURIComponent($(".sInput").val());
			}
			
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
			showTableScore.ajaxUrl(param0,tpl);
		});

		//日期范围搜索
		$("#searchBtn").click(function(){
			
			if( $(".sInput").val() == undefined || $(".sInput").val() == "")
			{
				var param0 = param + "scoreTypeNid=" + $(".c_score_type li.c_recharge_this").data("val");
			}else{
				var param0 = param + "scoreTypeNid=" + $(".c_score_type li.c_recharge_this").data("val") + "&borrowName=" + encodeURIComponent($(".sInput").val());
			}
			if($('.c_date_range').is(":visible"))
			{
				param0 += "&time="+$('.c_date_range li').data("val");
			}else if($('.c_recharge_limit').is(":visible")){
				param0 += "&startTime="+$('#startTime').val()+"&endTime="+$('#endTime').val();
			}
			showTableScore.ajaxUrl(param0,tpl);
		});
		
		//标种标题
		var nameVal = $(".sInput").val();
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
	
	//积分类型展开切换
	if($(".c_score_type li").length > 8)
	{
		$(".c_score_type li:gt(7)").css("display","none");
		$(".c_score_type li:lt(8)").css("display","inline-block");
		$(".c_score_type").append('<em style="cursor:pointer;color:#0697DA;">更多类型&gt;&gt;</em>');
	}
	else
	{
		$(".c_score_type li:lt(8)").css("display","inline-block");
	}
	$(".c_score_type em").live('click',function(){
		if($(".c_score_type li:gt(7)").is(':hidden'))
		{
			$(".c_score_type li:gt(7)").css("display","inline-block");
			$(".c_score_type em").html('&lt;&lt;默认类型');
		}
		else
		{
			$(".c_score_type li:gt(7)").css("display","none");
			$(".c_score_type em").html('更多类型&gt;&gt;');
		}
	});
	
	
});