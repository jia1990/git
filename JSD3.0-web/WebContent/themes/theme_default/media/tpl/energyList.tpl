{{#each data.list}}
<dd>
	<div class="y_parlex_top">
		<span class="y_parlex_toptitle"><em class="y_emManage">{{transFormatStyle style}}</em>|<em class="y_emRepayment">{{isSwingOutCheck  isSwingout}}</em></span>
		<h3 style="height: 44px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 201px;">
			{{#equal type "113"}}
				<a class="hoversc" style='background: url("{{../../path}}/images/index/bao.png") no-repeat scroll 0% 0% transparent;' href="/invest/detail.html?id={{id}}&startTime={{addTime}}">{{name}}</a>
			{{/equal}}
			{{#equal  type "103"}}
				<a class="hoversc" style='background: url("{{../../path}}/images/index/ya.png") no-repeat scroll 0% 0% transparent;' href="/invest/detail.html?id={{id}}&startTime={{addTime}}">{{name}}</a>
			{{/equal}}
			{{#equal type "115"}}
				<a class="hoversc" style='background: url("{{../../path}}/images/index/bao.png") no-repeat scroll 0% 0% transparent;' href="/invest/detail.html?id={{id}}&startTime={{addTime}}">{{name}}</a>
			{{/equal}}
			{{#equal type "105"}}
				<a class="hoversc" style='background: url("{{../../path}}/images/index/fen.png") no-repeat scroll 0% 0% transparent;' href="/invest/detail.html?id={{id}}&startTime={{addTime}}">{{name}}</a>
			{{/equal}}
		</h3>
		<ul>
			<li class="y_parlex_topli1"><span><em class="specialFamily">{{{apr}}}</em>%<span><h4>年化收益</h4></span></span></li>
			<li class="y_parlex_topli2">{{{timeLimitFormat type timeLimit borrowTimeType}}}<h4>项目期限</h4></span></span></li>
		</ul>
	</div>
	<div class="y_parlex_bottom">
		<div class="c_fund_raise">金额：<b class="specialFamily">{{moneyCheck account}}<span>元</span></b></div>
		<!--直线进度-->
		<div class="y_plan"><span style="width:{{scales}}%;"></span></div>
	</div>
	{{#borrowPreview fixedTime}}
		<div class="y_show_showNew">
			<span></span>倒计时{{inverstcountdown fixedTime}}
		</div>
		<div class="y_show_hiddens" style="display:none">
			<div class="y_surplus">{{{subaccount account accountYes}}}</div>
			{{inverstListOptFun2 scales id addTime status type}}
		</div>
	{{else}}
		<div class="y_show_hiddens">
			<div class="y_surplus">{{{subaccount account accountYes}}}</div>
			{{inverstListOptFun2 scales id addTime status type}}
		</div>
	{{/borrowPreview}}
</dd>
		
{{/each}}