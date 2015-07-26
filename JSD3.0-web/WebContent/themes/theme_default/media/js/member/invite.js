define(function(require,exports,module){
    require('jquery');
    
    //复制邀请链接
    $.ajax({
		type:"post",
		url:"/member/invite/getInviteLink.html?trandomTime="+(new Date()).getTime(),
		dataType:"json",
		success:function(json){
			$("#domainLink").val(json.inviteUrl);
		}
    
    });
    
    //已奖励与未奖励邀请个数
    $.ajax({
		type:"post",
		url:"/member/invite/awardInvitedSum.html?trandomTime="+(new Date()).getTime(),
		dataType:"json",
		success:function(json){
			$("#awardInviteSum").html(json.awardInvitedSum);
			$("#unAwardInviteSum").html(json.unAwardInvitedSum);
			$("#rpMoney").html(json.awardInvitedRPSum);
		}
    });
    
	var tpl = require('../../tpl/member/invite.tpl');//载入tpl模板
    //初始化显示表格、搜索
    require.async(['./showTableInvite'],function(showTable){
        showTable.ajaxUrl('/member/invite/awardedInviteList.html?trandomTime='+(new Date()).getTime(),tpl);
    });
    
    //已奖励邀请
    $("#awardedInvite").click(function(){
    	// 20150706  JSDP-212  sxy  start
    	// 点击选项卡先清空数据，解决出现的闪数据情况
		$(".record_conssin_num").text("");
		var tpl = require('../../tpl/member/invite.tpl');
		
		 require.async(['./showTableInvite'],function(showTable){
		   	  showTable.ajaxUrl('/member/invite/awardedInviteList.html?trandomTime='+(new Date()).getTime(),tpl);
		  });
	});	
    
    //未奖励邀请
	$("#unAwardedInvite").click(function(){
		// 20150706  JSDP-212  sxy  start
		// 点击选项卡先清空数据，解决出现的闪数据情况
		$(".record_conssin_num").text("");
		var tpl = require('../../tpl/member/unAwardinvite.tpl');//载入tpl模板
		 
	   	  require.async(['./showTableInvite'],function(showTable){
	   	  showTable.ajaxUrl('/member/invite/unAwardedInviteList.html?&randomTime='+(new Date()).getTime(),tpl);
	   	});
	});
	
	  //邀请兑换(会员)
	$("#exchangeInvite").click(function(){

		var tpl = require('../../tpl/member/inviteVipRule.tpl');//载入tpl模板
		 
	   	  require.async(['./showTableVipConvertRule'],function(showTable){
	   	  showTable.ajaxUrl('/member/invite/vipConvertRule.html?randomTime='+(new Date()).getTime(),tpl);
	   	});
	});
    
    
});