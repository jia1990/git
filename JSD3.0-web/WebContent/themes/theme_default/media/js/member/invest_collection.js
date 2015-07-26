define(function(require,exports,module){
	require('jquery');
	var tpl = require('../../tpl/myCollection.tpl');//载入tpl模板
	require.async(['./investShowTable','./searchInvest'],function(showTable,search){
		showTable.ajaxUrl('/member/invest/collectionList.html?time=-1&status=0&borrowName='+ $(".sInput").val(),tpl);
		search.search('/member/invest/collectionList.html?',tpl);
	});	
});