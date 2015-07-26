<div class="c_exp_active">
	<div class="c_exp_right">
		<span class="c_checkbox_all"><em class="c_exp_checkbox"><div></div></em><em>全选</em></span>
		<span class="c_active_btn c_active_text c_active_valid">查看</span>
		<span class="c_active_btn c_all_active">批量选择</span>
	</div>
</div>
{{#equal petCardPackList.length 0}}
	<div style='width:72px;margin:80px auto 0;' class="no_data_img"><img src='/themes/theme_default/images/no_data.png'/></div>
{{else}}
	<!-- 数字可以手动输入 -->
	{{#each petCardPackList}}
		<dd>
			<div class="c_card_bag">
				<a href="javascript:;">
					<div class="c_active_money"><i>￥</i><span class="money">{{money}}</span></div>
					<div class="c_account_checked"><p>共<span>{{count}}</span>张</p></div>
				</a>
				<p class="c_big_checked"><span></span></p>
			</div>
			<span href="" class="c_noactive_text c_active_valid">查看</span>
		</dd>
	{{/each}}
{{/equal}}
<!-- 数字不可输入 -->
<!-- <dd><img src="../../static/img/front/cloud_global/reward/exp_card.png" alt="" /></dd> -->
<div class="clear"></div>
<!-- 温馨提示 -->
<div class="c_warm_info">
	<p class="c_warm_title">温馨提示：</p>
	<div class="c_reminder_box">
		<p>若您无法通过认证，可点此联系客服：联系客服进行<a href="javascript:void(0);" onclick="javascript:window.open('http://b.qq.com/webc.htm?new=0&amp;sid=4000803000&amp;eid=218808P8z8p8K808R8x8x&amp;o=&amp;q=7&amp;ref='+document.location, '_blank', 'height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');" style="color:#ff7800;">人工处理</a></p>
		<p>用户须知：</p>
		<p>1. 为了确保您的账户安全，实名认证后请及时登录汇潮支付官网修改默认密码及交易密码</p>
		<p>2. 8-16个字符，建议使用字母加数字或符号的组合密码</p>
	</div>
</div>
