<ul>
	{{#equal data.list.length 0}}
		<div style='width:72px;margin:80px auto 0;' class="no_data_img"><img src='/themes/theme_default/images/no_data.png'/></div>
	{{else}}
		<!-- 数字可以手动输入 -->
		{{#each data.list}}
			<li>
				<div class="y_winning_Listdiv">
					<a href="javascript:;" >
						<div class="c_detail_text"><i>￥</i><span class="money">{{money}}</span></div>
						<div class="retCardId" style="display:none;">{{id}}</div>
					</a>
				</div>
				{{#equal isCheck "1"}}
					<div class="c_num_pwd" style="display: block;">
						<p><span>卡号：</span>{{cardNo}}</p>
						<p><span>密码：</span>{{paw}}</p>
						<p><span class="c_date_to">使用期限：</span><em class="c_datetime">{{validDateFormat winTime validTime}}</em></p>
					</div>
					<p class="c_good_info"><a href="javascript:;"><i class="c_confirm_take c_active_valid c_noactive">未使用</i></a>
					<p class="c_big_checked"><span></span></p>
				{{else}}
					<div class="c_active_click">
						<p class="c_reward_time">抽奖时间：<em>{{transFormatDate winTime}}</em></p>
					</div>
					<div class="c_num_pwd">
						<p><span>卡号：</span>{{cardNo}}</p>
						<p><span>密码：</span>{{paw}}</p>
						<p><span class="c_date_to">使用期限：</span><em class="c_datetime">{{validDateFormat winTime validTime}}</em></p>
						<!--<p><span>使用期限：</span>{{validDateFormat winTime validTime}}</p>-->
					</div>
					<p class="c_good_info"><a href="javascript:;"><i class="c_confirm_take c_active_valid">查看</i></a>
					<p class="c_big_checked"><span></span></p>
				{{/equal}}
			</li>
		{{/each}}
	{{/equal}}
</ul>