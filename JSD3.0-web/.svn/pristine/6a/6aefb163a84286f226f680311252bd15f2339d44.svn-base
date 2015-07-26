<ul>                       
	<li class="record_conss_title">
		<dl>
			<dd class="record_dd2">债权ID</dd>
			<dd class="record_dd2">剩余期数</dd>
			<dd class="record_dds3">年利率</dd>
			<dd class="record_dds1">转入时债权价值</dd>
			<dd class="record_dds3">转入份数</dd>
			<dd class="record_dds3">交易金额</dd>
			<dd class="record_dd2">盈亏</dd>
			<dd class="record_dds3">转入时间</dd>
			<dd class="record_dds3">协议下载</dd>
		</dl>
	</li>
</ul>	         		         	         	         	         
<ul class="record_conssin_num1">
	{{#each data.list}}
	<li>
		<dl>
		<!-- //JSDP-35 2015-6-3 gjh start -->
			<dd class="record_dd2 record_ddColorb"><a href='/credit/index/creditDetail.html?id={{caId}}' target='_blank' title="CID-{{caId}}" style="color:#0c99db;">CID-{{stringFormatToLength caId 5}}</a></dd>
		<!-- //JSDP-35 2015-6-3 gjh end -->
			<dd class="record_dd2">{{creditStartPeriod}}/{{creditEndPeriod}}</dd>
			<dd class="record_dds3">{{caApr}}%</dd>
			<!--JSD-88 gjh 2015-5-8 start -->
			<dd class="record_dds1">{{moneyFormat buyValue}}元</dd>
			<dd class="record_dds3">{{buyCopies}}份</dd>
			<dd class="record_dds3">{{moneyFormat buyAccount}}元</dd>
			<!--JSD-88 gjh 2015-5-8 end -->
			<dd class="record_dd2 record_ddColorb">{{#equal buyCreditBalance 0}}亏{{else}}盈{{/equal}}</dd>
			<dd class="record_dds3">{{noticeNewDateFormat addTime}}</dd>
			<dd class="record_dds3"><a style="color: #00A9E9;" href='/member/credit/clProtocol.html?caId={{caId}}&clId={{id}}'>下载协议</a></dd>
		</dl>
	</li>
	{{/each}}
</ul>
