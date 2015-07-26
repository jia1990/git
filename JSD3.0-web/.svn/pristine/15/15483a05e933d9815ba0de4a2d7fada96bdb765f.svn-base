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
			//分页插件
			if(json.data.page.pages > 0)
			{
				
				//异步加载数据
				require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js',function(){
					require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
						var template = Handlebars.compile(tpl);
						var html = template(json);
						$('.c_recharge_detail').html(html);
						//偶数行增加背景颜色
						$(".c_recharge_detail dd .c_detail_icon").hover(function(){
							var index=$(this).index(".c_recharge_detail dd .c_detail_icon");
							$(".c_remark_info").hide();
							$(".c_remark_info").eq(index).show();
						},function(){
							$(".c_remark_info").hover(function(){
								var index=$(this).index(".c_remark_info");
								$(".c_remark_info").eq(index).show();
							},function(){
								$(".c_remark_info").hide();
							})
						})
						$(function(){
							$(".record_dds6 i").hover(function(){
								$(".c_remark_info").hide();
								$(this).next().show();
							})
							$(".c_remark_info").mouseleave(function(){
								$(".c_remark_info").hide();
							})
						})
					});
				});
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
								prePageText				: '<',
								nextPageText			: '>'
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
											$('.c_recharge_detail').html(html);
											//偶数行增加背景颜色
											$(".c_recharge_detail dd .c_detail_icon").hover(function(){
												var index=$(this).index(".c_recharge_detail dd .c_detail_icon");
												$(".c_remark_info").hide();
												$(".c_remark_info").eq(index).show();
											},function(){
												$(".c_remark_info").hover(function(){
													var index=$(this).index(".c_remark_info");
													$(".c_remark_info").eq(index).show();
												},function(){
													$(".c_remark_info").hide();
												})
											})
											$(function(){
												$(".record_dds6 i").hover(function(){
													$(".c_remark_info").hide();
													$(this).next().show();
												})
												$(".c_remark_info").mouseleave(function(){
													$(".c_remark_info").hide();
												})
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
				$(".c_recharge_detail").html("<div class='c_nodata'></div>");
				$("#kkpager").html('');
			}
			
		}
		})	
	}
	exports.ajaxUrl = ajaxUrl;
});