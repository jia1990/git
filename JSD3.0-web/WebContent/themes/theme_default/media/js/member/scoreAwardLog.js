define(function(require,exports,module){
	require('jquery');
	var tpl = require('../../tpl/member/awardLogDetail.tpl');//载入tpl模板
	
	//初始化显示表格、搜索
	require.async(['./awardLogShowTable','./searchAwardLog'],function(showTable,search){
		showTable.ajaxUrl('/member/score/getMyAwardLogList.html?ruleId={ruleAward.id!}&time=7&status=99',tpl);
		search.search('/member/score/getMyAwardLogList.html?ruleId={ruleAward.id!}&',tpl);

	});	

	
});

