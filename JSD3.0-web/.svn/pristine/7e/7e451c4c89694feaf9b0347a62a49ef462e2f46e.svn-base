<ul class="cpmscroll">
	<li>
		<dl class="dd_titlecpm">
			<dd>收款日期</dd>
			<dd>收款金额</dd>
			<dd>收回本金</dd>
			<dd>收回利息</dd>
			<dd class="cpmlastdd">剩余待收</dd>
		</dl>
	</li>
	{{#each ic.eachPlan}}
		<li>
			<dl>
				<dd style="border-top:1px solid #dadada;">{{MyDateDateFormat repayTime}}</dd>
				<dd style="border-top:1px solid #dadada;">{{moneyFormat total}}</dd>
				<dd style="border-top:1px solid #dadada;">{{moneyFormat capital}}</dd>
				<dd style="border-top:1px solid #dadada;">{{moneyFormat interest}}</dd>
				<dd class="cpmlastdd" style="border-top:1px solid #dadada;">{{moneyFormat needRepay}}</dd>
			</dl>
		</li>
	{{/each}}
</ul>
{{#with ic}}
<ul class="ul_bottomcpm c_bottomcpm">
	<li>
		<dl>
			<dd style="border-top:1px solid #dadada;">总结</dd>
			<dd style="border-top:1px solid #dadada;">{{moneyFormat repayAccount}}</dd>
			<dd style="border-top:1px solid #dadada;">{{moneyFormat account}}</dd>
			<dd style="border-top:1px solid #dadada;">{{moneyFormat repayInterest}}</dd>
			<dd class="cpmlastdd" style="border-top:1px solid #dadada;"></dd>
		</dl>
	</li>
	<li class="libottomcpm">实际总收取：<span>￥{{moneyFormat repayAccount}}</span></li>
</ul>
{{/with}}