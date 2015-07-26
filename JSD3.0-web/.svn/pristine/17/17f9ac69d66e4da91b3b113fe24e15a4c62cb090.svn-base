{{#each data.list}}
<dl>
	<dd style="width:80px"><b>{{MyDateDateFormat addTime}}</b><span>{{timeDateFormat addTime}}</span></dd>
	<dd style="width:80px">{{{userNameFormat userName}}}<span>借款人邮箱</span></dd>
	<dd style="width:90px">{{{logBorrowNameFun borrow.name borrow.id addTime}}}<span>标种标题</span></dd>
	<dd style="width:60px">{{borrowTypeName borrow.type}}<span>类型</span></dd>
	<dd style="width:90px">{{moneyFormat borrow.account}}<span>金额</span></dd>
	<dd style="width:60px">{{borrow.apr}}%<span>年利率</span></dd>
	<dd style="width:60px">{{period}}<span>期数</span></dd>
	<dd style="width:60px">{{{timeLimitFormat borrow.type borrow.timeLimit borrow.borrowTimeType}}}<span>期限</span></dd>
	<dd style="width:80px">{{transGuaranteeDateFormat repaymentTime}}<span>还款日期</span></dd>
	<dd style="width:70px">{{lastDays}}天<span>剩余天数</span></dd>
	<dd style="width:80px">{{guaranteeOperateFun borrow.id}}<span>操作</span></dd>
	<div class="c_clear"></div>
</dl>
{{/each}}