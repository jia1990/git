<ul class="c_member_title">
	<li style="border-left:1px solid #ddd;">用户名</li>
	<li style="width:90px;">VIP会员级别</li>
	<li style="width:86px;">有效期限(月)</li>
	<li style="width:84px;">VIP费用(元)</li>
	<li style="width:86px;">来源类型</li>
	<li style="width:141px;">开始时间</li>
	<li style="width:141px;">结束时间</li>
	<div class="c_clear"></div>
</ul>

{{#each data.list}}
<ul class="record_conssin_num record_conssin_num1" style="display:block;">
	<li style="border-left:1px solid #ddd;">{{userName}}</li>
	<li style="width:90px;">{{MemberLevelJS vipLevel}}</li>
	<li style="width:86px;">{{validMonth}}月</li>
	<li style="width:84px;">{{vipFee}}</li>
	<li style="width:86px;">{{awardResourceFun vipProduceType}}</li>
	<li style="width:141px;">{{transFormatDate startTime}}</li>
	<li style="width:141px;">{{transFormatDate endTime}} </li>							
</ul>						
{{/each}}	