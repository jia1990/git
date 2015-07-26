define(function(require,exports,module){
    require('jquery');
	    var tpl = require('../../tpl/member_guarantee/recharge_log.tpl');//载入tpl模板
    //初始化显示表格、搜索
    require.async(['../member/showTableInvest','../member/searchInvest'],function(showTable,search){
        showTable.ajaxUrl('/member/recharge/logList.html?status='+"",tpl);
        search.search('/member/recharge/logList.html?',tpl);
    });
    $(function(){
		//日期
    	
    	$(".c_recharge_nav").next().css({minHeight:"720px"});
    	$(".record_dds6 i").hover(function(){
    		$(".c_remark_info").hide();
    		$(this).next().show();
    	})
    	$(".c_remark_info").mouseleave(function(){
    		$(".c_remark_info").hide();
    	})
    	
    });
});