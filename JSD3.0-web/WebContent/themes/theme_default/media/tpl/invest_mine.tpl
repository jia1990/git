{{#each data.list}}
<tr>
	<td class="time">{{transFormatDate addTime}}<i></i></td>
	<td class="bidName mark"><em>{{{logBorrowNameFun borrowName borrowId addTime}}}</em>标种标题</td>
	<td><em>{{borrowUserName}}</em>借款人</td>
	<td><em>{{moneyFormat account}}元</em>有效金额</td>
	<td><em><span class="scalesBar"><span style="width:{{scales}}%;"></span></span>{{scales}}%</em>投标进度</td>
	<td><em>{{transFormatTenderStatus status scales}}</em>状态</td>
	<td class="downBtn">{{{AddTenderProtocol status scales id}}}</td>
</tr>
{{/each}}