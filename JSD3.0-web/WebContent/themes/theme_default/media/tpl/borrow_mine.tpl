<div class="record_conss record_conss1">
	<ul>
		<li class="record_conss_title">
			<dl>
				<dd class="record_dds1">时间</dd>
				<dd class="record_dds1">标种标题</dd>
				<dd>金额</dd>
				<dd>年利率</dd>
				<dd class="record_dds4">期限</dd>
				<dd class="record_dds6">备注</dd>
			</dl>
		</li>
	</ul>
	<ul class="record_conssin_num record_conssin_num1" style="display:block;">
	{{#each data.list}}
		<li style="border:none;">
			<dl style="border-bottom:1px solid #EEEEEE;">
				<dd class="record_dds1">{{MyDateDateFormat addTime}} {{timeDateFormat addTime}}</dd>
				<dd class="record_dds1">{{{logBorrowNameFun name id addTime}}}</dd>
				<dd>{{account}}</dd>
				<dd>{{apr}}%</dd>
				<dd class="record_dds4">{{{timeLimitFormat type timeLimit borrowTimeType}}}</dd>
				<dd class="record_dds6">
					<i></i>
					<div class="c_remark_info" style="display: none;">
						<b class="c_recharge_arrow"></b><a href="javascript:void(0);" style="font-size:12px;color:#555;">
							协议：{{{protocolBorrowerOperateFun status id type}}}
						</a>
					</div>
				</dd>
				<div class="c_clear"></div>
			</dl>
		</li>
		{{/each}}
	</ul>
</div>


