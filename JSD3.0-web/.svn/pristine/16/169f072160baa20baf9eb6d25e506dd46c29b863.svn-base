define(function(require, exports, module) {
	require('jquery');

	$.ajax({
		url : "/member/award/redPackNum.html",
		type : "post",
		success : function(result) {
			$("#c_red_one_smeney").html("¥"+result.sRedPack);
			$("#c_red_two_smeney").html("¥"+result.remainUserRedPack);
		}
	});
});