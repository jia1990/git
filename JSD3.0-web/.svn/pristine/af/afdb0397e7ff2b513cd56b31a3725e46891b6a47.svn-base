{{#each data.list}}
<dd>
	<div class="y_parlex_top">
		<span class="y_parlex_toptitle"><em class="y_emManage">{{transFormatStyle style}}</em>|<em class="y_emRepayment">{{isSwingOutCheck  isSwingout borrowTimeType}}</em></span>
		<h3 style="height: 44px;">
			{{#equal type 105}}
				<a class="hoversd" href="/invest/detail.html?id={{id}}&startTime={{addTime}}">{{name}}</a>
			{{else}}
				{{#equal type 103}}
					<a class="hoversc" href="/invest/detail.html?id={{id}}&startTime={{addTime}}">{{name}}</a>
				{{else}}
					<a class="hoversc" style="background:url('/themes/theme_default/images/index/bao.png') no-repeat scroll 0 0 rgba(0, 0, 0, 0)" href="/invest/detail.html?id={{id}}&startTime={{addTime}}">{{name}}</a>
				{{/equal}}
			{{/equal}}
		</h3>
		<ul>
			<li class="y_parlex_topli1"><span><em class="specialFamily">{{{apr}}}</em>%<span><h4>年化收益</h4></span></span></li>
			<li class="y_parlex_topli2">{{{timeLimitFormat type timeLimit borrowTimeType}}}<h4>项目期限</h4></span></span></li>
		</ul>
		<i class="tender_info">无需满标，即投计息</i>
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
			{{inverstListOptFun scales id addTime}}
		</div>
	{{else}}
		<div class="y_show_hiddens">
			<div class="y_surplus">{{{subaccount account accountYes}}}</div>
			{{inverstListOptFun scales id addTime}}
		</div>
	{{/borrowPreview}}
</dd>
		
{{/each}}