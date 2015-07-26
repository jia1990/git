<ul>
	<li class="record_conss_title">
		<dl>
			<dd>被邀请人</dd>
		    <dd>邀请日期</dd>
			<dd class="ddwidth90two">奖励红包金额</dd>
			<dd class="ddwidth290two">红包产生方式</dd>
		</dl>
	</li>
</ul>

{{#each data.list}}

<ul class="record_conssin_num " style="display: block;">
	<li>
		<dl>
			<!-- // 20150706  JSDP-212  sxy  start -->
			<dd>{{userName}}&nbsp;&nbsp;</dd>
			<dd>{{MyDateDateFormat addTime}} {{timeDateFormat addTime}}&nbsp;&nbsp;</dd>
			<dd class="ddwidth90two">&nbsp;0&nbsp;</dd>
			<dd class="ddwidth290two">&nbsp;无&nbsp;</dd>
		</dl>
	</li>				
</ul>						
{{/each}}	





