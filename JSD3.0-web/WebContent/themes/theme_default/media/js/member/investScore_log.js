define(function(require,exports,module){
    require('jquery');
	    var tpl = require('../../tpl/member/investScore_log.tpl');//载入tpl模板
    //初始化显示表格、搜索
    require.async(['./showTableScore','./searchScoreLogInvest'],function(showTable,search){
        showTable.ajaxUrl('/member/score/scoreLogList.html?time=9',tpl);
        search.search('/member/score/scoreLogList.html?',tpl);
    });
});