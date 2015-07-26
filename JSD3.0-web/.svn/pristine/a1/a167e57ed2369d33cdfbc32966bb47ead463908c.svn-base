{{#each data.list}}
<dd>
	<div class="y_parlex_top">
		<span class="y_parlex_toptitle"><em class="y_emManage">个人经营</em>|<em class="y_emRepayment">{{transFormatStyle style}}</em></span>
		 <h3><a class="hoversc" href="">{{name}}</a></h3>
		<ul>
				<li class="y_parlex_topli1"><span><em class="specialFamily">{{{apr}}}</em>%<span><h4>年化收益</h4></li>
				<li class="y_parlex_topli2">{{{timeLimitFormat type timeLimit borrowTimeType}}}<h4>项目期限</h4></li>
			</ul>
		</div>
		<div class="y_parlex_bottom">
		<div class="c_fund_raise">金额：<b class="specialFamily">{{account}}<span>万</span></b></div>
		<!--直线进度-->
		<div class="y_plan"><span style="width:{{scales}}%;"></span></div>
		</div>
		{{#borrowPreview fixedTime}}
			<div class="y_show_show">
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