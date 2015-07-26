<ul class="c_member_title">
	<li>用户名</li>
	<li>会员级别</li>
	<li>有效期限</li>
	<li>来源</li>
	<li>使用状态</li>							
	<div class="c_clear"></div>
</ul>

{{#each data.list}}
<ul>
	<li>{{userName}}</li>
	<li>{{MemberLevelJS vipLevel}}</li>
	<li>{{vipValidMonth}}个月</li>
	<li>{{awardResourceFun awardResource}}</li>
	{{#vipIsConvertFun isConvert}}
		<li>已兑换</li>
		{{else}}		
		<li><a href='javascript:void(0)' data-val='{{id}}' class='changeIsDefault y_address_statisticsd'  style="display:block;">马上兑换</a></li>					
 	{{/vipIsConvertFun}}
 		
	<div class="c_clear"></div>
</ul>					
{{/each}}	