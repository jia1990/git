define(function(require,exports,modlue){
	require('jquery');
	var inviteId = $("#inviteIdNo").val();
	//活动列表
	$.ajax({
		url:"/user/activityList.html",
		type:"get",
		dataType:"json",
		success:function(data){
			if(data.data.list.length>0){
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var tpl = require('/themes/theme_default/media/tpl/activityList.tpl');//载入tpl模板
					var template = Handlebars.compile(tpl);
					var list = data.data.list;
					if(inviteId!=null &&inviteId!=undefined){
						for(var i=0;i<list.length;i++){
							if(list[i].content.indexOf("?")>0){
								list[i].content = list[i].content+"&inviteId="+inviteId;
							}else{
								list[i].content = list[i].content+"?inviteId="+inviteId;
							}
						}
					}
					var html = template(data);
					$(".dbmid").html(html);
					
				});
			});
			//分页插件
			if(data.data.page.pages > 0)
			{
				require.async(['/plugins/pager/pager.css','/plugins/pager/pager'],function(){
					kkpager.generPageHtml({
							pno : data.data.page.currentPage,//当前页码
							total : data.data.page.pages,//总页码
							totalRecords : data.data.page.total,//总数据条数
							isShowFirstPageBtn	: false, 
							isShowLastPageBtn	: false, 
							isShowTotalPage 	: false, 
							isShowTotalRecords 	: false, 
							isGoPage 			: false,
							lang:{
								prePageText				: '上一页',
								nextPageText			: '下一页'
							},
							mode:'click',//click模式匹配getHref 和 click
							click:function(n,total,totalRecords){
					        	$.ajax({
					        		type:"get",
					        		url:"/user/activityList.html?page="+n,
					        		dataType:"json",//这个必不可少，如果缺少，导致传回来的不是json格式
					        		success:function(json){
					        			require.async(['/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js','/plugins/handlebars-v1.3.0/transFormatJson'],function(){
											var tpl = require('/themes/theme_default/media/tpl/activityList.tpl');
											var template = Handlebars.compile(tpl);
											var html    = template(json);
											$(".dbmid").html(html);
										});
					        		}
					        	});
								this.selectPage(n); //处理完后可以手动条用selectPage进行页码选中切换
							}
					});
				});
			}
			}else{
				
				$(".dbmid").html("<div class='c_activity_in'><img src='/themes/theme_default/images/activity/activity_in.png' /></div><div><img src='/themes/theme_default/images/no_data.png'/></div>");
			}
			
		}
		
	});

});
