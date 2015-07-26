define(function(require,exports,module){
	require('jquery');
	var tpl = require('../../tpl/member/autoInvestDetail.tpl');//载入tpl模板
	
	//初始化显示表格、搜索
	require.async(['./autoInvestShowTable','./searchAutoInvest'],function(showTable,search){
		showTable.ajaxUrl('/member/autoInvest/autoInvestList.html?time=7&status=99',tpl);
		search.search('/member/autoInvest/autoInvestList.html?',tpl);

	});	
	
});

