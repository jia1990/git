define(function(require,exports,module){

	require('jquery');
	require('alert');
	
	function ckeckClick(){
		$(".check").unbind("click");
		$(".check").click(function(){
			if($(this).attr("checked") == "checked"){
				$(this).val(1);
			}else{
				$(this).val(0);
			}
		});
		$("#uncSubmit").unbind("click");
		$("#uncSubmit").click(function(){
			//表单验证
			require.async('/plugins/jquery-validation-1.13.0/jquery.validate',function(){
				require.async('/plugins/jquery-validation-1.13.0/additional-methods',function(){
					require.async('jquery.form',function(){
						$("#noticeConfigForm").ajaxSubmit(function(data){
							if(data.result == true)
							{
								$.alert(data.msg,"提示",function(){location.reload()},true);
							} else {
								$.alert(data.msg,"提示",function(){location.reload()},true);
								/*  $.alert(data.msg,"提示",function(){},true);*/
							}
						});
					})
				})
			})
		})
	}
	$.ajax({
		url:'/member/message/userNoticeTypeList.html?type=2&randomTime='+(new Date()).getTime(),
		type:'get',
		dataType:'json',
		success:function(json){
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
				var tpl = require('../../tpl/member/message_config.tpl');
				var template = Handlebars.compile(tpl);
				var html = template(json);
				$("#messagelist").html(html);
				ckeckClick();
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
						        		url:"/member/message/userNoticeTypeList.html?page="+n + "&type=2&randomTime="+(new Date()).getTime(),
						        		dataType:"json",
						        		success:function(json){
												var template = Handlebars.compile(tpl);
												var html    = template(json);
												$('#messagelist').html(html);
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
				})
			})

			
		}
	});
});