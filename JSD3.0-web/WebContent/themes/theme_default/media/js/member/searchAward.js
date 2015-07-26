define(function(require,exports,module){
	var showTableAward = require('./showTableAward');
	var search = function(param,tpl){
		//已使用
	$("#alreadyUsed").click(function(){
	
		$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
			
		var param0 = param + "&time="+$(this).data("val") + "&rpStaticStatus=1" ;
			
		showTableAward.ajaxUrl(param0,tpl);
	});
	//已过期
	$("#outOfDate").click(function(){
	
		$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
			
		var param0 = param + "&time="+$(this).data("val") + "&rpStaticStatus=3" ;
			
		showTableAward.ajaxUrl(param0,tpl);
	});
	//未使用
	$("#noUsed").click(function(){
	
		$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
			
		var param0 = param + "&time="+$(this).data("val") + "&rpStaticStatus=2" ;
			
		showTableAward.ajaxUrl(param0,tpl);
	});
	};
	exports.search = search;
});