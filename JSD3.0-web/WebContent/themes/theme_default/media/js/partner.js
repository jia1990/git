define(function(require,exports,modlue){
	require('jquery');
	//合作伙列表查询
	$.ajax({
		url:"/aboutUs/partnerPageList.html?nid=partners",
		type:"get",
		dataType:"json",
		success:function(data){
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var tpl = require('/themes/theme_default/media/tpl/partner.tpl');//载入tpl模板
					var template = Handlebars.compile(tpl);
					var html = template(data);
					$(".c_partner").html(html);
					for(var i = 0; i < data.data.list.length;i++){
						if((i+1)%4==0){
							var li = $(".c_partner").find("ul").find("li").eq(i).addClass("c_last_partner");
							$(".c_partner").find("ul").append("<div class='c_clear'></div>"); 
						}
					}
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
					        		url:"/aboutUs/partnerPageList.html?nid=partners&page="+n,
					        		dataType:"json",//这个必不可少，如果缺少，导致传回来的不是json格式
					        		success:function(json){
					        			require.async(['/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js','/plugins/handlebars-v1.3.0/transFormatJson'],function(){
											var tpl = require('/themes/theme_default/media/tpl/partner.tpl');
											var template = Handlebars.compile(tpl);
											var html    = template(json);
											$(".c_partner").html(html);
											
											for(i=0;i<=$(".c_partner_list li").length;i++){
										        if((i+1)%4==0){
										            $($(".c_partner_list li")[i]).css({marginRight:"0"});
										        }
										    }
										});
					        		}
					        	});
								this.selectPage(n); //处理完后可以手动条用selectPage进行页码选中切换
							}
					});
				});
			}else{
				$(".c_partner").css("display","none");
				$("#kkpager").html("<div style='width:72px;margin:30px auto 0;'><img src='/themes/theme_default/images/no_data.png'/></div>");
				$("#kkpager").css({height:"200px",paddingTop:"200px",paddingBottom:"120px"});
			}
			
		}
		
	});
	

});
