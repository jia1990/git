{{#each data.list}}
	<li> 
		<a href="/aboutUs/jsCulture.html?nid={{nid}}&id={{id}}"><img src="{{picPathCheck picPath}}"></a>
		<div class="y_notice_listliright">
		<a href="/aboutUs/jsCulture.html?nid={{nid}}&id={{id}}" title="{{title}}" hidefocus><h1>{{hideNoticeTitle title}}</h1></a>
			<p>{{introduceCheckJsCulture introduction}}</p>
			<a href="/aboutUs/jsCulture.html?nid={{nid}}&id={{id}}" class="y_notice_listlirightas">查看</a><span>{{{noticeDateFormatNew addTime}}}</span>
		</div>
	</li>
{{/each}}