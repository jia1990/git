define(function(require,exports,module){
    require('jquery');
   
	   var tpl = require('../../tpl/member/unUsedmoneyBag.tpl');//载入tpl模板
    //初始化显示表格、搜索
    require.async(['./showTableAward'],function(showTable){
        showTable.ajaxUrl('/member/award/dRedPackAwardUnUsedList.html?rpType=2&randomTime='+(new Date()).getTime(),tpl);
    });
   
	//未使用
	$("#noUsed").click(function(){
		
		$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
		
		var tpl = require('../../tpl/member/unUsedmoneyBag.tpl');//载入tpl模板
	  	  require.async(['./showTableAward'],function(showTable){
	  	  showTable.ajaxUrl('/member/award/dRedPackAwardUnUsedList.html?rpType=2&randomTime='+(new Date()).getTime(),tpl);
	  		});  
	});
	
	//已使用
	$("#alreadyUsed").click(function(){
	
		$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
		
		var tpl = require('../../tpl/member/usedmoneyBag.tpl');//载入tpl模板
	  	  require.async(['./showTableAward'],function(showTable){
	  	  showTable.ajaxUrl('/member/award/dRedPackAwardUsedList.html?rpType=2&randomTime='+(new Date()).getTime(),tpl);
	  		});		
	});
	//fengguoqin JSDP-215 20150709  start
	//产生活动红包的展示
	$("#rpActivity").click(function(){
		$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
		
		var tpl = require('../../tpl/member/rpActivityListProduce.tpl');//载入tpl模板
	  	require.async(['./showTableAward'],function(showTable){
	  		showTable.ajaxUrl('/rpActivity/rpActivityProduceList.html?randomTime='+(new Date()).getTime(),tpl);
	  	});	
	});
	
	
	//活动红包的消费
	$("#rpActAlreadyUsed").click(function(){
		$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
		 var tpl = require('../../tpl/member/rpActivityListConsume.tpl');//载入tpl模板
	  	require.async(['./showTableAward'],function(showTable){
	  		showTable.ajaxUrl('/rpActivity/rpActivityConsumeList.html?randomTime='+(new Date()).getTime(),tpl);
	  	});	
	});
    //fengguoqin JSDP-215 20150709  end
	//失效的活动红包
	$("#rpActUnvalid").click(function(){
		$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
		var tpl = require('../../tpl/member/rpActivityListUnvalid.tpl');//载入tpl模板
		require.async(['./showTableAward'],function(showTable){
			showTable.ajaxUrl('/rpActivity/rpActivityConsumeUnvalidList.html?randomTime='+(new Date()).getTime(),tpl);
		});	
	});
});