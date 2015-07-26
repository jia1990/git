<div class="c_goods_address defaultAddr">
</div>
<div class="c_goods_address setAddr" style="display:none ;">
	<div class="c_choose_address">收货人信息 <a href="javascript:;" class="saveAddr">保存收货人信息</a></div>
	<dl class="c_goods_man">
		{{#each list}}
			{{#isDefaultEqual isDefault}}
				<dd><input name="addrcheckbox" type="checkbox" value="{{id}}" checked/><span class="c_default_address"><i>{{name}}  {{provinceName}}  {{cityName}}   {{detailAddress}}   {{phone}}</i></span></dd>
			{{else}}
				<dd class="c_no_default"><input  name="addrcheckbox" type="checkbox" value="{{id}}" /><span><i>{{name}}  {{provinceName}}  {{cityName}}   {{detailAddress}}   {{phone}}</i></span></dd>
	 		{{/isDefaultEqual}}
		{{/each}}
		<dd><a href="/member/logisticsAddress/addressDetail.html" target="_black" class="c_new_address">使用新地址</a></dd>
	</dl>
	<div class="c_save_info"><a href="javascript:void(0);" class="saveAddr">保存收货人信息</a></div>
</div>