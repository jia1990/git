define(function(require,exports,module){
	require('jquery');
	//JSDP-206  wcw 2015-07-02 start 
	//收益总额
    $.ajax({
        type:"post",
        url:"/member/invest/myEarned.html",
        dataType:"json",
        success:function(json){
      	  $(".c_invest_total").html(json.myEarned);
        }
  });
    //待收利息
    $.ajax({
        type:"post",
        url:"/member/invest/collectedInterest.html",
        dataType:"json",
        success:function(json){
            /*require.async("/plugins/handlebars-v1.3.0/handlebars-v1.3.0",function(){
          	      $(".c_invest_info").html("");
          	      $(".c_invest_info").append(Handlebars.compile(require("../../tpl/myInvestInfo.tpl"))(json));
              	 
            });*/
      	  $(".c_wait_interest").html(json.collectedInterest);
        }
  });
    //已赚利息
    $.ajax({
        type:"post",
        url:"/member/invest/earnedInterest.html",
        dataType:"json",
        success:function(json){
            /*require.async("/plugins/handlebars-v1.3.0/handlebars-v1.3.0",function(){
          	      $(".c_invest_info").html("");
          	      $(".c_invest_info").append(Handlebars.compile(require("../../tpl/myInvestInfo.tpl"))(json));
              	 
            });*/
      	  $(".c_yes_interest").html(json.earnedInterest);
        }
  });
    //已赚罚息
    $.ajax({
        type:"post",
        url:"/member/invest/myLateInterest.html",
        dataType:"json",
        success:function(json){
      	  $(".c_yes_late_interest").html(json.defaultInterest);
        }
  });
    //已赚奖励
    $.ajax({
        type:"post",
        url:"/member/invest/awardAmount.html",
        dataType:"json",
        success:function(json){
      	  $(".c_yes_award").html(json.awardAmount);
        }
  });
  //JSDP-206  wcw 2015-07-02 end 
	//初始化显示表格、搜索
	require.async(['./investShowTable','./searchMyCollectionInvest'],function(showTable,search){
		var tpl = require('../../tpl/myCollection.tpl');//载入tpl模板
		showTable.ajaxUrl('/member/invest/collectionList.html?status=-1',tpl);
		search.search('/member/invest/collectionList.html?',tpl);
	});	
	

});
