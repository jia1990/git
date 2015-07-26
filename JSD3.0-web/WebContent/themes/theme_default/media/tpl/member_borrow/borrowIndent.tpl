{{#each  data.list}}
		<li>
							<div class="y-re-stage-ul2-div">
<!--  775 fgq 2015-03-7 start   775 fgq 2015-03-7 end    -->
								<h4><span>{{noticeNewDateFormat addTime}}</span>订单号：<span>{{orderNo}}</span>付款方式：<span>{{payWayInfo payWay}}</span></h4>
								<div class="shdz-yys">收货地址
									<div class="c_remark_info y_remark_info" style="display: none;">
										<b class="c_recharge_arrow"></b>
										<span style="font-size:12px;color:#555;">
										{{addressDetail}}
										</span>
								</div>
								</div>
								
							</div>
							<dl>
								<dd class="y-re-stage-li254w">
									<img src="{{picPath}}">
									<p>{{goodsName}}</p>
								</dd>
								<dd class="y-re-stage-li80w">
									{{addressDetailUserName}}
								</dd>
								<dd class="y-re-stage-li110w">
									{{goodsCost}}
								</dd>
								<dd class="y-re-stage-li110w">
									{{onePayCheck payWay stagePay onePay}}
								</dd>
								<dd class="y-re-stage-li110w">
									{{stagePayCheck payWay stagePay onePay}}
								</dd>
								<dd class="y-re-stage-li120w">
									<p>
										{{orderStatus}}
									</p>
								</dd>	
							</dl>
						</li>
{{/each}}