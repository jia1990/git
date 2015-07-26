<dl class="c_data_title" style="padding:0;">
	<dd class="record_dd1">交易时间</dd>
	<dd class="record_dd1">订单号</dd>
	<dd class="record_dd5">转账类型</dd>
	<dd class="record_dd5">转账金额</dd>
	<dd class="record_dd5">转账是否成功</dd>
	<dd class="record_dd6">备注</dd>				
	<div class="c_clear"></div>
</dl>
{{#each data.list}}
<dl style="padding:0;">
	<dd class="record_dd1">{{transFormatDate addTime}}</dd>
	<dd class="record_dd1">{{transNo}}</dd>
	<dd class="record_dd5">{{transferTypeConvert transType}}</dd>
	<dd class="record_dd5">{{transMoney}}元</dd>
	<dd class="record_dd5">{{cardTransferStatus receiveStatus}}</dd>
	<dd class="record_dd6" style="position:relative;">
		<span class="detail_info" style="cursor:pointer;">{{hideRemarkName remark}}</span>
		<div class="c_remark_info" style="display: none;width:210px;">
		<b class="c_recharge_arrow"></b><a href="javascript:void(0);" style="font-size:12px;color:#555;line-height: 22px;">{{remark}}</a></div>
	</dd>
	<div class="c_clear"></div>
</dl>
{{/each}}