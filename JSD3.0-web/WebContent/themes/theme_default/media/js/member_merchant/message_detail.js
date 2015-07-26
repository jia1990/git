define(function(require,exports,module){
	require('jquery');
	$.ajax({
		url:'/member/message/box.html?randomTime='+(new Date()).getTime(),
		type:'get',
		dataType:'json',
		success:function(json){
			require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
				require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
				if(json.data.page.pages > 0)
				{
					var tpl = require('../../tpl/member_borrow/message_detail.tpl');
					var template = Handlebars.compile(tpl);
					var html = template(json);
					$(".c_site_list").html(html);
					$(function(){
						var path = $("#imgpath").val();
						$(".c_site_down").toggle(function(){
							if($(this).parent().parent().find(".classflag span").attr("class")=="c_site_noread"){
								var id = $(this).parent().parent().parent().parent().find(".c_info_selected input").val() ;
								var t = $(this) ;
								// 标记已读
								$.ajax({
									url:"/member/message/set.html",
									data:{id:id,type:4},
									type:"post",
									dataType:"json",
									success:function(data){
										if(data.result){
											t.parent().parent().find(".classflag").html('<span class="c_site_read">已读</span>');
										}
									}
								}) ;
							}
							$(this).parent().next().slideDown().show();
							$(this).css({background:"#0697da url("+path+"/images/b_money/down_arrow.png) no-repeat 4px 7px"});
						},function(){
							$(this).parent().next().slideUp().hide();
							$(this).css({background:"#fff url("+path+"/images/b_money/down_arrow.png) no-repeat 4px -15px"});
						})
						
						$(".c_check_title").toggle(function(){
							$(this).parent().next().find(".c_site_down").css({background:"#0697da url("+path+"/images/b_money/down_arrow.png) no-repeat 4px 7px"});
							if($(this).next().children().attr("class")=="c_site_noread"){
								var id = $(this).parent().parent().parent().parent().find(".c_info_selected input").val() ;
								var t = $(this) ;
								// 标记已读
								$.ajax({
									url:"/member/message/set.html",
									data:{id:id,type:4},
									type:"post",
									dataType:"json",
									success:function(data){
										if(data.result){
											t.parent().parent().find(".classflag").html('<span class="c_site_read">已读</span>');
										}
									}
								}) ;
							}
							$(this).parent().next().next().slideDown().show();
						},function(){
							$(this).parent().next().find(".c_site_down").css({background:"#fff url("+path+"/images/b_money/down_arrow.png) no-repeat 4px -15px"});
							$(this).parent().next().next().slideUp().hide();
						}) ;
						
						var flag=true;
						$(".c_info_selected input").prop("checked",false);
						$(".c_user_icon .c_info_selected").click(function(){
							if(flag){
								$(this).css({backgroundPosition:"0 -26px"});
								flag=false;
							}else{
								$(this).css({backgroundPosition:"0 0"});
								flag=true;
							}
						}) ;
						$(".c_borrow").height($(".c_deal_record").height());
					})
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
						        		url:"/member/message/box.html?page="+n,
						        		dataType:"json",
						        		success:function(json){
												var template = Handlebars.compile(tpl);
												var html    = template(json);
												$('.c_site_list').html(html);
												$(function(){
													var path = $("#imgpath").val();
													$(".c_site_down").toggle(function(){
														$(this).parent().next().slideDown().show();
														$(this).css({background:"#0697da url("+path+"/media/images/b_money/down_arrow.png) no-repeat 4px 7px"});
													},function(){
														$(this).parent().next().slideUp().hide();
														$(this).css({background:"#fff url("+path+"/media/images/b_money/down_arrow.png) no-repeat 4px -15px"});
													})
													var flag=true;
													$(".c_user_icon .c_info_selected").click(function(){
														if(flag){
															$(this).css({backgroundPosition:"0 -26px"});
															flag=false;
														}else{
															$(this).css({backgroundPosition:"0 0"});
															flag=true;
														}
													})
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
					$(".c_site_list").html("<div class='c_nodata'> </div>");
					$("#kkpager").html('');
				}
				}) ;
			})
		}
	});
	
	//删除
	$(".del_msg").click(function(){
		if($(".c_info_selected").find("input:checked").length > 0)
		{
			$('#type').val('1'); 
			require.async('jquery.form',function(){
				$('form').ajaxSubmit(function(data){
					if(data.result){
						// 删除效果处理
						// $("#messagelist").find("input:checked").parents("li").animate({left: '+898px'}, 1000).slideUp(300);
						// tip('删除信息成功！');
						window.location.reload();
					}else{
						tip('操作失败！');
					}
				});
			})
		} else {
			tip('请至少选择一条信息！');
		}
	})
	// 标记已读
	$(".c_read_btn").click(function(){
		if($(".c_info_selected").find("input:checked").length > 0)
		{
			$('#type').val('4'); 
			require.async('jquery.form',function(){
				$('form').ajaxSubmit(function(data){
					if(data.result) {
						tip('标记已读成功！');
						var sta = $(".c_info_selected").find("input:checked").parent().parent().next().next(".c_site_check");
						sta.find(".classflag").html('<span class="c_site_read">已读</span>');
					} else {
						tip('操作失败！');
					}
				});
			})
		} else {
			tip('请至少选择一条信息！');
		}
	})
	// 标记未读
	$(".c_noread_btn").click(function(){
		if($(".c_info_selected").find("input:checked").length > 0)
		{
			$('#type').val('3'); 
			require.async('jquery.form',function(){
				$('form').ajaxSubmit(function(data){
					if(data.result)
					{
						tip('标记未读成功！');
						var sta = $(".c_info_selected").find("input:checked").parent().parent().next().next(".c_site_check");
						sta.find(".classflag").html('<span class="c_site_noread">未读</span>');
					}
					else
					{
						tip('操作失败！');
					}
				});
			})
		}
		else
		{
			tip('请至少选择一条信息！');
		}
	})
	
	//  全选
	$(".c_site_info .c_info_selected").click(function(){
		var flag = $(".c_info_selected input").prop("checked") ;
		if(flag){
			$(this).css({backgroundPosition:"0 -26px"});
			$(".c_info_selected input").prop("checked",true);
			$(".c_site_list input[type='checkbox']").prop("checked",true);
			$(".c_info_selected").css({backgroundPosition:"0 -26px"});
		}else{
			$(this).css({backgroundPosition:"0 0"});
			$(".c_info_selected input").prop("checked",false);
			$(".c_site_list input[type='checkbox']").prop("checked",false);
			$(".c_info_selected").css({backgroundPosition:"0 0"});
		}
	})
	//tip提示框
	function tip(content)
	{
		$(".c_instruct_info").animate({opacity: "show"}, 0).html(content).animate({opacity: "hide"}, 2000);
	}
});