
<ul>
	<li class="record_conss_title">
		<dl>
			<dd class="record_dd1" style="width:264px;">订单信息</dd>
			<dd>收货人</dd>
			<dd style="width:130px;">价格</dd>
			<dd class="record_dd4" style="margin:0;width:130px;">首付金额</dd>
			<dd class="record_dd6" style="width:130px;">借款金额</dd>
			<dd class="record_dd5">交易状态</dd>
		</dl>
	</li>
</ul>
{{#if data.list}}
	{{#each data.list}}
	<li>
		<dl>
			<dd class="record_dd1" style="width:264px;">{{goodsName}}</dd>
			<dd>{{addressDetailUserName}}</dd>
			<dd style="width:130px;">{{goodsCost}}</dd>
			<dd class="record_dd4 c_data4" style="margin:0;width:130px;">{{onePayCheck payWay stagePay onePay}}元</dd>
			<dd class="record_dd6" style="width:130px;">{{stagePayCheck  payWay stagePay onePay}}元</dd>
			<dd class="record_dd5">{{orderStatus}}</dd>
		</dl>
	</li>
	{{/each}}
	<a href="/member_merchant/storeIndentDetail.html" hidefocus class="c_refund_info">查看所有订单信息>></a>
{{else}}
	<p class='noData' style='padding-top:100px;'><img src='/themes/theme_default/images/no_data.png'/></p>
{{/if}}