{{#each data.list}}
	<li data-id="{{id}}"><span>{{{noticeDateFormatNew addTime}}}</span>
	<b></b><a href="javascript:;" title="{{title}}" hidefocus>{{stringFormatToLength title 30}}</a><i></i><p></p></li>			
{{/each}}


