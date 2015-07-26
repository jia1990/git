<tr id="addressDetailList" style="background:#F2F2F2;border:none;height:52px;font-size:14px;">
	<td class="y_address_statistics1">收货人</td>
	<td class="y_address_statistics2">所在地区</td>
	<td class="y_address_statistics3">详细地址</td>
	<td class="y_address_statistics4">邮编</td>
	<td class="y_address_statistics5">电话/手机</td>
	<td class="y_address_statistics6">操作</td>
	<td>设置</td>
</tr>
{{#each list}}
	<tr>
		<td class="y_address_statistics1">{{name}}</td>
		<td class="y_address_statistics2">{{provinceName}}{{cityName}}{{countyName}}</td>
		<td class="y_address_statistics3">{{detailAddress}}</td>
		<td class="y_address_statistics4">{{zipCode}}</td>
		<td class="y_address_statistics5">{{phone}}</td>
		<td class="y_address_statistics6"><a href="javascript:;"  class='updateAddress' data-val='{{id}}' style="color: #12adff">修改</a> | <a href="javascript:void(0)" class="delAddress" data-val='{{id}}' style="color: #12adff">删除</a></td>
		{{#isDefaultEqual isDefault}}
		<td class="y_address_statistics7"><span class="y_address_statisticsc">默认地址</span></td>
		{{else}}		
		<td class='y_address_statistics8'><a href='javascript:void(0)' data-val='{{id}}' class='changeIsDefault  y_address_statisticsd'  style="display:none;">设置默认</a></td>						
 		{{/isDefaultEqual}}
 </tr>
{{/each}}


