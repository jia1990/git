<dl class="c_data_title" style="padding:0;">
	<dd class="record_dd1">交易时间</dd>
	<dd class="record_dd5">奖品名</dd>
	<dd class="record_dd1">奖品类型</dd>
	<dd>奖品等级</dd>
	<dd>是否中奖</dd>
	<dd>发放状态</dd>
	<dd class="record_dd6">规则名</dd>				
	<div class="c_clear"></div>
</dl>
{{#each data.list}}
<dl style="padding:0;">
	<dd class="record_dd1">{{transFormatDate addTime}}</dd>
	<dd class="record_dd5">{{hideRemarkName awardName}}</dd>
	<dd class="record_dd1">{{awardTypeConvert  awardType vipLevel vipValidMonth}}</dd>
	<dd>{{awardLevelConvert  awardLevel}}</dd>
	<dd>{{scoreAwardStatus status}}</dd>
	<dd>{{scoreAwardReceiveStatus receiveStatus}}</dd>
	<dd class="record_dd6" style="position:relative;">
		<span class="detail_info" style="cursor:pointer;">{{hideRemarkName ruleName}}</span>
		<div class="c_remark_info" style="display: none;width:210px;">
		<b class="c_recharge_arrow"></b><a href="javascript:void(0);" style="font-size:12px;color:#555;line-height: 22px;">{{ruleName}}</a></div>
	</dd>
	<div class="c_clear"></div>
</dl>
{{/each}}