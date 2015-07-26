define(function(require,exports,module){
	var showTableInvest = require('./investShowTable');
	var search = function(param,tpl){
		//具体日期搜索
		$(".c_date_range li").click(function(){
			
			$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
			
			if( $(".sInput").val() == undefined){
				var param0 = param + "time="+$(this).data("val") + "&status=" + $("#status li.c_recharge_this").data("val") ;
			}else{
				var param0 = param + "time="+$(this).data("val") + "&status=" + $("#status li.c_recharge_this").data("val") + "&borrowName=" + encodeURIComponent($(".sInput").val()); ;
			}
			
			showTableInvest.ajaxUrl(param0,tpl);
		});

		//交易状态
		$("#status li").click(function(){
			$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
		
			if( $(".sInput").val() == undefined){
				var param0 = param + "status=" + $(this).data("val");
			}else{
				var param0 = param + "status=" + $(this).data("val") +"&borrowName=" + encodeURIComponent($(".sInput").val());
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
			showTableInvest.ajaxUrl(param0,tpl);
		});

		//日期范围搜索
		$("#searchBtn").click(function(){
			
			if( $(".sInput").val() == undefined || $(".sInput").val() == "")
			{
				var param0 = param + "status=" + $("#status li.c_recharge_this").data("val");
			}else{
				var param0 = param + "status=" + $("#status li.c_recharge_this").data("val") + "&borrowName=" + encodeURIComponent($(".sInput").val());
			}
			if($('.c_date_range').is(":visible"))
			{
				param0 += "&time="+$('.c_date_range li').data("val");
			}else if($('.c_recharge_limit').is(":visible")){
				param0 += "&startTime="+$('#startTime').val()+"&endTime="+$('#endTime').val();
			}

			showTableInvest.ajaxUrl(param0,tpl);
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
	
	//类型展开切换
	if($("#status a").length > 8)
	{
		$("#status a:gt(7)").css("display","none");
		$("#status a:lt(8)").css("display","inline-block");
		$("#status").append('<em>更多类型&gt;&gt;</em>');
	}
	else
	{
		$("#status a:lt(8)").css("display","inline-block");
	}
	$("#status em").live('click',function(){
		if($("#status a:gt(7)").is(':hidden'))
		{
			$("#status a:gt(7)").css("display","inline-block");
			$("#status em").html('&lt;&lt;默认类型');
		}
		else
		{
			$("#status a:gt(7)").css("display","none");
			$("#status em").html('更多类型&gt;&gt;');
		}
	});
	
	
});