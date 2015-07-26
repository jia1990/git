define(function(require,exports,module){
	require('jquery');
	//判断用户验证信息
	//JSDP-206  wcw 2015-07-02 start 
	//投资总额
    $.ajax({
          type:"post",
          url:"/member/invest/tendAccountSum.html",
          dataType:"json",
          success:function(json){
              /*require.async("/plugins/handlebars-v1.3.0/handlebars-v1.3.0",function(){
            	      $(".c_invest_info").html("");
            	      $(".c_invest_info").append(Handlebars.compile(require("../../tpl/myInvestInfo.tpl"))(json));
                	 
              });*/
        	  $(".c_invest_total").html(json.tendAccountSum);
          }
    });
    //待收本金
    $.ajax({
        type:"post",
        url:"/member/invest/collectedCapital.html",
        dataType:"json",
        success:function(json){
      	  $(".c_wait_capital").html(json.collectedCapital);
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
    //已赚奖励
    $.ajax({
        type:"post",
        url:"/member/invest/awardAmount.html",
        dataType:"json",
        success:function(json){
            /*require.async("/plugins/handlebars-v1.3.0/handlebars-v1.3.0",function(){
          	      $(".c_invest_info").html("");
          	      $(".c_invest_info").append(Handlebars.compile(require("../../tpl/myInvestInfo.tpl"))(json));
              	 
            });*/
      	  $(".c_yes_award").html(json.awardAmount);
        }
  });
    //待收个数、已收个数、总个数
    $.ajax({
        type:"post",
        url:"/member/invest/countCollect.html",
        dataType:"json",
        success:function(json){
            /*require.async("/plugins/handlebars-v1.3.0/handlebars-v1.3.0",function(){
          	      $(".c_invest_info").html("");
          	      $(".c_invest_info").append(Handlebars.compile(require("../../tpl/myInvestInfo.tpl"))(json));
              	 
            });*/
      	  $(".c_collection_count").html("("+json.countCollect+"期)");
          $(".c_yes_collection_count").html("("+json.countCollected+"期)");
      	  $(".c_count").html("("+json.countSum+"期)");
        }
  });
  //JSDP-206  wcw 2015-07-02 end
	//初始化显示表格、搜索
	require.async(['./investShowTable','./searchTenderInvest'],function(showTable,search){
		var tpl = require('../../tpl/myInvest.tpl');//载入tpl模板
		showTable.ajaxUrl('/member/invest/myInvestList.html?borrowName='+ $(".sInput").val(),tpl);
		search.search('/member/invest/myInvestList.html?',tpl);
	});	
	

});
