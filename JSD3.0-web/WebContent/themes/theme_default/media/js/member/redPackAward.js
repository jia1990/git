define(function(require,exports,module){
    require('jquery');
    //静态红包
	    var tpl = require('../../tpl/member/redPackAward.tpl');//载入tpl模板
    //初始化显示表格、搜索
    require.async(['./showTableAward','./searchAward'],function(showTable,search){
        showTable.ajaxUrl('/member/award/sRedPackAward.html?rpType=1&rpStaticStatus=2',tpl);
        search.search('/member/award/sRedPackAward.html?rpType=1',tpl);
    });
    //获取已使用、未使用总额
	$.ajax({
		type:'post',
		url:"/member/award/redPackNum.html",
		dataType:'json',
		success:function(json){
			$(".sRedPack").html(json.sRedPack);
			$(".dUserRedPack").html(json.dUserRedPack);
			$(".remainUserRedPack").html(json.remainUserRedPack);
		}
	})
  //所有奖励数据
    var tpl2 = require('../../tpl/member/unUsedmoneyBag.tpl');//载入tpl模板
	$(".c_member_list dd").click(function(){
		$(".static_award li").eq(0).addClass("award_spans").siblings().removeClass("award_spans");
		$(".activity_award li").eq(0).addClass("award_spans").siblings().removeClass("award_spans");
		$(this).addClass("c_select_this").siblings().removeClass("c_select_this");
		var index=$(this).index(".c_member_list dd");
		$(".c_member_rule").eq(index).show().siblings().hide();
		$(".c_member_nav").height($(".c_member_content").height()-24);
		
		//静态红包点击事件
		if(index==0){
			  //初始化显示表格、搜索
		    require.async(['./showTableAward','./searchAward'],function(showTable,search){
		        showTable.ajaxUrl('/member/award/sRedPackAward.html?rpType=1&rpStaticStatus=2',tpl);
		        search.search('/member/award/sRedPackAward.html?rpType=1',tpl);
		    });
		}else{
			 //活动奖励：
		    //初始化显示表格、搜索
		    require.async(['./showTableAward'],function(showTable){
		        showTable.ajaxUrl('/member/award/dRedPackAwardUnUsedList.html?rpType=2&randomTime='+(new Date()).getTime(),tpl2);
		    }); 	
		}
		
		
	})
	//活动奖励 的获取奖励的点击事件，
	$("#allAward").click(function(){
		
		$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
		
		var tpl = require('../../tpl/member/unUsedmoneyBag.tpl');//载入tpl模板
	  	  require.async(['./showTableAward'],function(showTable){
	  	  showTable.ajaxUrl('/member/award/dRedPackAwardUnUsedList.html?rpType=2&randomTime='+(new Date()).getTime(),tpl2);
	  		});  
	});
	
	//已使用
	$("#alreadyUsed2").click(function(){
		$(".record_conss2").html("");
		$(".record_conss2").show();
		
		var tpl = require('../../tpl/member/usedmoneyBag.tpl');//载入tpl模板
	  	  require.async(['./showTableAward'],function(showTable){
	  	  showTable.ajaxUrl('/member/award/dRedPackAwardUsedList.html?rpType=2&randomTime='+(new Date()).getTime(),tpl);
	  		});		
	});
});