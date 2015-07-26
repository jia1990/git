<div class="y_details_con2left">
		<ul class="y_details_con2leftTitle">
			<li class="y_details_clicksli">
				<span>项目详情</span>
			</li>
			<li class="tenderlist">
				<span >投标记录</span>
			</li>
			<li class="repaymentlist">
				<span >还款表现</span>
			</li>
			<li class="calist">
				<span >债权信息</span>
			</li>
			<li class="creditloglist">
				<span style="border:0;" >转让记录</span>
			</li>
		</ul>
		<!-- 项目详情 -->
		<div class="y_projectDetails y_detailscon2leftcon" style="display:block;">
			<h3>用户信息</h3>
			
			{{#if islogin}}
					{{#with uc}}
					<ul id="detail-login-ul">
						<li>用户昵称：<span>{{../nickName}}</span></li>
						<li>所属行业：<span>{{professional}}</span></li>
						<li>出生年月：<span>{{../birthYM}}</span></li>
						<li>用户性别：<span>{{sex}}</span></li>
						<li>婚姻状况：<span>{{maritalStatus}}</span></li>
						<li>岗位职位：<span>{{position}}</span></li>
						<li>居&nbsp;&nbsp;住&nbsp;地：<span>{{provinceName}}{{cityName}}{{areaName}}</span></li>
						<li>还款来源：<span>{{sourceRepay}}</span></li>
					</ul>
				{{/with}}
			{{else}}
				<p class="y-No-Nogin" style="display: block;">请 <a href="/user/login.html">登录</a> 或 <a href="/user/register.html">注册</a> 后查看</p>
			{{/if}}
			{{#with uc}}
			<h3 style="margin-top:20px;">审核状态</h3>
			<table border="0" cellpadding="0" cellspacing="0" id="detail-login-table">
				<tr>
					<th class="td-th-280">审核项目</th>
					<th>审核项目</th>
					<th class="td-th-400">通过日期</th>
				</tr>
				<tr class="y-tr-dark">
					<td class="td-th-280">信用报告</td>
					<td class="cons-td-bjb"></td>
					<td class="td-th-400">{{noticeNewDateFormat ../addTime}}</td>
				</tr>
				<tr>
					<td class="td-th-280">身份认证</td>
					<td class="cons-td-bjb"></td>
					<td class="td-th-400">{{noticeNewDateFormat ../addTime}}</td>
				</tr>
				<tr class="y-tr-dark">
					<td class="td-th-280">工作认证</td>
					<td class="cons-td-bjb"></td>
					<td class="td-th-400">{{noticeNewDateFormat ../addTime}}</td>
				</tr>
				<tr>
					<td class="td-th-280">收入认证</td>
					<td class="cons-td-bjb"></td>
					<td class="td-th-400">{{noticeNewDateFormat ../addTime}}</td>
				</tr>
				<tr class="y-tr-dark">
					<td class="td-th-280">实地认证</td>
					<td class="cons-td-bjb"></td>
					<td class="td-th-400">{{noticeNewDateFormat ../addTime}}</td>
				</tr>
				<tr>
					<td class="td-th-280">机构担保</td>
					<td class="cons-td-bjb"></td>
					<td class="td-th-400">{{noticeNewDateFormat ../addTime}}</td>
				</tr>
				<tr class="y-tr-dark">
					<td class="td-th-280">房产认证</td>
					<td class="cons-td-bjb"></td>
					<td class="td-th-400">{{noticeNewDateFormat ../addTime}}</td>
				</tr>
				<tr>
					<td class="td-th-280">车产认证</td>
					<td class="cons-td-bjb"></td>
					<td class="td-th-400">{{noticeNewDateFormat ../addTime}}</td>
				</tr>
			</table>
			<ul style="padding:15px 0;border-bottom:1px solid #e0e0e0;">
				<li style="list-style: disc outside;margin-left:27px;color:#808080;"><p class="y_h3_color"  style="padding-left:0;">晋商贷及其合作机构将始终秉持客观公正的原则，严控风险，最大程度的尽力确保借入者信息的真实性，但不保证审核信息100%无误。</p></li>
				<li style="list-style: disc outside;margin-left:27px;color:#808080;"><p class="y_h3_color" style="padding-left:0;">借入者若长期逾期，其个人信息将被公布。</p></li>
			</ul>
			<h3>借款描述</h3>
			{{/with}}
			<p class="y_h3_color">{{{borrowContent}}}</p>
		</div>
		<!-- 投资记录 -->
		<div class="c_cliam_tender y_detailscon2leftcon " style="padding: 20px 54px 0px;">
			{{#if islogin}}
				<div class="tender_list">
				</div>
				<ul class="y_PageNums">
					<div id="tender_list_kkpager" class="kkpager"></div>
				</ul>	
			{{else}}
				<div class="no_login">请 <a href="/user/login.html">登陆</a> 或 <a href="/user/register.html">注册</a> 后查看</div>
			{{/if}}
		</div>
		<!-- 还款表现 -->
		<div class="c_cliam_tender c_behave c_cliam_ y_detailscon2leftcon " style="padding: 20px 54px 0px;">
			<div class="repayment_list">
			</div>
			<ul class="y_PageNums">
				<div id="repayment_list_kkpager"  class="kkpager"></div>
			</ul>
		</div>
		<!-- 债权信息-->
		<div class="c_cliam_tender y_detailscon2leftcon">
			<div class="ca_list">
			</div>
			<ul class="y_PageNums">
				<div id="ca_list_kkpager"  class="kkpager"></div>
			</ul>
		</div>
		<!-- 转让记录 -->
		<div class="c_cliam_tender c_cliam_bot y_detailscon2leftcon ">
			<div class="creditlog_list">
			</div>
			<ul class="y_PageNums">
				<div id="creditlog_list_kkpager"  class="kkpager"></div>
			</ul>
		</div>
</div>
