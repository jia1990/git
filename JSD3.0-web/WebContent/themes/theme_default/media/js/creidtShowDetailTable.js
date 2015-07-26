define(function(require,exports,module){
	//分页显示函数ajaxUrl(param,tpl)
	//param:请求参数
	//tpl:语义模板
	var ajaxUrl = function (param,tpl,classname){
		$.ajax({
		type:'get',
		url:param,
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
						$("."+classname).html(html);
						//偶数行增加背景颜色
						var line = $(".c_cliam_tender table tr");
						for (var i=0; i<line.length; i++){
						   line[i].style.background=(i%2==1) ? "#e1e4e9" : "#FFFFFF"; 
						}
					});
				});
				require.async(['/plugins/pager/creditpager.css','/plugins/pager/pager'],function(){
					kkpager.generPageHtml({
							pagerid: classname+'_kkpager', //divID
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
											$("."+classname).html(html);
											var line = $(".c_cliam_tender table tr");
											for (var i=0; i<line.length; i++){
											   line[i].style.background=(i%2==1) ? "#e1e4e9" : "#FFFFFF"; 
											}	
					        		}
					        	});
								this.selectPage(n); //处理完后可以手动条用selectPage进行页码选中切换
							}
					});
				});
			}
			else
			{
				$("."+classname).html("<div class='c_nodata'></div>");
				$("#kkpager").html('');
			}
			
		}
		})	
	}
	exports.ajaxUrl = ajaxUrl;
});