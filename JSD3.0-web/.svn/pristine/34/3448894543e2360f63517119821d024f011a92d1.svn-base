<h3 style="color:#0697da;font-size:20px;">确认购买</h3><br>
<p style="font-size:18px;"> </p>
<p><span>待转让债权</span><i>ID{{id}} </i></p>
<p><span>购买份数</span><i>{{cops}}份</i></p>
<p><span style="display:inline-block;height:90px;">债权总价值 </span><i style="float: right;width: 350px;">{{thisvalue}}元<br><em style="line-height:24px;">债权价值的通常算法：当时的待收本金与计算当日距离上一期还款的 天数所对应的利息之和。<a href="javascript:;" style="color:#12adff;">查看详情</a></em></i></p>
<p><span>支出金额</span><i>{{thisaccount}} 元</i></p>
<p><span>折让收益</span><i>{{disaccount}} 元</i></p>
<form class="trueform">
	<span>交易密码</span>
	{{#if IsPayPwdNull}}
		<input type="password" id="payPwd" class="trueverify"/>
		<a href="/member/useridentify/identify.html?flag=findpaypwd" target="_black" style="font-size:12px;color:#005ea7;" >忘记密码？</a><br/>
	{{else}}
		<input type="hidden" id="payPwd" class="trueverify" value="noSet"/>
		<a href="/member/useridentify/identify.html?flag=setpaypwd" target="_black" style="font-size:12px;color:#005ea7;" >设置交易密码</a><br/>
	{{/if}}
	<div class="trueformbottom">
		<input type="checkbox" id="trueconsent" style="position:relative;top:1px;" checked/><label for="trueconsent">同意</label><a href="/member/credit/getCreditProtocol.html?caId={{id}}" target="_blank" class="trueagreement">债权转让投资协议</a><br/>
		<p class="pubErr" style="text-align:center;color:#ff7800;"></p>
		<div class="c_cliam_btn">
			<input type="button" class="truebutton" value="确认"/>
			<a href="javascript:;" class="truereturn">取消</a>
		</div>
	 </div>
	 
	 <input type="hidden" name="resultFlag" id="resultFlag" value="{{resultFlag}}"/>
	 <!--JSDBET-894 gjh 2015-3-30 start-->
	 <input type="hidden" name="creditBuyToken" id="creditBuyToken" value="{{creditBuyToken}}"/>
	 <!--JSDBET-894 gjh 2015-3-30 end-->
 </form>
 <div class="c_cliam_close"></div>