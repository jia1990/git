{{#with csom}}
<h3 style="color:#0697da;font-size:20px;">债权转出&nbsp;&nbsp;<em style="font-size:16px;">ID-{{creditId}}</em></h3><br>
<p><span>原始投资额</span><i>{{tenderAccount}}元</i></p>
<p><span>已收利息</span><i>{{haveInterest}}元</i><span style="text-align:right;width:120px;margin-right:40px;">利率</span><i>{{apr}}%</i></p>
<p><span>可转让份数</span><i>{{creditCopies}}份</i><span style="text-align:right;width:120px;margin-right:40px;">剩余期数</span><i>{{residuePeriod}}期</i></p>
<p><span style="display:inline-block;height:70px;">当前债权价值</span><i class="creditprice" style="float: right;width: 350px;">{{getCreditCos creditValue creditCopies}}元/份<span style="width:126px;text-align:right;">当前待收本息</span><i>{{getCreditCos cipalInterest creditCopies}}元/份</i><br><em style="line-height:24px;">一般为转让时的待回收本金与应计利息之和。<!--<a href="javascript:;" style="color:#12adff;">详情</a>--></em></i></p>
<p><span style="display:inline-block;height:70px;">转让系数</span><i style="float: right;width: 350px;">
<select class="c_factor" id="c_factor">
	<option value="100">100.00%</option>
	<option value="99.9">99.9%</option>
	<option value="99.8">99.8%</option>
	<option value="99.7">99.7%</option>
	<option value="99.6">99.6%</option>
	<option value="99.5">99.5%</option>
	<option value="99.4">99.4%</option>
	<option value="99.3">99.3%</option>
	<option value="99.2">99.2%</option>
	<option value="99.1">99.1%</option>
	<option value="98">98%</option>
	<option value="97">97%</option>
	<option value="96">96%</option>
	<option value="95">95%</option>
	<option value="80">80.00%</option>
</select>
<em style="line-height:24px;">此转让系数仅作用于债权待收本金部分</em></i></p>
<p><span>转让价格</span><i class="sellprice">{{getCreditCos creditValue creditCopies}}元/份</i></p>
<p><span>转让总价格</span><i class="sellTotal">{{getCreditMoneyFormat creditValue}}元</i></p>
<p><span>转让费用</span><i>{{fee}}元</i></p>
<p><span style="display:inline-block;height:90px;">预计收入金额</span><i style="float: right;width: 350px;"><span class="sellRTotal" >{{getCreditSub creditValue fee}}元 </span><br><em style="line-height:24px;">由于债权价值发生会发生变动，最终收入金额可能发生变动。<!--<a href="javascript:;" style="color:#12adff;">详情</a>--></em></i></p>
<form class="trueform">
	<span>请输入验证码</span>
	<input type="text" class="trueverify" id="validCode" value="验证码" style="color: #ababab;"/>
	<span style="float:right;width:136px;" onClick="document.getElementById('img').src='{{path}}/validimg.html?t=' + Math.random();">
		<img src="{{path}}/validimg.html" id="img" onClick="this.src='{{path}}/validimg.html?t=' + Math.random();" width="142" height="44" border="0" alt="" style="width:136px;">
	</span>
	<input type="hidden" id="tenderID" value="{{creditId}}"/>
	<div class="trueformbottom">
		<input type="checkbox" id="trueconsent" style="position:relative;top:1px;" checked/><label for="trueconsent">同意</label><a href="/member/credit/getCreditProtocol.html" target="_blank" class="trueagreement">债权转让投资协议</a><br/>
		<p class="pubErr" style="text-align:center;color:#ff7800;"></p>
		<div class="c_cliam_btn" style="margin-top:10px;">
			<input type="button" class="truebutton" value="转让"/>
			<a class="truereturn">取消</a>
		</div>
	 </div>
 </form>
 <div class="c_cliam_close"></div>
 {{/with}}