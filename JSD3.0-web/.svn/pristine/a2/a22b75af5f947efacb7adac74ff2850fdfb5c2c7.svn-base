define(function(require,exports,module){
	require('jquery');
	require('alert');
	var tpl = require('../../tpl/member_guarantee/repayment_repaymentDetail.tpl');//载入tpl模板
	var borrowId = window.location.href.split("borrowId=")[1];
	//初始化显示表格、搜索
	require.async(['./showTable','./search'],function(showTable,search){
		showTable.ajaxUrl('/member_guarantee/repayment/getRepayMentDetailList.html?borrowId='+borrowId,tpl);
		search.search('/member_guarantee/repayment/getRepayMentDetailList.html?',tpl);
	});	
	
	
	//代偿
	$(".toCompensateBtn").live("click",function(){
		var idVal = $(this).attr("data-id");
		require.async(['/plugins/layer-v1.8.4/skin/layer.css','/plugins/layer-v1.8.4/layer.min'],function(){
			//构造确认框DOM
			$.layer({
			    type: 1,
			    closeBtn: false,
			    title: false,
			    shade: [0.5, '#000'],
			    border: [10, 0.2, '#000'],
			    page: {
			        html: '<div class="fileconfirm"><div class="fileconfirm_title"><h1 class="float_left">代偿提示</h1><span class="float_right cancleBtn">X</span></div><div class="fileconfirm_msg">是否确认代偿？</div><div class="fileconfirmbtn"><a href="javascript:;" class="okBtn">确认</a><a href="javascript:;" class="cancleBtn">取消</a></div></div>'
			    }
			});	
			//确认操作
			$(".okBtn").click(function(){
				$.ajax({
					url:"/member_guarantee/repayment/compensate.html?repaymentId=" + idVal,
					type:"post",
					dataType:'json',
					success:function(data){
							if(data.result== true){
								//layer.msg(data.msg, 2, -1);
								$.alert(data.msg,"提示",function(){},true);
								window.location.reload();	
							}else{
								//layer.msg(data.msg, 2, -1);
								$.alert(data.msg,"提示",function(){},true);
								window.location.reload();	
							}
					}			
				})
			});
			//删除操作
			$(".cancleBtn").click(function(){
				layer.closeAll();
			});
		});
	
	});
	
	
	//日期
	$(".c_recharge ul li").click(function(){
		$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
	})
	$(".c_date_range span").click(function(){
		$(".c_date_range").hide().siblings(".c_recharge_limit").show();
	})
	$(".c_recharge_limit span").click(function(){
		$(".c_recharge_limit").hide().siblings(".c_date_range").show();
	});
	
});
