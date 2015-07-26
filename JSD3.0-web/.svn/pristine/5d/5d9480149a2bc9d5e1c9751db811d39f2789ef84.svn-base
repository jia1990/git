<div style="height: 30px;color:#EC7832;font-size:18px;margin-bottom:5px;text-align: right;">
	<span>已还本息：{{moneyFormat amortized}}元</span><span style="margin-left:40px;">待还本息：{{moneyFormat noamortized}}元</span>
</div>
<table border="0" cellpadding="0" cellspacing="0">
	<tr><th class="c_cliam_num">合约还款日期</th><th class="c_tender_man" style="color:#fff;">状态</th><th>应还本息</th><th>应付罚息</th><th class="c_cliam_date">实际还款日期</th></tr>
	{{#if data}}
		{{#each data.list}}
			<tr><td class="c_cliam_num">{{noticeNewDateFormat repaymentTime}}</td><td class="c_tender_man" style="color:#06b5ff;">{{repayStatusFun status}}</td><td class="c_tender_money">{{repaymentAccount }}元</td><td class="c_tender_time">0.00元</td><td class="c_tender_time">{{transFormatDate repaymentYesTime}}</td></tr>
		{{/each}}
    {{else}}
    	<tr><td class="c_cliam_num"><div class='c_nodata' style="margin-left: 150px;margin-top: 140px;"> </div></td></tr>
    {{/if}}
</table>
