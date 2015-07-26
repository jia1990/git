{{#each data}}
	<li><p class='scrollfont'><a href="/article/detail.html?nid={{nid}}&id={{id}}&prevId={{prevId}}&nextId={{nextId}}" title="{{title}}">{{hideNoticeTitle title}}</a></p><p class='scrolltime'>{{noticeDateFormat addTime}}</p></li>	
{{/each}}