<dl class="c_data_title" style="padding:0;">
	<dd class="record_dd1">交易时间</dd>
	<dd class="record_dd5">借款标名</dd>
	<dd>交易类型</dd>
	<dd>交易金额(元)</dd>
	<dd>完成比例</dd>
	<dd>交易结果</dd>
	<dd class="record_dd1">备注(详细说明)</dd>
	<div class="c_clear"></div>
</dl>
{{#each data.list}}
<dl style="padding:0;">
	<dd class="record_dd1">{{transFormatDate addTime}}</dd>
	<dd class="record_dd5">{{logBorrowNameFun borrowName borrow.id borrowAddTime}}</dd>
	<dd>{{borrowTypeFormatName borrowType}}</dd>
	<dd>{{moneyFormat money}}</dd>
	<dd>{{borrowScales}}%</dd>
	<dd>{{borrowAutoInvestStatus status}}</dd>
	<dd class="record_dd1">
	<span class="detail_info" style="cursor:pointer;">{{hideRemarkName remark}}</span>
	<div class="c_remark_info" style="display: none;width:210px;">
	<b class="c_recharge_arrow"></b><a href="javascript:void(0);" style="font-size:12px;color:#555;line-height: 22px;">{{remark}}</a></div>
	</dd>
	<div class="c_clear"></div>
</dl>
{{/each}}