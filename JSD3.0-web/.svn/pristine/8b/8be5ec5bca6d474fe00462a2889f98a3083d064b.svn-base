define(function(require,exports,module){
	//分页显示函数ajaxUrl(param,tpl)
	//param:请求参数
	//tpl:语义模板
	var ajaxUrl = function (param,tpl){
		$.ajax({
		type:'get',
		url:param + '&randomTime=' + (new Date()).getTime(),
		dataType:'json',
		success:function(json){
			//异步加载数据
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var template = Handlebars.compile(tpl);
					var html = template(json);
					$('.record_conss1').html(html);
					
					 	
						
					$(".record_dds6 i").hover(function(){
		
						$(".c_remark_info").hide();
						$(this).next().show();
					})
					$(".c_remark_info").mouseleave(function(){
						$(".c_remark_info").hide();
					})
							
					//取消提现
					$(".cancelDrawCash").click(function(){
						var id = $(this).data("val");
						$.ajax({
							type:'get',
							url:'/member/cash/cancelDrawCash.html?randomTime=' + (new Date()).getTime(),
							dataType:'json',
							data:{id:id},
							success:function(json){	
								var tpl = require('../../tpl/member/investCash_log.tpl');//载入tpl模板
								require.async(['./showTableInvest'],function(showTable){
							        showTable.ajaxUrl('/member/cash/logList.html?drawHandleStatus='+"",tpl);
							    });					
								}
							});
							
					});
					$(".c_aside_nav").height($(".c_deal_record").height()-24);
				});
			});
			//分页插件
			if(json.data.page.pages > 0)
			{
				require.async(['/plugins/pager/pager.css','/plugins/pager/pager'],function(){
					kkpager.generPageHtml({
							pno : json.data.page.currentPage,//当前页码
							total : json.data.page.pages,//总页码
							totalRecords : json.data.page.total,//总数据条数
							isShowFirstPageBtn	: false, 
							isShowLastPageBtn	: false, 
							isShowTotalPage 	: false, 
							isShowTotalRecords 	: false, 
							isGoPage 			: false,
							lang:{
								prePageText				: '上一页',
								nextPageText			: '下一页'
							},
							mode:'click',
							click:function(n){
					        	$.ajax({
					        		type:"get",
					        		url:param+"&randomTime="+ (new Date()).getTime()+"&page="+n,
					        		dataType:"json",
					        		success:function(json){
											var template = Handlebars.compile(tpl);
											var html    = template(json);
											$('.record_conss1').html(html);
											//偶数行增加背景颜色
											//$("#member_table tr:even").addClass("showTabBg");
											$(".record_dds6 i").hover(function(){
												
												$(".c_remark_info").hide();
												$(this).next().show();
											})
											$(".c_remark_info").mouseleave(function(){
												$(".c_remark_info").hide();
											})
					        		}
					        	});
								this.selectPage(n); //处理完后可以手动条用selectPage进行页码选中切换
							}
					});
				});
			}
			else
			{
				$("#kkpager").html("<div style='width:72px;margin:80px auto 0;'><img src='/themes/theme_default/images/no_data.png'/></div>");
				//alert($(".c_aside_nav").height());
				//alert($(".c_deal_record").height());
				//$(".c_aside_nav").height($(".c_deal_record").height()-24);
			}
			
		}
		})	
	}
	exports.ajaxUrl = ajaxUrl;
});