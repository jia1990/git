<div class="c_activity_in"><img src="/themes/theme_default/images/activity/activity_in.png" /></div>
{{#each  data.list}}
		<div class="actad nomar">
				<a class="actt"  href="{{content}}"  target="_blank"><span>{{title}}</span>({{subhead}})</a>
				<p>活动时间：<span>{{timeMsgFormatYMD onlineTime}} - {{timeMsgFormatYMD nolineTime}}</span></p>
				<a  href="{{content}}"  target="_blank"><img src="{{picPath}}" width="900" height="240"></a>
		</div> 
{{/each}}