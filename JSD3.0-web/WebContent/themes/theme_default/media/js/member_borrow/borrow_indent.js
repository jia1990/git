define(function(require,exports,module){
	require('jquery');
	var typeVal = $("#typeVal").val();  // 宝宝类型 
	var statusVal = $("#status li.y_RinseChoose_conClick").attr("data-val");  // 标状态
	var timeSearchVal = $("#timeSearch li.y_RinseChoose_conClick").attr("data-val"); //  标期限
	$(".y-re-stage-ul2-div .shdz-yys").hover(function(){
		$(this).find(".y_remark_info").show();
	},function(){
		$(this).find(".y_remark_info").hide();
	})
	for(i=0;i<$(".y-re-stage-ul2 li").length;i++){
		if(i%2!=0){
			$($(".y-re-stage-ul2 li")[i]).css("background","#f5f5f5");
		}
	}
	var tpl = require('../../tpl/member_borrow/borrowIndent.tpl');//载入tpl模板

	var loading = "type="+typeVal+"&timeSearch="+timeSearchVal+"&status="+statusVal;
	ajaxUrl(loading);//初始化调用
	//期限搜索
	$("#timeSearch li").click(function(){
		var param = "type="+$("#typeVal").val()+"&timeSearch="+$(this).data("val")+"&status="+$("#status li.y_RinseChoose_conClick").attr("data-val");
		ajaxUrl(param);
	});
	
	//状态搜索
	$("#status li").click(function(){
		var param = "type="+$("#typeVal").val()+"&timeSearch="+$("#timeSearch li.y_RinseChoose_conClick").data("val")+"&status="+$(this).attr("data-val");
		ajaxUrl(param);
	});
	//具体时间收索
	$(".c_recharge_sear").click(function(){
		
		
	})
	var param0;
	//日期范围搜索
	$(".c_recharge_sear").click(function(){
		if( $(".sInput").val() == undefined || $(".sInput").val() == "")
		{
			var param0 = "type="+$("#typeVal").val() + "&timeSearch=" + $(".c_recharge_sear").data("val");
		}
		else
		{
			var param0 = "type="+$("#typeVal").val() + "&timeSearch =" + $(".c_recharge_sear").data("val");
		}
		if($('#shortTime').is(":visible"))
		{
			param0 += "&time="+$('.c_date_range li.c_recharge_this').data("val");
		}
		else if($('.c_recharge_limit').is(":visible"))
		{
			param0 += "&startTime="+$('#startTime').val()+"&endTime="+$('#endTime').val();
		}
		ajaxUrl(param0,tpl);
	});
	
	//通用显示函数    fgq 3.9
	function ajaxUrl(param){
		$.ajax({
		type:'get',
		url:'/member_borrow/borrow/indentDetailList.html?page=1&rows=5&'+param+'&randomTime='+(new Date()).getTime(),
		dataType:'json',
		success:function(json){

			if(json.data.list.length>0){
			//分页插件
			if(json.data.page.pages > 0){	
				require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
					require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
						var tpl = require('../../tpl/member_borrow/borrowIndent.tpl');
						var template = Handlebars.compile(tpl);
						var html = template(json);
						$('.y-re-stage-ul2').html(html);
						$(".y-re-stage-ul2-div .shdz-yys").hover(function(){
							$(this).find(".y_remark_info").show();
						},function(){
							$(this).find(".y_remark_info").hide();
						})
						for(i=0;i<$(".y-re-stage-ul2 li").length;i++){
							if(i%2!=0){
								$($(".y-re-stage-ul2 li")[i]).css("background","#f5f5f5");
							}
						}
					    
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
							mode:'click',//click模式匹配getHref 和 click
							click:function(n,total,totalRecords){
					        	$.ajax({
					        		type:"get",
					        		url:"/member_borrow/borrow/indentDetailList.html?"+"&randomTime="+ (new Date()).getTime()+"&page="+n,
					        		dataType:"json",//这个必不可少，如果缺少，导致传回来的不是json格式
					        		success:function(json){
					        			require.async(['/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js','/plugins/handlebars-v1.3.0/transFormatJson'],function(){
											var tpl = require('../../tpl/member_borrow/borrowIndent.tpl');
											var template = Handlebars.compile(tpl);
											var html    = template(json);
											$('.y-re-stage-ul2').html(html);
										});
					        		}
					        	});
								this.selectPage(n); //处理完后可以手动条用selectPage进行页码选中切换
							}
						});
					});
				}
			
			}else{
				  /*775 fgq 2015-03-7 start
			    775 fgq 2015-03-7 end
			 */
				$('.y-re-stage-ul2').html("");
				$("#kkpager").html("<div style='width:72px;margin:80px auto 0;'><img src='/themes/theme_default/images/no_data.png'/></div>");
			}
			}
		})	
	}
	
		
		
		// store
	 $(function(){
	    $(".c_recharge ul li").click(function(){
	        $(this).parent("ul").find("li").removeClass("y_RinseChoose_conClick");
	        $(this).addClass("y_RinseChoose_conClick");
	    })
	       for(i=0;i<$(".y_RinseChoose_con").length;i++){
	        if(i>2){
	            $($(".y_RinseChoose_con")[i]).addClass("y_rinse_hides");
	        }
	    }
	    $(".y_arrows").toggle(function(){
		    $(this).addClass("y_up");
		    $(".y_rinse_hides").slideToggle();
		},
		 function () {
		    $(this).removeClass("y_up");
		    $(".y_rinse_hides").slideToggle();
		    }
		);
	    for(i=0;i<=$(".c_parlex_projects dd").length;i++){
	        if(i%3==0){
	            $($(".c_parlex_projects dd")[i]).css({marginLeft:"0"});
	        }
	    }
	    for(i=0;i<=$(".y_parlex_project dd").length;i++){
	    	if(i%4==0){
	    		$($(".y_parlex_project dd")[i]).css({marginLeft:"0"});
	    	}
	    }
	    $(".y_PageNums").width(($(".y_PageNums li").length-2)*39+79*2+"px");
	    $(".y_PageNums li.y_linums").click(function(){
	        $(".y_PageNums li.y_linums").removeClass("y_PageNumsclick");
	        $(this).addClass("y_PageNumsclick");
	    })
	 })
// store  end
	 
	 //日期
	$(".c_recharge ul li").click(function(){
		$(this).addClass("c_recharge_this").siblings().removeClass("c_recharge_this");
	})
	$(".c_date_range span").click(function(){
		$(".c_date_range").hide().siblings(".c_recharge_limit").show();
	})
	$(".c_recharge_limit span").click(function(){
		$(".c_recharge_limit").hide().siblings(".c_date_range").show();
	})
	
});