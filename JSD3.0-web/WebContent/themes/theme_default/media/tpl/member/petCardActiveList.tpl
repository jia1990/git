<ul>
	{{#equal data.list.length 0}}
		<div style='width:72px;margin:80px auto 0;' class="no_data_img"><img src='/themes/theme_default/images/no_data.png'/></div>
	{{else}}
		<!-- 数字可以手动输入 -->
		{{#each data.list}}
			<li>
				<div class="y_winning_Listdiv">
					<a href="javascript:;" >
						<div class="c_detail_text"><i>￥</i><span class="">{{money}}</span></div>
					</a>
				</div>
				<div class="c_card_pwd" style="margin-bottom:0px;">
					<p><span>卡号：</span>{{cardNo}}</p>
					<p><span>密码：</span>{{paw}}</p>
					<!--<p><span class="c_date_to">使用期限：</span><em class="c_datetime">{{validDateFormat winTime validTime}}</em></p>-->
					<p><span>激活时间：</span><em>{{transFormatDate activateTime}}</em></p>
				</div>
				<p class="c_good_info"><a href="javascript:;"><i class="c_confirm_take c_noactive">已使用</i></a>
			</li>
		{{/each}}
	{{/equal}}
</ul>