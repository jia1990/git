define(function(require,exports,module){
    require('jquery');
    var tpl = require('../../tpl/member/accountTyunGouLog.tpl');//载入tpl模板
    //初始化显示表格、搜索
    require.async(['./showTableTransfer','./searchTransfer'],function(showTable,search){
        showTable.ajaxUrl('/member/invest/accounTyunGouLogList.html?transferStatus='+"",tpl);
        search.search('/member/invest/accounTyunGouLogList.html?',tpl);
    });
    $(function(){
		//日期
		$(".c_date_range span").click(function(){
			$(".c_date_range").hide().siblings(".c_recharge_limit").show();
		})
		$(".c_recharge_limit span").click(function(){
			$(".c_recharge_limit").hide().siblings(".c_date_range").show();
		})
		$(".c_aside_nav").height($(".c_deal_record").height());
    });
});