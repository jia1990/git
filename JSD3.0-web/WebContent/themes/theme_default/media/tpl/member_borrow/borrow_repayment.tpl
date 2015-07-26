<div class="record_conss record_conss1">
	<ul>
		<li class="record_conss_title">
			<dl>
				<dd class="record_dds3">还款时间</dd>
				<dd class="record_dds2">标种标题</dd>
				<dd class="record_dds1">第几期/总期数</dd>
				<dd class="record_dds1" >本期应还本息</dd>
				<dd class="record_dds4">还款状态</dd>
				<dd class="record_dds6">备注</dd>
			</dl>
		</li>
	</ul>
	<ul class="record_conssin_num record_conssin_num1" style="display:block;">
	{{#each data.list}}
		<li>
			<dl>
				<dd class="record_dds3">{{MyDateDateFormat repaymentTime}}</dd>
				<dd class="record_dds2">{{{logBorrowNameFun borrowName borrowId addTime}}}</dd>
				<dd class="record_dds1">{{repayPeriodFun borrowStyle borrowTimeType timeLimit period}}</dd>
				<dd class="record_dds1">{{repaymentAccount}}元</dd>
				<dd class="record_dds4">{{repayStatusFun status}}</dd>
				<dd class="record_dds6">
				   
					<i></i>
					
					<div class="c_remark_info" style="width:194px;padding:8px 12px;left: -164px;">
						<b class="c_recharge_arrow" style="right: 24px;"></b>
						<div class="c_money_state">{{{repayOpearteFun status id ../api_code ../is_open_deposit repaymentAccount lateInterest ../account/useMoney  type}}}</div>
						<div class="c_money_operate">逾期天数：<label>{{lateDays}}天</label></div>
						<div class="c_money_plan">逾期利息：<label>{{lateInterest}}元</label></div>
					</div>
				</dd>
			</dl>
		</li>
		{{/each}}
	</ul>
</div>