define(function(require,exports,module){
	var showTable = require('./showTable');
	var search = function(param,tpl){
		//具体日期搜索
		$(".c_date_range li").click(function(){
			$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
			var param0 = param + "time="+$(this).data("val");
			showTable.ajaxUrl(param0,tpl);
		});

		//日期范围搜索
		$("#searchBtn").click(function(){
			
			if( $(".c_search_border").val() != undefined){
				var param0 = param + "time=" + $(this).data("val") +"&userName=" + encodeURIComponent($(".c_search_border").val());
			}else{
				var param0 = param + "time=" + $(this).data("val");
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
		
		$(".c_guarantee_sear").click(function(){
			//if($(".c_search_border").val()!=""){
				param0 = param + "&userName=" + $(".c_search_border").val();
				showTable.ajaxUrl(param0,tpl);
			/*}else{
				alert(555);
			}*/
		});
		
		
	};
	exports.search = search;	
});