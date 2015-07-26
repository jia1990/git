{{#each data.list}}
<dl>
	<dd style="width:100px">{{MyDateDateFormat addTime}}<span>{{timeDateFormat addTime}}</span></dd>
	<dd style="width:100px">{{{logBorrowNameFun borrowName borrowId addTime}}}<span>标种标题</span></dd>
	<dd style="width:100px">{{investPeriodFun borrowStyle period timeLimit}}<span>第几期/总期数</span></dd>
	<dd style="width:100px">{{repaymentAccount}}<span>本期应还本息</span></dd>
	<dd style="width:80px">{{interest}}元<span>利息</span></dd>
	<dd style="width:100px">{{MyDateDateFormat repaymentTime}}<span>还款日期</span></dd>
	<dd style="width:100px">{{guaranteeRepaymentStatusFun status}}<span>还款状态</span></dd>
	<dd style="width:100px">{{guaranteeRepaymentLateDaysFun lateDays}}天<span>剩余天数</span></dd>
	<dd style="width:100px">{{guaranteeCompensatoryOperateFun id status}}<span>操作</span></dd>
</dl>
{{/each}}