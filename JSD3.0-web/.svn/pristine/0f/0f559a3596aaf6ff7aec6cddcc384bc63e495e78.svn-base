
	<table border="0" cellpadding="0" cellspacing="0">
	<tr><th class="c_cliam_num" style="color:#fff;">债权买入者</th><th class="c_tender_man">债权卖出者</th><th>交易金额</th><th>交易时间</th></tr>
	{{#if data}}
	    {{#each data.list}}	
	    	<tr><td class="c_cliam_num">{{buyUserName}}</td><td class="c_tender_man">{{sellUserName}}</td><td class="c_tender_money">{{moneyFormat account}}（ {{copise}}份 {{dataSource buyType}}）</td><td class="c_tender_time">{{transFormatDate payTime}}</td></tr>
		{{/each}}
	{{else}}
		<tr><td class="c_cliam_num"><div class='c_nodata' style="margin-left: 150px;margin-top: 140px;"> </div></td></tr>
	{{/if}}
</table>
