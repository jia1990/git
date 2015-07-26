<ul>
	<li class="record_conss_title">
		<dl>
			<dd>被邀请人总数：<span style="color:#555555">{{userInvitedSummary.inviteTotal}}</span></dd>
			<dd>可使用：<span style="color:#555555" id="unUsedInvite" data-val="{{unUsedInviteTotal}}">{{unUsedInviteTotal}}</span></dd>
			<dd>已使用：<span style="color:#555555">{{userInvitedSummary.inviteUsedTotal}}</span></dd>		
		</dl>
	</li>
</ul>
<ul class="record_conssin_num " style="display: block;">
	<li>
		<dl>
			<dd style="font-size:14px;">邀请人数</dd>
			<dd style="font-size:14px;">有效月份</dd>
			<dd style="font-size:14px;">会员级别</dd>
			<dd style="font-size:14px;">可兑换</dd>
		</dl>
	</li>
	<li>
	{{#each ruleList}}
		<dl>
			<dd data-val="{{invite_number}}">{{invite_number}}人</dd>
			<dd data-val="{{month}}">{{month}}个月</dd>
			<dd data-val="{{vip_level}}">{{MemberLevelJS vip_level}}</dd>
			<dd><a style="color:#f58232;" data-val="{{invite_number}}" class="vipConvertRule" href="javascript:;">兑换</a></dd>
		</dl>
	{{/each}}   
	</li>
		
</ul>





