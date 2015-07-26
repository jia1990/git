{{#each  list}}
	<li>
		<a href="/member_borrow/stagesDetail.html?id={{id}}"><img src="{{picUrl}}"></a>
		<p><a href="/member_borrow/stagesDetail.html?id={{id}}">{{name}}</a></p>
		<div class="p-bottom-div">
			日供 ¥<em>{{dayPaidMoney cost}}</em>
		</div>
		<a href="/member_borrow/stagesDetail.html?id={{id}}" class="p-bottom-a">立即分期</a>
	</li>
{{/each}}