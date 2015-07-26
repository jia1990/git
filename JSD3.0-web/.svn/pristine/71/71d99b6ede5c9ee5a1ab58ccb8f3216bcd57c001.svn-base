// // JSDP-131 SXY start
define(function(require,exports,modlue){
	
	require('jquery');
		
		//获取当前类别
		var arcType = $(".arcList").attr("data-val");
		//文章列表
		$.ajax({
			url:"/article/list.html?nid="+arcType,
			type:"get",
			dataType:"json",
			success:function(data){
			
				require.async('/plugins/handlebars-v1.3.0/handlebars-v1.3.0',function(){
					require.async('/plugins/handlebars-v1.3.0/transFormatJson',function(){
						var tpl = require('/themes/theme_default/media/tpl/riskList.tpl');//载入tpl模板
						var template = Handlebars.compile(tpl);
						var html = template(data);
						
						$(".c_notice_list_part_risk").html(html);
						//alert($(".c_notice_list_part1").has("i").html());
						
						for(var i = 0; i < data.data.list.length;i++){
							if(i >= 3){
								var li = $(".c_notice_list_part_risk").find("li").eq(i).find("i");
								li.css({display:"none"});
							}
						}
						bindPage(data);
						bindevent();
					});
				});
				
			}
			
		});
		
		function bindevent(){
			//查看更多限制显示数量
			var liLength=$(".c_notice_list li").length;
				$(".c_look_more span").click(function(){
					if(liLength<10){
						$(".c_notice_list ul").css({height:"770px"});
					}else{
						$(".c_notice_list ul").css({height:77*liLength+"px"});
						$(".c_artical_end").show();
					}
			})
			//资金托管弹窗
			$(window).resize(function(){
				$(".c_risk_bj").height($("body").height());
				$(".c_report_detail").css({left:($(window).width()-$(".c_report_detail").outerWidth())/2+"px",top:($(window).height()-$(".c_report_detail").outerHeight())/2+"px"});
			})
			$(window).resize();
			$(".c_risk_close").click(function(){
				$(".c_risk_bj").hide();
				$(".c_report_detail").hide();
			})
			// 1===点击标题弹窗
			$(".c_notice_list ul li a").click(function(){
				
				var index=$(this).index(".c_notice_list ul li a");
				//alert(index);
				// 将原数据清除，避免重复
				$(".riskPic li").remove();
				
				$(".c_risk_bj").show();
				$(".c_report_detail").eq(index).show().siblings().hide();
				//alert($(this).parent().attr("data-id"));
				
				var dataId = $(this).parent().attr("data-id");
				// 开始查询图片数据
				searchArticlePic(dataId);
				
			})
			
			// 查询对应图片
			function searchArticlePic(dataId){

				$.ajax({
					type : "post",
					url : "/article/riskDetailPic.html?id="+dataId,
					data : {
						id : dataId
					},
					// 请求成功后的回调函数有两个参数
					success : function(data) {
						var obj = eval(data);
						var adminurl = $("#adminurl").val();
						
						for(var i=0;i<obj.length;i++){
							//$(".riskPic").append("<li class='picdata' style='z-index:10'><img src='http://localhost:83"+obj[i].picUrl+"' title='"+obj[i].title+"'></li>");
							$(".riskPic").append("<li class='picdata' style='z-index:10'><img src='"+adminurl+obj[i].picUrl+"' title='"+obj[i].title+"'></li>");
							
							// 如果仅一张图片，则不显示左右方向
							if(obj.length <= 1){
								$(".c_risk_left").hide();
								$(".c_risk_right").hide();
							}else{
								$(".c_risk_left").show();
								$(".c_risk_right").show();
							}
							
							// 备注：每条风险保证金至少有一张图片
						}
						
					}
				});
				
			}
			
			
			
			//托管报告左右滑动
			$(".c_risk_right").click(function(){
				var c_pop_list=$(this).siblings("ul");
				if (!(c_pop_list.is(":animated"))) {
					if(c_pop_list.position().left<=-(c_pop_list.find("li").outerWidth())*(c_pop_list.find("li").length-1)){
					}else{
						c_pop_list.animate({left:c_pop_list.position().left-(c_pop_list.find("li").outerWidth())+"px"},600);
					}
				}
			})
			$(".c_risk_left").click(function(){
				var c_pop_list=$(this).siblings("ul");
				if (!(c_pop_list.is(":animated"))) {
					if(c_pop_list.position().left>=0){
					}else{
						c_pop_list.animate({left:c_pop_list.position().left+(c_pop_list.find("li").outerWidth())+"px"},600);
					}
				}
			})
			
		}
		
		function bindPage(data){
			//分页插件
			if(data.data.page.pages > 0)
			{
				require.async(['/plugins/pager/pager.css','/plugins/pager/pager'],function(){
					kkpager.generPageHtml({
							pno : data.data.page.currentPage,//当前页码
							total : data.data.page.pages,//总页码
							totalRecords : data.data.page.total,//总数据条数
							isShowFirstPageBtn	: false, 
							isShowLastPageBtn	: false, 
							isShowTotalPage 	: false, 
							isShowTotalRecords 	: false, 
							isGoPage 			: false,
							lang:{
								prePageText				: '上一页',
								nextPageText			: '下一页'
							},
							mode:'click',//click模式匹配getHref 和 click
							click:function(n,total,totalRecords){
					        	$.ajax({
					        		type:"get",
					        		url:"/article/list.html?nid="+arcType+"&page="+n,
					        		dataType:"json",//这个必不可少，如果缺少，导致传回来的不是json格式
					        		success:function(json){
					        			require.async(['/plugins/handlebars-v1.3.0/handlebars-v1.3.0.js','/plugins/handlebars-v1.3.0/transFormatJson'],function(){
											var tpl = require('/themes/theme_default/media/tpl/riskList.tpl');
											var template = Handlebars.compile(tpl);
											var html    = template(json);
											$(".c_notice_list_part_risk").html(html);
											bindevent();
										});
					        		}
					        	});
								this.selectPage(n); //处理完后可以手动条用selectPage进行页码选中切换
							}
					});
				});
			}else{
				$("..c_notice_list ul").css("display","none");
				$("#kkpager").html("<div style='width:72px;margin:260px auto 0;'><img src='/themes/theme_default/images/no_data.png'/></div>");
			}
			
			
		}
		
		
})