define(function(require,exports,module){
	 require('jquery'); 
	 require('alert');
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
					require.async(['/plugins/layer-v1.8.4/skin/layer.css','/plugins/layer-v1.8.4/layer.min'],function(){
					var template = Handlebars.compile(tpl);
					var html = template(json);
					$('.record_conss').html(html);	
					$("#kkpager").html("");
					//兑换VIP包
					$(".vipConvertRule").click(function(){
					//邀请人未使用总数	
					var unUsedInvite = $("#unUsedInvite").data("val");
					//兑换人数
					var inviteNumber = $(this).data("val");
					//vip 等级
					var vipLevel = $(this).parent().parent().find("dd").eq(2).data("val");
					//有效月份
					var vipValidMonth = $(this).parent().parent().find("dd").eq(1).data("val");
								
					if(unUsedInvite<inviteNumber){
						//layer.msg("邀请人人数小于可使用兑换人数!", 2, -4);
						$.alert("邀请人人数小于可使用兑换人数!","提示",function(){},true);
					}else {	
						$.ajax({
							type:'get',
							url:'/member/invite/invitedUserConvertVip.html?randomTime=' + (new Date()).getTime(),
							dataType:'json',
							data:{
								vipLevel:vipLevel,
								vipValidMonth:vipValidMonth,
								vipConvertUsedPeople:inviteNumber
							},
							success:function(json){	
								if(json.result==true){	
									var tpl = require('../../tpl/member/inviteVipRule.tpl');//载入tpl模板
								   	  require.async(['./showTableVipConvertRule'],function(showTable){
								   	  showTable.ajaxUrl('/member/invite/vipConvertRule.html?randomTime='+(new Date()).getTime(),tpl);
									//layer.msg("兑换成功!", 1, -2);	
									$.alert("兑换成功!","提示",function(){},true);
								   	});
								}	
							}
						});	
					}
					});
					});
				});
			});
		
			/*//分页插件
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
											$('.record_conss').html(html);
											
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
			}*/
			
		}
		})	
	}
	exports.ajaxUrl = ajaxUrl;
});