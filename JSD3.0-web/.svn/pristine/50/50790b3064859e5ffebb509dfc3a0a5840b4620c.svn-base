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
			<dd>{{rpStaticReferrerName}}&nbsp;&nbsp;</dd>
			<dd>{{timeFormat addTime}}&nbsp;&nbsp;</dd>
			<dd class="ddwidth90two">{{rpStaticMoney}}&nbsp;&nbsp;</dd>
				<!-- // 20150706  JSDP-212  sxy  start -->
				{{#equal rpStaticRes 'static_rp_recommend'}}
					<dd class="ddwidth290two">推荐好友送红包</dd>
				{{/equal}}
				{{#equal rpStaticRes 'static_rp_invited_first_invest'}}
					<dd class="ddwidth290two">首次投资<span class='lowestMoney'>></span>元</dd>
				{{/equal}}
			
		</dl>
	</li>				
</ul>						
{{/each}}	





