<ul>                       
	<li class="record_conss_title">
		<dl>
			<dd class="record_dd2">转让ID</dd>
			<dd class="record_dd2">债权ID</dd>
			<dd class="record_dd2">剩余期数</dd>
			<dd class="record_dd2">年利率</dd>
			<dd class="record_dds1">债权价值</dd>
			<dd class="record_dds1">转让价格</dd>
			<dd class="record_dd2">转让系数 </dd>
			<dd class="record_dd2">剩余份数</dd>
			<dd class="record_dd60"></dd>
		</dl>
	</li>
</ul>	         		         	         	         	         
<ul class=" record_conssin_num1">
	{{#each data.list}}
	<li>
		<dl>
		<!-- //JSDP-35 2015-6-3 gjh start -->
			<dd class="record_dd2 record_ddColorb"><a title="ID-{{id}}" style="color:#0c99db;">ID-<span class="creid">{{stringFormatToLength id 7}}</span></a></dd>
			<dd class="record_dd2 record_ddColorb">
			<a title="TID-{{#equal caType 1}}{{tender.id}}{{else}}{{creditLog.id}}{{/equal}}"  style="color:#0c99db;">
			TID-
			{{#equal caType 1}}
				{{stringFormatToLength tender.id 5}}
			{{else}}
				{{stringFormatToLength creditLog.id 5}}
			{{/equal}}
			</a>
		<!-- //JSDP-35 2015-6-3 gjh end -->
		</dd>
			<dd class="record_dd2">{{getSubPeriodnew creditEndPeriod creditStartPeriod}}/{{creditEndPeriod}}</dd>
			<dd class="record_dd2">{{borrow.apr}}%</dd>
			<dd class="record_dds1">{{getCreditCos creditValue creditCopies}}元/份</dd>
			<dd class="record_dds1">{{getCreditCos creditPrice creditCopies}}元/份</dd>
			<dd class="record_dd2">{{getAccMul creditDis 100}}%</dd>
			<dd class="record_dd2">{{getSubtrNotDouble creditCopies sellCopies}}/{{creditCopies}}</dd>
			{{#equal status 00}}
				<dd class="record_dd60 revocationddrevocation record_ddColorb" data-val="{{id}}">撤销</dd>
			{{/equal}}
			{{#equal  status 01}}

				{{#equal borrowType 103}}
					<dd class="record_dd60 revocationddrevocation1 record_ddColorb" data-val="{{id}}">撤销</dd>
				{{/equal}}
			{{/equal}}
		</dl>
	</li>
	{{/each}}
	<input id="resultFlag" type="hidden" value="{{resultFlag}}">
</ul>
<ul class="record_conssin_num">
	<p class="y_no_nums"></p>
</ul>