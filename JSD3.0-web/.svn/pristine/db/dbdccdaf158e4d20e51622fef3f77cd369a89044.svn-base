define(function(require,exports,module){
	require('jquery');
	var tpl = require('../../tpl/member/cardTransferLog.tpl');//载入tpl模板
	
	//初始化显示表格、搜索
	require.async(['./cardTransferLogShowTable','./searchCardTransferLog'],function(showTable,search){
		showTable.ajaxUrl('/member/score/getTransferLogList.html?time=7&receiveStatus=99',tpl);
		search.search('/member/score/getTransferLogList.html?',tpl);

	});	

});

