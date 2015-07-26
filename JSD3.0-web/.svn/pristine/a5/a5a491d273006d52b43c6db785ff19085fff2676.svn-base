<ul>
{{#each data.list}}
	<li style="padding:0;">
		<dl>
		    <dd style="width:40px;padding:0;text-align:center;">{{lineId}}</dd>
			<dd style="width:160px;padding:0;text-align:center;" class="y_dd_times">
				<span>{{transFormatDate addTime}}</span>
			</dd>
			<dd style="text-align: left; padding: 0px 0px 0px 40px; width: 120px;">{{userName}}
			{{#equal tenderType 1}}
				<span style="width:140px;padding:0;text-align:center;"color:#7C7C7C;">（自）</span>
			{{/equal}}
			{{#equal tenderType 2}}
				 <span class="{{dataSource tenderType}}" style="width:20px;padding:0;text-align:center;"></span>
			{{/equal}}</dd>
			<dd style="width:140px;padding:0;text-align:center;">￥{{money}}</dd>
			<dd style="width:140px;padding:0;text-align:center;">￥{{account}}</dd>
			<div style="clear:both;"></div>
		</dl>
	</li>
{{/each}}
</ul>
