define(function(require,exports,modlue){
	require('jquery');
	//获取当前类别
	//var arcType = $(".arcList").attr("data-val");
	//文章列表
	$.ajax({
		url:"/article/list.html?nid=media",
		type:"get",
		dataType:"json",
		success:function(data){
		
			/*for(i=0;i<data.data.list.length;i++){
				
				alert(data.data.list[i].addTime);
			}*/
			
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var tpl = require('/themes/theme_default/media/tpl/mediaDetailList.tpl');//载入tpl模板
					var template = Handlebars.compile(tpl);
					var html = template(data);
					$(".y_notice_list").html(html);
					$(".clickNum").click(function(){
						var  id = $(this).children("input").val();
						$.ajax({
							url:"/article/mediaDetail/clickNum.html?nid=media&id="+id,
							type:"get",
							dataType:"json",
							success:function(data){},
							error:function(){
								location.reload();
							}
						})
					})
					
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
					        		url:"/article/list.html?nid=media"+"&page="+n,
					        		dataType:"json",//这个必不可少，如果缺少，导致传回来的不是json格式
					        		success:function(json){
					        			require.async(['/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js','/plugins/handlebars-v1.3.0/transFormatJson'],function(){
											var tpl = require('/themes/theme_default/media/tpl/mediaDetailList.tpl');
											var template = Handlebars.compile(tpl);
											var html    = template(json);
											$(".y_notice_list").html(html);
										});
					        		}
					        	});
								this.selectPage(n); //处理完后可以手动条用selectPage进行页码选中切换
							}
					});
				});
			}else{
				$("#kkpager").html("<div style='width:72px;margin:80px auto 0;'><img src='/themes/theme_default/images/no_data.png'/></div>");
			}
			
		}
		
	});

});
