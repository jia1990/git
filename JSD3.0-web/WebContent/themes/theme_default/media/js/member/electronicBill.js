define(function(require, exports, module) {
	require('jquery');
	require('formatterFunction');

	var currentYearMonth = $("#currentYearMonth").val();
	
	//资产统计
	$.ajax({
		url : "/member/bill/electronicBillDetail.html?id="+Math.random(),
		type : "post",
		success : function(result) {
			var account = result.account;
			var netAccount = result.netAccount;
			var financeAsset = result.financeAsset;	
			
			$(".c_net_asset").html("<b>账户净资产</b><span><i>"+moneyFormat(netAccount)+"</i>元</span>");
			$(".c_asset_detail").html("<dd><b style='height: 98px;display: inline-block;'>理财资产</b><span><em>"+moneyFormat(financeAsset)+"</em> 元</span></dd><dd><b style='height: 98px;display: inline-block;'>账户余额</b><span><em>"+moneyFormat(account.usableAccount)+"</em> 元</span></dd>");
			
		}
	});
	
	//查询上一个月数据
	$.ajax({
		type:"post",
		url:"/member/bill/billDynamicDetail.html?id="+Math.random(),
		dataType:"json",
		success:function(data){
			
			//上个月
			$("#currentMonth").html(data.currentMonth);
			//上个月，月末
			$(".dateDisplay").html(data.currentDateLastDay);
			//上个月月末，累计充值金额
			$("#rechargeDiaplay").html(moneyFormat(data.rechargeTotal));
			//上个月月末,累计提现金额
			$("#cashDisplay").html(moneyFormat(data.cashTotal));
			//本月投资总额
			$("#currentTenderAccount").html(moneyFormat(data.tenderAccount));
			//本月投资笔数
			$("#currentTenderSum").html(data.tenderSum);
			//本月结清笔数
			$("#currentCollectedSum").html(data.collectedSum);
			//本月已赚金额
			$(".currentMonthCollectedMoney").html(moneyFormat(data.currentMonthMoney));
			//回款续投金额
			$("#userReturnedMoneySum").html(moneyFormat(data.userReturnedMoneySum));
			//本月已提取金额
			$("#cashMoneyMonth").html(moneyFormat(data.cashMoneyMonth));
			//本月转出份数
			$("#creditSumCurrentMonth").html(data.creditSumCurrentMonth);
			//本月未转出份数
			$("#unCreditSumCurrentMonth").html(data.unCreditSumCurrentMonth);
			//本月转出债权所缴纳的手续费
			$("#creditFeeCurrentMonth").html(data.creditFeeCurrentMonth);
			//本月成交金额(债权转出金额)
			$("#creditFeeSoldAccount").html(data.creditFeeSoldAccount);
			//债权投资(本月投资总额)
			$("#buyCreditMoneyCurrentMonth").html(moneyFormat(data.buyCreditMoneyCurrentMonth));
			//债权投资(本月投资笔数)
			$("#buyCreditCountCurrentMonth").html(data.buyCreditCountCurrentMonth);
			//债权投资(本月已赚金额)
			$("#buyCreditInterestCurrentMonth").html(moneyFormat(data.buyCreditInterestCurrentMonth));
			//债权投资(本月结清)
			$("#creditCollectedSum").html(data.creditCollectedSum);
			//总计（本月投资金额）
			$("#investAmount").html(moneyFormat(data.investAmount));
			//总计（本月已赚金额）
			$("#collectedAmount").html(moneyFormat(data.collectedAmount));
			//截止01月31日，截止01月31日，您在晋商贷累计投资：元
			$("#investAmounteEndTime").html(moneyFormat(data.investAmounteEndTime));
			//截止01月31日，截止01月31日，您在晋商贷累计已赚金额：元
			$("#collectedMoneyEndTime").html(moneyFormat(data.collectedMoneyEndTime));
		}
		});
	
	//点击选择日期
	$(".c_date_range ul li").click(function(){	
		var date = $(this).data("val");	
		$.ajax({
			type:"post",
			url:"/member/bill/billDynamicDetail.html?id="+Math.random(),
			dataType:"json",
			data:{date:date},
			success:function(data){
				//上个月
				$("#currentMonth").html(data.currentMonth);
				//上个月，月末
				$(".dateDisplay").html(data.currentDateLastDay);
				//上个月月末，累计充值金额
				$("#rechargeDiaplay").html(moneyFormat(data.rechargeTotal));
				//上个月月末,累计提现金额
				$("#cashDisplay").html(moneyFormat(data.cashTotal));
				//本月投资总额
				$("#currentTenderAccount").html(moneyFormat(data.tenderAccount));
				//本月投资笔数
				$("#currentTenderSum").html(data.tenderSum);
				//本月结清笔数
				$("#currentCollectedSum").html(data.collectedSum);
				//本月已赚金额
				$(".currentMonthCollectedMoney").html(moneyFormat(data.currentMonthMoney));
				//回款续投金额
				$("#userReturnedMoneySum").html(moneyFormat(data.userReturnedMoneySum));
				//本月已提取金额
				$("#cashMoneyMonth").html(moneyFormat(data.cashMoneyMonth));
				//本月转出份数
				$("#creditSumCurrentMonth").html(data.creditSumCurrentMonth);
				//本月未转出份数
				$("#unCreditSumCurrentMonth").html(data.unCreditSumCurrentMonth);
				//本月转出债权所缴纳的手续费
				$("#creditFeeCurrentMonth").html(data.creditFeeCurrentMonth);
				//本月成交金额(债权转出金额)
				$("#creditFeeSoldAccount").html(data.creditFeeSoldAccount);
				//债权投资(本月投资总额)
				$("#buyCreditMoneyCurrentMonth").html(moneyFormat(data.buyCreditMoneyCurrentMonth));
				//债权投资(本月投资笔数)
				$("#buyCreditCountCurrentMonth").html(data.buyCreditCountCurrentMonth);
				//债权投资(本月已赚金额)
				$("#buyCreditInterestCurrentMonth").html(moneyFormat(data.buyCreditInterestCurrentMonth));
				//债权投资(本月结清)
				$("#creditCollectedSum").html(data.creditCollectedSum);
				//总计（本月投资金额）
				$("#investAmount").html(moneyFormat(data.investAmount));
				//总计（本月已赚金额）
				$("#collectedAmount").html(moneyFormat(data.collectedAmount));
				//截止01月31日，截止01月31日，您在晋商贷累计投资：元
				$("#investAmounteEndTime").html(moneyFormat(data.investAmounteEndTime));
				//截止01月31日，截止01月31日，您在晋商贷累计已赚金额：元
				$("#collectedMoneyEndTime").html(moneyFormat(data.collectedMoneyEndTime));
				}
			});
	})
	
});