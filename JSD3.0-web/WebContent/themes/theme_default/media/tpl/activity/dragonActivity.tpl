{{#each data}}
		<li>
			<dl>
				<dd class="dw-list-dd1">
					<p><a href="/invest/detail.html?id={{borrowId}}" target="_blank">{{borrowNameStr borrowNameStr}}</a></p>
					<p>{{borrowAprStr borrowNameStr}}%收益</p>
				</dd>
				<dd class="dw-list-dd2">
					<p>带头大哥</p>
					<p>土豪</p>
					<p>终结者</p>
					
				</dd>
				<dd class="dw-list-dd3">
					{{#each list}}
						<p>{{hideUserName userName}}</p>
					{{/each}}
				</dd>
				<dd class="dw-list-dd4">
					{{#each list}}
						<p>{{tenderMoney}}</p>
					{{/each}}
					{{#equal list.length 2}}
						<p>未揭晓,赶紧抢</p>
					{{/equal}}
					{{#equal list.length 1}}
						<p>未揭晓,赶紧抢</p>
						<p>未揭晓,赶紧抢</p>
					{{/equal}}
				</dd>
				<dd class="dw-list-dd5">
					{{#each list}}
						<p>{{awardMoney}}现金券</p>
					{{/each}}
				</dd>
			</dl>
		</li>
{{/each}}