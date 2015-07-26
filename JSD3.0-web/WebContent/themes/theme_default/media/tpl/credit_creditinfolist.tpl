<table border="0" cellpadding="0" cellspacing="0">
<tr><th class="c_cliam_num">序号</th><th class="c_tender_man">债权人</th><th>待收本金</th><th>持有份数</th></tr>
{{#if data}}
    {{#each data.list}}	
    	<tr><td class="c_cliam_num">{{addOne @index}}</td><td class="c_tender_man">{{userName}}</td><td class="c_tender_money">{{moneyFormat account}}元</td><td class="c_tender_time">{{copies}}份</td></tr>
	{{/each}}
{{else}}
	<tr><td class="c_cliam_num"><div class='c_nodata' style="margin-left: 150px;margin-top: 140px;"> </div></td></tr>
{{/if}}
</table>