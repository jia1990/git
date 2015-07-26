<thead>
	<tr>
		<th>标的名称</th>
		<th>金额</th>
		<th>年利率</th>
		<th>期限</th>
		<th>发布时间</th>
		<th>进度</th>
		<th>操作</th>
	</tr>
</thead>
<tbody>
{{#each list}}
	<tr>
		<td class="bidName mark"><em>{{{logBorrowNameFun name id addTime}}}</em></td>
		<td>{{moneyFormat account}}元</td>
		<td>{{{apr}}}%</td>
		<td>{{{timeLimitFormat type timeLimit borrowTimeType}}}</td>
		<td>{{startTime}}</td>
		<td><em><span class="scalesBar"><span style="width:{{scales}}%;"></span></span>{{scales}}%</em></td>
		<td>
			{{#if fixedTime}}
				<div class="yomibox" data="{{transFormatDate fixedTime}}"/>
			{{/if}}
			<a {{#if fixedTime}}style="display:none"{{/if}} href="/invest/detail.html?id={{id}}&startTime={{addTime}}" title="{{memberInvestBtn scales}}">{{memberInvestBtn scales}}</a>
		</td>
	</tr>
{{/each}}
</tbody>
<tfoot>
	<tr>
		<td colspan="7"><a href="/invest/index.html" title="查看更多招标中的项目">查看更多招标中的项目&gt;&gt;</a></td>
	</tr>
</tfoot>
