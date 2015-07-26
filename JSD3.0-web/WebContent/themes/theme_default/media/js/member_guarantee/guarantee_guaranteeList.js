define(function(require,exports,module){
	require('jquery');
	var tpl = require('../../tpl/member_guarantee/guarantee_guaranteeList.tpl');//载入tpl模板
	//初始化显示表格、搜索
	require.async(['./showTable','./search'],function(showTable,search){
		showTable.ajaxUrl('/member_guarantee/guarantee/guaranteeList.html?time=0',tpl);
		search.search('/member_guarantee/guarantee/guaranteeList.html?',tpl);
	});	
	
	
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