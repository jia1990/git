define(function(require,exports,module){
    require('jquery');
  
    	    var tpl = require('../../tpl/member/memberLog.tpl');//载入tpl模板
    	    $.ajax({
    			type:'get',
    			url:'/member/member/memberLogList.html?randomTime=' + (new Date()).getTime(),
    			dataType:'json',
    			success:function(json){
    				//异步加载数据
    				require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js',function(){
    					require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
    						var template = Handlebars.compile(tpl);
    						var html = template(json);
    						$('.c_member_record').html(html);
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
    						        		url:'/member/member/memberLogList.html?randomTime='+ (new Date()).getTime()+"&page="+n,
    						        		dataType:"json",
    						        		success:function(json){
    												var template = Handlebars.compile(tpl);
    												var html    = template(json);
    												$('.c_member_record').html(html);
    						        		}
    						        	});
    									this.selectPage(n); //处理完后可以手动条用selectPage进行页码选中切换
    								}
    						});
    					});
    				}//end if
    				else
    				{
    					$("#kkpager").html("<div style='width:72px;margin:80px auto 0;'><img src='/themes/theme_default/images/no_data.png'/></div>");
    				}
    				
    			}//success
    			})	//end ajax
    	   
});