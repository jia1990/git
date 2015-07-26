{{#each data}}
	<li>		
		<a href="/aboutUs/jsCulture.html?nid={{nid}}&id={{id}}" title="{{title}}">
		<span></span>{{hideNoticeTitle title}}</a>
		<span class="y_spanTimes">{{noticeDateFormat addTime}}</span>
	</li>	
{{/each}}