define(function(require,exports,module){
	require('jquery');
	var tpl = require('../../tpl/member_guarantee/collection_collectionList.tpl');//载入tpl模板
	//初始化显示表格、搜索
	require.async(['./showTable','./search'],function(showTable,search){
		showTable.ajaxUrl('/member_guarantee/collection/collectionListJSON.html?time=0&userName='+ $(".c_search_border").val(),tpl);
		search.search('/member_guarantee/collection/collectionListJSON.html?',tpl);
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
	//数据详细显示
	$(".c_recharge_detail dd .c_detail_icon").hover(function(){
		var index=$(this).index(".c_recharge_detail dd .c_detail_icon");
		$(".c_remark_info").hide();
		$(".c_remark_info").eq(index).show();
	},function(){
		$(".c_remark_info").hover(function(){
			var index=$(this).index(".c_remark_info");
			$(".c_remark_info").eq(index).show();
		},function(){
			$(".c_remark_info").hide();
		})
	})
});
