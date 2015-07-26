{{#if addr}}
	{{#with addr}}
		<div class="c_choose_address">选择收货地址 <a href="javascript:;" class="updateAddr">[修改]</a></div>
		<div class="c_info_centent"><span>{{name}}</span> <i>{{phone}}</i></div>
		<div class="c_info_centent">{{provinceName}}  {{cityName}}   {{detailAddress}}</div>
		<input type="hidden" id="addrid" value="{{id}}">
	{{/with}}
{{else}}
	<div class="c_info_centent" style="margin-top:10px; line-height:50px;"><span >没有收获地址：<a style="color:#12ADFF;" href="/member/logisticsAddress/addressDetail.html">点击设置</a></span></div>
	<input type="hidden" id="addrid" value="noset">
{{/if}}
