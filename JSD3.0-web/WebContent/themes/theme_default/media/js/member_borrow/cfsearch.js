define(function(require,exports,module){
	var showTable = require('./cfshowTable');
	var search = function(param,tpl){
		//具体日期搜索
		$(".c_date_range li").click(function(){
			$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
			if( $(".sInput").val() == undefined){
				var param0 = param + "time="+$(this).data("val") + "&status=" + $(".c_recharge_type li.c_recharge_this").data("val") ;
			}else{
				var param0 = param + "time="+$(this).data("val") + "&status=" + $(".c_recharge_type li.c_recharge_this").data("val") + "&borrowName=" + $(".sInput").val();
			}
			showTable.ajaxUrl(param0,tpl);
		});

		//交易状态
		$(".c_recharge_type li").click(function(){
			$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
			if( $(".sInput").val() == undefined){
				var param0 = param + "status=" + $(this).data("val");
			}else{
				var param0 = param + "status=" + $(this).data("val") +"&borrowName=" + $(".sInput").val();
			}
			
			if (!$(".c_recharge_limit").is(":hidden")){
				if($("#startTime").val()!=""){
					param0 += "&startTime=" + $("#startTime").val();
				}
				if($("#endTime").val() != ""){
					param0 +=  "&endTime="+ $("#endTime").val();
				}
			}
			else{			
				param0 += "&time=" + $(".c_date_range li.c_recharge_this").data("val");
			}
			showTable.ajaxUrl(param0,tpl);
		});

		//日期范围搜索
		$(".c_recharge_sear").click(function(){
			if( $(".sInput").val() == undefined || $(".sInput").val() == "")
			{
				var param0 = param + "status=" + $(".c_recharge_type li.c_recharge_this").data("val");
			}
			else
			{
				var param0 = param + "status=" + $(".c_recharge_type li.c_recharge_this").data("val") + "&borrowName=" + $(".sInput").val();
			}
			if($('#shortTime').is(":visible"))
			{
				param0 += "&time="+$('.c_date_range li.c_recharge_this').data("val");
			}
			else if($('.c_recharge_limit').is(":visible"))
			{
				param0 += "&startTime="+$('#startTime').val()+"&endTime="+$('#endTime').val();
			}
			showTable.ajaxUrl(param0,tpl);
		});
		
		//标种标题
		var nameVal = $(".sInput").val();
	};
	exports.search = search;
	
	
});