
	<form>
 			<p class="left-extra-name">{{goods.name}}</p>
 			<input id="goodId" type="hidden" value="{{goods.id}}"/>
 			<a class="left-extra-small" href="">关注www.yungouquanqiu.com</a>
	 		<ul>
	 			<li>
	 				<span>选择颜色：</span>
	 				<div class="left-extrainl">
	 					{{#each colorListAll color}}
			 					<em  data-val="{{color}}"><b>{{color}}</b><i></i></em>
		 				{{#each}}
	 				</div>
	 			</li>
	 			<li>
	 				<span>选择版本：</span>
	 				<div class="left-extrainl">
	 					<#list vesionListAll as vesion>
				 					<em ><b>{{vesion}}</b><i></i></em>
		 				</#list>
	 				</div>
	 			</li>
	 			<li>
	 				<span>尺寸大小：</span>
	 				<div class="left-extrainl">
	 					<#list sizeListAll as size>
			 						<em ><b>{{size}}</b><i></i></em>
		 				</#list>
	 				</div>
	 			</li>
	 			<li>
	 				<span>付款方式：</span>
	 				<div class="left-extrainl">
		 				<em class="yListrclickem Ypayments1">分期付款<i></i></em>
		 				<em class="Ypayments2">全额付款<i></i></em>
	 				</div>
	 			</li>
	 		</ul>
	 		<p class="colorp00">云购全球价：￥<i>{{goods.cost}}</i>
	 		<div class="y-show-hidden-divs">
		 		<p class="colorp00">年化利率：<i class="i-stages">{{goods.goodsApr}}%</i>
	 			</p>
	 			<label>首付金额：</label>
	 			<input type="text" />
	 			<label class="label-money"> 元</label>
	 			<label style="margin-left:40px;">分期月数：</label>
	 			<select>
	 				<option>1</option>
	 				<option>2</option>
	 				<option>3</option>
	 				<option>4</option>
	 				<option>5</option>
	 				<option>6</option>
	 				<option>7</option>
	 				<option>8</option>
	 				<option>9</option>
	 				<option>10</option>
	 				<option>11</option>
	 				<option>12</option>
	 				<option>13</option>
	 				<option>14</option>
	 				<option>15</option>
	 				<option>16</option>
	 			</select>
	 			<p class="colorp00"><span>月供：<em>4015.97</em>元（本金：<em>3899.00</em>+利息 + 服务费：<em>0</em>元）分期 x <em>1个月</em></span></p>
	 		</div>
 			<a href="" class="YImmediatelyininstallment Yininstallment1">立即分期</a>
 			<a href="" class="YImmediatelyininstallment Yininstallment2" style="display:none;">立即购买</a>
 			<a href="" class="YImmediatelyininstallment2">查看更多</a>
 		</form>
