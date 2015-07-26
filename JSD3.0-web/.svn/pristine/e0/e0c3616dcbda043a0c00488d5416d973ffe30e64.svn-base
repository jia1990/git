define(function(require,exports,modlue){
	require('jquery');
	//通用显示函数
		$.ajax({
		type:'get',
		url:'/member/invest/accountransferList.html?size=10&randomTime='+ (new Date()).getTime()+"&page=1",
		dataType:'json',
		success:function(json){
			
			//分页插件
			if(json.data.page.pages > 0) {
				require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js',function(){
					require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
						var tpl = require('../../tpl/invest/accounttransfer.tpl');
						var template = Handlebars.compile(tpl);
						var html = template(json);
						$('.transfer_data').html(html);
					});
				});
				require.async(['/plugins/pager/mypager.css','/plugins/pager/pager'],function(){
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
				        		url:'/member/invest/accountransferList.html?size=10&randomTime='+ (new Date()).getTime()+"&page="+n,
				        		dataType:"json",
				        		success:function(json){
				        			var tpl = require('../../tpl/invest/accounttransfer.tpl');
									var template = Handlebars.compile(tpl);
									var html = template(json);
									$('.transfer_data').html(html);
				        		}
				        	});
							this.selectPage(n); //处理完后可以手动条用selectPage进行页码选中切换
						}
				});
					});
				}else{
					$('.transfer_data').html("<div class='c_nodata'></div>");
					$(".usermain clearfix c_aside_nav").css({height:"450px"});
					$("#kkpager").html('');
				}
			}
		})	
	
});