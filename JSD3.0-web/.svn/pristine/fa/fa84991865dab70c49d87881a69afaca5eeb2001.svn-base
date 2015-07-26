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
					</a>
				</div>
				
				<p class="c_reward_time"><span>失效时间：</span>{{yungouOverdueDateFormat winTime validTime}}</p>
				<p class="c_good_info"><a href="javascript:;"><i class="c_confirm_take c_noactive">已失效</i></a>
			</li>
		{{/each}}
	{{/equal}}
</ul>