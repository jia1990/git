{{#each data.list}}
	<li data-id="{{id}}">
		<span>{{{noticeDateFormatNew addTime}}}</span>
		<div class="clearfix">
		<img src="/themes/theme_default/images/rongdu.jpg" alt="">
		<div class="float_left">
			<h2><a href="/article/detail.html?nid={{nid}}&id={{id}}" title="{{title}}">
			{{hideNoticeTitle title}}</a></h2>
			<p>{{hideNoticIntroduction introduction}}</p>
			<a href="/article/detail.html?nid={{nid}}&id={{id}}" title="{{title}}" class="more">查看详情&gt;</a>
		</div>
		</div>
	</li>
{{/each}}