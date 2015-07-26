<ul>                       
	<li class="record_conss_title">
		<dl>
			<dd class="record_dd2" style="width:130px;">债权ID</dd>
			<dd class="record_dd2">剩余期数</dd>
			<dd class="record_dds1" style="width:130px;">下个还款日</dd>
			<dd class="record_dd2">年利率</dd>
			<dd class="record_dds1" style="width:120px;">待收本息</dd>
			<dd class="record_dds1" style="width:120px;">债权价值</dd>
			<dd class="record_dd2">可转份数</dd>
			<dd class="record_dd60"></dd>
		</dl>
	</li>
</ul>	         		         	         	         	         
<ul class=" record_conssin_num1">
	{{#each data.list}}
		<li>
			<dl>
				<dd class="record_dd2 record_ddColorb" style="width:130px;">
				<!-- //JSDP-35 2015-6-3 gjh start -->
				<a title="{{#equal type 1}}TID-{{else}}CID-{{/equal}}{{creditId}}" style="color:#0c99db;">
					{{#equal type 1}}
					TID-
					{{else}}
					CID-
					{{/equal}}
					<span class="creid">{{stringFormatToLength creditId 7}}</span>
				</a>
				<!-- //JSDP-35 2015-6-3 gjh end -->
				</dd>
				<dd class="record_dd2">{{residuePeriod}}/<span style="color:#A5A5A5;">{{period}}</span></dd>
				<dd class="record_dds1" style="width:130px;">{{noticeNewDateFormat nextRepayMentTime}}</dd>
				<dd class="record_dd2">{{apr}}%</dd>
				<!--JSD-88 gjh 2015-5-8 start -->
				<dd class="record_dds1" style="width:120px;">{{moneyFormat cipalInterest}}元</dd>
				<dd class="record_dds1" style="width:120px;">{{moneyFormat creditValue}}元</dd>
				<!--JSD-88 gjh 2015-5-8 end -->
				<dd class="record_dd2">{{creditCopies}}份</dd>
				<dd class="record_dd60 record_ddColorb revocationddAssignment">转让</dd>
				<input id="type" type="hidden" value="{{type}}"></input>
				<input id="collectionId" type="hidden" value="{{collectionId}}"></input>
			</dl>
		</li>
	{{/each}}
</ul>
