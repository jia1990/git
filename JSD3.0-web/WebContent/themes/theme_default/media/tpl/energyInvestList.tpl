{{#each data.list}}
{{#borrowPreview fixedTime}}
<dd>
	<div class="c_parlex_top">
		<span>
		{{#equal type 113}}
		<img src="/themes/theme_default/images/index/imgs.jpg" width="279" height="176" border="0" alt="">
		{{else}}
		<img src="/themes/theme_default/images/netphoto.jpg">
		{{/equal}}
		</span>
		<h3><a class="hoversc" href="/invest/detail.html?id={{id}}&startTime={{addTime}}">{{name}}</a></h3>
	</div>
	<span class="y_parlex_toptitle1"><em class="y_emManage">{{companyType}}</em>|<em class="y_emRepayment">{{transFormatStyle style}}</em></span>
	<div class="c_parlex_bottom">
		<div class="c_fund_raise">剩余金额<b class="specialFamily">{{subAccNum account accountYes}}<span>元</span></b></div>
		<!--直线进度-->
		<div class="y_plan"><span style="width:{{scales}}%;"></span></div>
	</div>
	<div class="y_show_showNew" style="padding-top:0px;	padding-left:60px;">
			<span></span>倒计时{{inverstcountdown fixedTime}}
		</div>
		<div class="y_show_show" style="display:none">
			<div class="y_surplus">{{{subaccount account accountYes}}}</div>
			{{inverstListOptFun1 scales id addTime}}
	</div>
</dd>
{{else}}
<dd class="y_oldobj">
	<div class="c_parlex_top">
		<span>
		{{#equal type 113}}
		<img src="/themes/theme_default/images/index/imgs.jpg" width="279" height="176" border="0" alt="">
		{{else}}
		<img src="/themes/theme_default/images/netphoto.jpg">
		{{/equal}}
		</span>
		<h3><a class="hoversc" href="/invest/detail.html?id={{id}}&startTime={{addTime}}">{{name}}</a></h3>

	</div>
	<span class="y_parlex_toptitle1"><em class="y_emManage">{{companyType}}</em>|<em class="y_emRepayment">{{transFormatStyle style}}</em></span>
	<div class="c_parlex_bottom">
		<div class="c_fund_raise">剩余金额<b class="specialFamily" style="margin-left:5px;">{{subAccNum account accountYes}}<span style="margin-left:5px;">元</span></b></div>
		<!--直线进度-->
		<div class="y_plan"><span style="width:{{scales}}%;"></span></div>
		<ul>
			<li><b class="specialFamily orangebs">{{{apr}}}<span>%</span></b><i>年化收益</i></li>
			<li><b class="specialFamily">{{moneyFormatNew account}}<span>万元</span></b><i>项目金额</i></li>
			<li style="border:none;"><b class="specialFamily">{{{timeLimitFormat type timeLimit borrowTimeType}}}</b><i>项目期限</i></li>
		</ul>
	</div>
	{{inverstListOptFun1 scales id addTime}}
</dd>
{{/borrowPreview}}
{{/each}}