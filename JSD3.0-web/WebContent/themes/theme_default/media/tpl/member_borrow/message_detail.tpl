{{#each data.list}}
<ul>
	<li class="c_user_icon">
		<div class="c_info_selected">
			<input type="checkbox" name="id" value="{{id}}">
		</div>
	<li>
	<li class="c_site_check">
		<span class="c_site_arrow"></span>
		<dl>
			<dd><span class="c_check_title" style="cursor:pointer">{{title}}</span><span class="classflag">{{msgRead status}}</span><span class="c_check_date">{{timeMsgFormat addTime}}</span></dd>
			<dd class="c_abstract_user">{{{hideMsgContent content}}}<span class="c_site_down"></span></dd>
			<dd class="c_detail_infos">{{{content}}}</dd>
		<dl>
	</li>
	<div class="c_clear"></div>
</ul>
{{/each}}
<input name="type" type="hidden" id="type" />
