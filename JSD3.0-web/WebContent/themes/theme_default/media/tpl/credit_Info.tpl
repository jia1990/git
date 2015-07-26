<div class="c_name_protocal">
{{#equal ca.borrow.type "113"}}
	<span style='background: url("{{../path}}/images/index/bao.png") no-repeat scroll 0% 0% transparent;padding-left: 27px;'>
{{/equal}}
{{#equal  ca.borrow.type "103"}}
	<span style='background: url("{{../path}}/images/index/ya.png") no-repeat scroll 0% 0% transparent;padding-left: 27px;'>
{{/equal}}
{{#equal  ca.borrow.type "115"}}
	<span style='background: url("{{../path}}/images/index/bao.png") no-repeat scroll 0% 0% transparent;padding-left: 27px;'>
{{/equal}}
{{ca.borrow.name}}      
<font color="black">{{userName}}</font>
<i style="left:120px;"></i><div class="y_tooltips" style="display: none;left:24px;">债权人<em></em></div></dd></dl>
</span>
<em>债权转让及受让协议（范本）</em></div>
<div class="y_details_con1left c_cliam_detail">
	<ul style="overflow:hidden;">
		<li style="width:120px;padding-left:10px;">
			<div class="myStat4" data-dimension="80" data-text="{{getCreditScales ca.sellCopies ca.creditCopies}}%" data-percent="{{getCreditScales ca.sellCopies ca.creditCopies}}" data-info="New Clients" data-width="6" data-fontsize="16"  data-fgcolor="#3ca0eb" data-bgcolor="#dddddd"></div>
		</li>
		<li style="width:170px;padding-top: 6px;"><span>转让单价 （元/份）</span><b>{{getCreditCos ca.creditPrice ca.creditCopies}}</b></li>
		<li style="width:140px;padding-top: 6px;"><span>年利率</span><b>{{ca.borrow.apr}}%</b></li>
		<li style="width:140px;padding-top: 6px;"><span>剩余期数（期）</span><b>{{cso.residuePeriod}}/{{cso.period}}</b></li>
	</ul>
	<div class="c_tender_info" style="padding-left: 30px;">   
		<dl style="margin-top: 22px;"><dd>原标的ID</dd><dd>保障方式</dd><dd>下一还款日</dd><dd>转出日期</dd></dl>
		<dl style="margin-top: 22px;"><dd style="color:#0697da;"><a href="/invest/detail.html?id={{ca.borrow.id}}" style="color:#12ADFF;">BID-{{ca.borrow.id}}</a></dd><dd>本金<i></i><div class="y_tooltips" style="display: none;">详情参见<a href="" style="color:#06b5ff;">本金保障计划</a><em></em></div></dd><dd>{{transGuaranteeDateFormat cso.nextRepayMentTime}}</dd><dd>{{noticeNewDateFormat ca.verifyTime}}</dd></dl>
		<dl style="margin-top: 22px;"><dd>转让系数</dd><dd>待收本息</dd><dd>逾期情况</dd><dd>还款方式</dd></dl>
		<dl style="width:140px;margin-top: 22px;"><dd>{{getAccMul ca.creditDis 100}}%</dd><dd>{{getCreditCos cso.cipalInterest ca.creditCopies}}元/份</dd><dd>未发生过逾期</dd><dd>
			{{transFormatStyle ca.borrow.style}}
		<i style="left:120px;"></i><div class="y_tooltips" style="display: none;left:24px;">详情参见<a href="" style="color:#06b5ff;">本金保障计划</a><em></em></div></dd></dl>
	</div>
</div>
{{#if account}}
	{{#equal userType 10}}
		{{#equal ca.status "03"}}
			<div class="y_details_con1right" style="padding-top: 4px;padding-left: 0px;width:274px;height:228px;">
				 <p style="font-size:14px;color:#555555;line-height:40px;text-align:center;margin-top: 30px;">债权已满额
		           <br/>售出份数：<span style="font-size:18px;color:#ff9000;">{{ca.sellCopies}}</span> 份
		           <br/>当前状态：<span style="color:#ff9000;">{{logCreditStatusFun ca.status}}</span></p>
				   <a href="/credit/index/detail.html" class="y_details_btn" style="margin-left:16px;margin-top: 10px;">查看其他项目</a>
				 </p>
			</div>
		{{/equal}}
		{{#equal ca.status "06"}}
			<div class="y_details_con1right" style="padding-top: 4px;padding-left: 0px;width:274px;height:228px;">
				 <p style="font-size:14px;color:#555555;line-height:40px;text-align:center;margin-top: 30px;">债权已满额
		           <br/>售出份数：<span style="font-size:18px;color:#ff9000;">{{ca.sellCopies}}</span> 份
		           <br/>当前状态：<span style="color:#ff9000;">{{logCreditStatusFun ca.status}}</span></p>
				   <a href="/credit/index/detail.html" class="y_details_btn" style="margin-left:16px;margin-top: 10px;">查看其他项目</a>
				 </p>
			</div>
		{{/equal}}
		{{#equal ca.status "07"}}
			<div class="y_details_con1right" style="padding-top: 4px;padding-left: 0px;width:274px;height:228px;">
				 <p style="font-size:14px;color:#555555;line-height:40px;text-align:center;margin-top: 30px;">债权已结束
		           <br/>售出份数：<span style="font-size:18px;color:#ff9000;">{{ca.sellCopies}}</span> 份
		           <br/>当前状态：<span style="color:#ff9000;">{{logCreditStatusFun ca.status}}</span></p>
				   <a href="/credit/index/detail.html" class="y_details_btn" style="margin-left:16px;margin-top: 10px;">查看其他项目</a>
				 </p>
			</div>
		{{/equal}}
		{{#equal ca.status "05"}}
			<div class="y_details_con1right" style="padding-top: 4px;padding-left: 0px;width:274px;height:228px;">
				 <p style="font-size:14px;color:#555555;line-height:40px;text-align:center;margin-top: 30px;">债权已撤销
		           <br/>售出份数：<span style="font-size:18px;color:#ff9000;">{{ca.sellCopies}}</span> 份
		           <br/>当前状态：<span style="color:#ff9000;">{{logCreditStatusFun ca.status}}</span></p>
				   <a href="/credit/index/detail.html" class="y_details_btn" style="margin-left:16px;margin-top: 10px;">查看其他项目</a>
				 </p>
			</div>
		{{/equal}}
		{{#equal ca.status "01"}}
			<div class="y_details_con1right" style="padding-top: 4px;padding-left: 26px;width:274px;height:228px;">
				<form style="position:relative;">
					<p class="y_money_ps">剩余份数（份）</p>
					<div class="c_copies" style="line-height:28px;"><span>{{getSubCopies ca.creditCopies ca.sellCopies}}/{{ca.creditCopies}}</span><em>（{{getSubtr ca.creditPrice ca.soldAccount}} 元）</em></div>
					{{#with account}}
							<p class="y_money_ps">可用余额：<i style="font-style:normal;">{{getUseAccountTotal interestUsable awardUsable rechargeUsable returnCapitalUsable}}</i>元<a href="/member/recharge/newRecharge.html" target="_black">[充值]</a> </p>
					{{/with}}
					<input type="text" onkeyup="this.value=this.value.replace(/[^\d]/g,'') "  onafterpaste="this.value=this.value.replace(/[^\d]/g,'') " class="y_detailsinputs" value="1"/><span class="y_subtracts" style="top:115px;"></span><span class="y_pluss" style="top:115px;"></span><label style="position:absolute;left: 180px;top: 128px;">份</label>
					<div class="reminderss"></div>
					<p class="y_money_ps" style="line-height:34px;height:34px;">最大可购买份数<span class="maxCops"> {{getSubCopies ca.creditCopies ca.sellCopies}} </span>份</p>
					<a href="javascript:void(0);" name="cops"  class="y_details_logas" style="height:34px;margin-top:0;line-height:34px;">购买</a>
				    <input type="hidden" name="resultFlag" id="resultFlag" value="{{resultFlag}}"/>
				     <input type="hidden" id="creditBuyToken" name="creditBuyToken" value="{{creditBuyToken}}">
	                <input type="hidden" id="id" name="id" value="{{id}}">
				</form>
			</div>
		{{/equal}}
	{{else}}
		<div class="y_details_con1right" style="padding-top: 4px;padding-left: 0px;width:274px;height:228px;">
			<div class="borrow_user_st">
		        <dl style="background:none;padding-left:0px;">
		          <dt style="text-align:center;">对不起！</dt>
		          <dd>您当前登录的不是投资账户，不能进行投资。</dd>
		        </dl>
		        <a class="login_account" style="" href="/member/main.html">进入账户中心</a>
		      </div>
		</div>
	{{/equal}}
{{else}}
	<div class="y_details_con1right" style="padding-top: 4px;padding-left: 26px;width:274px;height:228px;">
		<form style="position:relative;">
			<p class="y_money_ps">剩余份数（份）</p>
			<div class="c_copies" style="line-height:28px;"><span>{{getSubCopies ca.creditCopies ca.sellCopies}}/{{ca.creditCopies}}</span><em>（{{getSubtr ca.creditPrice ca.soldAccount}} 元）</em></div>
			<p class="y_money_ps">可用余额：<i style="font-style:normal;">0</i>元(未登录)<a href="/member/recharge/newRecharge.html">[充值]</a> </p>
			<input type="text" name="cops" onkeyup="this.value=this.value.replace(/[^\d]/g,'') "  onafterpaste="this.value=this.value.replace(/[^\d]/g,'') " class="y_detailsinputs" value="1"/><span class="y_subtracts" style="top:115px;"></span><span class="y_pluss" style="top:115px;"></span><label style="position:absolute;left: 180px;top: 128px;">份</label>
			<div class="reminderss"></div>
			<p class="y_money_ps" style="line-height:34px;height:34px;">最大可购买份数<span class="maxCops"> {{getSubCopies ca.creditCopies ca.sellCopies}} </span>份</p>
			<a href="/user/login.html" class="y_details_logas_nologin" style="height:34px;margin-top:0;line-height:34px;">请登陆后购买</a>
		</form>
	</div>
{{/if}}