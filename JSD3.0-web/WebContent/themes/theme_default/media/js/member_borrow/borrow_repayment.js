define(function(require,exports,module){
	require('jquery');
	var tpl = require('../../tpl/member_borrow/borrow_repayment.tpl');//载入tpl模板
	//初始化显示表格、搜索
	if(window.location.search.indexOf('c_recharge_type') == -1)
	{
		require.async(['./showDetailTable','./detailsearch'],function(showTable,search){
			showTable.ajaxUrl('/member/borrow/repaymentList.html?status=99&time=-1',tpl);
			search.search('/member/borrow/repaymentList.html?',tpl);
		});
	}else{
		require.async(['./showTable','./search'],function(showTable,search){
			showTable.ajaxUrl('/member/borrow/repaymentList.html?'+window.location.search.substr(1),tpl);
			search.search('/member/borrow/repaymentList.html?',tpl);
		});
	
	}
	$(".c_recharge ul li").click(function(){
		$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
	})
	$(".c_date_range span").click(function(){
		$(".c_date_range").hide().siblings(".c_recharge_limit").show();
	})
	$(".c_recharge_limit span").click(function(){
		$(".c_recharge_limit").hide().siblings(".c_date_range").show();
	})
	//还款
	$("#toPayBtn").live("click",function(){
		//获取还款ID
		var idVal = $(this).attr("data-val");
		//获取还款金额
		var totalVal = parseInt($(this).attr("data-total"));
		//获取可用余额
		var moneyVal = parseInt($(this).attr("date-money"));
		
		if(totalVal > moneyVal){
			require.async(['/plugins/layer-v1.8.4/skin/layer.css','/plugins/layer-v1.8.4/layer.min'],function(){
				//构造确认框DOM
				$.layer({
				    type: 1,
				    closeBtn: false,
				    title: false,
				    area: ['460px', '240px'],
				    shade: [0.5, '#000'],
				    border: [10, 0.3, '#000'],
				    page: {
				        html: '<div class="fileconfirm"><div class="fileconfirm_title"><h1 class="float_left">还款提示</h1><span class="float_right cancleBtn">X</span></div><div class="fileconfirm_msg"><span><i class="iconfont">&#xe614;</i>您的账户余额不足，请先充值。</span></div><div class="fileconfirmbtn"><a href="/member/recharge/newRecharge.html" class="okBtn">马上去充值</a></div></div>'
				    }
				});	
				//删除操作
				$(".cancleBtn").click(function(){
					layer.closeAll();
				});
			});
		}else{
			window.open("/invest/ymdRepaySkip.html?repaymentId="+idVal);
			require.async(['/plugins/layer-v1.8.4/skin/layer.css','/plugins/layer-v1.8.4/layer.min'],function(){
				//构造确认框DOM
				$.layer({
				    type: 1,
				    closeBtn: false,
				    title: false,
				    area: ['460px', '240px'],
				    shade: [0.5, '#000'],
				    border: [10, 0.3, '#000'],
				    page: {
				        html: '<div class="fileconfirm"><div class="fileconfirm_title"><h1 class="float_left">还款提示</h1><span class="float_right cancleBtn">X</span></div><div class="fileconfirm_msg"><p>您即将跳往环迅支付进行还款操作，还款完成前，请不要关闭本窗口。还款完成后，请根据您的还款结果点击下面按钮。</p></div><div class="fileconfirmbtn"><a href="javascript:;" class="okBtn">还款成功</a><a href="javascript:;" class="cancleBtn closeBtn">还款失败</a></div></div>'
				    }
				});	
				//确认操作
				$(".okBtn").click(function(){
					window.location.reload();	
				});
				//删除操作
				$(".cancleBtn").click(function(){
					layer.closeAll();
				});
			}); 
		}
		
	})
	
});