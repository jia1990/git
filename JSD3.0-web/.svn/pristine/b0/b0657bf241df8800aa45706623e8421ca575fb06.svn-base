define(function(require,exports,module){
    require('jquery');
    var tpl = require('../../tpl/member/memberAwardLog.tpl');//载入tpl模板
    //初始化显示表格、搜索
    require.async(['./showVipAwardLog'],function(showTable){
        showTable.ajaxUrl('/member/member/memberAwardLogList.html',tpl);
    });

});