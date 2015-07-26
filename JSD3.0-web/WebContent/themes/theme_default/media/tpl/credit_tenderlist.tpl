<div style="height: 30px;color:#EC7832;font-size:18px;margin-bottom:5px;text-align: right;">
	<span>加入人次：{{data.page.total}}人</span><span style="margin-left:40px;">投标总额：{{moneyFormat ca.borrow.account}}元</span>
</div>
<table border="0" cellpadding="0" cellspacing="0">
	<tr><th class="c_cliam_num">序号</th><th class="c_tender_man">投标人</th><th>投标金额</th><th>投标时间</th></tr>
	{{#if data.list}}
	    {{#each data.list}}
			<tr><td class="c_cliam_num">{{addOne @index}}</td><td class="c_tender_man">{{userName}}
			{{#equal tenderType 1}}
				<span style="color:#7C7C7C;">（自）</span>
			{{/equal}}
			{{#equal tenderType 2}}
				 <span class="{{dataSource tenderType}}"></span>
			{{/equal}}
			</td><td class="c_tender_money">{{money}}元</td><td class="c_tender_time">{{transFormatDate addTime}}</td></tr>
		{{/each}}
    {{else}}
    	<tr><td class="c_cliam_num"></td><tr>
    	<tr><td class="c_cliam_num"><div class='c_nodata' style="margin-left: 150px;margin-top: 140px;"></div></td><tr>
    	</li>
    {{/if}}
</table>
