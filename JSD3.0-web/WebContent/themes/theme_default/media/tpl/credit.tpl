{{#each calist.list}}
	<dd>
		<div class="y_parlex_top">
			<span class="y_parlex_toptitle"><em class="y_emManage">{{borrowTypeFormatName borrowType}}</em>|<em class="y_emRepayment">{{transFormatStyle borrowStyle}}</em></span>
			<h3 style="height: 44px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 201px;">
			{{#equal borrowType "113"}}
				<a class="hoversc" href="/credit/index/creditDetail.html?id={{caid}}" style='background: url("{{../../path}}/images/index/bao.png") no-repeat scroll 0% 0% transparent;'>
			{{/equal}}
			{{#equal borrowType "103"}}
				<a class="hoversc" href="/credit/index/creditDetail.html?id={{caid}}" style='background: url("{{../../path}}/images/index/ya.png") no-repeat scroll 0% 0% transparent;'>
			{{/equal}}
			{{#equal borrowType "115"}}
				<a class="hoversc" href="/credit/index/creditDetail.html?id={{caid}}" style='background: url("{{../../path}}/images/index/bao.png") no-repeat scroll 0% 0% transparent;'>
			{{/equal}}
				{{borrowName}}
			</a>
			</h3>
			<ul style="padding-left:0px;">
				<li class="y_parlex_topli1" style="width:100px;padding-left:0px;text-align:center;"><span><em class="specialFamily" style="margin-right:1px;">{{borrowApr}}</em>%<span><h4 style="text-align:center;">年化收益</h4></span></span></li>
				<li class="y_parlex_topli2" style="padding-left:11px;padding-right:11px;"><span><em class="specialFamily" style="margin-right:1px;">{{getTimelimit timelimit}}</em>天<span><h4 style="text-align:center;">剩余期限</h4></span></span></li>
			</ul>
		</div>
		<div class="y_parlex_bottom">
			<div class="c_fund_raise" style="font-size:14px;color:#555555;position:relative;top:-10px;">转出价格<b class="specialFamily" style="color:#444444;padding-left:12px;">{{moneyFormat creditAccount}}</b></div>
			<!--直线进度-->
			<div class="y_plan"><span style="width:{{getCreditPercent sellCopies totalCopies}}%"></span></div>
		</div>
		<div class="y_show_hiddens">
			<div class="y_surplus" style="font-size:14px;text-align:left;padding-left:13px;line-height: 40px;">每份价值<em class="specialFamily" style="padding-left:10px;">{{getCreditCos creditAccount totalCopies}}元 </em></div>
			{{{ListCreditStatusFun status caid}}}
		</div>
	</dd>
{{/each}}
