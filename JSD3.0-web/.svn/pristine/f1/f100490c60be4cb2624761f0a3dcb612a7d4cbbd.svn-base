{{#with uc}}
<div class="MemberCenter_con1 MemberCenter_con1 c_company_main">
	<div class="MemberCenter_con1in" style="height:180px;">
		<div class="c_company_logo" style=""><a href="/member_borrow/info/face.html" hidefocus style=""><img src="/avatar/{{user.userId}}.jpg" width="150" height="150" border="0" alt="" ></a></div>
		<div class="c_company_right">
			<div class="c_company_name">{{companyName}}</div>
			<dl class="c_company_info">
				<dd>公司类型：<span>{{transCompanyType companyType}}</span></dd>
				<dd>所属城市：<span>{{provinceName}} {{cityName}} {{areaName}}</span></dd>
				<dd>公司注册号：<span>{{companyRegNo}}</span></dd>
				<dd>税务登记证号： <span>{{companyTaxNo}}</span></dd>
				<dd>公司地址：<span>{{address}}</span></dd>
			</dl>
		</div>
	</div>
</div>
<div class="c_company_all" style="">
	<div class="c_company_relative">
		<h2>公司简介</h2>
		<div class="c_company_intro">{{companyDesc}}</div>
		<h2>相关图片</h2>
		<div class="c_company_list">
			<ul>
				  {{#if jyzzPicPath}}
			      <li><span><a class="fancybox" title="经营执照" href="{{urlAdd ../../url jyzzPicPath}}"><img src="{{urlAdd ../../url jyzzPicPath}}" title="经营执照" style="width:200px;height:140px;"></a></span><i>经营执照</i></li>
			      {{/if}}
			      {{#if swdjPicPath}}
			      <li><span><a class="fancybox" title="税务登记证" href="{{urlAdd ../../url swdjPicPath}}"><img src="{{urlAdd ../../url swdjPicPath}}" title="税务登记证" style="width:200px;height:140px;"></a></span><i>税务登记证</i></li>
			      {{/if}}
			      {{#if zzjgPicPath}}
			      <li><span><a class="fancybox" title="组织机构证" href="{{urlAdd ../../url zzjgPicPath}}"><img src="{{urlAdd ../../url zzjgPicPath}}" title="组织机构证" style="width:200px;height:140px;"></a></span><i>组织机构证</i></li>
			      {{/if}}
			      {{#if grzxPicPath}}
			      <li><span><a class="fancybox" title="个人征信报告" href="{{urlAdd ../../url grzxPicPath}}"><img src="{{urlAdd ../../url grzxPicPath}}" title="个人征信报告" style="width:200px;height:140px;"></a></span><i>个人征信报告</i></li>
			      {{/if}}
			      {{#if khxkPicPath}}
			      <li><span><a class="fancybox" title="开户许可证" href="{{urlAdd ../../url khxkPicPath}}"><img src="{{urlAdd ../../url khxkPicPath}}"  title="开户许可证" style="width:200px;height:140px;"></a></span><i>开户许可证</i></li>
			      {{/if}}
			      {{#if dkkPicPath}}
			      <li><span><a class="fancybox" title="贷款卡记录（企业）" href="{{urlAdd ../../url dkkPicPath}}"><img src="{{urlAdd ../../url dkkPicPath}}"  title="贷款卡记录（企业）" style="width:200px;height:140px;"></a></span><i>贷款卡记录（企业）</i></li>
			      {{/if}}
			</ul>
			<div class="c_team_btn c_team_left"></div>
			<div class="c_team_btn c_team_right"></div>
		</div>
	</div>
	<!-- 相关信息 -->
	<div class="c_company_contact">
		<h2 style="margin-bottom:16px;">相关信息</h2>
		<dl>
			<dd>公司电话：{{companyPhone}}</dd>
			{{#if companyFax}}
				<dd>公司传真：{{companyFax}}</dd>
			{{/if}}
			{{#if companyEmail}}
				<dd>公司邮箱：{{companyEmail}}</dd>
			{{/if}}
			<dd>联&nbsp;&nbsp;系&nbsp;&nbsp;人：{{../realName}}</dd>
			<dd>联系电话：{{../mobilePhone}}</dd>
			<dd>联系人邮箱：{{../email}}</dd>
		</dl>
	</div>
	<div class="c_clear"></div>
</div>
{{/with}}