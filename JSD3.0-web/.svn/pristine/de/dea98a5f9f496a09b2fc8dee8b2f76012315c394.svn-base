<ul>
	<li class="record_conss_title">
		<dl>
			<dd style="width:150px;">发布时间</dd>
			<dd style="width:150px;">借款标题</dd>
			<dd style="width:150px;">类型</dd>
			<dd style="width:120px;">金额</dd>
			<dd style="width:120px;">年利率</dd>
			<dd style="width:120px;">期限</dd>
			<dd style="width:120px;">状态</dd>
		</dl>
	</li>
</ul>
{{#if data.list}}
{{#each data.list}}
	<li>
		<dl>
			<dd style="width:150px;"><b>{{MyDateDateFormat addTime}}</dd>
			<dd style="width:150px;">{{{logBorrowNameFun borrow.name borrow.id borrow.addTime}}}</dd>
			<dd style="width:150px;">{{borrowTypeName borrow.type}}</dd>
			<dd style="width:120px;">{{borrow.account}}元</dd>
			<dd style="width:120px;">{{borrow.apr}}%</dd>
			<dd style="width:120px;">{{#if borrow.borrowTimeType}}
				{{borrow.timeLimit}}天
				{{else}}
				{{borrow.timeLimit}}月
				{{/if}}
			</dd>
			<dd style="width:120px;">{{logBorrowStatusFun status}}</dd>
		</dl>
		
	</li>
{{/each}}
	<a id="borrowmore" hidefocus class="c_refund_info" href="/member_guarantee/collection/collectionList.html">查看更多催收项目&gt;&gt;</a>
{{else}}
	<p class='noData' style='padding-top:100px;'><img src='/themes/theme_default/images/no_data.png'/></p>
{{/if}}





