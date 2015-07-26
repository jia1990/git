<li class="y_TableTitle">
				<dl>
					<dd class="y_TableOne"><span></span>项目名称</dd>
					<dd class="y_TableTwo"><span></span>信用等级</dd>
					<dd class="y_TableThree" style="padding-left: 8px;"><span></span>金额（元）</dd>
					<dd class="y_TableFour"><span></span>年利率</dd>
					<dd class="y_TableFive"><span></span>剩余天数</dd>
					<dd class="y_TableSix"><span></span>进度</dd>			
				</dl>
			</li>
{{#each calist.list}}
	<li class="y_TableCon">
		<dl>
			<dd class="y_TableOne"><span>转</span><a href="/credit/index/creditDetail.html?id={{caid}}" class="y_TableOnea">{{getCreditName borrowName}}</a></dd>
			<dd class="y_TableTwo"><img src="{{../imgpath}}/images/index/creditRating{{indexCreditLeve level}}.png"></dd>
			<dd class="y_TableThree">{{moneyFormat creditAccount}}元</dd>
			<dd class="y_TableFour">{{borrowApr}}%</dd>
			<dd class="y_TableFive">{{getTimelimit timelimit}}天</dd>
			<dd class="y_TableSix">
				<div class="myStat4" style="margin-left:38px;margin-top:6px;" data-dimension="50" data-text="{{getScales sellCopies totalCopies}}%" data-info="New Clients" data-width="3" data-fontsize="14" data-percent="{{getScales sellCopies totalCopies}}" data-fgcolor="#28b726" data-bgcolor="#dddddd">
				</div>
			</dd>		
			<dd class="y_TableSeven">{{{getStatus status caid}}}</dd>		
		</dl>
	</li>
{{/each}}