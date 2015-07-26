<p class="time_text time_textmorning">上午好, <a hidefocus href="">{{#if realName}}{{realName}}！{{/if}}</a> 每一天，努力让梦想更近一些<span>{{#if companyName}}公司名称：{{companyName}}{{/if}}</span></p>
<p class="time_text time_textnoon">中午好, <a hidefocus href="">{{#if realName}}{{realName}}！{{/if}}</a> 吃顿丰富的午餐，为身体加油<span>{{#if companyName}}公司名称：{{companyName}}{{/if}}</span></p>
<p class="time_text time_textafternoon">下午好, <a hidefocus href="">{{#if realName}}{{realName}}！{{/if}}</a> 健康、财富、喜乐全都给您<span>{{#if companyName}}公司名称：{{companyName}}{{/if}}</span></p>
<p class="time_text time_textnight">晚上好, <a hidefocus href="">{{#if realName}}{{realName}}！{{/if}}</a> 夜晚因繁星而美丽，人生因相遇而美好<span>{{#if companyName}}公司名称：{{companyName}}{{/if}}</span></p><ul>
	<li>账户名: <a hidefocus href="/member/useridentify/identify.html" class="strongas" title="{{email}}" >{{userNameCheck email}}</a></li>
	<li>安全等级：<a hidefocus href="/member/useridentify/identify.html" class="gradeas">{{#equal realnameStatus 83}}高{{else}}低{{/equal}}</a></li>
	<li>第三方账户：<a hidefocus href="/member_borrow/security/realNameIdentify.html" class="dredgeas">{{thirdPartyIsOpenBorrow thirdPartyIsOpen thirdPartyAccount}}</a></li>
	<li>认证：<div class="floatrightsdiv">
			<a title="实名认证" hidefocus href="javascript:;" >{{transRealName realNameStatus}}</a>
			<a title="手机认证" hidefocus href="javascripts:;" >{{transMobile mobilePhoneStatus}}</a>
			<a title="邮箱认证" hidefocus href="javascripts:;" >{{transEmail emailStatus}}</a>
	        </div>
    </li>
    <li>上次登录时间：<span class="timelias">{{lastLoginTime}}</span></li>
	<li class="con1inlilast" style="position:relative;"><a href="/member/message/detail.html" style="display:block;width:100%;height:100%;" title="您有{{unReadCount}}条未读消息"></a><span style="color:#FF7800;position:absolute;right:-8px;top:-4px;font-size:12px;">{{unReadCount}}</span></li>
</ul>



