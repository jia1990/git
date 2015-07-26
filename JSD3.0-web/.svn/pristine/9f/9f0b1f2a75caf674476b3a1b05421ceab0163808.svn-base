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
			for(i=0;i<json.data.length;i++){
				alert(json.data[i]);
			}
			//异步加载数据
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
					var template = Handlebars.compile(tpl);
					var html = template(json);	
					$(".record_conssin_num").html(html);
					$(".record_dd6aa").hover(function(){
						$(this).find(".c_remark_info").show();
					},function(){
						$(this).find(".c_remark_info").hide();
					})
					$(".record_dds6").hover(function(){
						$(".c_remark_info").hide();
						$(this).find(".c_remark_info").show();	
					},function(){
						$(".c_remark_info").hide();
					});
					/*$(".c_remark_info").mouseleave(function(){
					//alert($(".c_remark_info").html());
						//$(this).css({display:"none"});
						$(".record_dds6").find(".c_remark_info").hide();
					})*/
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
											var html = template(json);	
											$(".record_conssin_num").html(html);
											$(".record_dds6").hover(function(){
												$(".c_remark_info").hide();
												$(this).find(".c_remark_info").show();	
											},function(){
												$(".c_remark_info").hide();
											});
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
			}
		}
		})	
	}
	exports.ajaxUrl = ajaxUrl;
});