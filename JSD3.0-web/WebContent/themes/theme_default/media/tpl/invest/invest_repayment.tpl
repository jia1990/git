<ul>
{{#each repment.list}}
	<li>
		<dl>
			<dd class="y_dd_times">
				<span>{{transFormatDate repaymentTime}}</span>
			</dd>
			<dd>{{transFormatStyle ../borrow.style}}</dd>
			<dd>￥{{repaymentAccount}}</dd>
		</dl>
	</li>
{{/each}}
</ul>
