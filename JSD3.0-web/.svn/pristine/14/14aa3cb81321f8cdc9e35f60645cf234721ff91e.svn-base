define(function(require,exports,module){
	require('jquery');
	var tpl = require('../../tpl/borrow_mine.tpl');//载入tpl模板
	//初始化显示表格、搜索
	require.async(['./showDetailTable','./detailsearch'],function(showTable,search){
		if(window.location.search.split("?")[1] == undefined)
		{
			showTable.ajaxUrl('/member/borrow/mineList.html?status=-2&time=9',tpl);
		}
		else
		{
			showTable.ajaxUrl('/member/borrow/mineList.html'+window.location.search+'&time=9',tpl);
			$("#status a:eq(0)").removeClass("current");
			$("#status a:eq(2)").addClass("current");
		}
		search.search('/member/borrow/mineList.html?',tpl);
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