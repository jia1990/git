<ul>                       
	<li class="record_conss_title">
		<dl>
			<dd class="record_dd2">债权ID</dd>
			<dd class="record_dds2">成交份数</dd>
			<dd class="record_dds1">转出时债权总价值</dd>
			<dd class="record_dds1">转出时总成交金额</dd>
			<dd class="record_dds2">实际收入</dd>
			<dd class="record_dds2">交易费用 </dd>
			<dd class="record_dds3">协议下载 </dd>
		</dl>
	</li>
</ul>	         		         	         	         	         
<ul class=" record_conssin_num1">
    {{#each data.list}} 
		<li>
			<dl>
				<dd class="record_dd2 record_ddColorb">
				<!-- //JSDP-35 2015-6-3 gjh start -->
					<a title="ID-{{id}}" style="color:#0c99db;">
						ID-{{stringFormatToLength id 6}}
					</a>
				<!-- //JSDP-35 2015-6-3 gjh end -->
				</dd>
				<dd class="record_dds2">{{sellCopies}}</dd>
				<!--JSD-88 gjh 2015-5-8 start -->
				<dd class="record_dds1">{{moneyFormat creditValue}}元</dd>
				<dd class="record_dds1">{{moneyFormat soldAccount}}元</dd>
				<!--JSD-88 gjh 2015-5-8 end -->
				<dd class="record_dds2">{{getSubtr soldAccount creditValue}}元</dd>
				<dd class="record_dds2">{{sellFee}}元</dd>
				<dd class="record_dds3"><a style="color:#00A9E9;" href='/member/credit/caProtocol.html?caId={{id}}'>下载协议</a></dd> 
			</dl>
		</li>
	{{/each}}
</ul>