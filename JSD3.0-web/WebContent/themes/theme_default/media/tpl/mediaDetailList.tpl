{{#each data.list}}
	 {{#equal  showWay 1 }}
		    <li  class="clickNum"> 
		       <input type="hidden"  value="{{id}}" />
				<a href="{{content}}" target="_blank"  ><img src="{{picPathCheck picPath}}" ></a>
				<div class="y_notice_listliright">
				    <a target="_blank" href="{{content}}" hidefocus><h1>{{hideNoticeTitle title}}</h1></a>
					<p  target="_blank">{{introduceCheck introduction  showWay}}</p>
					<a href="{{content}}" class="y_notice_listlirightas" target="_blank" style="margin-top:70px">查看</a><span>{{{noticeDateFormatNew addTime}}}</span>
				</div>
			</li>
	 {{else}}
		<li> 
			<a href="/article/mediaDetail.html?nid={{nid}}&id={{id}}"><img src="{{picPathCheck picPath}}"></a>
			<div class="y_notice_listliright">
			    <a href="/article/mediaDetail.html?nid={{nid}}&id={{id}}" title="{{title}}" hidefocus><h1>{{hideNoticeTitle title}}</h1></a>
				<p>{{introduceCheck introduction  showWay}}</p>
				<a href="/article/mediaDetail.html?nid={{nid}}&id={{id}}" class="y_notice_listlirightas">查看</a><span>{{{noticeDateFormatNew addTime}}}</span>
			</div>
		</li>	
    {{/equal}}
{{/each}} 

