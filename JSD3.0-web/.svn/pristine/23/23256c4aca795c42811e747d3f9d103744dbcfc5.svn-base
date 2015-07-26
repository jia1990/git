{{#each data.list}}
<dl>
	<dd style="width:80px">{{MyDateDateFormat addTime}}<span>{{timeDateFormat addTime}}</span></dd>
	<dd style="width:80px">{{{userNameFormat userName}}}<span>借款人</span></dd>
	<dd style="width:100px">{{{logBorrowNameFun borrowName borrowId addTime}}}<span>标种标题</span></dd>
	<dd style="width:60px">{{borrowTypeName type}}<span>类型</span></dd>
	<dd style="width:100px">{{moneyFormat account}}元<span>金额</span></dd>
	<dd style="width:60px">{{apr}}%<span>年利率</span></dd>
	<!--<dd style="width:80px">{{MyDateDateFormat repaymentTime}}<span>还款日期</span></dd>-->
	<dd style="width:60px">{{{timeLimitFormat type timeLimit borrowTimeType}}}<span>期限</span></dd>
	<dd style="width:80px">{{investPeriodFun borrowStyle period timeLimit}}<span>几期/总期数</span></dd>
	<!--<dd style="width:80px">{{guaranteeOperateFun borrowId}}<span>操作</span></dd>-->
	<dd class="c_last_data">
		<i class="c_detail_icon" style="margin-left:20px;"></i>
		<div class="c_remark_info" style="width:194px;padding:8px 12px;left: -164px;">
			<b style="right: 24px;" class="c_recharge_arrow"></b>
			<p><label>还款明细：</label><span>{{guaranteeOperateFun borrowId}}</span></p>
			<p><label>应还日期：</label><span>{{MyDateDateFormat repaymentTime}}</span></p>
			<p><label>应还本金：</label><span>{{capital}}元</span></p>
			<p><label>应还利息：</label><span>{{interest}}元</span></p>
			<p><label>逾期天数：</label><span>{{lateDays}}天</span></p>
			<p><label>逾期罚息：</label><span>{{lateInterest}}元</span></p>
			<p><label>应还总额：</label><span>{{repaymentAccount}}元</span></p>
			
		</div>
		<span style="margin-left:20px;">备注</span>
	</dd>
</dl>
{{/each}}