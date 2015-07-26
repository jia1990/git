{{#each data}}
	<li>		
		<a href="/article/detail.html?nid={{nid}}&id={{id}}&prevId={{prevId}}&nextId={{nextId}}" title="{{title}}"><span></span>{{hideNoticeTitle title}}</a>
		<span class="y_spanTimes">{{noticeDateFormat addTime}}</span>
	</li>	
{{/each}}